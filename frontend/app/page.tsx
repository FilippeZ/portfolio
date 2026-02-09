import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="relative min-h-screen flex flex-col bg-background-dark text-white font-display selection:bg-primary selection:text-white overflow-x-hidden">
            <Header />
            <main className="flex-grow flex flex-col items-center w-full">
                <Hero />
                <Expertise />
                <About />
                <Portfolio />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
