"use client";

import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import CustomCursor from '@/components/CustomCursor';
import Footer from '@/components/Footer';

interface TermsClientPageProps {
  lastUpdated: string;
}

const TermsClientPage = ({ lastUpdated }: TermsClientPageProps) => {
  return (
    <div className="bg-background min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <CustomCursor />
      
      <div className="relative z-10 container mx-auto px-6 py-16 md:py-24 max-w-3xl">
        <header className="text-center mb-12">
          <h1 className="heading-lg">Terms of Service</h1>
        </header>
        
        <div className="mx-auto glass-card p-8 md:p-12">
          <h2 className="font-bold text-white mt-8 mb-4 text-2xl">1. Acceptance of Terms</h2>
          <p className="text-white/66 text-base">By accessing and using the AI Advantage website (the &quot;Service&quot;), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement.</p>

          <h2 className="font-bold text-white mt-8 mb-4 text-2xl">2. Description of Service</h2>
          <p className="text-white/66 text-base">AI Advantage provides workshops and related content concerning artificial intelligence (the &quot;Service&quot;). You understand and agree that the Service is provided &quot;AS-IS&quot; and that AI Advantage assumes no responsibility for the timeliness, deletion, mis-delivery or failure to store any user communications or personalization settings.</p>

          <h2 className="font-bold text-white mt-8 mb-4 text-2xl">3. Use of the Website</h2>
          <p className="text-white/66 text-base">You agree to use the website only for lawful purposes. You are prohibited from any use of the website that would constitute an illegal offense, give rise to liability, or otherwise violate any applicable local, state, national, or international law or regulation.</p>
          
          <h2 className="font-bold text-white mt-8 mb-4 text-2xl">4. Intellectual Property</h2>
          <p className="text-white/66 text-base">The site and its original content, features, and functionality are owned by AI Advantage and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. You agree not to copy, modify, create a derivative work of, reverse engineer, reverse assemble, or otherwise attempt to discover any source code, sell, assign, sublicense, grant a security interest in or otherwise transfer any right in the Software.</p>

          <h2 className="font-bold text-white mt-8 mb-4 text-2xl">5. User Conduct</h2>
          <p className="text-white/66 text-base">You agree not to use the Service to:</p>
          <ul className="list-disc pl-5 marker:text-brand-green">
            <li className="text-white/66 text-base mb-2">Upload, post, email, transmit, or otherwise make available any content that is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another&apos;s privacy, hateful, or racially, ethnically, or otherwise objectionable;</li>
            <li className="text-white/66 text-base mb-2">Harm minors in any way;</li>
            <li className="text-white/66 text-base mb-2">Impersonate any person or entity, including, but not limited to, an AI Advantage official, or falsely state or otherwise misrepresent your affiliation with a person or entity;</li>
          </ul>
          <p className="text-white/66 text-base">(This list is not exhaustive)</p>

          <h2 className="font-bold text-white mt-8 mb-4 text-2xl">6. Disclaimers and Limitation of Liability</h2>
          <p className="text-white/66 text-base mb-4">The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. AI Advantage expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. AI Advantage makes no warranty that the Service will meet your requirements, or that the Service will be uninterrupted, timely, secure, or error-free.</p>
          <p className="text-white/66 text-base">In no event shall AI Advantage be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses (even if AI Advantage has been advised of the possibility of such damages).</p>

          <h2 className="font-bold text-white mt-8 mb-4 text-2xl">7. Indemnification</h2>
          <p className="text-white/66 text-base">You agree to indemnify and hold harmless AI Advantage, its officers, directors, employees, and agents, from and against any claims, actions, or demands, including without limitation reasonable legal and accounting fees, alleging or resulting from your use of the Service or your breach of these Terms of Service.</p>

          <h2 className="font-bold text-white mt-8 mb-4 text-2xl">8. Governing Law</h2>
          <p className="text-white/66 text-base">These Terms of Service shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.</p>

          <h2 className="font-bold text-white mt-8 mb-4 text-2xl">9. Changes to Terms</h2>
          <p className="text-white/66 text-base">AI Advantage reserves the right, at its sole discretion, to modify or replace these Terms of Service by posting the updated terms on the site. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms of Service.</p>

          <h2 className="font-bold text-white mt-8 mb-4 text-2xl">10. Contact Information</h2>
          <p className="text-white/66 text-base">If you have any questions about these Terms of Service, please contact us at jamie@aiworkshop.london.</p>
          
          <p className="text-sm mt-8">Last Updated: {lastUpdated}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsClientPage;
