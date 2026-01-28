"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section id="cta" className="py-16 px-8 bg-black text-white rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl md:text-8xl font-light mb-12 tracking-tight">
            Let&apos;s Build <br /> Something Together
          </h2>
          <Link
            href="mailto:rizasaputra177@gmail.com"
            className="group relative inline-flex items-center gap-4 px-12 py-6 rounded-full border-2 border-white/20 hover:bg-white hover:border-white transition-all duration-300"
          >
            <span className="text-xl font-medium group-hover:text-black tracking-wide">
              Get in Touch
            </span>
            <ArrowRight className="group-hover:text-black transition-colors" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
