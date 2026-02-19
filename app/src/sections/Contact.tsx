"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="section py-24 bg-navy-dark relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald/20 text-emerald text-xs font-bold uppercase tracking-widest mb-8">
                    <span className="w-2 h-2 rounded-full bg-emerald animate-pulse"></span>
                    System Status: Online
                </div>

                <h2 className="heading-lg mb-6">Let’s Build Practical Systems.</h2>
                <p className="text-slate text-lg mb-12 max-w-2xl mx-auto">
                    I’m always open to discussing offline-first architecture, SME infrastructure overhaul, or distributed system design. Whether you’re looking to scale or stabilize, let’s get in touch.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                    <motion.a
                        whileHover={{ y: -5 }}
                        href="mailto:francisnjorogedev@gmail.com"
                        className="btn-outline flex flex-col items-center gap-4 py-8 group"
                    >
                        <Mail className="group-hover:text-accent transition-colors" size={32} />
                        <span className="text-sm font-bold">Email</span>
                    </motion.a>

                    <motion.a
                        whileHover={{ y: -5 }}
                        href="https://www.linkedin.com/in/francis-njoroge-31698181"
                        target="_blank"
                        className="btn-outline flex flex-col items-center gap-4 py-8 group"
                    >
                        <Linkedin className="group-hover:text-accent transition-colors" size={32} />
                        <span className="text-sm font-bold">LinkedIn</span>
                    </motion.a>

                    <motion.a
                        whileHover={{ y: -5 }}
                        href="https://github.com/Ka-few"
                        target="_blank"
                        className="btn-outline flex flex-col items-center gap-4 py-8 group"
                    >
                        <Github className="group-hover:text-accent transition-colors" size={32} />
                        <span className="text-sm font-bold">GitHub</span>
                    </motion.a>

                    <motion.a
                        whileHover={{ y: -5 }}
                        href="tel:+254724015861"
                        className="btn-outline flex flex-col items-center gap-4 py-8 group"
                    >
                        <Send className="group-hover:text-emerald transition-colors" size={32} />
                        <span className="text-sm font-bold">+254 724 015 861</span>
                    </motion.a>

                    <motion.a
                        whileHover={{ y: -5 }}
                        href="/resume.pdf"
                        download
                        className="btn-outline flex flex-col items-center gap-4 py-8 group"
                    >
                        <FileText className="group-hover:text-accent transition-colors" size={32} />
                        <span className="text-sm font-bold">Resume</span>
                    </motion.a>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 pt-10 border-t border-white/10 text-slate text-sm flex flex-col md:flex-row items-center justify-between gap-6"
                >
                    <div>© {new Date().getFullYear()} Francis Njoroge Wanjiru. Built for SMEs.</div>
                    <div className="flex gap-8">
                        <a href="#about" className="hover:text-accent transition-colors">About</a>
                        <a href="#expertise" className="hover:text-accent transition-colors">Expertise</a>
                        <a href="#case-studies" className="hover:text-accent transition-colors">Work</a>
                        <a href="#architecture" className="hover:text-accent transition-colors">System Design</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
