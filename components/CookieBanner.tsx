'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
          className="cookie-banner"
          role="dialog"
          aria-label="Banner cookie"
          aria-live="polite"
        >
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              flexWrap: 'wrap',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: '0.9rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
                flex: 1,
                minWidth: '200px',
              }}
            >
              Questo sito utilizza cookie tecnici necessari al funzionamento. Per maggiori informazioni consulta la nostra{' '}
              <Link href="/cookie" style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}>
                Cookie Policy
              </Link>{' '}
              e la{' '}
              <Link href="/privacy" style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}>
                Privacy Policy
              </Link>
              .
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0 }}>
              <button
                onClick={handleReject}
                style={{
                  border: '1px solid var(--color-border)',
                  background: 'transparent',
                  color: 'var(--color-text-muted)',
                  fontFamily: 'var(--font-montserrat)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  padding: '0.6rem 1.25rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-text-muted)';
                  (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-text)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-border)';
                  (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-text-muted)';
                }}
              >
                Rifiuta
              </button>

              <button
                onClick={handleAccept}
                style={{
                  background: 'var(--color-gold)',
                  color: 'var(--color-dark)',
                  border: 'none',
                  fontFamily: 'var(--font-montserrat)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  padding: '0.6rem 1.25rem',
                  cursor: 'pointer',
                  fontWeight: 600,
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = 'var(--color-gold-light)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = 'var(--color-gold)')}
              >
                Accetta
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
