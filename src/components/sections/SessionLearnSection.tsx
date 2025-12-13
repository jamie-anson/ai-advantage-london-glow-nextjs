"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const learners = [
    {
        title: "How to think bigger than your headcount",
        desc: "The mental models that let one person operate at team scale."
    },
    {
        title: "How to choose tools without drowning",
        desc: "Not a list — a framework for deciding what actually fits you."
    },
    {
        title: "The vital concepts behind effective LLM use",
        desc: "Why models behave the way they do, and how to design around it."
    },
    {
        title: "How branding shapes the build",
        desc: "Clarity of audience = clarity of product."
    },
    {
        title: "How to explain AI to non-technical stakeholders",
        desc: "Including how to sell AI transformation to your boss."
    },
    {
        title: "How to start your own ambitious project",
        desc: "With direct guidance, feedback, and course correction."
    }
];

const SessionLearnSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-24 px-6 md:px-12 bg-black/40">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                        What you’ll learn
                    </h2>
                    <div className="w-24 h-1 bg-brand-green mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {learners.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-green/30 hover:bg-white/10 transition-all duration-300 group"
                        >
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-green transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-white/60 font-light leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SessionLearnSection;
