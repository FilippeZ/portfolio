"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { locales } from "@/data/locales";
import { GraduationCap, Award, TrendingUp, ShieldCheck, PieChart as PieIcon, BookOpen, Cpu, Database, Binary, Quote, CheckCircle2, Building2, ArrowRight, Sparkles, Layers } from "lucide-react";

export default function DegreeJourney() {
    const { language } = useLanguage();
    const tRaw = (locales[language] as any)?.degreeJourney || (locales["en"] as any)?.degreeJourney;

    // Defensive fallback defaults
    const t = {
        title_prefix: tRaw?.title_prefix || "ACADEMIC",
        title_highlight: tRaw?.title_highlight || "DEGREE JOURNEY",
        subtitle: tRaw?.subtitle || "Integrated Master (M.Eng.) in Computer Engineering & Informatics | CEID, University of Patras",
        summary_banner: tRaw?.summary_banner || "Graduated in the Top 5% of class (GPA 8.05/10) with 300 ECTS, mastering Machine Learning, Software Quality Assurance, Multidimensional Data, and HealthTech Compliance.",
        education_milestones: tRaw?.education_milestones || [],
        commitment_quote: tRaw?.commitment_quote || "",
        stats: tRaw?.stats || {
            gpa: { value: "8.05", label: "GPA (Top 5%)", sub: "Out of 10.0" },
            rank: { value: "300", label: "ECTS Earned", sub: "Integrated Master" },
            high_grades: { value: "10/10", label: "Thesis & AI", sub: "Perfect Distinction" },
            zero_e: { value: "0", label: "Failed Exams", sub: "Flawless Record" }
        },
        distribution_title: tRaw?.distribution_title || "ECTS Grade Distribution",
        distribution_subtitle: tRaw?.distribution_subtitle || "Detailed breakdown of academic performance across 300 ECTS coursework",
        grades: tRaw?.grades || [],
        courses_title: tRaw?.courses_title || "Core Academic Modules",
        courses_subtitle: tRaw?.courses_subtitle || "Pillars of computer science, artificial intelligence, and software engineering",
        course_categories: tRaw?.course_categories || [],
        pillars_title: tRaw?.pillars_title || "Academic Engineering Pillars",
        pillars: tRaw?.pillars || []
    };

    const [hoveredGrade, setHoveredGrade] = useState<number | null>(null);
    const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
    const [activeCourseCategory, setActiveCourseCategory] = useState<string>("math_ai");

    const activeIndex = hoveredGrade !== null ? hoveredGrade : selectedGrade;

    const gradeColors: Record<string, { bg: string; border: string; text: string; hex: string; stroke: string; glow: string }> = {
        emerald: {
            bg: "bg-[#081510]/80",
            border: "border-emerald-500/40",
            text: "text-emerald-400",
            hex: "#10b981",
            stroke: "stroke-emerald-400",
            glow: "shadow-[0_0_20px_rgba(16,185,129,0.2)]",
        },
        blue: {
            bg: "bg-[#081226]/80",
            border: "border-blue-500/40",
            text: "text-blue-400",
            hex: "#3b82f6",
            stroke: "stroke-blue-400",
            glow: "shadow-[0_0_20px_rgba(59,130,246,0.2)]",
        },
        purple: {
            bg: "bg-[#140b24]/80",
            border: "border-purple-500/40",
            text: "text-purple-400",
            hex: "#a855f7",
            stroke: "stroke-purple-400",
            glow: "shadow-[0_0_20px_rgba(168,85,247,0.2)]",
        },
        amber: {
            bg: "bg-[#1c1308]/80",
            border: "border-amber-500/40",
            text: "text-amber-400",
            hex: "#f59e0b",
            stroke: "stroke-amber-400",
            glow: "shadow-[0_0_20px_rgba(245,158,11,0.2)]",
        },
        slate: {
            bg: "bg-slate-900/40",
            border: "border-slate-700/40",
            text: "text-slate-400",
            hex: "#64748b",
            stroke: "stroke-slate-600",
            glow: "shadow-none",
        },
    };

    // SVG Pie Donut Chart Calculations
    const RADIUS = 70;
    const CIRCUMFERENCE = 2 * Math.PI * RADIUS; // ~439.82

    let cumulativePercent = 0;
    const pieSlices = (t.grades || []).map((item: any, idx: number) => {
        const pct = parseInt(item.percentage) / 100;
        const strokeLength = CIRCUMFERENCE * pct;
        const strokeOffset = -CIRCUMFERENCE * cumulativePercent;
        cumulativePercent += pct;
        return {
            ...item,
            idx,
            pct,
            strokeLength,
            strokeOffset,
        };
    });

    const activeItem = activeIndex !== null && t.grades && t.grades[activeIndex] ? t.grades[activeIndex] : null;

    return (
        <section id="degree" className="w-full py-24 lg:py-32 relative overflow-hidden text-white">
            {/* Background Atmosphere matching Portfolio */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none opacity-30" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* SECTION 1: HERO HEADER */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 24 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative inline-block max-w-4xl mx-auto"
                    >

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight uppercase leading-[1.15]">
                            {t.title_prefix}{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
                                {t.title_highlight}
                            </span>
                        </h2>

                        {t.subtitle && (
                            <p className="text-blue-300/90 font-mono text-xs sm:text-sm md:text-base mb-8 uppercase tracking-wider max-w-3xl mx-auto font-medium leading-relaxed">
                                {t.subtitle}
                            </p>
                        )}

                        {/* Executive Summary Banner */}
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            transition={{ duration: 0.3 }}
                            className="relative max-w-3xl mx-auto text-left bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-xl group mb-4"
                        >
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-600 rounded-l-2xl" />
                            <div className="flex gap-4 items-start">
                                <GraduationCap className="w-8 h-8 text-blue-400 shrink-0 mt-1" />
                                <p className="text-slate-200 text-sm md:text-base font-light leading-relaxed group-hover:text-white transition-colors">
                                    {t.summary_banner}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* SECTION 2: THE ENGINEER'S STEPPING-STONE PROGRESSION */}
                {t.education_milestones && t.education_milestones.length >= 2 && (
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-3">
                                {language === "el" ? "Από τη Βάση των Πανελληνίων στην Αιχμή του CEID" : "From Panhellenic Foundations to CEID Excellence"}
                            </h3>
                        </div>

                        {/* 2-STEP STEPPING STONE CARDS GRID */}
                        <div className="relative">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                                
                                {/* Step 01: Secondary Education & Panhellenic Exams (Foundational Stepping Stone) */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="relative flex flex-col p-7 md:p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_15px_45px_rgba(6,182,212,0.15)] transition-all duration-300 lg:translate-y-4"
                                >
                                    {/* Stepping Stone Header Badge */}
                                    <div className="flex items-center justify-between gap-4 mb-6">
                                        <div className="flex items-center gap-3">
                                            <span className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center font-mono font-black text-cyan-300 text-base">
                                                01
                                            </span>
                                            <div>
                                                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 block">
                                                    {t.education_milestones[1].date}
                                                </span>
                                                <span className="text-[11px] font-mono font-semibold text-slate-400 block">
                                                    {language === "el" ? "Το Αρχικό Σκαλοπάτι" : "The Foundational Stepping Stone"}
                                                </span>
                                            </div>
                                        </div>
                                        <span className="px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/30">
                                            {t.education_milestones[1].type}
                                        </span>
                                    </div>

                                    {/* Image & Title */}
                                    <div className="flex items-start gap-4 mb-5">
                                        <div className="relative w-16 h-16 shrink-0 rounded-2xl overflow-hidden border border-white/15 bg-black/50 shadow-lg">
                                            <Image
                                                src={t.education_milestones[1].image}
                                                alt={t.education_milestones[1].title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-lg md:text-xl font-bold text-white leading-snug">
                                                {t.education_milestones[1].title}
                                            </h4>
                                            <span className="text-xs font-mono text-cyan-400/90 block mt-1">
                                                {t.education_milestones[1].org}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light border-t border-white/10 pt-4 mt-auto">
                                        {t.education_milestones[1].desc}
                                    </p>

                                    {/* Stepping Stone Action Tag */}
                                    <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cyan-400">
                                        <span className="flex items-center gap-1.5">
                                            <TrendingUp className="w-4 h-4 text-cyan-400" />
                                            {language === "el" ? "Πανελλήνια Αριστεία → Εισαγωγή στο CEID" : "Panhellenic Rigor → Admission to CEID"}
                                        </span>
                                        <span className="font-black text-cyan-300">19.8 / 20</span>
                                    </div>
                                </motion.div>

                                {/* Step 02: Integrated Master Specialization (CEID Pinnacle) */}
                                <motion.div
                                    initial={{ opacity: 0, y: -30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="relative flex flex-col p-7 md:p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-blue-400/60 hover:shadow-[0_15px_45px_rgba(59,130,246,0.2)] transition-all duration-300 lg:-translate-y-4"
                                >
                                    {/* Apex Header Badge */}
                                    <div className="flex items-center justify-between gap-4 mb-6">
                                        <div className="flex items-center gap-3">
                                            <span className="w-10 h-10 rounded-2xl bg-blue-500/20 border border-blue-400/50 flex items-center justify-center font-mono font-black text-blue-300 text-base">
                                                02
                                            </span>
                                            <div>
                                                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 block">
                                                    {t.education_milestones[0].date}
                                                </span>
                                                <span className="text-[11px] font-mono font-semibold text-slate-400 block">
                                                    {language === "el" ? "Η Πολυτεχνική Κορυφωση" : "The Engineering Apex"}
                                                </span>
                                            </div>
                                        </div>
                                        <span className="px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/30">
                                            {t.education_milestones[0].type}
                                        </span>
                                    </div>

                                    {/* Image & Title */}
                                    <div className="flex items-start gap-4 mb-5">
                                        <div className="relative w-16 h-16 shrink-0 rounded-2xl overflow-hidden border border-white/15 bg-black/50 shadow-lg">
                                            <Image
                                                src={t.education_milestones[0].image}
                                                alt={t.education_milestones[0].title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-lg md:text-xl font-bold text-white leading-snug">
                                                {t.education_milestones[0].title}
                                            </h4>
                                            <span className="text-xs font-mono text-blue-400/90 block mt-1">
                                                {t.education_milestones[0].org}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light border-t border-white/10 pt-4 mt-auto">
                                        {t.education_milestones[0].desc}
                                    </p>

                                    {/* Apex Action Tag */}
                                    <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-blue-400">
                                        <span className="flex items-center gap-1.5">
                                            <Sparkles className="w-4 h-4 text-blue-400" />
                                            {language === "el" ? "Top 5% Αποφοίτηση • 300 ECTS Master" : "Top 5% Graduation • 300 ECTS Master"}
                                        </span>
                                        <span className="font-black text-blue-300">GPA 8.05 / 10</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Personal Commitment Quote Banner */}
                        {t.commitment_quote && (
                            <motion.div
                                whileHover={{ scale: 1.005 }}
                                className="relative max-w-4xl mx-auto text-center bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-7 backdrop-blur-md mt-10 shadow-xl"
                            >
                                <div className="flex flex-col items-center gap-3">
                                    <Quote className="w-8 h-8 text-cyan-400" />
                                    <p className="text-sm sm:text-base text-cyan-100 font-mono italic leading-relaxed max-w-3xl">
                                        {t.commitment_quote}
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </div>
                )}

                {/* SECTION 3: 4 QUICK STATS HIGHLIGHT COUNTERS */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 backdrop-blur-xl flex flex-col items-center text-center group hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center mb-3 text-blue-400 group-hover:scale-110 transition-transform">
                            <GraduationCap className="w-6 h-6" />
                        </div>
                        <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 tracking-tight">
                            {t.stats.gpa.value}
                        </span>
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider mt-1">
                            {t.stats.gpa.label}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400 mt-1">
                            {t.stats.gpa.sub}
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 backdrop-blur-xl flex flex-col items-center text-center group hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center mb-3 text-emerald-400 group-hover:scale-110 transition-transform">
                            <Award className="w-6 h-6" />
                        </div>
                        <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-200 tracking-tight">
                            {t.stats.rank.value}
                        </span>
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider mt-1">
                            {t.stats.rank.label}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400 mt-1">
                            {t.stats.rank.sub}
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="relative p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 backdrop-blur-xl flex flex-col items-center text-center group hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mb-3 text-cyan-400 group-hover:scale-110 transition-transform">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200 tracking-tight">
                            {t.stats.high_grades.value}
                        </span>
                        <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider mt-1">
                            {t.stats.high_grades.label}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400 mt-1">
                            {t.stats.high_grades.sub}
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 backdrop-blur-xl flex flex-col items-center text-center group hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-400/30 flex items-center justify-center mb-3 text-purple-400 group-hover:scale-110 transition-transform">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 tracking-tight">
                            {t.stats.zero_e.value}
                        </span>
                        <span className="text-xs font-bold text-purple-400 uppercase tracking-wider mt-1">
                            {t.stats.zero_e.label}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400 mt-1">
                            {t.stats.zero_e.sub}
                        </span>
                    </motion.div>
                </div>

                {/* SECTION 4: ECTS PIE CHART & CARDS CONTAINER */}
                <div className="mb-20 bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-2xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-white/10 pb-6">
                        <div>
                            <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight flex items-center gap-3">
                                <PieIcon className="w-6 h-6 text-blue-400" />
                                {t.distribution_title}
                            </h3>
                            <p className="text-slate-400 text-xs md:text-sm mt-1">
                                {t.distribution_subtitle}
                            </p>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 font-mono text-xs text-blue-400 font-bold self-start md:self-auto">
                            Σ = 300 ECTS (100%)
                        </div>
                    </div>

                    {/* INTERACTIVE PIE CHART SECTION */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12 bg-black/40 p-6 md:p-8 rounded-2xl border border-white/5">
                        
                        {/* PIE CHART SVG DISPLAY */}
                        <div className="lg:col-span-5 flex flex-col items-center justify-center relative py-4">
                            <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
                                {/* SVG Donut Pie */}
                                <motion.svg
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewBox="0 0 200 200"
                                    className="w-full h-full transform -rotate-90 drop-shadow-[0_0_25px_rgba(59,130,246,0.15)]"
                                >
                                    <circle
                                        cx="100"
                                        cy="100"
                                        r={RADIUS}
                                        fill="none"
                                        stroke="#1e293b"
                                        strokeWidth="28"
                                    />
                                    {pieSlices.map((slice: any) => {
                                        if (slice.pct === 0) return null;
                                        const cfg = gradeColors[slice.color] || gradeColors.blue;
                                        const isActive = activeIndex === slice.idx;

                                        // Deduct 2px gap length for sleek separation
                                        const visibleDash = Math.max(0, slice.strokeLength - 2);

                                        return (
                                            <circle
                                                key={slice.idx}
                                                cx="100"
                                                cy="100"
                                                r={RADIUS}
                                                fill="none"
                                                stroke={cfg.hex}
                                                strokeWidth={isActive ? 34 : 26}
                                                strokeDasharray={`${visibleDash} ${CIRCUMFERENCE}`}
                                                strokeDashoffset={slice.strokeOffset}
                                                strokeLinecap="butt"
                                                onClick={() => setSelectedGrade(selectedGrade === slice.idx ? null : slice.idx)}
                                                onMouseEnter={() => setHoveredGrade(slice.idx)}
                                                onMouseLeave={() => setHoveredGrade(null)}
                                                className="cursor-pointer transition-all duration-300"
                                                style={{
                                                    opacity: activeIndex === null || isActive ? 1 : 0.35,
                                                    filter: isActive ? `drop-shadow(0 0 12px ${cfg.hex})` : "none",
                                                }}
                                            />
                                        );
                                    })}
                                </motion.svg>

                                {/* CENTER DONUT CONTENT */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 pointer-events-none">
                                    <AnimatePresence mode="wait">
                                        {activeItem ? (
                                            <motion.div
                                                key={activeItem.grade}
                                                initial={{ opacity: 0, scale: 0.85 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.85 }}
                                                transition={{ duration: 0.15 }}
                                                className="flex flex-col items-center"
                                            >
                                                <span className={`text-2xl sm:text-3xl font-black ${gradeColors[activeItem.color]?.text || "text-white"}`}>
                                                    {activeItem.percentage}
                                                </span>
                                                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider mt-0.5">
                                                    {activeItem.ects}
                                                </span>
                                                <span className={`text-[10px] font-mono font-bold uppercase tracking-widest mt-1 px-2 py-0.5 rounded bg-white/5 border border-white/10 ${gradeColors[activeItem.color]?.text}`}>
                                                    {activeItem.grade}
                                                </span>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="default"
                                                initial={{ opacity: 0, scale: 0.85 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.85 }}
                                                transition={{ duration: 0.15 }}
                                                className="flex flex-col items-center"
                                            >
                                                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                                    300
                                                </span>
                                                <span className="text-xs font-mono font-bold text-white uppercase tracking-widest">
                                                    ECTS
                                                </span>
                                                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider mt-1">
                                                    100% Complete
                                                </span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>

                        {/* PIE CHART LEGEND PILLS & INTERACTIVE LIST */}
                        <div className="lg:col-span-7 flex flex-col gap-3">
                            {t.grades.map((item: any, idx: number) => {
                                const cfg = gradeColors[item.color] || gradeColors.blue;
                                const isActive = activeIndex === idx;

                                return (
                                    <motion.div
                                        key={idx}
                                        onClick={() => setSelectedGrade(selectedGrade === idx ? null : idx)}
                                        onMouseEnter={() => setHoveredGrade(idx)}
                                        onMouseLeave={() => setHoveredGrade(null)}
                                        whileHover={{ x: 6 }}
                                        className={`p-3.5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 ${cfg.bg} ${isActive ? cfg.border + " " + cfg.glow + " ring-1 ring-white/30" : "border-white/10 opacity-80 hover:opacity-100"}`}
                                    >
                                        <div className="flex items-center gap-3 min-w-0">
                                            <div
                                                className="w-4 h-4 rounded-full shrink-0 shadow-md transition-transform duration-300"
                                                style={{
                                                    backgroundColor: cfg.hex,
                                                    transform: isActive ? "scale(1.25)" : "scale(1)",
                                                }}
                                            />
                                            <div className="min-w-0">
                                                <div className="flex items-center gap-2">
                                                    <span className={`text-xs font-mono font-black uppercase ${cfg.text}`}>
                                                        {item.grade}
                                                    </span>
                                                    <span className="text-xs font-bold text-white truncate">
                                                        – {item.category}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-baseline gap-2 shrink-0">
                                            <span className="text-base font-black text-white">{item.percentage}</span>
                                            <span className="text-xs font-mono text-slate-400">({item.ects})</span>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* GRADE CARDS BREAKDOWN GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {t.grades.map((item: any, idx: number) => {
                            const cfg = gradeColors[item.color] || gradeColors.blue;
                            const isActive = activeIndex === idx;

                            return (
                                <motion.div
                                    key={idx}
                                    onClick={() => setSelectedGrade(selectedGrade === idx ? null : idx)}
                                    onMouseEnter={() => setHoveredGrade(idx)}
                                    onMouseLeave={() => setHoveredGrade(null)}
                                    whileHover={{ y: -4 }}
                                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${cfg.bg} ${isActive ? cfg.border + " " + cfg.glow + " ring-1 ring-white/30 scale-[1.02]" : "border-white/10 hover:border-white/25"}`}
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <span className={`px-2.5 py-1 rounded-lg text-xs font-mono font-black uppercase ${cfg.text} bg-white/5 border border-white/10`}>
                                            {item.grade}
                                        </span>
                                        <div className="flex items-baseline gap-1.5">
                                            <span className="text-xl font-black text-white">{item.percentage}</span>
                                            <span className="text-xs font-mono text-slate-400">({item.ects})</span>
                                        </div>
                                    </div>

                                    <h4 className="text-sm font-bold text-white mb-2">{item.category}</h4>
                                    <p className="text-xs text-slate-300 leading-relaxed font-light">{item.details}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* SECTION 5: CORE ACADEMIC COURSES & TECHNICAL SIGNIFICANCE */}
                {t.course_categories && (
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-3">
                                {t.courses_title}
                            </h3>
                            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto">
                                {t.courses_subtitle}
                            </p>

                            {/* CATEGORY SWITCHER TABS */}
                            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                                {t.course_categories.map((cat: any) => {
                                    const isActive = activeCourseCategory === cat.id;
                                    return (
                                        <button
                                            key={cat.id}
                                            onClick={() => setActiveCourseCategory(cat.id)}
                                            className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 border ${isActive ? "bg-blue-600 text-white border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.4)]" : "bg-[#0a0a0a] text-slate-400 border-white/10 hover:text-white hover:border-white/30"}`}
                                        >
                                            <span>{cat.icon}</span>
                                            <span>{cat.title}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* ACTIVE CATEGORY COURSES DISPLAY */}
                        <AnimatePresence mode="wait">
                            {t.course_categories.map((cat: any) => {
                                if (cat.id !== activeCourseCategory) return null;

                                return (
                                    <motion.div
                                        key={cat.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-9 backdrop-blur-2xl"
                                    >
                                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                                            <div>
                                                <h4 className="text-lg md:text-xl font-black text-white flex items-center gap-2.5">
                                                    <span>{cat.icon}</span>
                                                    {cat.title}
                                                </h4>
                                                <p className="text-xs text-slate-400 mt-1 font-light">{cat.desc}</p>
                                            </div>
                                            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 shrink-0">
                                                {cat.badge}
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {cat.courses.map((course: any, cIdx: number) => (
                                                <div
                                                    key={cIdx}
                                                    className="p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group"
                                                >
                                                    <div>
                                                        <div className="flex items-center justify-between gap-2 mb-2">
                                                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20">
                                                                {course.code}
                                                            </span>
                                                            <span className="px-2.5 py-0.5 rounded text-xs font-mono font-black text-emerald-400 bg-emerald-950/40 border border-emerald-500/30">
                                                                {course.grade}
                                                            </span>
                                                        </div>
                                                        <h5 className="text-sm font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                                                            {course.name}
                                                        </h5>
                                                        <p className="text-xs text-slate-300 leading-relaxed font-light">
                                                            {course.impact}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                )}

                {/* SECTION 6: 4 CORE ANALYTICAL PILLARS */}
                <div>
                    <div className="text-center mb-12">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-3">
                            {t.pillars_title}
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {t.pillars.map((pillar: any, index: number) => (
                            <motion.div
                                key={pillar.id || index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative rounded-2xl border border-white/10 bg-[#0a0a0a] backdrop-blur-xl p-7 flex flex-col justify-between group hover:border-blue-500/50 hover:shadow-[0_15px_45px_-10px_rgba(59,130,246,0.15)] transition-all duration-300"
                            >
                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent group-hover:via-cyan-400 transition-all" />

                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-3xl">{pillar.icon}</span>
                                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20">
                                            {pillar.badge}
                                        </span>
                                    </div>

                                    <h4 className="text-lg md:text-xl font-bold text-white mb-3 leading-snug group-hover:text-blue-300 transition-colors">
                                        {pillar.title}
                                    </h4>

                                    <p className="text-slate-300 text-sm leading-relaxed font-light">
                                        {pillar.summary}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
