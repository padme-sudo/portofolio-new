"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Home", href: "/", icon: "homebridge" },
  { name: "About", href: "/about", icon: "readme" },
  { name: "Projects", href: "/projects", icon: "gitpod" },
  { name: "Contact", href: "/contact", icon: "gmail" },
];

function ThemeBtn() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 md:w-11 md:h-11 neo-border bg-white neo-shadow-sm flex items-center justify-center hover:scale-105 transition-all"
      title="Toggle theme"
    >
      {theme === "dark"
        ? <img src="https://cdn.simpleicons.org/darkreader" alt="Dark" className="w-4 h-4 md:w-5 md:h-5" />
        : <img src="https://cdn.simpleicons.org/wolfram" alt="Light" className="w-4 h-4 md:w-5 md:h-5" />}
    </button>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop: left side */}
      <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "w-11 h-11 neo-border flex items-center justify-center transition-all hover:scale-105",
                isActive ? "bg-white neo-shadow" : "bg-white neo-shadow-sm"
              )}
              title={link.name}
            >
              <img
                src={`https://cdn.simpleicons.org/${link.icon}`}
                alt={link.name}
                className="w-5 h-5"
              />
            </Link>
          );
        })}
        <ThemeBtn />
      </nav>

      {/* Mobile: bottom row */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 md:hidden flex items-center gap-3 bg-white neo-border neo-shadow-sm px-4 py-2">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "w-10 h-10 neo-border flex items-center justify-center transition-all hover:scale-105",
                isActive ? "bg-yellow neo-shadow" : "bg-white neo-shadow-sm"
              )}
              title={link.name}
            >
              <img
                src={`https://cdn.simpleicons.org/${link.icon}`}
                alt={link.name}
                className="w-4 h-4"
              />
            </Link>
          );
        })}
        <ThemeBtn />
      </nav>
    </>
  );
}
