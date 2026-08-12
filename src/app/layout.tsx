import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InquiryModal from '@/components/InquiryModal';
import FloatingButtons from '@/components/FloatingButtons';

export const metadata: Metadata = {
  title: 'Nice Water Solutions® | Feel The Purity - Water Purifiers & Treatment Systems',
  description:
    'Nice Water Solutions is a leading ISO 9001:2015 certified manufacturer of premium Water Purifiers, Water Treatment Plants, Water Treatment RO Plants, and Commercial Water Coolers.',
  keywords: [
    'Nice Water Solutions',
    'Water Purifiers',
    'Water Treatment Plant',
    'Water Treatment RO Plant',
    'Water Cooler',
    'Commercial RO Plant',
    'Domestic RO Purifier',
  ],
  icons: {
    icon: '/assets/images/logo.svg',
  },
  openGraph: {
    title: 'Nice Water Solutions® | Feel The Purity',
    description: 'Leading manufacturer of Water Purifiers, Water Treatment Plants, RO Plants, and Water Coolers.',
    url: 'https://nicewatersolutions.com',
    siteName: 'Nice Water Solutions',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <TopBar />
          <Header />
          <main>{children}</main>
          <Footer />
          <InquiryModal />
          <FloatingButtons />
        </CartProvider>
      </body>
    </html>
  );
}
