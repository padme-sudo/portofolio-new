"use client";

import { useEffect } from "react";

const links = [
  {
    href: "#home",
    label: "Home",
    icon: (
      <path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z" />
    ),
  },
  {
    href: "#projects",
    label: "Projects",
    icon: (
      <path d="M4 5V19H20V7H11.5858L9.58579 5H4ZM12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5Z" />
    ),
  },
  {
    href: "#contact",
    label: "Contact",
    icon: (
      <path d="M21.7267 2.95694L16.2734 22.0432C16.1225 22.5716 15.7979 22.5956 15.5563 22.1126L11 13L1.9229 9.36919C1.41322 9.16532 1.41953 8.86022 1.95695 8.68108L21.0432 2.31901C21.5716 2.14285 21.8747 2.43866 21.7267 2.95694ZM19.0353 5.09647L6.81221 9.17085L12.4488 11.4255L15.4895 17.5068L19.0353 5.09647Z" />
    ),
  },
];

export default function Navbar() {
  useEffect(() => {
    const nav = document.getElementById("main-nav");
    const maxScroll = 1000;
    let raf: number | null = null;

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        if (!nav) return;
        if (window.scrollY > 0) {
          nav.classList.add("scrolling");
          const p = 1 - Math.pow(1 - Math.min(window.scrollY / maxScroll, 1), 4);
          const base = window.innerWidth * 0.8;
          const target = base - (base - 528) * p;
          if (window.innerWidth >= 768) nav.style.setProperty("width", `${target}px`);
        } else {
          nav.classList.remove("scrolling");
          nav.style.setProperty("width", "80%");
        }
        raf = null;
      });
    };

    const onClick = (e: Event) => {
      const a = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (!a?.startsWith("#")) return;
      e.preventDefault();
      document.getElementById(a.substring(1))?.scrollIntoView({ behavior: "smooth" });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const anchors = document.querySelectorAll('nav a[href^="#"]');
    anchors.forEach((a) => a.addEventListener("click", onClick));

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((l) => l.classList.remove("active"));
            document
              .querySelector(`nav a[href="#${entry.target.getAttribute("id")}"]`)
              ?.classList.add("active");
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      anchors.forEach((a) => a.removeEventListener("click", onClick));
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="flex justify-center w-full">
      <nav
        id="main-nav"
        className="fixed left-1/2 -translate-x-1/2 z-[100] backdrop-blur-xl transition-all duration-500 ease-in-out md:top-6 md:bottom-auto bottom-4 w-[80%] border"
      >
        <div className="container mx-auto flex justify-center items-center p-3">
          <ul className="flex w-full justify-between md:space-x-6 md:justify-center md:gap-12 gap-6">
            {links.map((l) => (
              <li key={l.href} className="flex-1 md:flex-none">
                <a
                  href={l.href}
                  className="flex flex-col items-center gap-1 text-[#a1a1aa] hover:text-white transition-colors text-xs md:text-base relative group"
                >
                  <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300 scale-0 opacity-0 bg-[#A9FF5B] nav-indicator hidden md:block" />
                  <span className="md:hidden flex items-center justify-center w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      {l.icon}
                    </svg>
                  </span>
                  <span className="hidden md:inline-block">{l.label}</span>
                  <span className="md:hidden">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
