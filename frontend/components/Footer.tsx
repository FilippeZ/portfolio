"use client";
import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, ArrowUp, ShieldCheck } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative pt-32 pb-12 border-t border-white/5 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[800px] h-[400px] bg-blue-900/10 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-indigo-900/10 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute inset-0 clinical-grid opacity-20 pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                    {/* Brand Identity - Left Col */}
                    <div className="lg:col-span-6 space-y-8">
                        <div>
                            <Link href="/" className="inline-block group mb-6 relative">
                                <span className="text-3xl md:text-5xl font-black text-white tracking-tighter group-hover:text-blue-400 transition-colors duration-500 block">
                                    FILIPPOS P. ZYGOURIS
                                </span>
                                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-700 ease-out mt-1" />
                            </Link>
                            <p className="text-gray-400 text-base lg:text-lg font-light leading-relaxed max-w-md">
                                Architecting the institutional survival of AI systems. <span className="text-gray-300 font-medium">Bridging the gap between Innovation and Regulation.</span>
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-4">
                            {[
                                { icon: Github, href: "https://github.com/FilippeZ", label: "GitHub" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/filippos-zygouris-b732431b0/", label: "LinkedIn" },
                                { icon: Twitter, href: "https://twitter.com", label: "Twitter" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <social.icon size={20} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation - Middle Col */}
                    <div className="lg:col-span-3 lg:col-start-8">
                        <h4 className="text-xs font-mono font-black text-white uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                            <span className="w-4 h-px bg-blue-500/50"></span>
                            Navigation
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Framework', href: '#expertise' },
                                { name: 'Projects', href: '#portfolio' },
                                { name: 'Arsenal', href: '#about' },
                                { name: 'Credentials', href: '#authority' },
                                { name: 'Testimonials', href: '#testimonials' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white text-sm font-medium transition-all duration-300 flex items-center gap-3 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-blue-500 transition-colors" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* System Status - Right Col */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xs font-mono font-black text-white uppercase tracking-[0.3em] mb-8 flex items-center gap-3 whitespace-nowrap">
                            <span className="w-4 h-px bg-indigo-500/50"></span>
                            System Status
                        </h4>

                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 relative group hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 overflow-hidden min-w-[240px]">
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700">
                                <ShieldCheck size={120} className="text-blue-500/5 rotate-12" />
                            </div>

                            <div className="relative z-10 flex flex-col gap-5">
                                <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md rounded-full px-4 py-2 w-max border border-white/5 shadow-[0_0_15px_rgba(34,197,94,0.1)] group-hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-shadow">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                                    </span>
                                    <span className="text-gray-200 text-xs font-bold tracking-wide">All Systems Operational</span>
                                </div>

                                <div className="space-y-1">
                                    <div className="flex justify-between items-center text-xs text-gray-500 font-mono">
                                        <span>Build Version</span>
                                        <span className="text-blue-400 font-medium">2026.1.0</span>
                                    </div>
                                    <div className="h-px w-full bg-white/5 my-2"></div>
                                    <div className="flex justify-between items-center text-xs text-gray-500 font-mono">
                                        <span>Last Build</span>
                                        <span className="text-gray-400">Feb 2026</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 relative">
                    <p className="text-gray-500 text-xs md:text-sm font-medium order-2 md:order-1 flex items-center gap-2">
                        &copy; 2026 <span className="text-gray-300">Filippos Zygouris.</span> All Rights Reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="order-1 md:order-2 flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-blue-500/30 text-xs font-bold text-white uppercase tracking-[0.2em] transition-all duration-300 group shadow-lg"
                    >
                        Back to Top
                        <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all">
                            <ArrowUp size={12} className="text-blue-400 group-hover:text-white group-hover:-translate-y-0.5 transition-all" />
                        </span>
                    </button>

                    {/* Bottom Edge Glow */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
                </div>
            </div>
        </footer>
    );
}
