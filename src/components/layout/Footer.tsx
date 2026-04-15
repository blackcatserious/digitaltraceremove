"use client";
import { useState } from 'react'

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hover, setHover] = useState(false)
  return (
    <a
      href={href}
      style={{ display: 'block', color: hover ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.35)', textDecoration: 'none', padding: '4px 0', fontSize: 13 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: '#070B16', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '64px 24px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 32, marginBottom: 32 }}>
          <div>
            <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontStyle: 'italic', fontSize: '1.2rem', color: '#f0f0f3' }}>Traceremove</span>
            <p style={{ marginTop: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, fontSize: 13 }}>
              Structured tools and managed workflows to identify, monitor, and resolve online data exposure for
              businesses and agency partners worldwide.
            </p>
            <p style={{ marginTop: 14, whiteSpace: 'pre-line', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.62)', fontSize: 12, lineHeight: 1.6 }}>
              {"TRACEREMOVE LLC\n750 Manhattan Ave\nBrooklyn, NY 11222, USA\nsupport@traceremove.com"}
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.7)', marginBottom: 12 }}>Services</h4>
            <FooterLink href="/services">Service overview</FooterLink>
            <FooterLink href="/pricing">Pricing</FooterLink>
            <FooterLink href="/trust">Trust center</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </div>

          <div>
            <h4 style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.7)', marginBottom: 12 }}>Partners</h4>
            <FooterLink href="/partners">Partner overview</FooterLink>
            <FooterLink href="/partners">Silver · Gold · Platinum</FooterLink>
            <FooterLink href="/partners#partner-application">Apply as partner</FooterLink>
            <FooterLink href="/partners">Partner terms</FooterLink>
          </div>

          <div>
            <h4 style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.7)', marginBottom: 12 }}>Company</h4>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/case-studies">Case studies</FooterLink>
            <FooterLink href="/trust">Trust center</FooterLink>
            <FooterLink href="/resources">Resources</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 16, display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>
            © 2025 TraceRemove LLC · Privacy Policy · Terms of Service · Refund Policy
          </span>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, fontFamily: 'var(--font-mono)' }}>
            New York, NY · Serving clients globally
          </span>
        </div>
      </div>
    </footer>
  )
}
