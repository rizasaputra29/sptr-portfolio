
import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { Quote } from "@/components/sections/Quote";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="pb-0 bg-white dark:bg-black">
      <Hero />
        <TechStack />
        <Quote />
        <About />
        <Experience />
        <Projects />
        <CTA />
    </div>
  );
}
