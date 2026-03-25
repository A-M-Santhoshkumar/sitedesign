"use client";

import { useEffect, useRef } from "react";

import {
  FaJs,
  FaReact,
  FaCss3Alt,
  FaBootstrap,
  FaElementor,
  FaWordpress,
  FaGithub,
  FaShopify,
} from "react-icons/fa";

import { IoLogoHtml5 } from "react-icons/io";
import {
  RiTailwindCssFill,
  RiVercelFill,
  RiNodejsLine,
} from "react-icons/ri";

import { TbSeo, TbBrandRedux } from "react-icons/tb";
import { GrDomain } from "react-icons/gr";

import {
  SiTypescript,
  SiPhp,
  SiMysql,
  SiGodaddy,
  SiMongodb,
  SiGoogleads,
  SiMeta,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiGooglecampaignmanager360,
  SiSemrush,
} from "react-icons/si";

import { DiPhotoshop } from "react-icons/di";

import Title from "../Title";

// ✅ TYPES
interface IconItem {
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  color: string;
}

interface ServiceItem {
  skillName: string;
  icons: IconItem[];
  text: string;
}

function Section4() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  const project: ServiceItem[] = [
    {
      skillName: "SEO Optimization",
      icons: [
        { icon: TbSeo, color: "#00A859" },
        { icon: SiSemrush, color: "#f14e00" },
        { icon: SiGoogleanalytics, color: "#eeb808" },
        { icon: SiGoogletagmanager, color: "#087fee" },
        { icon: SiGooglecampaignmanager360, color: "#002850e7" },
      ],
      text: "Advanced SEO services including keyword research, on-page optimization, and analytics tracking.",
    },
    {
      skillName: "Web Development",
      icons: [
        { icon: IoLogoHtml5, color: "#E34C26" },
        { icon: FaCss3Alt, color: "#264de4" },
        { icon: FaJs, color: "#F7DF1E" },
        { icon: SiGodaddy, color: "#1bdbdb" },
        { icon: GrDomain, color: "#6366F1" },
      ],
      text: "Professional Web Development services using HTML, CSS, and JavaScript.",
    },
    {
      skillName: "Domain & Hosting",
      icons: [
        { icon: SiGodaddy, color: "#1bdbdb" },
        { icon: GrDomain, color: "#6366F1" },
        { icon: RiVercelFill, color: "#000" },
        { icon: FaGithub, color: "#000" },
      ],
      text: "Complete domain and hosting setup including DNS configuration.",
    },
    {
      skillName: "WordPress Development",
      icons: [
        { icon: FaWordpress, color: "#00749C" },
        { icon: FaElementor, color: "#FF7BE5" },
        { icon: FaShopify, color: "#95bf47" },
      ],
      text: "Custom WordPress websites using Elementor and modern tools.",
    },
    {
      skillName: "Back-End Development",
      icons: [
        { icon: SiPhp, color: "#8892BF" },
        { icon: SiMysql, color: "#00749C" },
      ],
      text: "Backend development using PHP and MySQL.",
    },
    {
      skillName: "React JS Development",
      icons: [
        { icon: FaReact, color: "#61DBFB" },
        { icon: RiTailwindCssFill, color: "#38bdf8" },
        { icon: TbBrandRedux, color: "#764abc" },
        { icon: SiTypescript, color: "#007acc" },
      ],
      text: "Modern front-end development using React and Tailwind.",
    },
  ];

  useEffect(() => {
    const loadGSAP = async () => {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");

      const gsap = gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      if (!servicesRef.current) return;

      const ctx = gsap.context(() => {
        gsap.fromTo(
          servicesRef.current,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: servicesRef.current,
              start: "top 80%",
            },
          }
        );
      }, containerRef);

      return () => ctx.revert();
    };

    loadGSAP();
  }, []);

  return (
    <section ref={containerRef} className="container ">
      
      <div
        ref={servicesRef}
        className="w-full bg-white dark:bg-[#111] py-10 md:px-4"
      >


             <Title  smallTitle="Services"
  mainTitle={
    <>
      What I {" "}
      <span className="text-black dark:bg-gradient-to-r dark:from-pink-500 dark:to-yellow-400 dark:bg-clip-text dark:text-transparent ">
       Offer
      </span>
    </>
  }
  mainTitleClass=" text-center"
  smallTitleClass=" text-center"
/>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {project.map((item, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-black p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-4 dark:text-white">
                {item.skillName}
              </h3>

              <div className="flex flex-wrap gap-4">
                {item.icons.map((iconItem, idx) => {
                  const Icon = iconItem.icon;

                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-125 transition"
                    >
                      <Icon size={28} style={{ color: iconItem.color }} />
                    </div>
                  );
                })}
              </div>

              <p className="mt-4 text-gray-600 dark:text-gray-300 text-md">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section4;