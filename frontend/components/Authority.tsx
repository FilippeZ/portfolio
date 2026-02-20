"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Gavel, FileCheck, Landmark, ChartBar, ShieldAlert, Activity, Fingerprint, Building2, ArrowLeftRight, Zap, HardHat, Leaf, Briefcase, Factory, Satellite, GraduationCap, Plug, ClipboardCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { locales } from "@/data/locales";

export default function Authority() {
    const { language } = useLanguage();
    const t = locales[language].authority;

    const groupIcons = [
        [Shield, GraduationCap],
        [FileCheck, ClipboardCheck, Activity, ShieldAlert],
        [Fingerprint, Gavel, ArrowLeftRight],
        [ChartBar, Briefcase, Landmark],
        [Factory, Building2, HardHat, Plug, Leaf, Zap]
    ];

    const groups = t.groups.map((group, groupIndex) => ({
        ...group,
        items: group.items.map((item, itemIndex) => ({
            ...item,
            icon: groupIcons[groupIndex]?.[itemIndex] || Shield // Fallback icon
        }))
    }));



    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemAnimation = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="authority" className="py-24 bg-[#030303] relative overflow-hidden ring-1 ring-blue-900/20 mx-4 md:mx-10 rounded-3xl my-20 shadow-[0_0_50px_-12px_rgba(59,130,246,0.15)]">
            {/* Elegant Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[url('/resources/img/grid.svg')] opacity-[0.02] mix-blend-overlay"></div>
            <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-blue-900/40 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative inline-block"
                    >
                        <div className="absolute -inset-16 bg-blue-500/10 blur-[100px] rounded-full opacity-60 pointer-events-none"></div>

                        <h2 className="relative inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-widest uppercase mb-6">
                            <Shield size={14} className="mr-1 inline" /> {t.label}
                        </h2>

                        <h3 className="relative text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-500 mb-8 tracking-tight uppercase leading-[1.1]">
                            {t.title}
                        </h3>

                        <div className="relative max-w-4xl mx-auto flex items-start text-left">
                            <div className="w-1 bg-gradient-to-b from-blue-500 to-transparent rounded-full mr-6 opacity-80 mt-2 h-[80%]"></div>
                            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed opacity-90">
                                "{t.description}"
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Groups */}
                <div className="space-y-32 mb-32">
                    {groups.map((group, groupIndex) => (
                        <div key={groupIndex} className="relative group/section">
                            {/* Group Header */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: groupIndex * 0.15 }}
                                className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8 relative"
                            >
                                <div className="absolute bottom-0 left-0 w-32 h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
                                <div>
                                    <h4 className="text-3xl md:text-4xl font-bold text-white tracking-wide flex flex-col md:flex-row md:items-center gap-4">
                                        <span className="text-blue-500 font-mono text-xl">{group.title.split(' ')[0]}</span>
                                        <span>{group.title.substring(group.title.indexOf(' ') + 1)}</span>
                                    </h4>
                                    {group.description && (
                                        <p className="text-blue-400/80 text-sm md:text-base font-mono mt-4 uppercase tracking-[0.2em]">
                                            // {group.description}
                                        </p>
                                    )}
                                </div>
                            </motion.div>

                            {/* Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                                {group.items.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7, delay: index * 0.1 }}
                                        className="relative p-[1px] rounded-[1.5rem] border border-white/5 bg-[#0a0a0a] hover:bg-gradient-to-b hover:from-blue-500/10 hover:to-transparent hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500 group overflow-hidden"
                                    >
                                        <div className="h-full w-full bg-[#0a0a0a] rounded-[1.5rem] p-8 md:p-10 flex flex-col relative z-10 group-hover:bg-[#0c1018] transition-colors duration-500">

                                            {/* Top Right Label (Legal/Section) */}
                                            <div className="absolute top-6 right-6 lg:opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                                <span className="bg-[#0c1322] text-blue-400 text-[10px] sm:text-xs font-mono px-3 py-1.5 rounded-md border border-blue-500/30 uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.15)] flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                                                    {item.legal.split(' ')[0]}
                                                </span>
                                            </div>

                                            {/* Icon with Glow */}
                                            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20 group-hover:border-blue-500/60 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-500 relative">
                                                <item.icon className="text-blue-400 group-hover:scale-110 group-hover:text-blue-300 transition-transform duration-500 w-7 h-7" />
                                                <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            </div>

                                            {/* Content */}
                                            <h4 className="text-xs font-mono text-blue-500/80 uppercase tracking-widest mb-3 group-hover:text-blue-400 transition-colors">
                                                {item.role}
                                            </h4>
                                            <h5 className="text-xl md:text-2xl font-bold text-gray-100 mb-5 group-hover:text-white transition-colors leading-tight">
                                                {item.title}
                                            </h5>

                                            <div className="h-px w-10 bg-blue-500/30 mb-6 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-transparent transition-all duration-700 ease-out"></div>

                                            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 flex-grow group-hover:text-gray-300 transition-colors">
                                                {item.desc}
                                            </p>

                                            {/* Footer Legal String */}
                                            <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between group-hover:border-blue-500/20 transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <Gavel className="w-4 h-4 text-blue-500/50 group-hover:text-blue-400 transition-colors" />
                                                    <p className="text-[11px] text-gray-500 font-mono group-hover:text-blue-400/80 transition-colors tracking-widest truncate max-w-[200px] md:max-w-none">
                                                        {item.legal}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Registries Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mt-16 pt-16 border-t border-white/5 relative"
                >
                    {/* Decorative Top Center Badge */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                        <div className="w-12 h-12 bg-[#030303] rounded-full border border-blue-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                            <ShieldAlert className="w-5 h-5 text-blue-500" />
                        </div>
                    </div>

                    <h4 className="text-center text-sm md:text-base font-mono text-blue-400/80 uppercase tracking-widest mb-12">
                        {t.registries_title}
                    </h4>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-3 md:gap-4 lg:px-12"
                    >
                        {t.registries.map((registry, index) => (
                            <motion.div
                                key={index}
                                variants={itemAnimation}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="px-5 py-3 bg-[#0a0f1c] rounded-lg border border-white/5 hover:border-blue-500/40 flex items-center gap-3 transition-all duration-300 overflow-hidden relative group/badge shadow-lg shadow-black/50"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover/badge:opacity-100 transition-opacity duration-500"></div>
                                <FileCheck className="w-4 h-4 text-gray-500 group-hover/badge:text-blue-400 relative z-10 transition-colors" />
                                <span className="text-xs md:text-sm font-medium text-gray-400 group-hover/badge:text-white tracking-wide relative z-10 transition-colors">
                                    {registry}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
