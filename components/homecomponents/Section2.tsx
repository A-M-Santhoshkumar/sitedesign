"use client";

import { useRef } from "react";
import Link from "next/link";

import { CgWebsite } from "react-icons/cg";
import { TbWorldWww } from "react-icons/tb";
import { RiSeoLine } from "react-icons/ri";

interface ProjectItem {
  name: string;
  link: string;
  icons: React.ComponentType<{ className?: string }>;
  projectCount: string;
}

function Section2() {
  const project: ProjectItem[] = [
    {
      name: "Digital Marketing",
      link: "/projects",
      icons: CgWebsite,
      projectCount: "28 Project",
    },
    {
      name: "Website Design",
      link: "/projects",
      icons: TbWorldWww,
      projectCount: "17 Project",
    },
    {
      name: "Social Media Marketing",
      link: "/projects",
      icons: RiSeoLine,
      projectCount: "17 Project",
    },
  ];

  const handleMouseMove = (e: any, card: HTMLDivElement) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // 🔥 Glow position
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);

    // 🔥 3D Tilt
    const rotateX = ((y / rect.height) - 0.5) * 12;
    const rotateY = ((x / rect.width) - 0.5) * -12;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handleMouseLeave = (card: HTMLDivElement) => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section className="dark:bg-[#111] py-16">
      <div className="container mx-auto px-4 md:px-10 grid md:grid-cols-3 gap-8">

        {project.map((item, index) => {
          const Icon = item.icons;

          return (
            <Link key={index} href={item.link}>
              <div
                className="relative p-6 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10
                transition-all duration-300 cursor-pointer will-change-transform group"
                
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              >

                {/* 🔥 Mouse Glow */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
                  style={{
                    background: `radial-gradient(300px circle at var(--x) var(--y), rgba(255, 0, 150, 0.15), transparent 40%)`,
                  }}
                />

                {/* 🔥 Border Glow */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-pink-500/30 transition" />

                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center mb-4 rounded-xl bg-gray-100 dark:bg-gray-800 
                group-hover:scale-110 transition duration-300">
                  <Icon className="text-3xl text-black dark:text-white" />
                </div>

                {/* Text */}
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.projectCount}
                </p>

                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mt-1">
                  {item.name}
                </h2>

                {/* 🔥 Micro interaction line */}
                <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-pink-500 to-yellow-400 group-hover:w-full transition-all duration-500" />

              </div>
            </Link>
          );
        })}

      </div>
    </section>
  );
}

export default Section2;