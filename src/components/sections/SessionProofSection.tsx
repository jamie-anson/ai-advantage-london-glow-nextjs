"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SessionProofSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-32 px-6 relative z-10 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-brand-green/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>

            <div className="container mx-auto max-w-4xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-white/40 mb-8">Proof, not promises</h2>

                    <div className="border border-white/20 bg-white/5 backdrop-blur-sm rounded-3xl p-10 md:p-16 inline-block">
                        <p className="text-xl md:text-2xl text-white/80 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
                            The project you’ll study generated over <span className="text-white font-bold">£100k</span> in its first three months — built by one person using AI.
                        </p>
                        <div className="w-16 h-[1px] bg-brand-green mx-auto mb-8"></div>
                        <p className="text-3xl md:text-5xl font-serif italic text-white">
                            That’s not the headline. <br />
                            <span className="text-white/50">It’s the evidence.</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SessionProofSection;
