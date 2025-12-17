"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const SiteHeader = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'One Day Course', path: '/one-day-course' },
        { name: 'Session', path: '/session' },
        { name: 'Request Invite', path: '/request-invite' },
    ];

    return (
        <>
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-8 md:py-8 pointer-events-none"
            >
                {/* Logo - Pointer events allowed for interaction */}
                <Link href="/" className="pointer-events-auto relative z-50 transition-transform hover:scale-105 duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                    <Image
                        src="/images/ai-ldn-logo.png"
                        alt="AI Advantage Logo"
                        width={200}
                        height={50}
                        className="h-8 w-auto md:h-10 lg:h-12 object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Menu - Pointer events allowed */}
                <nav className="pointer-events-auto hidden md:flex items-center gap-8">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={cn(
                                    "font-mono text-xs uppercase tracking-widest transition-all duration-300 relative group",
                                    isActive ? "text-white" : "text-white/60 hover:text-white"
                                )}
                            >
                                {item.name}
                                <span className={cn(
                                    "absolute -bottom-2 left-0 w-full h-[1px] bg-brand-green transform transition-transform duration-300 origin-left",
                                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                )} />
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Menu Toggle - Pointer events allowed */}
                <button
                    className="pointer-events-auto md:hidden relative z-50 text-white p-2 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex items-center justify-center pointer-events-auto md:hidden"
                    >
                        <nav className="flex flex-col items-center gap-8">
                            {navItems.map((item, index) => {
                                const isActive = pathname === item.path;
                                return (
                                    <motion.div
                                        key={item.path}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + (index * 0.1) }}
                                    >
                                        <Link
                                            href={item.path}
                                            className={cn(
                                                "font-serif text-3xl font-bold transition-all duration-300",
                                                isActive ? "text-brand-green" : "text-white hover:text-brand-green"
                                            )}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default SiteHeader;
