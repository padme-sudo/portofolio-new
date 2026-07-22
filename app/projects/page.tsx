import type { Metadata } from "next";
import Projects from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects | Aditya Siagian",
  description:
    "Explore projects by Aditya Siagian — web applications, network infrastructure, and security tools.",
};

export default function ProjectsPage() {
  return <Projects />;
}
