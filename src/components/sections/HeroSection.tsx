
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ButtonPrimary from '../ButtonPrimary';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen relative flex flex-col justify-center overflow-hidden">

      {/* Background effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`w-[500px] h-[500px] rounded-full bg-brand-green/20 blur-[100px] transition-all duration-1000 ${isLoaded ? 'opacity-70' : 'opacity-0'}`}></div>
        <div className={`absolute w-[300px] h-[300px] rounded-full bg-brand-fuchsia/20 blur-[80px] transform translate-x-1/3 -translate-y-1/4 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-60' : 'opacity-0'}`}></div>
        <div className={`absolute w-[250px] h-[250px] rounded-full bg-brand-pink/20 blur-[60px] transform -translate-x-1/3 translate-y-1/3 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-50' : 'opacity-0'}`}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-28 md:pt-32">
        <div className="max-w-4xl">
          <h1 className={`heading-xl mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Unlock what you can do - with AI on your side
          </h1>

          <p className={`body-lg mb-10 max-w-3xl transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-white/70">Exclusive 1-Day AI Workshop, by Invitation Only.</span>
          </p>

          <p className={`text-xl italic text-brand-green mb-10 max-w-3xl transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            &quot;Build faster. Work smarter. Walk away with tools, confidence, and something you made yourself.&quot;
          </p>

          <div className={`transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <ButtonPrimary glowEffect onClick={() => router.push('/request-invite')}>Request Invite</ButtonPrimary>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-70' : 'opacity-0'}`}>
        <span className="text-sm font-light mb-2">Scroll</span>
        <div className="w-[1px] h-10 bg-white/30 animate-pulse-soft"></div>
      </div>
    </section>
  );
};

export default HeroSection;
