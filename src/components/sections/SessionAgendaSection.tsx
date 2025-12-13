"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const schedule = [
    { time: "09:30", title: "Inspiration", desc: "A walkthrough of Project Beacon and what’s now possible for one person." },
    { time: "11:00", title: "The tools", desc: "What was used, why it was used, and how to choose your own stack." },
    { time: "12:00", title: "Vital concepts", desc: "The ideas that unlock scale and momentum." },
    { time: "12:30", title: "Lunch", desc: "", isBreak: true },
    { time: "13:30", title: "Branding", desc: "Knowing your customer so your product knows what to be." },
    { time: "14:30", title: "How LLMs work", desc: "Just enough truth to replace superstition with intuition." },
    { time: "14:50", title: "Selling AI transformation", desc: "How to get buy-in without triggering fear." },
    { time: "15:00", title: "Practical session", desc: "Start your ambitious project and get hands-on guidance.", duration: "Until 17:00" },
];

const SessionAgendaSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-24 px-6 relative z-10">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24"
                >
                    <span className="font-mono text-brand-green/60 uppercase tracking-widest text-sm mb-4 block">Schedule</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">
                        The day, at a glance
                    </h2>
                </motion.div>

                <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12 pb-12">
                    {schedule.map((slot, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`relative pl-8 md:pl-16 ${slot.isBreak ? 'opacity-60' : ''}`}
                        >
                            {/* Dot */}
                            <div className={`absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full ${slot.isBreak ? 'bg-white/30' : 'bg-brand-green'}`}></div>

                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                                <div className="font-mono text-brand-green text-lg w-32 shrink-0">
                                    {slot.time}
                                    {slot.duration && <span className="text-xs text-white/40 block mt-1">{slot.duration}</span>}
                                </div>
                                <div>
                                    <h3 className={`text-2xl font-bold mb-2 ${slot.isBreak ? 'text-white/70 italic' : 'text-white'}`}>
                                        {slot.title}
                                    </h3>
                                    {slot.desc && (
                                        <p className="text-white/60 font-light text-lg">
                                            {slot.desc}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SessionAgendaSection;
