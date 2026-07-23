"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { locales } from "@/data/locales";

interface AuthorityPillar {
    id: string;
    badge: string;
    title: string;
    org: string;
    role: string;
    desc: string;
    highlights?: string[];
}

const renderFormattedText = (text: string) => {
    if (!text) return null;
    return text.split(/\*\*(.*?)\*\*/g).map((part, j) =>
        j % 2 === 1 ? (
            <strong key={j} className="text-white font-semibold">
                {part}
            </strong>
        ) : (
            part
        )
    );
};

export default function Authority() {
    const { language } = useLanguage();
    const t = (locales[language] as any)?.authority || (locales["en"] as any).authority;

    const pillars: AuthorityPillar[] = t.pillars || [];

    return (
        <section id="authority" className="w-full py-24 lg:py-36 relative overflow-hidden bg-[#050505] text-white">
            {/* Ambient Background & Grid Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(59,130,246,0.07),transparent_70%)] pointer-events-none" />
            <div className="absolute inset-0 clinical-grid opacity-20 pointer-events-none" />
            <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
            <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-900/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 24 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative inline-block max-w-4xl mx-auto"
                    >
                        {/* Glow halo */}
                        <div className="absolute -inset-16 bg-blue-500/10 blur-[100px] rounded-full opacity-60 pointer-events-none" />

                        <div className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                            <span className="font-mono text-blue-400 text-xs uppercase tracking-[0.25em] font-semibold">
                                {t.label}
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight uppercase leading-[1.15]">
                            {t.title}
                        </h2>

                        {t.subtitle && (
                            <p className="text-blue-400/90 font-mono text-xs sm:text-sm md:text-base mb-8 uppercase tracking-wider max-w-3xl mx-auto font-medium">
                                {t.subtitle}
                            </p>
                        )}

                        {/* Statement Banner */}
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            transition={{ duration: 0.3 }}
                            className="relative max-w-3xl mx-auto text-left bg-gradient-to-b from-[#0d1322] to-[#070b14] border border-blue-500/25 rounded-2xl p-7 md:p-9 shadow-2xl backdrop-blur-xl group"
                        >
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-400 via-blue-600 to-indigo-600 rounded-l-2xl" />
                            <p className="text-slate-200 text-base md:text-lg font-light leading-relaxed italic pl-4 group-hover:text-white transition-colors">
                                &quot;{t.description}&quot;
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* 3 ADVANCED HUD CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.id || index}
                            initial={{ opacity: 0, y: 30, scale: 0.97 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.12 }}
                            className="relative rounded-2xl border border-white/10 bg-[#090d16]/90 backdrop-blur-xl p-8 flex flex-col justify-between group hover:border-blue-500/50 hover:bg-[#0c1322] hover:shadow-[0_15px_45px_-10px_rgba(59,130,246,0.25)] transition-all duration-500 overflow-hidden"
                        >
                            {/* Top Laser Beam Animation on Hover */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div>
                                {/* Header Badge & Role */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-blue-400 group-hover:animate-pulse flex-shrink-0" />
                                        <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400/90 font-semibold">
                                            {pillar.role}
                                        </span>
                                    </div>

                                    <span className="self-start sm:self-auto px-3 py-1 rounded-lg text-[10px] font-mono tracking-wider font-bold border border-blue-500/35 bg-blue-500/10 text-blue-300 uppercase shadow-sm">
                                        {pillar.badge}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors leading-snug min-h-[56px]">
                                    {pillar.title}
                                </h3>

                                {/* Divider line */}
                                <div className="w-12 h-px bg-blue-500/30 mb-5 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-transparent transition-all duration-500" />

                                {/* Description with Bold Highlights */}
                                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed group-hover:text-slate-200 transition-colors font-light">
                                    {renderFormattedText(pillar.desc)}
                                </p>
                            </div>

                            {/* Authority Scope Keywords */}
                            {pillar.highlights && pillar.highlights.length > 0 && (
                                <div className="pt-5 mt-6 border-t border-white/10">
                                    <div className="flex flex-wrap gap-2">
                                        {pillar.highlights.map((h, i) => (
                                            <span
                                                key={i}
                                                className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-md border border-white/10 bg-white/5 text-slate-300 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 group-hover:text-blue-200 transition-all duration-300"
                                            >
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
