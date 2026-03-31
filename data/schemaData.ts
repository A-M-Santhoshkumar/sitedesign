// data/schemaData.ts

const baseUrl = "https://www.sitedesign.in";

export const schemas = {

  // ✅ Home page
  home: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Santhosh Kumar - Freelance Digital Marketer",
    url: baseUrl,
    image: `${baseUrl}/preview.jpg`,
    description: "Freelance Digital Marketer in Coimbatore offering Google Ads, SEO & Website Design.",
    areaServed: { "@type": "Place", name: "Coimbatore" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Coimbatore",
      addressCountry: "India",
    },
    sameAs: [
      "https://www.linkedin.com/in/santhoshkumar-a-m-85a46627a/",
    ],
  },

  // ✅ About page
  about: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Santhosh Kumar",
    jobTitle: "Freelance Digital Marketer & Web Developer",
    url: `${baseUrl}/about`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Coimbatore",
      addressCountry: "India",
    },
    sameAs: [
      "https://www.linkedin.com/in/santhoshkumar-a-m-85a46627a/",
    ],
  },

  // ✅ Service page
  service: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digital Marketing Services",
    provider: {
      "@type": "Person",
      name: "Santhosh Kumar",
    },
    areaServed: { "@type": "Place", name: "Coimbatore" },
    url: `${baseUrl}/service`,
    serviceType: [
      "SEO",
      "Google Ads",
      "Meta Ads",
      "Website Design",
      "Social Media Marketing",
    ],
  },

  // ✅ Projects page
  projects: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Our Projects",
    url: `${baseUrl}/projects`,
    description: "Portfolio of digital marketing and website design projects in Coimbatore.",
  },

  // ✅ Contact page
  contact: {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Santhosh Kumar",
    url: `${baseUrl}/contact`,
    description: "Contact us for digital marketing services in Coimbatore.",
  },
};

// ✅ Blog schema — dynamic per blog post
export function getBlogSchema(blog: {
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  updatedAt?: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    image: blog.image,
    datePublished: blog.publishedAt,
    dateModified: blog.updatedAt ?? blog.publishedAt,
    author: { "@type": "Person", name: "Santhosh Kumar" },
    publisher: {
      "@type": "Organization",
      name: "SiteDesign",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${blog.slug}`,
    },
  };
}

// ✅ FAQ schema — dynamic per blog post
export function getFaqSchema(faq: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}