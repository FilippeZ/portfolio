"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useState } from "react";

/**
 * THE SOVEREIGN MONOLITH
 * The definitive B2B/Institutional language interface.
 * Design Keywords: Titanium, Obsidian, Mechanical Inertia, Precision Optics.
 */
export default function LanguageSwitcher() {
    const { language, toggleLanguage } = useLanguage();
    const [isHovered, setIsHovered] = useState(false);

    // Sovereign Physics (Industrial Inertia & Precision)
    const monarchTransition = {
        type: "spring",
        stiffness: 500,
        damping: 45,
        mass: 1.5
    } as const;

    // Optical Manipulation Values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useSpring(useTransform(mouseY, [0, 40], [2.5, -2.5]), { stiffness: 100, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [0, 150], [-2.5, 2.5]), { stiffness: 100, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <motion.button
            onClick={toggleLanguage}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileTap={{ scale: 0.97 }}
            style={{ rotateX, rotateY, perspective: 1200 }}
            className="group relative flex items-center p-[1.5px] rounded-full transition-all duration-1000 select-none cursor-pointer"
            aria-label="Switch Language"
        >
            {/* 1. Titanium Rim Light (Status Indicator) */}
            <motion.div
                animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1.04 : 1,
                }}
                className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl pointer-events-none transition-all duration-1000"
            />

            {/* 2. Industrial Precision Stroke (Titanium/Chrome) */}
            <div className={`absolute inset-0 rounded-full border transition-all duration-1000 ${isHovered ? 'border-blue-500/50 shadow-[0_0_12px_rgba(59,130,246,0.5)]' : 'border-white/10'
                }`} />

            {/* 3. Obsidian Monolith Face (Cryogenic Glass) */}
            <div className="relative z-10 flex items-center bg-[#030303]/98 rounded-full p-1 backdrop-blur-[80px] shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]">
                <div className="relative flex items-center h-10">

                    {/* EN Section */}
                    <div className="relative px-8 flex items-center justify-center z-10">
                        <motion.span
                            animate={{
                                opacity: language === 'en' ? 1 : 0.15,
                                letterSpacing: language === 'en' ? "0.4em" : "0.3em",
                                filter: language === 'en' ? "brightness(1.2) drop-shadow(0 0 10px rgba(255,255,255,0.3))" : "none",
                                scale: language === 'en' ? 1 : 0.94
                            }}
                            className="text-[10px] font-mono font-black uppercase text-white transition-all duration-700"
                        >
                            EN
                        </motion.span>
                    </div>

                    {/* GR Section */}
                    <div className="relative px-4 md:px-8 flex items-center justify-center z-10">
                        <motion.span
                            animate={{
                                opacity: language === 'el' ? 1 : 0.15,
                                letterSpacing: language === 'el' ? "0.4em" : "0.3em",
                                filter: language === 'el' ? "brightness(1.2) drop-shadow(0 0 10px rgba(255,255,255,0.3))" : "none",
                                scale: language === 'el' ? 1 : 0.94
                            }}
                            className="text-[10px] font-mono font-black uppercase text-white transition-all duration-700"
                        >
                            GR
                        </motion.span>
                    </div>

                    {/* 4. Monarch Crystalline indicator */}
                    <motion.div
                        layoutId="monolithIndicator"
                        className="absolute inset-y-0.5 rounded-full bg-gradient-to-br from-blue-600/25 via-blue-400/10 to-transparent border border-white/5"
                        animate={{
                            left: language === 'en' ? '2px' : '50%',
                            right: language === 'en' ? '50%' : '2px',
                            backgroundColor: isHovered ? "rgba(59,130,246,0.12)" : "rgba(59,130,246,0.06)"
                        }}
                        transition={monarchTransition}
                    >
                        {/* Internal Lens Highlight */}
                        <div className="absolute top-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50" />
                        <div className="absolute bottom-0 left-[30%] right-[30%] h-[1px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent opacity-30" />
                    </motion.div>
                </div>
            </div>

            {/* 5. Institutional "Breathing" Pulse */}
            <div className="absolute inset-0 pointer-events-none rounded-full overflow-hidden">
                <motion.div
                    animate={{
                        opacity: [0.03, 0.08, 0.03],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-blue-500 blur-2xl"
                />
            </div>

            {/* 6. Sovereign Status Alignment Light */}
            <motion.div
                animate={{
                    x: language === 'en' ? -22 : 22,
                    opacity: isHovered ? 1 : 0.3
                }}
                className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-6 h-[1px] bg-blue-500 shadow-[0_0_10px_#3b82f6] z-20 pointer-events-none transition-all duration-1000"
            />

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap');
            `}</style>
        </motion.button>
    );
}
