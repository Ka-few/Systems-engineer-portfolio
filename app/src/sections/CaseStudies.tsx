"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ExternalLink, Github, Users } from "lucide-react";

interface TechTag {
    label: string;
}

interface ProjectCardProps {
    title: string;
    category: string;
    summary: string;
    problem: string;
    solution: string;
    highlights: string[];
    challenges: string[];
    role: string;
    myRole: string;
    techTags: TechTag[];
    githubUrl?: string;
    liveUrl?: string;
    apiUrl?: string;
    isTeamProject?: boolean;
    index: number;
    isFlagship?: boolean;
}

function TeamBadge() {
    return (
        <span
            style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                padding: "0.25rem 0.75rem",
                fontSize: "0.65rem",
                fontWeight: 700,
                color: "#38bdf8",
                background: "rgba(56,189,248,0.1)",
                border: "1px solid rgba(56,189,248,0.3)",
                borderRadius: "20px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
            }}
        >
            <Users size={11} />
            Team Project
        </span>
    );
}

function FlagshipBadge() {
    return (
        <span
            style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                padding: "0.25rem 0.75rem",
                fontSize: "0.65rem",
                fontWeight: 700,
                color: "#f59e0b",
                background: "rgba(245,158,11,0.1)",
                border: "1px solid rgba(245,158,11,0.3)",
                borderRadius: "20px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
            }}
        >
            ★ Flagship Project
        </span>
    );
}

