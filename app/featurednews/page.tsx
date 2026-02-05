import Navbar from '@/src/components/NavBar';
import Footer from '@/src/components/Footer';
import FeaturedNews from '@/src/components/FeaturedNews';

export default function FeaturedNewsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <FeaturedNews />
      <Footer />
    </main>
  );
}