
import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

const profileOutlines = [
  { id: 1, className: 'md:top-20 md:left-[20%] top-10 left-[10%]' },
  { id: 2, className: 'md:top-40 md:left-[40%] top-20 left-[40%]' },
  { id: 3, className: 'md:top-20 md:left-[60%] top-40 left-[20%]' },
  { id: 4, className: 'md:top-60 md:left-[30%] top-60 left-[50%]' },
  { id: 5, className: 'md:top-50 md:left-[70%] top-30 left-[70%]' },
];

const WhoItsForSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const circlesContainerRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    
    const target = document.getElementById('who-its-for');
    if (target) observer.observe(target);
    
    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!circlesContainerRef.current || !sectionRef.current) return;
      
      // Get section bounding rectangle to calculate relative mouse position
      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Apply magnetic effect to each circle
      circleRefs.current.forEach((circle, index) => {
        if (!circle) return;
        
        const circleRect = circle.getBoundingClientRect();
        const circleX = circleRect.left - rect.left + circleRect.width / 2;
        const circleY = circleRect.top - rect.top + circleRect.height / 2;
        
        // Calculate distance between cursor and circle center
        const dx = x - circleX;
        const dy = y - circleY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Calculate repulsion/attraction factor based on distance
        const maxDistance = 250; // Increased from 150 to affect circles from further away
        const repulsionFactor = 0.8; // Increased from 0.4 for stronger effect
        const movementMultiplier = 360; // Extremely high value for maximum possible movement
        
        if (distance < maxDistance) {
          // Map distance to a repulsion strength with easing for smoother transition
          const normalizedDistance = distance / maxDistance;
          // Ease-out cubic function for smoother deceleration
          const strength = (1 - Math.pow(normalizedDistance, 0.7)) * repulsionFactor;
          
          // Alternating directions for more dynamic movement
          const direction = index % 2 === 0 ? -1 : 1;
          
          // Calculate new position with enhanced movement
          const moveX = (dx / distance) * Math.pow(strength, 1.5) * direction * movementMultiplier;
          const moveY = (dy / distance) * Math.pow(strength, 1.5) * direction * movementMultiplier;
          
          // Apply the transformation
          circle.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          // Reset position if cursor is far enough
          circle.style.transform = 'translate(0, 0)';
        }
      });
    };
    
    const handleMouseLeave = () => {
      // Reset all circles when mouse leaves the section
      circleRefs.current.forEach(circle => {
        if (circle) circle.style.transform = 'translate(0, 0)';
      });
    };
    
    // Add event listeners
    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      section.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
        section.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [sectionRef]);

  return (
    <section ref={sectionRef} id="who-its-for" className="section relative py-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={cn(
              "heading-lg mb-8 transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              For those who sense it&apos;s time to <span className="text-brand-green">make a move</span>.
            </h2>
            
            <div className={cn(
              "transition-all duration-700 delay-200 space-y-4",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <p className="body-lg">This workshop is for people asking themselves:</p>
              <ul className="space-y-4 pl-6 list-disc">
                <li>&quot;What could I do if I really understood how to use this?&quot;</li>
                <li>&quot;What if I could test a new product idea—without a big team or budget?&quot;</li>
                <li>&quot;How do I lead my team into this next chapter—without faking it?&quot;</li>
                <li>&quot;Could I automate this instead of doing it manually again?&quot;</li>
              </ul>
            </div>
          </div>
          
          <div ref={circlesContainerRef} className="relative h-[400px]">
            {profileOutlines.map((profile, index) => (
              <div 
                key={profile.id}
                ref={el => { circleRefs.current[index] = el; }}
                className={cn(
                  "absolute w-32 h-32 rounded-full border-2",
                  index % 2 === 0 ? "border-brand-green" : "border-brand-fuchsia",
                  profile.className,
                  "transition-all duration-300",
                  isInView 
                    ? "opacity-60 scale-100" 
                    : "opacity-0 scale-50",
                  `delay-[${200 + (index * 150)}ms]`
                )}
              >
                <div className={`absolute inset-0 ${index % 2 === 0 ? "bg-brand-green" : "bg-brand-fuchsia"}/5 rounded-full`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
