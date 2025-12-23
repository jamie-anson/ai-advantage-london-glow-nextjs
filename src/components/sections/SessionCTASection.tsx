"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import ButtonPrimary from '../ButtonPrimary';

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

                    <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto mt-12">
                        {[
                            {
                                name: "Invite-Only Ticket",
                                price: "£625",
                                priceSubtitle: "Final price confirmed on invitation.",
                                features: [
                                    "Full workshop access",
                                    "Curated lunch in a luxury setting",
                                    "Surprise extras, tailored to the venue & guest list"
                                ],
                                bgClass: "bg-gradient-to-br from-black to-muted border-brand-green/40",
                                popular: false
                            }
                        ].map((ticket, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "rounded-2xl p-8 border backdrop-blur-sm relative overflow-hidden transition-all duration-700",
                                    ticket.bgClass,
                                    "group text-left"
                                )}
                            >
                                {/* Background image with fade effect */}
                                <div className="absolute inset-0 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-0"></div>
                                    <div
                                        className={cn(
                                            "absolute inset-0 bg-cover bg-center opacity-30 transition-all duration-1000",
                                            "group-hover:opacity-40"
                                        )}
                                        style={{
                                            backgroundImage: 'url("/images/ai-advantage-1.jpg")',
                                            backgroundPosition: 'left center',
                                            clipPath: 'polygon(0 0, 60% 0, 100% 100%, 0% 100%)'
                                        }}
                                    />
                                </div>
                                {/* Content wrapper */}
                                <div className="relative z-10">
                                    <div className="text-right">
                                        <div className="mb-6">
                                            <h3 className="text-4xl font-serif mb-8">{ticket.name}</h3>
                                        </div>
                                        <div className="mb-6">
                                            <div className="text-4xl font-bold">{ticket.price}</div>
                                            {ticket.priceSubtitle && (
                                                <p className="text-sm text-white/70 mt-1 italic">{ticket.priceSubtitle}</p>
                                            )}
                                        </div>
                                    </div>

                                    <ul className="mb-8 space-y-3">
                                        {ticket.features.map((feature, i) => (
                                            <li key={i} className="flex items-center justify-end gap-3 text-white">
                                                <span className="text-right">{feature}</span>
                                                <span className="w-5 h-5 flex-shrink-0 rounded-full bg-brand-green/20 flex items-center justify-center">
                                                    <span className="w-2 h-2 bg-brand-green rounded-full"></span>
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-auto flex justify-end">
                                        <ButtonPrimary onClick={() => router.push('/request-invite')}>
                                            Request Invite
                                        </ButtonPrimary>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SessionCTASection;
