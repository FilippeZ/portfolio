"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/content";
import { ExternalLink, ArrowRight, X, Maximize2 } from "lucide-react";

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState("All Projects");
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    // Get unique categories
    const categories = useMemo(() => {
        const cats = new Set(projects.map((p) => p.category));
        return ["All Projects", ...Array.from(cats)];
    }, []);

    // Filter projects
    const filteredProjects = useMemo(() => {
        if (activeFilter === "All Projects") return projects;
        return projects.filter((p) => p.category === activeFilter);
    }, [activeFilter]);

    return (
        <section id="portfolio" className="py-24 lg:py-32 bg-[#050505] relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none opacity-30"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-white/5 pb-12"
                >
                    <div>
                        <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.2em] mb-4 block flex items-center gap-2">
                            <span className="w-8 h-[1px] bg-blue-500"></span>
                            Selected Works
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
                            Featured <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
                                Projects.
                            </span>
                        </h2>
                    </div>

                    {/* Filter Controls */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 border backdrop-blur-sm ${activeFilter === category
                                        ? "bg-blue-600/10 border-blue-500 text-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.2)]"
                                        : "bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/10"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.article
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10 h-[500px] flex flex-col cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                {/* Image Container */}
                                <div className="relative h-72 w-full overflow-hidden">
                                    <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-90"></div>

                                    {/* Overlay Action */}
                                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-600 hover:border-blue-500 transition-colors">
                                            <Maximize2 size={20} />
                                        </div>
                                    </div>

                                    {/* Categorgy Badge */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-mono uppercase tracking-widest text-white/80">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-grow flex flex-col relative -mt-12 z-20">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm line-clamp-3 mb-6 leading-relaxed">
                                        {project.brief}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
                                        {project.tools.slice(0, 3).map(tool => (
                                            <span key={tool} className="text-[10px] uppercase tracking-wider font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-md border border-white/5 group-hover:border-white/10 transition-colors">
                                                {tool}
                                            </span>
                                        ))}
                                        {project.tools.length > 3 && (
                                            <span className="text-[10px] font-mono text-gray-500 px-2 py-1">
                                                +{project.tools.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Cinematic Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/90 backdrop-blur-lg"
                            onClick={() => setSelectedProject(null)}
                        />

                        {/* Modal Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 50 }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="bg-[#050505] border border-white/10 rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl shadow-black/80 relative z-10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-50 p-3 bg-black/50 hover:bg-white/10 backdrop-blur-md rounded-full text-white/70 hover:text-white transition-all border border-white/5 hover:border-white/20 group"
                            >
                                <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                            </button>

                            {/* Modal Image (Cinematic) */}
                            <div className="relative h-[300px] md:h-auto md:w-5/12 min-h-[300px] overflow-hidden">
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#050505]"></div>
                                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
                            </div>

                            {/* Modal Content */}
                            <div className="flex-1 p-8 md:p-12 overflow-y-auto custom-scrollbar relative">
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-[10px] font-mono uppercase tracking-widest">
                                            {selectedProject.category}
                                        </span>
                                        <div className="h-[1px] flex-1 bg-white/10"></div>
                                    </div>

                                    <h3 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
                                        {selectedProject.title}
                                    </h3>

                                    <div className="space-y-10">
                                        <div>
                                            <h4 className="text-xs font-bold text-white mb-4 uppercase tracking-widest flex items-center gap-2 opacity-50">
                                                <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                                                Project Overview
                                            </h4>
                                            <p className="text-gray-300 leading-relaxed text-base/7 md:text-lg/8 font-light">
                                                {selectedProject.brief}
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-xs font-bold text-white mb-4 uppercase tracking-widest flex items-center gap-2 opacity-50">
                                                <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                                                Technologies Used
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.tools.map(tool => (
                                                    <span key={tool} className="text-xs font-mono text-gray-300 bg-white/5 border border-white/10 px-4 py-2 rounded-lg hover:border-blue-500/50 hover:bg-blue-500/5 transition-colors cursor-default">
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-white/5">
                                        <Link
                                            href={`/projects/${selectedProject.id}`}
                                            className="flex-1 bg-white text-black hover:bg-gray-200 text-center font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-white/20 hover:-translate-y-1 flex items-center justify-center gap-2 group"
                                        >
                                            In-Depth Case Study
                                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                        {selectedProject.link !== "#" && (
                                            <a
                                                href={selectedProject.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 hover:border-white/20"
                                            >
                                                Live Project <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
