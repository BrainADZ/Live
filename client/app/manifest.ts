import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BrainADZ Live",
    short_name: "BrainADZ Live",
    description:
      "Software, cloud, business platforms, and digital signage solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#193175",
    icons: [
      {
        src: "/logos/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
