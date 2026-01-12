"use client";

import { motion } from 'framer-motion';

const InnovationAudienceSection = () => {
    return (
        <section className="py-24 bg-white/5 border-y border-white/10 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        {/* Who this is for */}
                        <motion.div
                            initial={{ opacity: 1, x: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                                Who this <br />
                                <span className="text-brand-green italic font-sans uppercase text-sm tracking-[0.2em] not-italic">is designed for:</span>
                            </h2>
                            <ul className="space-y-6">
                                {[
                                    "Innovation teams exploring AI opportunities",
                                    "Internal product or transformation groups tasked with experimentation",
                                    "Innovation leads or teams of one operating inside larger organisations"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <span className="text-brand-green font-bold text-2xl leading-none mt-1">·</span>
                                        <p className="text-white/90 text-lg leading-relaxed font-light">{item}</p>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-8 border-t border-white/10">
                                <p className="text-xl text-white italic font-serif leading-relaxed">
                                    Whether you’re sending one person or an entire team, the goal is the same:
                                </p>
                                <p className="mt-4 text-2xl text-brand-green font-bold tracking-tight">
                                    Build internal capability to explore AI ideas faster and more confidently.
                                </p>
                            </div>
                        </motion.div>

                        {/* This is not for */}
                        <motion.div
                            initial={{ opacity: 1, x: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
                        >
                            <h2 className="text-2xl font-serif font-bold text-white mb-8 opacity-60">
                                This is <span className="text-red-400 not-italic uppercase font-mono text-sm tracking-widest ml-2">not for:</span>
                            </h2>
                            <ul className="space-y-6">
                                {[
                                    "Introductory AI or “prompt basics” learning",
                                    "Passive training or slide-led sessions",
                                    "Teams looking to outsource delivery",
                                    "People without the time or remit to experiment after the session"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <span className="text-red-400/50 font-bold text-2xl leading-none mt-1">×</span>
                                        <p className="text-white/60 text-lg leading-relaxed font-light">{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InnovationAudienceSection;
