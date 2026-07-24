"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MessageSquare, Zap, Globe, Brain } from "lucide-react";

function PulsingDot({ color = "#38bdf8", delay = 0 }: { color?: string; delay?: number }) {
    return (
        <motion.div
            style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: color,
                boxShadow: `0 0 8px ${color}`,
            }}
            animate={{ opacity: [1, 0.3, 1], scale: [1, 1.3, 1] }}
            transition={{ duration: 2, delay, repeat: Infinity, ease: "easeInOut" }}
        />
    );
}

function FlowArrow({ color = "#38bdf8", delay = 0 }: { color?: string; delay?: number }) {
    return (
        <motion.svg width="60" height="20" viewBox="0 0 60 20" fill="none" style={{ flexShrink: 0 }}>
            <line x1="0" y1="10" x2="50" y2="10" stroke={`${color}33`} strokeWidth="1.5" />
            <motion.line
                x1="0" y1="10" x2="50" y2="10"
                stroke={color}
                strokeWidth="1.5"
                strokeDasharray="8 6"
                initial={{ strokeDashoffset: 48, opacity: 0 }}
                animate={{ strokeDashoffset: 0, opacity: [0, 1, 1, 0] }}
                transition={{ duration: 2, delay, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
                d="M44 6 L52 10 L44 14"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 2, delay: delay + 0.4, repeat: Infinity }}
            />
        </motion.svg>
    );
}

interface FlowNodeProps {
    label: string;
    sublabel?: string;
    icon: React.ElementType;
    color: string;
    index: number;
}

function FlowNode({ label, sublabel, icon: Icon, color, index }: FlowNodeProps) {
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
                minWidth: "160px",
            }}
        >
            <Icon size={15} color={color} style={{ flexShrink: 0 }} />
            <div>
                <div style={{ fontSize: "0.72rem", color: "#cbd5e1", fontWeight: 600 }}>{label}</div>
                {sublabel && <div style={{ fontSize: "0.6rem", color: color, opacity: 0.7 }}>{sublabel}</div>}
            </div>
            <PulsingDot color={color} delay={index * 0.5} />
        </motion.div>
    );
}

export default function Hero() {
    const inputs = [
        { label: "WhatsApp User", sublabel: "Incoming Message", icon: MessageSquare, color: "#25d366" },
        { label: "Twilio Gateway", sublabel: "Webhook Trigger", icon: Zap, color: "#f59e0b" },
        { label: "REST / GraphQL", sublabel: "API Request", icon: Globe, color: "#38bdf8" },
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
                    width: "700px",
                    height: "700px",
                    background: "radial-gradient(circle, rgba(56,189,248,0.05) 0%, rgba(245,158,11,0.03) 50%, transparent 70%)",
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
                        ◈ Backend, API & Full Stack Engineer
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="heading-xl"
                        style={{ marginBottom: "0.75rem" }}
                    >
                        I'm <span className="text-gradient-accent">Francis Njoroge Wanjiru.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        style={{
                            fontSize: "clamp(1rem, 2vw, 1.15rem)",
                            color: "var(--white)",
                            lineHeight: 1.7,
                            marginBottom: "1rem",
                            fontWeight: 700,
                        }}
                    >
                        Backend, API & Full Stack Software Engineer
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        style={{
                            fontSize: "1rem",
                            color: "var(--slate)",
                            lineHeight: 1.85,
                            marginBottom: "2.5rem",
                            maxWidth: "500px",
                        }}
                    >
                        Building secure backend services, APIs, integrations, and data-driven business platforms with Node.js, Python, PostgreSQL, React, and TypeScript — with a specialization in conversational and AI-powered systems.
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
                            id="hero-view-projects"
                        >
                            View Projects <ArrowRight size={16} />
                        </button>
                        <a href="/resume.pdf" download className="btn-outline" id="hero-download-cv">
                            <Download size={16} /> Download CV
                        </a>
                        <button
                            className="btn-outline"
                            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                            id="hero-contact"
                            style={{ borderColor: "rgba(37,211,102,0.3)", color: "#25d366" }}
                        >
                            <Mail size={16} /> Contact Me
                        </button>
                    </motion.div>

                    {/* Quick badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "2rem" }}
                    >
                        {["Node.js", "REST APIs", "PostgreSQL", "System Integration", "Twilio"].map((tag) => (
                            <span
                                key={tag}
                                style={{
                                    padding: "0.2rem 0.6rem",
                                    fontSize: "0.65rem",
                                    fontWeight: 600,
                                    color: "var(--slate-light)",
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    borderRadius: "4px",
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* Right — Conversational AI Architecture Diagram */}
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
                    <div className="label" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
                        Conversational Platform — Request Flow
                    </div>

                    {/* Diagram */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            justifyContent: "center",
                            overflowX: "auto",
                            paddingBottom: "1rem",
                        }}
                    >
                        {/* Input nodes */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", flexShrink: 0 }}>
                            {inputs.map((input, i) => (
                                <FlowNode key={input.label} label={input.label} sublabel={input.sublabel} icon={input.icon} color={input.color} index={i} />
                            ))}
                        </div>

                        {/* Animated arrows */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.35rem", flexShrink: 0 }}>
                            {inputs.map((input, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "center" }}>
                                    <FlowArrow delay={i * 0.65} color={input.color} />
                                </div>
                            ))}
                        </div>

                        {/* AI Engine */}
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
                                background: "rgba(245,158,11,0.08)",
                                border: "1px solid rgba(245,158,11,0.35)",
                                borderRadius: "12px",
                                minWidth: "110px",
                                flexShrink: 0,
                            }}
                        >
                            <Brain size={30} color="#f59e0b" />
                            <span style={{ fontSize: "0.72rem", color: "#f59e0b", fontWeight: 700, textAlign: "center" }}>
                                AI Engine
                            </span>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                                <div
                                    className="pulse-glow"
                                    style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f59e0b" }}
                                />
                                <span style={{ fontSize: "0.6rem", color: "#f59e0b" }}>LLM Active</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Tech badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        style={{
                            marginTop: "1.5rem",
                            display: "flex",
                            justifyContent: "center",
                            gap: "0.5rem",
                            flexWrap: "wrap",
                        }}
                    >
                        {["Twilio API", "OpenAI", "Node.js", "GraphQL"].map((tag) => (
                            <span
                                key={tag}
                                style={{
                                    padding: "0.25rem 0.625rem",
                                    fontSize: "0.62rem",
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
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
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
