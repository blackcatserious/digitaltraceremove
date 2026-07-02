import { useMemo, useState } from 'react'

type Lens = {
  id: string
  label: string
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
    question: 'When should an AI-generated claim be treated as a reason to believe something?',
    description: 'Model outputs can be fluent, useful, and still poorly justified. This lens traces the conditions under which an answer deserves confidence rather than merely attention.',
    investigate: [
      'What process produced the claim, and what evidence can it be traced back to?',
      'How does performance change under novelty, ambiguity, or adversarial framing?',
      'Where should uncertainty be stated instead of compressed into a confident answer?',
    ],
    stake: 'A system that sounds certain without warranted reliability can distort human judgment at scale.',
    reading: 'Epistemic Risk Surfaces in Large Language Models',
    href: 'https://philarchive.org/rec/ZIGERS',
  },
  {
    id: 'meaning',
    label: 'Meaning & grounding',
    question: 'What separates linguistic competence from understanding?',
    description: 'A model may reproduce the form of reference without a stable relation to what its words are about. This lens examines whether apparent meaning is grounded, borrowed, or simulated.',
    investigate: [
      'Does the system preserve reference when context, speaker, or domain changes?',
      'Which parts of an answer depend on social, embodied, or institutional background knowledge?',
      'Can users distinguish semantic fluency from warranted interpretation?',
    ],
    stake: 'Treating fluent text as understanding risks confusing prediction with knowledge and representation with reference.',
    reading: 'Linguistic Symbolism and Meaning Compression in Machine Learning',
    href: 'https://philarchive.org/rec/ZIGLS',
  },
  {
    id: 'dignity',
    label: 'Dignity & contestability',
    question: 'What must remain open to challenge when AI shapes a consequential decision?',
    description: 'Accuracy alone cannot legitimise systems that classify, rank, recommend, or exclude people. This lens identifies protections that preserve agency, recognition, and recourse.',
    investigate: [
      'Can an affected person understand, challenge, and appeal the decision?',
      'Which human responsibilities are being displaced, obscured, or made irreversible?',
      'Does the surrounding institution provide meaningful remedy rather than a decorative explanation?',
    ],
    stake: 'Human dignity requires more than fair averages: it requires a place for refusal, explanation, and redress.',
    reading: 'Human Dignity Constraints for Autonomous Decision Systems',
    href: 'https://philarchive.org/rec/ZIGHDC',
  },
]

const concepts: Concept[] = [
  { id: 'reliability', label: 'Reliability', description: 'A claim-forming process is reliable when it tends to produce true or well-supported outputs under the relevant conditions.', relations: ['Justification', 'Uncertainty', 'Process'] },
  { id: 'testimony', label: 'Machine testimony', description: 'The question of whether an AI output can function as testimony, and what human or institutional warrant must accompany it.', relations: ['Reliability', 'Authority', 'Accountability'] },
  { id: 'grounding', label: 'Grounding', description: 'The relation between symbols, concepts, and the world they are taken to represent.', relations: ['Meaning', 'Reference', 'Context'] },
  { id: 'agency', label: 'Agency', description: 'The capacity to act, decide, and remain an author of one’s life in systems that mediate opportunities and outcomes.', relations: ['Dignity', 'Choice', 'Delegation'] },
  { id: 'dignity', label: 'Dignity', description: 'The requirement to treat people as ends in themselves rather than inputs to an optimisation pipeline.', relations: ['Recognition', 'Agency', 'Respect'] },
  { id: 'contestability', label: 'Contestability', description: 'The practical ability to question a decision, obtain reasons, introduce correction, and seek redress.', relations: ['Appeal', 'Transparency', 'Remedy'] },
]

const protocol = [
  ['Frame the decision', 'Name the decision, affected people, institutional setting, and consequences of a wrong output.'],
  ['Map the claim', 'Specify what the system is asserting, predicting, recommending, or deciding—and what evidence it relies on.'],
  ['Test the conditions', 'Identify when the system is reliable, when it fails, and which uncertainty must remain visible to the user.'],
  ['Apply normative constraints', 'Ask what is owed to affected people: explanation, consent, review, appeal, or a human decision-maker.'],
  ['State residual risk', 'Record what remains unknown and who is responsible for monitoring, correction, and remedy.'],
]

const readings = [
  ['Epistemic Risk Surfaces in Large Language Models', 'Epistemology', 'https://philarchive.org/rec/ZIGERS'],
  ['Linguistic Symbolism and Meaning Compression in Machine Learning', 'Philosophy of language', 'https://philarchive.org/rec/ZIGLS'],
  ['Human Dignity Constraints for Autonomous Decision Systems', 'Ethics & governance', 'https://philarchive.org/rec/ZIGHDC'],
]

const colors = { surface: 'rgba(20, 18, 31, 0.84)', line: 'rgba(220, 215, 255, 0.14)', text: '#f1eff8', muted: '#aaa8b5', accent: '#c9b9ff' }
const panel = { border: `1px solid ${colors.line}`, borderRadius: 24, background: 'linear-gradient(135deg, rgba(28,25,39,.9), rgba(18,17,27,.8))', boxShadow: '0 24px 60px rgba(0,0,0,.2)' }

