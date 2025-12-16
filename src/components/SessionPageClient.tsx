"use client";



// Import non-lazy components
import CustomCursor from '@/components/CustomCursor';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';
import SessionHeroSection from '@/components/sections/SessionHeroSection';

// Static imports for better visibility without JS
import SessionApproachSection from '@/components/sections/SessionApproachSection';
import SessionAgendaSection from '@/components/sections/SessionAgendaSection';
import SessionAudienceSection from '@/components/sections/SessionAudienceSection';
import SessionCTASection from '@/components/sections/SessionCTASection';
import AboutJamieSection from '@/components/sections/AboutJamieSection';
import TicketsSection from '@/components/sections/TicketsSection';

export default function SessionPageClient() {
    return (
        <div className="bg-background min-h-screen relative overflow-hidden">
            <AnimatedBackground />
            <CustomCursor />

            <div className="relative z-10">
                <SessionHeroSection />
                <SessionApproachSection />
                <AboutJamieSection />
                <SessionAgendaSection />
                <SessionAudienceSection />
                <TicketsSection />
                <SessionCTASection />
                <Footer />
            </div>
        </div>
    );
}
