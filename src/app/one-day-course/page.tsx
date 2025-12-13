import type { Metadata } from 'next';
import CoursePageClient from '@/components/CoursePageClient';

export const metadata: Metadata = {
    title: 'AI Advantage | One-Day AI Course London',
    description: 'Show up this year with something you built. A 1-day workshop in London for people who want to use AI to unlock their autonomy.',
};

export default function CoursePage() {
    return <CoursePageClient />;
}
