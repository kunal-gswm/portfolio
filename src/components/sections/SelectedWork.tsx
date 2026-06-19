'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Hostile Data",
    summary: "Cybersecurity threat intelligence and data engineering pipeline.",
    image: "/assets/hostile_data.png",
    github: "https://github.com/kunal-gswm/Hostile-Data",
    tech: ["Python", "Data Engineering", "Cybersecurity"]
  },
  {
    title: "Blockchain E-Voting",
    summary: "Secure, decentralized digital ballot and voting infrastructure.",
    image: "/assets/blockchain_evoting.png",
    github: "#",
    tech: ["Solidity", "React", "Cryptography"]
  },
  {
    title: "LocalInvoice",
    summary: "SaaS business invoicing and financial analytics system.",
    image: "/assets/localinvoice.png",
    github: "https://github.com/kunal-gswm/LocalInvoice",
    tech: ["TypeScript", "Next.js", "SQL"]
  }
];

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 scroll-mt-24 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-8">Selected Work</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col glass-panel rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-900 border-b border-white/5">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-zinc-100 mb-2">{project.title}</h3>
                <p className="text-sm text-zinc-400 mb-6 flex-grow">{project.summary}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-wider font-medium text-zinc-500 bg-white/5 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-auto">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-100 transition-colors p-2 -ml-2 rounded-lg hover:bg-white/5">
                    <FaGithub size={18} />
                  </a>
                  <button className="text-zinc-500 hover:text-zinc-100 transition-colors p-2 rounded-lg hover:bg-white/5">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
