"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Database, Server, Laptop, ArrowRightLeft, ShieldCheck, Layers } from "lucide-react";

interface ComponentProps {
    id: string;
    icon: any;
    title: string;
    description: string;
    x: string;
    y: string;
}

function ArchitectureComponent({ icon: Icon, title, description, x, y }: ComponentProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="absolute"
            style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-16 h-16 rounded-xl glass flex items-center justify-center cursor-help transition-colors duration-300 ${isHovered ? 'border-accent text-accent' : 'border-white/10 text-slate-light'}`}
            >
                <Icon size={32} />
            </motion.div>

            {/* Tooltip */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.9, y: isHovered ? 0 : 10 }}
                className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-48 p-3 glass-strong rounded-lg pointer-events-none z-10"
            >
                <h5 className="text-xs font-bold text-white mb-1">{title}</h5>
                <p className="text-[10px] text-slate-light leading-normal">{description}</p>
            </motion.div>
        </div>
    );
}

export default function ArchitectureShowcase() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="architecture" className="section py-20 bg-navy/30">
            <div className="mb-16">
                <div className="label mb-2">◈ System Design</div>
                <h2 className="heading-lg mb-4">Architecture Showcase</h2>
                <p className="text-slate max-w-2xl">
                    A visual look at how I design distributed systems to ensure data integrity and operational continuity.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                {/* Main Diagram Area */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    className="relative glass w-full h-[500px] rounded-2xl overflow-x-auto overflow-y-hidden p-6 lg:p-8 flex flex-col justify-between"
                >
                    <div className="absolute inset-0 grid-texture opacity-30"></div>

                    <div className="relative z-10 w-[700px] lg:w-auto">
                        <h3 className="heading-md mb-2">Distributed Sync Lifecycle</h3>
                        <p className="text-sm text-slate">Hover over components to explore the architecture</p>
                    </div>

                    <div className="relative flex-1 min-w-[700px] lg:min-w-0">
                        {/* SVG Connections Layer */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            {/* Lines from Branches to Switch */}
                            <motion.path
                                d="M 200,100 L 500,250"
                                stroke="rgba(56, 189, 248, 0.2)"
                                strokeWidth="2"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={isInView ? { pathLength: 1 } : {}}
                                transition={{ duration: 1, delay: 0.5 }}
                            />
                            <motion.path
                                d="M 200,250 L 500,250"
                                stroke="rgba(56, 189, 248, 0.2)"
                                strokeWidth="2"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={isInView ? { pathLength: 1 } : {}}
                                transition={{ duration: 1, delay: 0.7 }}
                            />
                            <motion.path
                                d="M 200,400 L 500,250"
                                stroke="rgba(56, 189, 248, 0.2)"
                                strokeWidth="2"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={isInView ? { pathLength: 1 } : {}}
                                transition={{ duration: 1, delay: 0.9 }}
                            />
                            {/* Line from Switch to Server */}
                            <motion.path
                                d="M 500,250 L 800,250"
                                stroke="rgba(56, 189, 248, 0.4)"
                                strokeWidth="3"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={isInView ? { pathLength: 1 } : {}}
                                transition={{ duration: 1.2, delay: 1.5 }}
                            />
                        </svg>

                        {/* Components */}
                        <ArchitectureComponent
                            id="branch1"
                            icon={Laptop}
                            title="Branch Node A"
                            description="Local Electron app with embedded SQLite database. Operates 100% offline."
                            x="20%" y="20%"
                        />
                        <ArchitectureComponent
                            id="branch2"
                            icon={Laptop}
                            title="Branch Node B"
                            description="Synchronizes changes to central server via RESTful batches with retry logic."
                            x="20%" y="50%"
                        />
                        <ArchitectureComponent
                            id="branch3"
                            icon={Laptop}
                            title="Branch Node C"
                            description="Handles conflict resolution locally using UUID record versioning."
                            x="20%" y="80%"
                        />

                        <ArchitectureComponent
                            id="switch"
                            icon={ArrowRightLeft}
                            title="Sync Orchestrator"
                            description="Manages concurrent sync requests and enforces data validation rules."
                            x="50%" y="50%"
                        />

                        <ArchitectureComponent
                            id="server"
                            icon={Server}
                            title="Central Owner Server"
                            description="Aggregates data from all branches into a master PostgreSQL database."
                            x="80%" y="50%"
                        />
                    </div>

                    <div className="relative z-10 flex gap-6 text-xs text-slate uppercase tracking-widest font-bold">
                        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald"></div> Data Integrity</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent"></div> Sync Active</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-slate"></div> Local Storage</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
