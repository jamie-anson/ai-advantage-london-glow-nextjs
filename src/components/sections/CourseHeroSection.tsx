"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const CourseHeroSection = () => {
  const router = useRouter();

  useEffect(() => {
    // Animation trigger if needed
  }, []);

  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center bg-transparent text-[#F0F0F0] overflow-hidden">
      {/* Liquid/Smoke Background Effect - Adjusted for Red */}
      <div className="absolute inset-0 z-0 opacity-80">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-red-600/30 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-900/30 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-12"
        >
          <span className="font-mono text-white/60 tracking-widest text-xs uppercase mb-6 block border border-white/20 inline-block px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm">
            London // One-Day Workshop // v.2025
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold italic leading-none tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Show up <br />
            <span className="text-white/30">this year</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 text-4xl md:text-6xl block mt-4 not-italic font-sans tracking-normal font-light">with something you built.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed mb-8 font-sans">
            A 1-day workshop in London for people who want to use AI to unlock their autonomy, amplify their creativity, and feel fulfilled at work.
          </p>

          <p className="text-lg text-white/50 mb-12 font-mono text-sm">
            Learn how to use AI to create, prototype, and build work you can be proud of.
          </p>

          <button
            onClick={() => router.push('/request-invite')}
            className="group relative bg-white/5 border border-white/20 text-white px-10 py-4 text-lg tracking-widest uppercase hover:bg-white/10 hover:border-white hover:text-white transition-all duration-300 backdrop-blur-md overflow-hidden"
          >
            <span className="relative z-10 font-mono">Request Invite</span>
            <div className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
          </button>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-transparent to-transparent z-10"></div>
    </section>
  );
};

export default CourseHeroSection;
