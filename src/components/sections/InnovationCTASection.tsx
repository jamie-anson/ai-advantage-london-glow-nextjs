"use client";

const InnovationCTASection = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-sm font-mono text-brand-green uppercase tracking-[0.4em] mb-8">Application</h2>
                    <h3 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                        This session is <br /><span className="italic">intentionally small.</span>
                    </h3>
                    <p className="text-xl text-white/70 leading-relaxed mb-16 max-w-2xl mx-auto">
                        We review applications to ensure attendees are working on real problems, have space to experiment, and the group benefits from shared context.
                    </p>

                    <div className="space-y-6">
                        <a
                            href="/request-invite?source=innovation-teams"
                            className="inline-block bg-brand-green text-black px-12 py-6 rounded-full font-bold text-xl hover:bg-brand-green/90 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(198,255,255,0.4)]"
                        >
                            Apply to Attend
                        </a>
                        <p className="text-white/40 font-mono text-xs uppercase tracking-widest pt-4">
                            Applications reviewed weekly
                        </p>
                    </div>

                    <div className="mt-40 pt-20 border-t border-white/10 max-w-2xl mx-auto">
                        <p className="text-white/50 text-sm font-mono uppercase tracking-[0.2em] mb-8">Final reassurance</p>
                        <p className="text-2xl md:text-3xl font-serif text-white italic leading-relaxed">
                            &quot;This isn’t about becoming an AI expert. It’s about giving innovation teams a practical, modern way to explore AI ideas — without hype, without over-investment, and without waiting for permission.&quot;
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InnovationCTASection;
