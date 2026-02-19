"use client";

import React from "react";
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

    const privateSector = t.sectors.slice(0, 6).map(sector => ({
        ...sector,
        icon: getIcon(sector.id)
    }));

    const publicSector = t.sectors.slice(6).map(sector => ({
        ...sector,
        icon: getIcon(sector.id)
    }));

    return (
        <section id="strategic-engagement" className="py-32 bg-[#020202] relative overflow-hidden border-t border-white/5">
            {/* Background Texture & Depth */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('/resources/img/grid.svg')] opacity-[0.02] mix-blend-overlay" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header: Institutional Framework */}
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-16">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-[1px] bg-blue-500/40"></span>
                            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.5em]">{t.subtitle}</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
                            {t.title} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                                {t.titleHighlight}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-xl">
                            {t.description}
                        </p>
                    </div>

                    {/* Department Label Style */}
                    <div className="hidden lg:flex flex-col items-end text-right">
                        <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest leading-loose border-r-2 border-blue-500/30 pr-4">
                            Directorate for <br />
                            <span className="text-white">Strategic Partnerships</span>
                        </div>
                        <div className="mt-4 flex items-center gap-2 opacity-30">
                            <Users size={14} className="text-gray-500" />
                            <div className="w-1 h-1 rounded-full bg-gray-500" />
                            <div className="w-1 h-1 rounded-full bg-gray-500" />
                            <div className="w-1 h-1 rounded-full bg-gray-500" />
                        </div>
                    </div>
                </div>

                {/* PRIVATE SECTOR BLOCK */}
                <div className="mb-32">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                            <Briefcase className="text-blue-400" size={20} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-white">{t.privateSectorTitle}</h3>
                            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">{t.privateSectorSubtitle}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
                        {privateSector.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group relative bg-[#050505] p-8 md:p-10 hover:bg-[#0a0a0a] transition-colors duration-500"
                            >
                                {/* Dossier Header */}
                                <div className="flex items-center justify-between mb-10">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/5 flex items-center justify-center border border-blue-500/10 group-hover:border-blue-500/30 transition-colors">
                                        <item.icon className="text-blue-400/70 group-hover:text-blue-400 transition-colors" size={24} />
                                    </div>
                                    <div className="text-[10px] font-mono text-gray-700 uppercase tracking-widest">SEC_PRV_0{item.id}</div>
                                </div>

                                <h4 className="text-xl font-bold text-white mb-6 leading-tight group-hover:text-blue-400 transition-colors min-h-[3rem] flex items-center">
                                    {item.title}
                                </h4>

                                <div className="space-y-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-1 h-3 bg-blue-500/30" />
                                            <span className="text-[9px] font-black text-gray-600 uppercase tracking-[0.2em]">Target Focus</span>
                                        </div>
                                        <p className="text-sm text-gray-400 leading-relaxed font-light">
                                            {item.focus}
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Zap size={10} className="text-blue-500/50" />
                                            <span className="text-[9px] font-black text-blue-500/50 uppercase tracking-[0.2em]">Core Service</span>
                                        </div>
                                        <p className="text-sm text-white font-medium">
                                            {item.service}
                                        </p>
                                    </div>

                                    <div className="pt-6 border-t border-white/5">
                                        <p className="text-xs text-emerald-400/80 leading-relaxed italic font-light italic bg-emerald-500/[0.03] p-4 rounded-lg border border-emerald-500/5">
                                            &quot;{item.value}&quot;
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* PUBLIC SECTOR BLOCK */}
                <div className="mb-32">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                            <Landmark className="text-indigo-400" size={20} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-white">{t.publicSectorTitle}</h3>
                            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">{t.publicSectorSubtitle}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
                        {publicSector.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-[#050505] p-8 md:p-12 hover:bg-[#0a0a0a] transition-colors duration-500"
                            >
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="w-14 h-14 rounded-xl bg-indigo-500/5 flex-shrink-0 flex items-center justify-center border border-indigo-500/10 group-hover:border-indigo-500/30 transition-colors">
                                        <item.icon className="text-indigo-400/70 group-hover:text-indigo-400 transition-colors" size={28} />
                                    </div>

                                    <div className="flex-1 space-y-6">
                                        <div className="flex justify-between items-start">
                                            <h4 className="text-2xl font-black text-white group-hover:text-indigo-400 transition-colors leading-tight max-w-md">
                                                {item.title}
                                            </h4>
                                            <div className="text-[10px] font-mono text-gray-800 uppercase tracking-widest text-right">INST_PUB_0{item.id}</div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8 py-6 border-y border-white/5">
                                            <div>
                                                <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest block mb-2">Operational Context</span>
                                                <p className="text-sm text-gray-300 font-light">
                                                    {item.context}
                                                </p>
                                            </div>
                                            <div>
                                                <span className="text-[9px] font-black text-indigo-500/50 uppercase tracking-widest block mb-2">Institutional Role</span>
                                                <p className="text-sm text-white font-bold">
                                                    {item.role}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-[1px] bg-indigo-500/30" />
                                                <span className="text-[9px] font-black text-emerald-500/70 uppercase tracking-widest">Strategic Advantage</span>
                                            </div>
                                            <p className="text-sm text-gray-400 leading-relaxed font-light">
                                                {item.advantage}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CHARTERED ENDORSEMENT BLOCK */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#010101] border border-white/10 shadow-2xl"
                >
                    {/* Decorative Background for Licensure */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute inset-0 bg-[url('/resources/img/grain.png')] opacity-[0.03] pointer-events-none" />

                    <div className="relative z-10 p-10 md:p-16 lg:p-20 flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                                    <Award className="text-blue-400" size={24} />
                                </div>
                                <div className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.4em] font-black">
                                    {t.professionalLicensure.badge}
                                </div>
                            </div>

                            <h3 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                                {t.professionalLicensure.titlePrefix} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                                    {t.professionalLicensure.titleHighlight}
                                </span> {t.professionalLicensure.titleSuffix}
                            </h3>

                            <p className="text-xl text-gray-400 font-light leading-relaxed mb-12 max-w-2xl">
                                {t.professionalLicensure.description}
                            </p>

                            <div className="grid md:grid-cols-1 gap-6 mb-12">
                                {t.professionalLicensure.list.map((item, index) => (
                                    <div key={index} className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-all">
                                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                            <CheckCircle2 className="text-blue-500" size={16} />
                                        </div>
                                        <div className="space-y-1">
                                            <div className="text-xs font-black text-white uppercase tracking-widest">{item.label}</div>
                                            <div className="text-sm text-gray-500 font-light">{item.text}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Expert Testimony Block */}
                        <div className="lg:w-[400px] w-full relative">
                            {/* Decorative Seal Frame */}
                            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] opacity-20" />

                            <div className="relative bg-[#050505] rounded-[2.5rem] p-10 border border-white/10 shadow-2xl overflow-hidden">
                                <FileText className="absolute top-6 right-6 text-white/[0.03] scale-[4]" size={64} />

                                <h4 className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-8 border-b border-white/5 pb-4">
                                    {t.professionalLicensure.expertAdviceTitle}
                                </h4>

                                <p className="text-lg text-white font-medium italic leading-relaxed mb-10 relative z-10">
                                    {t.professionalLicensure.expertAdviceQuote}
                                </p>

                                <div className="flex items-center gap-5 pt-8 border-t border-white/5">
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-blue-500/50 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 relative z-10 shadow-2xl">
                                            <img
                                                src="/resources/img/bg1.png"
                                                alt="Filippos Zygouris"
                                                className="w-full h-full object-cover"
                                                style={{ objectPosition: 'center 25%' }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-white font-black text-sm uppercase tracking-widest">{t.professionalLicensure.name}</div>
                                        <div className="text-xs font-mono text-blue-500/70 tracking-tighter">{t.professionalLicensure.role}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Verification Chip */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[8px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                                <ShieldCheck size={10} /> Verified State Identity
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
