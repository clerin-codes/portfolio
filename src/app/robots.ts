import type { MetadataRoute } from "next";
import { LOCAL_URL, SITE_URL } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_URL ?? LOCAL_URL;
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
