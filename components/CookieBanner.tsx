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

  const dismiss = (value: 'accepted' | 'rejected') => {
    localStorage.setItem('cookie-consent', value);
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
          role="dialog"
          aria-label="Banner cookie"
          aria-live="polite"
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'var(--color-surface)',
            borderTop: '1px solid var(--color-border)',
            zIndex: 9999,
          }}
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
              position: 'relative',
            }}
          >
            {/* X button */}
            <button
              onClick={() => dismiss('rejected')}
              aria-label="Chiudi banner cookie"
              style={{
                position: 'absolute',
                top: '0.75rem',
                right: '1rem',
                background: 'transparent',
                border: 'none',
                color: 'var(--color-text-muted)',
                fontSize: '1rem',
                lineHeight: 1,
                cursor: 'pointer',
                padding: '0.25rem',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = 'var(--color-text)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = 'var(--color-text-muted)')}
            >
              ✕
            </button>

            <p
              style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: '0.9rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
                flex: 1,
                minWidth: '200px',
                paddingRight: '1.5rem',
              }}
            >
              Utilizziamo solo cookie tecnici necessari al funzionamento del sito. Nessun cookie di profilazione o tracciamento. Puoi continuare a navigare liberamente.{' '}
              <Link href="/cookie-policy" style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}>
                Cookie Policy
              </Link>
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0 }}>
              <button
                onClick={() => dismiss('rejected')}
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
                onClick={() => dismiss('accepted')}
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
