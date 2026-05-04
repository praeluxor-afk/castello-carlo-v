import type { Metadata } from 'next';
import { Cinzel, Cinzel_Decorative, EB_Garamond, Montserrat } from 'next/font/google';
import './globals.css';
import CookieBanner from '@/components/CookieBanner';

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-cinzel',
  display: 'swap',
});

const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-cinzel-decorative',
  display: 'swap',
});

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-garamond',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Castello di Carlo V — Crotone',
  description:
    "Visita il Castello di Carlo V a Crotone. Fortezza storica dal IX secolo, tour guidati, eventi culturali. Gestito dall'Associazione Multitracce in collaborazione con il Comune di Crotone.",
  keywords:
    'castello carlo v crotone, castello crotone, fortezza crotone, turismo crotone, storia crotone, tour guidati crotone',
  authors: [{ name: 'Associazione Multitracce' }],
  openGraph: {
    title: 'Castello di Carlo V — Crotone',
    description: 'Un viaggio attraverso i secoli nel cuore di Crotone',
    url: 'https://castellocarlovcrotone.it',
    type: 'website',
    locale: 'it_IT',
    siteName: 'Castello di Carlo V Crotone',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Castello di Carlo V — Crotone',
    description: 'Un viaggio attraverso i secoli nel cuore di Crotone',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`${cinzel.variable} ${cinzelDecorative.variable} ${ebGaramond.variable} ${montserrat.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-to-content">
          Vai al contenuto principale
        </a>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
