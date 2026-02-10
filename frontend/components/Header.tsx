"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

import Image from "next/image";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        if (elem) {
            elem.scrollIntoView({ behavior: "smooth" });
            setMobileMenuOpen(false);
        } else if (href === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMobileMenuOpen(false);
        } else {
            window.location.href = href;
        }
    };

    const navLinks = [
        { name: "Authority", href: "/#authority" },
        { name: "About", href: "/#about" },
        { name: "Portfolio", href: "/#portfolio" },
        { name: "Testimonials", href: "/#testimonials" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#030303]/80 backdrop-blur-md border-b border-white/5 py-2" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
                {/* LOGO */}
                <Link href="/" className="flex items-center gap-4 group relative z-50">
                    <div className="relative w-14 h-14 flex items-center justify-center transition-all duration-500">
                        <Image
                            src="/resources/img/home_logo_bg_hero.png"
                            alt="Filippos Zygouris Logo"
                            fill
                            className="object-contain opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-500"
                        />
                    </div>
                    <h1 className="text-base font-bold tracking-tight text-white uppercase group-hover:text-primary transition-colors">
                        FILIPPOS P. ZYGOURIS
                    </h1>
                </Link>

                {/* DESKTOP NAVIGATION */}
                <nav className="hidden md:flex items-center gap-2 bg-white/5 p-1.5 rounded-full border border-white/5 backdrop-blur-sm">
                    {navLinks.map((link) => (
                        <MagneticLink key={link.name}>
                            <a
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className={`relative px-5 py-2.5 text-xs font-mono uppercase tracking-wide transition-colors rounded-full ${pathname === link.href ? "text-black bg-white" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
                            >
                                {link.name}
                            </a>
                        </MagneticLink>
                    ))}
                </nav>

                {/* CONNECT BUTTON & MOBILE TOGGLE */}
                <div className="flex items-center gap-4">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="hidden md:block"
                    >
                        <a
                            href="/#contact"
                            onClick={(e) => handleScroll(e, "/#contact")}
                            className="group relative px-8 py-3 rounded-full bg-white text-black font-bold text-xs tracking-widest uppercase overflow-hidden transition-transform hover:scale-105"
                        >
                            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Let's Talk</span>
                            <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </a>
                    </motion.div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center text-white"
                    >
                        <span className={`material-symbols-outlined text-3xl transition-transform duration-300 ${mobileMenuOpen ? "rotate-90" : ""}`}>
                            {mobileMenuOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </div>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-40 bg-[#030303] flex items-center justify-center md:hidden"
                    >
                        <div className="absolute inset-0 bg-[url('/resources/img/grid.svg')] opacity-[0.05]"></div>
                        <nav className="flex flex-col items-center gap-8 relative z-10">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-4xl font-black text-white uppercase tracking-tighter hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

function MagneticLink({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = () => setPosition({ x: 0, y: 0 });

    const { x, y } = position;

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
}
