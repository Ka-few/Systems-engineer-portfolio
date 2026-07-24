"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageCircle, Server, Smartphone, Brain, Bot, Network } from "lucide-react";

interface ComponentProps {
    id: string;
    icon: React.ElementType;
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
                <div className="label mb-2">◈ Systems Integration</div>
                <h2 className="heading-lg mb-4">API & Integration Architecture</h2>
                <p className="text-slate max-w-2xl">
                    A look at how I connect messaging platforms, third-party services, and data systems through secure business APIs, automated workflows, and reliable integration patterns.
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
                        <h3 className="heading-md mb-2">Conversational Platform Request Flow</h3>
                        <p className="text-sm text-slate">Hover over components to explore the architecture</p>
                    </div>

                    <div className="relative flex-1 min-w-[700px] lg:min-w-0">
                        {/* SVG Connections Layer */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            {/* Line from User to Twilio */}
                            <motion.path
                                d="M 150,250 L 350,250"
                                stroke="rgba(37, 211, 102, 0.4)"
                                strokeWidth="3"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={isInView ? { pathLength: 1 } : {}}
                                transition={{ duration: 1, delay: 0.5 }}
                            />
                            {/* Line from Twilio to Backend */}
                            <motion.path
                                d="M 350,250 L 550,250"
                                stroke="rgba(245, 158, 11, 0.4)"
                                strokeWidth="3"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={isInView ? { pathLength: 1 } : {}}
                                transition={{ duration: 1, delay: 0.8 }}
                            />
                            {/* Line from Backend to LLM */}
                            <motion.path
                                d="M 550,250 L 800,250"
                                stroke="rgba(244, 63, 94, 0.4)"
                                strokeWidth="3"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={isInView ? { pathLength: 1 } : {}}
                                transition={{ duration: 1.2, delay: 1.1 }}
                            />
                            {/* Line from Backend to DB/CRM */}
                            <motion.path
                                d="M 550,250 L 550,400"
                                stroke="rgba(56, 189, 248, 0.3)"
                                strokeWidth="2"
                                strokeDasharray="5,5"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={isInView ? { pathLength: 1 } : {}}
                                transition={{ duration: 1, delay: 1.4 }}
                            />
                        </svg>

                        {/* Components */}
                        <ArchitectureComponent
                            id="user"
                            icon={Smartphone}
                            title="WhatsApp User"
                            description="Customer sends natural language message or booking request via WhatsApp."
                            x="15%" y="50%"
                        />

                        <ArchitectureComponent
                            id="twilio"
                            icon={MessageCircle}
                            title="Twilio Gateway"
                            description="Receives WhatsApp message and triggers webhook to the backend API."
                            x="35%" y="50%"
                        />

                        <ArchitectureComponent
                            id="backend"
                            icon={Network}
                            title="Node.js API Backend"
                            description="Manages session state, handles webhook, routes intent, and enforces business logic."
                            x="55%" y="50%"
                        />

                        <ArchitectureComponent
                            id="crm"
                            icon={Server}
                            title="Enterprise CRM / DB"
                            description="PostgreSQL/GraphQL layer storing customer data, appointments, and application state."
                            x="55%" y="80%"
                        />

                        <ArchitectureComponent
                            id="llm"
                            icon={Brain}
                            title="LLM API Edge"
                            description="OpenAI model providing natural language understanding and contextual response generation."
                            x="80%" y="50%"
                        />
                    </div>

                    <div className="relative z-10 flex gap-6 text-xs text-slate uppercase tracking-widest font-bold">
                        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full" style={{ background: "#25d366" }}></div> User Input</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full" style={{ background: "var(--accent)" }}></div> Webhook Flow</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full" style={{ background: "var(--emerald)" }}></div> Model Inference</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
