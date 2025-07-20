import React, { Suspense } from 'react';
import { Metadata } from 'next';
import ThankYouClient from './ThankYouClient';

export const metadata: Metadata = {
  title: 'Thank You',
  robots: {
    index: false,
    follow: false,
  },
};

function ThankYouFallback() {
    return (
        <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden flex items-center justify-center">
            <p>Loading...</p>
        </div>
    );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<ThankYouFallback />}>
      <ThankYouClient />
    </Suspense>
  );
}
