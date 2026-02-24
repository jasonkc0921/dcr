import { Metadata } from 'next';
import Navbar from '@/src/components/NavBar';
import Footer from '@/src/components/Footer';
import FeaturedNews from '@/src/components/FeaturedNews';

export const metadata: Metadata = {
  title: "Featured News | DCR Marketing & DreamShop Press Coverage",
  description: "Read the latest news and press coverage on DCR Marketing and DreamShop — featuring partnerships with CIMB Bank, Vespa, Aprilia, and local brand spotlights across Malaysia.",
  alternates: {
    canonical: 'https://www.dcr.com.my/featurednews',
  },
  openGraph: {
    title: "Featured News | DCR Marketing & DreamShop Press Coverage",
    description: "Read the latest news and press coverage on DCR Marketing and DreamShop — featuring partnerships with CIMB Bank, Vespa, Aprilia, and local brand spotlights across Malaysia.",
    url: "https://www.dcr.com.my/featurednews",
    siteName: "DCR Marketing",
    locale: "en_MY",
    type: "website",
    images: [
      {
        url: "https://www.dcr.com.my/press-release-1-cimb.jpg",
        alt: "DCR Marketing & DreamShop Featured in Malaysian Press",
      },
    ],
  },
};

export default function FeaturedNewsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <FeaturedNews />
      <Footer />
    </main>
  );
}