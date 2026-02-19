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
        <section id="authority" className="py-24 bg-[#050505] relative overflow-hidden ring-1 ring-white/5 mx-4 md:mx-10 rounded-3xl my-20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-transparent opacity-50"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-sm font-mono text-blue-500 uppercase tracking-[0.3em] mb-4">{t.label}</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase">{t.title}</h3>
                        <p className="max-w-3xl mx-auto text-gray-400 text-lg font-light leading-relaxed">
                            {t.description}
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-16 mb-20">
                    {groups.map((group, groupIndex) => (
                        <div key={groupIndex} className="relative">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                                className="mb-8"
                            >
                                <h4 className="text-xl md:text-2xl font-bold text-white mb-2 pb-2 border-b border-white/10 inline-block">
                                    {group.title}
                                </h4>
                                {group.description && (
                                    <p className="text-blue-500/80 text-sm font-mono mt-1">
                                        {group.description}
                                    </p>
                                )}
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                                {group.items.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
                                        className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all group relative overflow-hidden flex flex-col h-full"
                                    >
                                        <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="text-[10px] font-mono text-blue-500 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">{item.legal}</span>
                                        </div>

                                        <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            <item.icon className="text-blue-500" size={24} />
                                        </div>
                                        <h4 className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">{item.role}</h4>
                                        <h5 className="text-lg font-bold text-white mb-2">{item.title}</h5>
                                        <div className="h-px w-8 bg-blue-500/30 mb-3 group-hover:w-full transition-all duration-500"></div>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">{item.desc}</p>
                                        <div className="mt-auto pt-4 border-t border-white/5 w-full">
                                            <p className="text-[10px] text-gray-600 font-mono group-hover:text-blue-400/70 transition-colors truncate">
                                                {t.legal_basis}: {item.legal}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="border-t border-white/10 pt-16 relative"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050505] px-4 text-gray-500">
                        <ShieldAlert className="w-6 h-6 text-blue-900/50" />
                    </div>

                    <h4 className="text-center text-sm font-mono text-blue-500/80 uppercase tracking-widest mb-10">
                        {t.registries_title}
                    </h4>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        {t.registries.map((registry, index) => (
                            <motion.div
                                key={index}
                                variants={itemAnimation}
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                                className="px-5 py-3 bg-white/[0.03] rounded-full border border-white/5 flex items-center gap-3 cursor-default transition-colors group hover:border-blue-500/40"
                            >
                                <FileCheck className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
                                <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors tracking-wide">
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
