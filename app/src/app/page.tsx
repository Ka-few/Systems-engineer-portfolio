import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Expertise from "@/sections/Expertise";
import CaseStudies from "@/sections/CaseStudies";
import ArchitectureShowcase from "@/sections/ArchitectureShowcase";
import TechStack from "@/sections/TechStack";
import Experience from "@/sections/Experience";
import Philosophy from "@/sections/Philosophy";
import Contact from "@/sections/Contact";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Francis Njoroge Wanjiru",
    alternateName: "Francis Njoroge",
    jobTitle: "Technical Support Engineer and Aspiring Site Reliability Engineer",
    url: "https://francisnjoroge.com",
    sameAs: [
      "https://www.linkedin.com/in/francis-njoroge-31698181",
      "https://github.com/Ka-few",
    ],
    email: "mailto:francisnjorogedev@gmail.com",
    telephone: "+254724015861",
    knowsAbout: [
      "Technical Support",
      "Incident Investigation",
      "Root Cause Analysis",
      "Linux Troubleshooting",
      "Kubernetes Operations",
      "REST API Troubleshooting",
      "SQL Validation",
      "Python Automation",
      "Bash Scripting",
      "GitHub and GitLab Workflows",
      "CI/CD",
      "Application Reliability",
      "Customer Communication",
      "Production Safety",
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
        <Experience />
        <Philosophy />
        <Contact />
      </div>

      {/* Background Decorative Grid */}
      <div className="fixed inset-0 grid-texture opacity-[0.03] pointer-events-none z-[-1]"></div>
    </main>
  );
}
