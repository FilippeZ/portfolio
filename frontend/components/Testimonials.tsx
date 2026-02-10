"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { testimonials } from "../data/content";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-background-dark relative z-10 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-primary rounded-full filter blur-[120px]"></div>
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-secondary rounded-full filter blur-[120px]"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/resources/img/grid.svg')] opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-primary font-mono text-sm uppercase tracking-widest mb-3 block">
                        Endorsements
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Trusted by Leaders & Innovators
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        navigation={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        loop={true}
                        className="testimonials-swiper py-10 px-4"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className="h-auto">
                                <div className="bg-surface-light/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative h-full flex flex-col hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
                                    {/* Verified Badge */}
                                    <div className="absolute top-6 right-6 flex items-center gap-1 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full">
                                        <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-[10px] font-bold text-green-400 uppercase tracking-wider">Verified</span>
                                    </div>

                                    {/* Quote Icon */}
                                    <div className="text-primary/10 text-8xl font-serif leading-none absolute top-4 left-4 -z-10 group-hover:text-primary/20 transition-colors">
                                        &ldquo;
                                    </div>

                                    {/* Content */}
                                    <div className="flex-grow mb-8 relative z-10 pt-4">
                                        <p className="text-gray-300 text-lg leading-relaxed font-light">
                                            {testimonial.content}
                                        </p>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Author */}
                                    <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
                                        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-base group-hover:text-primary transition-colors">{testimonial.name}</h4>
                                            <p className="text-gray-500 text-xs font-mono uppercase tracking-wide mt-1 line-clamp-1">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>

            <style jsx global>{`
        .testimonials-swiper {
          padding-bottom: 3rem !important; /* Space for pagination */
        }
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.2);
          opacity: 1;
          width: 8px;
          height: 8px;
          transition: all 0.3s;
        }
        .swiper-pagination-bullet-active {
          background: #2563eb;
          width: 24px;
          border-radius: 4px;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background: rgba(255, 255, 255, 0.05);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
           background: #2563eb;
           border-color: #2563eb;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }
      `}</style>
        </section>
    );
}
