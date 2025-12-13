import type { Metadata } from 'next';
import SessionPageClient from '@/components/SessionPageClient';

export const metadata: Metadata = {
    title: 'Project Beacon | One-Day AI Course',
    description: 'See how Jamie built what normally takes a team — and how you can do the same. A one-day AI course in London.',
};

export default function SessionPage() {
    return <SessionPageClient />;
}
