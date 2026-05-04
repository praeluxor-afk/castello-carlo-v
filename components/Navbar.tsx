'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiPhone, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Storia', href: '#storia' },
  { label: 'Il Castello', href: '#castello' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Video', href: '#video' },
  { label: 'Eventi', href: '#eventi' },
  { label: 'Tour', href: '#tour' },
  { label: 'Orari', href: '#orari' },
  { label: 'Contatti', href: '#contatti' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        role="navigation"
        aria-label="Navigazione principale"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
          background: scrolled ? 'rgba(10,8,6,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(196,162,101,0.2)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link
              href="/"
              aria-label="Castello di Carlo V - Home"
              style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  border: '2px solid #C4A265',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  color: '#C4A265',
                  fontFamily: 'var(--font-cinzel), serif',
                  fontWeight: 'bold',
                  flexShrink: 0,
                }}
              >
                V
              </div>
              <div className="hidden sm:block">
                <div style={{ fontFamily: 'var(--font-cinzel), serif', color: '#F5F0E8', fontSize: '14px', letterSpacing: '2px', lineHeight: 1.3 }}>
                  CASTELLO DI CARLO V
                </div>
                <div style={{ fontFamily: 'var(--font-montserrat), sans-serif', color: '#C4A265', fontSize: '9px', letterSpacing: '3px' }}>
                  CROTONE · DAL IX SECOLO
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                  onClick={(e) => handleAnchorClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Phone */}
            <div className="hidden md:flex items-center gap-2">
              <FiPhone size={14} style={{ color: 'var(--color-gold)' }} />
              <a
                href="tel:+393496661564"
                style={{
                  fontFamily: 'var(--font-montserrat)',
                  fontSize: '0.7rem',
                  color: 'var(--color-text-muted)',
                  letterSpacing: '0.05em',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                aria-label="Chiama il Castello di Carlo V"
              >
                +39 349 666 1564
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Chiudi menu' : 'Apri menu'}
              aria-expanded={mobileOpen}
              style={{ color: 'var(--color-gold)' }}
            >
              {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 z-[999] lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
              className="fixed top-0 right-0 bottom-0 w-72 z-[1000] lg:hidden flex flex-col"
              style={{ background: 'var(--color-surface)', borderLeft: '1px solid var(--color-border)' }}
              aria-label="Menu mobile"
            >
              <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
                <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.75rem', color: 'var(--color-gold)', letterSpacing: '0.15em' }}>
                  MENU
                </span>
                <button onClick={() => setMobileOpen(false)} aria-label="Chiudi menu" style={{ color: 'var(--color-text-muted)' }}>
                  <FiX size={20} />
                </button>
              </div>

              <div className="flex flex-col p-6 gap-2 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="py-3 px-4 border-b"
                    style={{
                      fontFamily: 'var(--font-montserrat)',
                      fontSize: '0.7rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-muted)',
                      borderColor: 'var(--color-border)',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="p-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
                <a
                  href="tel:+393496661564"
                  className="flex items-center gap-2"
                  style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-montserrat)', fontSize: '0.75rem' }}
                >
                  <FiPhone size={14} />
                  +39 349 666 1564
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
