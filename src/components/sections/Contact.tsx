'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 scroll-mt-24 border-t border-white/5 pb-40 lg:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center sm:text-left"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50 mb-6 tracking-tight">Let's build something exceptional.</h2>
        <p className="text-zinc-400 text-lg mb-10 max-w-2xl text-balance">
          Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <a 
          href="mailto:kunalgoswami8036@gmail.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-zinc-50 hover:bg-zinc-200 text-zinc-950 font-semibold py-4 px-8 rounded-full transition-colors"
        >
          <Mail size={18} />
          Get In Touch
        </a>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Kunal Goswami. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with Next.js <ArrowUpRight size={14} />
          </p>
        </div>
      </motion.div>
    </section>
  );
}
