"use client";

import { motion } from "framer-motion";
import { Hammer, Toolbox } from "lucide-react";

export default function CurrentlyBuilding() {
    const projects = [
        {
            title: "Generic Desktop Sync Engine",
            description: "A reusable core for Electron applications to handle local SQLite to remote PostgreSQL synchronization with conflict resolution.",
            status: "In Development"
        },
        {
            title: "SME Infrastructure Toolkit",
            description: "A set of networking and deployment scripts for setting up branch-to-owner VPN tunnels and automated daily backups.",
            status: "Beta Testing"
        }
    ];

    return (
        <section className="section py-20">
            <div className="label mb-12 text-center">◈ Currently Building</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -5 }}
                        className="glass-strong p-8 rounded-2xl relative overflow-hidden group"
                    >
                        {/* Background Icon */}
                        <div className="absolute -right-8 -bottom-8 opacity-[0.03] text-white group-hover:scale-110 transition-transform duration-500">
                            <Hammer size={160} />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 text-emerald text-xs font-bold uppercase tracking-widest mb-4">
                                <span className="w-2 h-2 rounded-full bg-emerald animate-pulse"></span>
                                {p.status}
                            </div>
                            <h3 className="heading-sm mb-3">{p.title}</h3>
                            <p className="text-slate text-sm leading-relaxed mb-6">
                                {p.description}
                            </p>
                            <div className="inline-flex items-center gap-2 text-white/40 text-xs italic">
                                <Toolbox size={14} /> Modular internal project
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
