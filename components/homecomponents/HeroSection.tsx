"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation, Variants } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

import Title from "../Title";
import { useTheme } from "../ThemeContext";

// Type definitions
interface IconItem {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  link: string;
}

const HeroSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { isDarkMode } = useTheme();

  const animationVariants: { [key: string]: Variants } = {
    fadeInLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    },
  };

  const icons: IconItem[] = [
    {
      name: "Linkedin",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/santhoshkumar-a-m-85a46627a/",
    },
    {
      name: "Gmail",
      icon: BiLogoGmail,
      link: "mailto:amsanthoshkumar2@gmail.com",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      link: "https://github.com/A-M-Santhoshkumar",
    },
  ];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <section
      className={`section relative overflow-hidden ${
        isDarkMode ? "bg-[#111]" : "bg-gradient-to-br from-pink-50 via-white to-yellow-50"
      }`}
    >
      {/* Light mode decorative blobs */}
      {!isDarkMode && (
        <>
          <div className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] bg-pink-200/40 rounded-full blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 w-[360px] h-[360px] bg-yellow-200/40 rounded-full blur-[90px]" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-rose-100/30 rounded-full blur-[80px]" />
        </>
      )}

      {/* Dark mode decorative blobs */}
      {isDarkMode && (
        <>
          <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-yellow-400/10 rounded-full blur-[100px]" />
        </>
      )}

      <div className="container relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">

          {/* LEFT */}
          <motion.div
            ref={ref}
            variants={animationVariants.fadeInLeft}
            initial="hidden"
            animate={controls}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <Title
              mainTitle="Freelance Digital Marketer & Website Designer in Coimbatore"
              mainTag="h1"
              isWhite={isDarkMode}
              mainTitleClass="text-xl md:text-2xl leading-tight"
            />

            <p className={`max-w-xl py-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              I'm Santhosh Kumar, a freelance digital marketer and website designer in Coimbatore
              helping businesses grow online through Google Ads, SEO, and modern website design. I
              create fast, responsive websites and run targeted ad campaigns that attract the right
              customers and increase business leads.
            </p>

            <div className="flex flex-col md:flex-row gap-3 py-6 items-center md:items-start">
              <h5 className={isDarkMode ? "text-white" : "text-dark"}>Check out my:</h5>

              <div className="flex gap-4">
                {icons.map((item, index) => (
                  <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                    <item.icon
                      className={
                        isDarkMode
                          ? "text-white hover:scale-110 transition"
                          : "text-primary hover:scale-110 transition"
                      }
                      size={24}
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={animationVariants.fadeInRight}
            initial="hidden"
            animate={controls}
            className="w-full md:w-1/2 flex justify-center md:justify-end"
          >
            {/* Image wrapper with subtle glow in light mode */}
            <div className="relative">
              {!isDarkMode && (
                <div className="absolute -inset-4 bg-gradient-to-br from-pink-300/30 to-yellow-300/30 rounded-3xl blur-2xl" />
              )}
              <Image
                src="/images/main.png"
                alt="Main"
                width={500}
                height={500}
                className="relative w-md h-auto"
                priority
                placeholder="blur"
                blurDataURL="/images/blur.jpg"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;