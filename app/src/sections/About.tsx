"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const corePrinciples = [
    "Offline-first systems that remain operational during connectivity loss",
    "Distributed synchronization across branches and edge devices",
    "Reliable data consistency and fault-tolerant workflows",
    "Secure role-based operational boundaries",
    "Real-time operational visibility and monitoring",
    "AI-assisted analytics and intelligent workflow automation",
    "Practical deployment architectures for resource-constrained environments"
];

const focuses = [
    "Distributed Systems Architecture",
    "Offline-First Application Design",
    "AI-Assisted Business Systems",
    "Observability & Reliability Engineering",
    "API & Systems Integration",
    "PostgreSQL, SQLite & Data Engineering",
    "Networked Desktop Applications",
    "Automation & Operational Tooling",
    "Cloud & Infrastructure Engineering",
    "Real-Time Sync Architectures"
];

export default function About() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" style={{ padding: "6rem 1.5rem", borderTop: "1px solid var(--glass-border)" }}>
            <div
                ref={ref}
                style={{ maxWidth: "1200px", margin: "0 auto" }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="label"
                    style={{ marginBottom: "0.75rem" }}
                >
                    ◈ About
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "4rem",
                        alignItems: "start",
                    }}
                    className="about-grid"
                >
                    {/* Left */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 25 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="heading-lg"
                            style={{ marginBottom: "1.5rem" }}
                        >
                            I'm Francis Njoroge,<br />
                            <span className="text-gradient-accent" style={{ fontSize: "0.6em", display: "block", marginTop: "0.5rem" }}>
                                Software Engineer | Distributed Systems & AI Integration
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{
                                color: "var(--slate)",
                                lineHeight: 1.85,
                                marginBottom: "1.25rem",
                                fontSize: "1.05rem",
                            }}
                        >
                            I design and build resilient business software engineered for real-world operational environments — systems that continue running under unreliable networks, scale across multiple locations, and increasingly leverage AI to automate decision-making and operational insight.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            style={{
                                color: "var(--slate)",
                                lineHeight: 1.85,
                                marginBottom: "1.25rem",
                                fontSize: "1.05rem",
                            }}
                        >
                            My work sits at the intersection of software engineering, distributed systems, Site Reliability Engineering (SRE), and practical AI integration.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            style={{
                                color: "var(--slate)",
                                lineHeight: 1.85,
                                marginBottom: "2rem",
                                fontSize: "1.05rem",
                            }}
                        >
                            I specialize in building infrastructure-grade applications for SMEs and operational businesses — platforms where uptime, synchronization, observability, and workflow reliability matter just as much as features.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            style={{
                                background: "rgba(245, 158, 11, 0.05)",
                                borderLeft: "4px solid var(--accent)",
                                padding: "1.5rem",
                                borderRadius: "0 8px 8px 0",
                                marginBottom: "2rem"
                            }}
                        >
                            <h4 style={{ color: "var(--white)", fontWeight: 700, marginBottom: "0.5rem" }}>My engineering philosophy is simple:</h4>
                            <p style={{ color: "var(--accent)" }}><em>Software should behave like reliable infrastructure.</em></p>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            style={{
                                color: "var(--white)",
                                fontWeight: 500,
                                marginBottom: "1rem"
                            }}
                        >
                            That means:
                        </motion.p>

                        <motion.ul
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            style={{
                                listStyle: "none",
                                padding: 0,
                                margin: "0 0 2rem 0",
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.75rem"
                            }}
                        >
                            {corePrinciples.map((principle, i) => (
                                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                                    <span style={{ color: "var(--accent)", marginTop: "2px" }}>•</span>
                                    <span style={{ color: "var(--slate)", fontSize: "0.95rem" }}>{principle}</span>
                                </li>
                            ))}
                        </motion.ul>

                        {/* Image/Photo Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="mt-12 mb-12 relative group"
                        >
                            <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-500 opacity-50"></div>
                            <div className="relative w-48 h-48 mx-auto lg:mx-0 rounded-2xl overflow-hidden border-2 border-accent/30 glass transform hover:rotate-3 transition-transform duration-300">
                                <img
                                    src="/photo.jpg"
                                    alt="Francis Njoroge Wanjiru"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Francis+Njoroge&background=f59e0b&color=1c1917&size=200";
                                    }}
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 lg:right-auto lg:left-40 bg-navy-dark border border-white/10 px-4 py-2 rounded-lg shadow-xl text-xs font-bold text-accent">
                                Available for Projects
                            </div>
                        </motion.div>
                    </div>

                    {/* Right — Focus list */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3
                            style={{
                                fontSize: "0.85rem",
                                fontWeight: 600,
                                color: "var(--slate)",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                marginBottom: "1.5rem",
                                borderBottom: "1px solid var(--glass-border)",
                                paddingBottom: "0.75rem",
                            }}
                        >
                            My Current Work
                        </h3>

                        <motion.p
                            style={{
                                color: "var(--slate)",
                                lineHeight: 1.85,
                                marginBottom: "2.5rem",
                                fontSize: "1rem",
                            }}
                        >
                            My current work focuses on integrating AI into business infrastructure systems — enabling organizations to interact with operational, financial, and transactional data through intelligent assistants, automated insights, anomaly detection, and natural-language querying.
                        </motion.p>

                        <h3
                            style={{
                                fontSize: "0.85rem",
                                fontWeight: 600,
                                color: "var(--slate)",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                marginBottom: "1.5rem",
                                borderBottom: "1px solid var(--glass-border)",
                                paddingBottom: "0.75rem",
                            }}
                        >
                            Core Technologies & Focus Areas
                        </h3>

                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            {focuses.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.75rem",
                                        padding: "0.875rem",
                                        borderRadius: "8px",
                                        background: "rgba(255,255,255,0.02)",
                                        border: "1px solid var(--glass-border)",
                                        transition: "all 0.2s",
                                    }}
                                    whileHover={{
                                        background: "rgba(245,158,11,0.04)",
                                        borderColor: "rgba(245,158,11,0.2)",
                                    }}
                                >
                                    <CheckCircle
                                        size={16}
                                        color="var(--emerald)"
                                        style={{ flexShrink: 0 }}
                                    />
                                    <span style={{ fontSize: "0.92rem", color: "var(--slate-light)", lineHeight: 1.3 }}>
                                        {item}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
        </section>
    );
}
