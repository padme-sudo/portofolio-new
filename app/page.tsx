import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import BackgroundScene from "@/components/3d/Scene";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <BackgroundScene />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
