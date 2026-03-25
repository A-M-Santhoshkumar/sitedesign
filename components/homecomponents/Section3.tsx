"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import Title from "../Title";

import Image from "next/image";
import { motion } from "framer-motion";
import { projectsData } from "../../data/projects";

function Projects() {
  return (
    <section className="py-16 px-4 md:px-20 bg-gray-50 layout-wrapper">
 

                <Title  smallTitle="Services"
  mainTitle={
    <>
     Our{" "}
      <span className="text-black dark:bg-gradient-to-r dark:from-pink-500 dark:to-yellow-400 dark:bg-clip-text dark:text-transparent ">
       Projects
      </span>
    </>
  }
  mainTitleClass="font-bold text-center mb-10"
  smallTitleClass=" text-center"
/>


      <div className="w-full relative py-4">
        {/* Custom nav buttons */}
        <div className="swiper-projects-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white bg-black/70 hover:bg-black w-9 h-9 flex items-center justify-center rounded-full cursor-pointer text-xl transition-all">
          ‹
        </div>
        <div className="swiper-projects-next absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white bg-black/70 hover:bg-black w-9 h-9 flex items-center justify-center rounded-full cursor-pointer text-xl transition-all">
          ›
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-projects-prev",
            nextEl: ".swiper-projects-next",
          }}
          spaceBetween={24}
          breakpoints={{
            0:    { slidesPerView: 1 },  
            640:  { slidesPerView: 2 },   
            1024: { slidesPerView: 3 },   
            1280: { slidesPerView: 4 },   
          }}
          className="px-6"
        >
          {projectsData.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all group"
              >
                {/* Image */}
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <div className="overflow-hidden">
                  <Image
  src={item.img}
  alt={item.name}
  width={600}
  height={224}
  style={{ width: 'auto', height: 'auto' }}
  loading="eager"
  priority={item.id === projectsData[0].id}
  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
/>
                  </div>
                </a>

                {/* Content */}
                <div className="p-4 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-gray-800 dark:text-white truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-300 truncate">
                      {item.tool}
                    </p>
                  </div>

                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="shrink-0">
                    <button className="px-3 py-1.5 bg-gradient-to-r from-pink-500 to-yellow-400 text-white rounded-full text-xs hover:scale-105 transition-transform">
                      View
                    </button>
                  </a>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;