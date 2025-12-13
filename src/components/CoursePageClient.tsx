"use client";

import dynamic from 'next/dynamic';

// Import non-lazy components
import CustomCursor from '@/components/CustomCursor';
import HeroSection from '@/components/sections/HeroSection';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';

// --- Lazy Load Sections ---
const SectionLoader = () => <div className="h-96 w-full" />;

const WhySection = dynamic(() => import('@/components/sections/WhySection'), { loading: () => <SectionLoader />, ssr: false });
const HowSection = dynamic(() => import('@/components/sections/HowSection'), { loading: () => <SectionLoader />, ssr: false });
const WhatSection = dynamic(() => import('@/components/sections/WhatSection'), { loading: () => <SectionLoader />, ssr: false });
const WhoItsForSection = dynamic(() => import('@/components/sections/WhoItsForSection'), { loading: () => <SectionLoader />, ssr: false });
const IncludedSection = dynamic(() => import('@/components/sections/IncludedSection'), { loading: () => <SectionLoader />, ssr: false });
const LocationsSection = dynamic(() => import('@/components/sections/LocationsSection'), { loading: () => <SectionLoader />, ssr: false });
const TicketsSection = dynamic(() => import('@/components/sections/TicketsSection'), { loading: () => <SectionLoader />, ssr: false });
const FinalCTASection = dynamic(() => import('@/components/sections/FinalCTASection'), { loading: () => <SectionLoader />, ssr: false });

export default function CoursePageClient() {
  return (
    <div className="bg-background min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <CustomCursor />

      <div className="relative z-10">
        <HeroSection />
        <WhySection />
        <HowSection />
        <WhatSection />
        <WhoItsForSection />
        <IncludedSection />
        <LocationsSection />
        <TicketsSection />
        <FinalCTASection />
        <Footer />
      </div>
    </div>
  );
}
