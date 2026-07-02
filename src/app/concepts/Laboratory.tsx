'use client'

import { useMemo, useState } from 'react'

type Lens = {
  id: string
  label: string
  shortLabel: string
  question: string
  description: string
  investigate: string[]
  stake: string
  reading: string
  href: string
}

type Concept = {
  id: string
  label: string
  description: string
  relations: string[]
}

const lenses: Lens[] = [
  {
    id: 'reliability',
    label: 'Epistemic reliability',
    shortLabel: 'Reliability',
    question: 'When should an AI-generated claim be treated as reason to believe something?',
    description:
      'Model outputs can be fluent, useful, and still poorly justified. This lens traces the conditions under which an answer deserves confidence rather than merely attention.',
    investigate: [
      'What process produced the claim, and what evidence can it be traced back to?',
      'How does performance change under novelty, ambiguity, or adversarial framing?',
      'Where should uncertainty be stated instead of compressed into a confident answer?',
    ],
    stake:
      'A system that sounds certain without warranted reliability can distort human judgment at scale.',
    reading: 'Epistemic Risk Surfaces in Large Language Models',
    href: 'https://philarchive.org/rec/ZIGERS',
  },
  {
    id: 'meaning',
    label: 'Meaning & grounding',
    shortLabel: 'Meaning',
    question: 'What separates linguistic competence from understanding?',
    description:
      'A model may reproduce the form of reference without a stable relation to what its words are about. This lens examines whether apparent meaning is grounded, borrowed, or simulated.',
    investigate: [
      'Does the system preserve reference when context, speaker, or domain changes?',
      'Which parts of an answer depend on social, embodied, or institutional background knowledge?',
      'Can users distinguish semantic fluency from warranted interpretation?',
    ],
    stake:
      'Treating fluent text as understanding risks confusing prediction with knowledge and representation with reference.',
    reading: 'Linguistic Symbolism and Meaning Compression in Machine Learning',
    href: 'https://philarchive.org/rec/ZIGLS',
  },
  {
    id: 'dignity',
    label: 'Dignity & contestability',
    shortLabel: 'Dignity',
    question: 'What must remain open to challenge when AI shapes a consequential decision?',
    description:
      'Accuracy alone cannot legitimise systems that classify, rank, recommend, or exclude people. This lens identifies the protections that preserve agency, recognition, and recourse.',
    investigate: [
      'Can an affected person understand, challenge, and appeal the decision?',
      'Which human responsibilities are being displaced, obscured, or made irreversible?',
      'Does the surrounding institution provide meaningful remedy rather than a decorative explanation?',
    ],
    stake:
      'Human dignity requires more than fair averages: it requires a place for refusal, explanation, and redress.',
    reading: 'Human Dignity Constraints for Autonomous Decision Systems',
    href: 'https://philarchive.org/rec/ZIGHDC',
  },
]

const concepts: Concept[] = [
  {
    id: 'reliability',
    label: 'Reliability',
    description: 'A claim-forming process is reliable when it tends to produce true or well-supported outputs under the relevant conditions.',
    relations: ['Justification', 'Uncertainty', 'Process'],
  },
  {
    id: 'testimony',
    label: 'Machine testimony',
    description: 'The question of whether an AI output can function as testimony, and what human or institutional warrant must accompany it.',
    relations: ['Reliability', 'Authority', 'Accountability'],
  },
  {
    id: 'grounding',
    label: 'Grounding',
    description: 'The relation between symbols, concepts, and the world they are taken to represent.',
    relations: ['Meaning', 'Reference', 'Context'],
  },
  {
    id: 'agency',
    label: 'Agency',
    description: 'The capacity to act, decide, and remain an author of one’s life in systems that mediate opportunities and outcomes.',
    relations: ['Dignity', 'Choice', 'Delegation'],
  },
  {
    id: 'dignity',
    label: 'Dignity',
    description: 'The requirement to treat people as ends in themselves rather than inputs to an optimisation pipeline.',
    relations: ['Recognition', 'Agency', 'Respect'],
  },
  {
    id: 'contestability',
    label: 'Contestability',
    description: 'The practical ability to question a decision, obtain reasons, introduce correction, and seek redress.',
    relations: ['Appeal', 'Transparency', 'Remedy'],
  },
]

