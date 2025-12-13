"use client";

import { motion } from 'framer-motion';

const curriculum = [
    {
        title: "How to build without needing a developer",
        desc: "AI + no-code = creativity unlocked.",
        icon: "✔"
    },
    {
        title: "Bend the AI tools to your will",
        desc: "A clear, simple method that works across ChatGPT, Claude, Gemini and more — so you think in systems, not one-off tricks.",
        icon: "✔"
    },
    {
        title: "Turn ideas in your head into things that exist",
        desc: "You’ll learn how to translate imagination into structure — and structure into a working prototype.",
        icon: "✔"
    },
    {
        title: "Vibe engineering",
        desc: "Building is hard, so we shape the environment, rhythm and mindset to make it feel energising, not overwhelming.",
        icon: "✔"
    }
];
const CourseWhatSection = () => {
    return (
        <section className="py-32 bg-transparent text-[#F0F0F0] border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="mb-20">
                    <p className="text-blue-400 font-mono tracking-widest text-xs uppercase mb-4">WHAT</p>
                    <h2 className="text-5xl md:text-7xl font-serif font-bold italic text-white mb-6">
                        A hands-on, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">1-day workshop.</span>
                    </h2>
                    <p className="text-xl text-white/60 max-w-2xl font-light">
                        A welcoming, small-group session (12 people max) where you’ll learn:
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Item 1 */}
                    <div className="group border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:border-blue-500/50 transition-all duration-500">
                        <span className="font-mono text-blue-400/50 text-xs tracking-widest block mb-4">01 // NO-CODE</span>
                        <h3 className="text-2xl font-serif font-bold text-white mb-4">How to build without needing a developer</h3>
                        <p className="text-white/60 font-light leading-relaxed">
                            AI + no-code = creativity unlocked.
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div className="group border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:border-blue-500/50 transition-all duration-500">
                        <span className="font-mono text-blue-400/50 text-xs tracking-widest block mb-4">02 // MASTERY</span>
                        <h3 className="text-2xl font-serif font-bold text-white mb-4">Bend the AI tools to your will</h3>
                        <p className="text-white/60 font-light leading-relaxed">
                            A clear, simple method that works across ChatGPT, Claude, Gemini and more — so you think in systems, not one-off tricks.
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div className="group border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:border-blue-500/50 transition-all duration-500">
                        <span className="font-mono text-blue-400/50 text-xs tracking-widest block mb-4">03 // PROTOTYPING</span>
                        <h3 className="text-2xl font-serif font-bold text-white mb-4">Turn ideas in your head into things that exist</h3>
                        <p className="text-white/60 font-light leading-relaxed">
                            You’ll learn how to translate imagination into structure — and structure into a working prototype.
                        </p>
                    </div>

                    {/* Item 4 */}
                    <div className="group border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:border-blue-500/50 transition-all duration-500">
                        <span className="font-mono text-blue-400/50 text-xs tracking-widest block mb-4">04 // ENVIRONMENT</span>
                        <h3 className="text-2xl font-serif font-bold text-white mb-4">Vibe engineering</h3>
                        <p className="text-white/60 font-light leading-relaxed">
                            Building is hard, so we shape the environment, rhythm and mindset to make it feel energising, not overwhelming.
                        </p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-lg text-white/80 font-light italic">
                        You’ll leave with something real you built, and the confidence to keep creating.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CourseWhatSection;
