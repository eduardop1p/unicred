import type { Metadata } from 'next';

import Footer from '@/components/internetbanking/footer';
import Header from '@/components/internetbanking/header';

export const metadata: Metadata = {
  title: 'Unicred - Internet Banking',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="font-pt-sans w-full flex flex-col h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
