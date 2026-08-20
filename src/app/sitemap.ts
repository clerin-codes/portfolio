import type { MetadataRoute } from "next";
import { LOCAL_URL, SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE_URL ?? LOCAL_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
