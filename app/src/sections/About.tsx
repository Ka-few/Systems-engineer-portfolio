"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const corePrinciples = [
    "Investigated application, API, and backend issues across UI, service, database, and infrastructure layers to reduce user-impacting incidents.",
    "Reproduced faults, reviewed logs and events, and traced root causes through REST APIs, SQL, Linux systems, and Kubernetes resources.",
    "Worked with production safety principles: validating changes, documenting findings, and escalating with clear evidence and rollback awareness.",
    "Handled customer-facing support with clear communication, technical explanation, ownership, and structured follow-up through resolution.",
    "Used Python, Bash, and JavaScript for automation, diagnostics, data processing, and operational efficiency improvements.",
    "Collaborated with GitHub/GitLab workflows and CI/CD processes while building a stronger operational mindset around reliability and service health.",
];

const focuses = [
    "Technical Support & Incident Investigation",
    "Linux Systems Troubleshooting",
    "Kubernetes & Container Diagnostics",
    "REST API & Backend Debugging",
    "SQL & Database Validation",
    "Python & Bash Automation",
    "GitHub/GitLab & CI/CD Workflows",
    "Customer Communication & Escalation",
    "Production Safety & Reliability Mindset",
    "Observability, Logs, and Root Cause Analysis",
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
                    ◈ Profile
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
                            I&apos;m Francis Njoroge Wanjiru,<br />
                            <span className="text-gradient-accent" style={{ fontSize: "0.58em", display: "block", marginTop: "0.5rem" }}>
                                Technical Support Engineer — Aspiring SRE
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
                            Aspiring SRE with 7+ years in technical support and incident investigation, focused on root-cause analysis, API debugging, Linux systems, Kubernetes, SQL validation, and customer-facing issue resolution.
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
                            I work across the full operational stack: reproducing incidents, reviewing logs, validating service behavior, and tracing failures through APIs, databases, and infrastructure. I bring a strong reliability mindset, clear communication, and a practical understanding of production safety.
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
                            I am building toward a career in Site Reliability Engineering by strengthening my skills in observability, automation, Kubernetes, and resilient system operations.
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
                            <h4 style={{ color: "var(--white)", fontWeight: 700, marginBottom: "0.5rem" }}>Operational philosophy:</h4>
                            <p style={{ color: "var(--accent)" }}><em>Reliable systems are built through clear diagnosis, disciplined automation, and calm, evidence-driven incident response.</em></p>
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
                            Key contributions:
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

                        {/* Photo */}
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
                                    alt="Francis Njoroge Wanjiru — Technical Support Engineer and Aspiring SRE"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Francis+Njoroge&background=f59e0b&color=1c1917&size=200";
                                    }}
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 lg:right-auto lg:left-40 bg-navy-dark border border-white/10 px-4 py-2 rounded-lg shadow-xl text-xs font-bold text-accent">
                                Open to Opportunities
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
                            What I Build
                        </h3>

                        <motion.p
                            style={{
                                color: "var(--slate)",
                                lineHeight: 1.85,
                                marginBottom: "2.5rem",
                                fontSize: "1rem",
                            }}
                        >
                            I specialize in keeping modern digital services healthy by diagnosing incidents quickly, validating system behavior, and improving the reliability of business-critical applications. My focus is on the layers that matter most to uptime and user trust: platform health, APIs, logs, data integrity, and operational automation.
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
                                    transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
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
