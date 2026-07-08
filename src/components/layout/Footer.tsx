"use client";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="tr-footer__menu-link">
      <span>{children}</span>
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="tr-footer">
      <div className="tr-footer__inner">
        <div className="tr-footer__contact">
          <h3 className="tr-footer__title">Traceremove</h3>
          <p className="tr-footer__tagline">
            Structured tools and managed workflows to identify, monitor, and resolve online data exposure for
            businesses and agency partners worldwide.
          </p>
          <p className="tr-footer__hotline">
            TRACEREMOVE LLC
            <br />
            750 Manhattan Ave
            <br />
            Brooklyn, NY 11222, USA
            <br />
            support@traceremove.com
          </p>
        </div>

        <div className="tr-footer__details">
          <div className="tr-footer__detail">
            <h3>Services</h3>
            <ul>
              <li>
                <FooterLink href="#">Monitoring & Alerts</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Workflow Credits</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Managed Programmes</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Cybersecurity Module</FooterLink>
              </li>
            </ul>
          </div>

          <div className="tr-footer__detail">
            <h3>Partners</h3>
            <ul>
              <li>
                <FooterLink href="#">Partner Overview</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Silver Gold Platinum</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Apply as Partner</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Partner Portal</FooterLink>
              </li>
            </ul>
          </div>

          <div className="tr-footer__detail">
            <h3>Company</h3>
            <ul>
              <li>
                <FooterLink href="#">About</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Case Studies</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Trust Center</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Blog</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Contact</FooterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="tr-footer__rights">
        © 2025 TraceRemove LLC · Privacy Policy · Terms of Service · Refund Policy
        <br />
        New York, NY · Serving clients globally
      </div>
    </footer>
  )
}
