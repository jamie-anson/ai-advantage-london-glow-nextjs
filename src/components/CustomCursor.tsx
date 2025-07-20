
"use client";

import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // 768px is a common breakpoint for tablets
    };

    // Initial check
    checkIfMobile();
    
    // Add resize listener to update on orientation changes
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return; // Don't set up cursor events on mobile
    
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable = target.closest('a, button, [data-hover]');
      setIsHovering(!!isHoverable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousemove', updateHoverState);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousemove', updateHoverState);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, isMobile]); // Add isMobile to dependencies

  // Don't render anything on mobile
  if (isMobile) return null;

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hover' : ''} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {isHovering && (
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <path 
            d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" 
            fill="#C6FF4E" 
          />
        </svg>
      )}
    </div>
  );
};

export default CustomCursor;
