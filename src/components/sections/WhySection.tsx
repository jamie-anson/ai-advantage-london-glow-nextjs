"use client";

import { motion } from 'framer-motion';

const WhySection = () => {
    return (
        <section className="py-32 bg-transparent text-[#E0E0E0] relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="grid md:grid-cols-12 gap-16 items-start">
                    {/* Left Column - Editorial Title */}
                    <div className="md:col-span-4 sticky top-32">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-5xl font-serif font-bold italic text-brand-gold mb-8"
                        >
                            The <br /> Trap.
                        </motion.h2>
                        <div className="h-[1px] w-12 bg-white/20 mb-8"></div>
                        <p className="font-sans text-sm tracking-widest uppercase text-white/40">
                            Issue 01: The Modern Workplace
                        </p>
                    </div>

                    {/* Right Column - Content */}
                    <div className="md:col-span-8 space-y-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                                <span className="text-blue-400 block text-xs font-mono tracking-widest uppercase mb-4">WHY</span>
                                Because you want more than tasks. <br />
                                You want fulfilment.
                            </h2>

                            <p className="text-lg text-white/60 leading-relaxed mb-6 font-light">
                                Let&apos;s be honest: most jobs box you in.
                            </p>
                            <ul className="list-none text-white/60 mb-6 space-y-2 font-mono text-sm">
                                <li className="flex items-center gap-2"><span className="text-blue-400">/</span> meaning gets stripped out</li>
                                <li className="flex items-center gap-2"><span className="text-blue-400">/</span> ownership disappears</li>
                                <li className="flex items-center gap-2"><span className="text-blue-400">/</span> purpose gets blurred</li>
                                <li className="flex items-center gap-2"><span className="text-blue-400">/</span> impact goes unnoticed</li>
                                <li className="flex items-center gap-2"><span className="text-blue-400">/</span> autonomy is the first thing to vanish</li>
                            </ul>
                            <p className="text-lg text-white/60 leading-relaxed">
                                And somewhere in all that, you get smaller. <br />
                                Your ideas stay trapped. <br />
                                Your creativity gets smothered.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-sm p-10 border border-white/10 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"></div>
                            <div className="absolute -top-3 -left-3 text-6xl text-white/10 font-serif">“</div>

                            <p className="text-white/70 mb-6 font-light">
                                You didn&apos;t land here because you want to “learn AI.” <br />
                                You landed here because you want to feel capable again. <br />
                                Creative again. <br />
                                In control again.
                            </p>
                            <p className="text-white font-bold border-l-2 border-blue-400 pl-4">
                                You want fulfilment — the kind that comes from building something that’s yours.
                            </p>
                            <p className="text-white/60 mt-6 font-light">
                                That’s why this workshop exists.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhySection;
