"use client";

import { motion } from 'framer-motion';

const CourseWhoItsForSection = () => {
  return (
    <section className="py-32 bg-transparent text-[#F0F0F0] relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-serif font-bold italic text-white mb-6">
            Who this is for
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="space-y-8">
            <h3 className="text-2xl font-serif text-white border-b border-white/10 pb-4">People who want:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70 font-light">
                <span className="text-blue-400 mt-1">→</span>
                <span>to express their creativity instead of hiding it</span>
              </li>
              <li className="flex items-start gap-3 text-white/70 font-light">
                <span className="text-blue-400 mt-1">→</span>
                <span>to grow their career on their own terms</span>
              </li>
              <li className="flex items-start gap-3 text-white/70 font-light">
                <span className="text-blue-400 mt-1">→</span>
                <span>to feel proud of something they actually built</span>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-8">
            <h3 className="text-2xl font-serif text-white border-b border-white/10 pb-4">You’ll feel at home if:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70 font-light">
                <span className="text-purple-400 mt-1">→</span>
                <span>you&apos;re the one who hates being boxed in by slow systems</span>
              </li>
              <li className="flex items-start gap-3 text-white/70 font-light">
                <span className="text-purple-400 mt-1">→</span>
                <span>you know you&apos;re capable of far more than your job title suggests</span>
              </li>
              <li className="flex items-start gap-3 text-white/70 font-light">
                <span className="text-purple-400 mt-1">→</span>
                <span>you want autonomy, not permission</span>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-8 bg-white/5 p-8 border border-white/10">
            <h3 className="text-2xl font-serif text-white pb-4">The Vibe</h3>
            <p className="text-white/70 font-light leading-relaxed">
              This isn’t for people who want to stay comfortable. <br />
              It’s for the ones who want to feel alive in their work again.
            </p>
            <div className="pt-4 border-t border-white/10">
              <p className="text-white font-bold">No experience needed.</p>
              <p className="text-white/70 font-light">Just curiosity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseWhoItsForSection;
