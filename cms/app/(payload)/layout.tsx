import type { ServerFunctionClient } from "payload";
import type { ReactNode } from "react";

import "@payloadcms/next/css";
import config from "@payload-config";
import {
  handleServerFunctions,
  RootLayout,
} from "@payloadcms/next/layouts";
import { AdminEnhancements } from "../../components/AdminEnhancements";

import { importMap } from "./admin/importMap";
import "./custom.css";

const serverFunction: ServerFunctionClient = async (args) => {
  "use server";

  return handleServerFunctions({ ...args, config, importMap });
};

export default function PayloadLayout({ children }: { children: ReactNode }) {
  return (
    <RootLayout
      config={config}
      importMap={importMap}
      serverFunction={serverFunction}
    >
      <AdminEnhancements />
      {children}
    </RootLayout>
  );
}
