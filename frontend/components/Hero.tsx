"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Download, ArrowRight, ExternalLink, ShieldCheck, Clock } from "lucide-react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Scroll-based parallax for various elements
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Mouse-based parallax logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set(clientX / innerWidth - 0.5);
        mouseY.set(clientY / innerHeight - 0.5);
    };

    const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

    const textX = useTransform(springX, [-0.5, 0.5], [30, -30]);
    const textY = useTransform(springY, [-0.5, 0.5], [30, -30]);

    const imageX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
    const imageY = useTransform(springY, [-0.5, 0.5], [-20, 20]);

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505] text-white pt-32 pb-20 lg:pt-40 lg:pb-32"
        >
            {/* 1. LAYER: DYNAMIC BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(35,90,255,0.1),_transparent_70%)]"></div>
                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-50"
                ></motion.div>
                <motion.div
                    style={{ y: y2 }}
                    className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen opacity-30"
                ></motion.div>
                <div className="absolute inset-0 bg-[url('/resources/img/grid.svg')] opacity-[0.03] mix-blend-overlay"></div>
            </div>

            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

                {/* 2. LAYER: BACKGROUND TEXT (Parallax) */}
                <motion.div
                    style={{ x: textX, y: textY, opacity }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
                >
                    <h2 className="text-[18vw] font-black text-white/[0.03] whitespace-nowrap leading-none select-none">
                        ENGINEERED AI
                    </h2>
                </motion.div>

                {/* 3. LAYER: CONTENT (Left - 7 cols) */}
                <div className="col-span-1 lg:col-span-7 flex flex-col items-start gap-8">



                    {/* Main Title with staggered words */}
                    <div className="relative">
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.1 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.0] text-white"
                        >
                            {["THE", "SIGN-OFF", "AUTHORITY", "FOR", "COMPLIANT", "AI."].map((word, i) => (
                                <span key={i} className="inline-block overflow-hidden h-[1.15em] mr-[0.2em] last:mr-0">
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{
                                            duration: 1,
                                            delay: i * 0.1,
                                            ease: [0.16, 1, 0.3, 1],
                                        }}
                                        className="block"
                                    >
                                        {word === "AI." ? (
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                                                {word}
                                            </span>
                                        ) : (
                                            word
                                        )}
                                    </motion.span>
                                </span>
                            ))}
                        </motion.h1>
                    </div>

                    {/* Subtext & Role - SCQA Integration */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-3xl space-y-6"
                    >
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-light text-gray-300">
                                Filippos P. Zygouris <span className="text-blue-500 font-mono text-xl block sm:inline mt-2 sm:mt-0">(M.Eng. | TEE Licensed)</span>
                            </h2>
                            <p className="text-xl md:text-2xl font-medium text-white italic border-l-4 border-blue-500 pl-6 py-2">
                                "I don’t just build algorithms, I architect their institutional survival."
                            </p>
                        </div>

                        <div className="space-y-4 text-gray-400 leading-relaxed font-light">
                            <p className="text-lg md:text-xl">
                                In the era of the <span className="text-white font-medium">EU AI Act and MDR</span>, the Compliance Gap is where innovation goes to die. Engineers build with speed; Regulators exclude with rigor. This friction creates a vacuum that stalls breakthroughs.
                            </p>
                            <p className="text-lg md:text-xl border-l-2 border-white/10 pl-6">
                                I bridge that divide. As a <span className="text-white font-medium">TEE Licensed Engineer and SaMD Specialist</span>, I translate the fluidity of Agentic AI & LLMs into the rigid structures of <span className="text-blue-400 font-medium">EU Regulatory Power</span>. I don't just verify code, I validate the future of your company, ensuring your innovation survives the audit and conquers the market.
                            </p>
                        </div>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-wrap gap-6 mt-4"
                    >
                        <Link
                            href="#contact"
                            className="group relative px-8 py-4 bg-white text-black font-bold text-sm tracking-widest uppercase rounded hover:scale-105 transition-transform flex items-center gap-2"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Regulatory Consultation <ShieldCheck size={18} />
                            </span>
                        </Link>
                        <Link
                            href="#portfolio"
                            className="group px-8 py-4 border border-white/20 text-white font-bold text-sm tracking-widest uppercase rounded hover:bg-white/5 transition-all flex items-center gap-2"
                        >
                            Technical Authority <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    {/* Minimal Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="flex items-center gap-10 mt-6 pt-8 border-t border-white/5 w-full max-w-md"
                    >
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 text-white">
                                <Clock size={16} className="text-blue-500" />
                                <span className="text-2xl font-bold">5+</span>
                            </div>
                            <span className="text-[10px] text-gray-500 uppercase tracking-wider">Years Exp</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 text-white">
                                <ShieldCheck size={16} className="text-blue-500" />
                                <span className="text-2xl font-bold">100%</span>
                            </div>
                            <span className="text-[10px] text-gray-500 uppercase tracking-wider">Compliance</span>
                        </div>
                    </motion.div>
                </div>

                {/* 4. LAYER: IMAGE (Right - 5 cols - Parallax) */}
                <div className="col-span-1 lg:col-span-5 relative h-[500px] lg:h-[800px] flex items-end justify-center pointer-events-none">
                    <motion.div
                        style={{ x: imageX, y: imageY }}
                        className="relative w-full h-[110%] max-w-[600px] z-10"
                    >
                        <Image
                            src="/resources/img/bg1.png"
                            alt="Filippos-Paraskevas Zygouris"
                            fill
                            className="object-contain object-bottom drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
                            priority
                            quality={100}
                        />
                        {/* Soft fade to black at bottom */}
                        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent"></div>
                    </motion.div>

                    {/* Subtle glow behind image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
                </div>

            </div>

            {/* Floating Elements (Background) */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-[10%] opacity-20 hidden lg:block"
            >
                <div className="w-20 h-20 border border-white/10 rounded-2xl rotate-12"></div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] font-mono">Scroll to explore</span>
                <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
            </motion.div>
        </section>
    );
}
