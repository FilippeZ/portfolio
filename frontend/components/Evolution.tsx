"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Landmark, Globe } from "lucide-react";

export default function Evolution() {
    const milestones = [
        {
            stage: "The Foundation",
            period: "2020 — 2025",
            role: "Integrated Master (M.Eng.)",
            desc: "CEID (Top 5%). Establishing the technical ethos through zenithDx—a validated MVP for clinical AI orchestration. Bridging academic rigor with high-performance Agentic AI.",
            icon: GraduationCap,
            color: "blue"
        },
        {
            stage: "Clinical Immersion",
            period: "Current Focus",
            role: "Junior QA/RA Engineer",
            desc: "Getting 'clinical mud' on the hands. Navigating the regulatory trenches of hospitals and startups to establish a deep, intuitive understanding of patient safety and MDR compliance.",
            icon: Briefcase,
            color: "gray"
        },
        {
            stage: "Technical Authority",
            period: "Horizon Phase",
            role: "PRRC / SaMD Architect",
            desc: "Activating the MDR Article 15 legal edge. Exercising Veto Power on market release. Designing systems for both FDA and EU compliance in high-value consulting environments.",
            icon: Landmark,
            color: "blue"
        },
        {
            stage: "Institutional Legacy",
            period: "Long-term Vision",
            role: "EU Policy Advisor",
            desc: "Translating code constraints into legal amendments. Shaping the future of Sovereign European AI via the EYE Policy Task Force and European Commission consultancy.",
            icon: Globe,
            color: "white"
        }
    ];

    return (
        <section id="evolution" className="py-24 bg-[#050505] relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Strategic Intent</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">Professional <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Evolution.</span></h2>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-1/2"></div>

                    <div className="space-y-24">
                        {milestones.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Center Icon */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-[#050505] border border-white/10 rounded-full flex items-center justify-center z-20 shadow-[0_0_20px_rgba(0,0,0,1)]">
                                    <item.icon size={20} className={item.color === 'blue' ? 'text-blue-500' : 'text-gray-400'} />
                                </div>

                                {/* Content Box */}
                                <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-blue-500 uppercase tracking-widest mb-4">
                                        {item.period}
                                    </div>
                                    <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">{item.stage}</h3>
                                    <h4 className="text-2xl font-bold text-white mb-4">{item.role}</h4>
                                    <p className="text-gray-400 font-light leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="hidden md:block w-[10%]"></div>
                                <div className="hidden md:block w-[45%]"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Ambient Background Gradient */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-blue-900/5 to-transparent pointer-events-none"></div>
        </section>
    );
}
