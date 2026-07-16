"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const achievements = [
    "Designed and developed scalable full-stack applications using React, TypeScript, Express.js, Flask, and PostgreSQL.",
    "Built reusable React component libraries and scalable frontend architectures using React, Redux, Zustand, and TypeScript.",
    "Developed GraphQL and REST API integrations for frontend and backend communication.",
    "Engineered conversational AI solutions using Twilio WhatsApp APIs.",
    "Developed secure integrations using GraphQL, REST APIs and webhooks.",
    "Integrated AI-powered capabilities into business applications.",
    "Leveraged GitHub Copilot, Claude, Cursor AI and ChatGPT to accelerate development.",
    "Collaborated across the complete software development lifecycle."
];

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="experience" className="section py-20">
            <div className="mb-14">
                <div className="label mb-2">◈ Professional Journey</div>
                <h2 className="heading-lg mb-4">Experience</h2>
                <p className="text-slate max-w-2xl">
                    A track record of delivering scalable software solutions, integrating AI capabilities, and building robust enterprise systems.
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="glass p-8 md:p-12 rounded-2xl relative overflow-hidden"
                >
                    {/* Background Icon */}
                    <div className="absolute -right-12 -bottom-12 opacity-[0.03] text-white pointer-events-none">
                        <Briefcase size={200} />
                    </div>

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-8 border-b border-white/10">
                            <div>
                                <h3 className="heading-md mb-2 text-white">Full Stack Software Engineer</h3>
                                <div className="text-accent font-semibold tracking-wide">Freelance & Contract</div>
                            </div>
                            <div className="flex items-center gap-2 text-slate text-sm font-medium bg-white/5 px-4 py-2 rounded-full w-fit">
                                <Calendar size={16} className="text-slate-light" />
                                4+ Years Experience
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-light mb-4">Key Achievements & Responsibilities</h4>
                            {achievements.map((achievement, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                                    className="flex items-start gap-3 group"
                                >
                                    <ChevronRight size={18} className="text-accent shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                                    <p className="text-slate text-sm md:text-base leading-relaxed group-hover:text-slate-light transition-colors">
                                        {achievement}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
