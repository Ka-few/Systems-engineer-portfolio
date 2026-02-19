"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const stats = [
    { value: "3+", label: "Years Building\nEnterprise Systems" },
    { value: "2", label: "Production Apps\nDeployed" },
    { value: "Multi", label: "Branch\nArchitecture" },
    { value: "100%", label: "Offline-First\nDesign" },
];

const focuses = [
    "Offline-first desktop applications that work without internet",
    "Distributed data sync across physical business branches",
    "Role-based access control for operational hierarchy",
    "LAN/VPN networking between branch PCs and owner servers",
    "Financial automation — commissions, inventory, reporting",
    "SME-grade infrastructure without enterprise-grade overhead",
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
                            I Build Practical{" "}
                            <span className="text-gradient-accent">Business Infrastructure</span>{" "}
                            Software.
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
                            I design and build software systems for businesses that operate across
                            multiple physical locations — salons, rental properties, retail chains,
                            and other SMEs where reliable, distributed operations are mission-critical.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            style={{
                                color: "var(--slate)",
                                lineHeight: 1.85,
                                marginBottom: "2rem",
                                fontSize: "1.05rem",
                            }}
                        >
                            My core philosophy: <em style={{ color: "var(--white)" }}>software must reflect business reality</em>.
                            That means systems that tolerate unreliable networks, enforce role-based
                            operational boundaries, and give business owners real-time visibility
                            across every branch — all without requiring constant internet connectivity.
                        </motion.p>

                        {/* Image/Photo Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-12 mb-12 relative group"
                        >
                            <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-500 opacity-50"></div>
                            <div className="relative w-48 h-48 mx-auto lg:mx-0 rounded-2xl overflow-hidden border-2 border-accent/30 glass transform hover:rotate-3 transition-transform duration-300">
                                <img
                                    src="/photo.jpg"
                                    alt="Francis Njoroge Wanjiru"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Francis+Njoroge&background=38bdf8&color=0f172a&size=200";
                                    }}
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 lg:right-auto lg:left-40 bg-navy-dark border border-white/10 px-4 py-2 rounded-lg shadow-xl text-xs font-bold text-accent">
                                Available for Projects
                            </div>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "1rem",
                            }}
                        >
                            {stats.map((s, i) => (
                                <div
                                    key={i}
                                    className="glass"
                                    style={{
                                        padding: "1.25rem",
                                        borderRadius: "10px",
                                        textAlign: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: "1.75rem",
                                            fontWeight: 800,
                                            color: "var(--accent)",
                                            lineHeight: 1,
                                            marginBottom: "0.4rem",
                                        }}
                                    >
                                        {s.value}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "0.75rem",
                                            color: "var(--slate)",
                                            whiteSpace: "pre-line",
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        {s.label}
                                    </div>
                                </div>
                            ))}
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
                            What I specialize in
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
                                        alignItems: "flex-start",
                                        gap: "0.75rem",
                                        padding: "0.875rem",
                                        borderRadius: "8px",
                                        background: "rgba(255,255,255,0.02)",
                                        border: "1px solid var(--glass-border)",
                                        transition: "all 0.2s",
                                    }}
                                    whileHover={{
                                        background: "rgba(56,189,248,0.04)",
                                        borderColor: "rgba(56,189,248,0.2)",
                                    }}
                                >
                                    <CheckCircle
                                        size={16}
                                        color="var(--emerald)"
                                        style={{ flexShrink: 0, marginTop: "2px" }}
                                    />
                                    <span style={{ fontSize: "0.92rem", color: "var(--slate-light)", lineHeight: 1.5 }}>
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
