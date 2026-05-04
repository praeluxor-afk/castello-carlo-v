'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const navLinks = [
  { label: 'Storia', href: '#storia' },
  { label: 'Il Castello', href: '#castello' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Video', href: '#tour-video' },
  { label: 'Eventi', href: '#eventi' },
  { label: 'Tour', href: '#tour' },
  { label: 'Orari', href: '#orari' },
  { label: 'Contatti', href: '#contatti' },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: '#050403',
        borderTop: '1px solid var(--color-border)',
        padding: '4rem 1.5rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Top section */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          {/* Logo */}
          <div style={{ position: 'relative', width: '64px', height: '64px', margin: '0 auto 1.25rem' }}>
            <Image
              src="/images/logo.webp"
              alt="Logo Castello di Carlo V Crotone"
              fill
              className="object-contain"
              sizes="64px"
            />
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-cinzel)',
              fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
              color: 'var(--color-gold)',
              letterSpacing: '0.08em',
              marginBottom: '0.5rem',
            }}
          >
            Castello di Carlo V — Crotone
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-garamond)',
              fontStyle: 'italic',
              fontSize: '0.95rem',
              color: 'var(--color-text-muted)',
            }}
          >
            Dal IX Secolo, Custode della Storia
          </p>
        </div>

        {/* Ornament */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <svg width="300" height="16" viewBox="0 0 300 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 auto', display: 'block' }}>
            <line x1="0" y1="8" x2="120" y2="8" stroke="rgba(196,162,101,0.25)" strokeWidth="0.8" />
            <rect x="137" y="4" width="8" height="8" fill="none" stroke="rgba(196,162,101,0.6)" strokeWidth="0.8" transform="rotate(45 141 8)" />
            <circle cx="141" cy="8" r="1.5" fill="rgba(196,162,101,0.6)" />
            <line x1="155" y1="8" x2="300" y2="8" stroke="rgba(196,162,101,0.25)" strokeWidth="0.8" />
          </svg>
        </div>

        {/* Nav links */}
        <nav
          aria-label="Footer navigation"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem 1.5rem',
            marginBottom: '2.5rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-montserrat)',
                fontSize: '0.6rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Contact info */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem 2rem',
            marginBottom: '1.75rem',
          }}
        >
          <a
            href="tel:+393496661564"
            style={{
              fontFamily: 'var(--font-montserrat)',
              fontSize: '0.65rem',
              color: 'var(--color-text-muted)',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
          >
            📞 +39 349 666 1564
          </a>
          <a
            href="mailto:multitracce@hotmail.com"
            style={{
              fontFamily: 'var(--font-montserrat)',
              fontSize: '0.65rem',
              color: 'var(--color-text-muted)',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
          >
            ✉ multitracce@hotmail.com
          </a>
        </div>

        {/* Social */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '3rem' }}>
          <a
            href="https://www.facebook.com/profile.php?id=100086143946961"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook ufficiale del Castello di Carlo V"
            style={{
              width: '36px',
              height: '36px',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-text-muted)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'var(--color-gold)'; el.style.color = 'var(--color-gold)'; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'var(--color-border)'; el.style.color = 'var(--color-text-muted)'; }}
          >
            <FaFacebookF size={14} />
          </a>
          <a
            href="https://www.instagram.com/castello_carlov/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram ufficiale del Castello di Carlo V"
            style={{
              width: '36px',
              height: '36px',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-text-muted)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'var(--color-gold)'; el.style.color = 'var(--color-gold)'; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'var(--color-border)'; el.style.color = 'var(--color-text-muted)'; }}
          >
            <FaInstagram size={14} />
          </a>
        </div>

        {/* Bottom divider */}
        <div style={{ height: '1px', background: 'var(--color-border)', marginBottom: '1.75rem' }} />

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-montserrat)',
              fontSize: '0.58rem',
              color: 'var(--color-text-muted)',
              letterSpacing: '0.05em',
              lineHeight: 1.6,
            }}
          >
            © 2024 Castello di Carlo V — Crotone
            <br />
            Gestito dall&apos;Associazione Multitracce in collaborazione con il Comune di Crotone
          </p>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link
              href="/privacy"
              style={{
                fontFamily: 'var(--font-montserrat)',
                fontSize: '0.58rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie"
              style={{
                fontFamily: 'var(--font-montserrat)',
                fontSize: '0.58rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
