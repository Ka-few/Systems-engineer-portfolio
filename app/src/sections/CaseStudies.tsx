"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Database, Wifi, ExternalLink, Github } from "lucide-react";

interface TechTag {
    label: string;
    icon?: React.ReactNode;
}

interface CaseStudyProps {
    title: string;
    category: string;
    problem: string;
    solution: string;
    highlights: string[];
    impact: string[];
    techTags?: TechTag[];
    githubUrl?: string;
    liveUrl?: string;
    index: number;
}

function CaseStudyBlock({ title, category, problem, solution, highlights, impact, techTags, githubUrl, liveUrl, index }: CaseStudyProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass mb-20 overflow-hidden rounded-2xl"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Content */}
                <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
                    <div className="label mb-4">{category}</div>
                    <h3 className="heading-md mb-6">{title}</h3>

                    <div className="space-y-6">
                        <div>
                            <h4 className="text-accent font-bold text-sm uppercase tracking-wider mb-2">The Problem</h4>
                            <p className="text-slate leading-relaxed">{problem}</p>
                        </div>

                        <div>
                            <h4 className="text-emerald font-bold text-sm uppercase tracking-wider mb-2">The Solution</h4>
                            <p className="text-slate leading-relaxed">{solution}</p>
                        </div>
                    </div>
                </div>

                {/* Right Content / Architecture Diagram Placeholder */}
                <div className="p-6 lg:p-12 bg-navy-dark/50">
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Technical Highlights</h4>
                    <ul className="space-y-4 mb-8">
                        {highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle2 size={16} className="text-accent shrink-0 mt-1" />
                                <span className="text-slate-light text-xs sm:text-sm leading-relaxed">{h}</span>
                            </li>
                        ))}
                    </ul>

                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Business Impact</h4>
                    <div className="flex flex-wrap gap-3">
                        {impact.map((imp, i) => (
                            <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-light">
                                {imp}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer / CTA */}
            <div className="px-8 py-6 bg-white/5 flex items-center justify-between border-t border-white/10">
                <div className="flex gap-4 flex-wrap">
                    {(techTags ?? [
                        { label: "SQLite (Local)", icon: <Database size={14} /> },
                        { label: "LAN Sync", icon: <Wifi size={14} /> },
                    ]).map((tag, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate">
                            {tag.icon}
                            {tag.label}
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-semibold text-slate-light hover:text-white transition-colors"
                        >
                            GitHub <Github size={16} />
                        </a>
                    )}
                    {liveUrl ? (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors"
                        >
                            Live Demo <ExternalLink size={16} />
                        </a>
                    ) : (
                        <button className="flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors">
                            View Details <ExternalLink size={16} />
                        </button>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default function CaseStudies() {
    const caseStudies = [
        {
            title: "Multi-Branch Salon Management System",
            category: "Enterprise System Architecture",
            problem: "A high-end salon franchise struggled with data fragmentation across branches. Staff needed to record sales and manage inventory even when the internet was down, while the owner needed a unified view of commissions and revenue from all locations.",
            solution: "Architected a 'Distributed Branch-Server' model. Each branch runs a local desktop application using SQLite for immediate response and offline durability. A central server aggregates data via a REST API, providing the owner with real-time financial reporting and inventory control.",
            highlights: [
                "Local-First data persistence with SQLite and Electron.",
                "Custom REST-based LAN synchronization module for branch-to-owner data flow.",
                "Automated commission calculation engine for 50+ stylists.",
                "Daily automated database backups to cloud and physical storage."
            ],
            impact: [
                "Eliminated manual spreadsheet reconciliation",
                "99.9% availability during ISP outages",
                "30% faster checkout process"
            ]
        },
        {
            title: "Decentralized Rental Management System",
            category: "Field Operations Infrastructure",
            problem: "Property caretakers in remote locations often lacked reliable internet, making it hard to track rent collection and maintenance requests. The owner required a centralized dashboard to track payment status without waiting for manual reports.",
            solution: "Developed a caretaker-to-owner synchronization model. Caretakers use a lightweight offline-capable application. Data is versioned using UUIDs and timestamps, and uploaded to the owner's server through intermittent connections using a resilient retry mechanism.",
            highlights: [
                "Caretaker-to-Owner data aggregation model.",
                "Role-based permission system for caretakers and accountants.",
                "Resilient sync queue that handles intermittent mobile data connections.",
                "Automated PDF financial statement generation."
            ],
            impact: [
                "Reduced payment delays by 40%",
                "Real-time visibility into property status",
                "Simplified accounting workflow"
            ]
        },
        {
            title: "Rental Property Business Intelligence Dashboard",
            category: "Data Engineering & Analytics",
            problem: "Property portfolio managers had raw CSV transaction data but no way to extract meaningful insight from it. Key metrics like occupancy rates, late payment trends, and revenue forecasts existed only as manual calculations in spreadsheets.",
            solution: "Built a modern, interactive BI dashboard with Next.js 16 and Recharts that ingests raw CSV rental data server-side and renders live KPI cards, revenue forecasting charts, occupancy analysis, and payment distribution — all filterable by property and payment status.",
            highlights: [
                "Server-side CSV ingestion via PapaParse, eliminating the need for a database layer.",
                "3-month moving-average revenue forecasting rendered as an area chart.",
                "Stacked bar chart for late vs. on-time payments broken down per property.",
                "Interactive slicer controls that update all charts simultaneously.",
                "All monetary values displayed in Kenyan Shillings (KSh) with localised formatting."
            ],
            impact: [
                "Instant visibility into portfolio health",
                "Identified top late-paying properties",
                "Enabled data-driven rent pricing decisions"
            ],
            techTags: [
                { label: "Next.js 16" },
                { label: "TypeScript" },
                { label: "Recharts" },
                { label: "Tailwind CSS v4" },
                { label: "PapaParse" },
            ],
            githubUrl: "https://github.com/Ka-few/Rental-Property-Business-Intelligence-Dashboard",
            liveUrl: "https://rental-property-business-intelligen.vercel.app/"
        }
    ];

    return (
        <section id="case-studies" className="section py-20">
            <div className="mb-12">
                <div className="label mb-2">◈ Featured Work</div>
                <h2 className="heading-lg mb-4">Case Studies</h2>
                <p className="text-slate max-w-2xl">
                    Deep dives into complex systems designed to solve real-world operational challenges for distributed businesses.
                </p>
            </div>

            <div className="space-y-12">
                {caseStudies.map((cs, i) => (
                    <CaseStudyBlock key={i} index={i} {...cs} />
                ))}
            </div>
        </section>
    );
}
