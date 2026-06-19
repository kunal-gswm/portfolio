'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 scroll-mt-24 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-8">About</h2>
        
        <div className="space-y-6 text-lg text-zinc-300 leading-relaxed max-w-3xl">
          <p>
            I am a Data Science and AI Engineer focused on building data-driven applications with good user experiences.
          </p>
          <p>
            Currently pursuing my B.Tech, my focus is on building ETL systems, deploying machine learning models, and ensuring system security. I work on full-stack applications that bring these models to production.
          </p>
          <p>
            When I'm not writing code, you'll find me competing in hackathons, learning about security, or designing clean interfaces.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
