"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const SiteHeader = () => {
    const pathname = usePathname();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'One Day Course', path: '/one-day-course' },
        { name: 'Session', path: '/session' },
        { name: 'Request Invite', path: '/request-invite' },
    ];

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-8 md:py-8 pointer-events-none"
        >
            {/* Logo - Pointer events allowed for interaction */}
            <Link href="/" className="pointer-events-auto relative z-50 transition-transform hover:scale-105 duration-300">
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

            {/* Mobile Menu Toggler (Simple placeholder for now if needed, but keeping text links hidden on mobile for cleaner look or could add a simple stacked menu if requested. User said "menu at top right", implying desktop mainly. I will leave it hidden on mobile for now to avoid clutter unless requested) */}
            {/* For mobile, we might want a simple "Menu" text or hamburger. For now, I'll just show the Request Invite link on mobile perhaps? Or just hide all. 
                Actually user said "on all 4 pages", implies they want nav. 
                I'll allow scrollable horizontal nav on mobile or just simple wrapping links.
            */}
            <nav className="pointer-events-auto flex md:hidden items-center gap-6">
                {/* Mobile simplified nav - maybe just Request Invite? Or a hamburger. 
                     Let's keep it simple: Hide for now as complex mobile nav wasn't spec'd, focus on Desktop as per "top right" usually implies. 
                     Actually, let's make it visible but smaller text.
                 */}
                <Link
                    href="/request-invite"
                    className="font-mono text-[10px] uppercase tracking-widest text-brand-green border border-brand-green/30 px-3 py-1.5 rounded-full bg-brand-green/10 backdrop-blur-sm"
                >
                    Request Invite
                </Link>
            </nav>

        </motion.header>
    );
};

export default SiteHeader;
