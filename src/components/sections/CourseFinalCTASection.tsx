"use client";

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const CourseFinalCTASection = () => {
  const router = useRouter();

  return (
    <section className="py-32 bg-transparent relative overflow-hidden flex flex-col justify-center items-center text-center">
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/noise.png')] mix-blend-overlay"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-brand-gold font-mono tracking-widest uppercase text-sm mb-6 block">
            The Essence
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
            Fulfilment comes from creating things that didn’t exist before.
          </h2>
          <p className="text-xl text-white/60 font-light mb-12 max-w-2xl mx-auto">
            This course shows you how to do that with AI — simply, gently, and confidently.
          </p>

          <button
            onClick={() => router.push('/request-invite')}
            className="group relative inline-flex items-center gap-4 text-white text-xl tracking-widest uppercase hover:text-brand-gold transition-colors duration-300"
          >
            <span className="border-b border-white/30 pb-1 group-hover:border-brand-gold transition-colors duration-300">
              Book Your Place — Start Building with AI
            </span>
            <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseFinalCTASection;
