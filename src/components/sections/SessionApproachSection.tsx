"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SessionApproachSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

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
                            <ul className="space-y-4 text-white/50 text-lg font-light">
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
                                    You can Google tools.
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
                                    You can watch tutorials.
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
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

                            <h3 className="text-xl font-mono uppercase tracking-widest text-brand-green mb-8">
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
                                        <span className="text-brand-green mt-1">→</span>
                                        <p className="text-white/80 leading-relaxed font-light">&quot;I need someone to show me that the crazy idea I have isn&apos;t actually crazy.&quot;</p>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-12 text-white/80 italic font-serif text-2xl border-l-2 border-brand-green pl-6 py-2">
                                That’s what this day is for.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="text-center mb-16">
                    <motion.h2
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
                    >
                        The approach: <span className="italic text-brand-green">lead by example</span>
                    </motion.h2>
                    <motion.p
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-xl text-white/70 max-w-3xl mx-auto font-light"
                    >
                        Instead of teaching AI in isolation, the entire day is anchored around a real project: <span className="font-mono text-white bg-white/10 px-2 py-0.5 rounded">Project Beacon</span>
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
                    {[
                        "how the idea was framed",
                        "how tools were chosen (and rejected)",
                        "how LLMs were guided over time",
                        "how complexity was controlled",
                        "how branding created clarity and trust",
                        "how the project moved from “this shouldn’t be possible” to real-world impact"
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                        >
                            <div className="text-brand-green/40 font-mono text-sm mb-4 group-hover:text-brand-green transition-colors">0{index + 1}</div>
                            <p className="text-lg text-white/90 font-light leading-relaxed">
                                You&apos;ll see <span className="text-white font-normal">{item}</span>
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* --- Project Beacon Intro Section (Moved Here) --- */}
                <div className="container mx-auto max-w-4xl mb-24">
                    <motion.div
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h2 className="text-sm font-mono text-brand-green uppercase tracking-widest mb-4">Case Study</h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                            The project you’ll study: <span className="italic text-white/80">Project Beacon</span>
                        </h3>

                        <div className="text-left bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden group hover:bg-white/10 transition-colors duration-500">
                            {/* Gradient glow effect */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-green/10 blur-[80px] rounded-full group-hover:bg-brand-green/20 transition-all duration-700"></div>

                            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-8">
                                <strong className="text-white font-normal">Project Beacon</strong> is an open-source initiative designed to detect and expose AI corruption — where models are influenced, censored, or distorted without users knowing.
                            </p>

                            <div className="space-y-6 text-lg text-white/70 font-light">
                                <p>
                                    It tackles a problem most people agree is important, but assume requires teams, institutions, and years of work.
                                </p>
                                <p>
                                    Instead, it was designed, built, and scoped by <span className="text-white font-normal border-b border-brand-green/30">one person</span>, using AI as leverage.
                                </p>
                                <p>
                                    In this course, Project Beacon is unpacked end-to-end — not as a demo, but as a real, ambitious project — so you can see how it was actually built, and apply the same thinking to your own work.
                                </p>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                                <div className="flex-1">
                                    <div className="text-4xl font-serif text-brand-green mb-1">£100k+</div>
                                    <div className="text-sm font-mono text-white/50 uppercase tracking-wider">Valuation after 3 months</div>
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
        </section>
    );
};

export default SessionApproachSection;
