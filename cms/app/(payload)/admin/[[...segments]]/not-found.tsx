import config from "@payload-config";
import { NotFoundPage } from "@payloadcms/next/views";

import { importMap } from "../importMap";

type NotFoundProps = {
  params: Promise<{ segments: string[] }>;
  searchParams: Promise<Record<string, string | string[]>>;
};

export default function AdminNotFound({ params, searchParams }: NotFoundProps) {
  return NotFoundPage({ config, importMap, params, searchParams });
}
