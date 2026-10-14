import { techStack } from "@/lib/data";
import type { IconType } from "react-icons";
import {
  SiBurpsuite,
  SiCisco,
  SiCss,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiKalilinux,
  SiMetasploit,
  SiMikrotik,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiWireshark,
} from "react-icons/si";
import { LuDatabaseZap, LuRadar } from "react-icons/lu";

const techIcons: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  JavaScript: SiJavascript,
  HTML5: SiHtml5,
  CSS3: SiCss,
  "Node.js": SiNodedotjs,
  Git: SiGit,
  Supabase: SiSupabase,
  MySQL: SiMysql,
  Vue: SiVuedotjs,
  Cisco: SiCisco,
  "MikroTik": SiMikrotik,
  "Kali Linux": SiKalilinux,
  Nmap: LuRadar,
  "Burp Suite": SiBurpsuite,
  SQLMap: LuDatabaseZap,
  Metasploit: SiMetasploit,
  Wireshark: SiWireshark,
  Python: SiPython,
};

export default function TechMarquee() {
  const doubled = [...techStack, ...techStack];
  return (
    <div className="relative overflow-x-hidden py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20" />
      <div className="flex animate-scroll w-max will-change-transform">
        {doubled.map((tech, i) => {
          const Icon = techIcons[tech];
          return (
            <div
              key={`${tech}-${i}`}
              aria-hidden={i >= techStack.length}
              className="flex items-center gap-2 pr-12 md:pr-20 group transition-all duration-300"
            >
              {Icon && (
                <Icon className="size-6 text-[#a1a1aa]/60 group-hover:text-white group-hover:scale-110 transition-all" />
              )}
              <span className="text-lg font-medium text-[#a1a1aa] whitespace-nowrap group-hover:text-white transition-colors">
                {tech}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
