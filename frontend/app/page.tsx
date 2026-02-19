import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StrategicValue from "@/components/StrategicValue";
import Expertise from "@/components/Expertise";
import Authority from "@/components/Authority";
import HighValueMenu from "@/components/HighValueMenu";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Evolution from "@/components/Evolution";
import Contact from "@/components/Contact";
import StrategicSectors from "@/components/StrategicSectors";
import Footer from "@/components/Footer";

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
                <React.Suspense fallback={<div>Loading Portfolio...</div>}>
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
