"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import ButtonPrimary from '../ButtonPrimary';

import Image from 'next/image';

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
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">
                        Build what normally <br />
                        <span className="italic text-white/50">takes a team</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-white/80 font-light mb-12 max-w-2xl mx-auto">
                        If you’ve felt that your ideas are bigger than your circumstances, this day is designed for you.
                    </p>

                    <div className="flex flex-col gap-8 mt-16 max-w-4xl mx-auto">
                        {/* Primary Offering: Reverted to original style */}
                        <div className="rounded-2xl p-8 border border-white/10 backdrop-blur-sm relative overflow-hidden transition-all duration-700 bg-gradient-to-br from-black to-muted group text-left h-full flex flex-col min-h-[400px]">
                            {/* Background image with fade effect */}
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
                                <Image
                                    src="/images/ai-advantage-1.jpg"
                                    alt="Background"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 800px"
                                    className="object-cover object-left opacity-60 transition-all duration-1000 group-hover:opacity-80"
                                    style={{
                                        clipPath: 'polygon(0 0, 75% 0, 100% 100%, 0% 100%)'
                                    }}
                                />
                            </div>

                            {/* Content wrapper */}
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="text-right">
                                    <div className="mb-6">
                                        <h3 className="text-4xl font-serif mb-8 text-white">Invite-Only Ticket</h3>
                                    </div>
                                    <div className="mb-6 font-serif">
                                        <div className="text-5xl font-bold text-white tracking-tight">£725</div>
                                        <p className="text-sm text-white/70 mt-1 italic">Final price confirmed on invitation.</p>
                                    </div>
                                </div>

                                <ul className="mb-8 space-y-3">
                                    {[
                                        "Full workshop access",
                                        "Curated lunch in a luxury setting",
                                        "Surprise extras, tailored to the venue & guest list"
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-center justify-end gap-3 text-white">
                                            <span className="text-right text-white/90">{feature}</span>
                                            <span className="w-5 h-5 flex-shrink-0 rounded-full bg-brand-green/20 flex items-center justify-center">
                                                <span className="w-2 h-2 bg-brand-green rounded-full"></span>
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto flex justify-end">
                                    <ButtonPrimary
                                        glowEffect
                                        onClick={() => router.push('/request-invite')}
                                    >
                                        Request Invite
                                    </ButtonPrimary>
                                </div>
                            </div>
                        </div>

                        {/* Secondary Offering: Innovation Teams style */}
                        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col h-full relative group hover:border-white/20 transition-all duration-500 text-left">
                            <div className="flex-grow">
                                <h3 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-6">Bespoke Acceleration</h3>

                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 leading-tight">
                                    Invite-Only Founder Sessions
                                </h2>

                                <div className="mb-8 font-serif">
                                    <div className="text-3xl font-bold text-white/50 tracking-tight">POA</div>
                                    <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Custom engagement</p>
                                </div>

                                <ul className="space-y-4 mb-12">
                                    {[
                                        "Half-day intensive",
                                        "Premium location",
                                        "1:1 acceleration for early-stage founders",
                                        "Idea-stage only. Not a corporate package."
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start gap-4 text-white/60">
                                            <span className="text-white/20 font-bold mt-1">•</span>
                                            <span className="text-lg">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                            <div className="mt-12">
                                <a
                                    href="mailto:jamie@aiworkshop.london"
                                    className="w-full border border-white/10 hover:border-white/30 hover:bg-white/5 text-white/80 py-4 px-8 rounded-full font-medium transition-all text-center block"
                                >
                                    Inquire for Details
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SessionCTASection;
