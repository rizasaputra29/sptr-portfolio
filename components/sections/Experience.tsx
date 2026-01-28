"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experience = [
  { role: "Co-Founder", company: "Clean n Shine", period: "2022 - 2025" },
  { role: "Full Stack Engineer Intern", company: "Reswara Praptama", period: "2025" },
  { role: "IT Support", company: "Al Madeena Islamic School", period: "2025 - Present" },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-end justify-between mb-20">
             <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                A yearly <br/> snapshot of my journey
            </h2>
             <span className="hidden md:block text-gray-400 font-mono">2022 - Present</span>
        </div>
       
        <div className="flex flex-col">
            {experience.map((item, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group relative border-t border-gray-200 py-12 transition-colors hover:border-gray-900 cursor-pointer"
                >
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] items-baseline gap-2 md:gap-8">
                        <h3 className="text-2xl md:text-4xl font-light text-gray-900 group-hover:pl-4 transition-all duration-300">
                            {item.role}
                        </h3>
                        <span className="text-lg text-gray-500">{item.company}</span>
                        <span className="text-gray-400 font-mono text-sm md:text-base">{item.period}</span>
                    </div>
                </motion.div>
            ))}
            <div className="border-t border-gray-200" />
        </div>
      </div>
    </section>
  );
}
