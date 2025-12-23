"use client";

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const galleryImages = [
    { src: "/images/orchestration-map.jpeg", alt: "Orchestration Map" },
    { src: "/images/pb-submit.jpeg", alt: "Submit Interface" },
    { src: "/images/pb-live-progress.jpeg", alt: "Live Progress Tracking" },
    { src: "/images/pb-compare-results.jpeg", alt: "AI Comparison Results" },
];

const SessionApproachSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section ref={ref} className="py-24 bg-white/5 border-y border-white/10 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-fuchsia/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* --- Merged Overview Section (What it isn't / What it is) --- */}
                <div className="container mx-auto max-w-5xl mb-32">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Left Column: What it isn't */}
                        <motion.div
                            initial={{ opacity: 1, x: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-red-500/0 via-red-500/50 to-red-500/0 hidden md:block"></div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white/90 mb-8">
                                This isn’t a <br />
                                <span className="text-red-400 italic">course in tools.</span>
                            </h2>
                            <ul className="space-y-4 text-white/80 text-lg font-light">
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                                    You can Google tools.
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                                    You can watch tutorials.
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                                    You can follow prompts on YouTube.
                                </li>
                            </ul>
                        </motion.div>

                        {/* Right Column: What it is */}
                        <motion.div
                            initial={{ opacity: 1, x: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-green/0 via-brand-green/50 to-brand-green/0 md:hidden"></div>

                            <h3 className="text-xl font-mono uppercase tracking-widest text-brand-green mb-8 shadow-sm">
                                What you can’t easily learn is:
                            </h3>

                            <ul className="space-y-6">
                                {[
                                    "How to think at scale with AI",
                                    "How to design work that LLMs can actually handle",
                                    "How to avoid weeks of frustration and false starts",
                                    "How to ship something that feels legitimate, not hacky"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <span className="text-brand-green mt-1 font-bold">→</span>
                                        <p className="text-white leading-relaxed font-light">{item}</p>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-12 text-white italic font-serif text-2xl border-l-2 border-brand-green pl-6 py-2">
                                That’s what this day is for.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="text-center mb-24">
                    <motion.h2
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white/90 mb-4 tracking-tight"
                    >
                        The approach: <span className="italic text-brand-green">lead by example</span>
                    </motion.h2>
                </div>

                {/* --- Project Beacon Intro Section --- */}
                <div className="container mx-auto max-w-4xl mb-24">
                    <motion.div
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h2 className="text-sm font-mono text-brand-green uppercase tracking-widest mb-4">Case Study</h2>
                        <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-12 leading-tight">
                            Project Beacon
                        </h3>

                        <div className="text-left bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden group hover:bg-black/30 transition-colors duration-500 shadow-2xl">
                            {/* Gradient glow effect */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-green/10 blur-[80px] rounded-full group-hover:bg-brand-green/20 transition-all duration-700"></div>

                            <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8">
                                <strong className="text-white font-medium">Project Beacon</strong> is an open-source initiative designed to detect and expose AI corruption: where models are influenced, censored, or distorted without users knowing.
                            </p>

                            <div className="space-y-6 text-lg text-white/90 font-light">
                                <p>
                                    It tackles a problem most people agree is important, but assume requires teams, institutions, and years of work.
                                </p>
                                <p>
                                    Instead, it was designed, built, and scoped by <span className="text-white font-normal border-b border-brand-green/40">one person</span>, using AI as leverage.
                                </p>
                                <p>
                                    In this course, Project Beacon is unpacked end-to-end (not as a demo, but as a real, ambitious project) so you can see how it was actually built and apply the same thinking to your own work.
                                </p>
                            </div>

                            <div className="mt-12 pt-10 border-t border-white/10">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                    {/* Main Valuation Stat */}
                                    <div className="col-span-1 border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8">
                                        <div className="text-5xl font-serif text-brand-green mb-2">£200k+</div>
                                        <div className="text-xs font-mono text-white/70 uppercase tracking-widest">Valuation after 3 months</div>
                                    </div>

                                    {/* Project Scale Stats */}
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-x-8 gap-y-10">
                                        <div>
                                            <div className="text-2xl font-serif text-white mb-1">1,447</div>
                                            <div className="text-[10px] font-mono text-white/60 uppercase tracking-widest">Files in Github</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-serif text-white mb-1">741</div>
                                            <div className="text-[10px] font-mono text-white/60 uppercase tracking-widest">Total Commits</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-serif text-white mb-1">38.3M</div>
                                            <div className="text-[10px] font-mono text-white/60 uppercase tracking-widest">Total Lines</div>
                                            <div className="text-[10px] font-mono text-brand-green/80 mt-1.5 leading-relaxed">
                                                ~17.3M JS/TS combined, <br />
                                                Markdown, JSON & Python
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-xl font-serif text-white mb-1">JS, TS, Go, Python</div>
                                            <div className="text-[10px] font-mono text-white/60 uppercase tracking-widest">Core Tech Stack</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Orchestration Stats */}
                                <div className="mt-12 pt-8 border-t border-white/5">
                                    <div className="text-[10px] font-mono text-white/50 uppercase tracking-[0.2em] mb-4">Orchestration via GitHub to</div>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {["Netlify", "Railway", "Fly.io", "Upstash", "Neon", "Modal"].map((tech) => (
                                            <span key={tech} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-mono text-white/80">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Project Gallery Grid */}
                                    <div className="grid grid-cols-2 gap-4 mt-8">
                                        {galleryImages.map((img, i) => (
                                            <div
                                                key={i}
                                                onClick={() => setSelectedImage(img.src)}
                                                className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10 group/img cursor-zoom-in"
                                            >
                                                <Image
                                                    src={img.src}
                                                    alt={img.alt}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity"></div>
                                                <div className="absolute bottom-3 left-3 text-[10px] font-mono text-white/50 uppercase tracking-widest opacity-0 group-hover/img:opacity-100 transition-opacity">
                                                    Click to expand
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-block relative">

                        <h3 className="relative text-3xl md:text-4xl font-serif italic text-white p-4">
                            Every section connects back to the same question: <br />
                            <span className="text-brand-green not-italic font-sans font-bold mt-2 block">How did one person make this work?</span>
                        </h3>
                    </div>
                </motion.div>
            </div>

            {/* Lightbox Overlay */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 cursor-zoom-out"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full h-full max-w-7xl"
                        >
                            <Image
                                src={selectedImage}
                                alt="Expanded view"
                                fill
                                className="object-contain"
                                priority
                            />

                            {/* Close button */}
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-0 right-0 m-4 text-white/50 hover:text-white transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default SessionApproachSection;
