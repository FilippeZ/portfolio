import React from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Immediate loading for above the fold
import StrategicValue from "@/components/StrategicValue";
import Expertise from "@/components/Expertise";

// Lazy loading for below the fold
const Authority = dynamic(() => import("@/components/Authority"));
const HighValueMenu = dynamic(() => import("@/components/HighValueMenu"));
const About = dynamic(() => import("@/components/About"));
const Portfolio = dynamic(() => import("@/components/Portfolio"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Evolution = dynamic(() => import("@/components/Evolution"));
const StrategicSectors = dynamic(() => import("@/components/StrategicSectors"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
    return (
        <div className="relative min-h-screen flex flex-col bg-background-dark text-white font-display selection:bg-primary selection:text-white overflow-x-hidden">
            <Header />
            <main className="flex-grow flex flex-col items-center w-full">
                <Hero />
                <StrategicValue />
                <Expertise />
                <Authority />
                <HighValueMenu />
                <About />
                <React.Suspense fallback={<div className="h-96 flex items-center justify-center text-gray-500 font-mono text-sm tracking-widest uppercase">Loading Portfolio...</div>}>
                    <Portfolio />
                </React.Suspense>
                <Testimonials />
                <Evolution />
                <StrategicSectors />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
