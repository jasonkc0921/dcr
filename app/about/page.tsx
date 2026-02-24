// app/about/page.tsx
import { Metadata } from 'next';
import AboutUs from '@/src/components/AboutUs';

export const metadata: Metadata = {
  title: "About DCR Marketing | Our Story, Team & Brand Partners",
  description: "Since 2006, DCR Marketing has powered loyalty programs and fulfillment solutions for 30+ leading brands including Sony, Apple, Panasonic, and Huawei. Learn about our team and mission.",
  alternates: {
    canonical: 'https://www.dcr.com.my/about',
  },
  openGraph: {
    title: "About DCR Marketing | Our Story, Team & Brand Partners",
    description: "Since 2006, DCR Marketing has powered loyalty programs and fulfillment solutions for 30+ leading brands including Sony, Apple, Panasonic, and Huawei.",
    url: "https://www.dcr.com.my/about",
    siteName: "DCR Marketing",
    locale: "en_MY",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutUs />;
}