import { APIError, type Access, type CollectionConfig } from "payload";

type CMSUser = {
  id: number | string;
  role?: "admin" | "editor" | "seo" | null;
};

const isAdmin = (user: unknown): boolean => {
  const cmsUser = user as CMSUser | null;
  return Boolean(cmsUser && (!cmsUser.role || cmsUser.role === "admin"));
};

const adminOnly: Access = ({ req }) => isAdmin(req.user);
const authenticated: Access = ({ req }) => Boolean(req.user);

const authenticatedOrFirstUser: Access = async ({ req }) => {
  if (req.user) {
    return isAdmin(req.user);
  }

  const { totalDocs } = await req.payload.count({
    collection: "users",
    overrideAccess: true,
  });

  return totalDocs === 0;
};

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    defaultColumns: ["name", "email", "updatedAt"],
    useAsTitle: "email",
  },
  access: {
    create: authenticatedOrFirstUser,
    delete: adminOnly,
    read: authenticated,
    update: adminOnly,
  },
  auth: true,
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      maxLength: 120,
    },
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "editor",
      options: [
        { label: "Administrator", value: "admin" },
        { label: "Content Editor", value: "editor" },
        { label: "SEO Manager", value: "seo" },
      ],
      access: {
        create: ({ req }) => !req.user || isAdmin(req.user),
        update: ({ req }) => isAdmin(req.user),
      },
      admin: {
        description:
          "Administrators manage users; editors and SEO managers manage website content.",
        position: "sidebar",
      },
    },
  ],
  hooks: {
    beforeChange: [
      async ({ data, operation, req }) => {
        if (operation !== "create") {
          return data;
        }

        const { totalDocs } = await req.payload.count({
          collection: "users",
          overrideAccess: true,
        });

        return totalDocs === 0 ? { ...data, role: "admin" } : data;
      },
    ],
    beforeDelete: [
      async ({ id, req }) => {
        const user = await req.payload.findByID({
          id,
          collection: "users",
          overrideAccess: true,
        });

        if (user.role && user.role !== "admin") {
          return;
        }

        const { totalDocs } = await req.payload.count({
          collection: "users",
          overrideAccess: true,
          where: {
            or: [
              { role: { equals: "admin" } },
              { role: { exists: false } },
            ],
          },
        });

        if (totalDocs <= 1) {
          throw new APIError(
            "The last CMS administrator cannot be deleted or demoted.",
            400,
          );
        }
      },
    ],
  },
};
