// app/sitemap.ts

import { blogData } from "@/data/blogData";

export default function sitemap() {
  const baseUrl = "https://www.sitedesign.in";

  const staticPages = [
    "",
    "/about",
    "/projects",
    "/contact",
    "/blog",
  ];

  const staticUrls = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const blogUrls = blogData.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(),
  }));

  return [...staticUrls, ...blogUrls];
}