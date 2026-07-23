"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Brain, Globe, AlertTriangle, Zap, ArrowRight, Lock, Target, Award, Terminal, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { locales } from "@/data/locales";

const fallbackStrategicValue = {
    title_prefix: "Bridging Deep Tech with",
    title_highlight: "Institutional Authority.",
    risk_alert: {
        execution_gap: "The Execution & Compliance Gap",
        lawyers: "Lawyers write policy without understanding algorithmic logic or model architecture.",
        coders: "Developers write code without understanding European regulations or liability.",
        conclusion: "Innovation without compliance is liability; compliance without engineering is unusable."
    },
    formula: {
        caption: "High-Authority Engineering Model"
    },
    liabilityMatrix: {
        comparisonTable: {
            headers: ["Metric", "Standard Developer", "Technical Authority"],
            rows: [
                { label: "Liability", val1: "Executive Burden", val2: "Absorbed (-80%)", sub1: "Unshielded risk", sub2: "State Licensed" },
                { label: "Compliance", val1: "Afterthought", val2: "By Design", sub1: "", sub2: "EU AI Act Ready" }
            ]
        }
    },
    pillars: [
        { subtitle: "01. Liability", title: "State-Chartered Seal", description: "Absorbing liability via official engineering licensure." },
        { subtitle: "02. Systems", title: "Production AI", description: "Building auditable RAG and Multi-Agent architectures." },
        { subtitle: "03. Policy", title: "EU AI Act Compliance", description: "Translating EU mandates directly into software pipelines." }
    ],
    closing: "Ready for High-Stakes Institutional Engineering"
};

