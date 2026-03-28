import { blogData } from "@/data/blogData";
import { notFound } from "next/navigation";
import Image from "next/image";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const baseUrl = "https://www.sitedesign.in";

// ✅ 1. SEO METADATA
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const blog = blogData.find((item) => item.slug === slug);

  if (!blog) return {};

  const url = `${baseUrl}/blog/${blog.slug}`;
  const image =
    typeof blog.image === "object" ? blog.image.src : blog.image;

return {
  title: blog.title,
  description: blog.description,
  keywords: blog.keywords,

  authors: [{ name: "Santhosh Kumar" }],

  robots: {
    index: true,
    follow: true,
  },

  category: "Digital Marketing",

  alternates: {
    canonical: url,
  },

  openGraph: {
    title: blog.title,
    description: blog.description,
    url,
    siteName: "SiteDesign",
    type: "article",
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: blog.title,
    description: blog.description,
    images: [image],
  },
};
}


export async function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: blog.slug,
  }));
}


export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const blog = blogData.find((item) => item.slug === slug);

  if (!blog) return notFound();

  const url = `${baseUrl}/blog/${blog.slug}`;
  const image =
    typeof blog.image === "object" ? blog.image.src : blog.image;

  return (
    <article className="bg-white dark:bg-black py-12">
      <div className="max-w-4xl mx-auto px-4">

    
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: blog.title,
              description: blog.description,
              image: image,
              datePublished: "2026-03-28",
              dateModified: "2026-03-28",
              author: {
                "@type": "Person",
                name: "Santhosh Kumar",
              },
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
                "@id": url,
              },

              
              mainEntity: blog.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }}
        />

     
        <h1 className="text-3xl md:text-5xl font-bold mb-6 dark:text-white">
          {blog.title}
        </h1>

    
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          {blog.heroText}
        </p>

       
        <Image
          src={image}
          alt={blog.title}
          width={1200}
          height={600}
          className="rounded-xl mb-10 w-full h-auto"
          priority
        />

     
        <div className="space-y-10">
          {blog.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">
                {index + 1}. {section.title}
              </h2>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {section.content}
              </p>
            </div>
          ))}
        </div>

     
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {blog.faq.map((item, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg dark:text-white">
                  {item.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </article>
  );
}