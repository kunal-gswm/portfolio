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
            I am a Data Science and AI Engineer passionate about building products that live at the intersection of complex data pipelines and intuitive user experiences.
          </p>
          <p>
            Currently pursuing my B.Tech, my focus has been on architecting scalable ETL systems, deploying machine learning models, and ensuring robust cybersecurity measures. I don't just train models in notebooks; I engineer full-stack applications that put those models into the hands of real users.
          </p>
          <p>
            When I'm not optimizing queries or writing Python, you'll find me competing in hackathons, researching threat intelligence, or designing clean, minimalist interfaces.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
