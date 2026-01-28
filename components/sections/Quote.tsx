"use client";

import { motion } from "framer-motion";

export function Quote() {
  return (
    <section id="quote" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-8">
              &ldquo;Without commitment, you&apos;ll never start. But more importantly, without consistency, you&apos;ll never finish.&rdquo;
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              - Denzel Washington, 2017
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-l border-gray-200 pl-8 md:pl-16">
          <div className="space-y-2">
            <p className="text-gray-500 text-md">Role</p>
            <h3 className="text-xl font-semibold text-gray-900">Software Engineer</h3>
          </div>
          <div className="space-y-2">
            <p className="text-gray-500 text-md">Location</p>
            <h3 className="text-xl font-semibold text-gray-900">Semarang, Indonesia</h3>
          </div>
          <div className="space-y-2">
            <p className="text-gray-500 text-md">Tech Stack</p>
            <h3 className="text-xl font-semibold text-gray-900">8+</h3>
          </div>
          <div className="space-y-2">
            <p className="text-gray-500 text-md">Education</p>
            <h3 className="text-xl font-semibold text-gray-900">Diponegoro University</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
