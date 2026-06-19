'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, GraduationCap } from 'lucide-react';

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
        
        <div className="space-y-8">
          {/* Hackathon Card */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="group glass-panel rounded-xl p-5 sm:p-6 hover:border-emerald-400/20 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <Trophy size={18} className="text-emerald-400" />
              </div>
              <div className="min-w-0">
                <h3 className="font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors">
                  Hackathon Participant
                </h3>
                <p className="text-sm text-zinc-500 mt-0.5">5+ Hackathons</p>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  Participated in 5+ hackathons, building solutions in cybersecurity, AI, and data engineering.
                </p>
              </div>
            </div>
          </motion.div>

          {/* University Card */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group glass-panel rounded-xl p-5 sm:p-6 hover:border-emerald-400/20 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <GraduationCap size={18} className="text-emerald-400" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors">
                  B.Tech AI & Data Science
                </h3>
                <p className="text-sm text-zinc-500 mt-0.5">Galgotias University</p>

                {/* Dot timeline below university name */}
                <div className="flex items-center gap-2 mt-3 max-w-[200px] sm:max-w-xs">
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-emerald-500 border border-emerald-400/40" />
                    <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-400/80 ml-0.5">2025</span>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/50 to-zinc-700 relative min-w-[40px]">
                    <span className="absolute top-1/2 left-1/3 -translate-y-1/2 h-1 w-1 rounded-full bg-zinc-600" />
                    <span className="absolute top-1/2 left-2/3 -translate-y-1/2 h-1 w-1 rounded-full bg-zinc-600" />
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-zinc-500 mr-0.5">2029</span>
                    <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-zinc-700 border border-zinc-600/40" />
                  </div>
                </div>

                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  Focusing on machine learning, deep learning, and software engineering.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
