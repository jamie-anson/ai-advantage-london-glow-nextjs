"use client";

import CustomCursor from '@/components/CustomCursor';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';
import InnovationHeroSection from '@/components/sections/InnovationHeroSection';
import InnovationAudienceSection from '@/components/sections/InnovationAudienceSection';
import InnovationOutcomesSection from '@/components/sections/InnovationOutcomesSection';
import InnovationHowItWorksSection from '@/components/sections/InnovationHowItWorksSection';
import InnovationWhyMattersSection from '@/components/sections/InnovationWhyMattersSection';
import InnovationFormatPricingSection from '@/components/sections/InnovationFormatPricingSection';
import InnovationCTASection from '@/components/sections/InnovationCTASection';

export default function InnovationTeamsClient() {
    return (
        <div className="bg-background min-h-screen relative overflow-hidden text-white">
            <AnimatedBackground />
            <CustomCursor />

            <div className="relative z-10">
                <InnovationHeroSection />
                <InnovationAudienceSection />
                <InnovationOutcomesSection />
                <InnovationHowItWorksSection />
                <InnovationWhyMattersSection />
                <InnovationFormatPricingSection />
                <InnovationCTASection />
                <Footer />
            </div>
        </div>
    );
}