export default function StrategicValue() {
    const { language } = useLanguage();
    const t = (locales[language] as any)?.strategicValue || fallbackStrategicValue;
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Superior Design Layer: Background & Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
            <div className="absolute inset-0 clinical-grid opacity-20" />

            {/* Animated Scanning Beam - CSS Optimized */}
            <div
                className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent z-0 pointer-events-none opacity-50 animate-scan"
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

                {/* 
                  ===========================================
                  Value Formula & Liability Matrix Section
                  ===========================================
                */}
                {/* 
                  ===========================================
                  Refined Value Formula & Liability Audit Matrix
                  ===========================================
                */}
                <div className="max-w-6xl mx-auto mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                    {/* 1. The Strategic Equation: HUD LOOK */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="p-10 rounded-[2.5rem] bg-white/[0.01] backdrop-blur-2xl border border-white/10 relative overflow-hidden flex flex-col justify-center items-center group/hud shadow-[0_0_50px_rgba(0,0,0,0.3)] transform-gpu"
                    >
                        {/* HUD Technical Corners */}
                        <div className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-blue-500/30 rounded-tl-lg" />
                        <div className="absolute top-6 right-6 w-6 h-6 border-t-2 border-r-2 border-blue-500/30 rounded-tr-lg" />
                        <div className="absolute bottom-6 left-6 w-6 h-6 border-b-2 border-l-2 border-blue-500/30 rounded-bl-lg" />
                        <div className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-blue-500/30 rounded-br-lg" />

                        {/* Versioning & Status */}
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/[0.03] px-4 py-1 rounded-full border border-white/5">
                            <div className="flex gap-1">
                                <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
                                <div className="w-1 h-1 rounded-full bg-blue-500/40" />
                                <div className="w-1 h-1 rounded-full bg-blue-500/20" />
                            </div>
                            <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-blue-400/80 font-bold">Systems_Analysis_v.4.2</span>
                        </div>

                        <div className="text-center w-full max-w-md relative py-16">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="inline-block mb-12 text-white/40 font-mono text-5xl font-black tracking-tighter"
                            >
                                Value =
                            </motion.div>

                            <div className="flex flex-col items-center">
                                {/* Numerator */}
                                <div className="relative group/num">
                                    <motion.div
                                        className="text-2xl md:text-3xl font-mono font-black text-white tracking-tighter px-8 py-4 rounded-2xl transition-all duration-700 bg-white/5 border border-white/10 group-hover/num:text-blue-400 group-hover/num:border-blue-500/30 group-hover/num:shadow-[0_0_40px_rgba(59,130,246,0.3)] group-hover/num:bg-blue-500/5"
                                    >
                                        {t.formula.numerator}
                                    </motion.div>
                                    {/* Premium Tooltip */}
                                    <AnimatePresence>
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                            whileHover={{ opacity: 1, y: 0, scale: 1 }}
                                            className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover/num:opacity-100 transition-all duration-300 z-30"
                                        >
                                            <div className="bg-blue-600 text-white text-[10px] font-mono font-bold px-4 py-2 rounded-xl whitespace-nowrap shadow-2xl shadow-blue-500/20 border border-blue-400/30 flex items-center gap-2">
                                                <Zap size={10} /> {t.formula.numerator_tooltip}
                                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-blue-600" />
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Dynamic Fraction Line */}
                                <div className="w-full h-[2px] bg-white/10 my-8 relative overflow-hidden rounded-full">
                                    <motion.div
                                        animate={{ x: ["-100%", "100%"] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent w-full h-full opacity-60"
                                    />
                                    <motion.div
                                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute inset-0 bg-blue-500/20"
                                    />
                                </div>

                                {/* Denominator */}
                                <div className="relative group/den">
                                    <motion.div
                                        className="text-xl md:text-2xl font-mono font-bold text-gray-500 tracking-tight px-8 py-3 rounded-2xl transition-all duration-700 bg-white/5 border border-white/10 group-hover/den:text-amber-400 group-hover/den:border-amber-500/30 group-hover/den:shadow-[0_0_40px_rgba(245,158,11,0.3)] group-hover/den:bg-amber-500/5 font-black uppercase tracking-widest"
                                    >
                                        {t.formula.denominator}
                                    </motion.div>
                                    {/* Premium Tooltip */}
                                    <motion.div
                                        className="absolute -bottom-16 left-1/2 -translate-x-1/2 opacity-0 group-hover/den:opacity-100 transition-all duration-300 z-30"
                                    >
                                        <div className="bg-amber-600 text-white text-[10px] font-mono font-bold px-4 py-2 rounded-xl whitespace-nowrap shadow-2xl shadow-amber-500/20 border border-amber-400/30 flex items-center gap-2">
                                            <Target size={10} /> {t.formula.denominator_tooltip}
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-8 border-transparent border-b-amber-600" />
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        <p className="mt-4 text-[11px] font-mono text-gray-500 text-center uppercase tracking-[0.2em] max-w-sm leading-loose">
                            {t.formula.caption}
                        </p>
                    </motion.div>

                    {/* 2. Liability Absorption: THE COMPARISON AUDIT */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative min-h-[500px]">
                        {/* Audit Header Bar */}
                        <div className="absolute top-0 left-0 right-0 h-16 bg-white/[0.03] border-b border-white/10 flex items-center justify-between px-8 z-20 backdrop-blur-md">
                            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.4em] flex items-center gap-3">
                                <Terminal size={14} className="text-blue-500" />
                                <span className="flex gap-1 items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 animate-pulse" />
                                    Liability_Audit_Matrix_v.2.0
                                </span>
                            </span>
                            <div className="flex gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/10" />
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/10" />
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40 border border-emerald-500/20" />
                            </div>
                        </div>

                        {/* Panel 1: Standard Developer (Status Quo) */}
                        <div className="pt-24 pb-12 px-8 bg-[#0a0a0a] relative group border-r border-white/5">
                            <div className="mb-12 opacity-30 group-hover:opacity-50 transition-opacity">
                                <h4 className="text-[11px] uppercase tracking-[0.3em] font-black text-gray-500 mb-3">{t.liabilityMatrix.comparisonTable.headers[1]}</h4>
                                <div className="h-[1px] w-20 bg-gray-500/30" />
                            </div>

                            <div className="space-y-10 relative z-10">
                                {t.liabilityMatrix.comparisonTable.rows.map((row: any, i: number) => (
                                    <div key={i} className="flex flex-col">
                                        <span className="text-[8px] font-mono text-gray-600 uppercase tracking-widest mb-2">{row.label}</span>
                                        <span className={`text-sm font-bold ${row.label === "Liability" ? "text-red-500/60" : "text-gray-500 italic"}`}>
                                            {row.val1}
                                        </span>
                                        {row.label === "Liability" && row.sub1 && (
                                            <span className="text-[9px] text-red-900/40 uppercase mt-2 font-mono tracking-tight">{row.sub1}</span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Faded Background Text */}
                            <div className="absolute bottom-8 left-8 text-[40px] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter">
                                Legacy
                            </div>
                        </div>

                        {/* Panel 2: Technical Authority (Elite) */}
                        <div className="pt-24 pb-12 px-8 bg-blue-600/[0.01] relative overflow-hidden group/audit">
                            {/* Animated Scanning Beam for Audit */}
                            <motion.div
                                animate={{ top: ["-10%", "110%"] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent z-10 pointer-events-none shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                            />

                            {/* Blue Gradient Mesh */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(59,130,246,0.05),transparent_50%)]" />

                            <div className="mb-12 relative z-20">
                                <h4 className="text-[11px] uppercase tracking-[0.3em] font-black text-blue-400 mb-3 flex items-center gap-2">
                                    <Shield size={12} className="text-blue-500" />
                                    {t.liabilityMatrix.comparisonTable.headers[2]}
                                </h4>
                                <div className="h-[1px] w-32 bg-gradient-to-r from-blue-500 to-transparent" />
                            </div>

                            <div className="space-y-10 relative z-20">
                                {t.liabilityMatrix.comparisonTable.rows.map((row: any, i: number) => (
                                    <div key={i} className="flex flex-col">
                                        <span className="text-[8px] font-mono text-blue-400/40 uppercase tracking-widest mb-2 font-bold">{row.label}</span>

                                        {row.label === "Liability" ? (
                                            <div className="flex items-center gap-4">
                                                <motion.span
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    className="text-4xl font-black text-white tracking-tighter"
                                                >
                                                    {row.val2}
                                                </motion.span>
                                                <div className="flex flex-col gap-1">
                                                    <motion.div
                                                        animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                                                        transition={{ duration: 2, repeat: Infinity }}
                                                        className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-black text-emerald-400 uppercase shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                                                    >
                                                        -80% Risk
                                                    </motion.div>
                                                    <span className="text-[9px] text-blue-400/50 uppercase font-mono italic tracking-tighter">Verified_Mitigation</span>
                                                </div>
                                            </div>
                                        ) : (
                                            <span className="text-sm font-black text-white tracking-tight">{row.val2}</span>
                                        )}

                                        {row.label === "Liability" && row.sub2 && (
                                            <span className="text-[9px] text-blue-300/40 uppercase mt-2 font-mono border-l border-blue-500/20 pl-3 leading-none">{row.sub2}</span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* TEE Institutional Seal */}
                            <div className="absolute bottom-8 right-8 flex flex-col items-center">
                                <motion.div
                                    animate={{
                                        boxShadow: ["0 0 0px rgba(59,130,246,0)", "0 0 30px rgba(59,130,246,0.2)", "0 0 0px rgba(59,130,246,0)"]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="w-20 h-20 rounded-full border-2 border-blue-500/40 bg-blue-500/5 backdrop-blur-xl flex items-center justify-center relative shadow-2xl group/seal"
                                >
                                    <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slow" />
                                    <Shield size={36} className="text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-blue-600 px-3 py-0.5 rounded-full border border-blue-400/50 shadow-lg">
                                        <span className="text-[8px] font-mono font-black text-white uppercase whitespace-nowrap">Chartered_TEE</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pillars of Authority: Modern Tech Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
                    {t.pillars.map((pillar: any, index: number) => (
                        <motion.div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            className={`group relative p-10 rounded-[2.5rem] border transition-all duration-700 bg-[#0a0a0a] overflow-hidden
                                ${index === 0 ? "hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] border-white/5 hover:border-blue-500/30" :
                                    index === 1 ? "hover:shadow-[0_0_50px_rgba(16,185,129,0.15)] border-white/5 hover:border-emerald-500/30" :
                                        "hover:shadow-[0_0_50px_rgba(168,85,247,0.15)] border-white/5 hover:border-purple-500/30"}`}
                        >
                            {/* Technical Grid Overlay */}
                            <div className="absolute inset-0 clinical-grid opacity-20 pointer-events-none" />

                            {/* Card Background Decoration */}
                            <div className={`absolute top-0 right-0 w-48 h-48 blur-[100px] rounded-full -mr-24 -mt-24 transition-opacity duration-700
                                ${hoveredIndex === index ? "opacity-30" : "opacity-0"}
                                ${index === 0 ? "bg-blue-600" : index === 1 ? "bg-emerald-600" : "bg-purple-600"}`}
                            />

                            <div className="relative z-10">
                                <div className={`w-16 h-16 rounded-[1.25rem] flex items-center justify-center mb-10 relative group-hover:scale-110 transition-transform duration-700
                                    ${index === 0 ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" :
                                        index === 1 ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                                            "bg-purple-500/10 text-purple-400 border border-purple-500/20"}`}>
                                    {index === 0 ? <Shield size={32} /> :
                                        index === 1 ? <Brain size={32} /> :
                                            <Globe size={32} />}

                                    {/* Icon Rings */}
                                    <div className={`absolute inset-0 rounded-[1.25rem] border transition-all duration-1000 delay-100
                                        ${hoveredIndex === index ? "scale-150 opacity-0" : "scale-100 opacity-20"}
                                        ${index === 0 ? "border-blue-500" : index === 1 ? "border-emerald-500" : "border-purple-500"}`} />
                                </div>

                                <div className="space-y-5">
                                    <h4 className={`text-[10px] font-mono tracking-[0.4em] uppercase font-bold
                                        ${index === 0 ? "text-blue-500" : index === 1 ? "text-emerald-500" : "text-purple-500"}`}>
                                        {pillar.subtitle}
                                    </h4>
                                    <h3 className="text-3xl font-black text-white group-hover:tracking-tight transition-all duration-500">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed text-sm md:text-base font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                                        {pillar.description}
                                    </p>
                                </div>

                                <div className="mt-10 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                                    <div className={`h-[2px] w-12 rounded-full ${index === 0 ? "bg-blue-500/50" : index === 1 ? "bg-emerald-500/50" : "bg-purple-500/50"}`}></div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 size={12} className={index === 0 ? "text-blue-500" : index === 1 ? "text-emerald-500" : "text-purple-500"} />
                                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em] leading-none font-black">Verified Authority</span>
                                    </div>
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
