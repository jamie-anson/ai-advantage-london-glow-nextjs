"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SessionOverviewSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-24 md:py-32 px-6 relative z-10">
            <div className="container mx-auto max-w-5xl">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left Column: What it isn't */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
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
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
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
                                    <span className="text-white text-xl font-light">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-12 text-white/80 italic font-serif text-2xl border-l-2 border-brand-green pl-6 py-2">
                            That’s what this day is for.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SessionOverviewSection;
