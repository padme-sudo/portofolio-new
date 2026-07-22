"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 border-t-[3px] border-fg bg-yellow">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <Link href="/" className="text-2xl font-black tracking-tighter neo-border inline-block px-3 py-1 bg-white neo-shadow-sm">
            ADITYA<span className="text-pink">.</span>
          </Link>
          <p className="text-fg font-medium text-sm max-w-xs text-center md:text-left">
            Building digital experiences that combine performance with aesthetics.
          </p>
        </div>

        <div className="text-fg font-bold text-xs">
          &copy; {new Date().getFullYear()} Adit. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
