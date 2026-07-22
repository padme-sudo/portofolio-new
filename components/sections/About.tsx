"use client";

import { useEffect } from "react";
import { animate, stagger } from "animejs";

export default function About() {
  useEffect(() => {
    animate(".about-reveal", {
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 500,
      delay: stagger(100),
      ease: "outQuad",
    });

    animate(".about-float", {
      translateY: [-6, 6],
      duration: 2500,
      loop: true,
      direction: "alternate",
      ease: "easeInOutSine",
    });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-16 md:py-20 px-6 relative overflow-hidden bg-bg-secondary border-y-[3px] border-fg"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4">
          <div className="lg:col-span-2 about-reveal" style={{ opacity: 0 }}>
            <div className="neo-border bg-yellow neo-shadow h-full about-float">
              <div className="p-4">
                <div className="aspect-square overflow-hidden border-[3px] border-fg">
                  <img
                    src="/profile2.jpeg"
                    alt="Aditya Siagian"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="bg-white border-t-[3px] border-fg p-4">
                <h3 className="text-xl font-black">Aditya Siagian</h3>
                <p className="text-fg-secondary text-sm font-medium">
                  Temanggung, Indonesia
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 neo-card bg-white neo-shadow p-4 md:p-5 about-reveal" style={{ opacity: 0 }}>
            <span className="bg-purple text-white font-black tracking-wider uppercase text-xs px-2 py-0.5 neo-border inline-block mb-2">
              About
            </span>
            <p className="text-fg-secondary leading-relaxed font-medium">
              Full Stack Developer, Network Engineer, and Cyber Security
              Enthusiast. I build web apps, design network infrastructure,
              and study ethical hacking.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="neo-card bg-white neo-shadow p-4 md:p-5 about-reveal" style={{ opacity: 0 }}>
            <span className="bg-cyan text-white font-black tracking-wider uppercase text-xs px-2 py-0.5 neo-border inline-block mb-2">Experience</span>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between">
                  <p className="font-black">Full Stack Developer</p>
                  <span className="bg-purple text-white font-bold text-xs px-2 py-0.5 neo-border">2025 - Present</span>
                </div>
                <p className="text-fg-secondary text-sm font-medium">Freelance</p>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <p className="font-black">Penetration Tester</p>
                  <span className="bg-purple text-white font-bold text-xs px-2 py-0.5 neo-border">2026 - Present</span>
                </div>
                <p className="text-fg-secondary text-sm font-medium">Freelance</p>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <p className="font-black">Network Engineer</p>
                  <span className="bg-purple text-white font-bold text-xs px-2 py-0.5 neo-border">2017 - Present</span>
                </div>
                <p className="text-fg-secondary text-sm font-medium">SMK IT Ihsanul Fikri Magelang</p>
              </div>
            </div>
          </div>

          <div className="neo-card bg-white neo-shadow p-4 md:p-5 about-reveal" style={{ opacity: 0 }}>
            <span className="bg-pink text-white font-black tracking-wider uppercase text-xs px-2 py-0.5 neo-border inline-block mb-2">Skills</span>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-black text-fg-secondary mb-2">Frontend</p>
                <div className="flex flex-wrap gap-2">
                  <SkillLogo slug="nextdotjs" name="Next.js" />
                  <SkillLogo slug="react" name="React" />
                  <SkillLogo slug="tailwindcss" name="Tailwind" />
                </div>
              </div>
              <div>
                <p className="text-xs font-black text-fg-secondary mb-2">Backend</p>
                <div className="flex flex-wrap gap-2">
                  <SkillLogo slug="nodedotjs" name="Node.js" />
                  <SkillLogo slug="laravel" name="Laravel" />
                  <SkillLogo slug="mysql" name="MySQL" />
                </div>
              </div>
              <div>
                <p className="text-xs font-black text-fg-secondary mb-2">Network & Security</p>
                <div className="flex flex-wrap gap-2">
                  <SkillLogo slug="cisco" name="Cisco" />
                  <SkillLogo slug="mikrotik" name="Mikrotik" />
                  <SkillLogo slug="linux" name="Linux" />
                  <SkillLogo slug="kalilinux" name="Kali Linux" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="neo-card bg-white neo-shadow p-4 md:p-5 about-reveal" style={{ opacity: 0 }}>
            <span className="bg-green text-white font-black tracking-wider uppercase text-xs px-2 py-0.5 neo-border inline-block mb-2">Training</span>
            <div className="space-y-2">
              <div>
                <p className="font-black text-sm">Dicoding — Pemrograman Dasar</p>
                <p className="text-fg-secondary text-xs font-medium">2025</p>
              </div>
              <div>
                <p className="font-black text-sm">Dicoding — Data Science</p>
                <p className="text-fg-secondary text-xs font-medium">2025</p>
              </div>
              <div>
                <p className="font-black text-sm">ID-Networkers (IDN) — Cisco CCNA</p>
                <p className="text-fg-secondary text-xs font-medium">2026</p>
              </div>
              <div>
                <p className="font-black text-sm">ID-Networkers (IDN) — PenTest Bootcamp</p>
                <p className="text-fg-secondary text-xs font-medium">2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillLogo({ slug, name }: { slug: string; name: string }) {
  return (
    <div
      title={name}
      className="w-11 h-11 flex items-center justify-center bg-white"
    >
      {slug ? (
        <img
          src={`https://cdn.simpleicons.org/${slug}`}
          alt={name}
          className="w-6 h-6"
        />
      ) : (
        <span className="font-black text-sm">{name.slice(0, 2)}</span>
      )}
    </div>
  );
}
