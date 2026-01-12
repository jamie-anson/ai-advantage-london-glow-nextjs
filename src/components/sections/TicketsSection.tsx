"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import ButtonPrimary from '../ButtonPrimary';

const TicketsSection = () => {
  const isInView = true;
  const router = useRouter();

  return (
    <section id="tickets" className="section py-32 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
      {/* Background decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className={cn(
            "heading-lg mb-6 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Pricing & <span className="text-brand-green">Access</span>
          </h2>
          <p className="text-white/60 font-mono uppercase tracking-[0.2em] text-sm">Limited availability // Practitioner-led</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Primary Offering: Workshop */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col h-full relative group hover:border-brand-green/30 transition-all duration-500">
            <div className="absolute top-0 right-0 p-6">
              <span className="text-[10px] font-mono text-brand-green border border-brand-green/30 px-3 py-1 rounded-full bg-brand-green/5 uppercase tracking-widest">Primary Offering</span>
            </div>

            <div className="flex-grow">
              <h3 className="text-sm font-mono text-brand-green uppercase tracking-widest mb-6 font-bold">Invite-Only Workshop</h3>

              <div className="mb-8 font-serif">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl md:text-6xl font-bold text-white tracking-tight">£725</span>
                  <span className="text-white/40 font-mono text-xs uppercase tracking-wider">+ VAT per attendee</span>
                </div>
                <p className="text-white/50 text-sm italic">(Final price confirmed on invitation)</p>
              </div>

              <ul className="space-y-4 mb-12">
                {[
                  "Full workshop access",
                  "Curated lunch in a luxury setting",
                  "Surprise extras — tailored to the venue & guest list"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 text-white/80">
                    <span className="text-brand-green font-bold mt-1">/</span>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-8 border-t border-white/10">
              <ButtonPrimary
                glowEffect
                className="w-full py-5 text-lg"
                onClick={() => router.push('/request-invite')}
              >
                Request Invite
              </ButtonPrimary>
            </div>
          </div>

          {/* Secondary Offering: Founder Sessions */}
          <div className="bg-black/20 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-12 flex flex-col h-full relative group hover:border-white/20 transition-all duration-500">
            <div className="flex-grow">
              <h3 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-6">Bespoke Acceleration</h3>

              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 leading-tight">
                Invite-Only Founder Sessions
              </h2>

              <div className="mb-8">
                <div className="text-3xl font-bold text-white/50 font-mono tracking-tight">POA</div>
                <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Custom engagement</p>
              </div>

              <ul className="space-y-4 mb-12">
                {[
                  "Half-day intensive",
                  "Premium location",
                  "1:1 acceleration for early-stage founders"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 text-white/60">
                    <span className="text-white/20 font-bold mt-1">•</span>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/5">
                <p className="text-xs font-mono text-white/30 uppercase tracking-[0.2em] mb-4">Focus areas:</p>
                <div className="flex flex-wrap gap-2 text-[10px] font-mono uppercase tracking-widest text-white/40">
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Pre-seed</span>
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Idea-stage</span>
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-brand-green/80 border-brand-green/20">Limited slots</span>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <button
                onClick={() => router.push('/request-invite?source=founder-sessions')}
                className="w-full border border-white/10 hover:border-white/30 hover:bg-white/5 text-white/80 py-4 px-8 rounded-full font-medium transition-all"
              >
                Inquire for Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketsSection;
