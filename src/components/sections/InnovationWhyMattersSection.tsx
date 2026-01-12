"use client";

const InnovationWhyMattersSection = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-12">
                        Why this matters for <br /><span className="text-brand-green italic">innovation teams</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 text-left mt-20">
                        <div className="space-y-6">
                            <p className="text-2xl text-white/90 font-light leading-relaxed">
                                Most innovation teams aren’t short on ideas.
                            </p>
                            <p className="text-lg text-white/60">
                                They’re short on:
                            </p>
                            <ul className="space-y-3 font-mono text-brand-green uppercase tracking-widest text-sm">
                                <li>• Time</li>
                                <li>• Engineering capacity</li>
                                <li>• Clear scoping</li>
                                <li>• Confidence about what’s possible</li>
                            </ul>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-8">
                            <h3 className="text-xl font-bold text-white">This session helps teams:</h3>
                            <ul className="space-y-4">
                                {[
                                    "Stop waiting",
                                    "Stop over-scoping",
                                    "Stop turning experiments into multi-quarter projects"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-white/90 text-lg group">
                                        <div className="w-8 h-[1px] bg-brand-green group-hover:w-12 transition-all duration-500"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-2xl font-serif text-brand-green pt-4">
                                And start learning faster with less risk.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InnovationWhyMattersSection;
