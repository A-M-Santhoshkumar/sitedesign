  
import Image from "next/image";
import Link from "next/link";
import ThemeBtn from "../../components/ThemeBtn";
import Title from "../../components/Title";
 import { FiTarget, FiZap } from "react-icons/fi"; // clean minimal icons
 import { FaGlobe, FaChartLine, FaBolt } from "react-icons/fa";

 import { pageMeta } from "@/data/pageMeta";
import JsonLd from "../../components/JsonLd";
import { schemas } from "@/data/schemaData";


export const metadata = {
  title: pageMeta.about.title,
  description: pageMeta.about.description,
  keywords: pageMeta.about.keywords,

  alternates: {
    canonical: pageMeta.about.url,
  },
};

const stats = [
  { value: "50+", label: "Projects" },
  { value: "3+",  label: "Years" },
  { value: "100%", label: "Satisfaction" },
  { value: "4",   label: "Services" },
];

const services = [
  {
    icon: <FaGlobe className="text-pink-500" />,
    title: "Website Development",
    desc: "Modern, responsive and fast websites — WordPress, Shopify, Next.js & React.",
    accent: "from-pink-500 to-rose-400",
  },
  {
    icon: <FaChartLine className="text-orange-500" />,
    title: "Business Growth",
    desc: "Websites built to attract leads and convert visitors into real clients.",
    accent: "from-amber-400 to-orange-500",
  },
  {
    icon: <FaBolt className="text-purple-500" />,
    title: "Easy Digital Start",
    desc: "Simple, guided solutions for owners who are new to digital marketing.",
    accent: "from-violet-500 to-purple-400",
  },
];

const problems = [
  "No website or an outdated one that drives customers away",
  "Not showing up on Google when people search for you",
  "Losing leads to competitors who look more professional online",
  "Wasting money on ads without a proper strategy",
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
   <div>
    <JsonLd data={schemas.about} />    

     <div className="layout-wrapper bg-white dark:bg-[#080808] text-black dark:text-white overflow-hidden">

      {/* ══════════════════════════════ HERO ══════════════════════════════ */}
      <section className="relative container mx-auto py-24 px-4 md:px-10">

        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] bg-pink-500/10 dark:bg-pink-500/20 rounded-full blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-yellow-400/10 dark:bg-yellow-400/15 rounded-full blur-[100px]" />

        <div className="flex flex-col lg:flex-row items-center gap-14 relative z-10">

          {/* LEFT ── Text */}
          <div className="w-full lg:w-1/2 space-y-6">

    

           

            <Title   smallTitle="About Me"    
  mainTitle={
    <>
        Helping Businesses{" "}
      <span className="text-black dark:bg-gradient-to-r dark:from-pink-500 dark:to-yellow-400 dark:bg-clip-text dark:text-transparent">
       Grow Digitally
      </span>
    </>
  }
  mainTag="h1"
  mainTitleClass="text-xl md:text-2xl leading-tight"
/>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Hi, I'm <span className="font-semibold text-black dark:text-white">Santhoshkumar</span> — a Web Developer
              focused on helping small and new business owners grow in the digital world. I simplify
              digital growth by creating modern websites that attract, engage, and convert.
            </p>

            <blockquote
              className="relative pl-5 border-l-4"
              style={{ borderImage: "linear-gradient(to bottom, #ec4899, #facc15) 1" }}
            >
              <p className="text-yellow-500 dark:text-yellow-400 font-medium italic text-lg">
                "Built for visibility. Designed for growth"
              </p>
            </blockquote>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4 pt-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
                    {s.value}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT ── Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative max-w-[460px] w-full">
              <div className="absolute -inset-3 bg-gradient-to-br from-pink-500 to-yellow-400 rounded-3xl opacity-20 blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-pink-500/5 to-yellow-400/5">
                <div className="h-1 w-full bg-gradient-to-r from-pink-500 to-yellow-400" />
                <Image
                  src="/images/about/about-me.png"
                  alt="Santhoshkumar — Web Developer"
                  width={600}
                  height={600}
                  style={{ width: "100%", height: "auto" }}
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════ PROBLEM SECTION ═════════════════════════ */}
      <section className="bg-gray-50 dark:bg-[#0f0f0f] py-20">
        <div className="container mx-auto px-4 md:px-10">

          <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
            
                   <Title   smallTitle="The Problem"    
  mainTitle={
    <>
       Why Most Businesses Fail Online?
    </>
  }
  mainTag="h2"
  mainTitleClass="text-xl md:text-2xl leading-tight"
