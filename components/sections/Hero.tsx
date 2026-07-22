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
      className="relative min-h-dvh flex items-center justify-center px-4 md:px-6 pt-12 md:pt-24 overflow-hidden bg-bg"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-16 h-16 md:w-24 md:h-24 neo-border bg-white neo-shadow mx-auto mb-3 md:mb-6 overflow-hidden hero-reveal hero-float" style={{ opacity: 0 }}>
          <img
            src="/profile2.jpeg"
            alt="Aditya Siagian"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <h1 className="text-3xl md:text-7xl font-black tracking-tight mb-2 md:mb-4 leading-[0.95] hero-reveal" style={{ opacity: 0 }}>
          Aditya{" "}
          <span className="bg-yellow px-2 md:px-4 neo-border inline-block -rotate-1">
            Siagian
          </span>
        </h1>

        <p className="text-xs md:text-2xl font-bold mb-3 md:mb-4 hero-reveal leading-snug md:leading-normal px-1 md:px-0" style={{ opacity: 0 }}>
          <span className="block md:inline">Full-Stack Developer</span>{" "}
          <span className="text-fg mx-1 hidden md:inline">|</span>
          <span className="block md:hidden" />
          <span className="block md:inline">Network Engineer</span>{" "}
          <span className="text-fg mx-1 hidden md:inline">|</span>
          <span className="block md:hidden" />
          <span className="block md:inline">Cyber Security Enthusiast</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3 px-2 md:px-0">
          <Link
            href="/projects"
            className="neo-btn w-full sm:w-auto px-5 md:px-8 py-2.5 md:py-3 bg-yellow text-fg text-xs md:text-base font-black uppercase neo-shadow inline-block hero-reveal"
            style={{ opacity: 0 }}
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="neo-btn w-full sm:w-auto px-5 md:px-8 py-2.5 md:py-3 bg-white text-fg text-xs md:text-base font-black uppercase neo-shadow inline-block hero-reveal"
            style={{ opacity: 0 }}
          >
            Let&apos;s Talk
          </Link>
        </div>

        <div className="flex items-center justify-center gap-1.5 md:gap-3 mt-4 md:mt-6 hero-reveal" style={{ opacity: 0 }}>
          <a href="https://github.com/padme-sudo" target="_blank" rel="noopener noreferrer" className="w-7 h-7 md:w-10 md:h-10 neo-border bg-white neo-shadow-sm flex items-center justify-center hover:bg-pink transition-colors">
            <img src="https://cdn.simpleicons.org/github" alt="GitHub" className="w-3.5 h-3.5 md:w-5 md:h-5" />
          </a>
          <a href="https://www.linkedin.com/in/adityasiagian/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 md:w-10 md:h-10 neo-border bg-white neo-shadow-sm flex items-center justify-center hover:bg-pink transition-colors">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons/icons/linkedin.svg" alt="LinkedIn" className="w-3.5 h-3.5 md:w-5 md:h-5" />
          </a>
          <a href="https://instagram.com/_adityasiagian" target="_blank" rel="noopener noreferrer" className="w-7 h-7 md:w-10 md:h-10 neo-border bg-white neo-shadow-sm flex items-center justify-center hover:bg-pink transition-colors">
            <img src="https://cdn.simpleicons.org/instagram" alt="Instagram" className="w-3.5 h-3.5 md:w-5 md:h-5" />
          </a>
          <a href="https://www.facebook.com/share/1CfYK3UHHL/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 md:w-10 md:h-10 neo-border bg-white neo-shadow-sm flex items-center justify-center hover:bg-pink transition-colors">
            <img src="https://cdn.simpleicons.org/facebook" alt="Facebook" className="w-3.5 h-3.5 md:w-5 md:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
