import type { Metadata } from 'next';
import { Cinzel, Cinzel_Decorative, EB_Garamond, Montserrat } from 'next/font/google';
import './globals.css';
import CookieBanner from '@/components/CookieBanner';
import SchemaOrg from '@/components/SchemaOrg';

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
  metadataBase: new URL('https://www.castellocarlovcrotone.it'),
  title: {
    default: 'Castello di Carlo V Crotone — Visita, Orari e Tour Guidati',
    template: '%s | Castello Carlo V Crotone',
  },
  description:
    "Visita il Castello di Carlo V a Crotone. Fortezza storica dal IX secolo sul Mar Ionio. Tour guidati, mostre ed eventi culturali. Ingresso €2. Aperto da martedì a domenica. Gestito dall'Associazione Multitracce.",
  keywords: [
    'castello carlo v crotone',
    'castello crotone',
    'cosa vedere crotone',
    'turismo crotone',
    'fortezza crotone',
    'torre comandante crotone',
    'tour guidati crotone',
    'monumenti crotone',
    'storia crotone',
    'attrazioni crotone',
    'castello carlo quinto crotone',
    'visitare crotone',
    'crotone turismo',
    'calabria castelli',
    'castello medievale calabria',
    'associazione multitracce crotone',
  ],
  authors: [{ name: 'Associazione Multitracce' }],
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://www.castellocarlovcrotone.it',
    siteName: 'Castello di Carlo V — Crotone',
    title: 'Castello di Carlo V Crotone — Dal IX Secolo',
    description:
      'Visita la fortezza storica di Crotone. Tour guidati, mostre ed eventi. Ingresso €2. Aperto martedì-domenica.',
    images: [
      {
        url: '/images/ingresso-castello.webp',
        width: 1200,
        height: 630,
        alt: 'Ingresso del Castello di Carlo V a Crotone',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Castello di Carlo V Crotone — Dal IX Secolo',
    description:
      'Visita la fortezza storica di Crotone. Tour guidati, mostre ed eventi. Ingresso €2. Aperto martedì-domenica.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.castellocarlovcrotone.it' },
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
        <SchemaOrg />
        <a href="#main-content" className="skip-to-content">
          Vai al contenuto principale
        </a>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
