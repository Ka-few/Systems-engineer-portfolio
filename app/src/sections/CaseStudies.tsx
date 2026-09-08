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
                    ? { boxShadow: "0 0 0 1px rgba(245,158,11,0.18), 0 6px 24px rgba(15,23,42,0.2)" }
                    : { boxShadow: "0 0 0 1px rgba(255,255,255,0.04)" }
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
                <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/10">
                    <div className="space-y-5">
                        <div>
                            <h4 className="text-accent font-bold text-sm uppercase tracking-wider mb-2">Problem</h4>
                            <p className="text-slate leading-relaxed text-sm">{problem}</p>
                        </div>

                        <div>
                            <h4 style={{ color: "#10b981" }} className="font-bold text-sm uppercase tracking-wider mb-2">Approach</h4>
                            <p className="text-slate leading-relaxed text-sm">{solution}</p>
                        </div>
                    </div>
                </div>

                <div className="p-8 lg:p-10 bg-navy-dark/30">
                    <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Operational Highlights</h4>
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
                            padding: "0.9rem 1rem",
                            background: "rgba(255,255,255,0.02)",
                            border: "1px solid rgba(255,255,255,0.06)",
                            borderRadius: "8px",
                        }}
                    >
                        <h4 className="text-white font-bold text-[11px] uppercase tracking-wider mb-1">{role}</h4>
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
            title: "WhatsApp Workflow Reliability & CRM Automation",
            category: "Operations · Messaging · Support Automation",
            isFlagship: true,
            summary:
                "A customer-facing WhatsApp workflow designed to reduce manual support overhead, prevent appointment errors, and provide a more reliable service experience for a beauty business.",
            problem:
                "Booking and customer follow-up were handled manually through chat messages, creating missed reminders, double bookings, and inconsistent records. The operational pain was not just user experience — it was service reliability and business continuity.",
            solution:
                "Built a support-friendly automation layer where customers can book, reschedule, and receive reminders through WhatsApp. The system adds webhook validation, event-driven processing, and admin visibility to improve consistency, traceability, and service recovery.",
            highlights: [
                "Twilio webhook processing with retry-safe orchestration and message state handling",
                "Operational booking workflow to reduce manual coordination and scheduling failures",
                "Data-backed reporting for revenue, service trends, and customer engagement",
                "GraphQL/API layer enabling consistent front-end and backend behavior",
                "Customer communication flow designed for repeatable business support rather than ad hoc handling",
                "Role-aware admin visibility for staff workflows and business tracking",
            ],
            challenges: [
                "Modeled a conversational workflow that remained reliable even with WhatsApp’s stateless message model and repeated inbound events",
                "Built idempotent webhook handling to prevent duplicate processing during retries and service interruptions",
                "Created a predictable operational model so staff could support bookings without manual reconciliation",
            ],
            role: "System Support & Operations Perspective",
            myRole: "Designed the reliability layer behind a WhatsApp-driven service flow — covering message handling, API consistency, business workflows, and operational traceability for real customers.",
            techTags: [
                { label: "Twilio" },
                { label: "Webhook Reliability" },
                { label: "WhatsApp Business API" },
                { label: "Node.js" },
                { label: "GraphQL" },
                { label: "PostgreSQL" },
                { label: "API Diagnostics" },
                { label: "Support Automation" },
            ],
            githubUrl: "https://github.com/Ka-few/whatsapp-business-os",
        },
        {
            title: "SheCare - Your Personal AI Health Companion",
            category: "AI Operations · Health Support · Reliability",
            isTeamProject: true,
            summary:
                "SheCare is a privacy-focused AI health companion designed to give women, particularly underserved and vulnerable women in Africa, a safe and stigma-free way to access preliminary health information. The platform allows users to privately describe symptoms and receive AI-guided health insights, possible areas of concern, and recommendations on when to seek professional medical care. The application also uses geolocation to help users identify nearby hospitals and healthcare facilities, making it easier to transition from digital health guidance to appropriate in-person care. The project was designed around privacy, accessibility, and early health-seeking behavior, with the goal of reducing barriers that can prevent women from openly discussing sensitive health concerns.",
            problem:
                "Users needed quick access to health-related guidance, but context, trust, and safety risks made unstructured AI responses a challenge. The support workflow had to balance accessibility with strong safety guardrails.",
            solution:
                "Built an AI-assisted messaging experience with prompt guardrails, clear conversational routing, and structured interpretation of health information. The system supports follow-up questions while reducing the risk of inaccurate or unsafe guidance.",
            highlights: [
                "Twilio-based messaging flow for safe, text-first support interactions",
                "Prompt design tuned for reliability, clarity, and risk mitigation",
                "Prescription interpretation in plain language to reduce confusion and support better user understanding",
                "Geolocation support for clinic discovery and service routing",
                "Structured conversation flow that reduces unsafe or unsupported health recommendations",
                "Support-focused UX for users in low-bandwidth environments",
            ],
            challenges: [
                "Implemented guardrails to reduce medical misinformation and reinforce safe AI behavior",
                "Designed a conversational model that remained helpful without requiring a complex mobile app experience",
                "Structured the flow so that support teams could understand how decisions were made and where escalation was needed",
            ],
            role: "Reliability & AI Support Contribution",
            myRole:
                "Contributed to the message orchestration, API workflow design, and prompt-safety layer, helping ensure the assistant behaved predictably while supporting users in real-world health scenarios.",
            techTags: [
                { label: "Twilio" },
                { label: "WhatsApp API" },
                { label: "LLM Safety" },
                { label: "Prompt Engineering" },
                { label: "Support Workflows" },
                { label: "Node.js" },
                { label: "Conversational AI" },
            ],
            liveUrl: "https://shecare.africa",
        },
        {
            title: "ShambaSmart Farm Operations & Offline Resilience",
            category: "Operational Tech · Reliability · Offline Systems",
            summary:
                "A desktop-first farm operations platform built to function reliably in low-connectivity environments while supporting business record-keeping, financial visibility, and operational decisions.",
            problem:
                "Farm operations were fragmented across manual records and inconsistent digital workflows. In many regions, internet access is unreliable, which creates a real service and data integrity risk when systems depend on constant connectivity.",
            solution:
                "Built an offline-first platform with a resilient local data layer and a desktop client that still supports reporting, AI-assisted queries, and operational visibility. The project emphasizes continuity under poor connectivity and clean local data handling.",
            highlights: [
                "Offline-first architecture with SQLite for dependable local persistence",
                "Resilient desktop app design for low-connectivity agricultural environments",
                "AI-assisted natural-language queries over local operational data",
                "Reporting and analytical workflows for expenses, revenue, and farm productivity",
                "Local data processing to reduce service outages caused by connectivity drops",
                "Support-minded design for continuous operation without cloud dependency",
            ],
            challenges: [
                "Bridged native desktop execution and local data access without creating reliability gaps under limited connectivity",
                "Built AI data-query flows that could operate without internet dependence and still provide usable results",
                "Maintained consistent reporting while working with local-first data integrity requirements",
            ],
            role: "Reliability & Systems Design",
            myRole: "Designed the system around resilience, local persistence, and dependable user workflows — from desktop data handling to offline business intelligence and AI-assisted reporting.",
            techTags: [
                { label: "Offline-First" },
                { label: "SQLite" },
                { label: "Tauri" },
                { label: "TypeScript" },
                { label: "React" },
                { label: "Rust" },
                { label: "Operational Analytics" },
                { label: "AI Tooling" },
            ],
            githubUrl: "https://github.com/Ka-few/farm-mgt-app",
        },
        {
            title: "PrimeGenetics — Service Workflow & Access Control",
            category: "Support Systems · RBAC · Marketplace Operations",
            summary:
                "A role-based marketplace and operational workflow supporting farmers, vets, and suppliers with clear access boundaries and service-specific actions.",
            problem:
                "Users in different roles needed access to different parts of the system, but business workflows were fragmented and the data experience was inconsistent across farmer, vet, and supplier processes.",
            solution:
                "Built a permission-aware service experience with role-based flows, inventory management, verification steps, and operational tracking. The project models how service access and business workflows can be controlled cleanly across stakeholders.",
            highlights: [
                "Role-based access design with clear separation between farmer, vet, and supplier workflows",
                "Operational service flow for ordering, verification, and assignment tasks",
                "Inventory and catalog management with structured permissions",
                "Admin controls for business oversight and record integrity",
                "Location-aware service discovery to reduce friction in real-world operations",
                "Secure backend patterns with access restrictions and session-aware operation",
            ],
            challenges: [
                "Structured role-specific data visibility to prevent cross-user access while preserving workflow continuity",
                "Connected frontend actions to secure backend processes with consistent authorization and session handling",
                "Kept the service experience intuitive even as business rules became more complex",
            ],
            role: "System Design & Access Operations",
            myRole: "Worked across the frontend, API, and data model to establish a clear operational system with role boundaries, workflow integrity, and secure business interactions.",
            techTags: [
                { label: "RBAC" },
                { label: "Express" },
                { label: "Supabase" },
                { label: "PostgreSQL" },
                { label: "React" },
                { label: "TypeScript" },
                { label: "Access Control" },
                { label: "Business Workflows" },
            ],
            githubUrl: "https://github.com/Ka-few/Bull-Semen-Catalog",
            liveUrl: "https://digital-bull-catalog-amber.vercel.app/",
            apiUrl: "https://bull-catalog.onrender.com/",
        },
        {
            title: "Salon Service Operations Dashboard",
            category: "Business Systems · Scheduling · Service Reliability",
            summary:
                "An internal business workflow system for scheduling appointments, tracking customers, and monitoring service performance so that daily operations remain organized and predictable.",
            problem:
                "The salon was running appointment flow through fragmented communication and informal tracking, which led to scheduling errors, poor record visibility, and weak reporting for service performance.",
            solution:
                "Built a structured operational platform where staff can manage appointments, review customer history, and access reporting dashboards. The system reduces manual errors and makes service performance easier to monitor and improve.",
            highlights: [
                "Appointment scheduling logic with conflict detection to reduce operation errors",
                "Customer record management and service history tracking for support continuity",
                "Role-aware access for admins and staff to prevent misuse or inconsistent updates",
                "Reporting on revenue patterns, popular services, and staff productivity",
                "REST API architecture for predictable backend behavior and supportable data flows",
                "Clean frontend design focused on operational clarity for business users",
            ],
            challenges: [
                "Modeled appointment scheduling logic to reflect real business constraints, including timing variations and staff availability",
                "Designed a data schema that supported both transactional day-to-day work and operational reporting without unnecessary complexity",
                "Made the platform easy to support as staff workflows evolved over time",
            ],
            role: "Support & Operational Systems Build",
            myRole: "Owned the end-to-end business workflow — from scheduling logic and customer data model to the API and reporting layer needed for day-to-day service reliability.",
            techTags: [
                { label: "Flask" },
                { label: "Python" },
                { label: "React" },
                { label: "PostgreSQL" },
                { label: "JWT Auth" },
                { label: "REST APIs" },
                { label: "Service Workflows" },
            ],
            githubUrl: "https://github.com/Ka-few/Beauty-parlor-app",
            liveUrl: "https://beauty-parlor-app-ztgj.vercel.app/",
        },
    ];

    return (
        <section id="case-studies" className="section py-20">
            <div className="mb-14">
                <div className="label mb-2">◈ Featured Work</div>
                <h2 className="heading-lg mb-4">Systems, Support & Reliability Projects</h2>
                <p className="text-slate max-w-2xl">
                    Real-world systems work spanning integrations, business platforms, automation, troubleshooting workflows, and resilient application support for teams and customers.
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
