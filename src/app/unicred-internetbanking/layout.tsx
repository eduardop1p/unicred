import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unicred - Internet Banking',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="font-pt-sans">{children}</div>;
}
