import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Aditya Siagian | Portofolio",
  description:
    "Portfolio of Aditya Siagian — Full-Stack Developer, Network Engineer, and Cyber Security Enthusiast based in Temanggung, Indonesia.",
};

export default function Home() {
  return <Hero />;
}
