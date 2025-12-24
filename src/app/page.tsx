import type { Metadata } from 'next';
import SessionPageClient from '@/components/SessionPageClient';

export const metadata: Metadata = {
    title: 'AI Advantage | The Smartest Day You\'ll Spend This Year',
    description: 'A premium one-day AI workshop in London. See how Project Beacon was built by one person and learn to build like a team using AI.',
};

export default function HomePage() {
    return <SessionPageClient />;
}
