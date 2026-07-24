"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    Layers, MessageSquare, Globe, Brain, ShieldCheck, Rocket
} from "lucide-react";

const expertise = [
    {
        icon: Layers,
        title: "Backend, API & Full Stack Engineering",
        description:
            "Secure backend services, REST and GraphQL APIs, data integrations, and end-to-end product delivery — with Node.js, Express, Python (Flask/Django), PostgreSQL, React, Next.js, and TypeScript.",
        color: "#38bdf8",
    },
    {
        icon: MessageSquare,
        title: "Conversational AI & Twilio",
        description:
            "Building intelligent messaging platforms using Twilio WhatsApp Business API, webhook-driven chatbots, AI assistants with LLM integration, appointment booking systems, and automated customer engagement pipelines.",
        color: "#25d366",
    },
    {
        icon: Globe,
        title: "GraphQL & REST API Design",
        description:
            "Designing clean, versioned REST and GraphQL APIs — schema-first development, efficient resolvers, data loaders, JWT authentication, webhook integrations, and third-party service connections for enterprise-grade systems.",
        color: "#f472b6",
    },
    {
        icon: Brain,
        title: "AI-Powered Application Development",
        description:
            "Integrating AI into real products — OpenAI API, LLM orchestration, prompt engineering, RAG pipelines, AI assistants, and natural-language querying. Using GitHub Copilot, Claude, and Cursor AI to accelerate development velocity.",
        color: "#fb923c",
    },
    {
        icon: ShieldCheck,
        title: "Enterprise Business Systems",
        description:
            "Building multi-user enterprise platforms with granular RBAC, JWT/session authentication, multi-tenant architecture, audit trails, POS systems, CRM workflows, financial dashboards, and business reporting modules.",
        color: "#10b981",
    },
    {
        icon: Rocket,
        title: "DevOps & Modern Deployment",
        description:
            "Shipping to production on Vercel, Railway, and VPS environments using Docker, GitHub Actions CI/CD, Linux administration, Nginx configuration, and environment management for reliable, scalable delivery.",
        color: "#fbbf24",
    },
];


export default function Expertise() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            id="expertise"
            style={{
                padding: "6rem 1.5rem",
                background: "rgba(15, 23, 42, 0.5)",
                borderTop: "1px solid var(--glass-border)",
            }}
        >
            <div ref={ref} style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="label"
                    style={{ marginBottom: "0.75rem" }}
                >
                    ◈ Core Expertise
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="heading-lg"
                    style={{ marginBottom: "0.75rem" }}
                >
                    Engineering Capabilities
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        color: "var(--slate)",
                        marginBottom: "3rem",
                        maxWidth: "620px",
                        fontSize: "1.05rem",
                        lineHeight: 1.7,
                    }}
                >
                    From conversational AI and enterprise systems to full-stack web applications — the capabilities that power production-grade software for modern businesses.
                </motion.p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "1.25rem",
                    }}
                    className="expertise-grid"
                >
                    {expertise.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                                whileHover={{
                                    y: -6,
                                    boxShadow: `0 8px 40px ${item.color}22, 0 0 0 1px ${item.color}33`,
                                }}
                                className="glass card-hover"
                                style={{
                                    borderRadius: "12px",
                                    padding: "1.75rem",
                                    cursor: "default",
                                    transition: "all 0.25s ease",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                {/* Top accent bar */}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: "2px",
                                        background: `linear-gradient(90deg, ${item.color}, transparent)`,
                                        opacity: 0.6,
                                    }}
                                />

                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "44px",
                                        height: "44px",
                                        borderRadius: "10px",
                                        background: `${item.color}15`,
                                        border: `1px solid ${item.color}30`,
                                        marginBottom: "1.25rem",
                                    }}
                                >
                                    <Icon size={22} color={item.color} strokeWidth={1.8} />
                                </div>

                                <h3
                                    style={{
                                        fontSize: "1rem",
                                        fontWeight: 700,
                                        color: "var(--white)",
                                        marginBottom: "0.625rem",
                                        lineHeight: 1.3,
                                    }}
                                >
                                    {item.title}
                                </h3>

                                <p
                                    style={{
                                        fontSize: "0.875rem",
                                        color: "var(--slate)",
                                        lineHeight: 1.7,
                                    }}
                                >
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <style>{`
        @media (max-width: 1024px) {
          .expertise-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .expertise-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
