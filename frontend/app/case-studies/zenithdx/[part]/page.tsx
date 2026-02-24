"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    ShieldAlert,
    Database,
    BrainCircuit,
    BarChart3,
    Gavel,
    FileCheck,
    Lock,
    Activity,
    ArrowLeft,
    Settings2,
    Stethoscope,
    Network,
    Cpu,
    Fingerprint,
    FileSearch,
    BookOpenCheck,
    Zap,
    Terminal,
    ChevronRight,
    MonitorCheck,
    SearchCode
} from "lucide-react";
import { useState, useEffect } from "react";

export default function TechnicalDossierPage() {
    const params = useParams();
    const part = params.part as string;
    const [activeSegment, setActiveSegment] = useState(0);

    const getDossierData = () => {
        switch (part) {
            case "data":
                return {
                    title: "Regulatory Architecture & Clinical Data Mesh",
                    subtitle: "Part 1/4: Sovereign Data Governance",
                    desc: "Architecting the regulatory foundation for SaMD through automated compliance gates and medical risk orchestration.",
                    color: "blue",
                    specs: [
                        { label: "Compliance Standard", value: "Class IIb (Annex VIII)" },
                        { label: "Data Integrity", value: "99.9% Audit Provenance" },
                        { label: "Risk Strategy", value: "Active ISO 14971" },
                        { label: "Infrastructure", value: "HIPAA/GDPR Sovereign" }
                    ],
                    sections: [
                        {
                            id: "regulatory-framework",
                            icon: <Gavel className="w-5 h-5" />,
                            title: "Regulatory Submission Matrix",
                            detail: "Mapping high-level objectives to MDR 2017/745 GSPR evidence.",
                            items: [
                                { label: "MDR Annex I", value: "GSPR Traceability Logic" },
                                { label: "ISO 14971", value: "Risk-Benefit Orchestration" },
                                { label: "UDI-DI", value: "Automatic Labeling Pipeline" },
                                { label: "Tech File", value: "Dynamic MDR Documentation" }
                            ],
                            analysis: [
                                "Establishment of device classification via Rule 11 (Software for clinical decisions).",
                                "Traceability matrix linking software requirements to clinical hazards.",
                                "Automated generation of UDI-DI metadata for global regulatory tracking."
                            ]
                        },
                        {
                            id: "safety-logic",
                            icon: <ShieldAlert className="w-5 h-5" />,
                            title: "Clinical Safety & Risk Gates",
                            detail: "Proactive mitigation through iterative reasoning loops.",
                            items: [
                                { label: "Hazards", value: "Misdiagnosis, Latency, Drift" },
                                { label: "Mitigation", value: "Self-Refine Decision Logic" },
                                { label: "Verification", value: "Unit/Integration Test Coverage" },
                                { label: "Human Oversight", value: "HITL Control Thresholds" }
                            ],
                            analysis: [
                                "Implementation of safety gates within the LangGraph orchestrator.",
                                "Real-time monitoring of model confidence vs. clinical truth thresholds.",
                                "Integration of ISO 14971 hazards directly into the Agentic reasoning chain."
                            ]
                        },
                        {
                            id: "data-governance",
                            icon: <Database className="w-5 h-5" />,
                            title: "Data Sovereignty Architecture",
                            detail: "Secure acquisition and processing of medical telemetry.",
                            items: [
                                { label: "Privacy", value: "GDPR Art. 25 (Privacy-by-Design)" },
                                { label: "Dataset", value: "MIMIC-CXR / CXLSeg Validated" },
                                { label: "Provenance", value: "Immutable HL7/FHIR Traces" },
                                { label: "Governance", value: "FastQC Sequence Filtering" }
                            ],
                            analysis: [
                                "Zero-egress data processing utilizing local high-performance compute nodes.",
                                "Strict RBAC/ABAC protocols for secure clinical data democratization.",
                                "Formal validation of data representativeness to mitigate algorithmic bias."
                            ]
                        }
                    ]
                };
            case "ai":
                return {
                    title: "Agentic AI & High-Performance Inference",
                    subtitle: "Part 2/4: The Clinical Co-Pilot Core",
                    desc: "Engineering a Multi-Agent system with LangGraph and ReAct loops for auditable medical reasoning.",
                    color: "emerald",
                    specs: [
                        { label: "Core Model", value: "Llama 3.2 3B (Fine-tuned)" },
                        { label: "Inference Latency", value: "< 2.5s / Token Stream" },
                        { label: "State Graph", value: "LangGraph (Cyclic)" },
                        { label: "Embedding", value: "BGE-Large-EN-V1.5" }
                    ],
                    sections: [
                        {
                            id: "inference-engine",
                            icon: <Cpu className="w-5 h-5" />,
                            title: "Cognitive Architecture",
                            detail: "Distributed agent swarm for multi-modal clinical reasoning.",
                            items: [
                                { label: "Orchestration", value: "LangGraph State Machine" },
                                { label: "Strategy", value: "ReAct (Reasoning + Acting)" },
                                { label: "Memory", value: "Clinical Vector RAG (FAISS)" },
                                { label: "Optimization", value: "Fine-tuned Alpaca Instruct" }
                            ],
                            analysis: [
                                "Execution of acyclic reasoning paths for pathology identification.",
                                "Multi-modal integration of X-ray segmentation and text-based diagnosis.",
                                "Dynamic retrieval-augmented generation from sovereign medical journals."
                            ]
                        },
                        {
                            id: "performance-metrics",
                            icon: <Activity className="w-5 h-5" />,
                            title: "Scientific Validation Suite",
                            detail: "Quantitative evidence of clinical diagnostic authority.",
                            items: [
                                { label: "Agent Output", value: "96.28% Precision Confidence" },
                                { label: "Image Dice", value: "0.9718 (Lung Segmentation)" },
                                { label: "Pathology F1", value: "0.571 (ResNet-50 Macro)" },
                                { label: "Sensitivity", value: "86.4% (Consolidation Case)" }
                            ],
                            analysis: [
                                "Benchmarked against MIMIC-CXR for high-fidelity clinical validation.",
                                "Significant reduction in false negatives through ensemble weighting.",
                                "Human-equivalent performance in structured medical report generation."
                            ]
                        },
                        {
                            id: "xai-matrix",
                            icon: <BrainCircuit className="w-5 h-5" />,
                            title: "Explainability (XAI) Matrix",
                            detail: "High-authority evidence for clinical decision support.",
                            items: [
                                { label: "Visual XAI", value: "Grad-CAM (Attention Mapping)" },
                                { label: "Textual XAI", value: "Captum Feature Ablation" },
                                { label: "Human Audit", value: "Interpretability Protocol" },
                                { label: "Transparency", value: "Step-by-Step Logic Trace" }
                            ],
                            analysis: [
                                "Generation of anatomical heatmaps to guide physican localization.",
                                "Token-level attribution analysis to justify diagnostic phrasing.",
                                "Compliance with EU AI Act's Article 13 (Human Overisght/Transparency)."
                            ]
                        }
                    ]
                };
            case "pm":
                return {
                    title: "Strategic Lifecycle & Product Orchestration",
                    subtitle: "Part 3/4: High-Yield Project Management",
                    desc: "Orchestrating the transition from TRL-4 to TRL-9 through rigorous lifecycle standards and stakeholder validation.",
                    color: "purple",
                    specs: [
                        { label: "Standard", value: "IEC 62304 / ISO 13485" },
                        { label: "V-Model", value: "Regulatory SDLC Alignment" },
                        { label: "Risk Class", value: "Class IIb Orchestration" },
                        { label: "Usability", value: "76.1/100 HSUS Score" }
                    ],
                    sections: [
                        {
                            id: "sdlc-framework",
                            icon: <Settings2 className="w-5 h-5" />,
                            title: "Lifecycle Master Plan",
                            detail: "Controlled software development under medical mandates.",
                            items: [
                                { label: "Configuration", value: "Versioned Release Artifacts" },
                                { label: "SOUP Control", value: "Validated AI Dependency Log" },
                                { label: "MDF Central", value: "Live Medical Device File" },
                                { label: "V&V Strategy", value: "Automated Acceptance Tests" }
                            ],
                            analysis: [
                                "Integration of Agile methodologies with rigid Waterfall regulatory gates.",
                                "Strict change control protocols for model retraining and logic updates.",
                                "MDF (Medical Device File) synchronization across distributed teams."
                            ]
                        },
                        {
                            id: "clinical-evidence",
                            icon: <FileSearch className="w-5 h-5" />,
                            title: "Clinical Strategy & Markets",
                            detail: "Evidence-based roadmap for institutional adoption.",
                            items: [
                                { label: "Market State", value: "SOTA (State of the Art) Gap" },
                                { label: "CER Pipeline", value: "Clinical Evidence Logic" },
                                { label: "PMS Design", value: "Active Feedback Loops" },
                                { label: "UX Metric", value: "31.9s KLM Efficiency" }
                            ],
                            analysis: [
                                "Competitive benchmarking of the AI co-pilot against existing SOTA.",
                                "Establishment of Post-Market Clinical Follow-up (PMCF) logic.",
                                "Quantitative usability analysis (KLM) to reduce cognitive load in triage."
                            ]
                        },
                        {
                            id: "stakeholder-bridge",
                            icon: <Network className="w-5 h-5" />,
                            title: "Stakeholder Ecosystem",
                            items: [
                                { label: "Physicians", value: "Clinical Workflow Interface" },
                                { label: "Audit Bodies", value: "Submission-Ready Logic" },
                                { label: "Scale-up", value: "Enterprise ROI Validation" },
                                { label: "Patients", value: "Safety-First Outcome Logic" }
                            ],
                            analysis: [
                                "Translation of clinical pain points into technical system requirements.",
                                "Alignment of institutional GPU investment with high-yield ROI paths.",
                                "Establishing clear accountability lines for AI-assisted diagnoses."
                            ]
                        }
                    ]
                };
            case "gov":
                return {
                    title: "Governance-by-Design & Security Mesh",
                    subtitle: "Part 4/4: Institutional Trust & Accountability",
                    desc: "Embedding ethical mandates and security protocols directly into the technical DNA of the clinical system.",
                    color: "amber",
                    specs: [
                        { label: "QMS Gate", value: "ISO 13485 (Medical Quality)" },
                        { label: "Security", value: "IEC 81001-5-1 Compliant" },
                        { label: "Ethics", value: "EU AI Act Governance" },
                        { label: "Integrity", value: "STRIDE Threat Shield" }
                    ],
                    sections: [
                        {
                            id: "qms-governance",
                            icon: <BookOpenCheck className="w-5 h-5" />,
                            title: "Quality Infrastructure",
                            detail: "Mapping organizational controls directly to technical logs.",
                            items: [
                                { label: "QMS Manual", value: "Automated Policy Mapping" },
                                { label: "Auditing", value: "Continuous Logic Assurance" },
                                { label: "Logs", value: "Immutable Execution History" },
                                { label: "Vigilance", value: "Incident Response Trigger" }
                            ],
                            analysis: [
                                "Embedding regulatory 'hooks' within the CI/CD pipeline for auditing.",
                                "Mapping technical exceptions to Quality Management non-conformities.",
                                "Centralizing the DHF (Design History File) for instant audit readiness."
                            ]
                        },
                        {
                            id: "security-architecture",
                            icon: <Lock className="w-5 h-5" />,
                            title: "Institutional Security Mesh",
                            detail: "Hardened infrastructure for protected health information.",
                            items: [
                                { label: "Mesh Logic", value: "Zero-Trust Service Mesh" },
                                { label: "Sovereignty", value: "Local LLM / Private VNET" },
                                { label: "Traceability", value: "E2E Encryption (AES-256)" },
                                { label: "Threat Scan", value: "Automatic SBOM Validation" }
                            ],
                            analysis: [
                                "Implementation of a Secure Product Development Framework (SPDF).",
                                "Advanced threat modeling (STRIDE) for AI adversarial robustness.",
                                "Ensuring total data residency within the hospital's sovereign network."
                            ]
                        }
                    ]
                };
            default:
                return null;
        }
    };

    const data = getDossierData();

    if (!data) return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white">
            <div className="text-center">
                <h1 className="text-2xl font-mono mb-4">404: DOSSIER_NOT_FOUND</h1>
                <Link href="/" className="text-blue-400 hover:underline">Return to Base</Link>
            </div>
        </div>
    );

    const colorsMap = {
        blue: "from-blue-500/10 to-transparent text-blue-400 border-blue-500/20 ring-blue-500/10 shadow-blue-500/5",
        emerald: "from-emerald-500/10 to-transparent text-emerald-400 border-emerald-500/20 ring-emerald-500/10 shadow-emerald-500/5",
        purple: "from-purple-500/10 to-transparent text-purple-400 border-purple-500/20 ring-purple-500/10 shadow-purple-500/5",
        amber: "from-amber-500/10 to-transparent text-amber-400 border-amber-500/20 ring-amber-500/10 shadow-amber-500/5",
    };

    const accentColorMap = {
        blue: "text-blue-400",
        emerald: "text-emerald-400",
        purple: "text-purple-400",
        amber: "text-amber-400",
    };

    const currentColors = colorsMap[data.color as keyof typeof colorsMap];
    const accentColor = accentColorMap[data.color as keyof typeof accentColorMap];

    return (
        <div className="min-h-screen bg-[#020202] text-white selection:bg-white/10 font-sans relative overflow-hidden">
            {/* Visual background layers */}
            <div className="absolute inset-0 clinical-grid opacity-[0.03] pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            {/* Scanning Line Effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
                <motion.div
                    animate={{ y: ["-100%", "100%"] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
                ></motion.div>
            </div>

            {/* HUD Header */}
            <header className="sticky top-0 z-50 bg-black/60 backdrop-blur-2xl border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/" className="group flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all">
                            <ArrowLeft className="w-4 h-4 text-white/80" />
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30 group-hover:text-white/60 transition-colors hidden sm:block">Exit_Console</span>
                    </Link>
                    <div className="h-4 w-[1px] bg-white/10"></div>
                    <div className="flex items-center gap-4">
                        <h1 className="text-[11px] font-mono uppercase tracking-[0.4em] flex items-center gap-2">
                            <span className={accentColor}>ZENITHDX_SYSTEMS</span>
                            <span className="text-white/10">/</span>
                            <span className="text-white/90">DOSSIER_{part.toUpperCase()}</span>
                        </h1>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 px-4 py-1.5 rounded-full">
                        <div className="relative">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                            <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping opacity-75"></div>
                        </div>
                        <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-[0.2em]">System_Active</span>
                    </div>
                    <div className="hidden lg:flex flex-col text-right">
                        <span className="text-[8px] font-mono text-white/30 uppercase tracking-widest">Auth_Status</span>
                        <span className="text-[9px] font-mono text-white/60 uppercase">Dossier_Verified</span>
                    </div>
                </div>
            </header>

            <main className="relative max-w-7xl mx-auto px-6 py-16 md:py-28 z-10">
                {/* Breadcrumb / Telemetry */}
                <div className="mb-12 flex flex-wrap gap-4 items-center">
                    <div className="px-3 py-1 bg-white/5 border border-white/10 rounded font-mono text-[9px] text-white/40 tracking-widest flex items-center gap-2">
                        <Terminal className="w-3 h-3" />
                        SERVER_NODE: SG-920-ZENITH
                    </div>
                    <div className="px-3 py-1 bg-white/5 border border-white/10 rounded font-mono text-[9px] text-white/40 tracking-widest flex items-center gap-2">
                        <MonitorCheck className="w-3 h-3" />
                        UPTIME: 99.998%
                    </div>
                    <div className="px-3 py-1 bg-white/5 border border-white/10 rounded font-mono text-[9px] text-white/40 tracking-widest flex items-center gap-2">
                        <Lock className="w-3 h-3" />
                        ENCRYPTION: AES256_ACTIVE
                    </div>
                </div>

                {/* Hero Title Block */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-8"
                    >
                        <div className={`inline-flex items-center gap-3 px-4 py-1.5 bg-white/5 border border-white/10 rounded-xl mb-8`}>
                            <Zap className={`w-3.5 h-3.5 ${accentColor}`} />
                            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-white/70">{data.subtitle}</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black mb-10 leading-[0.95] tracking-tighter">
                            {data.title.split(' & ').map((word, i) => (
                                <span key={i} className="block last:opacity-40">
                                    {word}{i === 0 && ' &'}
                                </span>
                            ))}
                        </h2>
                        <div className="h-px w-32 bg-gradient-to-r from-white/20 to-transparent mb-10"></div>
                        <p className="text-xl md:text-3xl text-white/50 font-light leading-relaxed max-w-3xl italic">
                            {data.desc}
                        </p>
                    </motion.div>

                    {/* Spec Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-4 flex flex-col gap-6"
                    >
                        <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm relative group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <h4 className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] mb-8 border-b border-white/5 pb-4">Tech_Specs_Registry</h4>
                            <div className="space-y-8">
                                {data.specs.map((spec, i) => (
                                    <div key={i} className="flex flex-col gap-1.5 group/spec">
                                        <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest group-hover/spec:text-white/40 transition-colors">{spec.label}</span>
                                        <span className="text-base font-bold tracking-tight text-white/90 group-hover/spec:text-white transition-colors">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-12 flex justify-between items-end">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">Validation_Key</span>
                                    <span className="text-[10px] font-mono text-white/50">ZDX-882-AUDIT-✅</span>
                                </div>
                                <SearchCode className="w-8 h-8 text-white/5 opacity-40" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Detailed Analysis Section */}
                <div className="space-y-32">
                    {data.sections.map((section, idx) => (
                        <section key={section.id} className="relative">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
                            >
                                {/* Header Part */}
                                <div className="lg:col-span-4">
                                    <div className="sticky top-32">
                                        <div className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 ${accentColor}`}>
                                            {section.icon}
                                        </div>
                                        <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">{section.title}</h3>
                                        <p className="text-white/40 text-lg font-light leading-relaxed mb-8">
                                            {section.detail}
                                        </p>
                                        <div className="space-y-6">
                                            {section.items.map((item, i) => (
                                                <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4 group/item">
                                                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest group-hover/item:text-white/40 transition-colors">{item.label}</span>
                                                    <span className="text-[11px] font-bold text-white/80 group-hover/item:text-white transition-colors">{item.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Analysis Content Part */}
                                <div className="lg:col-span-8">
                                    <div className="p-8 md:p-12 rounded-[2.5rem] border border-white/5 bg-white/[0.01] relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                                            {section.icon}
                                        </div>
                                        <h4 className="text-[10px] font-mono text-white/30 uppercase tracking-[0.4em] mb-12 flex items-center gap-3">
                                            <span className="w-4 h-[1px] bg-white/20"></span>
                                            Analytical_Deep_Dive
                                        </h4>

                                        <div className="space-y-12">
                                            {section.analysis.map((point, i) => (
                                                <div key={i} className="flex gap-8 group/point">
                                                    <div className="flex flex-col items-center">
                                                        <div className={`w-2 h-2 rounded-full border border-white/20 group-hover/point:scale-150 transition-transform ${i === 0 ? 'bg-white/40' : 'bg-transparent'}`}></div>
                                                        <div className="w-[1px] flex-1 bg-gradient-to-b from-white/10 to-transparent mt-2"></div>
                                                    </div>
                                                    <p className="text-xl md:text-2xl text-white/60 font-light leading-[1.6] group-hover/point:text-white/90 transition-colors">
                                                        {point}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between">
                                            <div className="flex gap-4">
                                                <div className="w-8 h-1 bg-white/10 rounded-full"></div>
                                                <div className="w-8 h-1 bg-white/10 rounded-full"></div>
                                                <div className="w-8 h-1 bg-white/5 rounded-full"></div>
                                            </div>
                                            <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.3em]">Module_Verified: 100%</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </section>
                    ))}
                </div>

                {/* Global System View Visualization */}
                <section className="mt-40">
                    <h4 className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em] mb-12 text-center">Architectural_Mesh_Simulation</h4>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-video md:aspect-[24/9] rounded-[3rem] overflow-hidden border border-white/5 bg-[#050505] group"
                    >
                        <div className="absolute inset-0 clinical-grid opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                    className="w-96 h-96 rounded-full border-2 border-white/[0.03] border-dashed flex items-center justify-center"
                                >
                                    <div className="w-64 h-64 rounded-full border border-white/[0.05] border-dashed"></div>
                                </motion.div>
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                    <Activity className={`w-12 h-12 ${accentColor} animate-pulse mb-6`} />
                                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.6em]">System_Core_Active</span>
                                    <div className="mt-4 flex gap-1">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <motion.div
                                                key={i}
                                                animate={{ opacity: [0.2, 1, 0.2], scaleY: [1, 1.5, 1] }}
                                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                                className={`w-1 h-3 rounded-full bg-white/20`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floaty Analytics Cards */}
                        <div className="absolute bottom-12 left-12 p-8 backdrop-blur-3xl bg-white/[0.02] border border-white/10 rounded-3xl max-w-sm hidden md:block">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-2 rounded bg-blue-500/10">
                                    <Database className="w-4 h-4 text-blue-400" />
                                </div>
                                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/60">Live_Audit_Provenance</span>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-end mb-1">
                                    <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">HL7_FHIR_INGESTION</span>
                                    <span className="text-[10px] font-mono text-emerald-400">SYNCING</span>
                                </div>
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        animate={{ width: ["30%", "85%", "65%"] }}
                                        transition={{ duration: 8, repeat: Infinity }}
                                        className="h-full bg-blue-500/50"
                                    />
                                </div>
                                <div className="text-[8px] font-mono text-white/20 tracking-tighter uppercase truncate">TRX_HASH: 0x82...a91 (VERIFIED)</div>
                            </div>
                        </div>

                        <div className="absolute top-12 right-12 p-8 backdrop-blur-3xl bg-white/[0.02] border border-white/10 rounded-3xl hidden md:block group-hover:translate-x-[-10px] transition-transform">
                            <div className="flex items-center gap-4">
                                <div className="p-2 rounded bg-emerald-500/10">
                                    <Fingerprint className="w-4 h-4 text-emerald-400" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/60">Regulatory_Guard_Active</span>
                                    <span className="text-[9px] font-mono text-emerald-400/60 uppercase">E2E_Compliance_Lock</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </main>

            {/* Navigation Footer */}
            <footer className="border-t border-white/5 py-32 px-6 mt-20 relative bg-black/40">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h3 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">Technical_Registry_Index</h3>
                        <p className="text-white/30 text-lg md:text-xl font-light">Navigating the ZenithDx Regulatory Architecture Series</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { id: "data", label: "01. Regulatory", desc: "Data Mesh & Compliance" },
                            { id: "ai", label: "02. AI Architecture", desc: "Core Inference & XAI" },
                            { id: "pm", label: "03. Product Mgmt", desc: "Lifecycle & Strategy" },
                            { id: "gov", label: "04. Governance", desc: "QMS & Security Mesh" }
                        ].map((navPart, i) => (
                            <Link
                                key={navPart.id}
                                href={`/case-studies/zenithdx/${navPart.id}`}
                                className={`relative p-8 rounded-3xl border transition-all group ${part === navPart.id
                                        ? "bg-white text-black border-white shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                                        : "bg-white/[0.02] border-white/10 hover:border-white/20 text-white/50 hover:text-white"
                                    }`}
                            >
                                <div className="flex flex-col gap-4">
                                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity">Part_{i + 1}</span>
                                    <div className="flex flex-col">
                                        <span className="text-lg font-bold tracking-tight mb-1">{navPart.label}</span>
                                        <span className="text-xs opacity-60 font-light">{navPart.desc}</span>
                                    </div>
                                    <div className="pt-6 flex justify-end">
                                        <ChevronRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${part === navPart.id ? 'text-black' : 'text-white/20'}`} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-4">
                            <Link href="/" className="text-[10px] font-mono text-white/30 uppercase tracking-[0.4em] hover:text-white transition-colors">Portfolio_Root</Link>
                            <div className="w-1 h-1 rounded-full bg-white/10"></div>
                            <span className="text-[10px] font-mono text-white/10 uppercase tracking-[0.4em]">ZENITHDX_v4.2.1</span>
                        </div>
                        <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
                            © 2025 ZENITHDX_SYSTEMS_CONSULTANCY. ALL_RIGHTS_RESERVED.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
