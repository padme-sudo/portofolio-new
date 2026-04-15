"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-Commerce Reimagined",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
    link: "#",
    github: "#",
    description: "A high-performance luxury shopping experience with Next.js 14."
  },
];

const categories = ["All", "Web App", "SaaS", "Fintech", "Design"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-mono tracking-widest uppercase text-sm mb-4 block">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Selected <span className="text-gradient">Creations</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? "bg-blue-500 text-white" 
                    : "glass text-zinc-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-3xl bg-background-secondary border border-border"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-x-0 top-0 h-[62.5%] bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
          <a href={project.link} className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
            <ExternalLink size={20} />
          </a>
          <a href={project.github} className="w-12 h-12 rounded-full border border-border bg-background/50 flex items-center justify-center hover:scale-110 transition-transform shadow-xl text-foreground">
            <Code size={20} />
          </a>
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-blue-500 text-xs font-mono mb-2 block">{project.category}</span>
            <h3 className="text-2xl font-bold">{project.title}</h3>
          </div>
        </div>
        <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}
