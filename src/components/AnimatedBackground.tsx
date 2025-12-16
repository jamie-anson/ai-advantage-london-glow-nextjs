
"use client";

import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  // References for our animated gradient elements
  const bgRef = useRef<HTMLDivElement>(null);
  const purpleGradientRef = useRef<HTMLDivElement>(null);
  const purpleOverlayRef = useRef<HTMLDivElement>(null);
  const pinkGradientRef = useRef<HTMLDivElement>(null);
  const accentLightRef = useRef<HTMLDivElement>(null);
  const greenAccentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation setup
    const animateGradients = () => {
      if (!bgRef.current) return;

      // Use requestAnimationFrame for smoother animations
      const animate = () => {
        const now = Date.now() / 1000; // Convert to seconds for gentler oscillation

        // Apply subtle drifting animation to each gradient
        if (purpleGradientRef.current) {
          purpleGradientRef.current.style.transform = `translate(${Math.sin(now * 0.05) * 2}%, ${Math.cos(now * 0.04) * 1.5}%)`;
          purpleGradientRef.current.style.opacity = `${0.85 + Math.sin(now * 0.08) * 0.05}`;
        }

        if (purpleOverlayRef.current) {
          purpleOverlayRef.current.style.transform = `translate(${Math.sin(now * 0.04 + 1) * 2.5}%, ${Math.cos(now * 0.03) * 2}%)`;
          purpleOverlayRef.current.style.opacity = `${0.7 + Math.sin(now * 0.06) * 0.05}`;
        }

        if (pinkGradientRef.current) {
          pinkGradientRef.current.style.transform = `translate(${Math.cos(now * 0.03 + 2) * 2}%, ${Math.sin(now * 0.04) * 1.5}%)`;
          pinkGradientRef.current.style.opacity = `${0.75 + Math.sin(now * 0.07) * 0.05}`;
        }

        if (accentLightRef.current) {
          accentLightRef.current.style.transform = `translate(${Math.sin(now * 0.02 + 3) * 1.5}%, ${Math.cos(now * 0.03) * 1.5}%)`;
          accentLightRef.current.style.opacity = `${0.6 + Math.sin(now * 0.05) * 0.1}`;
        }

        if (greenAccentRef.current) {
          greenAccentRef.current.style.transform = `translate(${Math.sin(now * 0.01 + 4) * 1.5}%, ${Math.cos(now * 0.02) * 1}%)`;
          greenAccentRef.current.style.opacity = `${0.4 + Math.sin(now * 0.04) * 0.1}`;
        }

        requestAnimationFrame(animate);
      };

      // Start the animation
      const animationId = requestAnimationFrame(animate);

      // Clean up animation on unmount
      return () => cancelAnimationFrame(animationId);
    };

    const animation = animateGradients();

    return () => {
      if (typeof animation === 'function') {
        animation();
      }
    };
  }, []);

  return (
    <div ref={bgRef} className="fixed inset-0 overflow-hidden mix-blend-normal pointer-events-none">
      {/* Deep base layer - rich dark background */}
      <div className="absolute inset-0 bg-black/95"></div>

      {/* Main purple gradient - deeper and more intense like the reference */}
      <div
        ref={purpleGradientRef}
        className="absolute w-[120%] h-[120%] left-[-10%] top-[-10%] opacity-85"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(122, 35, 168, 0.9) 0%, rgba(76, 20, 110, 0.7) 40%, rgba(40, 10, 60, 0.4) 70%, transparent 100%)',
          transition: 'transform 10s ease-out, opacity 10s ease-out',
          filter: 'blur(15px)',
        }}
      ></div>

      {/* Secondary purple overlay for depth - more intense */}
      <div
        ref={purpleOverlayRef}
        className="absolute w-[120%] h-[120%] left-[-10%] top-[-10%] opacity-70 mix-blend-soft-light"
        style={{
          backgroundImage: 'radial-gradient(circle at 70% 60%, rgba(142, 45, 226, 0.8) 0%, rgba(90, 20, 158, 0.4) 45%, transparent 85%)',
          transition: 'transform 12s ease-out, opacity 12s ease-out',
          filter: 'blur(10px)',
        }}
      ></div>

      {/* Hot pink accent - more vibrant like in the reference image */}
      <div
        ref={pinkGradientRef}
        className="absolute w-[120%] h-[120%] left-[-10%] top-[-10%] opacity-75 mix-blend-screen"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(255, 0, 128, 0.7) 0%, rgba(255, 0, 128, 0.4) 40%, transparent 80%)',
          transition: 'transform 14s ease-out, opacity 14s ease-out',
          filter: 'blur(15px)',
        }}
      ></div>

      {/* Light accent to simulate reflections like in the reference image */}
      <div
        ref={accentLightRef}
        className="absolute w-[120%] h-[120%] left-[-10%] top-[-10%] opacity-60 mix-blend-screen"
        style={{
          backgroundImage: 'radial-gradient(circle at 60% 20%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 30%, transparent 70%)',
          transition: 'transform 16s ease-out, opacity 16s ease-out',
          filter: 'blur(12px)',
        }}
      ></div>

      {/* Brand green accent integrated subtly */}
      <div
        ref={greenAccentRef}
        className="absolute w-[120%] h-[120%] left-[-10%] top-[-10%] opacity-40 mix-blend-screen"
        style={{
          backgroundImage: 'radial-gradient(circle at 40% 80%, rgba(198, 255, 78, 0.5) 0%, rgba(198, 255, 78, 0.15) 40%, transparent 70%)',
          transition: 'transform 18s ease-out, opacity 18s ease-out',
          filter: 'blur(10px)',
        }}
      ></div>

      {/* Subtle noise texture for depth - simulates venue textures */}
      <div
        className="absolute inset-0 opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      ></div>

      {/* Logos pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(/images/logos-bg-trans.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '300px',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}
      />

      {/* Enhanced overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-15"></div>

      {/* Glass-like reflective gradient - more pronounced to match reference */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 mix-blend-overlay"></div>

      {/* Static fallback for No-JS / Agents */}
      <noscript>
        <div className="absolute inset-0 bg-[#050505]">
          <div className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(circle at 50% 30%, rgba(122, 35, 168, 0.9) 0%, rgba(76, 20, 110, 0.7) 40%, transparent 100%)' }}></div>
          <div className="absolute inset-0 opacity-50 mix-blend-screen" style={{ background: 'radial-gradient(circle at 30% 70%, rgba(255, 0, 128, 0.5) 0%, transparent 70%)' }}></div>
          <div className="absolute inset-0 opacity-30 mix-blend-screen" style={{ background: 'radial-gradient(circle at 80% 20%, rgba(198, 255, 78, 0.4) 0%, transparent 60%)' }}></div>
        </div>
      </noscript>
    </div>
  );
};

export default AnimatedBackground;
