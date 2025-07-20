import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const WorkshopExperienceSection = () => {
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
    
    const target = document.getElementById('workshop-experience');
    if (target) observer.observe(target);
    
    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <section id="workshop-experience" className="section py-32 relative overflow-hidden">
      {/* Ambient background effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`w-[600px] h-[600px] rounded-full bg-brand-green/5 blur-[120px] transition-all duration-1000 ${isInView ? 'opacity-70 scale-100' : 'opacity-0 scale-90'}`}></div>
        <div className={`absolute w-[400px] h-[400px] rounded-full bg-brand-fuchsia/5 blur-[80px] transition-all duration-1000 delay-300 ${isInView ? 'opacity-60 scale-100' : 'opacity-0 scale-90'}`}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className={cn(
          "mb-12 flex justify-center transition-all duration-700",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="text-brand-green text-xl font-medium"></div>
        </div>
        
        <div className="text-center">
          <h2 className={cn(
            "heading-lg mb-6 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            What You&apos;ll <span className="text-brand-green">Experience</span>
          </h2>
        </div>
        
        <p className={cn(
          "text-xl lg:text-2xl text-center max-w-3xl mx-auto mb-16 transition-all duration-700 delay-200",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          This is a sample. Every experience is tailored to the people and the place.
        </p>
        
        <div className={cn(
          "prose prose-invert max-w-2xl mx-auto text-lg mb-16 transition-all duration-700 delay-300",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <p className="text-xl mb-8">
            <strong><span className="text-brand-green">9:00</span> — Welcome Breakfast</strong><br />
            <span className="text-white/80">Artisan coffee, bites, and big energy.</span>
          </p>
          
          <p className="text-xl mb-8">
            <strong><span className="text-brand-green">9:30</span> — Sync: What Everyone Needs to Know</strong><br />
            <span className="text-white/80">A short primer to get everyone on the same page.</span>
          </p>
          
          <p className="text-xl mb-8">
            <strong><span className="text-brand-green">10:00</span> — Prompting Mastery</strong><br />
            <span className="text-white/80">Learn what works, then test it live.</span>
          </p>
          
          <p className="text-xl mb-8">
            <strong><span className="text-brand-green">10:30</span> — Vibe Code a Shopping App</strong><br />
            <span className="text-white/80">Use AI to create a no-code tool together—watch it build in real time.</span>
          </p>
          
          <p className="text-xl mb-8">
            <strong><span className="text-brand-green">11:15</span> — APIs, Explained Simply</strong><br />
            <span className="text-white/80">Understand how AI plugs into the real world (without jargon).</span>
          </p>
          
          <p className="text-xl mb-8">
            <strong><span className="text-brand-green">11:30</span> — OpenAI Setup, Step-by-Step</strong><br />
            <span className="text-white/80">We&apos;ll do it together. Real accounts, real access.</span>
          </p>
          
          <p className="text-xl mb-8">
            <strong><span className="text-brand-green">12:00</span> — Lunch</strong><br />
            <span className="text-white/80">Stylish, social, satisfying.</span>
          </p>
          
          <p className="text-xl mb-8">
            <strong><span className="text-brand-green">1:00</span> — Make.com Demo</strong><br />
            <span className="text-white/80">Watch how we turn tools into a working system.</span>
          </p>
          
          <p className="text-xl mb-8">
            <strong><span className="text-brand-green">1:45</span> — Build the Food Cost App</strong><br />
            <span className="text-white/80">You&apos;ll build your own automation using real tools, guided.</span>
          </p>
          
          <p className="text-xl mb-8">
            <strong><span className="text-brand-green">4:30</span> — Wrap & Reflections</strong><br />
            <span className="text-white/80">A moment to share what you&apos;ve made—and where you&apos;ll take it next.</span>
          </p>
          
          <p className="text-xl">
            <strong><span className="text-brand-green">5:00</span> — Done for the Day</strong><br />
            <span className="text-white/80">Drinks optional. Vibes not.</span>
          </p>
        </div>
        
        <p className={cn(
          "text-xl lg:text-2xl text-center max-w-3xl mx-auto transition-all duration-700 delay-700",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          You&apos;ll leave with real skills, your own AI setup, and a working project—built from scratch, by you.
        </p>
      </div>
    </section>
  );
};

export default WorkshopExperienceSection;
