"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, User, ArrowRight, ShieldCheck, AlertCircle, Linkedin } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import FrameSequencer from "@/components/FrameSequencer";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        // Simulated auth delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Use hardcoded credentials for now as per plan
        if (username === "admin" && password === "portfolio2026") {
            // Set cookie (simple browser side for now, middleware will check it)
            document.cookie = "auth=true; path=/; SameSite=Strict";
            router.push("/");
            router.refresh();
        } else {
            setError("Invalid credentials. Please try again.");
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-start justify-center md:justify-start pt-16 sm:pt-24 md:pt-32 relative overflow-hidden font-display selection:bg-primary selection:text-white">
            {/* Background Animation */}
            <div className="absolute inset-0 z-0 bg-black">
                <FrameSequencer totalFrames={80} fps={12} />
                <div className="absolute inset-0 bg-black/40 md:bg-black/20" />
            </div>

            {/* Background elements - kept for depth */}
            <div className="absolute top-[-10%] left-[-10%] w-[60%] md:w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[80px] md:blur-[120px] z-[1]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] md:w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[80px] md:blur-[120px] z-[1]" />

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-lg p-6 sm:p-8 md:pl-24 lg:pl-32 z-10"
            >
                <div className="text-left mb-8 md:mb-10">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tighter mb-3 leading-[1.1] uppercase bg-clip-text text-transparent bg-gradient-to-tr from-white to-white/60">
                        Welcome to my <br className="sm:hidden" /> Portfolio Access Portal
                    </h1>
                    <p className="text-blue-400/80 text-[10px] sm:text-xs font-mono tracking-[0.2em] sm:tracking-[0.4em] uppercase font-bold">
                        Please authenticate to view the portfolio
                    </p>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-50" />

                    <form onSubmit={handleLogin} className="space-y-4 sm:space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest px-1">Username</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
                                    <User className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Enter username"
                                    className="w-full bg-white/5 border border-white/10 text-white rounded-2xl py-3.5 sm:py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 outline-none transition-all placeholder:text-gray-600 text-sm sm:text-base"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest px-1">Password</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-purple-500 transition-colors">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full bg-white/5 border border-white/10 text-white rounded-2xl py-3.5 sm:py-4 pl-12 pr-4 focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500 outline-none transition-all placeholder:text-gray-600 text-sm sm:text-base"
                                    required
                                />
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-sm"
                                >
                                    <AlertCircle className="w-4 h-4 shrink-0" />
                                    <span>{error}</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-3.5 sm:py-4 rounded-2xl shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden relative"
                        >
                            <AnimatePresence mode="wait">
                                {isLoading ? (
                                    <motion.div
                                        key="loading"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex items-center gap-2"
                                    >
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        <span>Authenticating...</span>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="content"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex items-center gap-2"
                                    >
                                        <span>Enter Portfolio</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </form>

                    <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10 flex flex-col items-center gap-4">
                        <div className="text-center space-y-1">
                            <p className="text-gray-400 text-[12px] sm:text-[13px] font-medium">
                                Don&apos;t have the access credentials?
                            </p>
                            <p className="text-gray-500 text-[10px] sm:text-[11px] font-light">
                                Send me a message on LinkedIn to request access.
                            </p>
                        </div>
                        <motion.a
                            href="https://www.linkedin.com/in/filippos-paraskevas-zygouris-8a88a8266/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, translateY: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 rounded-2xl bg-[#0077b5] hover:bg-[#0077b5]/90 text-white text-xs sm:text-sm font-bold shadow-xl shadow-[#0077b5]/20 transition-all group"
                        >
                            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 fill-white group-hover:scale-110 transition-transform" />
                            <span>Contact on LinkedIn</span>
                        </motion.a>
                    </div>
                </div>

                <p className="text-center mt-6 sm:mt-8 text-gray-500 text-[10px] tracking-widest uppercase">
                    &copy; 2026 Filippos Paraskevas Zygouris &bull; Secured with SHA-256
                </p>
            </motion.div>
        </div>
    );
}
