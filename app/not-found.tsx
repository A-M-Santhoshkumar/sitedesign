"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "../components/ThemeContext";

export default function NotFound() {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`min-h-screen flex items-center justify-center text-center px-6 ${
        isDarkMode
          ? "bg-[#111] text-white"
          : "bg-gradient-to-br from-pink-50 via-white to-yellow-50 text-black"
      }`}
    >
      <div className="max-w-2xl">

        {/* 🔥 404 Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold"
        >
          404
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-xl md:text-2xl font-semibold"
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <p className="mt-4 text-gray-500">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        {/* Image (optional) */}
        <div className="mt-8 flex justify-center">
          <Image
            src="/images/main.png"
            alt="404"
            width={300}
            height={300}
            className="opacity-80"
            loading="eager"
          />
        </div>

        {/* 🔥 CTA Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">

          <Link
            href="/"
            className="px-6 py-3 bg-black text-white rounded-lg hover:opacity-90"
          >
            Go Home
          </Link>

        
        </div>

      </div>
    </section>
  );
}