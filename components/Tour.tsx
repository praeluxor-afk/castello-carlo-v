'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { FiUsers, FiGlobe, FiCalendar, FiHeart } from 'react-icons/fi';

const features = [
  {
    icon: <FiUsers size={20} />,
    title: 'Tour per scuole',
    desc: 'Adattati a ogni fascia d\'età, per avvicinare i giovani alla storia locale',
  },
  {
    icon: <FiGlobe size={20} />,
    title: 'Tour per turisti',
    desc: 'In italiano e su richiesta in inglese, per valorizzare il turismo internazionale',
  },
  {
    icon: <FiCalendar size={20} />,
    title: 'Su prenotazione',
    desc: 'Garantisce un\'esperienza sicura, coinvolgente e personalizzata',
  },
  {
    icon: <FiHeart size={20} />,
    title: 'Volontari dedicati',
    desc: 'Accompagnatori appassionati di storia e cultura locale crotonese',
  },
];

export default function Tour() {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });
  const contentInView = useInView(contentRef, { once: true, margin: '-60px' });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#contatti')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="tour" style={{ padding: '6rem 1.5rem', background: 'var(--color-surface)' }}>
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
            Tour Guidati
          </h2>
          <p style={{ fontFamily: 'var(--font-garamond)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
            Un&apos;Esperienza Personalizzata
          </p>
        </motion.div>

        {/* Two column layout — reversed */}
        <div
          ref={contentRef}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="tour-grid"
        >
          <style>{`
            @media (max-width: 768px) {
              .tour-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
              .tour-image-col { order: -1 !important; }
            }
          `}</style>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                lineHeight: 1.9,
                color: 'var(--color-text)',
                opacity: 0.9,
                marginBottom: '2.5rem',
              }}
            >
              I nostri volontari dedicati accompagneranno i visitatori in un&apos;affascinante esplorazione delle mura, delle torri e delle sale espositive del castello. I tour sono adattati alle esigenze specifiche di scuole e turisti.
            </p>

            {/* Features */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={contentInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start',
                    padding: '1rem',
                    background: 'var(--color-surface-2)',
                    border: '1px solid var(--color-border)',
                    transition: 'border-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-gold)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-border)')}
                >
                  <div style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }}>{f.icon}</div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-cinzel)',
                        fontSize: '0.8rem',
                        color: 'var(--color-text)',
                        marginBottom: '0.25rem',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {f.title}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-garamond)',
                        fontSize: '0.9rem',
                        color: 'var(--color-text-muted)',
                        lineHeight: 1.5,
                      }}
                    >
                      {f.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="#contatti"
              onClick={handleClick}
              className="btn-gold"
              style={{ cursor: 'pointer' }}
            >
              Prenota un Tour
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            className="tour-image-col img-hover-zoom"
            initial={{ opacity: 0, x: 30 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', border: '1px solid var(--color-border)' }}
          >
            <Image
              src="/images/tour.webp"
              alt="Tour guidato al Castello di Carlo V Crotone"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(10,8,6,0.2) 0%, rgba(10,8,6,0.4) 100%)',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
