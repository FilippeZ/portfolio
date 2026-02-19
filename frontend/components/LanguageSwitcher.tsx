"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="group relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-colors overflow-hidden"
            aria-label="Switch Language"
        >
            <div className="relative z-10 flex items-center gap-2">
                <span className={`text-xs font-bold tracking-wider transition-colors duration-300 ${language === 'en' ? 'text-white' : 'text-gray-500'}`}>
                    EN
                </span>
                <span className="w-px h-3 bg-white/20"></span>
                <span className={`text-xs font-bold tracking-wider transition-colors duration-300 ${language === 'el' ? 'text-white' : 'text-gray-500'}`}>
                    EL
                </span>
            </div>

            {/* Active Indicator Background */}
            <motion.div
                className="absolute inset-0 bg-white/5"
                initial={false}
                animate={{
                    x: language === 'en' ? '-50%' : '50%',
                    opacity: 0
                }}
            />
        </button>
    );
}
