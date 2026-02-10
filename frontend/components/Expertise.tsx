"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Expertise() {
    const competencies = [
        {
            id: "01",
            icon: "gavel",
            title: "SaMD QA/RA",
            desc: "The Shield. MDR Article 15, ISO 13485, and PRRC Responsibilities. Engineering audit-ready documentation for CE Marking."
        },
        {
            id: "02",
            icon: "psychology",
            title: "AI Regulatory Auditing",
            desc: "The Engine. Performance valuation of Agentic AI. Mapping LLM behaviors to safety thresholds and EU AI Act requirements."
        },
        {
            id: "03",
            icon: "policy",
            title: "Institutional Policy",
            desc: "The Bridge. Bridging technical engineering with EU policy frameworks (EYE/EU) to shape the future of sovereign engineering."
        },
        {
            id: "04",
            icon: "payments",
            title: "Tech Valuation",
            desc: "The Asset. Assessing IP strength and technical maturity (TRL) for AI-driven MedTech assets and innovation grants."
        },
        {
            id: "05",
            icon: "cloud_done",
            title: "Sovereign Cloud",
            desc: "The Vault. Data residency and security design for 100% compliant, EU-based healthcare data mesh infrastructures."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
        }
    };

    return (
        <section id="expertise" className="bg-surface-dark border-t border-white/10 py-20 lg:py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header - Aristotle's Ethos/Logos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
                >
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-px w-8 bg-primary"></span>
                            <span className="font-mono text-primary text-sm uppercase tracking-wider">The Strategic Framework</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                            Bridging innovation with <br />
                            <span className="text-slate-400">Institutional Legitimacy</span>
                        </h2>
                    </div>
                    <div className="hidden md:block">
                        <span className="material-symbols-outlined text-6xl text-white/5 rotate-12">balance</span>
                    </div>
                </motion.div>

                {/* Grid Layout - Monroe's Motivated Sequence (Implicit) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
                >
                    {competencies.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            className="group bg-background-dark border border-white/10 hover:border-primary/50 p-6 rounded transition-colors duration-300 relative overflow-hidden flex flex-col justify-between min-h-[260px]"
                        >
                            <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                                <span className="font-mono text-xs text-primary">{item.id}</span>
                            </div>
                            <div className="mb-6">
                                <div className="w-12 h-12 rounded bg-surface-dark border border-white/10 flex items-center justify-center mb-4 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors text-white group-hover:text-primary">
                                    <span className="material-symbols-outlined">{item.icon}</span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                            <div className="w-full h-0.5 bg-white/5 group-hover:bg-primary/50 transition-colors mt-auto"></div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Aristotle's Triangle: Pathos & Vision */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4"
                >
                    <div className="lg:col-span-3 bg-background-dark border border-white/10 p-8 rounded relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">verified_user</span>
                                    Ethos & Logos: The Bridge Engineer Philosophy
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Leveraging a <span className="text-white font-medium">CEID Integrated Master (Top 5%)</span> and specialized <span className="text-white font-medium">TEE Engineering License</span>, I translate neural weights into legal evidence. By mapping strict MDR and AI Act mandates into the CI/CD pipeline, I ensure that <span className="text-blue-400">Sovereign AI</span> is not just a vision, but a legally bulletproof clinical reality for European citizens.
                                </p>
                            </div>
                            <div className="flex-none">
                                <Link
                                    href="#contact"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-white transition-colors group"
                                >
                                    Discuss Regulatory Strategy
                                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
