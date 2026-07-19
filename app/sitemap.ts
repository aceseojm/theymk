import { MetadataRoute } from "next";

const base = "https://the-ymk.com";
const now = new Date();

const audienceIds = ["agri-b2b", "golf", "oem", "export", "smartfarm", "home"];
const productIds = ["humus-premium", "amino-gold"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/why`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/products/ingredients`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ...productIds.map((id) => ({
      url: `${base}/products/${id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${base}/audiences`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...audienceIds.map((id) => ({
      url: `${base}/audiences/${id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${base}/results`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/trust`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
