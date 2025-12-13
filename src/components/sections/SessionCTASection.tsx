"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

const SessionCTASection = () => {
    const router = useRouter();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-32 px-6 relative z-10 text-center overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green/10 to-transparent pointer-events-none"></div>

            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">
                        Build what normally <br />
                        <span className="italic text-white/50">takes a team</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-white/80 font-light mb-12 max-w-2xl mx-auto">
                        If you’ve felt that your ideas are bigger than your circumstances — this day is designed for you.
                    </p>

                    <button
                        onClick={() => router.push('/request-invite')}
                        className="group relative bg-brand-green text-black px-12 py-5 text-xl tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 rounded-full font-bold overflow-hidden"
                    >
                        <span className="relative z-10 font-mono">Apply Now</span>
                        <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                    </button>

                    <p className="mt-8 text-white/40 text-sm font-mono uppercase tracking-widest">
                        Limited space available
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default SessionCTASection;
