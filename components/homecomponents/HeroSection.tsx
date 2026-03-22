"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
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

  const animationVariants = {
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
    <section className={`section ${isDarkMode ? 'bg-[#111]' : 'bg-white'}`}>
      <div className="container">
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

  <p className={`max-w-xl py-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
   I’m Santhosh Kumar, a freelance digital marketer and website designer in Coimbatore helping businesses grow online through Google Ads, SEO, and modern website design. I create fast, responsive websites and run targeted ad campaigns that attract the right customers and increase business leads.


  </p>


            <div className={`flex flex-col md:flex-row gap-3 py-6 items-center md:items-start`}>
              <h5 className={isDarkMode ? 'text-white' : 'text-dark'}>Check out my:</h5>

              <div className="flex gap-4">
                {icons.map((item, index) => (
                  <a key={index} href={item.link} target="_blank">
                    <item.icon className={isDarkMode ? 'text-white hover:scale-110 transition' : 'text-primary hover:scale-110 transition'} size={24} />
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
      <Image
  src="/images/main.png"
  alt="Main"
  width={500}
  height={500}
  className="w-md h-auto"
  priority
  placeholder="blur"
  blurDataURL="/images/blur.jpg" // small blurred image
/>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
