"use client";

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
    // Use state to track position and if we should hover
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only run on client side
        const updateCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Check if target is clickable
            const target = e.target as HTMLElement;
            const computedStyle = window.getComputedStyle(target);

            setIsPointer(
                computedStyle.cursor === 'pointer' ||
                target.tagName.toLowerCase() === 'button' ||
                target.tagName.toLowerCase() === 'a' ||
                target.closest('button') !== null ||
                target.closest('a') !== null
            );

            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', updateCursor);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', updateCursor);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <>
            {/* Main cursor dot */}
            <div
                className="fixed top-0 left-0 w-2 h-2 bg-brand-green rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
                }}
            />

            {/* Outer ring */}
            <div
                className="fixed top-0 left-0 w-8 h-8 border border-brand-green rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ease-out"
                style={{
                    transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
                    opacity: 0.8
                }}
            />
        </>
    );
}
