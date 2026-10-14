export const profile = {
  name: "Aditya Siagian",
  role: ["Software", "Developer"],
  roles: [
    "Software Developer",
    "Network Engineer",
    "Cyber Security Enthusiast",
  ],
  greeting: "Hi, I'm Aditya Siagian",
  tagline:
    "Transforming ideas into interactive and seamless digital experiences with modern frontend development.",
  highlight: "frontend",
  location: "Indonesia",
  email: "adityasiagian07@gmail.com",
  github: "https://github.com/padme-sudo",
  linkedin: "https://www.linkedin.com/in/adityasiagian/",
};

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Node.js",
  "Git",
  "Supabase",
  "MySQL",
  "Vue",
  "Cisco",
  "MikroTik",
  "Kali Linux",
  "Nmap",
  "Burp Suite",
  "SQLMap",
  "Metasploit",
  "Wireshark",
  "Python",
];

export const services = [
  {
    title: "Web Development",
    items: [
      "Single Page Applications (SPAs)",
      "Landing pages & business websites",
      "Portfolio websites",
    ],
  },
  {
    title: "Network Engineer",
    items: [
      "MikroTik configuration & management (RouterOS)",
      "Routing & switching Cisco",
      "Subnetting, VLAN, VPN & firewall",
      "Network troubleshooting & monitoring",
    ],
  },
  {
    title: "Ethical Hacking",
    items: [
      "Penetration testing with Kali Linux",
      "Recon & scanning: Nmap",
      "Web vulnerability testing: Burp Suite & SQLMap",
      "Exploitation with Metasploit",
    ],
  },
];

export type ProjectStatus =
  | "Deployed"
  | "On Development"
  | "Contributor";

export const projects: {
  title: string;
  status: ProjectStatus;
  description: string;
  gradient: string;
  letter: string;
  github: string;
  demo: string;
}[] = [];
