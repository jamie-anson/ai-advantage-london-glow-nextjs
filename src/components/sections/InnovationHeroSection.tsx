const InnovationHeroSection = () => {
    return (
        <section className="min-h-screen relative flex flex-col items-center text-[#F0F0F0] overflow-hidden pt-32 md:pt-[172px] pb-20">
            {/* Subtle background glow */}
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-900/20 blur-[150px] rounded-full mix-blend-screen animate-pulse-slow"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-green/10 blur-[150px] rounded-full mix-blend-screen animate-pulse-slow delay-1000"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start max-w-6xl mx-auto mt-12">
                    {/* Left Column - Title & Label */}
                    <div className="text-left flex flex-col items-start animate-fade-in-up">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                            <span>Applied AI for </span>
                            <span className="text-brand-green/90 italic text-nowrap">Innovation Teams</span>
                        </h1>

                        <div className="flex items-center gap-3 mt-8">
                            <span className="font-mono text-brand-green/80 tracking-widest text-xs uppercase border border-brand-green/20 px-4 py-2 rounded-full bg-brand-green/5 backdrop-blur-sm">
                                Full-Day Workshop // London // Practitioner-Led
                            </span>
                        </div>

                        <div className="mt-12 space-y-4">
                            <a
                                href="/request-invite?source=innovation-teams"
                                className="inline-block bg-brand-green text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-green/90 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(198,255,255,0.3)]"
                            >
                                Apply to Attend
                            </a>
                            <p className="text-white/50 text-xs font-mono uppercase tracking-widest ml-1">
                                Applications reviewed weekly
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="text-left space-y-8 md:mt-32 animate-fade-in-up animate-delay-200">
                        <p className="text-3xl md:text-4xl font-normal text-white font-sans tracking-tight leading-snug">
                            Learn a faster, more realistic way to prototype and test AI ideas — without waiting for engineering capacity.
                        </p>

                        <p className="text-white/90 leading-relaxed text-lg">
                            In one focused, in-person session, your innovation team learns a repeatable method to turn AI ideas into scoped, testable MVPs they can build and ship over the following month.
                        </p>

                        <div className="pt-4 border-t border-white/10 uppercase font-mono text-sm tracking-[0.2em] space-y-2">
                            <p className="text-brand-green">No slides. No demos. No hype.</p>
                            <p className="text-white/60">This is about capability — not theory.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Visual element at the bottom - similar to the cards but maybe simpler or just a nice aesthetic divider */}
            <div className="container mx-auto px-6 w-full relative z-10 mt-auto pt-24">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
        </section>
    );
};

export default InnovationHeroSection;
