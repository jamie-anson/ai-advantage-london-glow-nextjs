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
                transitionDelay: `${200 + (index * 100)}ms`,
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
        <section className="min-h-screen relative flex flex-col items-center text-[#F0F0F0] overflow-hidden pt-32 md:pt-[172px] pb-20">
            {/* Subtle background glow */}
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-900/20 blur-[150px] rounded-full mix-blend-screen animate-pulse-slow"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-green/10 blur-[150px] rounded-full mix-blend-screen animate-pulse-slow delay-1000"></div>

            <div className="container mx-auto px-6 relative z-10 text-center mb-[136px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start max-w-6xl mx-auto mt-12">
                    {/* Left Column - Title & Image */}
                    <div className="text-left flex flex-col items-start animate-fade-in-up">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                            <span>See how Jamie built </span>
                            <span className="text-brand-green/90 italic">what normally takes a team</span>
                        </h1>

                        <div className="flex items-center gap-3 mt-8">
                            <div className="w-10 h-10 rounded-full border border-brand-green/30 overflow-hidden relative shadow-[0_0_10px_rgba(198,255,255,0.2)]">
                                <Image
                                    src="/images/about-jamie-640x640.jpeg"
                                    fill
                                    alt="Jamie Anson"
                                    className="object-cover"
                                />
                            </div>
                            <span className="font-mono text-brand-green/80 tracking-widest text-xs uppercase border border-brand-green/20 px-4 py-2 rounded-full bg-brand-green/5 backdrop-blur-sm">
                                Project Beacon // One-Day AI Course // London
                            </span>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="text-left space-y-8 md:mt-32 animate-fade-in-up animate-delay-200">

                        <p className="text-3xl md:text-4xl font-normal text-white font-sans tracking-tight">
                            And how you can leverage AI to do the same.
                        </p>

                        <p className="text-white/60 leading-relaxed text-lg">
                            A one-day breakdown of Project Beacon — the open-source platform built solo and valued at £100k+. Learn the exact workflow to build ambitious projects without a large team.
                        </p>

                        <ul className="space-y-3 font-mono text-white/50 uppercase tracking-wider text-sm">
                            <li className="flex items-center gap-3">
                                <span className="text-brand-green">•</span> Save weeks of frustration
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-brand-green">•</span> Build more ambitiously
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-brand-green">•</span> Operate at team scale
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Showcase Cards at Bottom */}
            <div className="container mx-auto px-4 w-full relative z-10 mt-auto">
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

            {/* Scroll indicator (Optional now, maybe hide or keep) */}
            {/* <motion.div ... logic ... /> removed or kept? User didn't say remove, but cards are there now. I'll comment it out or leave it if it fits. The cards are big, so scroll indicator might overlap. I'll remove it to be safe. */}
        </section>
    );
};

export default SessionHeroSection;
