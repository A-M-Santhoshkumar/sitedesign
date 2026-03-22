"use client";

import { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Title from "../../components/Title";
import { useTheme } from "../../components/ThemeContext";

// Images
import img1 from "../../public/images/about/Front-End.png";
import img2 from "../../public/images/about/UIUX.png";
import img3 from "../../public/images/about/Tools.png";
import img4 from "../../public/images/about/Deployment.png";
import mainimage from "../../public/images/about/about-me.png";

type SectionType = {
  name: string;
  image: StaticImageData;
  data: string[];
};

const info: SectionType[] = [
  {
    name: "🚀 Front-End Development",
    image: img1,
    data: [
      "Proficient in JavaScript and TypeScript, with hands-on experience in React.js, Tailwind CSS, and Vite.",
      "Strong foundation in HTML, CSS, and Bootstrap.",
      "Clean, reusable and scalable component architecture.",
    ],
  },
  {
    name: "🎨 UI/UX & Design Implementation",
    image: img2,
    data: [
      "User-friendly and intuitive interfaces.",
      "Pixel-perfect design implementation.",
    ],
  },
  {
    name: "🛠 Tools & Technologies",
    image: img3,
    data: [
      "PHP (basic), MySQL",
      "GoDaddy, cPanel deployments",
      "GitHub, Vercel, GitHub Pages",
    ],
  },
  {
    name: "🌐 Deployment & Hosting",
    image: img4,
    data: [
      "React deployments (Vercel, GitHub Pages)",
      "Domain & hosting management",
    ],
  },
];

type AnimatedSectionProps = {
  section: SectionType;
  idx: number;
};

function AnimatedSection({ section, idx }: AnimatedSectionProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView]);

  const fadeVariants: Variants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // ✅ YOUR EXACT PATTERN
  const isReverse =
    idx === 0 || idx === 2 || idx === 3; // 1,3,4 → image right

  return (
    <motion.div
      ref={ref}
      variants={fadeVariants}
      initial="hidden"
      animate={controls}
      className={`flex flex-col ${
        isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-10 py-16`}
    >
      {/* IMAGE */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative group">
          
          {/* 🔥 Glow Effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

          {/* IMAGE CARD */}
          <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4">
            <Image
              src={section.image}
              alt={section.name}
              className="rounded-xl object-contain"
            />
          </div>
        </div>
      </div>

      {/* TEXT */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          {section.name}
        </h3>

        <ul className="space-y-4 text-gray-300 text-lg">
          {section.data.map((point, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-pink-400">✔</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function About() {
  const { animationVariants } = useTheme();

  const leftControls = useAnimation();
  const rightControls = useAnimation();

  const [leftRef, leftInView] = useInView({ threshold: 0.2 });
  const [rightRef, rightInView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    leftControls.start(leftInView ? "visible" : "hidden");
  }, [leftInView]);

  useEffect(() => {
    rightControls.start(rightInView ? "visible" : "hidden");
  }, [rightInView]);

  return (
    <div className="layout-wrapper bg-black text-white">
      <div className="container mx-auto py-16">

        {/* HERO SECTION */}
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* LEFT */}
          <motion.div
            ref={leftRef}
            variants={animationVariants.fadeInLeft}
            initial="hidden"
            animate={leftControls}
            className="w-1/2 md:w-1/2 text-center md:text-left"
          >
            <Title
              smallTitle="About"
              mainTitle="Turning Ideas Into Interactive Websites"
            />

            <p className="py-3 text-gray-400">
              Hi, I’m Santhoshkumar, a Web Developer based in Coimbatore.
            </p>

            <ul className="space-y-2">
              <li>• WordPress (2+ years)</li>
              <li>• HTML, CSS, JS (2 years)</li>
              <li>• React (1 year)</li>
            </ul>

            <p className="py-3 text-gray-400">
              I build modern, fast and scalable websites.
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            ref={rightRef}
            variants={animationVariants.fadeInRight}
            initial="hidden"
            animate={rightControls}
            className="w-1/2 md:w-1/2 flex justify-center"
          >
            <Image
              src={mainimage}
              alt="Santhosh Kumar"
              className="rounded-xl"
            />
          </motion.div>
        </div>

        {/* SECTIONS */}
        {info.map((section, idx) => (
          <AnimatedSection key={idx} section={section} idx={idx} />
        ))}
      </div>
    </div>
  );
}


