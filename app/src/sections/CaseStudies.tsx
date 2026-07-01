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
            ],
            githubUrl: "https://github.com/Ka-few/Mwas-beauty-app"
        },
        {
            title: "Rental management system",
            category: "Field Operations & AI Integration",
            problem: "Property caretakers in remote locations often lacked reliable internet, making it hard to track rent collection and maintenance requests. The owner required a centralized dashboard to track payment status without waiting for manual reports.",
            solution: "Developed an offline-first Caretaker-to-Owner synchronization model. Caretakers use a resilient local application featuring a privacy-focused local AI assistant (powered by Ollama) to instantly query operations and manage workflow without needing internet connectivity.",
            highlights: [
                "Offline AI Assistant - Chat with a privacy-focused local AI (powered by Ollama) to instantly query tenants, find debtors, record payments, and log maintenance.",
                "Dashboard Analytics - Revenue trends and occupancy charts.",
                "Search & Filter - Quickly find tenants by name, ID, or phone.",
                "User Management - Securely change passwords from the Settings page.",
                "Toast Notifications - Professional feedback for all actions.",
                "Database Backup - Download and restore your data.",
                "Receipt Printing - Generate payment receipts with company branding.",
                "Bi-directional Sync - Sync data between Owner (Master) and Caretaker (Branch) computers.",
                "Local SQLite DB - Each machine maintains its own local copy of the database.",
                "Incremental Updates - Periodic background sync (every 3h) of only new/modified records.",
                "File & Image Sync - Automatic transfer of maintenance photos and receipts."
            ],
            impact: [
                "Reduced payment delays by 40%",
                "Real-time visibility into property status",
                "Simplified accounting workflow"
            ],
            githubUrl: "https://github.com/Ka-few/rental-mgt-system"
        },
        {
            title: "Bull Semen Catalog & AI Logistics Platform",
            category: "Agricultural Logistics & Platform",
            problem: "Farmers needed a way to browse a catalog of high-quality bull semen, place orders, and coordinate artificial insemination (AI) services with certified vets and suppliers.",
            solution: "Developed a comprehensive digital platform connecting dairy farmers with top-tier genetics, certified veterinary professionals, and agricultural semen suppliers. The application handles the entire logistics pipeline.",
            highlights: [
                "Role-Based Access Control (RBAC) with distinct dashboards for Farmers, Vets, Agri-Suppliers, and Admins.",
                "Geospatial Logistics integrating Leaflet maps to visually pinpoint delivery locations and match vets/suppliers based on coordinates.",
                "Inventory Management where suppliers maintain localized stock that updates dynamically.",
                "Full end-to-end Order Tracking (pending, allocated, fetched_by_vet, completed)."
            ],
            impact: [
                "Streamlined agricultural logistics pipeline",
                "Enabled precise geospatial matching of vets and farmers",
                "Improved localized inventory tracking for suppliers"
            ],
            techTags: [
                { label: "React" },
                { label: "TypeScript" },
                { label: "Vite" },
                { label: "TailwindCSS" },
                { label: "Leaflet" },
                { label: "Node.js" },
                { label: "Express.js" },
                { label: "SQLite3" },
            ],
            githubUrl: "https://github.com/Ka-few/Bull-Semen-Catalog"
        },
        {
            title: "ShambaSmart Farm Management Application",
            category: "Agricultural-Fintech Infrastructure",
            problem: "Farmers often rely on fragmented tools or manual record-keeping, leading to poor visibility into farm operations, inaccurate financial tracking, and limited data-driven decision-making. Additionally, most digital solutions require constant internet access, which is unreliable in many rural environments.",
            solution: "Developed a desktop-native farm management system using Tauri, React, TypeScript, and SQLite, designed with an ‘Agricultural-Fintech’ approach. Integrated an offline AI assistant powered by Ollama (Llama 3.1) to enable intelligent querying and analysis of farm data without internet dependency.",
            highlights: [
                "Offline-first architecture with SQLite for reliable local data persistence.",
                "Rust-powered backend via Tauri for secure, high-performance native execution.",
                "Integrated AI assistant with database tool-calling through Tauri IPC.",
                "Interactive data visualization using Recharts for real-time farm analytics.",
                "Dynamic PDF reporting system using jsPDF and AutoTable."
            ],
            impact: [
                "Enabled fully offline farm operations and decision-making",
                "Improved financial and production tracking accuracy",
                "Reduced reliance on manual records and fragmented tools",
                "Empowered farmers with AI-driven insights in real time"
            ],
            techTags: [
                { label: "Tauri" },
                { label: "React" },
                { label: "TypeScript" },
                { label: "SQLite" },
                { label: "Ollama AI" },
                { label: "jsPDF" },
            ],
            githubUrl: "https://github.com/Ka-few/farm-mgt-app"
        },
        {
            title: "Wine & Spirits Distributor App",
            category: "Distribution & Retail Operations",
            problem: "Wine and spirits distributors often struggle with disconnected systems for inventory, sales, customer management, and reporting. This leads to inefficiencies, inconsistent data, and difficulty scaling operations across retail and distribution channels.",
            solution: "Built a comprehensive, monorepo-based distribution and retail management system combining backend services, desktop POS, and mobile applications. Designed to unify operations across inventory, sales, and customer management into a single cohesive platform.",
            highlights: [
                "Monorepo architecture with shared modules for consistency across platforms.",
                "Backend REST API built with Node.js and Express, powered by Prisma ORM.",
                "Desktop POS application using Tauri + React with sidecar backend integration.",
                "Mobile application built with React Native (Expo) for remote access and field operations.",
                "Shared workspace for reusable types, interfaces, and business logic."
            ],
            impact: [
                "Centralized operations across multiple distribution channels",
                "Improved inventory accuracy and sales tracking",
                "Enhanced scalability through unified architecture",
                "Streamlined workflows for both desktop and mobile users"
            ],
            techTags: [
                { label: "Node.js" },
                { label: "Express" },
                { label: "Prisma" },
                { label: "Tauri" },
                { label: "React Native" },
                { label: "Monorepo" },
            ],
            githubUrl: "https://github.com/Ka-few/wines-and-spirits-distributor-app"
        }
    ];

    return (
        <section id="case-studies" className="section py-20">
            <div className="mb-12">
                <div className="label mb-2">◈ Featured Case Studies</div>
                <h2 className="heading-lg mb-4">Enterprise Systems & Offline-First Architectures</h2>
                <p className="text-slate max-w-2xl">
                    Deep dives into high-impact systems designed for distributed operations, offline resilience, and multi-branch business ownership. Featuring 5 production-ready systems delivered for real-world enterprise workflows.
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
