"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Gavel, FileCheck, Landmark, ChartBar, ShieldAlert, Activity, Fingerprint, Building2, ArrowLeftRight, Zap, HardHat, Leaf, Briefcase, Factory, Satellite, GraduationCap, Plug, ClipboardCheck } from "lucide-react";

export default function Authority() {
    const rights = [
        {
            title: "General Professional License",
            role: "State-Authorized Technical Guarantor",
            legal: "PD 99/2018 Art. 11 §1, Art. 2 §α,β",
            desc: "Mandated engineer for systems 'critical to protection of life, health, and property'. Rights for Analysis, Design, and Supervision.",
            icon: Shield,
        },
        {
            title: "MDR & SaMD Authority",
            role: "Regulatory Guardian",
            legal: "PD 99/2018 Art. 11 §2ιζ, 2κ, Art. 2 §ιγ",
            desc: "Development of biomedical systems and medical informatics. Quality Assurance and CE Marking compliance.",
            icon: FileCheck,
        },
        {
            title: "Judicial Expert Witness",
            role: "Forensic Authority",
            legal: "PD 99/2018 Art. 2 §ιθ",
            desc: "Explicit right to Technical Expertise, Arbitration, and Mediation for judicial proceedings and liability disputes.",
            icon: Gavel,
        },
        {
            title: "Intangible Assets Valuer",
            role: "Economic Certifier",
            legal: "PD 99/2018 Art. 11 §2γ, Art. 2 §ι",
            desc: "Management and valuation of technical facilities and equipment. Preparation of techno-economic studies.",
            icon: Landmark,
        },
        {
            title: "Investment Evaluator",
            role: "Financial Gatekeeper",
            legal: "PD 99/2018 Art. 2 §κγ",
            desc: "Management, monitoring, and evaluation of development programs and projects (ESPA/Horizon funding).",
            icon: ChartBar,
        },
        {
            title: "Safety Technician (Cat. A)",
            role: "Life Safety Guarantor",
            legal: "PD 99/2018 Art. 2 §ιστ, ιζ",
            desc: "Safety Technician services. Occupational Risk Assessment and Health & Safety Plan (SAY/FAY) drafting.",
            icon: ShieldAlert,
        },
        {
            title: "Biomedical Systems Lead",
            role: "Clinical Systems Auditor",
            legal: "PD 99/2018 Art. 11 §2ιθ, 2κ",
            desc: "Development and installation studies for biomedical devices, systems, and medical informatics.",
            icon: Activity,
        },
        {
            title: "Cyber-Forensics & GDPR",
            role: "Legal Shield",
            legal: "PD 99/2018 Art. 11 §1στ, 2ια",
            desc: "Information security, data protection, privacy, and intellectual property rights studies.",
            icon: Fingerprint,
        },
        {
            title: "Smart Infrastructure",
            role: "Urban Architect",
            legal: "PD 99/2018 Art. 11 §2θ, 2κδ",
            desc: "Studies for Intelligent Transport Systems, Smart Infrastructure, and Intelligent Building Management.",
            icon: Building2,
        },
        {
            title: "Portability Certification",
            role: "Interoperability Validator",
            legal: "PD 99/2018 Art. 11 §2ιβ, 2ιγ",
            desc: "Interoperability and connectivity studies. Certification of software portability specifications and SLAs.",
            icon: ArrowLeftRight,
        },
        {
            title: "Energy Guarantor",
            role: "Sustainability Auditor",
            legal: "PD 99/2018 Art. 11 §2κα, 2κβ",
            desc: "Energy Audits/Inspections and Energy Performance studies for industrial and building systems.",
            icon: Zap,
        },
        {
            title: "Urban Legality & BMS",
            role: "Building Inspector",
            legal: "PD 99/2018 Art. 2 §δ, Art. 11 §2ε",
            desc: "Inspection of technical works. Studies for building service networks and Building Management Systems (BMS).",
            icon: HardHat,
        },
        {
            title: "Environmental Impact",
            role: "Eco-Strategist",
            legal: "PD 99/2018 Art. 11 §2κστ",
            desc: "Development of Environmental Studies and Environmental Impact Assessments (EIA).",
            icon: Leaf,
        },
        {
            title: "Public Works Lead",
            role: "National Tender Authority",
            legal: "PD 99/2018 Art. 2 §γ, Art. 11 §2ζ",
            desc: "Preparation of Tender Files and Technical Specifications for National Telecommunications & Network projects.",
            icon: Briefcase,
        },
        {
            title: "Industrial Commander",
            role: "Production Strategist",
            legal: "PD 99/2018 Art. 2 §ζ, Art. 11 §2δ",
            desc: "Production Management. Studies for Industrial Automation, Robotics, and Control Systems.",
            icon: Factory,
        },
        {
            title: "Satellite & Space",
            role: "Orbital Systems Expert",
            legal: "PD 99/2018 Art. 11 §2κε, 2θ",
            desc: "Studies for Satellite and Space Systems, installations, and Remote Sensing applications.",
            icon: Satellite,
        },
        {
            title: "Academic Mentor",
            role: "Research Authority",
            legal: "PD 99/2018 Art. 2 §κβ",
            desc: "Formal right to Education, Teaching, and Research in Technology and Engineering institutions.",
            icon: GraduationCap,
        },
        {
            title: "Low Voltage Authority",
            role: "Electrical Inspector",
            legal: "PD 99/2018 Art. 11 §2δ, 2στ",
            desc: "Studies for Low Voltage Electrical Installations and Smart Grids / Intelligent Electrical Networks.",
            icon: Plug,
        },
        {
            title: "Quality Assurance Architect",
            role: "ISO Systems Lead",
            legal: "PD 99/2018 Art. 2 §ιδ",
            desc: "Design, installation, certification, and inspection of Quality Management Systems (ISO 9001, 27001).",
            icon: ClipboardCheck,
        }
    ];

    const registries = [
        "Technical Chamber (TEE)",
        "Registry of Court Experts",
        "EUDAMED (MDR - PRRC)",
        "Certified Evaluators (EMPA)",
        "Safety Technician (Cat. A)",
        "Building & Energy Inspectors",
        "Public Works (MH.M.D. Cat. 9/27)",
        "Valuers of Intangible Assets",
        "EU Transparency Register",
        "IRCA Lead Auditor",
        "EPSO CAST Permanent (FG IV)",
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemAnimation = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="authority" className="py-24 bg-[#050505] relative overflow-hidden ring-1 ring-white/5 mx-4 md:mx-10 rounded-3xl my-20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-transparent opacity-50"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-sm font-mono text-blue-500 uppercase tracking-[0.3em] mb-4">Institutional Antigravity</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-white mb-6">State-Authorized <br /> <span className="text-gray-500">Technical Guarantor.</span></h3>
                        <p className="max-w-3xl mx-auto text-gray-400 text-lg font-light leading-relaxed">
                            As a Chartered Engineer (TEE), my signature is not a technical formality; it is a legal instrument of accountability.
                            I institutionally guarantee the integrity of systems that protect human life and digital assets,
                            transforming code into a certified Technical Work under the authority of the State.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
                    {rights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all group relative overflow-hidden flex flex-col h-full"
                        >
                            <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-[10px] font-mono text-blue-500 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">{item.legal}</span>
                            </div>

                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <item.icon className="text-blue-500" size={24} />
                            </div>
                            <h4 className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">{item.role}</h4>
                            <h5 className="text-lg font-bold text-white mb-2">{item.title}</h5>
                            <div className="h-px w-8 bg-blue-500/30 mb-3 group-hover:w-full transition-all duration-500"></div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">{item.desc}</p>
                            <div className="mt-auto pt-4 border-t border-white/5 w-full">
                                <p className="text-[10px] text-gray-600 font-mono group-hover:text-blue-400/70 transition-colors truncate">
                                    Legal Basis: {item.legal}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="border-t border-white/10 pt-16 relative"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050505] px-4 text-gray-500">
                        <ShieldAlert className="w-6 h-6 text-blue-900/50" />
                    </div>

                    <h4 className="text-center text-sm font-mono text-blue-500/80 uppercase tracking-widest mb-10">
                        Official State Registries & Certifications
                    </h4>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        {registries.map((registry, index) => (
                            <motion.div
                                key={index}
                                variants={itemAnimation}
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                                className="px-5 py-3 bg-white/[0.03] rounded-full border border-white/5 flex items-center gap-3 cursor-default transition-colors group hover:border-blue-500/40"
                            >
                                <FileCheck className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
                                <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors tracking-wide">
                                    {registry}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
