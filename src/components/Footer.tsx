
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            © 2025 Jamie Anson. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-white/40 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-white/40 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
