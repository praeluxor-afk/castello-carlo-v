'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { FiPlay } from 'react-icons/fi';

export default function Video() {
  const [playing, setPlaying] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });
  const videoRef = useRef<HTMLDivElement>(null);
  const videoInView = useInView(videoRef, { once: true, margin: '-80px' });

  const VIDEO_ID = 'XhT8gS8Vi-M';

  return (
    <section id="video" style={{ padding: '6rem 1.5rem', background: 'var(--color-dark-2)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <div className="ornament-divider" style={{ margin: '0 auto 1.5rem' }}>
            <svg width="12" height="12" viewBox="0 0 12 12">
              <rect x="1" y="1" width="10" height="10" fill="none" stroke="var(--color-gold)" strokeWidth="0.8" transform="rotate(45 6 6)" />
            </svg>
          </div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', marginBottom: '0.75rem' }}>
            Tour Panoramico
          </h2>
          <p style={{ fontFamily: 'var(--font-garamond)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
            Esplora il Castello in Video
          </p>
        </motion.div>

        {/* Video wrapper */}
        <motion.div
          ref={videoRef}
          initial={{ opacity: 0, y: 30 }}
          animate={videoInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            position: 'relative',
            border: '1px solid var(--color-gold)',
            padding: '4px',
          }}
        >
          {/* Inner border */}
          <div
            style={{
              position: 'absolute',
              inset: '8px',
              border: '1px solid rgba(196,162,101,0.25)',
              pointerEvents: 'none',
              zIndex: 2,
            }}
          />

          <div
            style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
            }}
          >
            {!playing ? (
              /* Thumbnail with play button */
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  cursor: 'pointer',
                }}
                onClick={() => setPlaying(true)}
                role="button"
                tabIndex={0}
                aria-label="Riproduci video del Castello di Carlo V"
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setPlaying(true); }}
              >
                {/* YouTube thumbnail */}
                <Image
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt="Anteprima video tour Castello di Carlo V Crotone"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1000px) 100vw, 1000px"
                  unoptimized
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(10,8,6,0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.3s ease',
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = 'rgba(10,8,6,0.3)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = 'rgba(10,8,6,0.45)')}
                >
                  <div
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '50%',
                      background: 'rgba(196,162,101,0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.1)';
                      (e.currentTarget as HTMLDivElement).style.background = 'var(--color-gold)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                      (e.currentTarget as HTMLDivElement).style.background = 'rgba(196,162,101,0.9)';
                    }}
                  >
                    <FiPlay size={28} style={{ color: 'var(--color-dark)', marginLeft: '3px' }} />
                  </div>
                </div>

                {/* Label */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1.5rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontFamily: 'var(--font-montserrat)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--color-gold)',
                  }}
                >
                  Guarda il tour
                </div>
              </div>
            ) : (
              <iframe
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                title="Tour panoramico Castello di Carlo V Crotone"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
