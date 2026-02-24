// app/signup/page.tsx
import { Metadata } from 'next';
import SignUp from '@/src/components/SignUp';
import Navbar from '@/src/components/NavBar';
import Footer from '@/src/components/Footer';

export const metadata: Metadata = {
  title: "Sign Up | Become a partner of DCR Marketing",
  description: "Join DCR Marketing's merchant network. Register today to access 0% Easy Payment Plans, loyalty program integration, and nationwide fulfillment services across Malaysia.",
  alternates: {
    canonical: 'https://www.dcr.com.my/signup',
  },
  openGraph: {
    title: "Sign Up | Become a a partner of DCR Marketing",
    description: "Join DCR Marketing's merchant network. Register today to access 0% Easy Payment Plans, loyalty program integration, and nationwide fulfillment services across Malaysia.",
    url: "https://www.dcr.com.my/signup",
    siteName: "DCR Marketing",
    locale: "en_MY",
    type: "website",
  },
};

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <SignUp />
      <Footer />
    </main>
  );
}