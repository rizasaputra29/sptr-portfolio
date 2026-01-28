"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Card } from "@/components/ui/apple-cards-carousel";
import { Github, ExternalLink } from "lucide-react";
import { projectsData, type DetailSection } from "@/data";

const Carousel = dynamic(
  () => import("@/components/ui/apple-cards-carousel").then((mod) => mod.Carousel),
  {
    loading: () => (
      <div className="h-96 w-full bg-gray-100 animate-pulse rounded-3xl" />
    ),
  }
);

interface ProjectContentProps {
  tags: string[];
  overview: string;
  details: DetailSection[];
  githubUrl?: string;
  webUrl?: string;
}

export const ProjectContent = React.memo(({ tags, overview, details, githubUrl, webUrl }: ProjectContentProps) => {
  return (
    <>
      {/* Overview Section */}
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            {overview}
          </span>
        </p>
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
                className="flex items-center gap-2 px-4 py-2 border border-neutral-200 dark:border-neutral-700 text-black hover:bg-neutral-900 hover:text-white dark:bg-white dark:text-neutral-900 rounded-full text-sm font-medium transition-colors"
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
                className="flex items-center gap-2 px-4 py-2 border border-neutral-200 dark:border-neutral-700 text-black hover:bg-neutral-900 hover:text-white dark:bg-white dark:text-neutral-900 rounded-full text-sm font-medium transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>

      {/* Detail Sections */}
      {details.map((detail, index) => (
        <div
          key={`detail-${index}`}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <h3 className="text-xl md:text-2xl font-bold text-neutral-700 dark:text-neutral-200 text-center mb-4">
            {detail.title}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-sans max-w-3xl mx-auto text-center">
            {detail.description}
          </p>
          <Image
            src={detail.image}
            alt={detail.title}
            height={500}
            width={500}
            loading="lazy"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-8 rounded-xl"
          />
        </div>
      ))}
    </>
  );
});

ProjectContent.displayName = "ProjectContent";

export function Projects() {
  // Transform data to include JSX content
  const cards = projectsData.map((project) => ({
    category: project.category,
    title: project.title,
    src: project.src,
    content: (
      <ProjectContent
        tags={project.tags}
        overview={project.overview}
        details={project.details}
        githubUrl={project.githubUrl}
        webUrl={project.webUrl}
      />
    ),
  }));

  const cardElements = cards.map((card) => (
    <Card key={card.src} card={card} index={cards.indexOf(card)} />
  ));

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 pb-12">
        <div className="flex items-end justify-between mb-8">
             <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                 A collection of <br/> my work that I&apos;m proud of
            </h2>
             <span className="hidden md:block text-gray-400 font-mono">Click to view details</span>
        </div>
        <Carousel items={cardElements} />
      </div>
    </section>
  );
}
