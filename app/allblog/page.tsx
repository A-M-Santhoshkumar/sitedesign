import Link from "next/link";
import Image from "next/image";
import { blogData } from "@/data/blogData";
import Title from "../../components/Title";

export default function Blog() {
  const allBlogs = [...blogData].reverse(); // newest first

  return (
    <section className="py-16 dark:bg-[#111]">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <Title
            mainTitle={
              <>
                Latest{" "}
                <span className="text-black dark:bg-gradient-to-r dark:from-pink-500 dark:to-yellow-400 dark:bg-clip-text dark:text-transparent">
                  Blog Articles
                </span>
              </>
            }
          />

          <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-xl mx-auto">
            Learn about website design, digital marketing, and advertising
            strategies to grow your business online.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {allBlogs.map((blog, index) => (
            <article
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <Link href={`/blog/${blog.slug}`}>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={500}
                  height={300}
                  style={{ width: "100%", height: "auto" }}
                  loading={index < 4 ? "eager" : "lazy"}
                  className="w-full h-48 object-cover"
                />
              </Link>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 dark:text-white line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {blog.description}
                </p>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-yellow-600 hover:text-yellow-700 dark:text-yellow-500 dark:hover:text-yellow-400 group"
                >
                  Read More
                  <span className="ml-2 group-hover:translate-x-1 transition">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}