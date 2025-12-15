"use client";

import dynamic from 'next/dynamic';

// Import non-lazy components
import CustomCursor from '@/components/CustomCursor';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';
import SessionHeroSection from '@/components/sections/SessionHeroSection';

// --- Lazy Load Sections ---
const SectionLoader = () => <div className="h-96 w-full" />;

const SessionApproachSection = dynamic(() => import('@/components/sections/SessionApproachSection'), { loading: () => <SectionLoader /> });
const SessionAgendaSection = dynamic(() => import('@/components/sections/SessionAgendaSection'), { loading: () => <SectionLoader /> });
const SessionAudienceSection = dynamic(() => import('@/components/sections/SessionAudienceSection'), { loading: () => <SectionLoader /> });
const SessionCTASection = dynamic(() => import('@/components/sections/SessionCTASection'), { loading: () => <SectionLoader /> });
const AboutJamieSection = dynamic(() => import('@/components/sections/AboutJamieSection'), { loading: () => <SectionLoader /> });
const TicketsSection = dynamic(() => import('@/components/sections/TicketsSection'), { loading: () => <SectionLoader /> });

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
