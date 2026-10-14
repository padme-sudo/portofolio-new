import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] text-[#f5f5f5] font-sans min-h-screen sm:px-28 lg:px-20 px-0">
      <Navbar />
      <main className="max-w-5xl mx-auto">
        <Hero />
        <div className="max-w-5xl mx-auto">
          <Services />
        </div>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
