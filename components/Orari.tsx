'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiClock, FiAlertCircle, FiTag } from 'react-icons/fi';

const schedule = [
  { day: 'Martedì', hours: '09:30 – 12:30', open: true },
  { day: 'Mercoledì', hours: 'Chiuso', open: false },
  { day: 'Giovedì', hours: '09:30 – 12:30', open: true },
  { day: 'Venerdì', hours: '09:30 – 12:30', open: true },
  { day: 'Sabato', hours: '09:30 – 12:30', open: true },
  { day: 'Domenica', hours: '09:30 – 12:30 / 17:00 – 20:00', open: true },
  { day: 'Lunedì', hours: 'Chiuso', open: false },
];

export default function Orari() {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });
  const contentInView = useInView(contentRef, { once: true, margin: '-60px' });

  const handleBook = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#contatti')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="orari" style={{ padding: '6rem 1.5rem', background: 'var(--color-dark-2)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="ornament-divider" style={{ margin: '0 auto 1.5rem' }}>
            <svg width="12" height="12" viewBox="0 0 12 12">
              <rect x="1" y="1" width="10" height="10" fill="none" stroke="var(--color-gold)" strokeWidth="0.8" transform="rotate(45 6 6)" />
            </svg>
          </div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', marginBottom: '0.75rem' }}>
            Orari e Biglietti
          </h2>
          <p style={{ fontFamily: 'var(--font-garamond)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
            Pianifica la Tua Visita
          </p>
        </motion.div>

        {/* Cards grid */}
        <div
          ref={contentRef}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}
          className="orari-grid"
        >
          <style>{`
            @media (max-width: 640px) {
              .orari-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>

          {/* Orari card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-gold)',
              padding: '2.5rem',
            }}
          >
            {/* Inner border */}
            <div style={{ position: 'relative' }}>
              {/* Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                <FiClock size={20} style={{ color: 'var(--color-gold)' }} />
                <h3
                  style={{
                    fontFamily: 'var(--font-cinzel)',
                    fontSize: '0.85rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--color-gold)',
                  }}
                >
                  Orari di Apertura
                </h3>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'var(--color-border)', marginBottom: '1.5rem' }} />

              {/* Schedule rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {schedule.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.6rem 0',
                      borderBottom: i < schedule.length - 1 ? '1px solid rgba(196,162,101,0.1)' : 'none',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-montserrat)',
                        fontSize: '0.7rem',
                        color: item.open ? 'var(--color-text)' : 'var(--color-text-muted)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {item.day}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-montserrat)',
                        fontSize: '0.68rem',
                        color: item.open ? 'var(--color-gold)' : '#6b5b4e',
                        letterSpacing: '0.05em',
                        fontStyle: item.open ? 'normal' : 'italic',
                        textAlign: 'right',
                      }}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'var(--color-border)', margin: '1.5rem 0' }} />

              {/* Warning */}
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <FiAlertCircle size={16} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
                <p
                  style={{
                    fontFamily: 'var(--font-garamond)',
                    fontStyle: 'italic',
                    fontSize: '0.85rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.6,
                  }}
                >
                  Gli orari potrebbero variare in base alla disponibilità dei volontari. Si consiglia di contattare sempre in anticipo.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Biglietti card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-gold)',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Title */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <FiTag size={20} style={{ color: 'var(--color-gold)' }} />
              <h3
                style={{
                  fontFamily: 'var(--font-cinzel)',
                  fontSize: '0.85rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                }}
              >
                Ingresso
              </h3>
            </div>

            <div style={{ height: '1px', background: 'var(--color-border)', marginBottom: '2rem' }} />

            {/* Price */}
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div
                style={{
                  fontFamily: 'var(--font-cinzel)',
                  fontSize: 'clamp(3.5rem, 8vw, 5rem)',
                  color: 'var(--color-gold)',
                  lineHeight: 1,
                  fontWeight: 700,
                  marginBottom: '0.25rem',
                }}
              >
                €2
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-montserrat)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-muted)',
                  marginBottom: '2rem',
                }}
              >
                a persona
              </div>

              <div style={{ height: '1px', background: 'var(--color-border)', marginBottom: '1.5rem' }} />

              <p
                style={{
                  fontFamily: 'var(--font-garamond)',
                  fontSize: '1rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.7,
                  marginBottom: '0.5rem',
                }}
              >
                Ingresso <strong style={{ color: 'var(--color-text)' }}>gratuito</strong> per bambini sotto i 6 anni
              </p>

              <div style={{ height: '1px', background: 'var(--color-border)', margin: '1.5rem 0' }} />

              <p
                style={{
                  fontFamily: 'var(--font-garamond)',
                  fontStyle: 'italic',
                  fontSize: '0.9rem',
                  color: 'var(--color-text-muted)',
                  marginBottom: '2rem',
                }}
              >
                Tour guidati su prenotazione
              </p>

              <a
                href="#contatti"
                onClick={handleBook}
                className="btn-gold-filled"
                style={{ cursor: 'pointer', display: 'inline-block' }}
              >
                Prenota Ora
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
