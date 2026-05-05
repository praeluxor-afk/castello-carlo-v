import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Cookie Policy — Castello di Carlo V Crotone',
  description: 'Informativa sui cookie del sito web del Castello di Carlo V di Crotone. Solo cookie tecnici necessari.',
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

export default function CookiePolicyPage() {
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
              Titolare: Castello di Carlo V — Crotone &nbsp;·&nbsp; Ultimo aggiornamento: Maggio 2025
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
                Il titolare del trattamento dei dati è l&apos;<strong style={{ color: 'var(--color-text)' }}>Associazione Multitracce</strong>, gestore del Castello di Carlo V di Crotone.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                Per qualsiasi richiesta relativa alla privacy e ai cookie è possibile contattarci tramite il modulo disponibile nella sezione{' '}
                <Link href="/#contatti" style={{ color: 'var(--color-gold)' }}>Contatti</Link>.
              </p>
            </Section>

            <Section title="2. Cosa Sono i Cookie">
              <p>
                I cookie sono piccoli file di testo che i siti web inviano al dispositivo dell&apos;utente durante la navigazione. Vengono memorizzati nel browser e ritrasmessi al sito nelle visite successive, permettendogli di riconoscere il dispositivo e ricordare le preferenze.
              </p>
            </Section>

            <Section title="3. Cookie Utilizzati da Questo Sito">
              <p>
                Questo sito utilizza esclusivamente{' '}
                <strong style={{ color: 'var(--color-text)' }}>cookie tecnici necessari</strong>{' '}
                al corretto funzionamento. Non vengono utilizzati cookie di profilazione, di tracciamento o di marketing. Non vengono ceduti dati a terze parti per finalità pubblicitarie.
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
                      <td style={{ padding: '0.6rem 1rem', color: 'var(--color-text-muted)' }}>Memorizza la preferenza dell&apos;utente riguardo al banner cookie (accettato/rifiutato)</td>
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

            <Section title="4. Cookie di Terze Parti">
              <p>
                Il sito incorpora contenuti di servizi di terze parti che potrebbero impostare propri cookie:
              </p>
              <ul style={{ paddingLeft: '1.25rem', marginTop: '0.75rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong style={{ color: 'var(--color-text)' }}>YouTube</strong> — Video tour panoramico. Il video viene caricato solo su esplicita richiesta dell&apos;utente, riducendo al minimo i cookie di terze parti. Consulta la{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)' }}>
                    Google Privacy Policy
                  </a>.
                </li>
                <li>
                  <strong style={{ color: 'var(--color-text)' }}>Google Maps</strong> — Mappa nella sezione Contatti. Potrebbero essere impostati cookie di Google. Consulta la{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)' }}>
                    Google Privacy Policy
                  </a>.
                </li>
              </ul>
            </Section>

            <Section title="5. Base Giuridica">
              <p>
                I cookie tecnici necessari vengono trattati sulla base del <strong style={{ color: 'var(--color-text)' }}>legittimo interesse</strong> del titolare (art. 6, par. 1, lett. f del GDPR) e non richiedono il consenso dell&apos;utente, in quanto indispensabili al funzionamento del sito. La preferenza espressa tramite il banner viene salvata localmente sul dispositivo dell&apos;utente.
              </p>
            </Section>

            <Section title="6. Come Disabilitare i Cookie">
              <p>
                È possibile disabilitare i cookie dalle impostazioni del browser. La disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del sito.
              </p>

              <div style={{ marginTop: '1rem' }}>
                <BrowserRow
                  browser="Google Chrome"
                  instructions="Menu (⋮) → Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti"
                />
                <BrowserRow
                  browser="Mozilla Firefox"
                  instructions="Menu (☰) → Impostazioni → Privacy e sicurezza → Protezione antitracciamento"
                />
                <BrowserRow
                  browser="Safari (Mac)"
                  instructions="Preferenze → Privacy → Gestisci dati siti web"
                />
                <BrowserRow
                  browser="Safari (iOS)"
                  instructions="Impostazioni → Safari → Blocca tutti i cookie"
                />
                <BrowserRow
                  browser="Microsoft Edge"
                  instructions="Menu (⋯) → Impostazioni → Cookie e autorizzazioni del sito"
                />
              </div>
            </Section>

            <Section title="7. Diritti dell'Utente">
              <p>
                Ai sensi del GDPR (artt. 15–22), l&apos;utente ha diritto di accedere, rettificare, cancellare o limitare il trattamento dei propri dati. Poiché questo sito utilizza solo cookie tecnici che non identificano personalmente l&apos;utente, l&apos;esercizio di tali diritti riguarda esclusivamente la preferenza salvata localmente, eliminabile in qualsiasi momento svuotando la cronologia del browser.
              </p>
            </Section>

            <Section title="8. Modifiche alla Cookie Policy">
              <p>
                Il titolare si riserva il diritto di modificare questa cookie policy in qualsiasi momento. Le modifiche vengono pubblicate su questa pagina con indicazione della data di aggiornamento. Si consiglia di consultare periodicamente questa pagina.
              </p>
            </Section>

            <Section title="9. Link Correlati">
              <p>
                Per ulteriori informazioni sul trattamento dei dati personali, consultare la{' '}
                <Link href="/privacy" style={{ color: 'var(--color-gold)' }}>
                  Privacy Policy
                </Link>.
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
