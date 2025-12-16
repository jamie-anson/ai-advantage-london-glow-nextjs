"use client";



// Import non-lazy components
import CustomCursor from '@/components/CustomCursor';
import HeroSection from '@/components/sections/HeroSection';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';

// Static imports for better visibility without JS
import ShowcaseSection from '@/components/sections/ShowcaseSection';
import WhoItsForSection from '@/components/sections/WhoItsForSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import AboutJamieSection from '@/components/sections/AboutJamieSection';
import WorkshopExperienceSection from '@/components/sections/WorkshopExperienceSection';
import TicketsSection from '@/components/sections/TicketsSection';
import FinalCTASection from '@/components/sections/FinalCTASection';

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
