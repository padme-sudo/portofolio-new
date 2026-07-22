"use client";

import React, { useEffect } from "react";
import { animate, stagger } from "animejs";

const projects = [
  {
    title: "Web Katering VAS",
    desc: "Online catering platform for food menu ordering with order management system.",
    image: "/project1.png",
    link: "#",
    github: "#",
    tech: ["react"],
  },
  {
    title: "Web Redesign Web School SMK IT Ihsanul Fikri",
    desc: "School website redesign with a modern, responsive, and informative layout.",
    image: "/project2.png",
    link: "#",
    github: "#",
    tech: ["react", "wordpress"],
  },
];

export default function Projects() {
  useEffect(() => {
    animate(".proj-reveal", {
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 500,
      delay: stagger(100),
      ease: "outQuad",
    });
  }, []);

  return (
    <section id="projects" className="min-h-screen flex items-center py-16 px-6 bg-bg-secondary border-y-[3px] border-fg">
      <div className="max-w-6xl mx-auto text-center">
        <span className="bg-cyan text-white font-black tracking-wider uppercase text-sm px-3 py-1 neo-border inline-block mb-4 proj-reveal" style={{ opacity: 0 }}>
          Projects
        </span>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <div key={i} className="neo-card bg-white neo-shadow overflow-hidden text-left proj-reveal transition-transform duration-200 hover:scale-[1.02]" style={{ opacity: 0 }}>
              <div className="aspect-[16/10] overflow-hidden border-b-[3px] border-fg bg-bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-black mb-1">{project.title}</h3>
                <p className="text-fg-secondary text-sm font-medium mb-3">
                  {project.desc}
                </p>
                <div className="flex gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <img
                      key={t}
                      src={`https://cdn.simpleicons.org/${t}`}
                      alt={t}
                      className="w-5 h-5"
                      title={t}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <a href={project.link} className="w-9 h-9 neo-border bg-white neo-shadow-sm flex items-center justify-center hover:bg-cyan transition-colors">
                    <img src="https://cdn.simpleicons.org/googlechrome" alt="Live" className="w-4 h-4" />
                  </a>
                  <a href={project.github} className="w-9 h-9 neo-border bg-white neo-shadow-sm flex items-center justify-center hover:bg-yellow transition-colors">
                    <img src="https://cdn.simpleicons.org/github" alt="Code" className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
