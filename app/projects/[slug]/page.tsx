"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { projects } from "../../../frontend/data/content";

// Swiper imports for Gallery
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectPage() {
    const params = useParams();
    const slug = params.slug;

    const project = projects.find((p) => p.id === slug);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background-dark text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Link href="/" className="text-primary hover:underline">
                        Return Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-background-dark text-white pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] w-full mb-12">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent flex items-end">
                    <div className="max-w-7xl mx-auto px-6 w-full pb-12">
                        <span className="text-primary font-mono text-sm uppercase tracking-widest mb-4 block">
                            {project.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">
                            {project.title}
                        </h1>
                        <div className="flex flex-wrap gap-4 text-sm md:text-base font-medium text-gray-300">
                            {project.client && (
                                <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                                    <span className="text-gray-500 mr-2">Client:</span>
                                    <span className="text-white">{project.client}</span>
                                </div>
                            )}
                            <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                                <span className="text-gray-500 mr-2">Year:</span>
                                <span className="text-white">{project.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-8">
                    <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                        <span className="w-8 h-1 bg-primary rounded-full"></span>
                        Project Overview
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-12">
                        <p className="text-lg">{project.brief}</p>
                    </div>

                    {/* Gallery */}
                    {project.gallery && project.gallery.length > 0 && (
                        <div className="mb-12">
                            <h3 className="text-xl font-bold mb-6 text-white">Visual Gallery</h3>
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                navigation={true}
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 5000 }}
                                loop={true}
                                className="project-gallery-swiper rounded-xl overflow-hidden border border-white/10"
                            >
                                {project.gallery.map((img, idx) => (
                                    <SwiperSlide key={idx} className="relative aspect-video">
                                        <Image
                                            src={img}
                                            alt={`${project.title} screenshot ${idx + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-4 space-y-8">
                    {/* Tech Stack */}
                    <div className="bg-surface-dark border border-white/5 rounded-xl p-6">
                        <h3 className="text-lg font-bold mb-4 text-white border-b border-white/10 pb-2">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tools.map((tool) => (
                                <span key={tool} className="text-xs font-medium bg-white/5 text-gray-300 px-3 py-1.5 rounded hover:bg-white/10 hover:text-white transition-colors cursor-default">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    {project.link !== "#" && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full py-4 bg-primary hover:bg-primary/90 text-white text-center font-bold rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1"
                        >
                            Visit Live Project ↗
                        </a>
                    )}

                    <Link
                        href="/#portfolio"
                        className="block w-full py-4 bg-surface-dark hover:bg-surface-light border border-white/10 text-gray-300 text-center font-medium rounded-xl transition-all"
                    >
                        ← Back to Portfolio
                    </Link>
                </aside>
            </div>

            <style jsx global>{`
        .project-gallery-swiper .swiper-button-next,
        .project-gallery-swiper .swiper-button-prev {
          color: white;
          background: rgba(0,0,0,0.5);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          backdrop-filter: blur(4px);
        }
        .project-gallery-swiper .swiper-pagination-bullet-active {
          background: var(--primary-color, #2563eb);
        }
      `}</style>
        </main>
    );
}
