"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SessionAudienceSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-24 px-6 relative z-10 bg-white/5 border-y border-white/10">
            <div className="container mx-auto max-w-5xl">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <motion.div
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8">
                            Who this is for
                        </h2>
                        <div className="space-y-6">
                            <p className="text-xl text-white/50 italic font-serif">
                                This is not an intro to AI. <br />
                                And it’s not a coding bootcamp.
                            </p>
                            <p className="text-2xl text-white font-medium">
                                It’s for people ready to operate differently.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <ul className="space-y-6">
                            {[
                                "Executives exploring AI beyond surface-level use",
                                "Founders building without large teams",
                                "Senior ICs who want leverage, not more meetings",
                                "Anyone who feels capable of more, but constrained by the old rules"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-brand-green mt-2.5 shrink-0"></span>
                                    <span className="text-lg text-white/90 leading-relaxed font-light">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>

                {/* --- Merged Outcomes Section (Walk away with) --- */}
                <div className="mt-32 border-t border-white/10 pt-24">
                    <motion.div
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            Walk away with
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "A clear mental model for building with AI",
                            "Confidence in what’s actually possible solo",
                            "Momentum on a project you’ve been putting off",
                            "The ability to explain and justify AI work to others",
                            "A sense of agency most people never reach"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                                className="flex items-center gap-6 p-6 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                            >
                                <div className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-lg text-white/90 font-light">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SessionAudienceSection;
