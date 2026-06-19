'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-24 scroll-mt-24 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-12">Experience & Education</h2>
        
        <div className="space-y-12">
          {/* Hackathon - no timeline */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="group relative lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="z-10">
              <h3 className="font-medium leading-snug text-zinc-200">
                <div className="group-hover:text-emerald-400 transition-colors">
                  Hackathon Participant
                </div>
                <div className="text-zinc-500 mt-1">5+ Hackathons</div>
              </h3>
              <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                Participated in 5+ hackathons, building innovative solutions across cybersecurity, AI, and data engineering domains.
              </p>
            </div>
          </motion.div>

          {/* University - with dot timeline */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="z-10">
              <h3 className="font-medium leading-snug text-zinc-200">
                <div className="group-hover:text-emerald-400 transition-colors">
                  B.Tech AI & Data Science
                </div>
                <div className="text-zinc-500 mt-1">Galgotias University</div>
              </h3>

              {/* Dot timeline */}
              <div className="flex items-center gap-3 mt-4">
                <div className="flex items-center gap-1">
                  <span className="h-3 w-3 rounded-full bg-emerald-500 border-2 border-emerald-400/30 flex-shrink-0" />
                  <span className="text-xs font-semibold text-zinc-400 ml-1">2025</span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/60 via-zinc-600 to-zinc-700 relative">
                  <span className="absolute top-1/2 left-1/4 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-zinc-600" />
                  <span className="absolute top-1/2 left-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-zinc-600" />
                  <span className="absolute top-1/2 left-3/4 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-zinc-600" />
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-semibold text-zinc-500 mr-1">2029</span>
                  <span className="h-3 w-3 rounded-full bg-zinc-700 border-2 border-zinc-600/30 flex-shrink-0" />
                </div>
              </div>

              <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                Specializing in advanced machine learning algorithms, deep learning, and robust software engineering principles.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
