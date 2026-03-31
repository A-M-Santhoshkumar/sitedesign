
import { pageMeta } from "../../data/pageMeta";
import JsonLd from "../../components/JsonLd";
import { schemas } from "../../data/schemaData";
import ServiceClient from "./ServiceClient"; // ← client part

export const metadata = {
  title: pageMeta.service.title,
  description: pageMeta.service.description,
  keywords: pageMeta.service.keywords,
  authors: [{ name: "Santhosh Kumar" }],
  robots: { index: true, follow: true },
  alternates: { canonical: pageMeta.service.url },
  openGraph: {
    title: pageMeta.service.title,
    description: pageMeta.service.description,
    url: pageMeta.service.url,
    type: "website",
    images: [{ url: "https://sitedesign.in/preview.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageMeta.service.title,
    description: pageMeta.service.description,
    images: ["https://sitedesign.in/preview.jpg"],
  },
};

export default function ServicePage() {
  return (
    <>
      <JsonLd data={schemas.service} />  {/* ✅ works here */}
      <ServiceClient />                  {/* ✅ animations live here */}
    </>
  );
}