"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import { SiGoogleads, SiMeta, SiSemrush, SiGoogleanalytics } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { GrDomain } from "react-icons/gr";

import Title from "../Title";

interface IconItem {
  icon: React.ComponentType<{ size?: number; color?: string }>;
  color: string;
}

interface ServiceItem {
  skillName: string;
  icon: IconItem;
  text: string;
}

function Section4() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname(); // 🔥 detect route change

  const project: ServiceItem[] = [
    {
      skillName: "Google & Meta Ads",
      icon: { icon: SiGoogleads, color: "#4285F4" },
      text: "Run high-converting ad campaigns focused on ROI and quality lead generation.",
    },
    {
      skillName: "SEO Optimization",
      icon: { icon: SiSemrush, color: "#f14e00" },
      text: "Rank higher on Google with keyword strategy, on-page SEO and local SEO.",
    },
    {
      skillName: "Website Development",
      icon: { icon: FaReact, color: "#61DBFB" },
      text: "Fast, modern and conversion-focused websites built with React & Next.js.",
    },
    {
      skillName: "Social Media Marketing",
      icon: { icon: SiMeta, color: "#1877F2" },
      text: "Grow your brand and generate leads through Instagram & Facebook campaigns.",
    },
    {
      skillName: "Analytics & Tracking",
      icon: { icon: SiGoogleanalytics, color: "#f9ab00" },
      text: "Track performance with GA4 and optimize campaigns based on real data.",
    },
    {
      skillName: "Domain & Hosting",
      icon: { icon: GrDomain, color: "#6366F1" },
      text: "Secure and fast hosting setup with zero downtime and full reliability.",
    },
  ];

  useEffect(() => {
    let ctx: any;

    const loadGSAP = async () => {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");

      const gsap = gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      // 🔥 Kill old triggers (important)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      ctx = gsap.context(() => {
        gsap.fromTo(
          ".service-item",
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              toggleActions: "play none none reset",
            },
          }
        );
      }, containerRef);

      // 🔥 Refresh after setup
      ScrollTrigger.refresh();
    };

    loadGSAP();

    return () => {
      if (ctx) ctx.revert(); // cleanup
    };
  }, [pathname]); // 🔥 re-run on navigation

  return (
    <section ref={containerRef} className="container mx-auto px-4 md:px-10 py-20">

      <Title
        smallTitle="Services"
        mainTitle={
          <>
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400">
              Expertise
            </span>
          </>
        }
        mainTitleClass="text-center"
        smallTitleClass="text-center"
      />

      <p className="text-center text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-3">
        I provide complete digital solutions to help your business grow faster,
        smarter, and more efficiently.
      </p>

      {/* Timeline Layout */}
      <div className="relative mt-16 max-w-4xl mx-auto">

        {/* Vertical Line */}
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-pink-500 to-yellow-400" />

        <div className="space-y-10">
          {project.map((item, index) => {
            const Icon = item.icon.icon;

            return (
              <div
                key={index}
                className="service-item relative flex items-start gap-6 group"
              >

                {/* Icon */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 shadow-md">
                  <Icon size={20} color={item.icon.color} />
                </div>

                {/* Card */}
                <div className="relative flex-1 p-6 rounded-2xl backdrop-blur-lg bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 
                group-hover:shadow-xl transition duration-300 group-hover:-translate-y-1">

                  {/* Glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 
                  bg-gradient-to-r from-pink-500/10 to-yellow-400/10 blur-xl" />

                  <h3 className="text-lg font-semibold dark:text-white">
                    {item.skillName}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.text}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}

export default Section4;