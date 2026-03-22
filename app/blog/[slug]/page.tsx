import { blogData } from "@/data/blogData";
import { notFound } from "next/navigation";
import Image from "next/image";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPage({ params }: Props) {
  // ✅ IMPORTANT: await params
  const { slug } = await params;

  const blog = blogData.find(
    (item) =>
      item.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!blog) return notFound();

  return (
    <section className="py-12 bg-white dark:bg-black">
      <div className="container mx-auto px-4">

        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center dark:text-white">
          {blog.title}
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
          {blog.heroText}
        </p>

        <Image
          src={blog.image}
          alt={blog.title}
          className="mx-auto rounded-xl mb-12"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {blog.sections.map((section, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl"
            >
              <h2 className="text-xl font-semibold mb-3 dark:text-white">
                {section.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {section.content}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}