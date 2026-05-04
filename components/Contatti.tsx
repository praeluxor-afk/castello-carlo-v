'use client';

import { useState, useRef, FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiGlobe, FiSend, FiLoader } from 'react-icons/fi';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

interface FormData {
  nome: string;
  email: string;
  telefono: string;
  tipo: string;
  messaggio: string;
  privacy: boolean;
}

interface FormErrors {
  nome?: string;
  email?: string;
  messaggio?: string;
  privacy?: string;
}

const initialForm: FormData = {
  nome: '',
  email: '',
  telefono: '',
  tipo: 'informazioni',
  messaggio: '',
  privacy: false,
};

export default function Contatti() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });
  const contentRef = useRef<HTMLDivElement>(null);
  const contentInView = useInView(contentRef, { once: true, margin: '-60px' });

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.nome.trim()) newErrors.nome = 'Il nome è obbligatorio';
    if (!form.email.trim()) {
      newErrors.email = "L'email è obbligatoria";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Inserisci un indirizzo email valido';
    }
    if (!form.messaggio.trim()) newErrors.messaggio = 'Il messaggio è obbligatorio';
    if (!form.privacy) newErrors.privacy = 'È necessario accettare la Privacy Policy';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        // Development: simulate success
        await new Promise((r) => setTimeout(r, 1200));
        setStatus('success');
        setForm(initialForm);
        return;
      }

      const emailjs = await import('@emailjs/browser');
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.nome,
          from_email: form.email,
          telefono: form.telefono,
          tipo_richiesta: form.tipo,
          message: form.messaggio,
        },
        publicKey
      );

      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = (hasError: boolean) => ({
    width: '100%',
    background: 'var(--color-dark)',
    border: `1px solid ${hasError ? '#c0392b' : 'var(--color-border)'}`,
    color: 'var(--color-text)',
    padding: '0.75rem 1rem',
    fontFamily: 'var(--font-garamond)',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  });

  const labelStyle = {
    display: 'block',
    fontFamily: 'var(--font-montserrat)',
    fontSize: '0.6rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    color: 'var(--color-text-muted)',
    marginBottom: '0.4rem',
  };

  const errorStyle = {
    fontFamily: 'var(--font-montserrat)',
    fontSize: '0.6rem',
    color: '#e74c3c',
    marginTop: '0.3rem',
    display: 'block',
  };

  return (
    <section id="contatti" style={{ padding: '6rem 1.5rem', background: 'var(--color-surface)' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>

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
            Contatti
          </h2>
          <p style={{ fontFamily: 'var(--font-garamond)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
            Siamo a Tua Disposizione
          </p>
        </motion.div>

        {/* 3-column grid */}
        <div
          ref={contentRef}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr 1.2fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
          className="contatti-grid"
        >
          <style>{`
            @media (max-width: 1024px) {
              .contatti-grid { grid-template-columns: 1fr 1fr !important; }
              .contatti-map { grid-column: 1 / -1 !important; }
            }
            @media (max-width: 640px) {
              .contatti-grid { grid-template-columns: 1fr !important; }
            }
            input:focus, textarea:focus, select:focus {
              border-color: var(--color-gold) !important;
            }
          `}</style>

          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{
              background: 'var(--color-surface-2)',
              border: '1px solid var(--color-border)',
              padding: '2rem',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-cinzel)',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                color: 'var(--color-gold)',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
              }}
            >
              Informazioni
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Address */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <FiMapPin size={16} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.7rem', color: 'var(--color-text)', marginBottom: '0.25rem' }}>
                    Castello di Carlo V
                  </div>
                  <div style={{ fontFamily: 'var(--font-garamond)', fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                    Via Risorgimento<br />
                    88900 Crotone (KR)<br />
                    Calabria
                  </div>
                </div>
              </div>

              <div style={{ height: '1px', background: 'var(--color-border)' }} />

              {/* Info generali */}
              <div>
                <div style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.65rem', color: 'var(--color-gold)', letterSpacing: '0.1em', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                  Info Generali
                </div>
                <a
                  href="tel:+393496661564"
                  style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.4rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-garamond)', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                >
                  <FiPhone size={13} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                  +39 349 666 1564
                </a>
                <a
                  href="mailto:multitracce@hotmail.com"
                  style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--color-text-muted)', fontFamily: 'var(--font-garamond)', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                >
                  <FiMail size={13} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                  multitracce@hotmail.com
                </a>
              </div>

              <div style={{ height: '1px', background: 'var(--color-border)' }} />

              {/* Prenotazioni */}
              <div>
                <div style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.65rem', color: 'var(--color-gold)', letterSpacing: '0.1em', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                  Prenotazioni Tour
                </div>
                <a
                  href="tel:+393272148953"
                  style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.4rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-garamond)', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                >
                  <FiPhone size={13} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                  +39 327 214 8953
                </a>
                <a
                  href="mailto:ctgkrotonaps@gmail.com"
                  style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--color-text-muted)', fontFamily: 'var(--font-garamond)', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                >
                  <FiMail size={13} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                  ctgkrotonaps@gmail.com
                </a>
              </div>

              <div style={{ height: '1px', background: 'var(--color-border)' }} />

              {/* Social */}
              <div>
                <div style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.65rem', color: 'var(--color-gold)', letterSpacing: '0.1em', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                  Social
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <a
                    href="https://www.facebook.com/profile.php?id=100086143946961"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook del Castello di Carlo V"
                    style={{ width: '34px', height: '34px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'var(--color-gold)'; el.style.color = 'var(--color-gold)'; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'var(--color-border)'; el.style.color = 'var(--color-text-muted)'; }}
                  >
                    <FaFacebookF size={13} />
                  </a>
                  <a
                    href="https://www.instagram.com/castello_carlov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram del Castello di Carlo V"
                    style={{ width: '34px', height: '34px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'var(--color-gold)'; el.style.color = 'var(--color-gold)'; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'var(--color-border)'; el.style.color = 'var(--color-text-muted)'; }}
                  >
                    <FaInstagram size={13} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {status === 'success' ? (
              <div
                style={{
                  padding: '3rem 2rem',
                  background: 'rgba(34,197,94,0.06)',
                  border: '1px solid rgba(34,197,94,0.3)',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✓</div>
                <h3
                  style={{
                    fontFamily: 'var(--font-cinzel)',
                    fontSize: '1rem',
                    color: '#4ade80',
                    marginBottom: '0.75rem',
                    letterSpacing: '0.08em',
                  }}
                >
                  Messaggio Inviato!
                </h3>
                <p style={{ fontFamily: 'var(--font-garamond)', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                  Ti contatteremo presto. Grazie per l&apos;interesse nel Castello di Carlo V.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label htmlFor="nome" style={labelStyle}>Nome *</label>
                    <input
                      id="nome"
                      type="text"
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      style={inputStyle(!!errors.nome)}
                      placeholder="Il tuo nome"
                      autoComplete="name"
                    />
                    {errors.nome && <span style={errorStyle}>{errors.nome}</span>}
                  </div>
                  <div>
                    <label htmlFor="email" style={labelStyle}>Email *</label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle(!!errors.email)}
                      placeholder="La tua email"
                      autoComplete="email"
                    />
                    {errors.email && <span style={errorStyle}>{errors.email}</span>}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label htmlFor="telefono" style={labelStyle}>Telefono</label>
                    <input
                      id="telefono"
                      type="tel"
                      value={form.telefono}
                      onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                      style={inputStyle(false)}
                      placeholder="+39 ..."
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <label htmlFor="tipo" style={labelStyle}>Tipo di Richiesta</label>
                    <select
                      id="tipo"
                      value={form.tipo}
                      onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                      style={{ ...inputStyle(false), cursor: 'pointer', appearance: 'none' }}
                    >
                      <option value="informazioni">Informazioni generali</option>
                      <option value="tour">Prenotazione tour</option>
                      <option value="evento">Organizzazione evento</option>
                      <option value="altro">Altro</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label htmlFor="messaggio" style={labelStyle}>Messaggio *</label>
                  <textarea
                    id="messaggio"
                    value={form.messaggio}
                    onChange={(e) => setForm({ ...form, messaggio: e.target.value })}
                    style={{ ...inputStyle(!!errors.messaggio), resize: 'vertical', minHeight: '120px', lineHeight: 1.7 }}
                    placeholder="Scrivi il tuo messaggio..."
                    rows={4}
                  />
                  {errors.messaggio && <span style={errorStyle}>{errors.messaggio}</span>}
                </div>

                {/* Privacy checkbox */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={form.privacy}
                      onChange={(e) => setForm({ ...form, privacy: e.target.checked })}
                      style={{ marginTop: '3px', accentColor: 'var(--color-gold)', width: '14px', height: '14px', flexShrink: 0 }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--font-garamond)',
                        fontSize: '0.9rem',
                        color: 'var(--color-text-muted)',
                        lineHeight: 1.6,
                      }}
                    >
                      Ho letto e accetto la{' '}
                      <Link
                        href="/privacy"
                        style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}
                        target="_blank"
                      >
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                  {errors.privacy && <span style={{ ...errorStyle, marginTop: '0.4rem' }}>{errors.privacy}</span>}
                </div>

                {status === 'error' && (
                  <div
                    style={{
                      padding: '0.875rem 1rem',
                      background: 'rgba(239,68,68,0.06)',
                      border: '1px solid rgba(239,68,68,0.3)',
                      marginBottom: '1.25rem',
                      fontFamily: 'var(--font-garamond)',
                      fontSize: '0.9rem',
                      color: '#f87171',
                      lineHeight: 1.6,
                    }}
                  >
                    Errore nell&apos;invio. Riprova o contattaci direttamente al +39 349 666 1564.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-gold-filled"
                  style={{
                    cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    opacity: status === 'loading' ? 0.8 : 1,
                    border: 'none',
                  }}
                >
                  {status === 'loading' ? (
                    <>
                      <FiLoader size={14} style={{ animation: 'spin 1s linear infinite' }} />
                      Invio in corso...
                    </>
                  ) : (
                    <>
                      <FiSend size={14} />
                      Invia Messaggio
                    </>
                  )}
                </button>
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              </form>
            )}
          </motion.div>

          {/* Map column */}
          <motion.div
            className="contatti-map"
            initial={{ opacity: 0, x: 20 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ border: '1px solid var(--color-gold)', padding: '4px', position: 'relative' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.3!2d17.1285!3d39.0811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13136a8b00000001%3A0x0!2sCastello+di+Carlo+V%2C+Via+Risorgimento%2C+Crotone+KR!5e0!3m2!1sit!2sit!4v1704067200000!5m2!1sit!2sit"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block', filter: 'grayscale(30%) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Posizione del Castello di Carlo V su Google Maps"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
