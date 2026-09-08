"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const achievements = [
    "Provide technical support for ERP and full-stack business applications, investigating customer-reported issues across the UI, API, backend services, and database layers.",
    "Troubleshoot API and integration failures by reproducing issues, inspecting request and response payloads, reviewing HTTP errors, and validating application logs to find the likely root cause.",
    "Use SQL and relational databases to confirm whether errors originate in the frontend, API, backend logic, or underlying data, while following safe production-change practices.",
    "Support Linux and container-based environments, using kubectl, pod descriptions, logs, and events to understand service health and isolate failures in Kubernetes workloads.",
    "Document investigation steps, resolutions, and customer guidance clearly, while escalating complex issues with relevant evidence to engineering or QA teams.",
    "Use Python, Bash, and JavaScript/TypeScript for diagnostics, automation, data processing, and operational improvements that reduce repetitive troubleshooting effort.",
    "Work with GitHub/GitLab workflows, branching, pull requests, and CI/CD practices to support collaboration and deployment confidence in modern engineering environments."
];

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="experience" className="section py-20">
            <div className="mb-14">
                <div className="label mb-2">◈ Experience</div>
                <h2 className="heading-lg mb-4">Operational Experience</h2>
                <p className="text-slate max-w-2xl">
                    A practical track record in technical support, incident troubleshooting, API diagnostics, and production reliability across business-critical systems.
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
                                <h3 className="heading-md mb-2 text-white">Technical Support Engineer</h3>
                                <div className="text-accent font-semibold tracking-wide">Business Systems & Application Support</div>
                            </div>
                            <div className="flex items-center gap-2 text-slate text-sm font-medium bg-white/5 px-4 py-2 rounded-full w-fit">
                                <Calendar size={16} className="text-slate-light" />
                                7+ Years Experience
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
