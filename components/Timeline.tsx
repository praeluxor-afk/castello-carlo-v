'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const events = [
  {
    period: 'IX Secolo',
    title: 'Fondazione Bizantina',
    text: 'Kastron Bizantino — difesa dai Saraceni. Le prime mura sorgono sul promontorio di Kroton.',
  },
  {
    period: 'XII Secolo',
    title: 'Regno Normanno',
    text: 'Prima menzione nelle cronache medievali. I Normanni ampliano la struttura difensiva.',
  },
  {
    period: 'XV Secolo',
    title: 'Era Aragonese',
    text: 'Costruzione della Torre Comandante e della Torre Aiutante. Il castello assume la forma che conosciamo.',
  },
  {
    period: 'XVI Secolo',
    title: 'Imperatore Carlo V',
    text: "Progetto di Gian Giacomo dell'Acaia. Nasce il Bastione di San Giacomo e quello di Santa Caterina.",
  },
  {
    period: 'Oggi',
    title: 'Patrimonio Vivo',
    text: "Aperto al pubblico e gestito dall'Associazione Multitracce in collaborazione con il Comune di Crotone.",
  },
];

function TimelineCard({ event, index }: { event: typeof events[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: '1 1 0',
        minWidth: '140px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Dot */}
      <div
        style={{
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          background: 'var(--color-gold)',
          border: '3px solid var(--color-dark)',
          boxShadow: '0 0 0 2px var(--color-gold)',
          marginBottom: '1.25rem',
          flexShrink: 0,
          position: 'relative',
          zIndex: 2,
        }}
      />

      {/* Card */}
      <div
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          padding: '1.25rem',
          textAlign: 'center',
          transition: 'border-color 0.3s ease',
          cursor: 'default',
          width: '100%',
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-gold)')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-border)')}
      >
        <div
          style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: '0.85rem',
            color: 'var(--color-gold)',
            fontWeight: 600,
            marginBottom: '0.4rem',
          }}
        >
          {event.period}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: '0.75rem',
            color: 'var(--color-text)',
            marginBottom: '0.75rem',
            letterSpacing: '0.05em',
          }}
        >
          {event.title}
        </div>
        <p
          style={{
            fontFamily: 'var(--font-garamond)',
            fontSize: '0.85rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.6,
          }}
        >
          {event.text}
        </p>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });
  const lineInView = useInView(sectionRef, { once: true, margin: '-50px' });

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'var(--color-surface)',
        padding: '6rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
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

          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', marginBottom: '0.75rem' }}>
            Cronologia
          </h2>
          <p style={{ fontFamily: 'var(--font-garamond)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
            Undici secoli di storia in cinque tappe
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="timeline-desktop" style={{ display: 'flex', gap: '1px', position: 'relative' }}>
          {/* Animated line */}
          <div
            style={{
              position: 'absolute',
              top: '8px',
              left: '8px',
              right: '8px',
              height: '1px',
              background: 'rgba(196,162,101,0.2)',
              zIndex: 0,
            }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={lineInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
              style={{
                height: '100%',
                background: 'var(--color-gold)',
                transformOrigin: 'left',
              }}
            />
          </div>

          {events.map((event, i) => (
            <TimelineCard key={i} event={event} index={i} />
          ))}
        </div>

        {/* Mobile timeline (vertical) */}
        <style>{`
          @media (max-width: 768px) {
            .timeline-desktop { display: none !important; }
            .timeline-mobile { display: flex !important; }
          }
          @media (min-width: 769px) {
            .timeline-mobile { display: none !important; }
          }
        `}</style>

        <div className="timeline-mobile" style={{ display: 'none', flexDirection: 'column', gap: '0', paddingLeft: '2rem' }}>
          {/* Vertical line */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                left: '-1.5rem',
                top: '8px',
                bottom: '8px',
                width: '1px',
                background: 'rgba(196,162,101,0.2)',
              }}
            />
            <motion.div
              initial={{ scaleY: 0 }}
              animate={lineInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
              style={{
                position: 'absolute',
                left: '-1.5rem',
                top: '8px',
                bottom: '8px',
                width: '1px',
                background: 'var(--color-gold)',
                transformOrigin: 'top',
              }}
            />

            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={lineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15 + 0.5, duration: 0.6 }}
                style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', marginBottom: '2rem', position: 'relative' }}
              >
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: 'var(--color-gold)',
                    flexShrink: 0,
                    marginTop: '0.25rem',
                    position: 'absolute',
                    left: '-1.875rem',
                  }}
                />
                <div
                  style={{
                    background: 'var(--color-surface-2)',
                    border: '1px solid var(--color-border)',
                    padding: '1rem 1.25rem',
                    flex: 1,
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.8rem', color: 'var(--color-gold)', marginBottom: '0.25rem' }}>
                    {event.period}
                  </div>
                  <div style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.75rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                    {event.title}
                  </div>
                  <p style={{ fontFamily: 'var(--font-garamond)', fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    {event.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
