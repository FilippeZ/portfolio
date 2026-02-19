"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    ShieldCheck,
    Radio,
    Activity,
    Lock,
    Terminal,
    Send,
    ArrowRight,
    Linkedin,
    Github,
    Twitter,
    FileText,
    ChevronRight
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { locales } from "@/data/locales";

export default function Contact() {
    const { language } = useLanguage();
    const t = locales[language].contactPage;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        sector: "",
        service: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

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
                setFormData({ name: "", email: "", sector: "", service: "", message: "" });
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section
            id="contact"
            ref={containerRef}
            className="w-full py-32 lg:py-48 bg-[#010101] relative overflow-hidden border-t border-white/5"
        >
            {/* COMMAND CENTER BACKGROUND SYSTEM */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-blue-600/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-indigo-600/5 rounded-full blur-[150px]" />
                <div className="absolute inset-0 bg-[url('/resources/img/grid.svg')] opacity-[0.03] mix-blend-overlay" />
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#010101] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#010101] to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* SECTION HEADER: MISSION INITIALIZATION */}
                <motion.div
                    style={{ opacity }}
                    className="flex flex-col items-center text-center mb-32"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] w-12 bg-blue-500/30"></div>
                        <span className="text-blue-400 font-mono text-[10px] uppercase tracking-[0.5em] font-black">{t.system_init}</span>
                        <div className="h-[1px] w-12 bg-blue-500/30"></div>
                    </div>

                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter mb-10">
                        {t.title_1}<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                            {t.title_2}
                        </span>
                    </h2>

                    <p className="max-w-2xl text-gray-500 text-xl font-light leading-relaxed">
                        {t.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* LEFT PANEL: SIGNAL PROTOCOLS (Control Panel) */}
                    <div className="lg:col-span-5 space-y-8">

                        {/* Dossier Card: Email */}
                        <motion.a
                            href="mailto:filippos.paraskevas.zygouris@gmail.com"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group block relative p-10 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest flex items-center gap-2">
                                        <Radio className="text-blue-500 animate-pulse" size={14} />
                                        {t.email_protocol}
                                    </div>
                                    <div className="text-[10px] font-mono text-gray-800">PRTCL_SEC_A</div>
                                </div>
                                <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-2">{t.email_label}</h3>
                                <p className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">filippos.paraskevas.zygouris@gmail.com</p>
                            </div>
                        </motion.a>

                        {/* Dossier Card: Phone */}
                        <motion.a
                            href="tel:+306975922894"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group block relative p-10 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute -right-8 -top-8 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest flex items-center gap-2">
                                        <Activity className="text-indigo-500 animate-pulse" size={14} />
                                        {t.phone_protocol}
                                    </div>
                                    <div className="text-[10px] font-mono text-gray-800">PRTCL_SEC_B</div>
                                </div>
                                <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-2">{t.phone_label}</h3>
                                <p className="text-lg md:text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">+30 697 592 2894</p>
                            </div>
                        </motion.a>

                        {/* Tactical Coordinates Block */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl group overflow-hidden"
                        >
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                                <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">{t.location_label}</div>
                                <MapPin size={16} className="text-gray-800" />
                            </div>

                            <div className="aspect-video w-full rounded-2xl overflow-hidden relative grayscale opacity-30 group-hover:opacity-70 group-hover:grayscale-0 transition-all duration-1000 border border-white/5">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2d22.435!3d38.905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU0JzE4LjAiTiAyMsKwMjYnMDYuMCJF!5e0!3m2!1sen!2sgr!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: 'invert(100%) contrast(1.1) brightness(0.8)' }}
                                    allowFullScreen
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-blue-500/10 mix-blend-color pointer-events-none"></div>
                                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-[10px] font-mono text-white tracking-widest flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                    {t.location_text}
                                </div>
                            </div>
                        </motion.div>

                        {/* Social Matrix */}
                        <div className="grid grid-cols-3 gap-3">
                            {t.socials.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.03)" }}
                                    className="p-4 border border-white/5 bg-white/[0.01] rounded-2xl text-center text-[8px] font-mono tracking-[0.2em] text-gray-700 hover:text-white transition-all uppercase"
                                >
                                    {social}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT PANEL: TRANSMISSION PORTAL (Immersive Form) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 relative h-full"
                    >
                        {/* Technical Corners Decoration */}
                        <div className="absolute -top-1 -left-1 w-12 h-12 border-t-2 border-l-2 border-blue-500/40 rounded-tl-[3rem] z-20 pointer-events-none" />
                        <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-2 border-r-2 border-indigo-500/40 rounded-br-[3rem] z-20 pointer-events-none" />

                        <div className="h-full bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 md:p-14 lg:p-20 relative flex flex-col shadow-2xl overflow-hidden">

                            <div className="absolute top-0 right-0 p-8">
                                <Terminal size={20} className="text-white/5" />
                            </div>

                            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col h-full space-y-12">
                                {/* Row 1: Identity */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-4 group">
                                        <label className={`text-[10px] font-mono uppercase tracking-[0.4em] transition-all duration-300 ${focusedField === 'name' ? 'text-blue-400 translate-x-1' : 'text-gray-600'}`}>
                                            {t.form.name}
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                placeholder={t.form.name_placeholder}
                                                onFocus={() => setFocusedField('name')}
                                                onBlur={() => setFocusedField(null)}
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-white/[0.01] border border-white/5 rounded-2xl px-6 py-4 text-lg font-bold text-white placeholder:text-gray-800 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/[0.01] transition-all"
                                            />
                                            {focusedField === 'name' && (
                                                <motion.div layoutId="input-glow" className="absolute -inset-0.5 bg-blue-500/10 rounded-2xl blur-sm pointer-events-none" />
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-4 group">
                                        <label className={`text-[10px] font-mono uppercase tracking-[0.4em] transition-all duration-300 ${focusedField === 'email' ? 'text-blue-400 translate-x-1' : 'text-gray-600'}`}>
                                            {t.form.email}
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                placeholder={t.form.email_placeholder}
                                                onFocus={() => setFocusedField('email')}
                                                onBlur={() => setFocusedField(null)}
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-white/[0.01] border border-white/5 rounded-2xl px-6 py-4 text-lg font-bold text-white placeholder:text-gray-800 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/[0.01] transition-all"
                                            />
                                            {focusedField === 'email' && (
                                                <motion.div layoutId="input-glow" className="absolute -inset-0.5 bg-blue-500/10 rounded-2xl blur-sm pointer-events-none" />
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Row 2: Strategy */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-4 group">
                                        <label className={`text-[10px] font-mono uppercase tracking-[0.4em] transition-all duration-300 ${focusedField === 'sector' ? 'text-indigo-400 translate-x-1' : 'text-gray-600'}`}>
                                            {t.form.sector}
                                        </label>
                                        <select
                                            name="sector"
                                            required
                                            onFocus={() => setFocusedField('sector')}
                                            onBlur={() => setFocusedField(null)}
                                            value={formData.sector}
                                            onChange={handleChange}
                                            className="w-full bg-white/[0.01] border border-white/5 rounded-2xl px-6 py-4 text-base font-bold text-white focus:outline-none focus:border-indigo-500/50 appearance-none cursor-pointer group-hover:bg-white/[0.03] transition-all"
                                        >
                                            <option value="" disabled className="text-gray-500 bg-[#050505]">{t.form.sector_placeholder}</option>
                                            {t.sectors.map((s, i) => (
                                                <option key={i} value={s} className="bg-[#0a0a0a] text-gray-300">{s}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="space-y-4 group">
                                        <label className={`text-[10px] font-mono uppercase tracking-[0.4em] transition-all duration-300 ${focusedField === 'service' ? 'text-indigo-400 translate-x-1' : 'text-gray-600'}`}>
                                            {t.form.service}
                                        </label>
                                        <select
                                            name="service"
                                            required
                                            onFocus={() => setFocusedField('service')}
                                            onBlur={() => setFocusedField(null)}
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full bg-white/[0.01] border border-white/5 rounded-2xl px-6 py-4 text-base font-bold text-white focus:outline-none focus:border-indigo-500/50 appearance-none cursor-pointer group-hover:bg-white/[0.03] transition-all"
                                        >
                                            <option value="" disabled className="text-gray-500 bg-[#050505]">{t.form.service_placeholder}</option>
                                            {t.services.map((s, i) => (
                                                <option key={i} value={s} className="bg-[#0a0a0a] text-gray-300">{s}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Row 3: Transmission Content */}
                                <div className="space-y-4 group">
                                    <label className={`text-[10px] font-mono uppercase tracking-[0.4em] transition-all duration-300 ${focusedField === 'message' ? 'text-blue-500 translate-x-1' : 'text-gray-600'}`}>
                                        {t.form.message}
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder={t.form.message_placeholder}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-white/[0.01] border border-white/5 rounded-3xl p-8 text-lg font-medium text-white placeholder:text-gray-800 focus:outline-none focus:border-blue-500/30 transition-all resize-none shadow-inner"
                                    />
                                </div>

                                {/* Submission & Disclaimer */}
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={status !== 'idle'}
                                        className="group relative w-full overflow-hidden rounded-full py-8 bg-blue-500 text-white font-black text-[10px] tracking-[0.4em] uppercase transition-all hover:scale-[1.01] active:scale-[0.98] disabled:opacity-50 mb-10 shadow-2xl shadow-blue-500/20"
                                    >
                                        <div className="relative z-10 flex items-center justify-center gap-4">
                                            <AnimatePresence mode="wait">
                                                {status === 'idle' && (
                                                    <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                                                        {t.form.submit_idle}
                                                        <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                    </motion.div>
                                                )}
                                                {status === 'loading' && (
                                                    <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-4">
                                                        <Activity className="animate-pulse" size={16} />
                                                        {t.form.submit_loading}
                                                    </motion.div>
                                                )}
                                                {status === 'success' && (
                                                    <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-3 text-white">
                                                        <ShieldCheck size={20} />
                                                        {t.form.submit_success}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        {/* Scanning Line Animation */}
                                        <motion.div
                                            initial={{ top: "-100%" }}
                                            animate={{ top: "100%" }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                            className="absolute left-0 w-full h-[1px] bg-white opacity-20 pointer-events-none"
                                        />
                                    </button>

                                    <div className="px-6 md:px-12">
                                        <div className="flex items-center gap-3 mb-4 opacity-30 justify-center">
                                            <div className="h-px flex-grow bg-white/20" />
                                            <Lock size={12} className="text-gray-500" />
                                            <div className="h-px flex-grow bg-white/20" />
                                        </div>
                                        <p className="text-gray-600 text-xs text-center font-medium italic leading-relaxed">
                                            {t.disclaimer}
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
