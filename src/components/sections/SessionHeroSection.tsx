import { cn } from '@/lib/utils';
import { useState, memo } from 'react';
import Image from 'next/image';

// Moved outside component to prevent recreation on each render
const showcaseItems = [
    {
        title: "Iconic venues",
        description: "Designed to inspire clarity, creativity, and bold decisions.",
        bgClass: "bg-gradient-to-br from-brand-fuchsia/30 to-brand-gold/20",
        imageBg: true,
        imageSrc: "/images/ai-advantage-1.jpg"
    },
    {
        title: "Intimate Format",
        description: "A private table of no more than 12 influential minds.",
        bgClass: "bg-gradient-to-br from-brand-gold/30 to-brand-green/20",
        imageBg: true,
        imageSrc: "/images/ai-advantage-2.jpg"
    },
    {
        title: "Change Makers",
        description: "We curate for ambition, not job titles.",
        bgClass: "bg-gradient-to-br from-brand-green/30 to-brand-fuchsia/20",
        imageBg: true,
        imageSrc: "/images/ai-advantage-3.jpg"
    }
];

// Optimized ShowcaseItem for Chrome rendering
const ShowcaseItem = memo(({
    item,
    index,
    isInView,
    hoveredIndex,
    setHoveredIndex
}: {
    item: typeof showcaseItems[0],
    index: number,
    isInView: boolean,
    hoveredIndex: number | null,
    setHoveredIndex: (index: number | null) => void
}) => {
    // Use fixed sizes with transform instead of flex for better performance
    const isHovered = hoveredIndex === index;

    // Calculate if any card is hovered in the entire showcase
    const anyCardHovered = hoveredIndex !== null;

    // In mobile view, animations don't make sense since cards are stacked
    // Use a different class name approach for desktop vs mobile
    const widthClass = {
        // For mobile: always full width
        mobile: 'w-full',
        // For desktop with animations:
        desktop: anyCardHovered
            ? (isHovered ? 'md:w-2/3' : 'md:w-1/6')
            : 'md:w-1/3'
    };

    return (
        <div
            className={cn(
                "rounded-2xl h-80 relative overflow-hidden",
                isInView ? "opacity-100" : "opacity-0",
                item.bgClass,
                widthClass.mobile,
                widthClass.desktop
            )}
            style={{
                transitionDelay: `${1100 + (index * 100)}ms`,
                // Material Design timing function for all transitions
                transition: isInView
                    ? `width 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease`
                    : 'none',
                // Hardware accelerated transforms with material design scaling
                // No scale transform on the container to preserve corner radius
                transform: isInView
                    ? 'translateY(0) translateZ(0)'
                    : 'translateY(8px) translateZ(0)',
                // Promote to own layer with will-change
                willChange: 'width, opacity',
                // Contain the rendering to this element
                contain: 'layout paint',
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
        >
            {/* Content wrapper with overflow hidden to prevent paint spillover */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Image with own composite layer */}
                {item.imageBg && (
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                        <div className="relative w-full h-full">
                            <Image
                                src={item.imageSrc}
                                alt={item.title}
                                fill
                                priority={index === 0}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover w-full h-full"
                                style={{
                                    willChange: 'transform',
                                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                                    // Subtle zoom effect on hover
                                    transform: isHovered ? 'translateZ(0) scale(1.05)' : 'translateZ(0)',
                                }}
                            />
                        </div>
                    </div>
                )}

                {/* Simplified backdrop blur - reduce intensity for Chrome */}
                <div
                    className="absolute inset-0 bg-black/30"
                    style={{
                        backdropFilter: 'blur(1px)', // Reduced from 2px
                        WebkitBackdropFilter: 'blur(1px)', // Safari support
                        transform: 'translateZ(0)', // Force GPU
                        opacity: isHovered ? 0.1 : 0.2,
                        transition: 'opacity 0.6s ease',
                    }}
                />

                {/* Gradient using a simplified approach */}
                <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"
                    style={{
                        transform: 'translateZ(0)',
                        transition: 'opacity 0.6s ease',
                        opacity: isHovered ? 0.8 : 0.7,
                    }}
                />

                {/* Text content with own composite layer */}
                <div
                    className="absolute inset-0 flex flex-col justify-end p-8"
                    style={{
                        transform: 'translateZ(0)',
                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                >
                    <div className="text-left">
                        <h3 className="text-2xl font-serif mb-2 text-white drop-shadow-sm inline-block"
                            style={{
                                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                            }}>
                            {item.title}
                        </h3>
                    </div>
                    <p className={cn(
                        "text-white/90 text-left mt-2",
                    )}
                        style={{
                            transition: 'opacity 0.6s ease',
                            opacity: hoveredIndex !== null && hoveredIndex !== index ? 0 : 1
                        }}>
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    );
});

ShowcaseItem.displayName = 'ShowcaseItem';

const SessionHeroSection = () => {
    // Hero is always in view from start
    const isInView = true;
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="min-h-screen relative flex flex-col items-center text-[#F0F0F0] overflow-hidden pt-20 md:pt-24 pb-20">
            {/* Subtle background glow */}
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-900/20 blur-[150px] rounded-full mix-blend-screen animate-pulse-slow"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-green/10 blur-[150px] rounded-full mix-blend-screen animate-pulse-slow delay-1000"></div>

            <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
                <div className="max-w-7xl mx-auto">
                    {/* 2-Column Hero Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                        {/* Left Column: The Problem */}
                        <div className="space-y-8">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight tracking-tight text-brand-green animate-fade-in-up">
                                AI doesn’t <br />save time.
                            </h1>
                            <div className="h-[1px] w-24 bg-white/20 animate-fade-in animate-delay-500"></div>
                        </div>

                        {/* Right Column: The Solution */}
                        <div className="space-y-10">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight tracking-tight text-white animate-fade-in-up animate-delay-700">
                                Engineering <br />with AI does.
                            </h1>

                            <div className="space-y-8 animate-fade-in-up animate-delay-1000">
                                <div className="space-y-4">
                                    <div className="max-w-xl">
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                                            AI-Accelerated Engineering Workshop
                                        </h3>
                                        <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed">
                                            A one-day professional programme for building faster without creating more work later.
                                        </p>
                                    </div>
                                    <p className="text-sm md:text-base uppercase tracking-[0.2em] text-brand-green/70 font-medium italic">
                                        Turn AI speed into lasting engineering progress.
                                    </p>
                                </div>

                                <div>
                                    <a
                                        href="/request-invite"
                                        className="inline-block bg-white/[0.66] text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-white/90 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                                    >
                                        Request Invite
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Showcase Cards Moved Here */}
                    <div className="w-full relative z-10 mt-32">
                        {/* Wrapper with isolation to create stacking context */}
                        <div className="relative w-full overflow-hidden isolation-auto">
                            {/* Flex container with gap between cards */}
                            <div
                                className="flex flex-col md:flex-row flex-nowrap gap-4"
                                style={{
                                    willChange: 'contents',
                                    contain: 'layout style', // Contain layout changes
                                }}
                            >
                                {showcaseItems.map((item, index) => (
                                    <ShowcaseItem
                                        key={`showcase-item-${index}`}
                                        item={item}
                                        index={index}
                                        isInView={isInView}
                                        hoveredIndex={hoveredIndex}
                                        setHoveredIndex={setHoveredIndex}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className={cn(
                            "mt-6 text-center text-brand-gold/80 text-lg italic transition-all duration-300 delay-300",
                            isInView ? "opacity-100" : "opacity-0"
                        )}>
                            Images from the W Hotel, Leicester Square, London
                        </div>
                    </div>

                    {/* Explanation Block & Audience - Now follows the gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-32 pt-16 border-t border-white/10 animate-fade-in-up animate-delay-[1500ms]">
                        <div className="space-y-6">
                            <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
                                Most people experience AI as fast but fragile.<br />
                                It produces output quickly, then creates weeks of cleanup.
                            </p>
                        </div>

                        <div className="space-y-10">
                            <p className="text-lg text-white leading-relaxed font-light">
                                This workshop teaches the missing layer:<br />
                                how to apply engineering discipline to AI so speed actually compounds instead of backfires.
                            </p>

                            {/* Audience Identification */}
                            <div className="space-y-4">
                                <p className="text-xs uppercase tracking-widest text-white/40 font-bold">Built for</p>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Engineers",
                                        "Vibe Coders → Engineers",
                                        "Technical Founders",
                                        "Product & Project Managers",
                                        "Innovation Teams"
                                    ].map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-normal text-white/70 transition-colors hover:bg-white/10"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SessionHeroSection;
