"use client";



// Import non-lazy components
import CustomCursor from '@/components/CustomCursor';
import HeroSection from '@/components/sections/HeroSection';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';

// Static imports for better visibility without JS
import WhySection from '@/components/sections/WhySection';
import HowSection from '@/components/sections/HowSection';
import WhatSection from '@/components/sections/WhatSection';
import WhoItsForSection from '@/components/sections/WhoItsForSection';
import IncludedSection from '@/components/sections/IncludedSection';
import LocationsSection from '@/components/sections/LocationsSection';
import TicketsSection from '@/components/sections/TicketsSection';
import FinalCTASection from '@/components/sections/FinalCTASection';

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
