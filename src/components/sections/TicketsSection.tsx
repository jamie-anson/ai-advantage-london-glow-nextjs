"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import ButtonPrimary from '../ButtonPrimary';

const tickets = [
  {
    name: "Invite-Only Ticket",
    price: "£275",
    priceSubtitle: "Final price confirmed on invitation.",
    features: [
      "Full workshop access",
      "Curated lunch in a luxury setting",
      "Surprise extras — tailored to the venue & guest list"
    ],
    bgClass: "bg-gradient-to-br from-black to-muted border-brand-green/40",
    popular: false
  }
];

const TicketsSection = () => {
  const [isInView, setIsInView] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    const target = document.getElementById('tickets');
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <>
      <section id="tickets" className="section py-32">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className={cn(
              "heading-lg mb-6 transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              This Isn&apos;t a Ticket.<br />
              It&apos;s a <span className="text-brand-green">Signal.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
            {tickets.map((ticket, index) => (
              <div
                key={index}
                className={cn(
                  "rounded-2xl p-8 border backdrop-blur-sm relative overflow-hidden transition-all duration-700",
                  ticket.bgClass,
                  ticket.popular ? "md:translate-y-[-20px]" : "",
                  isInView ? "opacity-100 translate-x-0" : index === 0 ? "opacity-0 -translate-x-12" : "opacity-0 translate-x-12",
                  `delay-[${200 + (index * 150)}ms]`,
                  "group"
                )}
              >
                {/* Background image with fade effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-0"></div>
                  <div
                    className={cn(
                      "absolute inset-0 bg-cover bg-center opacity-30 transition-all duration-1000",
                      isInView ? "opacity-30 translate-x-0" : "opacity-0 -translate-x-1/2",
                      "group-hover:opacity-40"
                    )}
                    style={{
                      backgroundImage: 'url("/images/ai-advantage-1.jpg")',
                      backgroundPosition: 'left center',
                      clipPath: 'polygon(0 0, 60% 0, 100% 100%, 0% 100%)'
                    }}
                  />
                </div>
                {/* Content wrapper */}
                <div className="relative z-10">
                  {ticket.popular && (
                    <div className="absolute top-4 right-4 bg-brand-fuchsia text-white text-xs px-3 py-1 rounded-full">
                      POPULAR CHOICE
                    </div>
                  )}

                  <div className="text-right">
                    <div className="mb-6">
                      <h3 className="text-4xl font-serif mb-8">{ticket.name}</h3>
                    </div>
                    <div className="mb-6">
                      <div className="text-4xl font-bold">{ticket.price}</div>
                      {ticket.priceSubtitle && (
                        <p className="text-sm text-white/70 mt-1 italic">{ticket.priceSubtitle}</p>
                      )}
                    </div>
                  </div>

                  <ul className="mb-8 space-y-3">
                    {ticket.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-end gap-3">
                        <span className="text-right">{feature}</span>
                        <span className="w-5 h-5 flex-shrink-0 rounded-full bg-brand-green/20 flex items-center justify-center">
                          <span className="w-2 h-2 bg-brand-green rounded-full"></span>
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex justify-end">
                    <ButtonPrimary onClick={() => router.push('/request-invite')}>
                      Request Invite
                    </ButtonPrimary>
                  </div>
                </div>  {/* Close content wrapper */}

                {ticket.popular && (
                  <p className="mt-4 text-sm italic text-white/70">
                    Designed for duos. Because success is more fun shared.
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* <div className={cn(
            "mt-24 max-w-4xl mx-auto text-center transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <h3 className="text-3xl font-serif mb-6">
              Get Trained. Get Certified. Get It Expensed.
            </h3>
            
            <p className="text-lg mb-8 text-left">
              You&apos;re here to level up — but your company benefits too. That&apos;s why everything about this workshop is built to be easy to expense, impossible to fake, and valuable at work.
            </p>
            
            <p className="text-lg mb-12 text-left">
              Whether you&apos;re self-funding, using your team budget, or getting reimbursed, we&apos;ve got you covered.
            </p>
            
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-12"></div>
            
            <div className="text-left max-w-3xl mx-auto space-y-12">
              <div>
                <h4 className="text-xl font-semibold mb-4">Pay by Card. Expense with Confidence.</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-brand-green">✓</span>
                    <span>Company cards accepted at checkout</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-brand-green">✓</span>
                    <span>Expense-ready PDF receipt sent automatically</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-brand-green">✓</span>
                    <span>Optional company details field at checkout</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-brand-green">✓</span>
                    <span>Includes VAT number & full workshop description</span>
                  </li>
                  <li className="flex items-center text-white/70">
                    <span className="mr-2">✗</span>
                    <span>No invoice request forms. No back-and-forth. Just book, go, and claim it back.</span>
                  </li>
                </ul>
              </div>
              
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-12"></div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4">Verifiable Certification. On-Chain. On-Record.</h4>
                <p className="mb-4">
                  You&apos;ll receive a blockchain-backed NFT certificate that proves:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-brand-green mr-3"></span>
                    <span>You attended and completed the AI Innovation Workshop</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-brand-green mr-3"></span>
                    <span>You built a working prototype using real tools</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-brand-green mr-3"></span>
                    <span>You understand how to apply AI strategically to your role or business</span>
                  </li>
                </ul>
                <p className="text-white/80">
                  Your boss can verify it. Your team can see it. Your LinkedIn can show it off.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* <div className={cn(
            "max-w-4xl mx-auto transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <h3 className="text-3xl font-serif mb-12 text-center">
              TL;DR — What Your Boss Will Want to Know
            </h3>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-white/10 last:border-b-0"
                >
                  <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-4 hover:text-brand-green transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-white/80">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default TicketsSection;
