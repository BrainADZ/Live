import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const allowedExtensions = [
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".svg",
  ".avif",
];

function formatBrandName(fileName: string) {
  const nameWithoutExtension = fileName.replace(/\.[^/.]+$/, "");

  return nameWithoutExtension
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

export async function GET() {
  try {
    const brandFolderPath = path.join(process.cwd(), "public", "brand");

    const files = await fs.readdir(brandFolderPath, {
      withFileTypes: true,
    });

    const brands = files
      .filter((file) => {
        if (!file.isFile()) return false;

        const extension = path.extname(file.name).toLowerCase();

        return allowedExtensions.includes(extension);
      })
      .sort((a, b) =>
        a.name.localeCompare(b.name, undefined, {
          numeric: true,
          sensitivity: "base",
        }),
      )
      .map((file) => ({
        name: formatBrandName(file.name),
        logo: `/brand/${encodeURIComponent(file.name)}`,
      }));

    return NextResponse.json({
      success: true,
      brands,
    });
  } catch (error) {
    console.error("Unable to read brand logos:", error);

    return NextResponse.json(
      {
        success: false,
        brands: [],
        message: "Unable to load brand logos.",
      },
      {
        status: 500,
      },
    );
  }
}