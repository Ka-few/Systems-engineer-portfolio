"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const principles = [
    {
        title: "Software must reflect business reality.",
        description: "Code shouldn't exist in a vacuum. I build systems that account for physical workflows, operational hierarchy, and real-world friction."
    },
    {
        title: "Systems must tolerate unreliable networks.",
        description: "Connectivity is a luxury, not a guarantee. My systems are designed to be functional by default, using synchronization as an enhancement, not a requirement."
    },
    {
        title: "Architecture matters more than features.",
        description: "Features can be added, but a broken foundation is expensive to fix. I prioritize scalability, data integrity, and clean separation of concerns."
    },
    {
        title: "Data ownership is critical for SMEs.",
        description: "Small businesses shouldn't be held hostage by cloud providers. Local-first architecture ensures they own their data, regardless of their internet status."
    }
];

export default function Philosophy() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="philosophy" className="section py-24 border-y border-white/5 bg-navy-dark">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="label mb-4">◈ Principles</div>
                    <h2 className="heading-lg mb-6">Engineering Philosophy</h2>
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
