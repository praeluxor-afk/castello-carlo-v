'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from 'react-icons/fi';

const images = [
  { src: '/images/ingresso-castello.webp', alt: 'Ingresso del Castello di Carlo V a Crotone con porta medievale' },
  { src: '/images/ponte-di-pietra-scaled.webp', alt: 'Ponte di pietra di accesso al Castello Carlo V Crotone' },
  { src: '/images/ponte-di-pietra-vista-ingresso.webp', alt: "Vista del ponte di pietra verso l'ingresso del Castello Carlo V Crotone" },
  { src: '/images/ponte-pietra-2.webp', alt: 'Ponte di pietra del Castello di Carlo V Crotone, vista laterale' },
  { src: '/images/torre-comandante.webp', alt: 'Torre Comandante del Castello Carlo V di Crotone - XV secolo' },
  { src: '/images/torre-aiutante.webp', alt: 'Torre Aiutante del Castello di Carlo V Crotone' },
  { src: '/images/cortina.webp', alt: 'Cortine murarie del Castello Carlo V Crotone - XVI secolo' },
  { src: '/images/cortina-bastione.webp', alt: 'Bastioni e cortine del Castello di Carlo V Crotone' },
  { src: '/images/foto-torre-comandante.webp', alt: 'Torre Comandante del Castello Carlo V Crotone, vista frontale' },
  { src: '/images/IMG_20221025_091648-scaled.webp', alt: 'Castello di Carlo V Crotone' },
  { src: '/images/IMG_20221025_091803-scaled.webp', alt: 'Interno del Castello di Carlo V' },
  { src: '/images/IMG_20221101_111412-scaled.webp', alt: 'Castello di Carlo V, novembre 2022' },
  { src: '/images/IMG_20221217_190249-scaled.webp', alt: 'Castello di Carlo V, dicembre 2022' },
  { src: '/images/IMG_20230103_092447-scaled.webp', alt: 'Castello di Carlo V, gennaio 2023' },
];

interface GalleryImage { src: string; alt: string; }

function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Visualizzatore immagini"
    >
      {/* Close */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          color: 'var(--color-gold)',
          background: 'rgba(10,8,6,0.6)',
          border: '1px solid var(--color-border)',
          borderRadius: '50%',
          width: '44px',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10,
          transition: 'background 0.2s',
        }}
        aria-label="Chiudi lightbox"
      >
        <FiX size={20} />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        style={{
          position: 'absolute',
          left: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'var(--color-gold)',
          background: 'rgba(10,8,6,0.6)',
          border: '1px solid var(--color-border)',
          borderRadius: '50%',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10,
        }}
        aria-label="Immagine precedente"
      >
        <FiChevronLeft size={24} />
      </button>

      {/* Image */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '90vw',
          maxHeight: '85vh',
          width: '100%',
          aspectRatio: '4/3',
        }}
      >
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </motion.div>

      {/* Caption */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--font-montserrat)',
          fontSize: '0.6rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--color-text-muted)',
          textAlign: 'center',
        }}
      >
        {currentIndex + 1} / {images.length} — {images[currentIndex].alt}
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        style={{
          position: 'absolute',
          right: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'var(--color-gold)',
          background: 'rgba(10,8,6,0.6)',
          border: '1px solid var(--color-border)',
          borderRadius: '50%',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10,
        }}
        aria-label="Immagine successiva"
      >
        <FiChevronRight size={24} />
      </button>
    </motion.div>
  );
}

function GalleryItem({ image, index, onClick }: {
  image: { src: string; alt: string };
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 4) * 0.06 }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="gallery-item"
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        border: '1px solid var(--color-border)',
        padding: 0,
        background: 'none',
        display: 'block',
        width: '100%',
        transition: 'border-color 0.3s ease',
        borderColor: hovered ? 'var(--color-gold)' : 'var(--color-border)',
      }}
      aria-label={`Apri immagine: ${image.alt}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQAB/9k="
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          transition: 'transform 0.6s ease',
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
        }}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: hovered ? 'rgba(10,8,6,0.45)' : 'rgba(10,8,6,0)',
          transition: 'background 0.4s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FiZoomIn
          size={28}
          style={{
            color: 'var(--color-gold)',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        />
      </div>
    </motion.button>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  }, []);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
  }, []);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % images.length));
  }, []);

  return (
    <>
      <section id="gallery" className="gallery-section" style={{ background: 'var(--color-dark)' }}>
        <style>{`
          .gallery-section { padding: 6rem 1.5rem; }
          .gallery-header { }
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 0.75rem;
          }
          .gallery-item { height: 280px; }
          @media (max-width: 1024px) {
            .gallery-grid { grid-template-columns: repeat(3, 1fr); }
            .gallery-item { height: 220px; }
          }
          @media (max-width: 640px) {
            .gallery-section { padding: 4rem 0; }
            .gallery-header { padding: 0 1.5rem; }
            .gallery-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 3px;
            }
            .gallery-item { height: 180px; }
          }
        `}</style>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Header */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="gallery-header"
            style={{ textAlign: 'center', marginBottom: '3.5rem' }}
          >
            <div className="ornament-divider" style={{ margin: '0 auto 1.5rem' }}>
              <svg width="12" height="12" viewBox="0 0 12 12">
                <rect x="1" y="1" width="10" height="10" fill="none" stroke="var(--color-gold)" strokeWidth="0.8" transform="rotate(45 6 6)" />
              </svg>
            </div>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', marginBottom: '0.75rem' }}>
              Galleria
            </h2>
            <p style={{ fontFamily: 'var(--font-garamond)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
              Immagini del Castello
            </p>
          </motion.div>

          {/* Responsive grid */}
          <div className="gallery-grid" style={{ display: 'grid' }}>
            {images.map((img, i) => (
              <GalleryItem
                key={i}
                image={img}
                index={i}
                onClick={() => openLightbox(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </>
  );
}
