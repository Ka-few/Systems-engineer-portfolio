"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const roles = [
    {
        title: "IT Support & Business Systems Consultant",
        company: "Kafew Digital Solutions",
        location: "Nairobi",
        period: "Jul 2024 - Present",
        responsibilities: [
            "Provide technical support for ERP and full-stack business applications, investigating customer-reported issues across the UI, API, backend services, and database layers.",
            "Troubleshoot API and integration failures by reproducing issues, inspecting request and response payloads, analyzing HTTP errors and application logs, and tracing failures to likely root cause.",
            "Develop and integrate RESTful APIs, working with endpoints, authentication, HTTP status codes, payloads, and backend data flows.",
            "Use SQL and relational databases to validate records and determine whether issues originate in the frontend, API, backend logic, or underlying data.",
            "Use Python, Bash, and JavaScript/TypeScript for scripting, application development, automation, diagnostics, and data-processing tasks.",
            "Use GitHub and Git workflows for source-code management and collaboration, including branches, commits, pull requests, and CI/CD automation; familiar with GitLab workflows.",
            "Work with containerized applications and Kubernetes concepts and tools, using kubectl for resource inspection, logs, events, and troubleshooting.",
            "Communicate directly with customers, provide technical guidance, document investigations and resolutions, and escalate complex issues with relevant diagnostic evidence."
        ]
    },
    {
        title: "IT Support Officer",
        company: "Datacomm Systems & Solutions",
        location: "Nakuru",
        period: "Nov 2016 - Apr 2024",
        responsibilities: [
            "Provided frontline technical support and troubleshooting for customers using business and inventory-management systems, investigating underlying causes rather than only symptoms.",
            "Managed customer issues through diagnosis, resolution, follow-up, and documentation while maintaining customer trust and service continuity.",
            "Supported implementation and adoption of business technology solutions, including user training and post-deployment technical support.",
            "Translated business requirements into practical technical solutions and clear guidance for non-technical users."
        ]
    }
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

            <div className="max-w-4xl mx-auto space-y-6">
                {roles.map((role, roleIndex) => (
                <motion.div
                    key={role.company}
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: roleIndex * 0.15 }}
                    className="glass p-8 md:p-12 rounded-2xl relative overflow-hidden"
                >
                    {/* Background Icon */}
                    <div className="absolute -right-12 -bottom-12 opacity-[0.03] text-white pointer-events-none">
                        <Briefcase size={200} />
                    </div>

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-8 border-b border-white/10">
                            <div>
                                <h3 className="heading-md mb-2 text-white">{role.title}</h3>
                                <div className="text-accent font-semibold tracking-wide">{role.company}</div>
                                <div className="text-slate text-sm mt-1">{role.location}</div>
                            </div>
                            <div className="flex items-center gap-2 text-slate text-sm font-medium bg-white/5 px-4 py-2 rounded-full w-fit">
                                <Calendar size={16} className="text-slate-light" />
                                {role.period}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-light mb-4">Key Achievements & Responsibilities</h4>
                            {role.responsibilities.map((responsibility, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                                    className="flex items-start gap-3 group"
                                >
                                    <ChevronRight size={18} className="text-accent shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                                    <p className="text-slate text-sm md:text-base leading-relaxed group-hover:text-slate-light transition-colors">
                                        {responsibility}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
                ))}
            </div>
        </section>
    );
}
