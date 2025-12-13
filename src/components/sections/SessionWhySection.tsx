"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SessionWhySection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-24 px-6 md:px-12 relative z-10">
            <div className="container mx-auto max-w-4xl">
                <div className="flex flex-col md:flex-row gap-12 items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/3"
                    >
                        <h2 className="text-6xl md:text-7xl font-serif font-bold text-white/10 leading-none">
                            WHY
                        </h2>
                        <h3 className="text-3xl font-bold text-white mt-[-20px] ml-2">
                            Why this matters
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:w-2/3 space-y-8"
                    >
                        <div>
                            <p className="text-2xl text-white font-light">
                                Most people don’t lack intelligence. <br />
                                <span className="text-brand-green font-normal">They lack leverage.</span>
                            </p>
                        </div>

                        <div className="pl-6 border-l border-white/20 space-y-4">
                            <p className="text-white/60">They have:</p>
                            <ul className="space-y-2">
                                <li className="text-lg text-white/90">• Ideas that feel too big</li>
                                <li className="text-lg text-white/90">• Projects they keep postponing</li>
                                <li className="text-lg text-white/90">• Ambition constrained by headcount, budget, or permission</li>
                            </ul>
                        </div>

                        <div className="pt-8 relative">
                            <div className="absolute top-8 left-0 w-20 h-[1px] bg-brand-green"></div>
                            <p className="text-xl leading-relaxed text-white/80 font-light">
                                AI changes that — but only if you know how to work with it properly.
                                This course <span className="text-white font-medium border-b border-white/30">compresses what normally takes weeks or months</span> of trial and error into a single day of clarity.
                            </p>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default SessionWhySection;
