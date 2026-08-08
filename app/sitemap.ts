import type { MetadataRoute } from "next";
const routes = ["", "/politica-de-privacidade", "/termos-de-uso", "/garantia-e-envio"];
export default function sitemap(): MetadataRoute.Sitemap { return routes.map((path, index) => ({ url: `https://airdrone.com.br${path}`, lastModified: new Date("2026-08-08"), changeFrequency: index === 0 ? "monthly" : "yearly", priority: index === 0 ? 1 : 0.3 })); }
