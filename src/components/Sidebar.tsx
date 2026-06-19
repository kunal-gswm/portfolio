'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Download, Command } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('hero');

  // Smooth scroll handler
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Set up intersection observers for scroll spy (simplified for now)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    const sections = ['hero', 'about', 'arsenal', 'featured', 'work', 'experience', 'contact'];
    sections.forEach((s) => {
      const el = document.getElementById(s);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'arsenal', label: 'Technical Arsenal' },
    { id: 'featured', label: 'Featured Project' },
    { id: 'work', label: 'Selected Work' },
    { id: 'experience', label: 'Experience' },
  ];

  return (
    <aside className="sticky top-0 h-screen w-full lg:w-[400px] flex-shrink-0 flex flex-col justify-between p-8 lg:p-12 lg:border-r border-white/5 bg-zinc-950 z-40 print:hidden">
      
      {/* Top Section */}
      <div>
        <div className="relative w-16 h-16 rounded-full overflow-hidden mb-6 border border-white/10">
          <Image src="/assets/profile.jpg" alt="Kunal Goswami" fill className="object-cover" />
        </div>
        
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50 mb-2">Kunal Goswami</h1>
        <h2 className="text-lg font-medium text-zinc-400 mb-4">AI & Data Science Engineer</h2>
        
        <p className="text-sm text-zinc-500 mb-6 text-balance">
          Transforming complex data into scalable intelligence and secure architectures.
        </p>

        {/* Status indicator */}
        <div className="flex items-center gap-3 text-xs font-medium text-emerald-400/90 bg-emerald-400/10 w-max px-3 py-1.5 rounded-full border border-emerald-400/20 mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Building scalable products
        </div>

        {/* Navigation */}
        <nav className="hidden lg:block space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`group flex items-center gap-4 text-sm font-medium transition-all ${
                activeSection === item.id ? 'text-zinc-50' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <span className={`h-px transition-all duration-300 ${
                activeSection === item.id ? 'w-8 bg-zinc-50' : 'w-4 bg-zinc-700 group-hover:w-6 group-hover:bg-zinc-400'
              }`} />
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div>
        {/* Command Palette Hint */}
        <div className="hidden lg:flex items-center gap-2 text-xs text-zinc-600 mb-6 bg-zinc-900/50 p-3 rounded-lg border border-white/5 w-max">
          <Command size={14} />
          <span>Press <kbd className="font-mono bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-400">Ctrl</kbd> + <kbd className="font-mono bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-400">K</kbd> to navigate</span>
        </div>

        <a 
          href="/resume.pdf"
          download="Kunal_Goswami_Resume.pdf"
          aria-label="Download Resume PDF"
          className="w-full flex items-center justify-center gap-2 bg-zinc-50 hover:bg-zinc-200 text-zinc-950 font-medium py-3 px-4 rounded-xl transition-colors mb-6 group"
        >
          <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
          Download Resume
        </a>

        <div className="flex items-center gap-5 text-zinc-400">
          <a href="https://github.com/kunal-gswm" target="_blank" rel="noreferrer" className="hover:text-zinc-50 transition-colors">
            <FaGithub size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/kunalgoswami12/" target="_blank" rel="noreferrer" className="hover:text-zinc-50 transition-colors">
            <FaLinkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:kunalgoswami8036@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-50 transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>

    </aside>
  );
}