function ProjectCard({
    title, category, summary, problem, solution, highlights, challenges,
    role, myRole, techTags, githubUrl, liveUrl, apiUrl, isTeamProject, index, isFlagship
}: ProjectCardProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="glass mb-16 overflow-hidden rounded-2xl"
            style={
                isFlagship
                    ? { boxShadow: "0 0 0 1px rgba(245,158,11,0.25), 0 8px 40px rgba(245,158,11,0.08)" }
                    : {}
            }
        >
            {/* Header */}
            <div
                style={{
                    padding: "2rem 2.5rem 1.5rem",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                    <span className="label">{category}</span>
                    {isFlagship && <FlagshipBadge />}
                    {isTeamProject && <TeamBadge />}
                </div>
                <h3 className="heading-md">{title}</h3>
                <p style={{ color: "var(--slate)", fontSize: "1rem", lineHeight: 1.7, maxWidth: "800px" }}>{summary}</p>
            </div>

            {/* Content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left */}
                <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/10">
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-accent font-bold text-sm uppercase tracking-wider mb-2">The Problem</h4>
                            <p className="text-slate leading-relaxed text-sm">{problem}</p>
                        </div>

                        <div>
                            <h4 style={{ color: "#10b981" }} className="font-bold text-sm uppercase tracking-wider mb-2">The Solution</h4>
                            <p className="text-slate leading-relaxed text-sm">{solution}</p>
                        </div>

                        <div>
                            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Challenges Solved</h4>
                            <ul className="space-y-2">
                                {challenges.map((c, i) => (
                                    <li key={i} className="flex items-start gap-2 text-slate text-xs leading-relaxed">
                                        <span style={{ color: "var(--accent)", marginTop: "1px", flexShrink: 0 }}>→</span>
                                        {c}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div className="p-8 lg:p-10 bg-navy-dark/40">
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Technical Highlights</h4>
                    <ul className="space-y-3 mb-8">
                        {highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
                                <span className="text-slate-light text-sm leading-relaxed">{h}</span>
                            </li>
                        ))}
                    </ul>

                    <div
                        style={{
                            padding: "1rem",
                            background: "rgba(255,255,255,0.02)",
                            border: "1px solid rgba(255,255,255,0.06)",
                            borderRadius: "8px",
                        }}
                    >
                        <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-1">{role}</h4>
                        <p className="text-slate text-xs leading-relaxed">{myRole}</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-5 bg-white/[0.02] flex items-center justify-between border-t border-white/8 flex-wrap gap-4">
                <div className="flex gap-2 flex-wrap">
                    {techTags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-xs text-slate hover:text-accent hover:border-accent/30 transition-colors"
                        >
                            {tag.label}
                        </span>
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
                            GitHub <Github size={15} />
                        </a>
                    )}
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors"
                        >
                            Live Demo <ExternalLink size={15} />
                        </a>
                    )}
                    {apiUrl && (
                        <a
                            href={apiUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-semibold text-slate-light hover:text-white transition-colors"
                        >
                            API <ExternalLink size={15} />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default function CaseStudies() {
    const projects: Omit<ProjectCardProps, "index">[] = [
        {
            title: "WhatsApp CRM for Beauty Salon",
            category: "Conversational AI · CRM · SaaS",
            isFlagship: true,
            summary:
                "A WhatsApp-native CRM platform built for a beauty salon that automates appointment booking, customer follow-ups, and business reporting entirely through WhatsApp — powered by Twilio, Node.js, and GraphQL.",
            problem:
                "The salon managed appointments via manual WhatsApp messages, leading to double-bookings, missed follow-ups, and zero visibility into revenue or customer retention. Staff spent hours each day on repetitive messaging.",
            solution:
                "Built a full-stack SaaS CRM where customers interact through WhatsApp naturally — booking, rescheduling, and receiving reminders automatically. The admin dashboard provides real-time CRM analytics, customer history, and revenue reporting via a GraphQL API.",
            highlights: [
                "Twilio WhatsApp Business API with webhook-driven message routing and session management",
                "Conversational booking flow — AI-assisted appointment scheduling through WhatsApp chat",
                "GraphQL API for flexible frontend queries with PostgreSQL persistence",
                "Real-time CRM dashboard — customer profiles, appointment calendar, revenue analytics",
                "Automated follow-up sequences and appointment reminder notifications",
                "Multi-staff management with role-based access and booking assignments",
                "SaaS-ready multi-tenant architecture for scaling to multiple salons",
            ],
            challenges: [
                "Designed a stateful conversation engine that handles multi-step booking flows within WhatsApp's stateless message model",
                "Built idempotent webhook processing to handle Twilio's at-least-once delivery guarantees",
                "Architected a GraphQL schema that efficiently serves both the admin dashboard and the WhatsApp bot backend",
            ],
            role: "My Role",
            myRole: "Solo developer — full stack design and implementation, from Twilio webhook integration and GraphQL API design to React dashboard and PostgreSQL schema.",
            techTags: [
                { label: "Twilio" },
                { label: "WhatsApp Business API" },
                { label: "Node.js" },
                { label: "GraphQL" },
                { label: "React" },
                { label: "TypeScript" },
                { label: "PostgreSQL" },
                { label: "Express" },
                { label: "JWT Auth" },
            ],
            githubUrl: "https://github.com/Ka-few/whatsapp-business-os",
        },
        {
            title: "SheCare — Women's Self-Care AI Assistant",
            category: "Conversational AI · Healthcare · WhatsApp",
            isTeamProject: true,
            summary:
                "A WhatsApp-based AI health assistant for women, providing AI-assisted healthcare guidance, prescription interpretation, and geolocation-based clinic discovery — built as part of a collaborative team project.",
            problem:
                "Women in underserved communities lacked affordable, immediate access to healthcare guidance. Clinic visits for minor concerns were costly and time-consuming, and health literacy around prescriptions was low.",
            solution:
                "A WhatsApp chatbot powered by LLM integration that provides symptom-based health guidance, interprets prescriptions in plain language, and surfaces nearby clinics on a map — all within a familiar messaging interface.",
            highlights: [
                "WhatsApp chatbot built on Twilio with LLM-powered conversational health guidance",
                "Prescription interpretation feature — decodes medical prescriptions into plain language",
                "Geolocation-based clinic finder surfacing nearby healthcare facilities",
                "LLM integration with prompt engineering for safe, context-aware health responses",
                "Conversation history and session management for multi-turn interactions",
                "Designed for low-bandwidth environments with text-first interactions",
            ],
            challenges: [
                "Implemented safe guardrails and prompt engineering patterns to prevent medical misinformation from the LLM",
                "Designed a geolocation query flow that works within WhatsApp's text-only interface without requiring a native app",
            ],
            role: "My Contributions",
            myRole:
                "Contributed to the Twilio WhatsApp integration layer, webhook routing architecture, and LLM prompt engineering. Collaborated with the team on system design and API contracts.",
            techTags: [
                { label: "Twilio" },
                { label: "WhatsApp API" },
                { label: "LLM Integration" },
                { label: "Prompt Engineering" },
                { label: "Node.js" },
                { label: "Conversational AI" },
                { label: "Geolocation API" },
            ],
        },
        {
            title: "ShambaSmart Farm Management",
            category: "Agricultural FinTech · Desktop · Offline-First",
            summary:
                "An offline-first, desktop-native farm management system built with React, TypeScript, and Tauri — featuring financial dashboards, analytics, business reporting, and an integrated AI assistant for data-driven farm decisions.",
            problem:
                "Farmers relied on fragmented tools and manual records, resulting in poor visibility into farm financials and operations. Most digital solutions required constant internet access — unusable in rural environments.",
            solution:
                "A Tauri-powered desktop application with SQLite for fully offline data persistence. An integrated AI assistant powered by Ollama enables natural-language querying of farm data without internet dependency. Interactive dashboards and PDF reporting provide business intelligence.",
            highlights: [
                "Offline-first architecture with SQLite for reliable local data persistence — no internet required",
                "Rust-powered Tauri backend for secure, high-performance native execution",
                "Integrated AI assistant with database tool-calling via Tauri IPC channels",
                "Financial dashboards with interactive Recharts visualizations — revenue, expenses, crop analytics",
                "Dynamic PDF reporting system using jsPDF and AutoTable for business reporting",
                "React + TypeScript frontend with clean component architecture",
            ],
            challenges: [
                "Bridged Rust (Tauri) and JavaScript (React) for secure IPC communication with the local SQLite database",
                "Implemented AI tool-calling that executes database queries through the Tauri command system without internet access",
            ],
            role: "My Role",
            myRole: "Solo developer — full system design, Tauri/Rust backend, React/TypeScript frontend, SQLite schema, AI assistant integration, and reporting module.",
            techTags: [
                { label: "React" },
                { label: "TypeScript" },
                { label: "Tauri" },
                { label: "SQLite" },
                { label: "Rust" },
                { label: "Ollama AI" },
                { label: "Recharts" },
                { label: "jsPDF" },
            ],
            githubUrl: "https://github.com/Ka-few/farm-mgt-app",
        },
        {
            title: "PrimeGenetics — Bull Semen Catalog",
            category: "AgriTech · Marketplace · RBAC",
            summary:
                "A role-based marketplace that helps dairy farmers discover bull semen, arrange veterinary artificial-insemination services, and source stock from agri-suppliers.",
            problem:
                "Dairy farmers need a straightforward way to compare genetics, find trusted veterinary AI services, and connect with suppliers—especially providers operating nearby. These workflows are often fragmented across separate channels.",
            solution:
                "Built a role-aware marketplace with farmer ordering flows, vet verification and assignment workflows, supplier inventory management, and an admin catalog. Location-aware results help farmers select nearby vets and suppliers.",
            highlights: [
                "Farmer experience — browse and filter bulls, manage a cart, place orders, and complete demo payments",
                "Veterinary workflows — maintain profiles, complete admin verification, and view assigned orders",
                "Agri-supplier portal — manage supplier profiles, bull listings, and inventory",
                "Admin catalog controls — manage bull records and vet verification",
                "Location-aware search — surfaces nearby vets and suppliers for farmers",
                "Supabase-backed data layer — Auth, PostgreSQL, Row Level Security, and Storage",
            ],
            challenges: [
                "Designed role-specific workflows while keeping application data scoped to the authenticated user through PostgreSQL Row Level Security",
                "Connected the React client to an Express API with bearer-token authentication while keeping Supabase responsible for passwords and sessions",
            ],
            role: "My Role",
            myRole: "Full-stack development — React frontend, Express API, Supabase-backed data model, authentication flows, role-based experiences, and marketplace workflows.",
            techTags: [
                { label: "React" },
                { label: "TypeScript" },
                { label: "Vite" },
                { label: "Tailwind CSS" },
                { label: "Node.js" },
                { label: "Express" },
                { label: "Supabase" },
                { label: "PostgreSQL" },
                { label: "RBAC" },
                { label: "React Leaflet" },
            ],
            githubUrl: "https://github.com/Ka-few/Bull-Semen-Catalog",
            liveUrl: "https://digital-bull-catalog-amber.vercel.app/",
            apiUrl: "https://bull-catalog.onrender.com/",
        },
        {
            title: "Beauty Salon Management System",
            category: "Business System · Web App · Scheduling",
            summary:
                "A web-based salon management application with appointment scheduling, customer management, staff authentication, and business reporting — built with Flask, React, and PostgreSQL.",
            problem:
                "A beauty salon managed appointments through a mix of WhatsApp messages and a paper diary, leading to scheduling conflicts, no customer history, and no reporting on revenue or service popularity.",
            solution:
                "A full-stack web application where staff log in to manage appointments via a calendar interface, customers are searchable with service history, and owners access revenue and appointment analytics. Built with a Flask REST API backend and a React frontend.",
            highlights: [
                "Appointment scheduling — calendar-based booking interface with conflict detection",
                "Customer management — searchable profiles with service history and visit frequency",
                "JWT authentication with role-based access for Admin and Staff roles",
                "Business reporting — revenue by period, popular services, and stylist performance",
                "Flask REST API with PostgreSQL — normalized schema for appointments, customers, and services",
                "Responsive React frontend with clean, minimal UI for daily salon operations",
            ],
            challenges: [
                "Implemented calendar-based appointment conflict detection that accounts for variable service durations and stylist availability",
                "Designed a PostgreSQL schema that efficiently supports both transactional operations and analytical reporting queries",
            ],
            role: "My Role",
            myRole: "Solo developer — Flask API design, PostgreSQL schema, React frontend, authentication system, scheduling logic, and reporting module.",
            techTags: [
                { label: "Flask" },
                { label: "Python" },
                { label: "React" },
                { label: "PostgreSQL" },
                { label: "JWT Auth" },
                { label: "REST APIs" },
                { label: "JavaScript" },
            ],
            githubUrl: "https://github.com/Ka-few/Beauty-parlor-app",
            liveUrl: "https://beauty-parlor-app-ztgj.vercel.app/",
        },
    ];

    return (
        <section id="case-studies" className="section py-20">
            <div className="mb-14">
                <div className="label mb-2">◈ Featured Projects</div>
                <h2 className="heading-lg mb-4">Full Stack Software Projects</h2>
                <p className="text-slate max-w-2xl">
                    Production-ready systems spanning conversational AI, enterprise business platforms, AI-powered applications, and modern web development — built for real businesses with real users.
                </p>
            </div>

            <div>
                {projects.map((project, i) => (
                    <ProjectCard key={i} index={i} {...project} />
                ))}
            </div>
        </section>
    );
}
