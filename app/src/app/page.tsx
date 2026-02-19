import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Expertise from "@/sections/Expertise";
import CaseStudies from "@/sections/CaseStudies";
import ArchitectureShowcase from "@/sections/ArchitectureShowcase";
import TechStack from "@/sections/TechStack";
import Philosophy from "@/sections/Philosophy";
import CurrentlyBuilding from "@/sections/CurrentlyBuilding";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-dark selection:bg-accent/30 selection:text-white">
      <Navbar />

      {/* Sections Wrapper */}
      <div className="relative">
        <Hero />
        <About />
        <Expertise />
        <CaseStudies />
        <ArchitectureShowcase />
        <TechStack />
        <Philosophy />
        <CurrentlyBuilding />
        <Contact />
      </div>

      {/* Background Decorative Grid */}
      <div className="fixed inset-0 grid-texture opacity-[0.03] pointer-events-none z-[-1]"></div>
    </main>
  );
}
