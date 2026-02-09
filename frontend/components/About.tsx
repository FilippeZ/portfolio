"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { skills, experience, education, softSkills } from "../data/content";
import { Briefcase, GraduationCap, Wrench, ChevronRight, Award } from "lucide-react";

export default function About() {
    const [activeTab, setActiveTab] = useState<"skills" | "experience" | "education">("skills");

    const tabVariants = {
        hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        },
        exit: {
            opacity: 0,
            y: -20,
            filter: "blur(10px)",
            transition: { duration: 0.3 }
        }
    };

    return (
        <section id="about" className="py-24 lg:py-32 bg-[#050505] text-white relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none"></div>
            <div className="absolute -left-[20%] top-[20%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
                {/* Left Column: Title & Nav sticky */}
                <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0"
                    >
                        <span className="flex items-center gap-2 text-blue-500 font-mono text-xs uppercase tracking-[0.2em] mb-4">
                            <span className="w-8 h-[1px] bg-blue-500"></span>
                            My Professional Journey
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">
                            Beyond the<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Code.</span>
                        </h2>

                        <nav className="flex flex-col gap-3 w-full max-w-sm">
                            {[
                                { id: "skills", label: "Skills & Tools", icon: Wrench, desc: "Technical Arsenal" },
                                { id: "experience", label: "Certifications & Events", icon: Award, desc: "Continuous Learning" },
                                { id: "education", label: "Education & Experience", icon: Briefcase, desc: "Professional Background" },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={`group relative flex items-center gap-4 p-4 rounded-xl transition-all duration-300 border text-left overflow-hidden ${activeTab === tab.id
                                        ? "bg-white/10 border-white/20 text-white shadow-[0_0_30px_rgba(0,0,0,0.3)]"
                                        : "bg-transparent border-transparent text-gray-500 hover:text-gray-300 hover:bg-white/5"
                                        }`}
                                >
                                    <div className={`relative z-10 p-3 rounded-lg transition-colors ${activeTab === tab.id ? "bg-blue-600 text-white" : "bg-white/5 text-gray-500 group-hover:text-white"}`}>
                                        <tab.icon size={20} />
                                    </div>
                                    <div className="relative z-10 flex flex-col">
                                        <span className={`font-bold text-sm tracking-wide ${activeTab === tab.id ? "text-white" : "group-hover:text-white"}`}>{tab.label}</span>
                                        <span className="text-[10px] uppercase tracking-wider opacity-60">{tab.desc}</span>
                                    </div>
                                    {activeTab === tab.id && (
                                        <motion.div
                                            layoutId="activeTabGlow"
                                            className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"
                                        />
                                    )}
                                </button>
                            ))}
                        </nav>

                        {/* Decoration */}
                        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-sm hidden lg:block">
                            <p className="text-gray-400 text-sm leading-relaxed italic">
                                "Obsessed with quality, driven by innovation, and grounded in engineering principles."
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Content Area */}
                <div className="lg:col-span-8 min-h-[600px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            variants={tabVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="w-full"
                        >
                            {/* TAB: SKILLS */}
                            {activeTab === "skills" && (
                                <div className="space-y-12">
                                    <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">Technical Arsenal</h3>
                                            <p className="text-gray-400 text-sm mt-1">Tools forming my digital craft.</p>
                                        </div>
                                        <Wrench className="text-blue-500 opacity-20" size={48} />
                                    </div>

                                    {/* Categorized Skills */}
                                    <div className="space-y-12">
                                        {Array.from(new Set(skills.map(s => s.category))).map((category, catIndex) => (
                                            <motion.div
                                                key={category}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: catIndex * 0.1 }}
                                            >
                                                <h4 className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-6 border-l-2 border-blue-500 pl-3">
                                                    {category}
                                                </h4>
                                                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
                                                    {skills.filter(s => s.category === category).map((skill, i) => (
                                                        <motion.div
                                                            key={skill.name}
                                                            initial={{ opacity: 0, scale: 0.9 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: 0.2 + (i * 0.05) }}
                                                            className="group flex flex-col items-center justify-center p-4 bg-white/[0.03] rounded-xl border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden aspect-square"
                                                        >
                                                            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                                                            <div className="relative z-10 w-10 h-10 mb-3 filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110">
                                                                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                                                            </div>
                                                            <span className="relative z-10 text-[10px] uppercase font-bold text-gray-400 group-hover:text-white transition-colors text-center">{skill.name}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="mt-16">
                                        <h4 className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-6 border-l-2 border-blue-500 pl-3">Soft Skills & Methodologies</h4>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
                                            {softSkills.map((skill, i) => (
                                                <motion.div
                                                    key={skill.name}
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.2 + (i * 0.05) }}
                                                    className="group flex flex-col items-center justify-center p-4 bg-white/[0.03] rounded-xl border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden aspect-square"
                                                >
                                                    <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                                                    <div className="relative z-10 w-10 h-10 mb-3 filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110">
                                                        <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                                                    </div>
                                                    <span className="relative z-10 text-[10px] uppercase font-bold text-gray-400 group-hover:text-white transition-colors text-center">{skill.name}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* TAB: EXPERIENCE (Using experience data which is Certs/Events) */}
                            {activeTab === "experience" && (
                                <div className="space-y-8">
                                    <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">Certifications & Events</h3>
                                            <p className="text-gray-400 text-sm mt-1">Continuous professional development milestones.</p>
                                        </div>
                                        <Award className="text-blue-500 opacity-20" size={48} />
                                    </div>

                                    <div className="relative pl-8 md:pl-0">
                                        {/* Timeline Line */}
                                        <div className="absolute left-[3px] md:left-[50%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500 via-white/10 to-transparent"></div>

                                        {experience.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.15 }}
                                                className={`relative flex flex-col md:flex-row gap-8 mb-12 group ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                                            >
                                                {/* Timeline Dot */}
                                                <div className="absolute left-[-4px] md:left-[50%] md:-translate-x-1/2 top-6 w-[15px] h-[15px] bg-[#050505] border-2 border-blue-500 rounded-full z-10 group-hover:scale-125 group-hover:bg-blue-500 transition-all duration-300 shadow-[0_0_10px_rgba(0,102,255,0.5)]"></div>

                                                {/* Card */}
                                                <div className="flex-1 md:w-[calc(50%-2rem)]">
                                                    <div className="p-6 md:p-8 bg-white/[0.03] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-300 group-hover:shadow-2xl">
                                                        <div className="flex items-center justify-between mb-4">
                                                            <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                                                                {item.type}
                                                            </span>
                                                            <span className="text-xs font-mono text-gray-500">{item.date}</span>
                                                        </div>
                                                        <h4 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                                                        <div className="text-sm font-medium text-gray-400 mb-4">{item.org}</div>

                                                        {item.image && (
                                                            <div className="w-full h-40 relative rounded-lg overflow-hidden mb-4 border border-white/5">
                                                                <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                                            </div>
                                                        )}

                                                        <p className="text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* Empty space for the other side */}
                                                <div className="flex-1 hidden md:block"></div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* TAB: EDUCATION (Using education data which is Edu/Work) */}
                            {activeTab === "education" && (
                                <div className="space-y-8">
                                    <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">Education & Experience</h3>
                                            <p className="text-gray-400 text-sm mt-1">Academic foundation and professional career.</p>
                                        </div>
                                        <Briefcase className="text-blue-500 opacity-20" size={48} />
                                    </div>

                                    <div className="grid gap-6">
                                        {education.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="group relative flex items-start gap-6 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all overflow-hidden"
                                            >
                                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                                    <Award size={80} />
                                                </div>

                                                <div className="relative w-16 h-16 flex-shrink-0 rounded-xl bg-white/10 overflow-hidden border border-white/10">
                                                    <Image src={item.image} alt={item.org} fill className="object-cover grayscale group-hover:grayscale-0 transition-all" />
                                                </div>

                                                <div className="relative z-10 flex-1">
                                                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                                                        <div>
                                                            <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h4>
                                                            <div className="text-sm text-gray-400">{item.org}</div>
                                                        </div>
                                                        <span className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded">{item.date}</span>
                                                    </div>
                                                    <div className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-white/5 text-gray-400 rounded mb-3">
                                                        {item.type}
                                                    </div>
                                                    <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
