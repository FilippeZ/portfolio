"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { skills, experience, education, softSkills } from "../data/content";
import { Briefcase, Award, Wrench, ChevronRight, Activity, Zap, Shield, Globe, Lock, Cpu, Server, Radio, Users } from "lucide-react";

export default function About() {
    const [activeTab, setActiveTab] = useState<"skills" | "experience" | "education">("skills");

    const tabVariants = {
        hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }
        },
        exit: {
            opacity: 0,
            y: -20,
            filter: "blur(10px)",
            transition: { duration: 0.3 }
        }
    };

    // 11-Category Technical Arsenal with Mapped Tools
    // Text descriptions removed for a cleaner, high-impact look
    const technicalArsenal = [
        {
            category: "1. Core AI & Generative Architectures",
            focus: "The Design",
            icon: Zap,
            skills: [
                { name: "LangGraph", icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" }, // LangChain Logo
                { name: "CrewAI", icon: "https://avatars.githubusercontent.com/u/150600495?s=200&v=4" }, // CrewAI Logo
                { name: "RAG", icon: "https://cdn-icons-png.flaticon.com/512/12128/12128882.png" }, // Search/Doc AI generic
                { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
                { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
                { name: "XAI (SHAP/LIME)", icon: "https://cdn-icons-png.flaticon.com/512/10006/10006733.png" }, // Explainable/Brain generic
            ]
        },
        {
            category: "2. Deep Engineering, Data Science & Mathematics",
            focus: "The Engine",
            icon: Cpu,
            skills: [
                { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
                { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
                { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
                { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
                { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
                { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
                { name: "Mathematics", icon: "https://cdn-icons-png.flaticon.com/512/4023/4023094.png" }, // Math generic
            ]
        },
        {
            category: "3. Regulatory Governance & SaMD Compliance",
            focus: "The Shield",
            icon: Shield,
            skills: [
                { name: "EU AI Act", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg" },
                { name: "MDR 2017/745", icon: "https://cdn-icons-png.flaticon.com/512/2830/2830319.png" }, // Medical Document
                { name: "IVDR", icon: "https://cdn-icons-png.flaticon.com/512/3004/3004458.png" }, // Lab/Test
                { name: "GDPR", icon: "https://cdn-icons-png.flaticon.com/512/2091/2091665.png" }, // Privacy Shield
                { name: "PRRC (Art. 15)", icon: "https://cdn-icons-png.flaticon.com/512/3596/3596091.png" }, // Compliance Officer
            ]
        },
        {
            category: "4. International Standards & Quality Management",
            focus: "The Standard",
            icon: Globe,
            skills: [
                { name: "ISO 13485", icon: "https://cdn-icons-png.flaticon.com/512/3254/3254095.png" }, // Quality check
                { name: "ISO 14971", icon: "https://cdn-icons-png.flaticon.com/512/4249/4249079.png" }, // Risk Warning
                { name: "IEC 62304", icon: "https://cdn-icons-png.flaticon.com/512/2885/2885417.png" }, // Software Process
                { name: "Internal Auditing", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135694.png" }, // Audit
            ]
        },
        {
            category: "5. Quality Assurance & V&V",
            focus: "The Validator",
            icon: Activity,
            skills: [
                { name: "V&V Methodology", icon: "https://cdn-icons-png.flaticon.com/512/9637/9637505.png" }, // Checklist
                { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
                { name: "Playwright", icon: "https://cdn.icon-icons.com/icons2/2389/PNG/512/playwright_logo_icon_145295.png" },
                { name: "Cypress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" }, // Fallback to Canva logo as Cypress is not available in devicon/flaticon easily, trying alternative if broken: https://assets.stickpng.com/images/5847f40ecef1014c0b5e488a.png (Cypress logo)
                // Actually let's use a generic testing icon for Cypress if no stable one
                { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
            ]
        },
        {
            category: "6. AI-Specific QA & Reliability Engineering",
            focus: "QE 3.0",
            icon: Lock,
            skills: [
                { name: "Evidently AI", icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" }, // Analysis/Monitoring
                { name: "Bias (Fairness 360)", icon: "https://cdn-icons-png.flaticon.com/512/2275/2275330.png" }, // Equality/Balance
                { name: "Adversarial Testing", icon: "https://cdn-icons-png.flaticon.com/512/3067/3067416.png" }, // Hazard/Attack
                { name: "Risk Assessment", icon: "https://cdn-icons-png.flaticon.com/512/2830/2830206.png" }, // Risk Triangle
            ]
        },
        {
            category: "7. Human Factors & Safety Engineering",
            focus: "The Interface",
            icon: Users,
            skills: [
                { name: "WCAG 2.1", icon: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Wheelchair_symbol.svg" }, // Accessibility
                { name: "KLM / Fitts Law", icon: "https://cdn-icons-png.flaticon.com/512/2554/2554602.png" }, // Stopwatch/Time
                { name: "Root Cause (RCA)", icon: "https://cdn-icons-png.flaticon.com/512/3208/3208726.png" }, // Root/Tree
                { name: "CAPA", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135702.png" }, // Wrench/Fix
            ]
        },
        {
            category: "8. Cloud, Networks & Infrastructure",
            focus: "The Conduit",
            icon: Server,
            skills: [
                { name: "Microsoft Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
                { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
                { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
                { name: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
                { name: "BGP / OSPF", icon: "https://cdn-icons-png.flaticon.com/512/3663/3663273.png" }, // Network/Router
            ]
        },
        {
            category: "9. Hardware & High-Performance Computing (HPC)",
            focus: "The Foundation",
            icon: Radio,
            skills: [
                { name: "NVIDIA DGX", icon: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" },
                { name: "MPI / OpenMP", icon: "https://cdn-icons-png.flaticon.com/512/2103/2103603.png" }, // Parallel/Chip
                { name: "Micro-architectures", icon: "https://cdn-icons-png.flaticon.com/512/3426/3426653.png" }, // Chip
                { name: "Ind. Electronics", icon: "https://cdn-icons-png.flaticon.com/512/2882/2882894.png" }, // Circuit
            ]
        },
        {
            category: "10. Strategic Leadership & EU Policy",
            focus: "The Bridge",
            icon: Globe,
            skills: [
                { name: "MVP Roadmapping", icon: "https://cdn-icons-png.flaticon.com/512/1508/1508889.png" }, // Roadmap
                { name: "RICE / SWOT", icon: "https://cdn-icons-png.flaticon.com/512/3233/3233519.png" }, // Strategy
                { name: "EU Digital Policy", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg" },
                { name: "Ethical AI", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135810.png" }, // Ethics/Check
            ]
        },
        {
            category: "11. Strategic Product Management & Orchestration",
            focus: "The Vision",
            icon: Briefcase,
            skills: [
                { name: "Product Strategy", icon: "https://cdn-icons-png.flaticon.com/512/1055/1055644.png" }, // Strategy
                { name: "Agile / Scrum", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" }, // Jira usually represents Agile well in tech
                { name: "UX Design Thinking", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }, // Figma for UX
                { name: "KPI Analysis", icon: "https://cdn-icons-png.flaticon.com/512/2936/2936725.png" }, // Analytics
            ]
        }
    ];

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
                            {/* TAB: SKILLS - PROFESSIONAL REDESIGN */}
                            {activeTab === "skills" && (
                                <div className="space-y-12">
                                    <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">Technical Arsenal</h3>
                                            <p className="text-gray-400 text-sm mt-1">Tools forming my digital craft.</p>
                                        </div>
                                        <Wrench className="text-blue-500 opacity-20" size={48} />
                                    </div>

                                    {/* Categories Animation Wrapper */}
                                    <div className="space-y-12">
                                        {technicalArsenal.map((category, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, margin: "-100px" }}
                                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                            >
                                                {/* Sleek Category Header */}
                                                <div className="flex items-center gap-4 mb-6 group">
                                                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                                                        <category.icon size={20} className="text-blue-400" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors">
                                                            {category.category.replace(/^[0-9]+\.\s/, "")} {/* Remove numbering for cleaner UI */}
                                                        </h4>
                                                        <span className="text-[10px] font-mono uppercase tracking-widest text-blue-500/60 group-hover:text-blue-400 transition-colors">
                                                            {category.focus}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Professional Grid - No Text, Just Function */}
                                                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 pl-14">
                                                    {category.skills.map((skill, j) => (
                                                        <motion.div
                                                            key={skill.name}
                                                            initial={{ opacity: 0, scale: 0.9 }}
                                                            whileInView={{ opacity: 1, scale: 1 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: 0.1 + (j * 0.03) }}
                                                            whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(59,130,246,0.4)" }}
                                                            className="group/card flex flex-col items-center justify-center p-3 bg-white/[0.03] rounded-lg border border-white/5 transition-all duration-300 relative overflow-hidden aspect-square cursor-default shadow-lg shadow-black/20"
                                                        >
                                                            {/* Hover Glow */}
                                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                                                            <div className="relative z-10 w-9 h-9 mb-2 filter grayscale group-hover/card:grayscale-0 transition-all duration-300 group-hover/card:scale-110">
                                                                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain drop-shadow-md" />
                                                            </div>
                                                            <span className="relative z-10 text-[10px] font-bold text-gray-500 group-hover/card:text-white transition-colors text-center uppercase tracking-tight leading-tight">
                                                                {skill.name}
                                                            </span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Soft Skills Section (Matching Style) */}
                                    <div className="mt-20 pt-10 border-t border-white/10">
                                        <h4 className="flex items-center gap-3 text-lg font-bold text-white mb-8">
                                            <span className="w-8 h-[2px] bg-blue-500"></span>
                                            Soft Skills & Methodologies
                                        </h4>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 pl-11">
                                            {softSkills.map((skill, i) => (
                                                <motion.div
                                                    key={skill.name}
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.03 }}
                                                    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(59,130,246,0.4)" }}
                                                    className="group/card flex flex-col items-center justify-center p-3 bg-white/[0.03] rounded-lg border border-white/5 transition-all duration-300 relative overflow-hidden aspect-square cursor-default shadow-lg shadow-black/20"
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                                                    <div className="relative z-10 w-9 h-9 mb-2 filter grayscale group-hover/card:grayscale-0 transition-all duration-300 group-hover/card:scale-110">
                                                        <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain drop-shadow-md" />
                                                    </div>
                                                    <span className="relative z-10 text-[10px] font-bold text-gray-500 group-hover/card:text-white transition-colors text-center uppercase tracking-tight leading-tight">
                                                        {skill.name}
                                                    </span>
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
