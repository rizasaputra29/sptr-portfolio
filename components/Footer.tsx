import Link from "next/link";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-8 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-sans text-2xl font-semibold tracking-tight text-white">
                sptr
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Building scalable, performant software that solves real-world problems with precision and elegance.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-medium text-lg mb-6">Navigation</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#experience" className="hover:text-white transition-colors">Experience</Link></li>
              <li><Link href="#projects" className="hover:text-white transition-colors">Projects</Link></li>
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="font-medium text-lg mb-6">Services</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>Product Development</li>
              <li>Full-Stack Engineering</li>
              <li>SEO Optimization</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-lg mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="mailto:rizasaputra177@gmail.com" className="hover:text-white transition-colors">rizasaputra177@gmail.com</a></li>
              <li>Semarang, Indonesia</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Riza Saputra. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/rizasaputra29" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/rizasaputra29" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="https://instagram.com/rizasaputra29" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="mailto:rizasaputra177@gmail.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Email"><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
