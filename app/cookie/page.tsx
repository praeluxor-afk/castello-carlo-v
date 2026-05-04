import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Cookie Policy — Castello di Carlo V Crotone',
  description: "Informativa sui cookie del sito web del Castello di Carlo V di Crotone.",
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

function BrowserRow({ browser, instructions }: { browser: string; instructions: string }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '130px 1fr',
        gap: '1rem',
        padding: '0.6rem 0',
        borderBottom: '1px solid rgba(196,162,101,0.08)',
        alignItems: 'start',
      }}
    >
      <span style={{ color: 'var(--color-text)', fontWeight: 600 }}>{browser}</span>
      <span>{instructions}</span>
    </div>
  );
}

export default function CookiePage() {
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
              Cookie Policy
            </h1>
            <p style={{ fontFamily: 'var(--font-garamond)', fontStyle: 'italic', color: 'var(--color-text-muted)' }}>
              Informativa sull&apos;utilizzo dei cookie ai sensi del D.Lgs. 69/2012 e del GDPR
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
            <Section title="1. Cosa sono i Cookie">
              <p>
                I cookie sono piccoli file di testo che i siti web visitati dall&apos;utente inviano al suo terminale (computer, tablet, smartphone), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                I cookie permettono al sito di riconoscere il dispositivo dell&apos;utente, migliorando l&apos;esperienza di navigazione e ricordando le preferenze impostate.
              </p>
            </Section>

            <Section title="2. Cookie Tecnici Necessari">
              <p>
                Questo sito utilizza esclusivamente{' '}
                <strong style={{ color: 'var(--color-text)' }}>cookie tecnici necessari</strong>{' '}
                al corretto funzionamento del sito. Questi cookie non richiedono il consenso dell&apos;utente in quanto indispensabili alla navigazione.
              </p>

              <div style={{ marginTop: '1.25rem', overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <th style={{ textAlign: 'left', padding: '0.5rem 1rem 0.5rem 0', color: 'var(--color-text)', fontFamily: 'var(--font-cinzel)', fontSize: '0.7rem', letterSpacing: '0.08em' }}>Cookie</th>
                      <th style={{ textAlign: 'left', padding: '0.5rem 1rem', color: 'var(--color-text)', fontFamily: 'var(--font-cinzel)', fontSize: '0.7rem', letterSpacing: '0.08em' }}>Finalità</th>
                      <th style={{ textAlign: 'left', padding: '0.5rem 0 0.5rem 1rem', color: 'var(--color-text)', fontFamily: 'var(--font-cinzel)', fontSize: '0.7rem', letterSpacing: '0.08em' }}>Durata</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid rgba(196,162,101,0.08)' }}>
                      <td style={{ padding: '0.6rem 1rem 0.6rem 0', color: 'var(--color-gold)', fontFamily: 'monospace', fontSize: '0.85rem' }}>cookie-consent</td>
                      <td style={{ padding: '0.6rem 1rem', color: 'var(--color-text-muted)' }}>Salva la preferenza dell&apos;utente sul banner cookie</td>
                      <td style={{ padding: '0.6rem 0 0.6rem 1rem', color: 'var(--color-text-muted)' }}>12 mesi</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.6rem 1rem 0.6rem 0', color: 'var(--color-gold)', fontFamily: 'monospace', fontSize: '0.85rem' }}>__next*</td>
                      <td style={{ padding: '0.6rem 1rem', color: 'var(--color-text-muted)' }}>Cookie tecnici del framework Next.js per il corretto funzionamento dell&apos;applicazione</td>
                      <td style={{ padding: '0.6rem 0 0.6rem 1rem', color: 'var(--color-text-muted)' }}>Sessione</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Section>

            <Section title="3. Cookie Analitici">
              <p>
                Al momento, questo sito <strong style={{ color: 'var(--color-text)' }}>non utilizza cookie analitici</strong> o di profilazione di terze parti. Nel caso vengano introdotti in futuro, questa policy verrà aggiornata e verrà richiesto il consenso esplicito dell&apos;utente.
              </p>
            </Section>

            <Section title="4. Cookie di Terze Parti">
              <p>
                Il sito incorpora contenuti di servizi di terze parti che potrebbero impostare cookie propri:
              </p>
              <ul style={{ paddingLeft: '1.25rem', marginTop: '0.75rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong style={{ color: 'var(--color-text)' }}>YouTube</strong> (video tour panoramico) — Il video viene caricato solo su esplicita richiesta dell&apos;utente, minimizzando l&apos;impostazione di cookie di terze parti. Policy:{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)' }}>
                    Google Privacy Policy
                  </a>
                </li>
                <li>
                  <strong style={{ color: 'var(--color-text)' }}>Google Maps</strong> (mappa nella sezione Contatti) — Potrebbero essere impostati cookie di Google. Policy:{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)' }}>
                    Google Privacy Policy
                  </a>
                </li>
              </ul>
            </Section>

            <Section title="5. Come Disabilitare i Cookie">
              <p>
                L&apos;utente può disabilitare i cookie direttamente dalle impostazioni del proprio browser. Di seguito le istruzioni per i browser più comuni:
              </p>

              <div style={{ marginTop: '1rem' }}>
                <BrowserRow
                  browser="Google Chrome"
                  instructions="Menu (⋮) → Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti → Blocca tutti i cookie di terze parti"
                />
                <BrowserRow
                  browser="Mozilla Firefox"
                  instructions="Menu (☰) → Impostazioni → Privacy e sicurezza → Protezione antitracciamento → Personalizzato"
                />
                <BrowserRow
                  browser="Safari (Mac)"
                  instructions="Preferenze → Privacy → Gestisci dati siti web → Rimuovi tutto"
                />
                <BrowserRow
                  browser="Safari (iOS)"
                  instructions="Impostazioni → Safari → Blocca tutti i cookie"
                />
                <BrowserRow
                  browser="Microsoft Edge"
                  instructions="Menu (⋯) → Impostazioni → Cookie e autorizzazioni del sito → Cookie e dati del sito"
                />
              </div>

              <p style={{ marginTop: '1rem' }}>
                <strong style={{ color: 'var(--color-text)' }}>Attenzione:</strong> La disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del sito.
              </p>
            </Section>

            <Section title="6. Durata dei Cookie">
              <p>
                I cookie tecnici impostati da questo sito hanno una durata massima di 12 mesi dalla loro impostazione. Alla scadenza, il cookie viene eliminato automaticamente.
              </p>
            </Section>

            <Section title="7. Link Correlati">
              <p>
                Per ulteriori informazioni sul trattamento dei dati personali, consultare la nostra{' '}
                <Link href="/privacy" style={{ color: 'var(--color-gold)' }}>
                  Privacy Policy
                </Link>
                .
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
