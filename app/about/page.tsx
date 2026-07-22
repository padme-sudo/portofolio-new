import type { Metadata } from "next";
import About from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About | Aditya Siagian",
  description:
    "Learn more about Aditya Siagian — experience as a Full-Stack Developer, Penetration Tester, and Network Engineer. Skills in Next.js, React, Laravel, Cisco, Mikrotik, Linux, and Kali Linux.",
};

export default function AboutPage() {
  return <About />;
}
