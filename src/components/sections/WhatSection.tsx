"use client";

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const items = [
    {
        title: "How to build without needing a developer",
        description: "AI + no-code = creativity unlocked."
    },
    {
        title: "Bend the AI tools to your will",
        description: "A clear, simple method that works across ChatGPT, Claude, Gemini and more — so you think in systems, not one-off tricks."
    },
    {
        title: "Turn ideas in your head into things that exist",
        description: "You’ll learn how to translate imagination into structure — and structure into a working prototype."
    },
    {
        title: "Vibe engineering",
        description: "Building is hard, so we shape the environment, rhythm and mindset to make it feel energising, not overwhelming."
    }
];

const WhatSection = () => {
    return (
        <section className="section py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-green/5 skew-y-3 transform origin-top-left scale-110" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="heading-lg mb-12 text-brand-green">
                        🛠 WHAT — A hands-on, 1-day workshop
                    </h2>

                    <p className="body-lg text-white/80 mb-12">
                        A welcoming, small-group session (12 people max) where you’ll learn:
                    </p>

                    <div className="grid gap-8">
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex gap-6 items-start"
                            >
                                <div className="mt-1 bg-brand-green/20 p-2 rounded-full">
                                    <Check className="w-6 h-6 text-brand-green" />
                                </div>
                                <div>
                                    <h3 className="heading-md mb-2 text-white">{item.title}</h3>
                                    <p className="body-lg text-white/70">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-16 p-8 border border-brand-green/30 rounded-2xl bg-brand-green/5 text-center"
                    >
                        <p className="heading-md text-brand-green">
                            You’ll leave with something real you built, and the confidence to keep creating.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhatSection;
