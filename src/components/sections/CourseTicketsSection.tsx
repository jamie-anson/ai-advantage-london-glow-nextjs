"use client";

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const CourseTicketsSection = () => {
  const router = useRouter();

  return (
    <section className="py-32 bg-transparent relative overflow-hidden text-[#F0F0F0] border-t border-white/5" id="tickets">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-b from-white/10 to-black/80 border border-white/20 p-12 md:p-20 text-center relative shadow-[0_0_50px_rgba(255,255,255,0.05)] backdrop-blur-md">
            {/* Chrome Accent Lines */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

            {/* Holographic Sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>

            <h2 className="font-serif text-3xl italic text-white mb-12">
              Price
            </h2>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#050505] px-6 py-2 border border-brand-gold/30">
              <span className="text-brand-gold font-mono tracking-widest uppercase text-sm">Price</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
              £275–£325
            </h2>
            <p className="text-white/40 mb-8 font-light">
              (Depending on venue and date)
            </p>

            <div className="h-[1px] w-24 bg-white/10 mx-auto mb-8"></div>

            <p className="text-xl text-white/80 font-light mb-12 max-w-lg mx-auto leading-relaxed">
              Small enough to buy personally. <br />
              Powerful enough to change how you work.
            </p>

            <button
              onClick={() => router.push('/request-invite')}
              className="bg-brand-gold text-black px-10 py-4 text-lg tracking-widest uppercase hover:bg-white transition-all duration-300 font-bold"
            >
              Check Availability
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseTicketsSection;
