import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — Castello di Carlo V Crotone',
  description: "Informativa sulla privacy del sito web del Castello di Carlo V di Crotone, gestito dall'Associazione Multitracce.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <h2
        style={{
          fontFamily: 'var(--font-cinzel)',
          fontSize: '1rem',
          color: 'var(--color-gold)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '1rem',
          paddingBottom: '0.5rem',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        {title}
      </h2>
      <div
        style={{
          fontFamily: 'var(--font-garamond)',
          fontSize: '1.05rem',
          color: 'var(--color-text-muted)',
          lineHeight: 1.9,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        style={{ background: 'var(--color-dark)', minHeight: '100vh', paddingTop: '6rem', paddingBottom: '4rem' }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem',
                justifyContent: 'center',
              }}
            >
              <div style={{ height: '1px', width: '60px', background: 'linear-gradient(to right, transparent, var(--color-gold))' }} />
              <svg width="12" height="12" viewBox="0 0 12 12">
                <rect x="1" y="1" width="10" height="10" fill="none" stroke="var(--color-gold)" strokeWidth="0.8" transform="rotate(45 6 6)" />
              </svg>
              <div style={{ height: '1px', width: '60px', background: 'linear-gradient(to left, transparent, var(--color-gold))' }} />
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-cinzel)',
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                color: 'var(--color-gold)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              Privacy Policy
            </h1>
            <p style={{ fontFamily: 'var(--font-garamond)', fontStyle: 'italic', color: 'var(--color-text-muted)' }}>
              Informativa ai sensi dell&apos;art. 13 del Regolamento UE 2016/679 (GDPR)
            </p>
            <p
              style={{
                fontFamily: 'var(--font-montserrat)',
                fontSize: '0.6rem',
                letterSpacing: '0.1em',
                color: 'var(--color-text-muted)',
                marginTop: '0.5rem',
                textTransform: 'uppercase',
              }}
            >
              Ultimo aggiornamento: Gennaio 2024
            </p>
          </div>

          {/* Content */}
          <div
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              padding: '3rem',
            }}
          >
            <Section title="1. Titolare del Trattamento">
              <p>
                Il titolare del trattamento dei dati personali è l&apos;
                <strong style={{ color: 'var(--color-text)' }}>Associazione Multitracce</strong>,
                gestore del Castello di Carlo V in collaborazione con il Comune di Crotone.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                <strong style={{ color: 'var(--color-text)' }}>Contatto:</strong>{' '}
                <a href="mailto:multitracce@hotmail.com" style={{ color: 'var(--color-gold)' }}>
                  multitracce@hotmail.com
                </a>
              </p>
            </Section>

            <Section title="2. Dati Raccolti">
              <p>Il sito raccoglie le seguenti categorie di dati personali:</p>
              <ul style={{ paddingLeft: '1.25rem', marginTop: '0.75rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong style={{ color: 'var(--color-text)' }}>Dati di navigazione:</strong> Indirizzi IP, tipo di browser, sistema operativo, orari di accesso, pagine visitate. Questi dati sono raccolti automaticamente e necessari al funzionamento tecnico del sito.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong style={{ color: 'var(--color-text)' }}>Dati forniti volontariamente:</strong> Nome, indirizzo email, numero di telefono e messaggio inseriti nel form di contatto.
                </li>
              </ul>
            </Section>

            <Section title="3. Finalità del Trattamento">
              <p>I dati personali vengono trattati per le seguenti finalità:</p>
              <ul style={{ paddingLeft: '1.25rem', marginTop: '0.75rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Risposta alle richieste di informazioni, prenotazioni tour e organizzazione eventi inviate tramite il form di contatto.</li>
                <li style={{ marginBottom: '0.5rem' }}>Statistica anonima sull&apos;utilizzo del sito web, per migliorare i servizi offerti.</li>
                <li style={{ marginBottom: '0.5rem' }}>Adempimento di obblighi legali.</li>
              </ul>
            </Section>

            <Section title="4. Base Giuridica">
              <p>
                Il trattamento dei dati forniti tramite il form di contatto si basa sul consenso dell&apos;interessato (art. 6, par. 1, lett. a GDPR) e sull&apos;esecuzione di misure precontrattuali adottate su richiesta dell&apos;interessato (art. 6, par. 1, lett. b GDPR).
              </p>
            </Section>

            <Section title="5. Conservazione dei Dati">
              <p>
                I dati personali forniti tramite il form di contatto vengono conservati per un periodo massimo di{' '}
                <strong style={{ color: 'var(--color-text)' }}>12 mesi</strong> dalla ricezione della richiesta, salvo diversa necessità legale.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                I dati di navigazione vengono conservati per il tempo strettamente necessario al funzionamento tecnico del sito.
              </p>
            </Section>

            <Section title="6. Condivisione dei Dati">
              <p>
                I dati personali non vengono venduti, ceduti o comunicati a terzi, eccetto nei casi previsti dalla legge o per l&apos;utilizzo di servizi tecnici necessari (es. servizio di invio email). In tali casi, i destinatari agiscono in qualità di responsabili del trattamento.
              </p>
            </Section>

            <Section title="7. Diritti dell'Interessato">
              <p>Ai sensi degli artt. 15-22 del GDPR, l&apos;interessato ha il diritto di:</p>
              <ul style={{ paddingLeft: '1.25rem', marginTop: '0.75rem' }}>
                <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--color-text)' }}>Accesso</strong> — Ottenere conferma del trattamento e copia dei dati personali;</li>
                <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--color-text)' }}>Rettifica</strong> — Correggere dati inesatti o incompleti;</li>
                <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--color-text)' }}>Cancellazione</strong> — Richiedere la cancellazione dei propri dati (&quot;diritto all&apos;oblio&quot;);</li>
                <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--color-text)' }}>Limitazione</strong> — Richiedere la limitazione del trattamento;</li>
                <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--color-text)' }}>Portabilità</strong> — Ricevere i propri dati in formato strutturato;</li>
                <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--color-text)' }}>Opposizione</strong> — Opporsi al trattamento per motivi legittimi;</li>
                <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--color-text)' }}>Revoca del consenso</strong> — In qualsiasi momento, senza pregiudizio per la liceità del trattamento basata sul consenso prestato prima della revoca.</li>
              </ul>
              <p style={{ marginTop: '1rem' }}>
                Per esercitare i propri diritti, l&apos;interessato può contattare il titolare del trattamento all&apos;indirizzo{' '}
                <a href="mailto:multitracce@hotmail.com" style={{ color: 'var(--color-gold)' }}>
                  multitracce@hotmail.com
                </a>.
              </p>
            </Section>

            <Section title="8. Contatto DPO">
              <p>
                Per questioni relative alla protezione dei dati personali, è possibile contattare il responsabile della protezione dei dati (DPO) all&apos;indirizzo:
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                <a href="mailto:multitracce@hotmail.com" style={{ color: 'var(--color-gold)' }}>
                  multitracce@hotmail.com
                </a>
              </p>
            </Section>

            <Section title="9. Reclami">
              <p>
                L&apos;interessato ha il diritto di proporre reclamo all&apos;Autorità di controllo competente:{' '}
                <strong style={{ color: 'var(--color-text)' }}>Garante per la Protezione dei Dati Personali</strong>,
                con sede in Piazza Venezia 11, 00187 Roma (IT). Sito:{' '}
                <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)' }}>
                  www.garanteprivacy.it
                </a>.
              </p>
            </Section>

            <Section title="10. Modifiche alla Privacy Policy">
              <p>
                Il titolare si riserva il diritto di apportare modifiche alla presente Privacy Policy. In caso di modifiche sostanziali, verrà data comunicazione tramite avviso nella homepage del sito.
              </p>
            </Section>
          </div>

          {/* Back link */}
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link
              href="/"
              style={{
                fontFamily: 'var(--font-montserrat)',
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(196,162,101,0.4)',
                paddingBottom: '2px',
              }}
            >
              ← Torna alla Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
