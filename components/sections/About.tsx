"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

const draggablePhotos = [
  { src: "/profile.jpeg", rotate: "-6deg", top: "15%", left: "10%" },
  { src: "/profile2.jpeg", rotate: "8deg", top: "10%", left: "45%" },
  { src: "/profile3.jpeg", rotate: "-12deg", top: "40%", left: "15%" },
  { src: "/profile4.jpeg", rotate: "5deg", top: "35%", left: "50%" },
];

export default function About() {
  const constraintsRef = useRef(null);

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Draggable Photo Slider Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden group cursor-grab active:cursor-grabbing border border-border bg-foreground/[0.02]"
          ref={constraintsRef}
        >
          <div className="absolute top-6 left-6 z-30 pointer-events-none">
            <span className="text-xs font-mono uppercase tracking-[0.2em] bg-background/50 backdrop-blur-md px-4 py-2 rounded-full text-foreground border border-border">
              Drag to slide ↔
            </span>
          </div>

          <motion.div
            drag="x"
            dragConstraints={constraintsRef}
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            className="flex gap-6 absolute top-1/2 -translate-y-1/2 left-10"
            style={{ width: "max-content", paddingRight: "40px" }}
          >
            {draggablePhotos.map((photo, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotate: 0 }}
                initial={{ rotate: photo.rotate }}
                className="w-64 h-80 md:w-72 md:h-96 p-3 bg-white dark:bg-zinc-800 shadow-2xl rounded-2xl flex-shrink-0 border border-border transition-transform duration-300"
              >
                <div className="w-full h-full overflow-hidden rounded-xl">
                  <img
                    src={photo.src}
                    alt={`Gallery ${i}`}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="absolute bottom-8 left-8 p-6 glass rounded-2xl z-20 border border-white/10 max-w-[240px] pointer-events-none">
            <h3 className="text-xl font-bold text-white mb-1">Based in Indonesia</h3>
            <p className="text-zinc-300 text-sm">
              Transforming ideas into reality since 2017.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-500 font-mono tracking-widest uppercase text-sm mb-4 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            I build digital solutions that{" "}
            <span className="text-zinc-500">spark</span> conversation.
          </h2>
          <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
            <p>
              I am a passionate Full-Stack Web Developer with over 1 year of
              hands-on experience building modern, scalable, and user-friendly
              web applications. I enjoy working across both frontend and
              backend, turning ideas into fully functional digital products.
            </p>
            <p>
              On the frontend, I focus on creating clean, responsive, and
              interactive user interfaces using modern technologies. On the
              backend, I design efficient systems, APIs, and databases that
              ensure performance and reliability. I believe that great software
              is not just about functionality, but also about delivering a
              smooth and engaging user experience.
            </p>
            <p>
              I am constantly learning and exploring new technologies to improve
              my skills and stay up to date with industry trends. I enjoy
              solving problems, optimizing systems, and writing clean,
              maintainable code.
            </p>
            <p>
              Currently, I am open to new opportunities, collaborations, and
              challenging projects where I can contribute, grow, and make a
              meaningful impact.
            </p>
            <p>Let’s build something amazing together 🚀</p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-foreground text-3xl font-bold mb-1">20+</h4>
              <p className="text-zinc-500 text-sm">Projects Completed</p>
            </div>
            <div>
              <h4 className="text-foreground text-3xl font-bold mb-1">1+</h4>
              <p className="text-zinc-500 text-sm">Years Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