export default function Laboratory() {
  const [lensId, setLensId] = useState(lenses[0].id)
  const [conceptId, setConceptId] = useState(concepts[0].id)
  const [step, setStep] = useState(0)
  const lens = useMemo(() => lenses.find((item) => item.id === lensId) ?? lenses[0], [lensId])
  const concept = useMemo(() => concepts.find((item) => item.id === conceptId) ?? concepts[0], [conceptId])
  const tag = { border: `1px solid ${colors.line}`, color: colors.accent, borderRadius: 999, padding: '6px 10px', fontSize: 12 }

  return (
    <main style={{ minHeight: '100vh', background: '#100f18', color: colors.text }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '42px 24px 88px' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 18, marginBottom: 72 }}>
          <a href="/" style={{ color: colors.text, fontFamily: "Georgia, serif", fontSize: 23, textDecoration: 'none' }}>Traceremove</a>
          <a href="/research" style={{ color: colors.muted, fontSize: 14, textDecoration: 'none' }}>Research papers →</a>
        </nav>
        <section style={{ maxWidth: 850 }}>
          <span style={{ color: colors.accent, fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase' }}>AI philosophy laboratory</span>
          <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: 'clamp(3rem, 7vw, 5.8rem)', letterSpacing: '-.05em', lineHeight: .94, margin: '18px 0 24px' }}>
            What should an AI system be allowed to claim, decide, or obscure?
          </h1>
          <p style={{ maxWidth: 720, color: colors.muted, fontSize: '1.08rem', lineHeight: 1.75 }}>
            The Laboratory turns philosophical questions about AI into inspectable research paths. It is not a compliance score or an automated verdict. It is a working method for examining knowledge claims, meaning, power, and responsibility in systems that shape human life.
          </p>
        </section>

        <section style={{ marginTop: 74 }}>
          <span style={{ color: colors.accent, fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase' }}>01 — Inquiry lenses</span>
          <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: '2.45rem', margin: '12px 0 8px' }}>Begin with the right question.</h2>
          <p style={{ color: colors.muted, lineHeight: 1.65, maxWidth: 640 }}>Choose a lens to see which questions, risks, and readings become relevant.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 12, marginTop: 22 }}>
            {lenses.map((item) => {
              const active = item.id === lensId
              return <button key={item.id} type="button" onClick={() => setLensId(item.id)} aria-pressed={active} style={{ ...panel, outline: active ? `2px solid ${colors.accent}` : 'none', cursor: 'pointer', color: colors.text, textAlign: 'left', padding: 22 }}>
                <span style={{ display: 'block', color: active ? colors.accent : colors.muted, fontSize: 12, textTransform: 'uppercase', letterSpacing: '.1em' }}>Lens</span>
                <strong style={{ display: 'block', fontSize: '1.08rem', marginTop: 9 }}>{item.label}</strong>
                <span style={{ display: 'block', color: colors.muted, fontSize: 14, lineHeight: 1.55, marginTop: 9 }}>{item.question}</span>
              </button>
            })}
          </div>
          <div style={{ ...panel, padding: '30px clamp(22px,5vw,46px)', marginTop: 16 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.15fr) minmax(235px,.85fr)', gap: 38 }}>
              <div>
                <span style={{ color: colors.accent, fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase' }}>{lens.label}</span>
                <h3 style={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: '2rem', lineHeight: 1.05, margin: '12px 0 14px' }}>{lens.question}</h3>
                <p style={{ color: colors.muted, lineHeight: 1.72, margin: 0 }}>{lens.description}</p>
              </div>
              <div style={{ borderLeft: `1px solid ${colors.line}`, paddingLeft: 28 }}>
                <span style={{ color: colors.accent, fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase' }}>Normative stake</span>
                <p style={{ lineHeight: 1.65, margin: '10px 0 22px' }}>{lens.stake}</p>
                <a href={lens.href} target="_blank" rel="noreferrer" style={{ color: colors.accent, fontSize: 14 }}>Read: {lens.reading} ↗</a>
              </div>
            </div>
            <div style={{ borderTop: `1px solid ${colors.line}`, marginTop: 28, paddingTop: 22 }}>
              <span style={{ color: colors.accent, fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase' }}>What to investigate</span>
              <ol style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 14, padding: 0, listStyle: 'none', margin: '16px 0 0' }}>
                {lens.investigate.map((item, index) => <li key={item} style={{ color: colors.muted, lineHeight: 1.62, fontSize: 14 }}><span style={{ color: colors.accent, marginRight: 8 }}>0{index + 1}</span>{item}</li>)}
              </ol>
            </div>
          </div>
        </section>

        <section style={{ marginTop: 86 }}>
          <span style={{ color: colors.accent, fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase' }}>02 — Concept map</span>
          <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: '2.45rem', margin: '12px 0 8px' }}>Follow the concepts that structure the research.</h2>
          <p style={{ color: colors.muted, lineHeight: 1.7, maxWidth: 700 }}>Select a concept to reveal its working definition and the questions it connects to. The map remains open to revision as the research develops.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.15fr) minmax(260px,.85fr)', gap: 18, marginTop: 24 }}>
            <div style={{ ...panel, padding: 18 }}><div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 12 }}>
              {concepts.map((item) => { const active = item.id === conceptId; return <button key={item.id} type="button" onClick={() => setConceptId(item.id)} aria-pressed={active} style={{ minHeight: 118, borderRadius: 18, border: active ? `1px solid ${colors.accent}` : `1px solid ${colors.line}`, background: active ? 'rgba(135,106,235,.18)' : 'rgba(255,255,255,.025)', color: colors.text, cursor: 'pointer', padding: 18, textAlign: 'left' }}><span style={{ display: 'block', color: active ? colors.accent : colors.muted, fontSize: 12, textTransform: 'uppercase', letterSpacing: '.1em' }}>Concept</span><strong style={{ display: 'block', marginTop: 10, fontSize: '1.05rem' }}>{item.label}</strong></button> })}
            </div></div>
            <aside style={{ ...panel, padding: 28 }} aria-live="polite"><span style={{ color: colors.accent, fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase' }}>Selected concept</span><h3 style={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: '2rem', margin: '10px 0 12px' }}>{concept.label}</h3><p style={{ color: colors.muted, lineHeight: 1.72, margin: 0 }}>{concept.description}</p><div style={{ borderTop: `1px solid ${colors.line}`, marginTop: 22, paddingTop: 18 }}><span style={{ color: colors.accent, fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase' }}>Related terms</span><div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>{concept.relations.map((relation) => <span key={relation} style={tag}>{relation}</span>)}</div></div></aside>
          </div>
        </section>

        <section style={{ marginTop: 86 }}>
          <span style={{ color: colors.accent, fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase' }}>03 — Research protocol</span>
          <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: '2.45rem', margin: '12px 0 8px' }}>A disciplined route from system to philosophical judgment.</h2>
          <div style={{ ...panel, padding: 18, marginTop: 24, display: 'grid', gridTemplateColumns: 'minmax(230px,.8fr) minmax(0,1.2fr)', gap: 20 }}>
            <div style={{ display: 'grid', gap: 8 }}>{protocol.map(([title], index) => { const active = index === step; return <button key={title} type="button" onClick={() => setStep(index)} aria-pressed={active} style={{ display: 'flex', gap: 12, border: active ? `1px solid ${colors.accent}` : '1px solid transparent', background: active ? 'rgba(135,106,235,.17)' : 'transparent', color: active ? colors.text : colors.muted, cursor: 'pointer', borderRadius: 14, padding: '13px 14px', textAlign: 'left' }}><span style={{ color: colors.accent, fontSize: 12 }}>0{index + 1}</span><span style={{ fontSize: 14, fontWeight: 600 }}>{title}</span></button> })}</div>
            <div style={{ borderLeft: `1px solid ${colors.line}`, padding: '18px 8px 18px 28px', minHeight: 210 }} aria-live="polite"><span style={{ color: colors.accent, fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase' }}>Step {step + 1} of {protocol.length}</span><h3 style={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: '2rem', margin: '12px 0' }}>{protocol[step][0]}</h3><p style={{ color: colors.muted, lineHeight: 1.75, margin: 0 }}>{protocol[step][1]}</p></div>
          </div>
        </section>

        <section style={{ marginTop: 86 }}>
          <span style={{ color: colors.accent, fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase' }}>04 — Reading desk</span>
          <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: '2.45rem', margin: '12px 0 8px' }}>Entry points into the research programme.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(245px,1fr))', gap: 14, marginTop: 24 }}>{readings.map(([title, label, href]) => <a key={title} href={href} target="_blank" rel="noreferrer" style={{ ...panel, color: colors.text, textDecoration: 'none', padding: 24 }}><span style={{ color: colors.accent, fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase' }}>{label}</span><strong style={{ display: 'block', fontFamily: 'Georgia, serif', fontWeight: 400, fontSize: '1.45rem', lineHeight: 1.12, marginTop: 14 }}>{title}</strong><span style={{ display: 'block', color: colors.muted, fontSize: 14, marginTop: 24 }}>Read preprint ↗</span></a>)}</div>
        </section>

        <section style={{ ...panel, marginTop: 86, padding: '34px clamp(24px,5vw,48px)' }}>
          <span style={{ color: colors.accent, fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase' }}>Laboratory principle</span>
          <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: '2.25rem', lineHeight: 1.05, margin: '12px 0' }}>The right answer is not enough without the right conditions for giving it.</h2>
          <p style={{ color: colors.muted, lineHeight: 1.72, maxWidth: 760, margin: 0 }}>The Laboratory remains open to collaboration, critique, and revision. Its purpose is to make philosophical assumptions visible before they harden into product defaults or institutional decisions.</p>
        </section>
      </div>
    </main>
  )
}
