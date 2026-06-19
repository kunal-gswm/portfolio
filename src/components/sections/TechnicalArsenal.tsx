'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: "Languages",
    items: ["Python", "SQL", "JavaScript", "TypeScript", "C++"]
  },
  {
    category: "Data & AI",
    items: ["Pandas", "Scikit-Learn", "TensorFlow", "NLP", "Machine Learning"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"]
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Express", "TailwindCSS"]
  },
  {
    category: "Cloud & Tools",
    items: ["AWS", "Docker", "Git", "Linux", "ETL Pipelines"]
  }
];

export default function TechnicalArsenal() {
  return (
    <section id="arsenal" className="py-24 scroll-mt-24 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-12">Technical Arsenal</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {skills.map((skillGroup, idx) => (
            <div key={idx}>
              <h3 className="text-zinc-100 font-medium mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="text-sm text-zinc-400 bg-white/[0.02] border border-white/5 px-3 py-1.5 rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
