'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function useCountUp(target: number, isActive: boolean, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    let startTime: number | null = null;
    const startVal = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(startVal + (target - startVal) * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isActive, target, duration]);

  return count;
}

function StatItem({ value, label, prefix = '', suffix = '' }: {
  value: number | string;
  label: string;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const numericValue = typeof value === 'number' ? value : 0;
  const count = useCountUp(numericValue, isInView && typeof value === 'number');

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div
        style={{
          fontFamily: 'var(--font-cinzel)',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          color: 'var(--color-gold)',
          fontWeight: 700,
          lineHeight: 1,
          marginBottom: '0.5rem',
        }}
      >
        {prefix}
        {typeof value === 'number' ? count : value}
        {suffix}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-montserrat)',
          fontSize: '0.6rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--color-text-muted)',
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      style={{
        background: 'var(--color-dark-2)',
        padding: '5rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background element */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,58,15,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div ref={ref} style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <svg width="24" height="20" viewBox="0 0 24 20" style={{ marginBottom: '1.5rem', margin: '0 auto 1.5rem', display: 'block' }}>
            <path d="M0 20V12C0 8.67 0.9 5.9 2.7 3.7 4.5 1.57 6.77 0.33 9.5 0L10.5 2.3C8.97 2.77 7.63 3.67 6.5 5 5.43 6.33 4.9 7.8 4.9 9.4h4.6V20H0zm13.5 0V12c0-3.33.9-6.1 2.7-8.3C18 1.57 20.27.33 23 0L24 2.3c-1.53.47-2.87 1.37-4 2.7-1.07 1.33-1.6 2.8-1.6 4.4h4.6V20h-9.5z" fill="rgba(196,162,101,0.3)"/>
          </svg>

          <blockquote
            style={{
              fontFamily: 'var(--font-garamond)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.45rem)',
              color: 'var(--color-text)',
              lineHeight: 1.8,
              opacity: 0.9,
              maxWidth: '700px',
              margin: '0 auto 2rem',
            }}
          >
            Benvenuti al Castello di Carlo V a Crotone, gestito con passione dall&apos;Associazione Multitracce in collaborazione con il Comune di Crotone — un patrimonio di storia e cultura aperto al mondo.
          </blockquote>

          {/* Ornament */}
          <div className="ornament-divider" style={{ margin: '0 auto 1.5rem' }}>
            <svg width="12" height="12" viewBox="0 0 12 12">
              <rect x="1" y="1" width="10" height="10" fill="none" stroke="var(--color-gold)" strokeWidth="0.8" transform="rotate(45 6 6)" />
            </svg>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '3rem',
            padding: '3rem 2rem',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
          }}
        >
          <StatItem value="IX" label="Secolo di Fondazione" />
          <StatItem value={2} label="Euro — Ingresso" prefix="€" />
          <StatItem value={5} label="Giorni a Settimana" />
        </motion.div>
      </div>
    </section>
  );
}
