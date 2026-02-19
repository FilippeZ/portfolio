"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Brain, Globe, AlertTriangle, Zap, ArrowRight, Lock, Target, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { locales } from "@/data/locales";

export default function StrategicValue() {
    const { language } = useLanguage();
    const t = locales[language].strategicValue;
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [scanPos, setScanPos] = useState(0);

    // Animated "scanning" line effect
    useEffect(() => {
        const interval = setInterval(() => {
            setScanPos((prev) => (prev + 1) % 100);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 bg-[#030303] relative overflow-hidden">
            {/* Superior Design Layer: Background & Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[url('/resources/img/grid.svg')] opacity-[0.02] mix-blend-overlay"></div>

            {/* Animated Scanning Beam */}
            <div
                className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent z-0 pointer-events-none opacity-50"
                style={{ top: `${scanPos}%` }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header: Institutional Question */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-widest uppercase mb-6"
                    >
                        <Lock size={14} /> Institutional Value Analysis
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-white leading-tight"
                    >
                        {t.title_prefix} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                            {t.title_highlight}
                        </span>
                    </motion.h2>
                </div>

                {/* Tactical Analysis: The Execution Gap */}
                <div className="max-w-5xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="relative p-1 rounded-2xl bg-gradient-to-br from-red-500/30 via-transparent to-red-500/10 border border-white/5 shadow-2xl overflow-hidden group"
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-red-500/5 backdrop-blur-xl"></div>

                        <div className="relative p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center border border-red-500/20 rounded-xl overflow-hidden bg-black/60">
                            {/* Alert Sidebar */}
                            <div className="flex-shrink-0 flex flex-col items-center gap-2">
                                <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/40 relative">
                                    <AlertTriangle className="text-red-500 animate-pulse" size={32} />
                                    <div className="absolute inset-0 rounded-full animate-ping bg-red-500/20"></div>
                                </div>
                                <span className="text-[10px] font-mono text-red-500 font-bold uppercase tracking-tighter">Status: Critical</span>
                            </div>

                            <div className="flex-grow space-y-6">
                                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                    <span className="w-8 h-[1px] bg-red-500/50"></span>
                                    {t.risk_alert.execution_gap}
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                                    <div className="p-4 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                                        <div className="text-[10px] font-mono text-gray-500 uppercase mb-2">Legal Perception</div>
                                        <p className="text-gray-300 font-medium leading-relaxed">
                                            {t.risk_alert.lawyers}
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                                        <div className="text-[10px] font-mono text-gray-500 uppercase mb-2">Technical Execution</div>
                                        <p className="text-gray-300 font-medium leading-relaxed">
                                            {t.risk_alert.coders}
                                        </p>
                                    </div>
                                    <div className="hidden md:absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-red-500/20 border border-red-500/40 md:flex items-center justify-center z-10">
                                        <Zap size={14} className="text-red-400" />
                                    </div>
                                </div>

                                <motion.div
                                    className="pt-6 border-t border-white/5"
                                    whileHover={{ x: 10 }}
                                >
                                    <p className="text-2xl md:text-3xl font-black text-white italic tracking-tight flex items-start gap-3">
                                        <span className="text-red-500 text-4xl leading-none">&quot;</span>
                                        {t.risk_alert.conclusion}
                                        <span className="text-red-500 text-4xl leading-none self-end">&quot;</span>
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Pillars of Authority: Modern Tech Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {t.pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            className={`group relative p-8 rounded-3xl border transition-all duration-500 bg-[#0a0a0a] overflow-hidden
                                ${index === 0 ? "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] border-white/5 hover:border-blue-500/30" :
                                    index === 1 ? "hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] border-white/5 hover:border-emerald-500/30" :
                                        "hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] border-white/5 hover:border-purple-500/30"}`}
                        >
                            {/* Card Background Decoration */}
                            <div className={`absolute top-0 right-0 w-32 h-32 blur-[80px] rounded-full -mr-16 -mt-16 transition-opacity duration-500
                                ${hoveredIndex === index ? "opacity-30" : "opacity-0"}
                                ${index === 0 ? "bg-blue-500" : index === 1 ? "bg-emerald-500" : "bg-purple-500"}`}
                            />

                            <div className="relative z-10">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 relative group-hover:scale-110 transition-transform duration-500
                                    ${index === 0 ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" :
                                        index === 1 ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                                            "bg-purple-500/10 text-purple-400 border border-purple-500/20"}`}>
                                    {index === 0 ? <Shield size={28} /> :
                                        index === 1 ? <Brain size={28} /> :
                                            <Globe size={28} />}

                                    {/* Icon Rings */}
                                    <div className={`absolute inset-0 rounded-2xl border transition-all duration-700 delay-75
                                        ${hoveredIndex === index ? "scale-125 opacity-0" : "scale-100 opacity-20"}
                                        ${index === 0 ? "border-blue-500" : index === 1 ? "border-emerald-500" : "border-purple-500"}`} />
                                </div>

                                <div className="space-y-4">
                                    <h4 className={`text-xs font-mono tracking-[0.2em] uppercase 
                                        ${index === 0 ? "text-blue-500" : index === 1 ? "text-emerald-500" : "text-purple-500"}`}>
                                        {pillar.subtitle}
                                    </h4>
                                    <h3 className="text-2xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300
                                        group-hover:from-white group-hover:to-gray-500">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                                        {pillar.description}
                                    </p>
                                </div>

                                <div className="mt-8 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className={`h-[1px] w-8 ${index === 0 ? "bg-blue-500/50" : index === 1 ? "bg-emerald-500/50" : "bg-purple-500/50"}`}></div>
                                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none">Verified Authority</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Final Closing Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div className="flex items-center gap-6">
                        <div className="flex -space-x-3 overflow-hidden">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-black bg-[#111] border border-white/10 flex items-center justify-center">
                                    {i === 1 ? <Target size={14} className="text-blue-400" /> :
                                        i === 2 ? <Award size={14} className="text-emerald-400" /> :
                                            <Lock size={14} className="text-purple-400" />}
                                </div>
                            ))}
                        </div>
                        <p className="text-base md:text-xl font-bold text-white tracking-widest uppercase">
                            {t.closing}
                        </p>
                    </div>

                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-xl bg-white text-black font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-2xl shadow-white/5"
                    >
                        Secure Investment <ArrowRight size={18} />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
