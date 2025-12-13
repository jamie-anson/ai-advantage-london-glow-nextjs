"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const outcomes = [
    "A clear mental model for building with AI",
    "Confidence in what’s actually possible solo",
    "Momentum on a project you’ve been putting off",
    "The ability to explain and justify AI work to others",
    "A sense of agency most people never reach"
];

const SessionOutcomesSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-24 px-6 relative z-10 bg-black/40">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                        Walk away with
                    </h2>
                </motion.div>

                <div className="grid gap-6">
                    {outcomes.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="flex items-center gap-6 p-6 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                        >
                            <div className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center shrink-0">
                                <svg className="w-4 h-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className="text-xl text-white/90 font-light">{item}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SessionOutcomesSection;
