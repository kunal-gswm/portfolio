'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function FeaturedProject() {
  return (
    <section id="featured" className="py-24 scroll-mt-24 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-8">Featured Project</h2>
        
        <div className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 transition-colors hover:border-white/10">
          <div className="aspect-[16/9] w-full relative overflow-hidden bg-zinc-950">
            <Image 
              src="/assets/gamelingo.png" 
              alt="GameLingo Translation Engine" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent"></div>
          </div>
          
          <div className="relative p-8 sm:p-10 -mt-20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-6">
              <div>
                <h3 className="text-3xl font-bold text-zinc-50 mb-2">GameLingo</h3>
                <p className="text-zinc-400 text-lg">Translation engine for gaming terminology.</p>
              </div>
              <div className="flex gap-3">
                <a href="https://github.com/kunal-gswm/gamelingo" target="_blank" rel="noreferrer" className="flex items-center justify-center h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors border border-white/10">
                  <FaGithub size={18} />
                </a>
                <Link href="/projects/gamelingo" className="flex flex-shrink-0 items-center justify-center gap-2 h-10 px-5 rounded-full bg-zinc-50 hover:bg-zinc-200 text-zinc-950 font-medium transition-colors whitespace-nowrap text-sm">
                  Case Study
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 pb-8 border-b border-white/5">
              <div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Architecture</div>
                <div className="text-sm font-medium text-zinc-300">Microservices</div>
              </div>
              <div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Performance</div>
                <div className="text-sm font-medium text-zinc-300">Fast response time</div>
              </div>
              <div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Role</div>
                <div className="text-sm font-medium text-zinc-300">Full-Stack</div>
              </div>
              <div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Status</div>
                <div className="text-sm font-medium text-emerald-400">Deployed</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Python', 'FastAPI', 'React', 'NLP', 'PostgreSQL'].map(tech => (
                <span key={tech} className="text-xs font-medium text-zinc-400 bg-zinc-800/50 border border-white/5 px-2.5 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
