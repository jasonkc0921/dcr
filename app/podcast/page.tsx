import Navbar from '@/src/components/NavBar';
import Footer from '@/src/components/Footer';
import PodcastList from '@/src/components/PodcastList';

export default function PodcastPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PodcastList />
      <Footer />
    </main>
  );
}