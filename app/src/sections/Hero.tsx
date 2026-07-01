"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Server, Monitor, Brain, Database, Network } from "lucide-react";

function DataFlowArrow({ delay = 0, color = "#38bdf8" }: { delay?: number, color?: string }) {
    return (
        <motion.svg
            width="80"
            height="24"
            viewBox="0 0 80 24"
            fill="none"
            style={{ flexShrink: 0 }}
        >
            {/* Base line */}
            <line x1="0" y1="12" x2="70" y2="12" stroke={`${color}33`} strokeWidth="1.5" />
            {/* Animated flowing dash */}
            <motion.line
                x1="0" y1="12" x2="70" y2="12"
                stroke={color}
                strokeWidth="1.5"
                strokeDasharray="10 8"
                initial={{ strokeDashoffset: 60, opacity: 0 }}
                animate={{ strokeDashoffset: 0, opacity: [0, 1, 1, 0] }}
                transition={{ duration: 2, delay, repeat: Infinity, ease: "linear" }}
            />
            {/* Arrowhead */}
            <motion.path
                d="M62 7 L70 12 L62 17"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 2, delay: delay + 0.5, repeat: Infinity }}
            />
        </motion.svg>
    );
}

function InputNode({ label, index, icon: Icon, color = "#38bdf8" }: { label: string; index: number, icon: any, color?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
            style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.625rem 0.875rem",
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${color}33`,
                borderRadius: "8px",
                minWidth: "150px",
            }}
        >
            <Icon size={16} color={color} />
            <span style={{ fontSize: "0.75rem", color: "#cbd5e1", fontWeight: 500 }}>{label}</span>
            <div
                style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: color,
                    marginLeft: "auto",
                    boxShadow: `0 0 6px ${color}`,
                }}
            />
        </motion.div>
    );
}

export default function Hero() {
    const inputs = [
        { label: "User Prompt", icon: Monitor, color: "#38bdf8" },
        { label: "Vector Real-time DB", icon: Database, color: "#10b981" },
        { label: "System Trigger", icon: Network, color: "#f59e0b" }
    ];

    return (
        <section
            id="hero"
            className="grid-texture"
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "7rem 1.5rem 4rem",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Background radial glow */}
            <div
                style={{
                    position: "absolute",
                    top: "10%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "600px",
                    height: "600px",
                    background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div
                style={{
                    maxWidth: "1200px",
                    width: "100%",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "4rem",
                    alignItems: "center",
                }}
                className="hero-grid"
            >
                {/* Left — Text content */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="label"
                        style={{ marginBottom: "1rem" }}
                    >
                        ◈ Full Stack Product Engineer
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="heading-xl"
                        style={{ marginBottom: "0.75rem" }}
                    >
                        I'm <span className="text-gradient-accent">Francis Njoroge.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        style={{
                            fontSize: "clamp(1rem, 2vw, 1.2rem)",
                            color: "var(--white)",
                            lineHeight: 1.7,
                            marginBottom: "1rem",
                            fontWeight: 700,
                        }}
                    >
                        Full Stack Product Engineer | Distributed Systems &amp; AI Integration
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        style={{
                            fontSize: "1rem",
                            color: "var(--slate)",
                            lineHeight: 1.8,
                            marginBottom: "2.5rem",
                            maxWidth: "480px",
                        }}
                    >
                        I build robust, full-stack digital products from the ground up — combining technical excellence with a deep focus on user experience, rapid iteration, and delivering measurable business impact.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.45 }}
                        style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
                    >
                        <button
                            className="btn-primary"
                            onClick={() => document.querySelector("#case-studies")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            View Case Studies <ArrowRight size={16} />
                        </button>
                        <a href="/resume.pdf" download className="btn-outline">
                            <Download size={16} /> Download Resume
                        </a>
                    </motion.div>
                </div>

                {/* Right — Architecture Diagram */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="glass"
                    style={{
                        borderRadius: "16px",
                        padding: "2rem",
                        position: "relative",
                    }}
                >
                    <div
                        className="label"
                        style={{ marginBottom: "1.5rem", textAlign: "center" }}
                    >
                        Live Architecture — AI Automation Workflow
                    </div>

                    {/* Diagram */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            justifyContent: "center",
                            overflowX: "auto",
                            paddingBottom: "1rem"
                        }}
                    >
                        {/* Branch nodes */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", flexShrink: 0 }}>
                            {inputs.map((input, i) => (
                                <InputNode key={input.label} label={input.label} index={i} icon={input.icon} color={input.color} />
                            ))}
                        </div>

                        {/* Animated arrows */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.35rem", flexShrink: 0 }}>
                            {inputs.map((input, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "center" }}>
                                    <DataFlowArrow delay={i * 0.7} color={input.color} />
                                </div>
                            ))}
                        </div>

                        {/* AI Engine Server */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "0.5rem",
                                padding: "1.25rem",
                                background: "rgba(244,63,94,0.08)",
                                border: "1px solid rgba(244,63,94,0.35)",
                                borderRadius: "12px",
                                minWidth: "120px",
                                flexShrink: 0
                            }}
                        >
                            <Brain size={32} color="#f43f5e" />
                            <span style={{ fontSize: "0.75rem", color: "#f43f5e", fontWeight: 700, textAlign: "center" }}>
                                AI Engine
                            </span>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                                <div
                                    className="pulse-glow"
                                    style={{
                                        width: "7px",
                                        height: "7px",
                                        borderRadius: "50%",
                                        background: "#f43f5e",
                                    }}
                                />
                                <span style={{ fontSize: "0.65rem", color: "#f43f5e" }}>Processing</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Tech badge */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        style={{
                            marginTop: "1.5rem",
                            display: "flex",
                            justifyContent: "center",
                            gap: "0.75rem",
                            flexWrap: "wrap"
                        }}
                    >
                        {["LLM APIs", "RAG Pipeline", "Function Calling", "Distributed Nodes"].map((tag) => (
                            <span
                                key={tag}
                                style={{
                                    padding: "0.25rem 0.625rem",
                                    fontSize: "0.65rem",
                                    fontWeight: 600,
                                    color: "var(--accent)",
                                    background: "rgba(245,158,11,0.08)",
                                    border: "1px solid rgba(245,158,11,0.2)",
                                    borderRadius: "4px",
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                style={{
                    position: "absolute",
                    bottom: "2rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "var(--slate)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    ↓
                </motion.div>
                Scroll to explore
            </motion.div>

            <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
        </section>
    );
}
