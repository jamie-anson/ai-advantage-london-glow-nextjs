import { Metadata } from 'next';
import PrivacyPolicyClientPage from './PrivacyPolicyClientPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | AI Advantage',
  description: 'Privacy Policy for the AI Advantage workshop.',
};

// The date is now generated at build time, making it static.
const lastUpdated = new Date().toLocaleDateString('en-GB', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClientPage lastUpdated={lastUpdated} />;
}


