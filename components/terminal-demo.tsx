"use client";
import { Terminal } from "@/components/ui/terminal";
import { profile } from "@/lib/data";

export default function TerminalDemo() {
  return (
    <div className="w-full">
      <Terminal
        username="aditya"
        commands={[
          "whoami",
          "cat ./skills.json",
          "cat ./toolbox.json",
          "contact --info",
        ]}
        outputs={{
          0: [
            profile.greeting,
            profile.roles.join(" / "),
            `📍 ${profile.location}`,
          ],
          1: [
            '{ "frontend": ["React", "Next.js", "TypeScript"] }',
            '{ "network": ["MikroTik", "Cisco", "VLAN", "VPN"] }',
            '{ "security": ["Kali Linux", "Nmap", "Burp Suite"] }',
          ],
          2: [
            '{ "scanning": ["Nmap"] }',
            '{ "web-testing": ["Burp Suite", "SQLMap"] }',
            '{ "exploitation": ["Metasploit"] }',
          ],
          3: [
            `email: ${profile.email}`,
            "github: github.com",
            "status: open for work ✔",
          ],
        }}
        typingSpeed={45}
        delayBetweenCommands={1000}
        enableSound={false}
      />
    </div>
  );
}
