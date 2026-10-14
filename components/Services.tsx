"use client";

import { useState } from "react";
import { services } from "@/lib/data";
import type { IconType } from "react-icons";
import { LuCodeXml, LuSword, LuWifi } from "react-icons/lu";

const serviceIcons: Record<string, IconType> = {
  "Web Development": LuCodeXml,
  "Network Engineer": LuWifi,
  "Ethical Hacking": LuSword,
};

export default function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col items-start px-9 sm:px-0">
      <div className="pt-3 md:pt-9">
        <h3 className="text-[#f5f5f5] text-3xl md:text-4xl font-semibold md:mb-6">
          What I do?
        </h3>
        <ul className="space-y-4 mt-4 text-lg">
          {services.map((s, i) => {
            const isOpen = open === i;
            const Icon = serviceIcons[s.title] ?? LuCodeXml;
            return (
              <li key={s.title} className="w-full">
                <div
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="md:w-[400px] w-full bg-[rgba(20,20,20,0.61)] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[rgba(255,255,255,0.08)] cursor-pointer overflow-hidden"
                >
                  <div className="flex items-center gap-3 p-4">
                    <Icon className="text-[#A9FF5B] size-6 shrink-0" />
                    <div className="flex items-center gap-2 flex-grow justify-between">
                      <span className="block truncate text-[#f5f5f5] text-lg max-w-[220px] md:max-w-none">
                        {s.title}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={`w-6 h-6 text-white transition-transform flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
                      >
                        <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
                      </svg>
                    </div>
                  </div>
                  <div
                    className={`transition-all duration-300 px-4 ${isOpen ? "max-h-48 opacity-100 pb-4" : "max-h-0 opacity-0"}`}
                  >
                    <ul className="space-y-2 text-[#a1a1aa] text-sm">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-center">
                          <span className="pl-1">•</span>
                          <span className="pl-3">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
