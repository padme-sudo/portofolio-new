"use client";

import { useEffect } from "react";
import Link from "next/link";
import { animate, stagger } from "animejs";

export default function Hero() {
  useEffect(() => {
    animate(".hero-reveal", {
      translateY: [40, 0],
      opacity: [0, 1],
      duration: 600,
      delay: stagger(120),
      ease: "outExpo",
    });

    animate(".hero-float", {
      translateY: [-6, 6],
      duration: 2500,
      loop: true,
      direction: "alternate",
      ease: "easeInOutSine",
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden bg-bg"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-24 h-24 neo-border bg-white neo-shadow mx-auto mb-6 overflow-hidden hero-reveal hero-float" style={{ opacity: 0 }}>
          <img
            src="/profile2.jpeg"
            alt="Aditya Siagian"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 leading-[0.95] hero-reveal" style={{ opacity: 0 }}>
          Aditya{" "}
          <span className="bg-yellow px-4 neo-border inline-block -rotate-1">
            Siagian
          </span>
        </h1>

        <p className="text-xl md:text-2xl font-bold mb-4 hero-reveal" style={{ opacity: 0 }}>
          Full-Stack Developer <span className="text-fg">|</span> Network Engineer{" "}
          <span className="text-fg">|</span> Cyber Security Enthusiast
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/projects"
            className="neo-btn px-8 py-3 bg-yellow text-fg text-base font-black uppercase neo-shadow inline-block hero-reveal"
            style={{ opacity: 0 }}
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="neo-btn px-8 py-3 bg-white text-fg text-base font-black uppercase neo-shadow inline-block hero-reveal"
            style={{ opacity: 0 }}
          >
            Let&apos;s Talk
          </Link>
        </div>

        <div className="flex items-center justify-center gap-3 mt-6 hero-reveal" style={{ opacity: 0 }}>
          <a href="https://github.com/adityasiagian07" target="_blank" rel="noopener noreferrer" className="w-10 h-10 neo-border bg-white neo-shadow-sm flex items-center justify-center hover:bg-pink transition-colors">
            <img src="https://cdn.simpleicons.org/github" alt="GitHub" className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/adityasiagian/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 neo-border bg-white neo-shadow-sm flex items-center justify-center hover:bg-pink transition-colors">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
          </a>
          <a href="https://instagram.com/_adityasiagian" target="_blank" rel="noopener noreferrer" className="w-10 h-10 neo-border bg-white neo-shadow-sm flex items-center justify-center hover:bg-pink transition-colors">
            <img src="https://cdn.simpleicons.org/instagram" alt="Instagram" className="w-5 h-5" />
          </a>
          <a href="https://www.facebook.com/share/1CfYK3UHHL/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 neo-border bg-white neo-shadow-sm flex items-center justify-center hover:bg-pink transition-colors">
            <img src="https://cdn.simpleicons.org/facebook" alt="Facebook" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
