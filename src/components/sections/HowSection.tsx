"use client";

import { motion } from 'framer-motion';

const steps = [
    {
        phase: "Autonomy",
        title: "Freedom to create on your own terms",
        desc: "With AI code generators and no-code builders, you can make things yourself — apps, tools, little prototypes — without waiting on a dev team. You move when you want to move."
    },
    {
        phase: "Creativity",
        title: "Space to let your ideas run",
        desc: "AI edit tools, design assistants, and content generators let you sketch, shape, and experiment fast. You can follow your curiosity and watch ideas come alive in minutes, not months. You’ll learn how to use AI in a way that feels natural, useful, and empowering — not technical. By the end of the day, you won’t just understand AI. You’ll have built something with it."
    },
    {
        phase: "Ownership",
        title: "Work with your name on it",
        desc: "When you create a tool the team actually uses, you’re not just working in the company — you’re building the company. Your work becomes a structural part of how the business runs. That gives you a real stake. You’re no longer just an employee. You’re invested, committed, and impossible to ignore."
    },
    {
        phase: "Impact",
        title: "The kind that earns respect",
        desc: "Impact is when your idea saves the team hours. When your tool cuts costs. When a tiny thing you built makes everyone’s day easier. That’s status. That’s leverage. That’s you creating value your company can’t ignore. It’s the fastest way to stand out without asking for permission."
    }
];

const HowSection = () => {
    return (
        <section className="py-32 bg-transparent relative overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="mb-20">
                    <p className="text-blue-400 font-mono tracking-widest text-xs uppercase mb-4">HOW</p>
                    <h2 className="text-5xl md:text-7xl font-serif font-bold italic text-white mb-6">
                        AI gives you the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">freedom to create.</span>
                    </h2>
                    <p className="text-xl text-white/60 max-w-2xl font-light">
                        AI isn’t the end goal. <br />
                        AI is the tool that gives you back…
                    </p>
                </div>

                <div className="space-y-16">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.phase}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group border-l border-white/10 pl-8 hover:border-blue-500 transition-colors duration-500"
                        >
                            <span className="font-mono text-blue-400/50 text-xs tracking-widest block mb-2 group-hover:text-blue-400 transition-colors">
                                0{index + 1} {"//"} {step.phase}
                            </span>
                            <h3 className="text-3xl font-serif font-bold text-white mb-4">
                                {step.title}
                            </h3>
                            <p className="text-white/60 leading-relaxed font-light max-w-3xl">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowSection;
