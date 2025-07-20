import type { Metadata } from 'next';


// --- Structured Data ---
const workshopData = {
  name: "AI Advantage Workshop",
  startDate: "2025-09-20",
  endDate: "2025-09-20",
  startTime: "09:00",
  endTime: "17:00",
  price: "250",
  priceCurrency: "GBP",
  description: "An exclusive invite-only workshop to upgrade how professionals work with AI—with clarity, tools, and style.",
  image: "https://aiworkshop.london/images/ai-advantage-1.jpg",
  locationName: "W London",
  locationAddress: "10 Wardour Street",
  locationCity: "London",
  locationPostalCode: "W1D 6QF",
  locationCountry: "United Kingdom",
  organizerName: "AI Advantage",
  organizerUrl: "https://aiworkshop.london"
};

const eventStructuredData = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: workshopData.name,
  startDate: `${workshopData.startDate}T${workshopData.startTime}:00+01:00`,
  endDate: `${workshopData.endDate}T${workshopData.endTime}:00+01:00`,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  description: workshopData.description,
  image: workshopData.image,
  location: {
    "@type": "Place",
    name: workshopData.locationName,
    address: {
      "@type": "PostalAddress",
      streetAddress: workshopData.locationAddress,
      addressLocality: workshopData.locationCity,
      postalCode: workshopData.locationPostalCode,
      addressCountry: workshopData.locationCountry
    }
  },
  offers: {
    "@type": "Offer",
    url: workshopData.organizerUrl,
    price: workshopData.price,
    priceCurrency: workshopData.priceCurrency,
    availability: "https://schema.org/InStock",
    validFrom: new Date().toISOString().split('T')[0]
  },
  organizer: {
    "@type": "Organization",
    name: workshopData.organizerName,
    url: workshopData.organizerUrl
  },
  performer: {
    "@type": "Organization",
    name: workshopData.organizerName
  }
};

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AI Advantage",
  url: "https://aiworkshop.london",
  logo: "https://aiworkshop.london/images/ai-ldn-logo.png",
  sameAs: []
};

const courseStructuredData = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: workshopData.name,
  description: workshopData.description,
  provider: {
    "@type": "Organization",
    name: workshopData.organizerName,
    sameAs: workshopData.organizerUrl
  }
};

export const metadata: Metadata = {
  title: 'AI Advantage | The Smartest Day You\'ll Spend This Year',
  description: 'A premium one-day workshop to upgrade how professionals work with AI—with clarity, tools, and style. Held at the W Hotel, London.',
  other: {
    'application/ld+json': JSON.stringify([
      eventStructuredData,
      organizationStructuredData,
      courseStructuredData
    ]),
  },
};

import HomePageClient from '@/components/HomePageClient';

export default function HomePage() {
  return <HomePageClient />;
}
