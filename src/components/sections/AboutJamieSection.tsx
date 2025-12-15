
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';


const AboutJamieSection = () => {
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // if (entry.isIntersecting) {
        //   setIsInView(true);
        //   observer.unobserve(entry.target);
        // }
      },
      { threshold: 0.3 }
    );

    const target = document.getElementById('about-jamie');
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <section id="about-jamie" className="section py-24 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className={cn(
            "heading-lg mb-6 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Workshop <span className="text-brand-green">Leader</span>
          </h2>

          <p className={cn(
            "body-lg max-w-2xl mx-auto transition-all duration-700 delay-200",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Column - Image */}
            <div className={cn(
              "flex-shrink-0 transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            )}>
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-brand-green/30 relative z-10">
                  <Image
                    src="/images/about-jamie-640x640.jpeg"
                    alt="Jamie Anson"
                    width={640}
                    height={640}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-brand-green/20 to-brand-fuchsia/20 blur-md -z-10"></div>
              </div>
            </div>

            {/* Right Column - Name and Title */}
            <div className={cn(
              "text-center md:text-left transition-all duration-700 delay-100",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <h3 className="text-4xl font-serif text-white mb-2">Jamie Anson</h3>
              <p className="text-brand-green text-lg mb-8">AI Researcher & Startup Founder</p>
              <p className="text-gray-300 italic">Building a real, scalable business — entirely solo.</p>
            </div>
          </div>

          {/* Content */}
          <div className={cn(
            "mt-16 space-y-6 text-lg leading-relaxed transition-all duration-700 delay-200",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <p>
              Jamie is living the One-Person Unicorn life: building a real, scalable business — entirely solo.
            </p>

            <p>
              No team. No investors. Just smart systems, AI tools, and the belief that one person can do what used to take twenty.
            </p>

            <p>
              Right now, he’s designing, building, and launching a suite of events apps — moving fast, shipping often, and proving what’s possible when you stop waiting for permission.
            </p>

            <p>
              Very few people are building this way. Even fewer are teaching it.
            </p>

            <p>
              <strong>This workshop is your way in.</strong> If you’ve got ideas, ambition, and the courage to try, Jamie will show you how to turn that into momentum — using the same tools and methods powering his own startup today.
            </p>

            <p>
              You don’t need to be technical. You just need to start.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutJamieSection;
