'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Search, Home, FileText, Briefcase, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const commands = [
    { id: 'home', title: 'Go to Home', icon: Home, action: () => { router.push('/'); setIsOpen(false); } },
    { id: 'resume', title: 'Download Resume', icon: FileText, action: () => { 
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Kunal_Goswami_Resume.pdf';
        link.click();
        setIsOpen(false); 
      } 
    },
    { id: 'github', title: 'View GitHub', icon: FaGithub, action: () => { window.open('https://github.com/kunal-gswm', '_blank'); setIsOpen(false); } },
    { id: 'linkedin', title: 'View LinkedIn', icon: FaLinkedin, action: () => { window.open('https://www.linkedin.com/in/kunalgoswami12/', '_blank'); setIsOpen(false); } },
    { id: 'project1', title: 'Case Study: GameLingo', icon: Briefcase, action: () => { router.push('/projects/gamelingo'); setIsOpen(false); } },
    { id: 'email', title: 'Send Email', icon: Mail, action: () => { window.location.href = 'mailto:kunalgoswami8036@gmail.com'; setIsOpen(false); } },
  ];

  const filteredCommands = query === '' 
    ? commands 
    : commands.filter((cmd) => cmd.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[90%] max-w-xl bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            <div className="flex items-center px-4 py-3 border-b border-white/10">
              <Search size={20} className="text-zinc-500 mr-3" />
              <input
                autoFocus
                type="text"
                placeholder="Type a command or search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-zinc-100 placeholder-zinc-500 text-lg"
              />
              <div className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded border border-white/5">ESC</div>
            </div>

            <div className="max-h-80 overflow-y-auto p-2">
              {filteredCommands.length === 0 ? (
                <div className="p-4 text-center text-zinc-500">No results found.</div>
              ) : (
                filteredCommands.map((cmd) => {
                  const Icon = cmd.icon;
                  return (
                    <button
                      key={cmd.id}
                      onClick={cmd.action}
                      className="w-full flex items-center px-3 py-3 rounded-xl hover:bg-white/5 transition-colors text-left group"
                    >
                      <Icon size={18} className="text-zinc-500 group-hover:text-zinc-300 mr-3" />
                      <span className="text-zinc-300 group-hover:text-zinc-100">{cmd.title}</span>
                    </button>
                  );
                })
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
