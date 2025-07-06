import './globals.css';
import type { Metadata } from 'next';

// Import Poppins
import { Poppins } from 'next/font/google';
// Import Plus Jakarta Sans
import { Plus_Jakarta_Sans } from 'next/font/google';
import Layout from './components/Layout/Layout';
import LenisProvider from './components/Providers/LenisProvider';

// Load Poppins
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

// Load Plus Jakarta Sans
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'My Blog Site',
  description: 'A Next.js blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${plusJakarta.variable}`}>
      <body>
        <LenisProvider />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
