import { Metadata } from 'next';
import LandingPage from '../src/components/LandingPage';

// 1. Page-Specific Metadata to improve Search Engine identification
export const metadata: Metadata = {
  title: "DCR Marketing | No.1 Loyalty & Rewards Management Agency in Malaysia",
  description: "Transform your customer engagement with DCR Marketing. We specialize in Rewards & Loyalty Programs, 0% Easy Payment Plans, and Nationwide Fulfillment services.",
  alternates: {
    canonical: 'https://www.dcr.com.my',
  },
  openGraph: {
    title: "DCR Marketing | No.1 Loyalty & Rewards Management Agency in Malaysia",
    description: "Transform your customer engagement with DCR Marketing. We specialize in Rewards & Loyalty Programs, 0% Easy Payment Plans, and Nationwide Fulfillment services.",
    url: "https://www.dcr.com.my",
    siteName: "DCR Marketing",
    locale: "en_MY",
    type: "website",
    images: [
      {
        url: "https://www.dcr.com.my/DCR_Logo.png",
        alt: "DCR Marketing – The Trusted Engine Behind Top Brands in Malaysia",
      },
    ],
  },
};

export default function Home() {
  // 2. Structured Data (Schema.org) to help Search Engines index content quickly
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DCR Marketing Sdn Bhd',
    url: 'https://www.dcr.com.my',
    logo: 'https://www.dcr.com.my/DCR_Logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+603-7832-6103',
      contactType: 'customer service',
      areaServed: 'MY',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://www.facebook.com/theDCR/',
      'https://www.instagram.com/dcrmarketing/',
    ],
  };

  return (
    <main>
      {/* 3. Injecting the JSON-LD for "Rich Snippets" in Search Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <LandingPage />
    </main>
  );
}