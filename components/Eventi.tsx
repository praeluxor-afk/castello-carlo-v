'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const eventTypes = [
  'Mostre d\'arte e fotografia',
  'Concerti e spettacoli',
  'Conferenze e convegni',
  'Presentazioni editoriali',
  'Eventi promozionali',
];

export default function Eventi() {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });
  const contentInView = useInView(contentRef, { once: true, margin: '-60px' });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#contatti')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="eventi" style={{ padding: '6rem 1.5rem', background: 'var(--color-dark)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

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
            Eventi
          </h2>
          <p style={{ fontFamily: 'var(--font-garamond)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
            Cultura, Arte e Storia al Castello
          </p>
        </motion.div>

        {/* Two column layout */}
        <div
          ref={contentRef}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="eventi-grid"
        >
          <style>{`
            @media (max-width: 768px) {
              .eventi-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
            }
          `}</style>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="img-hover-zoom"
            style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', border: '1px solid var(--color-border)' }}
          >
            <Image
              src="/images/evento.webp"
              alt="Evento al Castello di Carlo V Crotone"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '40%',
                background: 'linear-gradient(to top, rgba(10,8,6,0.8), transparent)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                fontFamily: 'var(--font-cinzel)',
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
              }}
            >
              Su Prenotazione
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                lineHeight: 1.9,
                color: 'var(--color-text)',
                opacity: 0.9,
                marginBottom: '2rem',
              }}
            >
              Organizziamo eventi culturali, promozionali e informativi su richiesta e previa prenotazione presso il prestigioso Castello di Carlo V a Crotone. Con la sua architettura storica e la posizione panoramica, il castello offre un&apos;ambientazione unica per:
            </p>

            {/* Event types */}
            <ul style={{ marginBottom: '2.5rem', listStyle: 'none', padding: 0 }}>
              {eventTypes.map((type, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 15 }}
                  animate={contentInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.6rem 0',
                    borderBottom: '1px solid var(--color-border)',
                    fontFamily: 'var(--font-garamond)',
                    fontSize: '1rem',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  <span style={{ color: 'var(--color-gold)', fontSize: '1.1rem', flexShrink: 0 }}>◆</span>
                  {type}
                </motion.li>
              ))}
            </ul>

            <p
              style={{
                fontFamily: 'var(--font-garamond)',
                fontStyle: 'italic',
                fontSize: '0.95rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}
            >
              Collaboriamo con professionisti qualificati per creare un&apos;esperienza personalizzata.
            </p>

            <a
              href="#contatti"
              onClick={handleClick}
              className="btn-gold"
              style={{ cursor: 'pointer' }}
            >
              Richiedi Informazioni
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
