'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectData: Record<string, any> = {
  gamelingo: {
    title: "GameLingo",
    tagline: "AI-powered gaming terminology translation engine.",
    role: "Full-Stack AI Engineer",
    duration: "4 Weeks",
    metrics: ["<200ms latency", "50+ Games Supported", "Microservices Architecture"],
    image: "/assets/gamelingo.png",
    overview: "GameLingo bridges the communication gap in global multiplayer games by instantly translating gaming-specific slang, acronyms, and terminology into the user's native language using fine-tuned NLP models.",
    problem: "Standard translation engines fail to understand context-specific gaming slang (e.g., 'ganking', 'peeling', 'aggro'). Non-native speakers often struggle to coordinate with teammates in fast-paced competitive environments.",
    architecture: "The application uses a Next.js frontend communicating with a FastAPI backend. The translation engine relies on a fine-tuned Hugging Face model deployed via Docker, backed by PostgreSQL for caching frequent term lookups.",
    implementation: "I engineered the entire stack from the ground up. I scraped Reddit and Discord to build a custom dataset of gaming terminology, fine-tuned a transformer model, and exposed it via an optimized REST API. The frontend uses React Query for real-time translation state management.",
    results: "Reduced average translation time to under 200ms. Successfully deployed the MVP which can currently handle gaming terms across 5 major languages and 50+ popular e-sports titles.",
    tech: ["Python", "FastAPI", "React", "Next.js", "Hugging Face", "PostgreSQL", "Docker", "TailwindCSS"],
    github: "https://github.com/kunal-gswm/gamelingo",
    live: "#"
  }
};

export default function ProjectCaseStudy({ params }: { params: { slug: string } }) {
  // Extract slug from URL and check if project exists
  const slug = params.slug;
  const project = projectData[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-zinc-400">
        Project not found.
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-50 font-sans pb-32">
      {/* Header */}
      <header className="max-w-4xl mx-auto px-6 pt-12 md:pt-20">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">{project.title}</h1>
        <p className="text-xl text-zinc-400 max-w-2xl mb-10 text-balance">{project.tagline}</p>
        
        <div className="flex flex-wrap gap-4 mb-12">
          <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 rounded-full text-sm font-medium transition-colors">
            <FaGithub size={16} /> Source Code
          </a>
          <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-zinc-50 hover:bg-zinc-200 text-zinc-950 px-5 py-2.5 rounded-full text-sm font-medium transition-colors">
            Live Demo <ExternalLink size={16} />
          </a>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-zinc-900 border border-white/5">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-12 md:gap-8">
        
        {/* Left Sidebar (Meta) */}
        <div className="md:col-span-1 space-y-8">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2">Role</h4>
            <p className="text-zinc-300">{project.role}</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2">Duration</h4>
            <p className="text-zinc-300">{project.duration}</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-4">Core Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t: string) => (
                <span key={t} className="text-xs font-medium bg-white/5 border border-white/10 px-2.5 py-1 rounded text-zinc-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:col-span-2 space-y-16 text-lg text-zinc-300 leading-relaxed">
          <section>
            <h3 className="text-2xl font-bold text-zinc-50 mb-4">Overview</h3>
            <p>{project.overview}</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-zinc-50 mb-4">The Problem</h3>
            <p>{project.problem}</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-zinc-50 mb-4">Architecture</h3>
            <p>{project.architecture}</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-zinc-50 mb-4">Implementation</h3>
            <p>{project.implementation}</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-zinc-50 mb-4">Results</h3>
            <p>{project.results}</p>
          </section>
        </div>
      </div>
    </article>
  );
}
