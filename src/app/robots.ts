// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://dietkupwara.in";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api"], // block admin & API routes if you have them
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
