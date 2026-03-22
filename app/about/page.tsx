"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Title from "../../components/Title";

import mainimage from "../../public/images/about/about-me.png";

export default function AboutPage() {
  return (
    <div className="layout-wrapper bg-white dark:bg-black text-black dark:text-white">

      <div className="container mx-auto py-16 px-4 md:px-10">

        {/* ================= HERO ================= */}
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* LEFT */}
          <div className="w-full md:w-1/2 space-y-4">
            <Title
            
             
            />
             <Title       smallTitle="About"
  mainTitle={
    <>
    Helping Businesses {" "}
      <span className="text-black dark:bg-gradient-to-r dark:from-pink-500 dark:to-yellow-400 dark:bg-clip-text dark:text-transparent ">
    Grow Digitally 
      </span>
    </>
  }
/>
            <p className="text-gray-600 dark:text-gray-400">
              Hi, I’m Santhoshkumar — a Web Developer focused on helping small and new business owners grow in the digital world.
            </p>

            <p className="text-gray-600 dark:text-gray-400">
              Many businesses struggle to get customers online because they don’t know where to start. 
              I simplify digital growth by creating modern websites that attract, engage, and convert visitors into real clients.
            </p>

            <p className="text-yellow-500 font-medium">
              "I don’t just build websites — I help businesses grow digitally."
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={mainimage}
              alt="About me"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* ================= PROBLEM / SOLUTION ================= */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Why Most Businesses Fail Online?
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Many business owners don’t know how to use digital platforms effectively. 
            They either don’t have a website or use outdated designs that don’t attract customers.
          </p>

          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Without a strong online presence, even good businesses struggle to get leads and grow.
          </p>

          <p className="text-pink-500 font-medium">
            That’s where I come in.
          </p>

          <p className="text-gray-600 dark:text-gray-400 mt-4">
            I help businesses build modern, fast, and user-friendly websites that make a strong first impression and convert visitors into customers.
          </p>
        </div>

        {/* ================= VISION & MISSION ================= */}
        <div className="mt-20 grid md:grid-cols-2 gap-10">

          {/* Vision */}
          <div className="bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 rounded-xl backdrop-blur-md">
            <h3 className="text-2xl font-semibold mb-3 text-pink-500">Vision</h3>
            <p className="text-gray-600 dark:text-gray-400">
              To empower every small and new business owner to succeed online without confusion. 
              Making digital growth simple and accessible for everyone.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 rounded-xl backdrop-blur-md">
            <h3 className="text-2xl font-semibold mb-3 text-purple-500">Mission</h3>
            <p className="text-gray-600 dark:text-gray-400">
              To create modern, fast, and user-friendly websites that help businesses attract customers, 
              build trust, and grow consistently in the digital world.
            </p>
          </div>

        </div>

        {/* ================= SERVICES ================= */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-10">
            How I Help Your Business
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 rounded-xl bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <h4 className="text-xl font-semibold mb-2">🌐 Website Development</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Modern, responsive, and fast websites designed to impress your customers.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <h4 className="text-xl font-semibold mb-2">📈 Business Growth</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Websites built to attract leads and convert visitors into real clients.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <h4 className="text-xl font-semibold mb-2">⚡ Easy Digital Start</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Simple solutions for business owners who are new to digital marketing.
              </p>
            </div>

          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Grow Your Business Online?
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Let’s build something that brings real results for your business.
          </p>

          <a
            href="/contact"
            className="inline-block px-6 py-3 rounded-md text-white 
            bg-gradient-to-r from-pink-500 to-yellow-400 
            hover:scale-105 transition"
          >
            Get Free Consultation 
          </a>
        </div>

      </div>
    </div>
  );
}