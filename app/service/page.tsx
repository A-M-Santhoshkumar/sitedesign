"use client";

import { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Title from "../../components/Title";
// Images
import img1 from "../../public/images/service/socialmedia.jpg";
import img2 from "../../public/images/service/ads.jpg";
import img3 from "../../public/images/service/web.jpg";
import img4 from "../../public/images/service/domain.jpg";

// ─── Types ───────────────────────────────────────────────────────────────────

type Point = { text: string };

type ServiceSection = {
  tag: string;           // small label above title e.g. "01"
  title: string;
  subtitle: string;
  image: StaticImageData;
  accent: string;        // tailwind gradient class pair for accent line
  points: Point[];
  badges: string[];      // tool/tech badges
};

// ─── Data ────────────────────────────────────────────────────────────────────

const services: ServiceSection[] = [
  {
    tag: "01",
    title: "Social Media & SEO",
    subtitle: "Grow your brand visibility across every digital channel",
    image: img1,
    accent: "from-pink-500 to-rose-400",
    points: [
      { text: "Social media account management across Instagram, Facebook & LinkedIn" },
      { text: "Content creation, scheduling, and community engagement" },
      { text: "On-page & off-page SEO with keyword research and audits" },
      { text: "Google Search Console & Analytics integration and reporting" },
    ],
    badges: ["Instagram", "Facebook", "LinkedIn", "Google Analytics", "SEMrush"],
  },
  {
    tag: "02",
    title: "Ads & Campaigns",
    subtitle: "Performance-driven paid campaigns that convert",
    image: img2,
    accent: "from-amber-400 to-orange-500",
    points: [
      { text: "Google Ads & Meta Ads setup, targeting and optimisation" },
      { text: "A/B testing creatives and landing pages for maximum ROI" },
      { text: "Retargeting campaigns to re-engage warm audiences" },
      { text: "Monthly performance reports with actionable insights" },
    ],
    badges: ["Google Ads", "Meta Ads", "Retargeting", "A/B Testing", "Analytics"],
  },
  {
    tag: "03",
    title: "Website Development",
    subtitle: "Beautiful, fast websites built on the right platform for you",
    image: img3,
    accent: "from-violet-500 to-purple-400",
    points: [
      { text: "WordPress — themes, plugins, WooCommerce and custom post types" },
      { text: "Shopify — storefront design, apps, and checkout customisation" },
      { text: "Next.js & React — blazing-fast, SEO-optimised web applications" },
      { text: "Responsive, accessible, and performance-optimised code" },
    ],
    badges: ["WordPress", "Shopify", "Next.js", "React", "Tailwind CSS"],
  },
  {
    tag: "04",
    title: "Domain & Hosting",
    subtitle: "Reliable infrastructure so your site is always online",
    image: img4,
    accent: "from-cyan-400 to-teal-500",
    points: [
      { text: "Domain registration and DNS management (GoDaddy, Namecheap)" },
      { text: "cPanel hosting setup, SSL installation and email configuration" },
      { text: "Vercel & GitHub Pages deployment for React / Next.js projects" },
      { text: "Ongoing maintenance, backups and uptime monitoring" },
    ],
    badges: ["GoDaddy", "cPanel", "Vercel", "SSL", "GitHub Pages"],
  },
];

// ─── Animated Section ─────────────────────────────────────────────────────────

function ServiceBlock({ s, idx }: { s: ServiceSection; idx: number }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
  };

  const imgRight = idx % 2 === 0; 

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={controls}
      className={`flex flex-col ${imgRight ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 py-20 border-b border-white/5 last:border-0`}
    >
      {/* ── Image Side ── */}
      <div className="w-full lg:w-[45%] flex justify-center">
        <div className="relative w-full max-w-[420px]">
         
          <div className={`absolute -inset-4 bg-gradient-to-br ${s.accent} opacity-20 blur-2xl rounded-3xl`} />

        
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
           
            <div className={`h-1 w-full bg-gradient-to-r ${s.accent}`} />

            <div className="p-6">
              <Image
                src={s.image}
                alt={s.title}
                width={420}
                height={300}
                style={{ width: "100%", height: "auto" }}
                className="rounded-xl object-contain"
                loading={idx === 0 ? "eager" : "lazy"}
                priority={idx === 0}
              />
            </div>

            {/* <div className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br ${s.accent} flex items-center justify-center text-white text-xs font-bold shadow-lg`}>
              {s.tag}
            </div> */}
          </div>
        </div>
      </div>


      <div className="w-full lg:w-[55%] space-y-6">
      
        {/* <span className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase bg-gradient-to-r ${s.accent} bg-clip-text text-transparent`}>
          Service {s.tag}
        </span> */}

     
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white leading-tight">
        
        </h2>
        <Title      
  mainTitle={
    <>
      {s.title}  
    </>
  }
  mainTag="h2"
  
/>

     
        <p className="text-gray-800 dark:text-white text-lg leading-relaxed">{s.subtitle}</p>

       
        <div className={`w-16 h-[3px] rounded-full bg-gradient-to-r  ${s.accent}`} />

   
        <ul className="space-y-3">
          {s.points.map((p, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-800 dark:text-white">
              <span className={`mt-1 w-5 h-5 shrink-0 rounded-full bg-gradient-to-br ${s.accent} flex items-center justify-center `}>
                <svg viewBox="0 0 12 12" className="w-3 h-3 fill-white">
                  <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="leading-relaxed ">{p.text}</span>
            </li>
          ))}
        </ul>

    
        <div className="flex flex-wrap gap-2 pt-2">
          {s.badges.map((b) => (
            <span
              key={b}
              className="px-3 py-1 text-xs font-medium rounded-full border text-gray-800 dark:text-white bg-white/5 text-gray-300 backdrop-blur-sm"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Hero Stats ───────────────────────────────────────────────────────────────

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "4", label: "Core Services" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "3+", label: "Years Experience" },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <div className="layout-wrapper bg-[#0a0a0a] text-white min-h-screen">
      <div className="container mx-auto px-4 py-20">

    
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 space-y-5"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-pink-400">
            What We Offer
          </span>
<Title      
  mainTitle={
    <>
      Grow Faster with{" "}
      <span className="text-black dark:bg-gradient-to-r dark:from-pink-500 dark:to-yellow-400 dark:bg-clip-text dark:text-transparent">
        Smart Digital Solutions
      </span>
    </>
  }
  mainTag="h1"
  mainTitleClass="text-xl md:text-2xl leading-tight"
/>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
          From increasing your search rankings to delivering high-performance websites, we offer end-to-end digital solutions so you can focus on scaling your business.
          </p>

       
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 pt-10 border-t border-white/10">
            {stats.map((s) => (
              <div key={s.label} className="text-center space-y-1">
                <p className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
                  {s.value}
                </p>
                <p className="text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      
        {services.map((s, idx) => (
          <ServiceBlock key={s.tag} s={s} idx={idx} />
        ))}

      </div>
    </div>
  );
}