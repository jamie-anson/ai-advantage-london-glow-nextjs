
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import ButtonPrimary from '../ButtonPrimary';

const FinalCTASection = () => {
  const [isInView, setIsInView] = useState(false);
  const router = useRouter();
  
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
    
    const target = document.getElementById('final-cta');
    if (target) observer.observe(target);
    
    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <section id="final-cta" className="section py-32 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={cn(
            "heading-xl mb-6 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Do you belong<br />
            <span className="text-brand-green">in this room?</span>
          </h2>
          <div className={cn(
            "transition-all duration-700 delay-400 flex justify-center mt-12",
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            <ButtonPrimary glowEffect className="text-lg px-10 py-4" onClick={() => router.push('/request-invite')}>
              Request Invite
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
