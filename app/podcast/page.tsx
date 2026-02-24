import { Metadata } from 'next';
import Navbar from '@/src/components/NavBar';
import Footer from '@/src/components/Footer';
import PodcastList from '@/src/components/PodcastList';

export const metadata: Metadata = {
  title: "DreamShop Podcast | Business & Brand Stories – DCR Marketing",
  description: "Listen to the DreamShop Podcast — conversations with Malaysian entrepreneurs and brand leaders on loyalty, e-commerce, and business growth. Hosted by Jeremy.",
  alternates: {
    canonical: 'https://www.dcr.com.my/podcast',
  },
  openGraph: {
    title: "DreamShop Podcast | Business & Brand Stories – DCR Marketing",
    description: "Listen to the DreamShop Podcast — conversations with Malaysian entrepreneurs and brand leaders on loyalty, e-commerce, and business growth.",
    url: "https://www.dcr.com.my/podcast",
    siteName: "DCR Marketing",
    locale: "en_MY",
    type: "website",
    images: [
      {
        url: "https://www.dcr.com.my/dreamshop-thumb.jpg",
        alt: "DreamShop Podcast – Business & Brand Stories by DCR Marketing",
      },
    ],
  },
};

export default function PodcastPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PodcastList />
      <Footer />
    </main>
  );
}