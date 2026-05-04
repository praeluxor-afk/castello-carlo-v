'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const elements = [
  {
    title: 'Torre Comandante',
    image: '/images/torre-comandante.webp',
    alt: 'Torre Comandante del Castello di Carlo V Crotone',
    text: "La Torre Comandante è una delle torri aragonesi del XV secolo. Imponente struttura cilindrica che domina la città e il porto di Crotone, con una vista panoramica sul Mar Ionio.",
  },
  {
    title: 'Torre Aiutante',
    image: '/images/torre-aiutante.webp',
    alt: 'Torre Aiutante del Castello di Carlo V Crotone',
    text: "La Torre Aiutante, anch'essa del periodo aragonese, costituisce insieme alla Torre Comandante il sistema difensivo originale del castello. Le due torri rappresentano la difesa piombante medievale.",
  },
  {
    title: 'Ponte di Pietra',
    image: '/images/ponte-di-pietra-scaled.webp',
    alt: 'Ponte di pietra del Castello di Carlo V Crotone',
    text: "Il suggestivo ponte di pietra è l'accesso principale al castello. Attraversandolo si percepisce immediatamente la stratificazione storica del luogo, con viste panoramiche sul fossato e sui giardini sottostanti.",
  },
  {
    title: 'Bastioni e Cortine',
    image: '/images/cortina-bastione.webp',
    alt: 'Bastioni e cortine del Castello di Carlo V Crotone',
    text: "I bastioni e le cortine murarie, progettati nel XVI secolo da Gian Giacomo dell'Acaia per Carlo V, rappresentano la transizione dall'architettura militare medievale a quella rinascimentale, con la difesa radente che sostituisce quella piombante.",
  },
];

function CastelloCard({ element, index }: { element: typeof elements[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 2) * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="museum-card"
      style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
    >
      {/* Image */}
      <div className="img-hover-zoom" style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
        <Image
          src={element.image}
          alt={element.alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '60%',
            background: 'linear-gradient(to top, rgba(10,8,6,0.7) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3
          style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: '1rem',
            color: 'var(--color-gold)',
            letterSpacing: '0.08em',
            marginBottom: '0.75rem',
            fontWeight: 600,
          }}
        >
          {element.title}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-garamond)',
            fontSize: '0.95rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.75,
            flex: 1,
          }}
        >
          {element.text}
        </p>
      </div>
    </motion.article>
  );
}

export default function Castello() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="castello" style={{ padding: '6rem 1.5rem', background: 'var(--color-dark-2)' }}>
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
            Il Castello
          </h2>
          <p style={{ fontFamily: 'var(--font-garamond)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
            La Struttura Architettonica
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {elements.map((el, i) => (
            <CastelloCard key={i} element={el} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
