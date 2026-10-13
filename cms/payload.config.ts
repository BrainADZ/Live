import path from "node:path";
import { fileURLToPath } from "node:url";

import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
import { EXPERIMENTAL_TableFeature, FixedToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { redirectsPlugin } from "@payloadcms/plugin-redirects";
import { buildConfig } from "payload";
import sharp from "sharp";

import { authenticated } from "./access/contentAccess";
import { BlogPosts } from "./collections/BlogPosts";
import { BlogCategories } from "./collections/BlogCategories";
import { CaseStudies } from "./collections/CaseStudies";
import { CaseStudyCategories } from "./collections/CaseStudyCategories";
import { Media } from "./collections/Media";
import { Users } from "./collections/Users";
import { Tags } from "./collections/Tags";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const serverURL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3001";
const clientURL = process.env.CLIENT_URL || "http://localhost:3000";
const allowedOrigins = Array.from(
  new Set([
    serverURL,
    clientURL,
    "https://brainadz.marketing",
    "https://www.brainadz.marketing",
    "https://brainadzlive.com",
    "https://www.brainadzlive.com",
  ]),
);
const smtpUser = process.env.SMTP_USER;
const smtpPassword = process.env.SMTP_PASSWORD;

const email =
  smtpUser && smtpPassword
    ? nodemailerAdapter({
        defaultFromAddress: process.env.SMTP_FROM_ADDRESS || smtpUser,
        defaultFromName: process.env.SMTP_FROM_NAME || "BrainADZ CMS",
        transportOptions: {
          auth: {
            pass: smtpPassword,
            user: smtpUser,
          },
          host: process.env.SMTP_HOST || "smtp.gmail.com",
          port: Number(process.env.SMTP_PORT || 465),
          secure: process.env.SMTP_SECURE !== "false",
        },
      })
    : undefined;

export default buildConfig({
  admin: {
    components: {
      afterNavLinks: ["/components/LogoutNavLink#LogoutNavLink"],
      beforeLogin: ["/components/LoginWelcome#LoginWelcome"],
      graphics: {
        Icon: "/components/BrainADZBrand#BrainADZIcon",
        Logo: "/components/BrainADZBrand#BrainADZLogo",
      },
    },
    importMap: { baseDir: dirname },
    meta: {
      titleSuffix: " | BrainADZ Content Studio",
    },
    user: Users.slug,
  },
  collections: [
    Users,
    Media,
    BlogCategories,
    CaseStudyCategories,
    Tags,
    BlogPosts,
    CaseStudies,
  ],
  plugins: [
    redirectsPlugin({
      collections: ["blog-posts", "case-studies"],
      redirectTypes: ["301", "302"],
      overrides: {
        admin: {
          defaultColumns: ["from", "to", "type", "updatedAt"],
          group: "SEO",
        },
        access: {
          create: authenticated,
          delete: authenticated,
          read: () => true,
          update: authenticated,
        },
      },
    }),
  ],
  cors: allowedOrigins,
  csrf: [serverURL],
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || "",
  }),
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      FixedToolbarFeature(),
      EXPERIMENTAL_TableFeature(),
    ],
  }),
  email,
  secret: process.env.PAYLOAD_SECRET || "",
  serverURL,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
