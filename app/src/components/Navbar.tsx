"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Architecture", href: "#architecture" },
    { label: "Stack", href: "#stack" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleLink = (href: string) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "glass border-b border-white/8 shadow-xl" : ""
                    }`}
                style={{ padding: "0 1.5rem" }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        height: "72px",
                    }}
                >
                    {/* Logo */}
                    <a
                        href="#hero"
                        onClick={(e) => { e.preventDefault(); handleLink("#hero"); }}
                        style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "34px",
                                height: "34px",
                                background: "var(--accent)",
                                borderRadius: "8px",
                            }}
                        >
                            <Terminal size={18} color="var(--navy-dark)" strokeWidth={2.5} />
                        </div>
                        <span
                            style={{
                                fontWeight: 700,
                                fontSize: "0.95rem",
                                color: "var(--white)",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            Njoroge<span style={{ color: "var(--accent)" }}>.dev</span>
                        </span>
                    </a>

                    {/* Desktop links */}
                    <div
                        className="desktop-nav"
                        style={{ display: "flex", alignItems: "center", gap: "2rem" }}
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleLink(link.href)}
                                style={{
                                    background: "none",
                                    border: "none",
                                    color: "var(--slate-light)",
                                    fontSize: "0.875rem",
                                    fontWeight: 500,
                                    cursor: "pointer",
                                    letterSpacing: "0.01em",
                                    transition: "color 0.2s",
                                    padding: "0.25rem 0",
                                }}
                                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
                                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--slate-light)")}
                            >
                                {link.label}
                            </button>
                        ))}
                        <a href="/resume.pdf" download className="btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.85rem" }}>
                            Resume
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        style={{
                            display: "none",
                            background: "none",
                            border: "none",
                            color: "var(--white)",
                            cursor: "pointer",
                        }}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="glass-strong"
                        style={{
                            position: "fixed",
                            top: "72px",
                            insetInline: 0,
                            zIndex: 49,
                            padding: "1.5rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            borderBottom: "1px solid var(--glass-border)",
                        }}
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleLink(link.href)}
                                style={{
                                    background: "none",
                                    border: "none",
                                    color: "var(--white)",
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    textAlign: "left",
                                    padding: "0.5rem 0",
                                }}
                            >
                                {link.label}
                            </button>
                        ))}
                        <a href="/resume.pdf" download className="btn-primary" style={{ width: "fit-content" }}>
                            Download Resume
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
        </>
    );
}
