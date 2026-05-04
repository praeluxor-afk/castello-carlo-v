import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pagina non trovata — Castello di Carlo V Crotone',
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--color-dark)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-cinzel)',
          fontSize: 'clamp(4rem, 15vw, 10rem)',
          color: 'var(--color-gold)',
          lineHeight: 1,
          marginBottom: '1rem',
          opacity: 0.3,
        }}
      >
        404
      </div>

      <h1
        style={{
          fontFamily: 'var(--font-cinzel)',
          fontSize: 'clamp(1.2rem, 3vw, 2rem)',
          color: 'var(--color-gold)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}
      >
        Pagina Non Trovata
      </h1>

      <p
        style={{
          fontFamily: 'var(--font-garamond)',
          fontStyle: 'italic',
          fontSize: '1.1rem',
          color: 'var(--color-text-muted)',
          marginBottom: '2.5rem',
          maxWidth: '400px',
        }}
      >
        La pagina che stai cercando non esiste o è stata spostata.
      </p>

      <Link
        href="/"
        style={{
          border: '1px solid var(--color-gold)',
          color: 'var(--color-gold)',
          fontFamily: 'var(--font-montserrat)',
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          padding: '0.875rem 2.5rem',
          textDecoration: 'none',
          display: 'inline-block',
          transition: 'background 0.3s ease, color 0.3s ease',
        }}
      >
        ← Torna alla Home
      </Link>
    </div>
  );
}
