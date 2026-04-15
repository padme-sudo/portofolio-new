"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          drag
          dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
          whileDrag={{ scale: 1.1, cursor: "grabbing" }}
          initial={{ opacity: 0, scale: 0.8, y: -20, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotate: 5 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20, 
            delay: 0.2 
          }}
          className="mb-8 inline-flex items-center gap-3 p-2 pr-6 glass rounded-full cursor-grab active:cursor-grabbing border-border/50 shadow-xl"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-500">
            <img 
              src="/profile.jpeg" 
              alt="Aditya Siagian" 
              className="w-full h-full object-cover pointer-events-none" 
            />
          </div>
          <div className="flex flex-col items-start leading-none pointer-events-none">
            <span className="text-sm font-bold">Aditya Siagian</span>
            <span className="text-xs text-green-500 font-medium flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Open for work
            </span>
          </div>
        </motion.div>

        <h1
          ref={headingRef}
          className="text-5xl md:text-8xl font-bold tracking-tight mb-8"
        >
          Hi, I'm <span className="text-gradient">Aditya</span>👋
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I'm Aditya, a Full-Stack Web Developer with 1+ year of experience
          building fast, scalable, and modern web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="px-8 py-4 bg-foreground text-background rounded-full font-semibold flex items-center gap-2 hover:bg-blue-500 hover:text-white transition-all group">
            View My Work{" "}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition-all">
            Let's Talk
          </button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full -z-1" />
    </section>
  );
}
