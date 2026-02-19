"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layout, Server, Database, Globe } from "lucide-react";

interface StackCategoryProps {
    title: string;
    icon: any;
    items: string[];
    index: number;
}

function StackCategory({ title, icon: Icon, items, index }: StackCategoryProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass p-8 rounded-xl border border-white/5 hover:border-accent/30 transition-colors"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <Icon size={24} />
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
            title: "Frontend",
            icon: Layout,
            items: ["React (Next.js)", "TypeScript", "Tailwind CSS", "Framer Motion", "Electron", "Lucide React"]
        },
        {
            title: "Backend & Sync",
            icon: Server,
            items: ["Node.js", "Express.js", ".NET (C#)", "REST APIs", "Sync Engine Logic", "LAN Configuration", "VPN Tunneling"]
        },
        {
            title: "Database & Storage",
            icon: Database,
            items: ["SQLite (Edge)", "PostgreSQL (Central)", "UUID Versioning", "Record Batching", "Conflict Resolution", "Redux/Zustand"]
        },
        {
            title: "Tools & Deploy",
            icon: Globe,
            items: ["Git / GitHub", "Docker", "Nginx", "Windows Packaging", "Linux Distribution", "Bash Scripting"]
        }
    ];

    return (
        <section id="stack" className="section py-20">
            <div className="mb-12">
                <div className="label mb-2">◈ My Stack</div>
                <h2 className="heading-lg mb-4">Development Toolkit</h2>
                <p className="text-slate max-w-2xl">
                    A structured selection of technologies chosen for stability, offline capability, and enterprise reliability.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories.map((cat, i) => (
                    <StackCategory key={i} index={i} {...cat} />
                ))}
            </div>
        </section>
    );
}
