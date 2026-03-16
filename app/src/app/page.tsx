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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Francis Njoroge Wanjiru",
    alternateName: "Francis Njoroge",
    jobTitle: "Business Systems Engineer",
    url: "https://francisnjoroge.com",
    sameAs: [
      "https://www.linkedin.com/in/francis-njoroge-31698181",
      "https://github.com/Ka-few",
    ],
    email: "mailto:francisnjorogedev@gmail.com",
    telephone: "+254724015861",
    knowsAbout: [
      "Software Engineering",
      "System Architecture",
      "Offline-First Architecture",
      "React",
      "Next.js",
      "TypeScript",
      "SQLite",
      "Desktop Applications"
    ],
  };

  return (
    <main className="min-h-screen bg-navy-dark selection:bg-accent/30 selection:text-white">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        key="person-jsonld"
      />

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
