import HeroSection from "../components/homecomponents/HeroSection";
import Section1 from "../components/homecomponents/Section1";
import Section2 from "../components/homecomponents/Section2";
import Section3 from "../components/homecomponents/Section3";
import Section4 from "../components/homecomponents/Section4";
import Section5 from "../components/homecomponents/Section5";
import Section6 from "../components/homecomponents/Section6";

import { pageMeta } from "../data/pageMeta";

// ✅ CENTRALIZED SEO
export const metadata = {
  title: pageMeta.home.title,
  description: pageMeta.home.description,
  keywords: pageMeta.home.keywords,

  authors: [{ name: "Santhosh Kumar" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: pageMeta.home.url,
  },

  openGraph: {
    title: pageMeta.home.title,
    description: pageMeta.home.description,
    url: pageMeta.home.url,
    type: "website",
    images: [
      {
        url: "https://sitedesign.in/preview.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: pageMeta.home.title,
    description: pageMeta.home.description,
    images: ["https://sitedesign.in/preview.jpg"],
  },

  verification: {
    google: "g0KYWMd-R4vGsd6NCQTpBhaGalDlTHzO4ogfH0i4QyA",
  },
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />

      {/* ✅ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Santhosh Kumar - Freelance Digital Marketer",
            url: pageMeta.home.url,
            image: "https://sitedesign.in/preview.jpg",
            description: pageMeta.home.description,
            areaServed: {
              "@type": "Place",
              name: "Coimbatore",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Coimbatore",
              addressCountry: "India",
            },
            sameAs: [
              "https://www.linkedin.com/in/santhoshkumar-a-m-85a46627a/",
            ],
          }),
        }}
      />
    </div>
  );
}