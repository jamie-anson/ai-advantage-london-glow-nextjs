
import Image from 'next/image';
import { useEffect, useState, useRef, memo } from 'react';
import { cn } from '@/lib/utils';

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
            <Image 
              src={item.imageSrc} 
              alt={item.title} 
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
              style={{
                willChange: 'transform',
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                // Subtle zoom effect on hover
                transform: isHovered ? 'translateZ(0) scale(1.05)' : 'translateZ(0)',
              }}
            />
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

const ShowcaseSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '200px' } // More generous threshold
    );
    
    const node = sectionRef.current;
    if (node) observer.observe(node);
    
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={sectionRef} id="showcase" className="section pt-16 pb-20">
      <div className="container mx-auto px-4">
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
    </section>
  );
};

export default ShowcaseSection;
