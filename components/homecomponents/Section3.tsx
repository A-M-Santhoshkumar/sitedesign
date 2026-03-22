"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import Link from "next/link";
import Image from "next/image";

import ThemeBtn from "../ThemeBtn";
import Title from "../Title";

// ✅ Types
interface ProjectItem {
  nameComponey: string;
  details: string;
  link: string;
  img: string;
}

function Section3() {
  const projectData: ProjectItem[] = [
    {
      nameComponey: "React Ecommerce",
      details: "React",
      link: "https://sitedesign-ecommerce.vercel.app/",
      img: "/images/project/ecommerce.png",
    },
    {
      nameComponey: "Business Tamizha",
      details: "PHP Full Stack",
      link: "https://businesstamizha.com/",
      img: "/images/project/business_tamizha_news_blog.png",
    },
    {
      nameComponey: "Astro Tamizha",
      details: "PHP Full Stack",
      link: "https://astrotamizha.com/",
      img: "/images/project/astro.png",
    },
    {
      nameComponey: "JKKN DENTAL COLLEGE & HOSPITAL",
      details: "Wordpress",
      link: "https://dental.jkkn.ac.in/",
      img: "/images/project/dental.png",
    },
    {
      nameComponey: "Business Tamizha",
      details: "PHP Full Stack",
      link: "https://businesstamizha.in/",
      img: "/images/project/bt_componey.png",
    },
    {
      nameComponey: "Velanmedias",
      details: "Frontend",
      link: "https://velanmedias.com/",
      img: "/images/project/velan.png",
    },
    {
      nameComponey: "Electwin",
      details: "Wordpress",
      link: "https://electwin.jicate.solutions/",
      img: "/images/project/electwin.png",
    },
  ];

  return (
    <section className="layout-wrapper py-10">
      
  
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2">
        
               <Title     smallTitle="Past Projects"
  mainTitle={
    <>
     The work {" "}
      <span className="text-black dark:bg-gradient-to-r dark:from-pink-500 dark:to-yellow-400 dark:bg-clip-text dark:text-transparent ">
     I did for   client
      </span>
    </>
  }
/>
        </div>

        <div>
          <ThemeBtn href="/projects" icon={true} isActive={false}>
            All Projects
          </ThemeBtn>
        </div>
      </div>

     
      <div className="w-full h-[450px] relative py-4">
        
     
        <div className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 text-white bg-black p-2 rounded-full cursor-pointer">
          ‹
        </div>
        <div className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 text-white bg-black p-2 rounded-full cursor-pointer">
          ›
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
          }}
        >
          {projectData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="theme-sk relative border border-amber-400 rounded-lg overflow-hidden">
                
           
                <Image
                  src={item.img}
                  alt={item.nameComponey}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />

            
                <div className="theme-sk-Hover absolute inset-0 flex flex-col justify-center items-center p-5">
                  <div className="relative py-5 px-14 bg-white dark:bg-black">
                    
                    <div className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-[#FF91FA] via-[#FA6490] to-[#F7D86A]"></div>

                    <h3 className="text-xl">
                      {item.nameComponey.toUpperCase()}
                    </h3>

                    <div className="py-3 text-center">
                      <h4 className="text-base">
                        Development Type: {item.details}
                      </h4>

                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="mt-3 px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-400 text-white rounded-full text-sm hover:scale-105 transition-transform">
                          View
                        </button>
                      </a>
                    </div>

                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}

export default Section3;