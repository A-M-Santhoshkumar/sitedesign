"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projectsData } from "../../data/projects";

export default function ProjectsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {projectsData.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-700 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all group"
        >
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <div className="overflow-hidden">
              <Image
                src={item.img}
                alt={item.name}
                width={600}
                height={224}
                style={{ width: "auto", height: "auto" }}
                loading="eager"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </a>

          <div className="p-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {item.tool}
              </p>
            </div>

            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-400 text-white rounded-full text-sm hover:scale-105 transition-transform">
                View
              </button>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}