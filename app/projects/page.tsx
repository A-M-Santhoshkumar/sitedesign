import { pageMeta } from "@/data/pageMeta";
import Title from "../../components/Title";
import ProjectsList from "./ProjectsList"; // client component

export const metadata = {
  title: pageMeta.projects.title,
  description: pageMeta.projects.description,
  keywords: pageMeta.projects.keywords,
  alternates: {
    canonical: pageMeta.projects.url,
  },
};

export default function ProjectsPage() {
  return (
    <section className="py-16 px-4 md:px-20 bg-gray-50 layout-wrapper">
      <Title
        mainTitle={
          <>
            Our{" "}
            <span className="text-black dark:bg-gradient-to-r dark:from-pink-500 dark:to-yellow-400 dark:bg-clip-text dark:text-transparent">
              Projects
            </span>
          </>
        }
        mainTag="h1"
        mainTitleClass=" leading-tight font-bold text-center mb-10"
      />
      <ProjectsList />
    </section>
  );
}