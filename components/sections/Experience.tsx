"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2025 - Present",
    role: "Web Developer",
    company: "Freelance",
    description:
      "As a freelancer, I value clear communication, reliability, and meeting deadlines. I enjoy collaborating with clients to understand their goals and turn their vision into reality.",
  },
  {
    year: "2026 - Present",
    role: "Librarian",
    company: "SMKIT Ihsanul Fikri Mungkid",
    description:
      "As a librarian, I am responsible for managing the library and assisting students with their research needs. I also organize library events and activities to promote reading and literacy.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-background-secondary transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-blue-500 font-mono tracking-widest uppercase text-sm mb-4 block">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">Work Experience</h2>
        </div>

        <div className="relative border-l border-border ml-4 md:ml-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative pl-12 pb-16 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

              <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-4">
                <span className="text-zinc-500 font-mono text-sm">
                  {exp.year}
                </span>
                <span className="hidden md:block w-4 h-[1px] bg-border" />
                <h3 className="text-2xl font-bold">{exp.role}</h3>
              </div>

              <h4 className="text-foreground/60 font-medium mb-4">
                {exp.company}
              </h4>
              <p className="text-zinc-400 leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
