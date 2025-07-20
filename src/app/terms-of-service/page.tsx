import { Metadata } from 'next';
import TermsClientPage from './TermsClientPage';

export const metadata: Metadata = {
  title: 'Terms of Service | AI Advantage',
  description: 'Terms of Service for the AI Advantage workshop.',
};

// The date is now generated at build time, making it static.
const lastUpdated = new Date().toLocaleDateString('en-GB', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export default function TermsOfServicePage() {
  return <TermsClientPage lastUpdated={lastUpdated} />;
}


