"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useAnimation, AnimatePresence, Variants } from "framer-motion";

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
import { RiTailwindCssFill, RiVercelFill, RiNodejsLine } from "react-icons/ri";
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
import { IconType } from "react-icons";

// Type definitions
interface IconItem {
  skillName: string;
  icon: IconType;
  color: string;
}

interface AnimationVariants {
  fadeInLeft: Variants;
  fadeInRight: Variants;
}

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  controls: ReturnType<typeof useAnimation>;
  animationVariants: AnimationVariants;
  icons: IconItem[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const iconsData: IconItem[] = [
  { skillName: "React Js", icon: FaReact, color: "#61DBFB" },
  { skillName: "Redux", icon: TbBrandRedux, color: "#764abc" },
  { skillName: "Javascript", icon: FaJs, color: "#F7DF1E" },
  { skillName: "TypeScript", icon: SiTypescript, color: "#007acc" },
  { skillName: "Tailwind CSS", icon: RiTailwindCssFill, color: "#38bdf8" },
  { skillName: "HTML", icon: IoLogoHtml5, color: "#E34C26" },
  { skillName: "CSS", icon: FaCss3Alt, color: "#264de4" },
  { skillName: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
  { skillName: "PHP", icon: SiPhp, color: "#8892BF" },
  { skillName: "MySQL", icon: SiMysql, color: "#00749C" },
  { skillName: "SEO", icon: TbSeo, color: "#00A859" },
  { skillName: "Domain & Hosting", icon: GrDomain, color: "#6366F1" },
  { skillName: "Elementor", icon: FaElementor, color: "#FF7BE5" },
  { skillName: "WordPress", icon: FaWordpress, color: "#00749C" },
  { skillName: "Vercel", icon: RiVercelFill, color: "#000" },
  { skillName: "Git & GitHub", icon: FaGithub, color: "#000" },
  { skillName: "GoDaddy", icon: SiGodaddy, color: "#1bdbdb" },
  { skillName: "Node.js", icon: RiNodejsLine, color: "#84bf08" },
  { skillName: "MongoDB", icon: SiMongodb, color: "#08ee69" },
  { skillName: "Google Ads", icon: SiGoogleads, color: "#eeb808" },
  { skillName: "Meta Ads", icon: SiMeta, color: "#087fee" },
  { skillName: "Photoshop", icon: DiPhotoshop, color: "#002850e7" },
  { skillName: "Shopify", icon: FaShopify, color: "#95bf47" },
  { skillName: "Google Analytics", icon: SiGoogleanalytics, color: "#eeb808" },
  { skillName: "Google Tag Manager", icon: SiGoogletagmanager, color: "#087fee" },
  {
    skillName: "Campaign Manager 360",
    icon: SiGooglecampaignmanager360,
    color: "#002850e7",
  },
  { skillName: "SEMrush", icon: SiSemrush, color: "#f14e00" },
];

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const controls = useAnimation();

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  // Sync with document class when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newValue = !prev;
      localStorage.setItem("theme", newValue ? "dark" : "light");
      return newValue;
    });
  };

  const animationVariants: AnimationVariants = {
    fadeInLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    },
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleTheme,
        controls,
        animationVariants,
        icons: iconsData,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { AnimatePresence };
export type { IconItem, AnimationVariants, ThemeContextType };
