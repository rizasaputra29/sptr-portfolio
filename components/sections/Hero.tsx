"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const topContentRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !topContentRef.current) return;

    // Scroll animation - responsive y value (smaller on mobile)
    const mm = gsap.matchMedia();
    
    mm.add("(max-width: 640px)", () => {
      gsap.to(topContentRef.current, {
        y: "36vh",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
          pin: true,
        },
      });
    });

    mm.add("(min-width: 641px)", () => {
      gsap.to(topContentRef.current, {
        y: "45vh",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
          pin: true,
        },
      });
    });

    // Entry animations
    if (headlineRef.current) {
      gsap.fromTo(headlineRef.current, 
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
      );
    }

    if (subtextRef.current) {
      gsap.fromTo(subtextRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.5 }
      );
    }
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 z-30 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Top Content (Animated Mask) */}
      <div 
        ref={topContentRef}
        className="absolute top-0 left-0 w-full h-[65vh] sm:h-[55vh] z-20 bg-white flex flex-col justify-end pb-3 sm:pb-6 md:pb-10"
      >
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
          {/* Massive Editorial Headline */}
          <h1 
            ref={headlineRef}
            className="font-bold text-[#0a0a0a] uppercase tracking-[-0.04em] leading-[0.82] mb-4 sm:mb-6 md:mb-10"
            style={{
              fontSize: "clamp(2rem, 10vw, 8rem)",
            }}
          >
            <span className="block">Saputra</span>
            <span className="block">Portfolio</span>
          </h1>

          {/* Refined Subtext Grid */}
          <div 
            ref={subtextRef}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-2 sm:gap-x-4 sm:gap-y-3 md:gap-x-6 lg:gap-x-10 max-w-4xl"
          >
            <div className="col-span-1">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.15em] text-[#0a0a0a]/40 mb-1">Location</p>
              <p className="text-sm sm:text-base font-medium text-[#0a0a0a]">Semarang, Indonesia</p>
            </div>
            <div className="col-span-1">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.15em] text-[#0a0a0a]/40 mb-1">Role</p>
              <p className="text-sm sm:text-base font-medium text-[#0a0a0a]">Software Engineer</p>
            </div>
            <div className="col-span-2 sm:col-span-2 mt-1 sm:mt-0">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.15em] text-[#0a0a0a]/40 mb-1">Focus</p>
              <p className="text-xs sm:text-sm md:text-base font-medium text-[#0a0a0a] max-w-md leading-relaxed">
                Building end-to-end products for users with precision and elegance
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image (Fixed Bottom) */}
      <div className="absolute bottom-0 left-0 w-full h-[40vh] sm:h-[45vh] z-10 overflow-hidden">
        <Image 
          src="https://res.cloudinary.com/imagehandlers/image/upload/v1769581384/IMG_1721_brwalr.jpg" 
          alt="Hero Background" 
          fill 
          sizes="100vw"
          quality={100}
          unoptimized
          className="object-cover"
          priority
        />
        {/* Refined gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
      </div>
    </section>
  );
}


