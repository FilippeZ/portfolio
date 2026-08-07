"use client";
import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { locales } from "@/data/locales";
import LanguageSwitcher from "@/components/LanguageSwitcher";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut } from "lucide-react";

import Image from "next/image";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("expertise");
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        document.cookie = "auth=; path=/; max-age=0; SameSite=Strict";
        router.push("/login");
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sectionIds = ["expertise", "portfolio", "degree", "about", "authority", "testimonials"];
            const scrollPosition = window.scrollY + 250;
            for (const id of sectionIds) {
                const elem = document.getElementById(id);
                if (elem) {
                    const top = elem.offsetTop;
                    const height = elem.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        if (elem) {
            setActiveSection(targetId);
            elem.scrollIntoView({ behavior: "smooth" });
            setMobileMenuOpen(false);
        } else if (href === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMobileMenuOpen(false);
        } else {
            window.location.href = href;
        }
    };

    const { language } = useLanguage();
    const t = locales[language];

    const navLinks = [
        { id: "expertise", name: t.nav.framework, href: "/#expertise" },
        { id: "portfolio", name: t.nav.portfolio, href: "/#portfolio" },
        { id: "degree", name: t.nav.degree || "Degree Journey", href: "/#degree" },
        { id: "about", name: t.nav.about, href: "/#about" },
        { id: "authority", name: t.nav.authority, href: "/#authority" },
        { id: "testimonials", name: t.nav.testimonials, href: "/#testimonials" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-[#030303]/70 backdrop-blur-xl border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "bg-transparent py-8"
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
                {/* LOGO */}
                <Link href="/" className="flex items-center gap-4 group relative z-50">
                    <div className="relative w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <Image
                            src="/resources/img/home_logo_bg_hero.png"
                            alt="Filippos Zygouris Logo"
                            fill
                            className="object-contain drop-shadow-md group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-500 relative z-10"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-xs sm:text-sm md:text-base font-black tracking-widest text-white uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-300 transition-all duration-300">
                            FILIPPOS P. ZYGOURIS
                        </h1>
                        <span className="text-[9px] text-blue-500/80 font-mono tracking-[0.3em] uppercase hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0">AI ENGINEER</span>
                    </div>
                </Link>

                {/* DESKTOP NAVIGATION */}
                <motion.nav
                    initial={{ opacity: 0, y: -15, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="hidden xl:flex items-center gap-0.5 2xl:gap-1 bg-[#0a0f1c]/60 p-1 2xl:p-1.5 rounded-full border border-white/10 backdrop-blur-xl shadow-[0_0_25px_rgba(59,130,246,0.08)]"
                >
                    {navLinks.map((link, idx) => {
                        const isActive = activeSection === link.id;
                        return (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.15 + idx * 0.05 }}
                            >
                                <MagneticLink>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleScroll(e, link.href)}
                                        className={`relative px-3.5 py-2 2xl:px-5 2xl:py-2.5 text-[11px] 2xl:text-xs font-bold uppercase tracking-wider 2xl:tracking-widest transition-all duration-300 rounded-full group overflow-hidden whitespace-nowrap ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`}
                                    >
                                        <span className="relative z-10">{link.name}</span>
                                        {isActive ? (
                                            <div className="absolute inset-0 bg-white/10 rounded-full border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] z-0"></div>
                                        ) : (
                                            <div className="absolute inset-0 bg-blue-500/15 rounded-full opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 z-0"></div>
                                        )}
                                    </a>
                                </MagneticLink>
                            </motion.div>
                        );
                    })}
                </motion.nav>

                {/* CONNECT BUTTON & MOBILE TOGGLE */}
                <div className="flex items-center gap-3 2xl:gap-4">
                    <LanguageSwitcher />
                    <button
                        onClick={handleLogout}
                        title="Logout"
                        className="hidden xl:flex items-center gap-2 px-3 py-2 text-gray-400 hover:text-red-400 transition-colors duration-200 text-xs font-mono tracking-widest uppercase group"
                    >
                        <LogOut className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="hidden xl:block"
                    >
                        <a
                            href="/#contact"
                            onClick={(e) => handleScroll(e, "/#contact")}
                            className="group relative px-5 py-2.5 2xl:px-6 2xl:py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-black text-xs tracking-[0.15em] 2xl:tracking-[0.2em] uppercase overflow-hidden hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 flex items-center justify-center whitespace-nowrap"
                        >
                            <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">{t.nav.contact}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                    </motion.div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="xl:hidden relative z-50 w-10 h-10 flex items-center justify-center text-white"
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
                        className="fixed inset-0 z-40 bg-[#030303]/95 backdrop-blur-2xl flex flex-col items-center justify-center lg:hidden"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
                        <div className="absolute inset-0 clinical-grid opacity-30"></div>

                        <nav className="flex flex-col items-center gap-8 relative z-10 w-full px-6">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                    className="w-full text-center border-b border-white/5 pb-4"
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-3xl font-black text-white/90 uppercase tracking-widest hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-300 transition-all duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8 w-full"
                            >
                                <a
                                    href="/#contact"
                                    onClick={(e) => handleScroll(e, "/#contact")}
                                    className="w-full relative px-8 py-5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black text-sm tracking-[0.2em] uppercase overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.2)] flex items-center justify-center"
                                >
                                    {t.nav.contact}
                                </a>
                            </motion.div>
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
