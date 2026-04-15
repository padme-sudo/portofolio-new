"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Globe,
  Layers,
  Zap,
  Database,
  Network,
  Shield,
} from "lucide-react";

const skills = [
  {
    name: "Frontend",
    icon: <Code2 />,
    level: "Expert",
    items: ["Next.js", "React", "Tailwind", "GSAP"],
  },
  {
    name: "Design",
    icon: <Palette />,
    level: "Expert",
    items: ["Figma", "UI/UX", "Adobe Illustrator", "Corel Draw"],
  },
  {
    name: "Backend",
    icon: <Database />,
    level: "Advanced",
    items: ["Node.js", "MySQL", "PHP", "Laravel", "Express.js"],
  },
  {
    name: "Networking",
    icon: <Network />,
    level: "Advanced",
    items: ["Cisco", "Mikrotik", "Ubiquiti"],
  },
  {
    name: "Cyber Security",
    icon: <Shield />,
    level: "Advanced",
    items: [
      "Ethical Hacking",
      "Penetration Testing",
      "Vulnerability Assessment",
      "Security Auditing",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-background-secondary transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="text-blue-500 font-mono tracking-widest uppercase text-sm mb-4 block">
              Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              My Technical <span className="text-gradient">Arsenal</span>
            </h2>
          </div>
          <p className="text-zinc-500 max-w-lg">
            I continuously evolve my stack to deliver the most efficient and
            scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.5)" }}
              className="p-8 glass rounded-3xl border border-border transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <p className="text-zinc-500 text-sm mb-6">{skill.level}</p>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1 rounded-full bg-foreground/5 text-zinc-400 group-hover:text-foreground transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
