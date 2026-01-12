import type { Metadata } from 'next';
import InnovationTeamsClient from '@/components/InnovationTeamsClient';

export const metadata: Metadata = {
    title: 'AI for Innovation Teams | AI Advantage',
    description: 'Learn a faster, more realistic way to prototype and test AI ideas without waiting for engineering capacity. A focused, in-person session for innovation teams.',
};

export default function InnovationTeamsPage() {
    return <InnovationTeamsClient />;
}
