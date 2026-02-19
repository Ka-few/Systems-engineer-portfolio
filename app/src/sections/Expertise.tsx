"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    WifiOff, RefreshCw, Shield, Network, BarChart3, Monitor
} from "lucide-react";

const expertise = [
    {
        icon: WifiOff,
        title: "Offline-First Architecture",
        description:
            "Systems designed to function fully without network connectivity — local-first data storage with intelligent sync when connection is restored.",
        color: "#38bdf8",
    },
    {
        icon: RefreshCw,
        title: "Distributed Data Sync",
        description:
            "UUID-based record versioning, last-write-wins conflict resolution, and REST-API synchronization across branch nodes and central servers.",
        color: "#818cf8",
    },
    {
        icon: Shield,
        title: "Role-Based Access Systems",
        description:
            "Granular permission models enforcing operational hierarchy — cashiers, managers, caretakers, and owners each see exactly what they need.",
        color: "#f472b6",
    },
    {
        icon: Network,
        title: "LAN/VPN Infrastructure",
        description:
            "Local Area Network topology design for branch-to-server communication, including VPN tunneling for geographically distributed branches.",
        color: "#fb923c",
    },
    {
        icon: BarChart3,
        title: "Financial & Operational Automation",
        description:
            "Commission calculation engines, inventory tracking, expenditure management, and automated reporting for business owners.",
        color: "#10b981",
    },
    {
        icon: Monitor,
        title: "Desktop Application Engineering",
        description:
            "Cross-platform Electron-based desktop apps with embedded databases, packaged for Windows and Linux deployment in SME environments.",
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
                        maxWidth: "600px",
                        fontSize: "1.05rem",
                        lineHeight: 1.7,
                    }}
                >
                    Specialized in the full stack of multi-branch, offline-first system design —
                    from database architecture to desktop deployment.
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