const protocol = [
  {
    title: 'Frame the decision',
    body: 'Name the decision, affected people, institutional setting, and consequences of a wrong output.',
  },
  {
    title: 'Map the claim',
    body: 'Specify what the system is asserting, predicting, recommending, or deciding—and what evidence it relies on.',
  },
  {
    title: 'Test the conditions',
    body: 'Identify when the system is reliable, when it fails, and which uncertainty must remain visible to the user.',
  },
  {
    title: 'Apply normative constraints',
    body: 'Ask what is owed to affected people: explanation, consent, review, appeal, or a human decision-maker.',
  },
  {
    title: 'State residual risk',
    body: 'Record what remains unknown and who is responsible for monitoring, correction, and remedy.',
  },
]

const featuredReadings = [
  {
    title: 'Epistemic Risk Surfaces in Large Language Models',
    label: 'Epistemology',
    href: 'https://philarchive.org/rec/ZIGERS',
  },
  {
    title: 'Linguistic Symbolism and Meaning Compression in Machine Learning',
    label: 'Philosophy of language',
    href: 'https://philarchive.org/rec/ZIGLS',
  },
  {
    title: 'Human Dignity Constraints for Autonomous Decision Systems',
    label: 'Ethics & governance',
    href: 'https://philarchive.org/rec/ZIGHDC',
  },
]

const panelStyle = {
  border: '1px solid rgba(220, 215, 255, 0.14)',
  borderRadius: 24,
  background: 'linear-gradient(135deg, rgba(28, 25, 39, 0.9), rgba(18, 17, 27, 0.8))',
  boxShadow: '0 24px 60px rgba(0, 0, 0, 0.2)',
}

const mutedText = '#aaa8b5'
const brightText = '#f1eff8'

