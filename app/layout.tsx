import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google"; // Using high-converting corporate fonts
import "./globals.css";

// 1. Font Optimization: self-hosting fonts to eliminate render-blocking resources
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap', // Prevents layout shift (CLS)
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: 'swap',
});

// 2. SEO Metadata: Including common keywords in title and description
export const metadata: Metadata = {
  title: "DCR Marketing | Premier Loyalty & Rewards Program Management Malaysia",
  description: "DCR Marketing is a leader in customer loyalty programs, secure warehousing, fulfillment services, and 0% Easy Payment Plans since 2006. Partner with us for end-to-end marketing solutions.",
  keywords: [
    "Loyalty Program Malaysia", 
    "Rewards Program Management", 
    "Warehousing and Fulfillment", 
    "0% Easy Payment Plan Malaysia", 
    "DreamShop Merchant Sign Up",
    "B2B Marketing Solutions"
  ],
  authors: [{ name: "DCR Marketing Sdn Bhd" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  // OpenGraph for better social media sharing preview
  openGraph: {
    title: "DCR Marketing | Premier Loyalty & Rewards Management",
    description: "Empowering brands through strategic loyalty and fulfillment solutions.",
    url: "https://www.dcr.com.my",
    siteName: "DCR Marketing",
    locale: "en_MY",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}