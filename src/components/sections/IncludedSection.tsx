"use client";

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const includedItems = [
    "A full day of hands-on training",
    "Simple workbook + templates",
    "Your first small AI-built project",
    "Guidance from someone patient and practical",
    "Lunch + coffee",
    "A short PDF you can send to your boss (if you want reimbursement)",
    "A certificate of completion",
    "30-day follow-up tips by email"
];

const IncludedSection = () => {
    return (
        <section className="section py-24 bg-white/5 border-y border-white/10">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="heading-lg mb-4 text-white">📦 What’s included</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {includedItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 flex flex-col items-center text-center hover:bg-white/10 transition-colors"
                        >
                            <CheckCircle2 className="w-8 h-8 text-brand-green mb-4" />
                            <p className="body-lg text-white/90">{item}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IncludedSection;
