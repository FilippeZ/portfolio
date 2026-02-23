"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Building2,
    Rocket,
    Scale,
    Globe,
    ShieldCheck,
    Database,
    Landmark,
    Gavel,
    GraduationCap,
    FileCheck,
    CheckCircle2,
    Briefcase,
    Zap,
    Users,
    FileText,
    Award
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { locales } from "../data/locales";

export default function StrategicSectors() {
    const { language } = useLanguage();
    const t = locales[language].strategicSectors;

    const getIcon = (id: number) => {
        const icons = {
            1: Rocket,
            2: Scale,
            3: Database,
            4: ShieldCheck,
            5: Globe,
            6: Building2,
            7: Landmark,
            8: Gavel,
            9: GraduationCap,
            10: FileCheck
        };
        // @ts-ignore
        return icons[id] || Building2;
    };

    const privateSector = t.sectors.slice(0, 5).map(sector => ({
        ...sector,
        icon: getIcon(sector.id)
    }));

    const publicSector = t.sectors.slice(5).map(sector => ({
        ...sector,
        icon: getIcon(sector.id)
    }));

    return (
        <section id="strategic-engagement" className="py-32 relative overflow-hidden">
            {/* Background Texture & Depth */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('/resources/img/grid.svg')] opacity-[0.03] mix-blend-overlay" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header: Institutional Framework */}
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-white/5 pb-16 relative">
                    <div className="max-w-3xl relative z-10">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-16 h-[2px] bg-gradient-to-r from-blue-500/80 to-cyan-400/20 rounded-full"></span>
                            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.5em] font-bold">{t.subtitle}</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8 tracking-tighter">
                            {t.title} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 inline-block animate-[gradient_8s_ease_infinite] bg-[length:200%_200%]">
                                {t.titleHighlight}
                            </span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl">
                            {t.description}
                        </p>
                    </div>

                    {/* Department Label Style - Enhanced */}
                    <div className="hidden lg:flex flex-col items-end text-right relative z-10">
                        {/* Subtle background glow */}
                        <div className="absolute -right-8 -top-8 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#0a0f1c]/80 to-[#030303]/90 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.1)] group hover:border-blue-500/30 transition-all duration-500">
                            <div className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.3em] leading-loose flex flex-col items-end">
                                <span className="mb-1">Directorate for</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 font-black tracking-[0.4em] text-sm">Strategic Partnerships</span>
                            </div>
                            <div className="mt-8 flex items-center justify-end gap-4 opacity-70 group-hover:opacity-100 transition-opacity">
                                <div className="p-2 rounded-full bg-blue-500/10">
                                    <Users size={16} className="text-blue-400" />
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/50" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PRIVATE SECTOR BLOCK */}
                <div className="mb-32">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                                <Briefcase className="text-blue-400" size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-white tracking-tight">{t.privateSectorTitle}</h3>
                                <p className="text-xs font-mono text-blue-400/80 uppercase tracking-[0.2em] mt-1">{t.privateSectorSubtitle}</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {privateSector.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
                                whileHover={{ y: -5 }}
                                className="group relative bg-[#050505]/80 backdrop-blur-xl flex flex-col hover:bg-[#0a0f1c]/90 transition-all duration-500 overflow-hidden rounded-[2rem] border border-white/5 hover:border-blue-500/30 shadow-lg hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]"
                            >
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

                                {/* Image Header */}
                                <div className="h-48 w-full relative overflow-hidden bg-gray-900 border-b border-blue-500/10 group-hover:border-blue-500/30 transition-colors duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10" />
                                    <div className="absolute top-0 left-0 w-full h-full bg-blue-500/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    {/* @ts-ignore */}
                                    {item.image && (
                                        <Image
                                            /* @ts-ignore */
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] opacity-70 group-hover:opacity-100"
                                        />
                                    )}
                                </div>

                                <div className="p-8 md:p-10 flex-1 flex flex-col relative z-20 -mt-12">
                                    {/* Dossier Header */}
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="w-12 h-12 rounded-2xl bg-[#050505] flex items-center justify-center border border-blue-500/30 group-hover:border-blue-500/60 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:-translate-y-1 transition-all duration-500 relative z-20">
                                            <item.icon className="text-blue-400 group-hover:text-blue-300 transition-colors" opacity={0.9} size={24} />
                                        </div>
                                        <div className="text-[9px] font-mono text-gray-400 font-bold uppercase tracking-[0.2em] bg-white/[0.02] px-4 py-1.5 rounded-full border border-blue-500/20 group-hover:border-blue-500/50 group-hover:text-blue-300 transition-all duration-500 shadow-sm backdrop-blur-md">
                                            SEC_PRV_0{item.id}
                                        </div>
                                    </div>

                                    <h4 className="text-xl md:text-2xl font-black text-white mb-6 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:to-blue-400 transition-all duration-500 min-h-[3.5rem] flex items-start">
                                        {item.title}
                                    </h4>

                                    <div className="space-y-4 flex-1 flex flex-col">
                                        <div className="group/section hover:bg-white/[0.02] p-3 -mx-3 rounded-xl transition-colors duration-300">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40 group-hover/section:bg-blue-400 transition-colors" />
                                                <span className="text-[8px] font-black text-gray-500 group-hover/section:text-blue-400/80 uppercase tracking-[0.2em] transition-colors">Target Focus</span>
                                            </div>
                                            <p className="text-sm text-gray-400 leading-relaxed font-light pl-4 border-l border-blue-500/10 group-hover/section:border-blue-500/30 transition-colors">
                                                {item.focus}
                                            </p>
                                        </div>

                                        <div className="group/section hover:bg-white/[0.02] p-3 -mx-3 rounded-xl transition-colors duration-300">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Zap size={10} className="text-cyan-500/70 group-hover/section:text-cyan-400 transition-colors" />
                                                <span className="text-[8px] font-black text-cyan-500/70 group-hover/section:text-cyan-400 uppercase tracking-[0.2em] transition-colors">Core Service</span>
                                            </div>
                                            <p className="text-sm text-white font-medium pl-4 border-l border-cyan-500/20 group-hover/section:border-cyan-500/50 transition-colors">
                                                {item.service}
                                            </p>
                                        </div>

                                        <div className="pt-6 mt-auto">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-4 h-[1px] bg-blue-500/30 group-hover:w-8 transition-all duration-500" />
                                                <span className="text-[8px] font-black text-gray-400 uppercase tracking-[0.2em] group-hover:text-blue-300/80 transition-colors">The Pitch</span>
                                            </div>
                                            <div className="relative">
                                                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 to-transparent rounded-full" />
                                                <p className="text-[13px] text-blue-100/70 leading-relaxed italic font-light bg-gradient-to-r from-blue-500/[0.03] to-transparent p-5 rounded-r-2xl border border-blue-500/10 group-hover:border-blue-500/30 group-hover:from-blue-500/[0.08] transition-all duration-500">
                                                    &quot;{item.value}&quot;
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* PUBLIC SECTOR BLOCK */}
                <div className="mb-32">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                                <Landmark className="text-cyan-400" size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-white tracking-tight">{t.publicSectorTitle}</h3>
                                <p className="text-xs font-mono text-cyan-400/80 uppercase tracking-[0.2em] mt-1">{t.publicSectorSubtitle}</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {publicSector.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
                                whileHover={{ y: -5 }}
                                className="group relative bg-[#050505]/80 backdrop-blur-xl flex flex-col hover:bg-[#06101c]/90 transition-all duration-500 overflow-hidden rounded-[2.5rem] border border-white/5 hover:border-cyan-500/30 shadow-lg hover:shadow-[0_0_60px_rgba(6,182,212,0.15)]"
                            >
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

                                {/* Image Header */}
                                <div className="h-56 w-full relative overflow-hidden bg-gray-900 border-b border-cyan-500/10 group-hover:border-cyan-500/30 transition-colors duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10" />
                                    <div className="absolute top-0 left-0 w-full h-full bg-cyan-500/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    {/* @ts-ignore */}
                                    {item.image && (
                                        <Image
                                            /* @ts-ignore */
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="w-full h-full object-cover group-hover:scale-110 group-hover:-rotate-1 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] opacity-70 group-hover:opacity-100 grayscale-[15%] group-hover:grayscale-0"
                                        />
                                    )}
                                </div>

                                <div className="p-8 md:p-12 flex-1 flex flex-col relative z-20 -mt-16">
                                    <div className="flex items-end justify-between mb-8">
                                        <div className="w-16 h-16 rounded-2xl bg-[#050505] flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-500/60 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] group-hover:-translate-y-1 transition-all duration-500 relative z-20">
                                            <item.icon className="text-cyan-400 group-hover:text-cyan-300 transition-colors" opacity={0.9} size={30} />
                                        </div>
                                        <div className="text-[10px] font-mono text-gray-400 font-bold uppercase tracking-[0.2em] bg-white/[0.02] px-4 py-1.5 rounded-full border border-cyan-500/20 group-hover:border-cyan-500/50 group-hover:text-cyan-300 transition-all duration-500 shadow-sm backdrop-blur-md mb-2">
                                            INST_PUB_0{item.id}
                                        </div>
                                    </div>

                                    <h4 className="text-2xl md:text-3xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-200 group-hover:to-cyan-400 transition-all duration-500 leading-tight max-w-lg mb-8">
                                        {item.title}
                                    </h4>

                                    <div className="space-y-4 flex-1 flex flex-col">
                                        <div className="group/section hover:bg-white/[0.02] p-4 -mx-4 rounded-xl transition-colors duration-300">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/40 group-hover/section:bg-cyan-400 transition-colors" />
                                                <span className="text-[8px] font-black text-gray-500 group-hover/section:text-cyan-400/80 uppercase tracking-[0.2em] transition-colors">Target Focus</span>
                                            </div>
                                            <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light pl-4 border-l border-cyan-500/10 group-hover/section:border-cyan-500/30 transition-colors">
                                                {item.focus}
                                            </p>
                                        </div>

                                        <div className="group/section hover:bg-white/[0.02] p-4 -mx-4 rounded-xl transition-colors duration-300">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Zap size={10} className="text-cyan-500/70 group-hover/section:text-cyan-400 transition-colors" />
                                                <span className="text-[8px] font-black text-cyan-500/70 group-hover/section:text-cyan-400 uppercase tracking-[0.2em] transition-colors">Core Service</span>
                                            </div>
                                            <p className="text-sm md:text-base text-white font-medium pl-4 border-l border-cyan-500/20 group-hover/section:border-cyan-500/50 transition-colors">
                                                {item.service}
                                            </p>
                                        </div>

                                        <div className="pt-8 mt-auto">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-6 h-[1px] bg-cyan-500/30 group-hover:w-12 transition-all duration-500" />
                                                <span className="text-[8px] font-black text-gray-400 uppercase tracking-[0.2em] group-hover:text-cyan-300/80 transition-colors">The Pitch</span>
                                            </div>
                                            <div className="relative">
                                                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/50 to-transparent rounded-full" />
                                                <p className="text-sm md:text-[15px] text-cyan-100/70 leading-relaxed italic font-light bg-gradient-to-r from-cyan-500/[0.03] to-transparent p-6 rounded-r-2xl border border-cyan-500/10 group-hover:border-cyan-500/30 group-hover:from-cyan-500/[0.08] transition-all duration-500">
                                                    &quot;{item.value}&quot;
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CHARTERED ENDORSEMENT BLOCK */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#0a0f1c]/80 to-[#030303]/90 backdrop-blur-2xl border border-white/10 shadow-[0_0_80px_rgba(59,130,246,0.05)] group hover:shadow-[0_0_100px_rgba(59,130,246,0.1)] transition-all duration-700"
                >
                    {/* Decorative Background for Licensure */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 group-hover:bg-blue-500/15 group-hover:scale-110 transition-all duration-1000" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 group-hover:bg-cyan-500/10 group-hover:scale-110 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-[url('/resources/img/grain.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

                    {/* Animated Border Header Line */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50" />

                    <div className="relative z-10 p-10 md:p-16 lg:p-20 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                        <div className="flex-1">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="flex items-center gap-4 mb-8"
                            >
                                <div className="w-14 h-14 rounded-2xl border border-blue-500/30 flex items-center justify-center bg-[#050505] shadow-[0_0_30px_rgba(59,130,246,0.15)] relative overflow-hidden group/icon">
                                    <div className="absolute inset-0 bg-blue-500/20 translate-y-full group-hover/icon:translate-y-0 transition-transform duration-500" />
                                    <Award className="text-blue-400 relative z-10 group-hover/icon:scale-110 transition-transform duration-500" size={26} />
                                </div>
                                <div className="text-[11px] font-mono text-blue-400 uppercase tracking-[0.4em] font-black bg-blue-500/5 px-4 py-2 rounded-full border border-blue-500/10">
                                    {t.professionalLicensure.badge}
                                </div>
                            </motion.div>

                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight tracking-tight"
                            >
                                {t.professionalLicensure.titlePrefix} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 animate-[gradient_8s_ease_infinite] bg-[length:200%_200%] inline-block">
                                    {t.professionalLicensure.titleHighlight}
                                </span> <br className="hidden md:block" /> {t.professionalLicensure.titleSuffix}
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12 max-w-2xl"
                            >
                                {t.professionalLicensure.description}
                            </motion.p>

                            <div className="grid md:grid-cols-1 gap-6 mb-12">
                                {t.professionalLicensure.list.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                                        className="flex items-start gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/5 group/item hover:bg-white/[0.04] hover:border-blue-500/20 transition-all duration-300"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-[#050505] border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 group-hover/item:bg-blue-500/10 group-hover/item:border-blue-500/40 transition-all duration-500 shadow-sm">
                                            <CheckCircle2 className="text-blue-400" size={20} />
                                        </div>
                                        <div className="space-y-1">
                                            <div className="text-xs font-black text-white uppercase tracking-widest group-hover/item:text-blue-100 transition-colors">{item.label}</div>
                                            <div className="text-[15px] text-gray-400 font-light leading-relaxed group-hover/item:text-gray-300 transition-colors">{item.text}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Expert Testimony Block */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                            className="lg:w-[460px] w-full relative"
                        >
                            {/* Decorative Seal Frame */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity duration-700 rounded-full" />

                            <div className="relative bg-gradient-to-br from-[#050505]/90 to-[#020202]/90 backdrop-blur-md rounded-[3rem] p-10 md:p-12 border border-blue-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden group/testimony hover:border-blue-500/40 transition-colors duration-500">
                                {/* Large Watermark Icon */}
                                <ShieldCheck className="absolute -top-10 -right-10 text-blue-500/[0.03] scale-[5] group-hover/testimony:text-blue-500/[0.05] group-hover/testimony:rotate-12 transition-all duration-1000" size={64} />

                                <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-6">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                    <h4 className="text-[11px] font-mono text-gray-400 uppercase tracking-widest font-bold">
                                        {t.professionalLicensure.expertAdviceTitle}
                                    </h4>
                                </div>

                                <div className="relative">
                                    <span className="absolute -top-6 -left-4 text-6xl text-blue-500/20 font-serif leading-none">&quot;</span>
                                    <p className="text-xl md:text-2xl text-white/90 font-light italic leading-relaxed mb-12 relative z-10 pl-6 border-l-2 border-blue-500/30">
                                        {t.professionalLicensure.expertAdviceQuote.replace(/"/g, '')}
                                    </p>
                                </div>

                                <div className="flex items-center gap-6 pt-8 border-t border-white/5">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-blue-500/50 rounded-full blur-xl opacity-30 group-hover/testimony:opacity-60 group-hover/testimony:scale-110 transition-all duration-500" />
                                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500/30 relative z-10 shadow-2xl">
                                            <Image
                                                src="/resources/img/bg1.png"
                                                alt={t.professionalLicensure.name}
                                                fill
                                                className="w-full h-full object-cover"
                                                style={{ objectPosition: 'center 20%' }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-white font-black text-lg uppercase tracking-wider mb-1">{t.professionalLicensure.name}</div>
                                        <div className="text-xs font-mono text-blue-400 tracking-widest uppercase bg-blue-500/10 inline-block px-3 py-1 rounded-md border border-blue-500/20">
                                            {t.professionalLicensure.role}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Verification Chip */}
                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[10px] font-black uppercase tracking-[0.3em] px-6 py-2.5 rounded-full shadow-[0_10px_30px_rgba(59,130,246,0.5)] flex items-center gap-3 border border-white/20 z-20"
                            >
                                <ShieldCheck size={14} className="text-white" /> Verified State Identity
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
