import type { Metadata } from 'next';
import { Roboto, PT_Sans } from 'next/font/google';

import './globals.css';
import AccountContextProvider from '@/utils/accountContext/context';
import LoadingContextProvider from '@/utils/loadingContext/context';

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  style: ['normal'],
  display: 'swap',
});

const ptSans = PT_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: ['normal'],
  display: 'swap',
  variable: '--pt-sans',
});

export const metadata: Metadata = {
  title: 'UNICRED - Instituição financeira cooperativa | Unicred do Brasil',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={ptSans.variable}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="/assets/favicon.ico"
          type="image/x-icon"
          sizes="any"
        />
      </head>
      <body className={roboto.className}>
        <LoadingContextProvider>
          <AccountContextProvider>{children}</AccountContextProvider>
        </LoadingContextProvider>
      </body>
    </html>
  );
}
