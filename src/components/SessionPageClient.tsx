"use client";

import dynamic from 'next/dynamic';

// Import non-lazy components
import CustomCursor from '@/components/CustomCursor';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';

// --- Lazy Load Sections ---
const SectionLoader = () => <div className="h-96 w-full" />;

const SessionHeroSection = dynamic(() => import('@/components/sections/SessionHeroSection'), { loading: () => <SectionLoader />, ssr: false });
const SessionApproachSection = dynamic(() => import('@/components/sections/SessionApproachSection'), { loading: () => <SectionLoader />, ssr: false });
const SessionAgendaSection = dynamic(() => import('@/components/sections/SessionAgendaSection'), { loading: () => <SectionLoader />, ssr: false });
const SessionAudienceSection = dynamic(() => import('@/components/sections/SessionAudienceSection'), { loading: () => <SectionLoader />, ssr: false });
const SessionCTASection = dynamic(() => import('@/components/sections/SessionCTASection'), { loading: () => <SectionLoader />, ssr: false });
const AboutJamieSection = dynamic(() => import('@/components/sections/AboutJamieSection'), { loading: () => <SectionLoader />, ssr: false });
const TicketsSection = dynamic(() => import('@/components/sections/TicketsSection'), { loading: () => <SectionLoader />, ssr: false });

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
