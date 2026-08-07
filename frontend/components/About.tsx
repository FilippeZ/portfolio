"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Award, Wrench, ChevronRight, Activity, Zap, Shield, Globe, Lock, Cpu, Server, Radio, Users, GraduationCap, Brain, Database, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { locales } from "@/data/locales";

// Helper to render bold text and handle newlines
const renderFormattedText = (text: string) => {
    if (!text) return null;
    return text.split('\n').map((line, i) => (
        <span key={i}>
            {line.split(/\*\*(.*?)\*\*/g).map((part, j) =>
                j % 2 === 1 ? <strong key={j} className="text-white font-bold">{part}</strong> : part
            )}
            {i < text.split('\n').length - 1 && <br />}
        </span>
    ));
};

export default function About() {
    const { language } = useLanguage();
    const t = locales[language].about;
    const [activeTab, setActiveTab] = useState<"skills" | "experience" | "education" | "languages">("skills");

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
            transition: { duration: 0.3, ease: [0.7, 0, 0.84, 0] as any }
        }
    };

    // 7 Clean Pillars Technical Arsenal Architecture
    const technicalArsenal = [
        {
            category: "1. Agentic AI & Core Architectures",
            focus: "The Brain",
            icon: Brain,
            skills: [
                { label: "Agentic Orchestration", name: "LangGraph, CrewAI & AutoGen", icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
                { label: "Knowledge Integration", name: "LlamaIndex & LangChain", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { label: "Inter-Agent Communication", name: "MCP (Model Context Protocol) & A2A (Agent-to-Agent)", icon: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png" },
                { label: "Information Retrieval", name: "Advanced RAG (Hybrid Search & Reranking)", icon: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png" }
            ]
        },
        {
            category: "2. Data Engineering & Databases",
            focus: "The Memory",
            icon: Database,
            skills: [
                { label: "Vector Databases", name: "Chroma, Qdrant, Pinecone & FAISS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
                { label: "Relational Storage", name: "PostgreSQL (with pgvector for hybrid embeddings) & MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
                { label: "Data Orchestration & Versioning", name: "Scalable Data Pipelines & DVC (Data Version Control)", icon: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png" },
                { label: "High-Throughput Caching", name: "Redis & In-Memory Caching", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" }
            ]
        },
        {
            category: "3. Deep Learning, Hardware & Optimization",
            focus: "The Core",
            icon: Cpu,
            skills: [
                { label: "Hardware Frameworks", name: "NVIDIA DGX (DGX Lab Environments) & Jetson Edge AI", icon: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" },
                { label: "Deep Learning & GPU Compute", name: "PyTorch, CUDA Programming & GPU Compute (C/C++)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
                { label: "Inference Acceleration", name: "vLLM & TensorRT Inference Engines", icon: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" },
                { label: "Model Compression", name: "PEFT / LoRA Fine-Tuning & INT8/INT4 Quantization", icon: "https://cdn-icons-png.flaticon.com/512/4023/4023094.png" }
            ]
        },
        {
            category: "4. GenAIOps & Cloud Infrastructure",
            focus: "The Engine",
            icon: Server,
            skills: [
                { label: "Back-End Development", name: "Python, TypeScript & FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { label: "Containerization & Orchestration", name: "Docker & Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                { label: "Cloud Architecture", name: "Microsoft Azure, AWS & Sovereign Cloud Environments", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
                { label: "Infrastructure as Code & CI/CD", name: "Terraform & GitHub Actions CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" }
            ]
        },
        {
            category: "5. LLMOps, Evaluation & Trustworthy AI",
            focus: "The Validator",
            icon: Activity,
            skills: [
                { label: "Automated Evaluation", name: "RAGAS, TruLens & Promptfoo (LLM-as-a-Judge)", icon: "https://cdn-icons-png.flaticon.com/512/10006/10006733.png" },
                { label: "Observability & Tracking", name: "Langfuse, MLflow & Evidently AI", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135694.png" },
                { label: "Explainable AI (XAI)", name: "SHAP, Captum & LIME", icon: "https://cdn-icons-png.flaticon.com/512/3067/3067416.png" },
                { label: "Safety & Guardrails", name: "Guardrails AI & NeMo Guardrails", icon: "https://cdn-icons-png.flaticon.com/512/2091/2091665.png" }
            ]
        },
        {
            category: "6. HealthTech Compliance & Strategy",
            focus: "The Shield",
            icon: Shield,
            skills: [
                { label: "Regulatory Compliance", name: "EU AI Act, EU MDR (2017/745), GDPR", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg" },
                { label: "Quality & Risk Standards", name: "ISO 13485 (QMS) & ISO 14971 (Risk Management for Medical Devices)", icon: "https://cdn-icons-png.flaticon.com/512/3254/3254095.png" },
                { label: "Responsible AI Methodologies", name: "CRISP-ML(Q) & Ethical AI Frameworks", icon: "https://cdn-icons-png.flaticon.com/512/1535/1535019.png" },
                { label: "Technical Translation", name: "Bridging Deep Engineering with European Policy", icon: "https://cdn-icons-png.flaticon.com/512/2620/2620686.png" }
            ]
        },
        {
            category: "7. Product-Led Execution & Methodologies",
            focus: "The Strategist",
            icon: Users,
            skills: [
                { label: "Product Mindset", name: "Product-Led AI Mindset & High-Agency Problem Solving", icon: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png" },
                { label: "Collaboration & Stakeholder Management", name: "Cross-functional Collaboration", icon: "https://cdn-icons-png.flaticon.com/512/1063/1063196.png" },
                { label: "Project Delivery", name: "Agile & Scrum Orchestration (Certified Scrum Workflow Management)", icon: "https://cdn-icons-png.flaticon.com/512/1063/1063196.png" }
            ]
        }
    ];

    const localizedArsenal = technicalArsenal.map((cat, i) => ({
        ...cat,
        category: t.technical_categories[i]?.category || cat.category,
        focus: t.technical_categories[i]?.focus || cat.focus
    }));

    return (
        <section id="about" className="py-24 lg:py-32 text-white relative overflow-hidden">
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
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500/60" />
                            <span className="font-mono text-blue-400/80 text-xs uppercase tracking-[0.3em] font-medium">
                                {t.subtitle}
                            </span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-black tracking-tight uppercase mb-6 leading-none">
                            {t.title_prefix}{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
                                {t.title_gradient}
                            </span>
                        </h2>

                        <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md font-light italic">
                            &quot;{t.quote}&quot;
                        </p>

                        {/* Navigation Tabs */}
                        <nav className="flex flex-col gap-3 w-full max-w-sm">
                            {[
                                { id: "skills", label: t.tabs.skills.label, icon: Wrench, desc: t.tabs.skills.desc },
                                { id: "education", label: t.tabs.education.label, icon: Briefcase, desc: t.tabs.education.desc },
                                { id: "experience", label: t.tabs.experience.label, icon: Award, desc: t.tabs.experience.desc },
                                { id: "languages", label: t.tabs.languages.label, icon: Globe, desc: t.tabs.languages.desc },
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
                    </motion.div>
                </div>

                {/* Right Column: Content Area */}
                <div className="lg:col-span-8">
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
                                    <div>
                                        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
                                            <div>
                                                <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                                                    {t.technical_arsenal.title}
                                                </h3>
                                                <p className="text-gray-400 text-xs font-mono mt-1">
                                                    {t.technical_arsenal.subtitle}
                                                </p>
                                            </div>
                                            <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-mono text-blue-400">
                                                7 Pillars
                                            </span>
                                        </div>

                                        {/* 7 Clean Pillars Stack */}
                                        <div className="space-y-10">
                                            {localizedArsenal.map((category, i) => (
                                                <motion.div
                                                    key={category.category}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: i * 0.05 }}
                                                >
                                                    {/* Sleek Category Header */}
                                                    <div className="flex items-center gap-4 mb-5 group">
                                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                                                            <category.icon size={20} className="text-blue-400" />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors">
                                                                {category.category.replace(/^[0-9]+\.\s/, "")}
                                                            </h4>
                                                            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-500/60 group-hover:text-blue-400 transition-colors">
                                                                {category.focus}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    {/* Professional 2-Column Grid */}
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:pl-14">
                                                        {category.skills.map((skill, j) => (
                                                            <motion.div
                                                                key={skill.name}
                                                                initial={{ opacity: 0, scale: 0.96 }}
                                                                whileInView={{ opacity: 1, scale: 1 }}
                                                                viewport={{ once: true }}
                                                                transition={{ delay: 0.04 * j }}
                                                                whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.06)", borderColor: "rgba(59,130,246,0.4)" }}
                                                                className="group/card flex items-start gap-3.5 p-4 bg-white/[0.03] rounded-xl border border-white/5 transition-all duration-300 relative overflow-hidden cursor-default shadow-lg shadow-black/20"
                                                            >
                                                                {/* Hover Glow */}
                                                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                                                                <div className="relative z-10 w-9 h-9 shrink-0 flex items-center justify-center rounded-lg bg-black/40 border border-white/10 p-1.5 transition-all duration-300 group-hover/card:scale-110 mt-0.5">
                                                                    <Image src={skill.icon} alt={skill.label || skill.name} width={28} height={28} className="w-full h-full object-contain drop-shadow-md" loading="lazy" />
                                                                </div>
                                                                <div className="flex flex-col min-w-0 relative z-10">
                                                                    {skill.label && (
                                                                        <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wider mb-0.5">
                                                                            {skill.label}
                                                                        </span>
                                                                    )}
                                                                    <span className="text-xs font-semibold text-slate-200 group-hover/card:text-white transition-colors leading-relaxed">
                                                                        {skill.name}
                                                                    </span>
                                                                </div>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* TAB: CERTIFICATIONS & EVENTS (2 DISTINCT CATEGORIES) */}
                            {activeTab === "experience" && (
                                <div className="space-y-16">
                                    {/* Section Header */}
                                    <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white tracking-tight">{t.certifications.title}</h3>
                                            <p className="text-gray-400 text-sm mt-1">{t.certifications.subtitle}</p>
                                        </div>
                                        <Award className="text-blue-500 opacity-20" size={48} />
                                    </div>

                                    {/* CATEGORY 1: OFFICIAL AI CERTIFICATIONS & CREDENTIALS */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                                            <h4 className="text-xl font-bold text-white tracking-tight">
                                                {language === "el" ? "Επίσημες Πιστοποιήσεις & Διαπιστευτήρια" : "Official AI Certifications & Credentials"}
                                            </h4>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {t.certifications_list.map((item: any, index: number) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#090d16]/90 border border-white/10 hover:border-blue-500/50 hover:bg-[#0c1322] hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] transition-all duration-300 overflow-hidden"
                                                >
                                                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                                    <div>
                                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                                                            <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/30">
                                                                {item.type}
                                                            </span>
                                                            <span className="text-xs font-mono text-gray-400">{item.date}</span>
                                                        </div>

                                                        <div className="flex items-start gap-4 mb-4">
                                                            {item.image && (
                                                                <div className="w-12 h-12 flex-shrink-0 relative rounded-xl overflow-hidden border border-white/10 bg-white/5 shadow-md">
                                                                    <Image
                                                                        src={item.image}
                                                                        alt={item.title}
                                                                        fill
                                                                        className={item.image.endsWith(".svg") ? "object-contain p-1.5" : "object-cover object-center"}
                                                                    />
                                                                </div>
                                                            )}
                                                            <div>
                                                                <h5 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                                                                    {item.title}
                                                                </h5>
                                                                <span className="text-xs font-mono text-blue-400/80 font-medium block mt-0.5">
                                                                    {item.org}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                                                            {renderFormattedText(item.desc)}
                                                        </p>

                                                        {item.link && (
                                                            <div className="mt-4 pt-3 border-t border-white/10 flex justify-end">
                                                                <a
                                                                    href={item.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-blue-400 hover:text-white bg-blue-500/10 hover:bg-blue-600 rounded-lg border border-blue-500/20 hover:border-blue-500 transition-all duration-300 shadow-sm group/btn"
                                                                >
                                                                    <span>{language === "el" ? "Επαλήθευση Διαπιστευτηρίου" : "Verify Credential"}</span>
                                                                    <ExternalLink size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
                                                                </a>
                                                            </div>
                                                        )}

                                                        {item.photo && (
                                                            <div className="mt-4 pt-4 border-t border-white/10 w-full aspect-video relative rounded-xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-blue-500/40 bg-black/60">
                                                                <Image
                                                                    src={item.photo}
                                                                    alt={item.title}
                                                                    fill
                                                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                                    quality={95}
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CATEGORY 2: PROFESSIONAL EVENTS, WORKSHOPS & ECOSYSTEM ENGAGEMENT */}
                                    {t.events_list && t.events_list.length > 0 && (
                                        <div className="space-y-6 pt-6 border-t border-white/10">
                                            <div className="flex items-center gap-3 mb-6">
                                                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                                                <h4 className="text-xl font-bold text-white tracking-tight">
                                                    {language === "el" ? "Επαγγελματικές Εκδηλώσεις, Workshops & Οικοσύστημα" : "Professional Events, Workshops & AI Ecosystem"}
                                                </h4>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {t.events_list.map((item: any, index: number) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: index * 0.1 }}
                                                        className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#090d16]/90 border border-white/10 hover:border-cyan-500/50 hover:bg-[#081522] hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] transition-all duration-300 overflow-hidden"
                                                    >
                                                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                                        <div>
                                                            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                                                                <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/30">
                                                                    {item.type}
                                                                </span>
                                                                <span className="text-xs font-mono text-gray-400">{item.date}</span>
                                                            </div>

                                                            <div className="flex items-start gap-4 mb-4">
                                                                {item.image && (
                                                                    <div className="w-12 h-12 flex-shrink-0 relative rounded-xl overflow-hidden border border-white/10 bg-white/5 shadow-md">
                                                                        <Image
                                                                            src={item.image}
                                                                            alt={item.title}
                                                                            fill
                                                                            className={item.image.endsWith(".svg") ? "object-contain p-1.5" : "object-cover object-center"}
                                                                        />
                                                                    </div>
                                                                )}
                                                                <div>
                                                                    <h5 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                                                                        {item.title}
                                                                    </h5>
                                                                    <span className="text-xs font-mono text-cyan-400/80 font-medium block mt-0.5">
                                                                        {item.org}
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                                                                {renderFormattedText(item.desc)}
                                                            </p>

                                                            {item.link && (
                                                                <div className="mt-4 pt-3 border-t border-white/10 flex justify-end">
                                                                    <a
                                                                        href={item.link}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-cyan-400 hover:text-white bg-cyan-500/10 hover:bg-cyan-600 rounded-lg border border-cyan-500/20 hover:border-cyan-500 transition-all duration-300 shadow-sm group/btn"
                                                                    >
                                                                        <span>{language === "el" ? "Βεβαίωση Συμμετοχής" : "Certificate of Participation"}</span>
                                                                        <ExternalLink size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
                                                                    </a>
                                                                </div>
                                                            )}

                                                            {item.photo && (
                                                                <div className="mt-4 pt-4 border-t border-white/10 w-full aspect-video relative rounded-xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-cyan-500/40 bg-black/60">
                                                                    <Image
                                                                        src={item.photo}
                                                                        alt={item.title}
                                                                        fill
                                                                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                                                        sizes="(max-width: 768px) 100vw, 50vw"
                                                                        quality={95}
                                                                    />
                                                                </div>
                                                            )}

                                                            {item.youtubeId && (
                                                                <div className="mt-4 pt-4 border-t border-white/10 w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-cyan-500/30 bg-black">
                                                                    <iframe
                                                                        src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}`}
                                                                        title={item.title}
                                                                        className="w-full h-full border-0"
                                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                        allowFullScreen
                                                                    />
                                                                </div>
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}



                            {/* TAB: EDUCATION & EXPERIENCE SPLIT */}
                            {activeTab === "education" && (
                                <div className="space-y-16">
                                    {/* Professional Experience Section */}
                                    <div>
                                        <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white">{t.education_experience.title_exp}</h3>
                                                <p className="text-gray-400 text-sm mt-1">{t.education_experience.subtitle_exp}</p>
                                            </div>
                                            <Briefcase className="text-blue-500 opacity-20" size={48} />
                                        </div>

                                        <div className="grid gap-6">
                                            {t.experience_list.map((item: any, index: number) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="group relative flex items-start gap-6 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all overflow-hidden"
                                                >
                                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                                        <Briefcase size={80} />
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
                                </div>
                            )}

                            {activeTab === "languages" && (
                                <div className="space-y-16">
                                    {/* Languages Section */}
                                    <div>
                                        <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white tracking-tight">
                                                    {language === "el" ? "Γλώσσες & Πιστοποιήσεις" : "Languages & Certifications"}
                                                </h3>
                                                <p className="text-gray-400 text-sm mt-1">{t.tabs.languages.desc}</p>
                                            </div>
                                            <Globe size={48} className="text-blue-500 opacity-20" />
                                        </div>

                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                            {t.languages_list.map((item: any, index: number) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="group relative flex flex-col p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden"
                                                >
                                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                                        <Globe size={60} />
                                                    </div>

                                                    <div className="flex items-start gap-6 mb-6">
                                                        <div className="relative w-20 h-20 flex-shrink-0 rounded-2xl bg-white/10 overflow-hidden border border-white/10 shadow-2xl">
                                                            <Image src={item.image} alt={item.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                                                                {item.title}
                                                            </h4>
                                                            <div className="text-sm text-blue-400 font-medium mb-2">{item.type}</div>
                                                            <div className="text-xs font-mono text-gray-500 flex items-center gap-2">
                                                                <Award size={12} className="text-yellow-500" />
                                                                {item.org}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-4">
                                                        <div className="text-sm text-gray-400 leading-relaxed italic">
                                                            &quot;{renderFormattedText(item.desc)}&quot;
                                                        </div>
                                                        <div className="pt-4 border-t border-white/5">
                                                            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                                                                {item.date}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Professional Impact */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="relative p-1 px-1 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20"
                                    >
                                        <div className="bg-black/90 rounded-[22px] p-8 md:p-10 backdrop-blur-xl">
                                            <div className="flex flex-col md:flex-row items-center gap-10">
                                                <div className="flex-1">
                                                    <h4 className="text-2xl font-bold text-white mb-4">
                                                        {language === "el" ? "Επαγγελματικός Αντίκτυπος" : "Professional Impact"}
                                                    </h4>
                                                    <p className="text-gray-400 leading-relaxed text-lg">
                                                        {renderFormattedText(t.language_impact)}
                                                    </p>
                                                </div>
                                                <div className="relative w-48 h-24 flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                                                    <Image src="/resources/img/languages/peoplecert.png" alt="PeopleCert" fill className="object-contain" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
