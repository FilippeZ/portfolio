"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Expertise() {
    const competencies = [
        {
            id: "01",
            icon: "engineering",
            title: "Engineering & Technical Guarantee (Hands-on)",
            desc: "Holistic Approach (Generalist). I design and implement complex systems (SaMD, IoT, industrial infrastructure) with complete architectural control. Avoiding the 'AI-only' trap, I build software from the first line of code to ensure maintainability and control, ensuring technology serves the user, not the hype."
        },
        {
            id: "02",
            icon: "fact_check",
            title: "Quality & Standards (QA)",
            desc: "Quality as a Technical Advantage. Quality Assurance is not an administrative burden, but the legal foundation of safety. I integrate ISO 13485 (Quality Systems) and IEC 62304 (Software Lifecycle) directly into the CI/CD pipeline, creating 'audit-ready' documentation for instant CE Marking readiness."
        },
        {
            id: "03",
            icon: "gavel",
            title: "Regulatory Compliance & Infrastructure (RA)",
            desc: "The Responsibility of Compliance (PRRC). I translate MDR (Art. 15) and the EU AI Act into strict engineering workflows. Treating the PRRC role as an active duty, I focus on Risk Management (ISO 14971) and Usability (IEC 62366). I design Sovereign Cloud architectures where Data Residency and GDPR privacy are shielded at the infrastructure level."
        },
        {
            id: "04",
            icon: "policy",
            title: "Policy & Strategic Roadmap",
            desc: "The Strategic Bridge. I translate legislation into technical roadmaps. Through European Young Engineers (EYE), I draft technical briefings for MEPs, ensuring innovation aligns with European Digital Sovereignty and citizen safety strategies."
        },
        {
            id: "05",
            icon: "payments",
            title: "Tech Valuation & Asset Integrity",
            desc: "Value Certification. I assess Technical Readiness Level (TRL) and IP strength for MedTech assets. As an Economic Certifier, I produce techno-economic studies that transform technical excellence into certified business value, securing investment and grant funding."
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
                                    Leveraging the <span className="text-white font-medium">Integrated Master (CEID)</span> and the <span className="text-white font-medium">Professional License (TEE)</span>, I translate technical parameters into legal evidence. My mission is to ensure that every system bearing my signature is lawful, safe, and technically flawless.
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
