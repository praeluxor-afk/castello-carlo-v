'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

interface StoryBlockProps {
  image: string;
  alt: string;
  caption: string;
  text: string;
  reverse?: boolean;
  delay?: number;
}

function StoryBlock({ image, alt, caption, text, reverse = false, delay = 0 }: StoryBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={sectionVariants}
      transition={{ delay }}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'center',
        marginBottom: '5rem',
      }}
      className="story-block"
    >
      {/* Image */}
      <div
        style={{ order: reverse ? 1 : 0 }}
        className="story-image"
      >
        <div
          className="img-hover-zoom"
          style={{
            position: 'relative',
            aspectRatio: '4/3',
            overflow: 'hidden',
            border: '1px solid var(--color-border)',
          }}
        >
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(10,8,6,0)',
              transition: 'background 0.4s ease',
              display: 'flex',
              alignItems: 'flex-end',
            }}
            className="img-caption-overlay"
          >
            <span
              style={{
                padding: '0.75rem 1rem',
                fontFamily: 'var(--font-montserrat)',
                fontSize: '0.6rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
                opacity: 0,
                transition: 'opacity 0.4s ease',
                background: 'rgba(10,8,6,0.7)',
                width: '100%',
              }}
              className="img-caption-text"
            >
              {caption}
            </span>
          </div>
        </div>
      </div>

      {/* Text */}
      <div style={{ order: reverse ? 0 : 1 }} className="story-text">
        <p
          style={{
            fontFamily: 'var(--font-garamond)',
            fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
            lineHeight: 1.9,
            color: 'var(--color-text)',
            opacity: 0.88,
          }}
        >
          {text}
        </p>
      </div>
    </motion.div>
  );
}

export default function Storia() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="storia" style={{ padding: '6rem 1.5rem', background: 'var(--color-dark)', position: 'relative' }}>
      <style>{`
        @media (max-width: 768px) {
          .story-block { grid-template-columns: 1fr !important; }
          .story-image { order: 0 !important; }
          .story-text { order: 1 !important; }
        }
        .img-hover-zoom:hover .img-caption-overlay { background: rgba(10,8,6,0.4) !important; }
        .img-hover-zoom:hover .img-caption-text { opacity: 1 !important; }
      `}</style>

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <div className="ornament-divider" style={{ margin: '0 auto 1.5rem' }}>
            <svg width="12" height="12" viewBox="0 0 12 12">
              <rect x="1" y="1" width="10" height="10" fill="none" stroke="var(--color-gold)" strokeWidth="0.8" transform="rotate(45 6 6)" />
            </svg>
          </div>

          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: '0.75rem' }}>
            Storia
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-garamond)',
              fontStyle: 'italic',
              fontSize: '1.15rem',
              color: 'var(--color-text-muted)',
            }}
          >
            Il Castello attraverso i secoli
          </p>
        </motion.div>

        {/* Story blocks */}
        <StoryBlock
          image="/images/torre-comandante.webp"
          alt="Torre Comandante del Castello di Carlo V Crotone"
          caption="Torre Comandante — XV Secolo"
          text="Il Castello di Carlo V di Crotone è un'antica fortezza che attira turisti da tutto il mondo. Costruito nel IX secolo dai Bizantini per proteggere la città dagli attacchi dei Saraceni, il castello ha subito diverse modifiche nel corso dei secoli, riflettendo le influenze di diverse dominazioni."
          delay={0.1}
        />

        <StoryBlock
          image="/images/ponte-di-pietra-scaled.webp"
          alt="Ponte di pietra del Castello di Carlo V Crotone"
          caption="Ponte di Pietra — Accesso Storico"
          text="La struttura originaria, conosciuta come Kastron Bizantino, si estendeva dalla posizione attuale del Museo Archeologico Nazionale fino all'attuale Castello. È situato sull'acropoli dell'antica città greca di Kroton, come testimoniato da un muro perimetrale ancora presente nel castello."
          reverse
          delay={0.1}
        />

        <StoryBlock
          image="/images/cortina.webp"
          alt="Cortina muraria del Castello di Carlo V Crotone"
          caption="Cortine e Bastioni — XVI Secolo"
          text="Nel XVI secolo, durante il periodo dell'imperatore Carlo V, Crotone fu inserita in un grande progetto di fortificazione costiera. L'architetto militare Gian Giacomo dell'Acaia progettò le possenti mura e i bastioni che ancora oggi caratterizzano la silhouette del castello sul promontorio crotonese."
          delay={0.1}
        />
      </div>
    </section>
  );
}
