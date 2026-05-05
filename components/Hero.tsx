'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [posterReady, setPosterReady] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const target = document.querySelector('#storia');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Black placeholder — hidden as soon as poster or video is ready */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#0A0806',
          zIndex: 0,
          opacity: posterReady || videoReady ? 0 : 1,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Background video — poster visible while video buffers */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/castle-poster.jpg"
        onLoadStart={() => setPosterReady(true)}
        onCanPlay={() => setVideoReady(true)}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: posterReady || videoReady ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <source src="/videos/castleIntro-1.mp4" type="video/mp4" />
      </video>

      {/* Overlay gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.7) 100%)',
          zIndex: 1,
        }}
      />

      {/* SEO h1 — visually hidden */}
      <h1 className="sr-only">Castello di Carlo V Crotone — Visita, Tour Guidati e Storia</h1>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '0 1.5rem',
          maxWidth: '800px',
        }}
      >
        {/* Ornament SVG */}
        <motion.div variants={itemVariants} style={{ marginBottom: '1.5rem' }}>
          <svg width="200" height="20" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 auto', display: 'block' }}>
            <line x1="0" y1="10" x2="85" y2="10" stroke="#C4A265" strokeWidth="0.8" />
            <rect x="88" y="6" width="8" height="8" fill="none" stroke="#C4A265" strokeWidth="0.8" transform="rotate(45 92 10)" />
            <line x1="99" y1="10" x2="200" y2="10" stroke="#C4A265" strokeWidth="0.8" />
          </svg>
        </motion.div>

        {/* Main title */}
        <motion.h1
          variants={itemVariants}
          style={{
            fontFamily: 'var(--font-cinzel-decorative)',
            fontSize: 'clamp(2rem, 6vw, 4.5rem)',
            color: 'var(--color-gold)',
            letterSpacing: '0.05em',
            lineHeight: 1.1,
            marginBottom: '1rem',
            textShadow: '0 2px 30px rgba(196,162,101,0.3)',
          }}
        >
          Castello di Carlo V
        </motion.h1>

        {/* Ornamental line */}
        <motion.div variants={itemVariants} style={{ marginBottom: '1rem' }}>
          <svg width="300" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 auto', display: 'block' }}>
            <line x1="0" y1="6" x2="110" y2="6" stroke="#C4A265" strokeWidth="0.5" />
            <circle cx="150" cy="6" r="4" fill="none" stroke="#C4A265" strokeWidth="0.8" />
            <circle cx="150" cy="6" r="1.5" fill="#C4A265" />
            <line x1="190" y1="6" x2="300" y2="6" stroke="#C4A265" strokeWidth="0.5" />
          </svg>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          style={{
            fontFamily: 'var(--font-montserrat)',
            fontSize: '0.65rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
            marginBottom: '2.5rem',
          }}
        >
          Crotone · Calabria · Italia
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          style={{
            fontFamily: 'var(--font-garamond)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            color: 'var(--color-text)',
            lineHeight: 1.6,
            marginBottom: '3rem',
            opacity: 0.9,
          }}
        >
          Dal IX Secolo Custode
          <br />
          della Storia e della Memoria
        </motion.p>

        {/* CTA */}
        <motion.div variants={itemVariants}>
          <button
            onClick={handleScroll}
            className="btn-gold"
            style={{ cursor: 'pointer', background: 'transparent' }}
          >
            Scopri il Castello
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      {!scrolled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            zIndex: 2,
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-montserrat)',
              fontSize: '0.55rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              marginBottom: '0.5rem',
            }}
          >
            Scorri
          </p>
          <div className="scroll-indicator" style={{ color: 'var(--color-gold)' }}>
            <FiChevronDown size={20} />
          </div>
        </motion.div>
      )}
    </section>
  );
}