export default function Laboratory() {
  const [selectedLensId, setSelectedLensId] = useState(lenses[0].id)
  const [selectedConceptId, setSelectedConceptId] = useState(concepts[0].id)
  const [protocolStep, setProtocolStep] = useState(0)

  const selectedLens = useMemo(
    () => lenses.find((lens) => lens.id === selectedLensId) ?? lenses[0],
    [selectedLensId],
  )
  const selectedConcept = useMemo(
    () => concepts.find((concept) => concept.id === selectedConceptId) ?? concepts[0],
    [selectedConceptId],
  )

  return (
    <main>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '112px 24px 88px' }}>
        <section style={{ maxWidth: 840 }}>
          <span className="overline">AI philosophy laboratory</span>
          <h1
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: 'clamp(3rem, 7vw, 5.8rem)',
              fontWeight: 400,
              letterSpacing: '-0.045em',
              lineHeight: 0.94,
              margin: '18px 0 24px',
              color: brightText,
            }}
          >
            What should an AI system be allowed to claim, decide, or obscure?
          </h1>
          <p style={{ maxWidth: 720, color: mutedText, fontSize: '1.08rem', lineHeight: 1.75 }}>
            The Laboratory turns philosophical questions about AI into inspectable research paths. It is not a
            compliance score or an automated verdict. It is a working method for examining knowledge claims,
            meaning, power, and responsibility in systems that shape human life.
          </p>
        </section>

        <section aria-labelledby="lenses-heading" style={{ marginTop: 74 }}>
          <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 22 }}>
            <div>
              <span className="overline">01 — Inquiry lenses</span>
              <h2 id="lenses-heading" style={{ color: brightText, fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '2.3rem', fontWeight: 400, marginTop: 12 }}>
                Begin with the right question.
              </h2>
            </div>
            <p style={{ color: mutedText, maxWidth: 420, lineHeight: 1.6, margin: 0 }}>
              Choose a lens to see which questions, risks, and readings become relevant.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 12 }}>
            {lenses.map((lens) => {
              const selected = lens.id === selectedLensId
              return (
                <button
                  key={lens.id}
                  type="button"
                  onClick={() => setSelectedLensId(lens.id)}
                  aria-pressed={selected}
                  style={{
                    ...panelStyle,
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: 22,
                    color: brightText,
                    outline: selected ? '2px solid rgba(177, 151, 255, 0.82)' : '1px solid transparent',
                    transform: selected ? 'translateY(-2px)' : 'none',
                    transition: 'transform 160ms ease, outline 160ms ease',
                  }}
                >
                  <span style={{ display: 'block', color: selected ? '#c9b9ff' : '#a49fb6', fontSize: 12, letterSpacing: '0.11em', textTransform: 'uppercase' }}>
                    Lens
                  </span>
                  <strong style={{ display: 'block', fontSize: '1.1rem', marginTop: 8, fontWeight: 600 }}>{lens.shortLabel}</strong>
                  <span style={{ display: 'block', color: mutedText, fontSize: 14, lineHeight: 1.55, marginTop: 9 }}>{lens.question}</span>
                </button>
              )
            })}
          </div>

          <div style={{ ...panelStyle, marginTop: 16, padding: '30px clamp(22px, 5vw, 46px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.15fr) minmax(240px, 0.85fr)', gap: 38, alignItems: 'start' }}>
              <div>
                <span style={{ color: '#c9b9ff', fontSize: 12, letterSpacing: '0.11em', textTransform: 'uppercase' }}>{selectedLens.label}</span>
                <h3 style={{ color: brightText, fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '2rem', fontWeight: 400, lineHeight: 1.05, margin: '12px 0 14px' }}>
                  {selectedLens.question}
                </h3>
                <p style={{ color: mutedText, lineHeight: 1.7, margin: 0 }}>{selectedLens.description}</p>
              </div>
              <div style={{ borderLeft: '1px solid rgba(220, 215, 255, 0.15)', paddingLeft: 28 }}>
                <span style={{ color: '#c9b9ff', fontSize: 12, letterSpacing: '0.11em', textTransform: 'uppercase' }}>Normative stake</span>
                <p style={{ color: brightText, lineHeight: 1.65, margin: '10px 0 22px' }}>{selectedLens.stake}</p>
                <a href={selectedLens.href} target="_blank" rel="noreferrer" className="accent-link" style={{ fontSize: 14 }}>
                  Read: {selectedLens.reading} ↗
                </a>
              </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(220, 215, 255, 0.12)', marginTop: 28, paddingTop: 22 }}>
              <span style={{ color: '#c9b9ff', fontSize: 12, letterSpacing: '0.11em', textTransform: 'uppercase' }}>What to investigate</span>
              <ol style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14, margin: '16px 0 0', padding: 0, listStyle: 'none' }}>
                {selectedLens.investigate.map((item, index) => (
                  <li key={item} style={{ color: mutedText, lineHeight: 1.6, fontSize: 14, paddingRight: 12 }}>
                    <span style={{ color: '#c9b9ff', fontVariantNumeric: 'tabular-nums', marginRight: 8 }}>0{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section aria-labelledby="concept-map-heading" style={{ marginTop: 86 }}>
          <span className="overline">02 — Concept map</span>
          <h2 id="concept-map-heading" style={{ color: brightText, fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '2.3rem', fontWeight: 400, marginTop: 12 }}>
            Follow the concepts that structure the research.
          </h2>
          <p style={{ color: mutedText, lineHeight: 1.7, maxWidth: 700, marginTop: 12 }}>
            Select a concept to reveal its working definition and the questions it connects to. The map is deliberately incomplete: it should remain open to revision as the research develops.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.15fr) minmax(260px, 0.85fr)', gap: 18, marginTop: 24 }}>
            <div style={{ ...panelStyle, padding: 18 }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
                {concepts.map((concept) => {
                  const selected = concept.id === selectedConceptId
                  return (
                    <button
                      key={concept.id}
                      type="button"
                      onClick={() => setSelectedConceptId(concept.id)}
                      aria-pressed={selected}
                      style={{
                        minHeight: 118,
                        borderRadius: 18,
                        border: selected ? '1px solid rgba(201, 185, 255, 0.82)' : '1px solid rgba(220, 215, 255, 0.13)',
                        background: selected ? 'rgba(135, 106, 235, 0.18)' : 'rgba(255, 255, 255, 0.025)',
                        color: brightText,
                        cursor: 'pointer',
                        padding: 18,
                        textAlign: 'left',
                      }}
                    >
                      <span style={{ display: 'block', color: selected ? '#c9b9ff' : '#9894a7', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Concept</span>
                      <strong style={{ display: 'block', marginTop: 10, fontSize: '1.05rem' }}>{concept.label}</strong>
                    </button>
                  )
                })}
              </div>
            </div>

            <aside style={{ ...panelStyle, padding: 28 }} aria-live="polite">
              <span style={{ color: '#c9b9ff', fontSize: 12, letterSpacing: '0.11em', textTransform: 'uppercase' }}>Selected concept</span>
              <h3 style={{ color: brightText, fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '2rem', fontWeight: 400, margin: '10px 0 12px' }}>{selectedConcept.label}</h3>
              <p style={{ color: mutedText, lineHeight: 1.7, margin: 0 }}>{selectedConcept.description}</p>
              <div style={{ borderTop: '1px solid rgba(220, 215, 255, 0.12)', marginTop: 22, paddingTop: 18 }}>
                <span style={{ color: '#c9b9ff', fontSize: 12, letterSpacing: '0.11em', textTransform: 'uppercase' }}>Related terms</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
                  {selectedConcept.relations.map((relation) => (
                    <span key={relation} className="badge-tag">{relation}</span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section aria-labelledby="protocol-heading" style={{ marginTop: 86 }}>
          <span className="overline">03 — Research protocol</span>
          <h2 id="protocol-heading" style={{ color: brightText, fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '2.3rem', fontWeight: 400, marginTop: 12 }}>
            A disciplined way to move from a system to a philosophical judgment.
          </h2>
          <div style={{ ...panelStyle, padding: 18, marginTop: 24 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(230px, 0.8fr) minmax(0, 1.2fr)', gap: 20 }}>
              <div style={{ display: 'grid', gap: 8 }}>
                {protocol.map((step, index) => {
                  const selected = index === protocolStep
                  return (
                    <button
                      key={step.title}
                      type="button"
                      onClick={() => setProtocolStep(index)}
                      aria-pressed={selected}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        border: selected ? '1px solid rgba(201, 185, 255, 0.7)' : '1px solid transparent',
                        background: selected ? 'rgba(135, 106, 235, 0.17)' : 'transparent',
                        color: selected ? brightText : mutedText,
                        cursor: 'pointer',
                        borderRadius: 14,
                        padding: '13px 14px',
                        textAlign: 'left',
                      }}
                    >
                      <span style={{ color: '#c9b9ff', fontVariantNumeric: 'tabular-nums', fontSize: 12 }}>0{index + 1}</span>
                      <span style={{ fontSize: 14, fontWeight: 600 }}>{step.title}</span>
                    </button>
                  )
                })}
              </div>
              <div style={{ borderLeft: '1px solid rgba(220, 215, 255, 0.12)', padding: '18px 8px 18px 28px', minHeight: 210 }} aria-live="polite">
                <span style={{ color: '#c9b9ff', fontSize: 12, letterSpacing: '0.11em', textTransform: 'uppercase' }}>Step {protocolStep + 1} of {protocol.length}</span>
                <h3 style={{ color: brightText, fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '2rem', fontWeight: 400, margin: '12px 0' }}>{protocol[protocolStep].title}</h3>
                <p style={{ color: mutedText, maxWidth: 510, lineHeight: 1.75, margin: 0 }}>{protocol[protocolStep].body}</p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="reading-desk-heading" style={{ marginTop: 86 }}>
          <span className="overline">04 — Reading desk</span>
          <h2 id="reading-desk-heading" style={{ color: brightText, fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '2.3rem', fontWeight: 400, marginTop: 12 }}>
            Entry points into the research programme.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(245px, 1fr))', gap: 14, marginTop: 24 }}>
            {featuredReadings.map((reading) => (
              <a
                key={reading.title}
                href={reading.href}
                target="_blank"
                rel="noreferrer"
                style={{ ...panelStyle, padding: 24, color: brightText, textDecoration: 'none', display: 'block' }}
              >
                <span style={{ color: '#c9b9ff', fontSize: 12, letterSpacing: '0.11em', textTransform: 'uppercase' }}>{reading.label}</span>
                <strong style={{ display: 'block', fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '1.45rem', fontWeight: 400, lineHeight: 1.12, marginTop: 14 }}>{reading.title}</strong>
                <span style={{ display: 'block', color: mutedText, fontSize: 14, marginTop: 24 }}>Read preprint ↗</span>
              </a>
            ))}
          </div>
        </section>

        <section style={{ ...panelStyle, padding: '34px clamp(24px, 5vw, 48px)', marginTop: 86, display: 'grid', gridTemplateColumns: 'minmax(0, 1.15fr) minmax(220px, 0.85fr)', gap: 28, alignItems: 'center' }}>
          <div>
            <span className="overline">Laboratory principle</span>
            <h2 style={{ color: brightText, fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '2.2rem', fontWeight: 400, lineHeight: 1.05, margin: '12px 0' }}>
              The right answer is not enough without the right conditions for giving it.
            </h2>
            <p style={{ color: mutedText, lineHeight: 1.7, margin: 0 }}>
              The Laboratory remains open to collaboration, critique, and revision. Its purpose is to make philosophical assumptions visible before they harden into product defaults or institutional decisions.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="/research" className="accent-link" style={{ fontSize: 14 }}>Research papers →</a>
            <a href="/articles" className="accent-link" style={{ fontSize: 14 }}>Articles →</a>
            <a href="/contact" className="accent-link" style={{ fontSize: 14 }}>Contact →</a>
          </div>
        </section>
      </div>
    </main>
  )
}
