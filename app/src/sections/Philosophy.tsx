"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const principles = [
    {
        title: "Build software that solves real business problems.",
        description: "Code shouldn't exist in a vacuum. I focus on engineering solutions that improve workflows, generate revenue, and solve practical enterprise challenges rather than just writing complex code for its own sake."
    },
    {
        title: "Conversational interfaces unlock new user experiences.",
        description: "Meeting users where they already are — on platforms like WhatsApp — often provides a better UX than forcing them to download another app. Conversational AI transforms how businesses interact with their customers."
    },
    {
        title: "Clean APIs are the backbone of enterprise software.",
        description: "Whether REST or GraphQL, well-designed APIs ensure frontend agility, seamless third-party integrations, and scalable mobile and web client consumption."
    },
    {
        title: "AI-assisted development accelerates delivery.",
        description: "Leveraging tools like GitHub Copilot, Claude, and Cursor AI is no longer optional. These tools allow me to maintain high output velocity, automate boilerplate, and focus deeply on complex architectural challenges."
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
