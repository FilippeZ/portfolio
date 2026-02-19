"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Shield,
    Compass,
    Cpu,
    SearchCode,
    BarChart3,
    ArrowRight,
    ExternalLink,
    CheckCircle2,
    Lock,
    Award,
    FileText
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { locales } from "@/data/locales";

export default function HighValueMenu() {
    const { language } = useLanguage();
    const t = locales[language].highValueMenu;

    const servicesMeta = [
        {
            icon: Shield,
            color: "text-blue-500",
            bg: "bg-blue-500/5",
            border: "border-blue-500/20",
            glow: "rgba(37, 99, 235, 0.1)",
            link: "/?project=zenithdx-gov#portfolio"
        },
        {
            icon: Compass,
            color: "text-emerald-500",
            bg: "bg-emerald-500/5",
            border: "border-emerald-500/20",
            glow: "rgba(16, 185, 129, 0.1)",
            link: "/?project=azure-mesh#portfolio"
        },
        {
            icon: Cpu,
            color: "text-cyan-500",
            bg: "bg-cyan-500/5",
            border: "border-cyan-500/20",
            glow: "rgba(6, 182, 212, 0.1)",
            link: "/?project=zenithdx-ai#portfolio"
        },
        {
            icon: SearchCode,
            color: "text-purple-500",
            bg: "bg-purple-500/5",
            border: "border-purple-500/20",
            glow: "rgba(168, 85, 247, 0.1)",
            link: "/?project=xai-gov#portfolio"
        },
        {
            icon: BarChart3,
            color: "text-amber-500",
            bg: "bg-amber-500/5",
            border: "border-amber-500/20",
            glow: "rgba(245, 158, 11, 0.1)",
            link: "/?project=zenithdx-pm#portfolio"
        }
    ];

    return (
        <section id="services-menu" className="relative py-32 bg-[#020202] overflow-hidden border-t border-white/5">
            {/* Professional Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-[800px] bg-[radial-gradient(circle_at_70%_0%,rgba(59,130,246,0.03),transparent_70%)]" />
                <div className="absolute bottom-0 left-0 w-full h-[800px] bg-[radial-gradient(circle_at_20%_100%,rgba(168,85,247,0.03),transparent_70%)]" />
                <div className="absolute inset-0 bg-[url('/resources/img/grid.svg')] opacity-[0.015] mix-blend-overlay" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Section: Institutional Power */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24 pb-12 border-b border-white/5">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-[1px] bg-blue-500/40"></span>
                            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.5em]">{t.label}</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
                            {t.title_prefix} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                                {t.title_gradient}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-xl">
                            {t.description}
                        </p>
                    </div>

                    {/* Authority Seal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="flex-shrink-0 flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm self-start md:self-end"
                    >
                        <div className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                            <Award className="text-blue-400" size={24} />
                        </div>
                        <div className="space-y-0.5">
                            <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none mb-1">Status</div>
                            <div className="text-sm font-bold text-white tracking-widest uppercase">{t.closing.tag}</div>
                        </div>
                    </motion.div>
                </div>

                {/* Service Dossier Grid: Static Excellence */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
                    {t.services.map((service, index) => {
                        const meta = servicesMeta[index];
                        const Icon = meta.icon;

                        return (
                            <div
                                key={index}
                                className="group relative bg-[#050505] p-8 md:p-10 transition-colors duration-500 hover:bg-[#0a0a0a]"
                            >
                                {/* Active Indicator Bar */}
                                <div className={`absolute top-0 left-0 w-full h-1 transition-all duration-500 group-hover:opacity-100 opacity-20 bg-gradient-to-r from-transparent via-${meta.color.split('-')[1]}-500 to-transparent`} />

                                <div className="flex flex-col h-full">
                                    {/* Icon & Category */}
                                    <div className="flex items-center justify-between mb-12">
                                        <div className={`w-12 h-12 rounded-xl ${meta.bg} ${meta.color} flex items-center justify-center border ${meta.border}`}>
                                            <Icon size={24} />
                                        </div>
                                        <div className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.2em]">0{index + 1}</div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="space-y-4 mb-12">
                                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{service.tag}</span>
                                        <h3 className="text-xl font-black text-white leading-tight group-hover:text-blue-400 transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Detailed Dossier Description */}
                                    <div className="flex-grow space-y-8">
                                        <p className="text-sm text-gray-400 leading-relaxed font-light">
                                            {service.description}
                                        </p>

                                        {/* Strategic Advantage: Dossier Style */}
                                        <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                                            <div className="flex items-center gap-2">
                                                <CheckCircle2 size={14} className={meta.color} />
                                                <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">{t.advantage_label}</span>
                                            </div>
                                            <p className="text-xs text-gray-300 leading-relaxed italic font-medium">
                                                {service.advantage}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Action Area */}
                                    <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between group/action">
                                        <Link
                                            href={meta.link}
                                            className="text-[10px] font-black text-gray-400 border-b border-white/10 pb-1 group-hover:text-white group-hover:border-white transition-all uppercase tracking-widest"
                                        >
                                            {service.linkText}
                                        </Link>
                                        <ArrowRight className="text-gray-700 group-hover:text-blue-500 transition-all group-hover:translate-x-1" size={16} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Closing Decree: Executive Summary */}
                <div className="mt-20 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative max-w-4xl w-full p-12 text-center rounded-[3rem] bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5 overflow-hidden"
                    >
                        {/* Decorative Seals */}
                        <div className="absolute top-0 left-0 w-32 h-32 opacity-10 blur-2xl bg-blue-500 -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5 blur-2xl bg-purple-500 translate-x-1/2 translate-y-1/2"></div>

                        <div className="relative z-10 flex flex-col items-center gap-8">
                            <div className="w-px h-12 bg-gradient-to-b from-blue-500/50 to-transparent"></div>

                            <p className="text-2xl md:text-3xl font-black text-white italic tracking-tight leading-relaxed max-w-2xl">
                                &quot;{t.closing.quote_prefix}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400"> {t.closing.quote_highlight_1} </span>
                                {t.closing.quote_mid}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400"> {t.closing.quote_highlight_2}</span>
                                {t.closing.quote_suffix}&quot;
                            </p>

                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <Link
                                    href="#evolution"
                                    className="px-8 py-3 bg-white text-black font-black text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-xl shadow-white/5 flex items-center gap-2"
                                >
                                    {t.closing.button} <FileText size={14} />
                                </Link>
                                <div className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.5em] flex items-center gap-3">
                                    <Lock size={12} className="text-blue-500/50" /> Secure Authority Protocol Alpha
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
