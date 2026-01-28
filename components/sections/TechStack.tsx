"use client";

import Image from "next/image";

const technologies = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
];

export function TechStack() {
  return (
    <section className="py-12 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-sm text-gray-400 font-medium mb-8 uppercase tracking-wider">Trusted Technology Stack</p>
      
        <div className="relative flex overflow-x-hidden group">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4 pr-16">
            {technologies.concat(technologies).map((tech, i) => (
                <div 
                key={`${tech.name}-${i}`} 
                className="flex items-center gap-3 text-gray-500 font-medium text-lg hover:text-gray-900 transition-colors cursor-default"
                >
                <Image 
                  src={tech.icon} 
                  alt={tech.name} 
                  width={32} 
                  height={32} 
                  className="grayscale hover:grayscale-0 transition-all"
                />
                <span>{tech.name}</span>
                </div>
            ))}
            </div>
            
            {/* Seamless duplicate for infinite loop */}
            <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 py-4 pr-16">
            {technologies.concat(technologies).map((tech, i) => (
                <div 
                key={`${tech.name}-dup-${i}`} 
                className="flex items-center gap-3 text-gray-500 font-medium text-lg hover:text-gray-900 transition-colors cursor-default"
                >
                <Image 
                  src={tech.icon} 
                  alt={tech.name} 
                  width={32} 
                  height={32} 
                  className="grayscale hover:grayscale-0 transition-all"
                />
                <span>{tech.name}</span>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
}

