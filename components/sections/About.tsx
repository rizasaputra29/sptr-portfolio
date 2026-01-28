"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const skills = [
  { 
    name: "Things About Me", 
    description: "I'm Riza Saputra, a Software Engineer from Semarang, Indonesia. I studied at Diponegoro University and have a passion for building products that make a real difference. I love turning ideas into reality through clean code and thoughtful design.",
    id: "01",
    image: "https://res.cloudinary.com/imagehandlers/image/upload/v1769579763/FullSizeRender_tgmrut_d2qszg.jpg"
  },
  { 
    name: "My Journey So Far", 
    description: "From co-founding Clean n Shine to interning as a Full Stack Engineer at Reswara Praptama, I've worn many hats. Currently, I'm working as IT Support at Al Madeena Islamic School while continuing to build and ship products on the side.",
    id: "02",
    image: "https://res.cloudinary.com/imagehandlers/image/upload/v1769580087/FullSizeRender_2_nqeggp_c_crop_ar_3_4_ppqbon.jpg"
  },
  { 
    name: "My Vision For The Future", 
    description: "I believe in building products with purpose — not just features, but solutions that truly help people. My goal is to keep growing as an engineer while creating meaningful impact through technology and thoughtful user experiences.",
    id: "03",
    image: "https://res.cloudinary.com/imagehandlers/image/upload/v1769579763/FullSizeRender_2_kcyeyo_rjhjns.jpg"
  }
];

export function About() {
  const [activeSkill, setActiveSkill] = useState(0);

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-[1300px] mx-auto min-h-[80vh] flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* Left Column: Content Display */}
        <div className="hidden lg:block sticky top-32">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeSkill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-8"
                >
                    {/* Skill Image */}
                    <div className="w-full aspect-3/4 max-w-[400px] rounded-lg overflow-hidden relative">
                        <Image 
                          src={skills[activeSkill].image}
                          alt={skills[activeSkill].name}
                          fill
                          className="object-cover"
                          sizes="400px"
                        />
                        <div className="absolute bottom-4 left-4 text-7xl font-bold text-white font-sans drop-shadow-lg">
                            {skills[activeSkill].id}
                        </div>
                    </div>

                    <div className="max-w-[400px]">
                        <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">
                            {skills[activeSkill].name}
                        </h3>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            {skills[activeSkill].description}
                        </p>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>

        {/* Right Column: Interactive List */}
        <div className="flex flex-col">
            {skills.map((skill, index) => (
                <div 
                    key={skill.id}
                    onMouseEnter={() => setActiveSkill(index)}
                    className="group relative cursor-pointer border-b border-gray-200 py-10 first:border-t"
                >
                    <div className="flex items-start justify-between">
                         <h2 className={cn(
                            "text-5xl md:text-7xl font-medium tracking-tight transition-colors duration-300",
                            activeSkill === index ? "text-gray-900" : "text-gray-300 group-hover:text-gray-400"
                         )}>
                            {skill.name}
                        </h2>
                        <span className={cn(
                            "text-xl md:text-2xl font-medium transition-colors duration-300",
                            activeSkill === index ? "text-[#FF4D4D]" : "text-gray-200 group-hover:text-gray-300"
                        )}>
                            {`{${skill.id}}`}
                        </span>
                    </div>
                    
                    {/* Mobile content block (visible only on small screens) */}
                    <div className={cn(
                        "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
                         activeSkill === index ? "max-h-[200px] opacity-100 mt-6" : "max-h-0 opacity-0"
                    )}>
                        <p className="text-gray-500 text-base leading-relaxed">
                            {skill.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
}
