"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

import { CgWebsite } from "react-icons/cg";
import { TbWorldWww } from "react-icons/tb";
import { RiSeoLine } from "react-icons/ri";

// ✅ Type
interface ProjectItem {
  name: string;
  link: string;
  icons: React.ComponentType<{ className?: string }>;
  bgicon: string;
  projectCount: string;
}

function Section2() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const project: ProjectItem[] = [
    {
      name: "Digital Marketing",
      link: "/projects",
      icons: CgWebsite,
      bgicon: "/images/section3.webp",
      projectCount: "28 Project",
    },
    {
      name: "Website Design",
      link: "/projects",
      icons: TbWorldWww,
      bgicon: "/images/section3.webp",
      projectCount: "17 Project",
    },
    {
      name: "Social Media Marketing",
      link: "/projects",
      icons: RiSeoLine,
      bgicon: "/images/section3.webp",
      projectCount: "17 Project",
    },
  ];

  useEffect(() => {
    let ctx: any;

    const initGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current) return;

      ctx = gsap.context(() => {
        gsap.from(".service-card", {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
          opacity: 0,
          y: 60,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.2,
        });
      }, sectionRef);
    };

    initGSAP();

    return () => {
      if (ctx) ctx.revert(); // ✅ proper cleanup
    };
  }, []);

  return (
    <section className="dark:bg-[#111] py-12" ref={sectionRef}>
      <div className="flex flex-col md:flex-row container justify-between gap-6">

        {project.map((item, index) => (
          <div
            key={index}
            className="relative group w-full service-card"
          >
            {/* Background */}
            <div className="absolute inset-0 animation-bg-move -z-10 rounded-lg"></div>

            <Link href={item.link}>
              <div
                className="p-6 border border-gray-300 dark:border-white/10 
                bg-white dark:bg-gray-800 backdrop-blur-md
                rounded-xl transition duration-300 
                hover:translate-x-2 hover:translate-y-2 hover:shadow-xl"
              >
                {/* Icon Box */}
                <div
                  className="w-14 h-14 flex items-center justify-center mb-4 rounded-lg"
                  style={{
                    backgroundImage: `url(${item.bgicon})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <item.icons className="text-3xl text-block  dark:text-white" />
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.projectCount}
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  {item.name}
                </h2>
              </div>
            </Link>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Section2;