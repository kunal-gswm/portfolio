'use client';

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Hackathon Participant",
    company: "5+ Hackathons",
    date: "2023 — Present",
    description: "Participated in 5+ hackathons, building innovative solutions across cybersecurity, AI, and data engineering domains."
  },
  {
    title: "B.Tech AI & Data Science",
    company: "Galgotias University",
    date: "2025 — 2029",
    description: "Specializing in advanced machine learning algorithms, deep learning, and robust software engineering principles."
  }
];

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
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
            >
              <header className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2">
                {exp.date}
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-zinc-200">
                  <div className="group-hover:text-emerald-400 transition-colors">
                    {exp.title}
                  </div>
                  <div className="text-zinc-500 mt-1">{exp.company}</div>
                </h3>
                <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
