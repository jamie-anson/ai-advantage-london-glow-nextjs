"use client";

import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import CustomCursor from '@/components/CustomCursor';
import Footer from '@/components/Footer';

interface PrivacyPolicyClientPageProps {
  lastUpdated: string;
}

const PrivacyPolicyClientPage = ({ lastUpdated }: PrivacyPolicyClientPageProps) => {
  return (
    <div className="bg-background min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <CustomCursor />
      
      <div className="relative z-10 container mx-auto px-6 py-16 md:py-24 max-w-3xl">
        <header className="text-center mb-12">
          <h1 className="heading-lg">Privacy Policy</h1>
        </header>
        
        <div className="mx-auto glass-card p-8 md:p-12">
          <h2 className="font-bold text-white mt-8 mb-4 text-2xl">1. Introduction</h2>
          <p className="text-white/66 text-base">AI Advantage (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (the &quot;Site&quot;), including any other media form, media channel, mobile website, or mobile application related or connected thereto. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>

          <h2 className="font-bold text-white mt-8 mb-4 text-2xl">2. Information We Collect</h2>
          <p className="text-white/66 text-base">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
          <h3 className="italic text-white mt-6 mb-3 text-xl">Personal Data</h3>
          <p className="text-white/66 text-base">Personally identifiable information, such as your name, email address, and professional background, that you voluntarily give to us when you register for an event or fill out a form (e.g., the &quot;Request Invite&quot; form).</p>
          <h3 className="italic text-white mt-6 mb-3 text-xl">Usage Data</h3>
          <p className="text-white/66 text-base">Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site. We may also collect information about the device you use to access our Site.</p>
          <h3 className="italic text-white mt-6 mb-3 text-xl">Cookies and Tracking Technologies</h3>
          <p className="text-white/66 text-base">We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience.</p>

          <h2 className="font-bold text-white mt-8 mb-4 text-2xl">3. How We Use Your Information</h2>
          <p className="text-white/66 text-base">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
          <ul className="list-disc pl-5 marker:text-brand-green">
            <li className="text-white/66 text-base mb-2">Administer workshops, events, and promotions.</li>
            <li className="text-white/66 text-base mb-2">Compile anonymous statistical data and analysis for use internally or with third parties.</li>
            <li className="text-white/66 text-base mb-2">Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site to you.</li>
            <li className="text-white/66 text-base mb-2">Email you regarding your account or order.</li>
            <li className="text-white/66 text-base mb-2">Monitor and analyze usage and trends to improve your experience with the Site.</li>
          </ul>

          <h2 className="font-bold text-white mt-8 mb-4 text-2xl">4. Disclosure of Your Information</h2>
          <p className="text-white/66 text-base">We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
          <h3 className="italic text-white mt-6 mb-3 text-xl">By Law or to Protect Rights</h3>
          <p className="text-white/66 text-base">If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</p>
          <h3 className="italic text-white mt-6 mb-3 text-xl">Third-Party Service Providers</h3>
          <p className="text-white/66 text-base">We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</p>
          <h3 className="italic text-white mt-6 mb-3 text-xl">Business Transfers</h3>
          <p className="text-white/66 text-base">We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</p>
          
          <h2 className="font-bold text-white mt-8 mb-4 text-2xl">5. Data Security</h2>
          <p className="text-white/66 text-base">We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

          <h2 className="font-bold text-white mt-8 mb-4 text-2xl">6. Your Rights (e.g., GDPR)</h2>
          <p className="text-white/66 text-base">If you are a resident of the European Economic Area (EEA), you have certain data protection rights. We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data. You have the right to:</p>
          <ul className="list-disc pl-5 marker:text-brand-green">
            <li className="text-white/66 text-base mb-2">Access, update or delete the information we have on you.</li>
            <li className="text-white/66 text-base mb-2">Rectification if that information is inaccurate or incomplete.</li>
            <li className="text-white/66 text-base mb-2">Object to our processing of your Personal Data.</li>
            <li className="text-white/66 text-base mb-2">Restrict the processing of your personal information.</li>
            <li className="text-white/66 text-base mb-2">Data portability for the information you provide to us.</li>
            <li className="text-white/66 text-base mb-2">Withdraw consent at any time where we relied on your consent to process your personal information.</li>
          </ul>
          <p className="text-white/66 text-base">Please note that we may ask you to verify your identity before responding to such requests.</p>

          <h2 className="font-bold text-white mt-8 mb-4 text-2xl">7. Children&apos;s Privacy</h2>
          <p className="text-white/66 text-base">Our Service does not address anyone under the age of 13 (&quot;Children&quot;). We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from a child under age 13 without verification of parental consent, we take steps to remove that information from our servers.</p>

          <h2 className="font-bold text-white mt-8 mb-4 text-2xl">8. Changes to This Privacy Policy</h2>
          <p className="text-white/66 text-base">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

          <h2 className="font-bold text-white mt-8 mb-4 text-2xl">9. Contact Us</h2>
          <p className="text-white/66 text-base">If you have any questions about this Privacy Policy, please contact us at jamie@aiworkshop.london.</p>

          <p className="text-sm mt-8">Last Updated: {lastUpdated}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyClientPage;
