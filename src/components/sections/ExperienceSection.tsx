
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const experienceItems = [
  "Write sharper, faster, clearer with prompt strategies that actually work",
  "Set up your own AI stack—APIs, automations, and workflows—no code needed",
  "Build a small but powerful app or system from scratch",
  "Connect with ambitious people who are asking better questions about what’s next",
  "Leave with momentum, clarity, and a real project to show for it"
];

const ExperienceSection = () => {
  const [isInView, setIsInView] = useState(false);
  
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
    
    const target = document.getElementById('experience');
    if (target) observer.observe(target);
    
    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <section id="experience" className="section py-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className={cn(
            "heading-lg text-center mb-6 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Be first, be better, <br className="hidden md:block" />
            <span className="text-brand-green"><em>and </em>be different.</span>
          </h2>
          
          <p className={cn(
            "text-xl text-center mb-16 max-w-3xl mx-auto text-gray-300 transition-all duration-700 delay-100",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            In just one day, you&apos;ll go from dabbling to doing—building with AI tools that give you an edge most people don&apos;t even know exists yet.
          </p>
          
          <ul className="max-w-3xl w-full space-y-8">
            {experienceItems.map((item, index) => (
              <li 
                key={index}
                className={cn(
                  "flex items-start transition-all duration-700 group",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                  `delay-[${200 + (index * 150)}ms]`
                )}
              >
                <span className="w-8 h-8 flex items-center justify-center bg-brand-green/10 text-brand-green rounded-full mr-4 flex-shrink-0 text-sm font-medium group-hover:bg-brand-green/20 transition-colors self-center">
                  {index + 1}
                </span>
                <span className="text-lg text-gray-300 group-hover:text-white transition-colors flex-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
