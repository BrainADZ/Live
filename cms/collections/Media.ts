import path from "node:path";
import { fileURLToPath } from "node:url";

import type { CollectionConfig } from "payload";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    defaultColumns: ["filename", "alt", "updatedAt"],
    useAsTitle: "alt",
  },
  access: {
    create: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      maxLength: 240,
    },
    {
      name: "caption",
      type: "textarea",
      maxLength: 500,
    },
  ],
  upload: {
    staticDir: path.resolve(dirname, "../media"),
    focalPoint: true,
    mimeTypes: ["image/*"],
    imageSizes: [
      { name: "thumbnail", width: 480, height: 320, position: "centre" },
      { name: "card", width: 960, height: 640, position: "centre" },
      { name: "og", width: 1200, height: 630, position: "centre" }
    ]
  }
};
