"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { locales } from "@/data/locales";

/* ─── Types ─────────────────────────────────────────────────────────────── */

type PillarKey = "engineering" | "regulatory" | "qa";
type IntersectionKey = "eng_reg" | "eng_qa" | "qa_reg";
type CoreKey = "core";
type SelectionKey = PillarKey | IntersectionKey | CoreKey | null;

interface ContentBlock {
    label: string;
    subtitle: string;
    description: string;
    highlights: string[];
    color: string;
    icon: string;
}

/* ─── Data ──────────────────────────────────────────────────────────────── */



/* ─── Component ─────────────────────────────────────────────────────────── */

export default function Expertise() {
    const { language } = useLanguage();
    const t = (locales as any)[language].expertise;

    const pillars: Record<PillarKey, ContentBlock> = {
        engineering: { ...t.pillars.engineering, color: "#3b82f6", icon: "engineering" },
        regulatory: { ...t.pillars.regulatory, color: "#a855f7", icon: "gavel" },
        qa: { ...t.pillars.qa, color: "#22c55e", icon: "verified_user" },
    };

    const intersections: Record<IntersectionKey, ContentBlock> = {
        eng_reg: { ...t.intersections.eng_reg, color: "#8b5cf6", icon: "rocket_launch" },
        eng_qa: { ...t.intersections.eng_qa, color: "#06b6d4", icon: "health_and_safety" },
        qa_reg: { ...t.intersections.qa_reg, color: "#ec4899", icon: "shield" },
    };

    const coreContent: ContentBlock = {
        ...t.core,
        color: "#f59e0b",
        icon: "workspace_premium",
    };

    const [selected, setSelected] = useState<SelectionKey>(null);
    const [hoveredZone, setHoveredZone] = useState<SelectionKey>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const yBg = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const opacityBg = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

    const handleSelect = (key: SelectionKey) => {
        setSelected((prev) => (prev === key ? null : key));
    };

    const getContent = (): ContentBlock | null => {
        if (!selected) return null;
        if (selected === "core") return coreContent;
        if (selected in pillars) return pillars[selected as PillarKey];
        if (selected in intersections) return intersections[selected as IntersectionKey];
        return null;
    };

    const content = getContent();

    /* ── SVG Geometry ─────────────────────────────────────────────── */
    const svgW = 800;
    const svgH = 680;
    const cx = svgW / 2;        // 400
    const cy = svgH / 2 - 20;   // 320
    const r = 200;               // circle radius
    const d = 130;               // center-to-center offset

    // Triangle layout: Engineering (top-left), Regulatory (top-right), QA (bottom-center)
    const eng = { x: cx - d * 0.866, y: cy - d * 0.5 };   // top-left
    const reg = { x: cx + d * 0.866, y: cy - d * 0.5 };   // top-right
    const qa = { x: cx, y: cy + d };           // bottom-center

    // Intersection midpoints
    const engReg = { x: (eng.x + reg.x) / 2, y: (eng.y + reg.y) / 2 - 20 };
    const engQa = { x: (eng.x + qa.x) / 2 + 10, y: (eng.y + qa.y) / 2 + 10 };
    const qaReg = { x: (qa.x + reg.x) / 2 - 10, y: (qa.y + reg.y) / 2 + 10 };

    const circleData = [
        { key: "engineering" as PillarKey, ...eng },
        { key: "regulatory" as PillarKey, ...reg },
        { key: "qa" as PillarKey, ...qa },
    ];

    const intData = [
        { key: "eng_reg" as IntersectionKey, ...engReg },
        { key: "eng_qa" as IntersectionKey, ...engQa },
        { key: "qa_reg" as IntersectionKey, ...qaReg },
    ];

    return (
        <section
            id="expertise"
            ref={containerRef}
            className="relative bg-[#050505] border-t border-white/5 py-24 lg:py-36 overflow-hidden"
        >
            {/* Background */}
            <motion.div
                style={{ y: yBg, opacity: opacityBg }}
                className="absolute inset-0 z-0 pointer-events-none"
            >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.08),transparent)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(34,197,94,0.04),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.04),transparent_50%)]" />
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* ── Header ──────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16 max-w-4xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500/60" />
                        <span className="font-mono text-blue-400/80 text-xs uppercase tracking-[0.3em] font-medium">
                            {t.header.label}
                        </span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500/60" />
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
                        {t.header.title_prefix}{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300">
                            {t.header.title_highlight}
                        </span>
                    </h2>

                    <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light">
                        {t.header.description_prefix}{" "}
                        <span className="text-white/90 font-medium">{t.header.description_highlight}</span>
                        {t.header.description_suffix}{" "}
                        <span className="text-blue-400/70">{t.header.click_text}</span>
                    </p>
                </motion.div>

                {/* ── Venn Diagram ─────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="hidden md:flex justify-center mb-12"
                >
                    <svg
                        viewBox={`0 0 ${svgW} ${svgH}`}
                        className="w-full max-w-[820px]"
                    >
                        <defs>
                            {/* Circle gradients */}
                            <radialGradient id="g-eng" cx="40%" cy="40%">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.18" />
                                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.03" />
                            </radialGradient>
                            <radialGradient id="g-reg" cx="60%" cy="40%">
                                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.18" />
                                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.03" />
                            </radialGradient>
                            <radialGradient id="g-qa" cx="50%" cy="60%">
                                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.18" />
                                <stop offset="100%" stopColor="#22c55e" stopOpacity="0.03" />
                            </radialGradient>
                            {/* Core glow */}
                            <radialGradient id="g-core" cx="50%" cy="50%">
                                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
                                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                            </radialGradient>
                            {/* Glow filter */}
                            <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                                <feGaussianBlur stdDeviation="8" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                            <filter id="glow-strong" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="16" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>

                        {/* ── Main Circles ── */}
                        {circleData.map((c, i) => {
                            const isSelected = selected === c.key;
                            const isHovered = hoveredZone === c.key;
                            const isDimmed = selected && selected !== c.key && !String(selected).includes(c.key);
                            const active = isSelected || isHovered;
                            const color = pillars[c.key].color;

                            return (
                                <g
                                    key={c.key}
                                    onClick={() => handleSelect(c.key)}
                                    onMouseEnter={() => setHoveredZone(c.key)}
                                    onMouseLeave={() => setHoveredZone(null)}
                                    className="cursor-pointer"
                                    style={{ opacity: isDimmed ? 0.25 : 1, transition: "opacity 0.4s ease" }}
                                >
                                    {/* Fill */}
                                    <circle
                                        cx={c.x} cy={c.y} r={r}
                                        fill={`url(#g-${c.key === "engineering" ? "eng" : c.key === "regulatory" ? "reg" : "qa"})`}
                                        style={{ transition: "all 0.4s ease" }}
                                    />
                                    {/* Stroke */}
                                    <circle
                                        cx={c.x} cy={c.y} r={r}
                                        fill="none"
                                        stroke={color}
                                        strokeWidth={active ? 2 : 1}
                                        strokeOpacity={active ? 0.7 : 0.25}
                                        filter={active ? "url(#glow)" : undefined}
                                        style={{ transition: "all 0.4s ease" }}
                                    />

                                    {/* Label */}
                                    <foreignObject
                                        x={c.x - 110}
                                        y={c.y - (c.key === "qa" ? 110 : 90)}
                                        width="220"
                                        height="180"
                                    >
                                        <div className="flex flex-col items-center justify-center text-center h-full select-none">
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-400"
                                                style={{
                                                    backgroundColor: active ? `${color}20` : `${color}10`,
                                                    border: `1px solid ${active ? color + "60" : color + "25"}`,
                                                }}
                                            >
                                                <span
                                                    className="material-symbols-outlined text-2xl"
                                                    style={{ color: active ? color : color + "99" }}
                                                >
                                                    {pillars[c.key].icon}
                                                </span>
                                            </div>
                                            <p
                                                className="text-sm font-semibold leading-tight mb-1 transition-colors duration-300"
                                                style={{ color: active ? "#fff" : "rgba(255,255,255,0.75)" }}
                                            >
                                                {pillars[c.key].label}
                                            </p>
                                            <p
                                                className="text-[10px] uppercase tracking-wider font-mono transition-colors duration-300"
                                                style={{ color: active ? color : "rgba(255,255,255,0.35)" }}
                                            >
                                                {pillars[c.key].subtitle}
                                            </p>
                                        </div>
                                    </foreignObject>
                                </g>
                            );
                        })}

                        {/* ── Intersection Zones ── */}
                        {intData.map((z) => {
                            const isSelected = selected === z.key;
                            const isHovered = hoveredZone === z.key;
                            const isDimmed = selected && selected !== z.key;
                            const active = isSelected || isHovered;
                            const color = intersections[z.key].color;
                            const shortLabel = intersections[z.key].subtitle; // e.g. "Engineering + QA"

                            return (
                                <g
                                    key={z.key}
                                    onClick={() => handleSelect(z.key)}
                                    onMouseEnter={() => setHoveredZone(z.key)}
                                    onMouseLeave={() => setHoveredZone(null)}
                                    className="cursor-pointer"
                                    style={{ opacity: isDimmed ? 0.15 : 1, transition: "opacity 0.4s ease" }}
                                >
                                    {/* Invisible hit area */}
                                    <circle cx={z.x} cy={z.y} r={58} fill="transparent" />

                                    {/* Outer glow ring (always visible) */}
                                    <circle
                                        cx={z.x} cy={z.y} r={active ? 46 : 38}
                                        fill={`${color}${active ? "18" : "0a"}`}
                                        stroke={color}
                                        strokeWidth={active ? 2 : 1.5}
                                        strokeOpacity={active ? 0.9 : 0.5}
                                        filter={active ? "url(#glow)" : undefined}
                                        style={{ transition: "all 0.35s ease" }}
                                    />

                                    {/* Icon + label */}
                                    <foreignObject x={z.x - 50} y={z.y - 52} width="100" height="104">
                                        <div className="w-full h-full flex flex-col items-center justify-center gap-1 select-none">
                                            <span
                                                className="material-symbols-outlined"
                                                style={{
                                                    fontSize: active ? "22px" : "18px",
                                                    color: active ? color : `${color}cc`,
                                                    transition: "all 0.3s ease",
                                                    filter: active ? `drop-shadow(0 0 6px ${color}80)` : "none",
                                                }}
                                            >
                                                {intersections[z.key].icon}
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: "8px",
                                                    color: active ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.45)",
                                                    textAlign: "center",
                                                    lineHeight: "1.2",
                                                    fontFamily: "monospace",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "0.05em",
                                                    transition: "all 0.3s ease",
                                                    maxWidth: "80px",
                                                    display: "block",
                                                }}
                                            >
                                                {shortLabel}
                                            </span>
                                        </div>
                                    </foreignObject>
                                </g>
                            );
                        })}

                        {/* ── Core ── */}
                        {(() => {
                            const coreActive = selected === "core" || hoveredZone === "core";
                            return (
                                <g
                                    onClick={() => handleSelect("core")}
                                    onMouseEnter={() => setHoveredZone("core")}
                                    onMouseLeave={() => setHoveredZone(null)}
                                    className="cursor-pointer"
                                    style={{ opacity: selected && selected !== "core" ? 0.2 : 1, transition: "opacity 0.4s ease" }}
                                >
                                    {/* Outer pulse ring 2 (largest) */}
                                    <circle
                                        cx={cx} cy={cy} r={coreActive ? 82 : 72}
                                        fill="none"
                                        stroke="#f59e0b"
                                        strokeWidth="1"
                                        strokeOpacity={coreActive ? 0.15 : 0.08}
                                        strokeDasharray="3 6"
                                        style={{ transition: "all 0.5s ease" }}
                                    />
                                    {/* Outer pulse ring 1 */}
                                    <circle
                                        cx={cx} cy={cy} r={coreActive ? 68 : 60}
                                        fill="none"
                                        stroke="#f59e0b"
                                        strokeWidth="1"
                                        strokeOpacity={coreActive ? 0.25 : 0.12}
                                        style={{ transition: "all 0.5s ease" }}
                                    />
                                    {/* Main filled circle */}
                                    <circle
                                        cx={cx} cy={cy} r={coreActive ? 54 : 48}
                                        fill={`rgba(245,158,11,${coreActive ? "0.18" : "0.08"})`}
                                        stroke="#f59e0b"
                                        strokeWidth={coreActive ? 2.5 : 1.5}
                                        strokeOpacity={coreActive ? 1 : 0.5}
                                        filter={coreActive ? "url(#glow-strong)" : "url(#glow)"}
                                        style={{ transition: "all 0.4s ease" }}
                                    />
                                    {/* Icon + label */}
                                    <foreignObject x={cx - 52} y={cy - 58} width="104" height="116">
                                        <div className="w-full h-full flex flex-col items-center justify-center gap-1.5 select-none">
                                            <span
                                                className="material-symbols-outlined"
                                                style={{
                                                    fontSize: coreActive ? "34px" : "28px",
                                                    color: coreActive ? "#f59e0b" : "rgba(245,158,11,0.7)",
                                                    transition: "all 0.35s ease",
                                                    filter: coreActive ? "drop-shadow(0 0 10px rgba(245,158,11,0.8))" : "none",
                                                }}
                                            >
                                                workspace_premium
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: "7px",
                                                    color: coreActive ? "rgba(245,158,11,0.9)" : "rgba(245,158,11,0.45)",
                                                    textAlign: "center",
                                                    fontFamily: "monospace",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "0.12em",
                                                    lineHeight: "1.3",
                                                    transition: "all 0.3s ease",
                                                    display: "block",
                                                    maxWidth: "90px",
                                                }}
                                            >
                                                Sign-off<br />Authority
                                            </span>
                                        </div>
                                    </foreignObject>
                                </g>
                            );
                        })()}
                    </svg>
                </motion.div>

                {/* ── Detail Panel ─────────────────────────────────────── */}
                <AnimatePresence mode="wait">
                    {content && (
                        <motion.div
                            key={selected}
                            initial={{ opacity: 0, y: 20, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.97 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="max-w-3xl mx-auto mb-16"
                        >
                            <div
                                className="relative rounded-2xl border bg-[#0c0c0c] overflow-hidden"
                                style={{ borderColor: `${content.color}30` }}
                            >
                                {/* Top accent line */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-px"
                                    style={{ background: `linear-gradient(90deg, transparent, ${content.color}60, transparent)` }}
                                />

                                <div className="p-8 md:p-10">
                                    {/* Header */}
                                    <div className="flex items-start justify-between gap-4 mb-6">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                                style={{ backgroundColor: `${content.color}15`, border: `1px solid ${content.color}30` }}
                                            >
                                                <span
                                                    className="material-symbols-outlined text-2xl"
                                                    style={{ color: content.color }}
                                                >
                                                    {content.icon}
                                                </span>
                                            </div>
                                            <div>
                                                <p
                                                    className="text-xs font-mono uppercase tracking-widest mb-1"
                                                    style={{ color: content.color }}
                                                >
                                                    {content.subtitle}
                                                </p>
                                                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                                                    {content.label}
                                                </h3>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setSelected(null)}
                                            className="text-white/30 hover:text-white/70 transition-colors flex-shrink-0 mt-1"
                                        >
                                            <span className="material-symbols-outlined text-xl">close</span>
                                        </button>
                                    </div>

                                    {/* Description */}
                                    <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 border-l border-white/10 pl-4">
                                        {content.description}
                                    </p>

                                    {/* Highlights */}
                                    <div className="flex flex-wrap gap-2">
                                        {content.highlights.map((h, i) => (
                                            <motion.span
                                                key={h}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: i * 0.06 }}
                                                className="px-3 py-1.5 text-xs font-medium rounded-lg border"
                                                style={{
                                                    color: content.color,
                                                    borderColor: `${content.color}25`,
                                                    backgroundColor: `${content.color}08`,
                                                }}
                                            >
                                                {h}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ── Mobile Cards ─────────────────────────────────────── */}
                <div className="md:hidden grid grid-cols-1 gap-4 mb-16">
                    {Object.entries(pillars).map(([key, p], i) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            onClick={() => handleSelect(key as PillarKey)}
                            className="rounded-xl border border-white/8 bg-white/3 p-5 cursor-pointer active:scale-[0.98] transition-transform"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <span className="material-symbols-outlined text-xl" style={{ color: p.color }}>{p.icon}</span>
                                <span className="text-white font-semibold text-sm">{p.label}</span>
                            </div>
                            <p className="text-slate-500 text-xs uppercase tracking-wider font-mono">{p.subtitle}</p>
                        </motion.div>
                    ))}
                </div>

                {/* ── Ethos & Logos Footer ─────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative rounded-2xl border border-white/8 bg-[#0a0a0a] overflow-hidden">
                        {/* Top line */}
                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
                        {/* Bottom line */}
                        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

                        <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
                            {/* Icon + Title */}
                            <div className="flex-1 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-xl text-blue-400">verified_user</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Ethos & Logos</h3>
                                        <p className="text-xs text-slate-500 italic font-serif">The Bridge Engineer Philosophy</p>
                                    </div>
                                </div>
                                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light">
                                    {t.footer.description_prefix}{" "}
                                    <span className="text-white/90 font-medium">{t.footer.description_highlight_1}</span>
                                    {" "}{t.footer.description_between}{" "}
                                    <span className="text-white/90 font-medium">{t.footer.description_highlight_2}</span>
                                    {t.footer.description_suffix}{" "}
                                    <span className="text-blue-300 font-medium italic">{t.footer.description_highlight_3}</span>
                                </p>
                            </div>

                            {/* CTA */}
                            <div className="flex-shrink-0">
                                <Link
                                    href="#contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-bold tracking-wide hover:bg-blue-50 transition-colors duration-200 group"
                                >
                                    {t.footer.cta}
                                    <span className="material-symbols-outlined text-base group-hover:translate-x-0.5 transition-transform">
                                        arrow_right_alt
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div >
        </section >
    );
}