/>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Many owners don't have a website — or use outdated designs that push customers away.
              Without a strong online presence, even great businesses struggle to get leads.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {problems.map((p, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm"
              >
                <span className="mt-0.5 w-6 h-6 shrink-0 rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 flex items-center justify-center">
                  <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none">
                    <path d="M3 6l2 2 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-pink-500 font-semibold text-xl mt-10">
            That's where I come in. ✦
          </p>

        </div>
      </section>

  
      <section className="py-20 container mx-auto px-4 md:px-10">

        <div className="text-center mb-14 space-y-3">
                  <Title   smallTitle="Direction"    
  mainTitle={
    <>
      Vision & Mission
    </>
  }
  mainTag="h2"
  mainTitleClass="text-xl md:text-2xl leading-tight"
/>
        </div>
         
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Vision */}
       

{/* Vision */}
<div className="relative group p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 overflow-hidden">
  <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-pink-500 to-rose-400 rounded-l-2xl" />
  <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

  <h3 className="text-xl font-bold text-pink-500 mb-3 flex items-center gap-3">
    <FiTarget className="text-2xl" />
    Vision
  </h3>

  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
    To empower every small and new business owner to succeed online — without confusion.
    Making digital growth simple and accessible for everyone.
  </p>
</div>

{/* Mission */}
<div className="relative group p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 overflow-hidden">
  <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-l-2xl" />
  <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

  <h3 className="text-xl font-bold text-yellow-500 mb-3 flex items-center gap-3">
    <FiZap className="text-2xl" />
    Mission
  </h3>

  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
    To create modern, fast, and user-friendly websites that help businesses attract customers,
    build trust, and grow consistently in the digital world.
  </p>
</div>

        </div>
      </section>

      {/* ══════════════════════════ SERVICES ══════════════════════════════ */}
      <section className="bg-gray-50 dark:bg-[#0f0f0f] py-20">
        <div className="container mx-auto px-4 md:px-10">

         
  <div className="text-center mb-14 space-y-3">
                  <Title   smallTitle=" What I Do"    
  mainTitle={
    <>
     How I Help Your Business
    </>
  }
  mainTag="h2"
  mainTitleClass="text-xl md:text-2xl leading-tight"
/>
        </div>
          <div className="grid md:grid-cols-3 gap-7 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <div
                key={i}
                className="group relative p-7 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${s.accent}`} />
                <div className={`absolute -inset-1 bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl blur-xl`} />
                <div className="relative space-y-3">
                  <span className="text-4xl align-middle flex justify-center mb-2">{s.icon}</span>
                  <h4 className="text-lg font-bold">{s.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════ CTA ══════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[700px] h-[300px] bg-gradient-to-r from-pink-500/10 to-yellow-400/10 blur-[100px] rounded-full" />
        </div>

        <div className="relative container mx-auto px-4 text-center space-y-6">
          
           

            <Title     
  mainTitle={
    <>
         Ready to Grow Your{" "}
      <span className="text-black dark:bg-gradient-to-r dark:from-pink-500 dark:to-yellow-400 dark:bg-clip-text dark:text-transparent">
       Business Online?
      </span>
    </>
  }
  mainTag="h3"
  mainTitleClass="text-xl md:text-2xl leading-tight"
/>

          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto">
            Let's build something that brings real results — no jargon, no confusion, just growth.
          </p>

          <Link href="/contact">
            <ThemeBtn icon={true} isActive={false}>
              Get Free Consultation
            </ThemeBtn>
          </Link>
        </div>
      </section>

    </div>
   </div>
  );
}