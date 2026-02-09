"use client";
import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-[#050505] pt-20 pb-10 border-t border-white/5 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-900/20 blur-[100px] pointer-events-none rounded-full opacity-50"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <Link href="/" className="block mb-6 group">
                            <span className="text-2xl font-black text-white tracking-tight group-hover:text-blue-500 transition-colors">
                                FILIPPOS Z.
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
                            Architecting intelligent systems and data-driven solutions for the future.
                            Building the bridge between complex algorithms and human impact.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300">
                                <Github size={18} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group">
                                        <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 h-[1px] bg-blue-500"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">System Status</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-gray-400 text-sm">All Systems Operational</span>
                            </div>
                            <p className="text-gray-500 text-xs font-mono">
                                Version 2026.1.0<br />
                                Last Build: {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs text-center md:text-left">
                        &copy; 2026 Filippos Zygouris. All Rights Reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest hover:text-blue-500 transition-colors group"
                    >
                        Back to Top
                        <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
