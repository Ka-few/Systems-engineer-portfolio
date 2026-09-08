"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const principles = [
    {
        title: "Uptime starts with clear diagnosis.",
        description: "Incidents are rarely solved by guesswork. I focus on reproducing issues, reviewing logs and request flow, and establishing the evidence needed to isolate the real problem before making changes."
    },
    {
        title: "User trust depends on service reliability.",
        description: "Whether a system is a business app, API, or internal workflow, users judge its quality by how reliably it works. Strong support and operational discipline build that trust over time."
    },
    {
        title: "Well-instrumented systems are easier to support.",
        description: "Healthy services depend on good logging, structured monitoring, clean API behavior, and clear operational ownership. The stronger the observability, the faster the response."
    },
    {
        title: "Automation reduces repeat incidents.",
        description: "From scripts for diagnostics to automation that reduces manual troubleshooting, I value the operational improvements that turn firefighting into sustainable service health."
    }
];

export default function Philosophy() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="philosophy" className="section py-24 border-y border-white/5 bg-navy-dark">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="label mb-4">◈ Reliability Principles</div>
                    <h2 className="heading-lg mb-6">How I Think About Stability</h2>
                </div>

                <div className="space-y-12">
                    {principles.map((p, i) => (
                        <motion.div
                            key={i}
                            ref={ref}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="group"
                        >
                            <div className="flex items-start gap-8">
                                <div className="text-4xl font-bold text-white/10 group-hover:text-accent/20 transition-colors duration-300 select-none">
                                    0{i + 1}
                                </div>
                                <div className="flex-1 pb-10 border-b border-white/5">
                                    <h3 className="heading-sm mb-3 group-hover:text-accent transition-colors duration-300">
                                        {p.title}
                                    </h3>
                                    <p className="text-slate leading-relaxed">
                                        {p.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
