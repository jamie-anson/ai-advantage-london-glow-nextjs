"use client";

const InnovationHowItWorksSection = () => {
    return (
        <section className="py-24 bg-white/5 border-y border-white/10 relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                                How the <br /><span className="text-brand-green italic">day works</span>
                            </h2>
                            <p className="text-xl text-white/80 leading-relaxed mb-8">
                                This is not a hackathon and not a build-in-a-day event.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <span className="text-brand-green font-bold">→</span>
                                    <p className="text-white/90 text-lg">You’ll work through real examples and live exercises</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="text-brand-green font-bold">→</span>
                                    <p className="text-white/90 text-lg">You’ll learn the decision-making framework behind successful AI MVPs</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black/40 border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 blur-3xl rounded-full group-hover:bg-brand-green/20 transition-all duration-700"></div>

                            <h3 className="text-sm font-mono text-brand-green uppercase tracking-widest mb-8">You’ll leave with:</h3>
                            <ul className="space-y-4 mb-12">
                                <li className="flex items-center gap-3 text-white/90 text-lg">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                                    A clear build approach
                                </li>
                                <li className="flex items-center gap-3 text-white/90 text-lg">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                                    A realistic scope
                                </li>
                                <li className="flex items-center gap-3 text-white/90 text-lg">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                                    A plan to execute over the following month
                                </li>
                            </ul>

                            <p className="text-white font-mono text-sm uppercase tracking-widest pt-8 border-t border-white/10 opacity-60">
                                Think of it as installing a shared build language your team can use again and again.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InnovationHowItWorksSection;
