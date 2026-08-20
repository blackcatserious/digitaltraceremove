export const metadata = {
  title: 'Artur Ziganshin — Curriculum Vitae',
  description:
    'Academic profile of Artur Ziganshin, an independent philosopher and AI researcher working on agency, responsibility, dignity, and identity in algorithmic societies.',
}

export default function CVPage() {
  return (
    <main>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '120px 24px 80px' }}>
        <span className="overline">Curriculum Vitae</span>
        <h1
          style={{
            fontFamily: "'Instrument Serif',Georgia,serif",
            fontSize: 'clamp(2rem,4vw,3rem)',
            marginTop: 16,
          }}
        >
          Artur Ziganshin
        </h1>
        <p style={{ marginTop: 8, color: '#7a7a88' }}>
          MA in Philosophy · Independent Philosopher and AI Researcher
        </p>

        <Section title="Research Profile">
          <Paragraph>
            My research examines machine agency, distributed responsibility, human dignity, and
            identity in algorithmic societies. My current project asks under what conditions AI
            systems may participate in a person&apos;s narrative identity without undermining that
            person&apos;s capacity for self-interpretation and revision.
          </Paragraph>
        </Section>

        <Section title="Education">
          <Paragraph>
            <strong style={{ color: '#d0d0da' }}>MA in Philosophy</strong>, Kazan Federal
            University, 2018
          </Paragraph>
          <Paragraph>
            <strong style={{ color: '#d0d0da' }}>BA in Philosophy</strong>, Kazan Federal
            University, 2016
          </Paragraph>
        </Section>

        <Section title="Current Work">
          <Paragraph>
            Article-length manuscript on algorithmic identity claims and the right to contest
            AI-generated representations of the self — submitted for peer review, 2026.
          </Paragraph>
          <Paragraph>
            Research project: <em>Algorithmic Co-Authorship and Hermeneutic Agency: Narrative
            Identity in the Age of AI</em>.
          </Paragraph>
        </Section>

        <Section title="Research Areas">
          <Paragraph>
            Philosophy of Artificial Intelligence · Narrative Identity · Applied Ethics ·
            Philosophy of Mind · Social and Political Philosophy
          </Paragraph>
        </Section>

        <Section title="Languages and Applied Experience">
          <Paragraph>Russian (native) · English (professional)</Paragraph>
          <Paragraph>
            Digital identity, privacy, platform governance, search systems, and contested online
            representations.
          </Paragraph>
        </Section>
      </div>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginTop: 48 }}>
      <h2
        style={{
          fontFamily: "'Instrument Serif',Georgia,serif",
          fontSize: '1.5rem',
          color: '#f0f0f3',
          marginBottom: 16,
          paddingBottom: 8,
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  )
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ color: '#9a9aaa', fontSize: 15, lineHeight: 1.7, marginBottom: 8 }}>
      {children}
    </p>
  )
}
