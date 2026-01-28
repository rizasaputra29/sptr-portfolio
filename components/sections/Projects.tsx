"use client";

import Image from "next/image";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Github, ExternalLink } from "lucide-react";

export function Projects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 pb-12">
        <div className="flex items-end justify-between mb-8">
             <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                 A collection of <br/> my work that i'm proud of
            </h2>
             <span className="hidden md:block text-gray-400 font-mono">Click to view details</span>
        </div>
        <Carousel items={cards} />
      </div>
    </section>
  );
}

const ProjectContent = ({ tags, description, githubUrl, webUrl }: { tags: string[], description: string, githubUrl?: string, webUrl?: string }) => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"project-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              {index === 0 ? (
                  <span className="font-bold text-neutral-700 dark:text-neutral-200">
                    {description}
                  </span>
              ) : (
                 "Detailed project metrics, case study details, and impact analysis would go here. This section expands to show the full depth of the work."
              )}
            </p>
             {index === 0 && (
                 <>
                   <div className="flex flex-wrap gap-2 mt-6 justify-center">
                      {tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-white/50 dark:bg-black/20 rounded-full text-xs font-medium text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
                              {tag}
                          </span>
                      ))}
                   </div>
                   {(githubUrl || webUrl) && (
                     <div className="flex gap-4 mt-6 justify-center">
                       {githubUrl && (
                         <a 
                           href={githubUrl} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="flex items-center gap-2 px-4 py-2 border border-neutral-200 dark:border-neutral-700 text-black hover:bg-neutral-900 hover:text-white dark:bg-white dark:text-neutral-900 rounded-full text-sm font-medium"
                         >
                           <Github size={16} />
                           GitHub
                         </a>
                       )}
                       {webUrl && (
                         <a 
                           href={webUrl} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="flex items-center gap-2 px-4 py-2 border border-neutral-200 dark:border-neutral-700 text-black hover:bg-neutral-900 hover:text-white dark:bg-white dark:text-neutral-900 rounded-full text-sm font-medium"
                         >
                           <ExternalLink size={16} />
                           Live Demo
                         </a>
                       )}
                     </div>
                   )}
                 </>
             )}
            <Image
              src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-8"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Fintech",
    title: "Mobile Banking App",
    src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    content: <ProjectContent tags={["iOS", "SwiftUI", "Security"]} description="A secure and intuitive mobile banking experience created for millions of users." githubUrl="https://github.com" webUrl="https://example.com" />,
  },
  {
    category: "SaaS",
    title: "E-Commerce Dashboard",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    content: <ProjectContent tags={["React", "Next.js", "Analytics"]} description="Real-time analytics and inventory management for modern e-commerce brands." githubUrl="https://github.com" webUrl="https://example.com" />,
  },
  {
    category: "Healthcare",
    title: "Medical Record System",
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    content: <ProjectContent tags={["HIPAA", "Cloud", "Data"]} description="Secure patient data management system ensuring HIPAA compliance and ease of use." githubUrl="https://github.com" webUrl="https://example.com" />,
  },
  {
    category: "Marketing",
    title: "Social Media Automation",
    src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    content: <ProjectContent tags={["Automation", "API", "Bot"]} description="Automated content scheduling and engagement tracking for social media growth." githubUrl="https://github.com" webUrl="https://example.com" />,
  },
  {
    category: "Consumer",
    title: "Travel Booking Platform",
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
    content: <ProjectContent tags={["Booking", "Maps", "Payment"]} description="Seamless travel booking experience integrating flights, hotels, and local experiences." githubUrl="https://github.com" webUrl="https://example.com" />,
  },
  {
    category: "AI Tool",
    title: "AI Content Generator",
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    content: <ProjectContent tags={["LLM", "Python", "FastAPI"]} description="Generative AI tool for creating marketing copy and blog content in seconds." githubUrl="https://github.com" webUrl="https://example.com" />,
  },
];
