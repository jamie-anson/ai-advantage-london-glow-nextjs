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
              <p className="text-xl mb-12">
                We&apos;ve received your request and will be in touch with next steps.
              </p>
              <p className="text-xl mb-12">
                Your free guide — &quot;10 Quick Lessons – Spark Your AI Journey&quot; — is on its way to your inbox.
              </p>
              <div className="flex justify-center">
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
