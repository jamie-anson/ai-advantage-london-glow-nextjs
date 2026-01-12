"use client";

const InnovationFormatPricingSection = () => {
    return (
        <section className="py-24 bg-white/5 border-y border-white/10 relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Format & Delivery */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-white mb-8">Format & delivery</h2>
                                <ul className="space-y-4">
                                    {[
                                        "In-person, London",
                                        "Small, curated group",
                                        "Full-day session",
                                        "Delivered by practitioners, not trainers"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white/80 text-lg">
                                            <span className="text-brand-green">/</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-8 border-t border-white/10">
                                <h3 className="text-sm font-mono text-brand-green uppercase tracking-widest mb-4">Also available as:</h3>
                                <ul className="space-y-4 text-white/70">
                                    <li>
                                        <strong className="text-white block mb-1">Bespoke in-company sessions</strong>
                                        Tailored around your organisation’s constraints and opportunities
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Pricing & Access */}
                        <div className="bg-black/40 border border-white/10 rounded-2xl p-8 md:p-12">
                            <h2 className="text-3xl font-serif font-bold text-white mb-12">Pricing & access</h2>

                            <div className="space-y-12">
                                <div>
                                    <h3 className="text-sm font-mono text-brand-green uppercase tracking-widest mb-4">Open enrolment</h3>
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-4xl font-bold text-white">£750–£950</span>
                                        <span className="text-white/40 font-mono text-xs">+ VAT per attendee</span>
                                    </div>
                                    <p className="text-white/50 text-sm italic">(Exact pricing confirmed on invitation)</p>
                                </div>

                                <div className="pt-8 border-t border-white/10">
                                    <h3 className="text-sm font-mono text-brand-green uppercase tracking-widest mb-4">Bespoke in-company delivery</h3>
                                    <p className="text-white/80 mb-6">Custom pricing based on:</p>
                                    <ul className="grid grid-cols-2 gap-4 text-white/60 text-sm font-mono uppercase tracking-wider">
                                        <li>• Team size</li>
                                        <li>• Customisation</li>
                                        <li className="col-span-2">• Pre/post-session work</li>
                                    </ul>
                                </div>

                                <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/5 text-center">
                                    <p className="text-xs font-mono text-white/40 uppercase tracking-[0.2em]">Corporate invoicing available</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InnovationFormatPricingSection;
