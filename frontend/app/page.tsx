import React from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";

const Authority = dynamic(() => import("@/components/Authority"));
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
    return (
        <div className="relative min-h-screen flex flex-col bg-background-dark text-white font-display selection:bg-primary selection:text-white overflow-x-hidden">
            {/* Global Unifying Ambient Layer */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 clinical-grid opacity-30"></div>
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[180px]"></div>
                <div className="absolute top-3/4 left-1/3 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[180px]"></div>
            </div>

            <Header />
            <main className="flex-grow flex flex-col items-center w-full relative z-10">
                {/* HERO */}
                <Hero />

                {/* Connector Beam 1 */}
                <div className="w-full flex flex-col items-center justify-center my-2 py-4 z-20 pointer-events-none">
                    <div className="w-px h-16 bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-500/40 blur-[2px]"></div>
                </div>

                {/* 1. FRAMEWORK (id="expertise") */}
                <Expertise />

                {/* Connector Beam 2 */}
                <div className="w-full flex flex-col items-center justify-center my-2 py-4 z-20 pointer-events-none">
                    <div className="w-px h-16 bg-gradient-to-b from-blue-500/40 via-indigo-500/20 to-transparent"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-500/40 blur-[2px]"></div>
                </div>

                {/* 2. PROJECTS (id="portfolio") */}
                <Portfolio />

                {/* Connector Beam 3 */}
                <div className="w-full flex flex-col items-center justify-center my-2 py-4 z-20 pointer-events-none">
                    <div className="w-px h-16 bg-gradient-to-b from-indigo-500/40 via-blue-500/20 to-transparent"></div>
                    <div className="w-2 h-2 rounded-full bg-indigo-500/40 blur-[2px]"></div>
                </div>

                {/* 3. ARSENAL (id="about") */}
                <About />

                {/* Connector Beam 4 */}
                <div className="w-full flex flex-col items-center justify-center my-2 py-4 z-20 pointer-events-none">
                    <div className="w-px h-16 bg-gradient-to-b from-blue-500/40 via-blue-400/20 to-transparent"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-500/40 blur-[2px]"></div>
                </div>

                {/* 4. CREDENTIALS (id="authority") */}
                <Authority />

                {/* Connector Beam 5 */}
                <div className="w-full flex flex-col items-center justify-center my-2 py-4 z-20 pointer-events-none">
                    <div className="w-px h-16 bg-gradient-to-b from-blue-400/40 via-indigo-500/20 to-transparent"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-400/40 blur-[2px]"></div>
                </div>

                {/* 5. TESTIMONIALS (id="testimonials") */}
                <Testimonials />

                {/* Connector Beam 6 */}
                <div className="w-full flex flex-col items-center justify-center my-2 py-4 z-20 pointer-events-none">
                    <div className="w-px h-16 bg-gradient-to-b from-indigo-500/40 via-blue-500/20 to-transparent"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-500/40 blur-[2px]"></div>
                </div>

                {/* 6. LET'S TALK (id="contact") */}
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
