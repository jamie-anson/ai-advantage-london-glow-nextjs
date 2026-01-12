"use client";

import { motion } from 'framer-motion';

const InnovationOutcomesSection = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-mono text-brand-green uppercase tracking-[0.3em] mb-4">The Curriculum</h2>
                        <h3 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                            What you’ll <span className="italic text-brand-green">actually</span> learn
                        </h3>
                    </div>

                    <div className="grid gap-8">
                        {[
                            {
                                title: "Strategic Filtering",
                                description: "Identify which AI ideas are worth testing — and which aren’t."
                            },
                            {
                                title: "Realistic Scoping",
                                description: "Scope an AI MVP realistically, without over-engineering."
                            },
                            {
                                title: "Rapid Experimentation",
                                description: "Design experiments that can be built and tested in ~30 days."
                            },
                            {
                                title: "Modern Workflows",
                                description: "Work with modern AI tools and workflows without needing a full engineering team."
                            },
                            {
                                title: "Decision Intelligence",
                                description: "Make clearer build / no-build decisions earlier and with more confidence."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 1, y: 0 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex items-start gap-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-green/30 hover:bg-white/[0.07] transition-all duration-500"
                            >
                                <div className="text-brand-green font-mono text-xl pt-1 opacity-40 group-hover:opacity-100 transition-opacity">
                                    0{i + 1}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-white/70 text-lg leading-relaxed font-light">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 p-8 border-l-2 border-brand-green bg-brand-green/5 backdrop-blur-sm rounded-r-2xl">
                        <p className="text-2xl text-white font-serif italic leading-relaxed">
                            &quot;This is about learning how to think and build differently — not copying templates.&quot;
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InnovationOutcomesSection;
