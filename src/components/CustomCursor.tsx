"use client";

import { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkIfMobile();

    // Add resize listener
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let isVisible = false;

    const updatePosition = (e: MouseEvent) => {
      if (!isVisible) {
        cursor.style.opacity = '1';
        isVisible = true;
      }
      // Use transform for better performance
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate3d(-50%, -50%, 0)`;
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Expanded list of interactive elements
      const isHoverable = target.closest('a, button, [data-hover], input, textarea, label, [role="button"], .radio-group-item');

      const icon = cursor.querySelector('.inner-cursor-icon');

      if (isHoverable) {
        cursor.classList.add('hover');
        if (icon) icon.classList.remove('hidden');
      } else {
        cursor.classList.remove('hover');
        if (icon) icon.classList.add('hidden');
      }
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      isVisible = false;
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
      isVisible = true;
    };

    document.addEventListener('mousemove', updatePosition, { passive: true });
    document.addEventListener('mousemove', updateHoverState, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousemove', updateHoverState);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.style.cursor = 'auto';
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className="custom-cursor opacity-0 fixed pointer-events-none z-[9999]"
      style={{
        left: 0,
        top: 0,
      }}
    >
      <div className="inner-cursor-icon hidden transition-opacity duration-200">
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
      </div>
    </div>
  );
};

export default CustomCursor;
