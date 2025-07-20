import { Metadata } from 'next';


// Import shared layout components
import AnimatedBackground from '@/components/AnimatedBackground';
import CustomCursor from '@/components/CustomCursor';
import Footer from '@/components/Footer';
import ButtonPrimary from '@/components/ButtonPrimary';

export const metadata: Metadata = {
  title: '404: Page Not Found | AI Advantage',
  description: 'The page you are looking for does not exist.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="bg-background min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <CustomCursor />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center container mx-auto px-6 py-16">
            <div className="glass-card p-12 md:p-16">
              <h1 className="heading-lg text-brand-green mb-4">404</h1>
              <h2 className="heading-md mb-8">Page Not Found</h2>
              <p className="text-xl text-white/80 mb-12">
                Sorry, the page you are looking for could not be found.
              </p>
              <ButtonPrimary href="/">Return to Homepage</ButtonPrimary>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
