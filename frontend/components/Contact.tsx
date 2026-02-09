"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                // Reset status after a while
                setTimeout(() => setStatus("idle"), 6000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 4000);
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
        }
    };

    return (
        <section
            id="contact"
            ref={containerRef}
            className="w-full py-24 lg:py-48 bg-[#030303] relative overflow-hidden"
        >
            {/* AMBIENT BACKGROUND SYSTEM */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Floating Beams */}
                <motion.div
                    animate={{
                        opacity: [0.1, 0.3, 0.1],
                        x: [0, 50, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        opacity: [0.05, 0.2, 0.05],
                        x: [0, -80, 0],
                        y: [0, 60, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]"
                />

                {/* Micro-Grid Overlay */}
                <div className="absolute inset-0 bg-[url('/resources/img/grid.svg')] opacity-[0.02] mix-blend-overlay"></div>

                {/* Top/Bottom Fade */}
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#030303] to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030303] to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* SECTION HEADER */}
                <motion.div
                    style={{ opacity }}
                    className="flex flex-col items-center text-center mb-24 lg:mb-40"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-px w-8 bg-primary/50"></div>
                        <span className="text-primary font-mono text-[10px] uppercase tracking-[0.5em]">System.Initialize(Contact)</span>
                        <div className="h-px w-8 bg-primary/50"></div>
                    </div>

                    <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white leading-[0.85] tracking-tighter mb-8 group">
                        <motion.span
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="block"
                        >
                            TALK TO
                        </motion.span>
                        <motion.span
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-white/40 to-white/10"
                        >
                            THE CORE
                        </motion.span>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="max-w-2xl text-gray-500 text-lg md:text-xl font-medium leading-relaxed"
                    >
                        Whether you're looking to redefine AI regulation or build the next sovereign cloud,
                        the transmission lines are open.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8"
                >
                    {/* INFO BLOCK: GLASS CARDS */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <motion.a
                                href="mailto:hello@fpz.ai"
                                className="group p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-white/[0.04] hover:border-primary/50 transition-all overflow-hidden relative"
                            >
                                <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                                <div className="relative z-10">
                                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-8 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                        Signal Protocol
                                    </div>
                                    <div className="text-xl font-bold text-white mb-1">Email</div>
                                    <div className="text-sm text-gray-400 group-hover:text-primary transition-colors">hello@fpz.ai</div>
                                </div>
                            </motion.a>

                            <motion.a
                                href="tel:+306912345678"
                                className="group p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-white/[0.04] hover:border-secondary/50 transition-all overflow-hidden relative"
                            >
                                <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                                <div className="relative z-10">
                                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-8 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                                        Secure Line
                                    </div>
                                    <div className="text-xl font-bold text-white mb-1">Phone</div>
                                    <div className="text-sm text-gray-400 group-hover:text-secondary transition-colors">+30 691...</div>
                                </div>
                            </motion.a>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex-grow p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] relative overflow-hidden group">
                            <div className="flex items-center justify-between mb-8">
                                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Tactical Coordinates</div>
                                <div className="flex gap-1">
                                    {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>)}
                                </div>
                            </div>

                            <div className="aspect-square w-full rounded-2xl overflow-hidden relative grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2d22.435!3d38.905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU0JzE4LjAiTiAyMsKwMjYnMDYuMCJF!5e0!3m2!1sen!2sgr!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: 'invert(100%) contrast(1.1) brightness(0.8)' }}
                                    allowFullScreen
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-primary/10 mix-blend-color pointer-events-none"></div>
                                <div className="absolute bottom-4 left-4 bg-background-dark/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-[10px] font-mono text-white tracking-widest">
                                    LOC: LAMIA, HEADQUARTERS
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex gap-4">
                            {["LINKEDIN", "GITHUB", "X / TWITTER"].map((social, i) => (
                                <motion.a
                                    key={social}
                                    href="#"
                                    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
                                    className="flex-1 py-5 border border-white/5 bg-white/[0.01] rounded-2xl text-center text-[9px] font-mono tracking-[0.3em] text-gray-500 hover:text-white hover:border-white/20 transition-all"
                                >
                                    {social}
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    {/* FORM BLOCK: IMMERSIVE INPUTS */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-7"
                    >
                        <div className="h-full bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 md:p-16 relative flex flex-col shadow-2xl overflow-hidden">
                            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

                            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col h-full space-y-12">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="space-y-4 group">
                                        <label className={`text-[10px] font-mono uppercase tracking-[0.4em] transition-all duration-300 ${focusedField === 'name' ? 'text-primary translate-x-1' : 'text-gray-600'}`}>
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            autoComplete="off"
                                            placeholder="Enter your name"
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-white/5 py-4 text-xl font-bold text-white placeholder:text-gray-800 focus:outline-none focus:border-primary transition-all pr-10"
                                        />
                                    </div>

                                    <div className="space-y-4 group">
                                        <label className={`text-[10px] font-mono uppercase tracking-[0.4em] transition-all duration-300 ${focusedField === 'email' ? 'text-secondary translate-x-1' : 'text-gray-600'}`}>
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            autoComplete="off"
                                            placeholder="Enter your email"
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-white/5 py-4 text-xl font-bold text-white placeholder:text-gray-800 focus:outline-none focus:border-secondary transition-all pr-10"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4 group flex-grow">
                                    <label className={`text-[10px] font-mono uppercase tracking-[0.4em] transition-all duration-300 ${focusedField === 'message' ? 'text-white translate-x-1' : 'text-gray-600'}`}>
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={6}
                                        placeholder="Enter your message"
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-white/[0.01] border border-white/5 rounded-3xl p-8 text-lg font-medium text-white placeholder:text-gray-800 focus:outline-none focus:border-white/20 transition-all resize-none shadow-inner"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status !== 'idle'}
                                    className="group relative w-full overflow-hidden rounded-[2rem] py-8 bg-white text-black font-black text-xs tracking-[0.5em] uppercase transition-all hover:scale-[1.01] active:scale-[0.98] disabled:opacity-50"
                                >
                                    <motion.div
                                        className="relative z-10 flex items-center justify-center gap-6"
                                        animate={status === 'loading' ? { opacity: [1, 0.5, 1], transition: { repeat: Infinity } } : {}}
                                    >
                                        <AnimatePresence mode="wait">
                                            {status === 'idle' && (
                                                <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-4">
                                                    INITIALIZE TRANSMISSION
                                                    <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </motion.div>
                                            )}
                                            {status === 'loading' && (
                                                <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-4">
                                                    <div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce"></div>
                                                    TRANSMITTING SIGNAL...
                                                </motion.div>
                                            )}
                                            {status === 'success' && (
                                                <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-4 text-green-600">
                                                    SIGNAL DELIVERED
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </motion.div>
                                            )}
                                            {status === 'error' && (
                                                <motion.div key="error" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-4 text-red-600">
                                                    RETRY TRANSMISSION
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>

                                    {/* Laser Scan (Loading Animation) */}
                                    {status === 'loading' && (
                                        <motion.div
                                            initial={{ x: "-100%" }}
                                            animate={{ x: "100%" }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-0 bg-primary/20"
                                        />
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
