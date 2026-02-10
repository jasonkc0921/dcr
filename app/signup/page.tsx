// app/signup/page.tsx
import SignUp from '@/src/components/SignUp';
import Navbar from '@/src/components/NavBar';
import Footer from '@/src/components/Footer';

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <SignUp />
      <Footer />
    </main>
  );
}