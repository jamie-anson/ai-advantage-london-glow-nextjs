"use client";

import dynamic from 'next/dynamic';

// Import non-lazy components
import CustomCursor from '@/components/CustomCursor';
import HeroSection from '@/components/sections/HeroSection';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';

// --- Lazy Load Sections ---
const SectionLoader = () => <div className="h-96 w-full" />;

const ShowcaseSection = dynamic(() => import('@/components/sections/ShowcaseSection'), { loading: () => <SectionLoader /> });
const WhoItsForSection = dynamic(() => import('@/components/sections/WhoItsForSection'), { loading: () => <SectionLoader /> });
const ExperienceSection = dynamic(() => import('@/components/sections/ExperienceSection'), { loading: () => <SectionLoader /> });
const AboutJamieSection = dynamic(() => import('@/components/sections/AboutJamieSection'), { loading: () => <SectionLoader /> });
const WorkshopExperienceSection = dynamic(() => import('@/components/sections/WorkshopExperienceSection'), { loading: () => <SectionLoader /> });
const TicketsSection = dynamic(() => import('@/components/sections/TicketsSection'), { loading: () => <SectionLoader /> });
const FinalCTASection = dynamic(() => import('@/components/sections/FinalCTASection'), { loading: () => <SectionLoader /> });

export default function HomePageClient() {
  return (
    <div className="bg-background min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <CustomCursor />

      <div className="relative z-10">
        <HeroSection />
        <ShowcaseSection />
        <WhoItsForSection />
        <ExperienceSection />
        <AboutJamieSection />
        <WorkshopExperienceSection />
        <TicketsSection />
        <FinalCTASection />
        <Footer />
      </div>
    </div>
  );
}
