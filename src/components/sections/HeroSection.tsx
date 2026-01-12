
"use client";

import { useRouter } from 'next/navigation';
import ButtonPrimary from '../ButtonPrimary';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  const router = useRouter();

  const audienceTags = [
    "Engineers",
    "Vibe Coders → Engineers",
    "Technical Founders",
    "Product & Project Managers",
    "Innovation Teams"
  ];

  return (
    <section className="min-h-screen relative flex flex-col justify-center overflow-hidden">

      {/* Background effects */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full bg-brand-green/5 blur-[120px] animate-fade-in"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-brand-fuchsia/5 blur-[100px] transform translate-x-1/4 -translate-y-1/4 animate-fade-in animate-delay-300"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-brand-pink/5 blur-[80px] transform -translate-x-1/4 translate-y-1/4 animate-fade-in animate-delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
        <div className="max-w-5xl">
          {/* Primary Headline */}
          <h1 className="heading-xl mb-8 animate-fade-in-up tracking-tight">
            AI doesn’t save time.<br />
            <span className="text-brand-green">Engineering with AI does.</span>
          </h1>

          {/* Sub-headline */}
          <div className="mb-8 animate-fade-in-up animate-delay-200">
            <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed max-w-3xl">
              <span className="font-bold">AI-Accelerated Engineering</span><br />
              A one-day professional workshop for building faster without creating more work later.
            </p>
          </div>

          {/* Support Line */}
          <p className="text-sm md:text-base uppercase tracking-[0.2em] text-brand-green/70 font-medium mb-12 animate-fade-in-up animate-delay-300">
            Turn AI speed into lasting engineering progress.
          </p>

          <div className="animate-fade-in-up animate-delay-500 mb-24">
            <ButtonPrimary glowEffect onClick={() => router.push('/request-invite')}>Request Invite</ButtonPrimary>
          </div>

          {/* Explanation Block & Audience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-white/10 animate-fade-in-up animate-delay-700">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
                Most people experience AI as fast but fragile.<br />
                It produces output quickly — then creates weeks of cleanup.
              </p>
            </div>

            <div className="space-y-10">
              <p className="text-lg text-white/60 leading-relaxed font-light">
                This workshop teaches the missing layer:<br />
                how to apply engineering discipline to AI so speed actually compounds instead of backfires.
              </p>

              {/* Audience Identification */}
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-widest text-white/40 font-bold">Built for</p>
                <div className="flex flex-wrap gap-2">
                  {audienceTags.map((tag: string) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="bg-white/5 border-white/10 text-white/70 py-1.5 px-4 font-normal rounded-full hover:bg-white/10 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in animate-delay-1000">
        <span className="text-sm font-light mb-2 text-white/30 uppercase tracking-widest text-[10px]">Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-green/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;

