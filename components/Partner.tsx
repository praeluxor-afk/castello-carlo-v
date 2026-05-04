'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

type SocialPlatform = 'facebook' | 'instagram';

interface SocialLink {
  platform: SocialPlatform;
  href: string;
  label: string;
}

interface Partner {
  name: string;
  logo: string;
  alt: string;
  social: SocialLink[];
}

const partners: Partner[] = [
  {
    name: 'Comune di Crotone',
    logo: '/images/stemma-crotone.webp',
    alt: 'Stemma del Comune di Crotone',
    social: [
      { platform: 'facebook', href: 'https://www.facebook.com/paginaufficialeComunediCrotone', label: 'Facebook Comune di Crotone' },
    ],
  },
  {
    name: 'Associazione Multitracce',
    logo: '/images/logo-multitracce.webp',
    alt: 'Logo Associazione Multitracce',
    social: [
      { platform: 'facebook', href: 'https://www.facebook.com/profile.php?id=100053175285797', label: 'Facebook Associazione Multitracce' },
      { platform: 'instagram', href: 'https://www.instagram.com/associazione_multitracce/', label: 'Instagram Associazione Multitracce' },
    ],
  },
  {
    name: 'CTG Kroton APS',
    logo: '/images/logo-ctg-kroton.webp',
    alt: 'Logo CTG Kroton APS',
    social: [
      { platform: 'facebook', href: 'https://www.facebook.com/profile.php?id=100085850347629', label: 'Facebook CTG Kroton' },
      { platform: 'instagram', href: 'https://www.instagram.com/ctg_kroton/', label: 'Instagram CTG Kroton' },
    ],
  },
  {
    name: 'Ciclofficina TR220',
    logo: '/images/logo-ciclofficina.webp',
    alt: 'Logo Ciclofficina TR220',
    social: [
      { platform: 'facebook', href: 'https://www.facebook.com/CiclofficinaTR22o', label: 'Facebook Ciclofficina TR220' },
      { platform: 'instagram', href: 'https://www.instagram.com/ciclofficina_tr22o/', label: 'Instagram Ciclofficina TR220' },
    ],
  },
  {
    name: 'G.A.K.',
    logo: '/images/logo-gak.webp',
    alt: 'Logo GAK',
    social: [],
  },
];

const socialStyles: Record<SocialPlatform, { background: string }> = {
  facebook: {
    background: '#1877F2',
  },
  instagram: {
    background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
  },
};

function SocialButton({ link }: { link: SocialLink }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: socialStyles[link.platform].background,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        transition: 'opacity 0.3s ease',
        flexShrink: 0,
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.85')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
    >
      {link.platform === 'facebook'
        ? <FaFacebookF size={20} />
        : <FaInstagram size={20} />
      }
    </a>
  );
}

function PartnerCard({ partner, index }: { partner: Partner; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        padding: '2rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        textAlign: 'center',
        transition: 'border-color 0.3s ease',
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-gold)')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-border)')}
    >
      {/* Logo — always full color, no filters */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100px' }}>
        <Image
          src={partner.logo}
          alt={partner.alt}
          width={150}
          height={100}
          style={{ objectFit: 'contain', width: 'auto', height: '100px', maxWidth: '150px' }}
        />
      </div>

      {/* Name */}
      <h3
        style={{
          fontFamily: 'var(--font-cinzel)',
          fontSize: '0.72rem',
          color: 'var(--color-text)',
          letterSpacing: '0.08em',
          lineHeight: 1.4,
        }}
      >
        {partner.name}
      </h3>

      {/* Social buttons */}
      {partner.social.length > 0 && (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {partner.social.map((s, i) => (
            <SocialButton key={i} link={s} />
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function Partner() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section style={{ padding: '6rem 1.5rem', background: 'var(--color-dark)' }}>
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
            I Nostri Partner
          </h2>
          <p style={{ fontFamily: 'var(--font-garamond)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
            Insieme per la Cultura di Crotone
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {partners.map((p, i) => (
            <PartnerCard key={i} partner={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
