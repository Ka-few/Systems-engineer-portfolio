"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layout, Server, Database, MessageSquare, Container, Sparkles } from "lucide-react";

interface StackCategoryProps {
    title: string;
    icon: React.ElementType;
    items: string[];
    index: number;
    accentColor?: string;
}

function StackCategory({ title, icon: Icon, items, index, accentColor = "var(--accent)" }: StackCategoryProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="glass p-8 rounded-xl border border-white/5 hover:border-accent/30 transition-colors"
        >
            <div className="flex items-center gap-3 mb-6">
                <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: `${accentColor}15`, border: `1px solid ${accentColor}30` }}
                >
                    <Icon size={22} color={accentColor} />
                </div>
                <h3 className="font-bold text-lg text-white">{title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
                {items.map((item, i) => (
                    <span
                        key={i}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-slate-light hover:text-accent hover:border-accent/30 transition-colors"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

export default function TechStack() {
    const categories = [
        {
            title: "Operating Systems",
            icon: Layout,
            accentColor: "#38bdf8",
            items: ["Linux", "Windows", "Networking Fundamentals", "System Logs", "Service Health"],
        },
        {
            title: "Scripting & Automation",
            icon: Server,
            accentColor: "#f59e0b",
            items: ["Python", "Bash", "JavaScript", "TypeScript", "Automation Scripts", "Log Analysis"],
        },
        {
            title: "Databases & Data Validation",
            icon: Database,
            accentColor: "#f472b6",
            items: ["SQL", "Oracle Database", "PostgreSQL", "MySQL", "Data Validation", "Safe Change Awareness"],
        },
        {
            title: "APIs & Integrations",
            icon: MessageSquare,
            accentColor: "#25d366",
            items: ["REST APIs", "HTTP Status Codes", "Authentication", "Payload Inspection", "Postman", "Insomnia"],
        },
        {
            title: "Kubernetes & Containers",
            icon: Container,
            accentColor: "#818cf8",
            items: ["Docker", "Kubernetes", "kubectl", "Pods", "Deployments", "Services", "Namespaces", "Events"],
        },
        {
            title: "DevOps & Collaboration",
            icon: Sparkles,
            accentColor: "#fb923c",
            items: ["Git", "GitHub", "GitLab", "CI/CD", "GitHub Actions", "Pull Requests", "Documentation"],
        },
    ];

    return (
        <section id="stack" className="section py-20">
            <div className="mb-12">
                <div className="label mb-2">◈ Toolkit</div>
                <h2 className="heading-lg mb-4">Operations & Troubleshooting Toolkit</h2>
                <p className="text-slate max-w-2xl">
                    A practical stack for incident diagnosis, service support, automation, and reliability work across modern application environments.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((cat, i) => (
                    <StackCategory key={i} index={i} {...cat} />
                ))}
            </div>
        </section>
    );
}
