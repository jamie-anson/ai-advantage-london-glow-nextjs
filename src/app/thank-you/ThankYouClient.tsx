'use client';

import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Check } from 'lucide-react';

// Components
import AnimatedBackground from '@/components/AnimatedBackground';
import CustomCursor from '@/components/CustomCursor';
import Footer from '@/components/Footer';
import ButtonPrimary from '@/components/ButtonPrimary';

export default function ThankYouClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const userName = searchParams.get('name');

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
      <CustomCursor />
      <AnimatedBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <React.Fragment>
          <div className="container mx-auto px-6 py-32 max-w-2xl text-center flex-grow flex items-center justify-center">
            <div className="glass-card p-12 md:p-16">
              <div className="w-20 h-20 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Check size={32} className="text-brand-green" />
              </div>
              <h1 className="heading-md mb-8">
                Thank you, <span className="text-brand-green">{userName || 'friend'}</span>.
              </h1>
              <div className="space-y-6 text-white/80">
                <p className="text-xl leading-relaxed">
                  We&apos;ve received your request and will be in touch once we have found the best fitting group.
                </p>
                <p className="text-xl leading-relaxed">
                  Jamie personally reviews every invitation to ensure the right mix of professionals for each session—you&apos;ll hear from him directly on either a <span className="text-white font-medium">Wednesday</span> or <span className="text-white font-medium">Sunday</span>.
                </p>
                <p className="text-lg text-white/50 pt-4">
                  You can change your mind and unsubscribe anytime.
                </p>
              </div>
              <div className="flex justify-center mt-12">
                <ButtonPrimary onClick={() => router.push("/")}>
                  Return to Homepage
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </React.Fragment>
        <Footer />
      </div>
    </div>
  );
}
