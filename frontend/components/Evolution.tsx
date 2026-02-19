"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Landmark, Globe } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { locales } from "@/data/locales";

export default function Evolution() {
    const { language } = useLanguage();
    const t = locales[language].evolution;

    const milestoneMetadata = [
        { icon: GraduationCap, color: "blue" },
        { icon: Briefcase, color: "gray" },
        { icon: Landmark, color: "blue" },
        { icon: Globe, color: "white" }
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
                    <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.2em] mb-4 block">
                        {t.strategic_intent}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                        {t.title_prefix} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
                            {t.title_highlight}
                        </span>
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-1/2"></div>

                    <div className="space-y-24">
                        {t.milestones.map((item, index) => {
                            const meta = milestoneMetadata[index];
                            const Icon = meta.icon;

                            // Handling varied keys between first item and others
                            const label1 = (item as any).milestone_label || (item as any).mission_label;
                            const text1 = (item as any).milestone_text || (item as any).mission_text;
                            const label2 = (item as any).edge_label || (item as any).action_label;
                            const text2 = (item as any).edge_text || (item as any).action_text;

                            return (
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
                                        <Icon size={20} className={meta.color === 'blue' ? 'text-blue-500' : 'text-gray-400'} />
                                    </div>

                                    {/* Content Box */}
                                    <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-blue-500 uppercase tracking-widest mb-4">
                                            {item.period}
                                        </div>
                                        <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">{item.stage}</h3>
                                        <h4 className="text-2xl font-bold text-white mb-4">{item.role}</h4>
                                        <div className="text-gray-400 font-light leading-relaxed">
                                            <strong className="text-white">{label1}</strong> {text1} <br /><br />
                                            <strong className="text-white">{label2}</strong> {text2}
                                        </div>
                                    </div>
                                    <div className="hidden md:block w-[10%]"></div>
                                    <div className="hidden md:block w-[45%]"></div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Ambient Background Gradient */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-blue-900/5 to-transparent pointer-events-none"></div>
        </section>
    );
}
