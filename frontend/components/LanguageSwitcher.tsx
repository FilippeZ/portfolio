"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { locales } from "@/data/locales";

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const t = locales[language];

    const options = [
        { id: "en", label: "EN" },
        { id: "el", label: "GR" }
    ] as const;

    return (
        <div className="flex items-center gap-3">
            <span className="hidden md:block text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
                {t.controls.language}
            </span>

            <div className="relative flex p-1.5 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-xl shadow-2xl overflow-hidden cursor-pointer">
                {options.map((opt) => (
                    <button
                        key={opt.id}
                        onClick={() => setLanguage(opt.id)}
                        className="relative px-6 py-2 outline-none tap-highlight-transparent group min-w-[60px]"
                    >
                        {language === opt.id && (
                            <motion.div
                                layoutId="active-language-pill"
                                className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] z-0"
                                transition={{
                                    type: "spring",
                                    stiffness: 450,
                                    damping: 35,
                                    mass: 0.8
                                }}
                            />
                        )}
                        <span className={`relative z-10 text-[11px] font-bold font-mono tracking-[0.2em] transition-all duration-300 text-center block ${language === opt.id ? "text-white scale-110" : "text-white/40 group-hover:text-white/70"
                            }`}>
                            {opt.label}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
