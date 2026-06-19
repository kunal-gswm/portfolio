'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, GraduationCap, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center py-32 scroll-mt-24">
      
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-3 mb-8"
      >
        <span className="h-px w-8 bg-zinc-700"></span>
        <span className="text-sm font-medium tracking-widest text-zinc-400 uppercase">Kunal Goswami</span>
      </motion.div>

      {/* Main Headline */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-50 mb-8 max-w-[600px] leading-[1.15]"
      >
        Building software with AI and data.
      </motion.h1>

      {/* Supporting Text */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-lg text-zinc-400 max-w-[500px] mb-12 leading-relaxed"
      >
        I build backend systems, machine learning models, and user interfaces.
      </motion.p>

      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-16 text-sm text-zinc-500 font-medium"
      >
        <div className="flex items-center gap-2">
          <GraduationCap size={16} className="text-zinc-400" />
          B.Tech AI & Data Science
        </div>
        <div className="flex items-center gap-2">
          <Terminal size={16} className="text-zinc-400" />
          Building XARDIS
        </div>
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-emerald-400/80" />
          <span className="text-emerald-400/90">Available for Internships</span>
        </div>
      </motion.div>

      {/* CTAs */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center gap-6"
      >
        <button 
          onClick={() => scrollTo('featured')}
          className="group flex items-center gap-2 bg-zinc-50 hover:bg-zinc-200 text-zinc-950 font-semibold py-3 px-6 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          View Projects
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <a 
          href="/resume.pdf"
          download="Kunal_Goswami_Resume.pdf"
          aria-label="Download Resume PDF"
          className="group flex items-center gap-2 bg-transparent hover:bg-white/5 border border-white/10 text-zinc-300 hover:text-white font-medium py-3 px-6 rounded-full transition-colors"
        >
          <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
