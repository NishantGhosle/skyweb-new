const COLUMNS = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Work', href: '#work' },
      { label: 'Process', href: '#process' },
      { label: 'Contact', href: '#contact-form' },
    ],
  },
  {
    title: 'Capabilities',
    links: [
      { label: 'Custom Software', href: '#services' },
      { label: 'AI & GenAI', href: '#services' },
      { label: 'SaaS Development', href: '#services' },
      { label: 'Web & Mobile', href: '#services' },
      { label: 'Cloud & DevOps', href: '#services' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Case Studies', href: '#work' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Start a Project', href: '#contact-form' },
    ],
  },
]

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '70px 0 30px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 500,
          height: 300,
          right: -250,
          top: -150,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(99,102,241,0.06), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
        }}
      >
        {/* Main footer */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.55fr repeat(3, 1fr)',
            gap: 50,
          }}
        >
          {/* Brand */}
          <div>
            <a
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                color: 'var(--text-primary)',
                textDecoration: 'none',
                marginBottom: 17,
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 3,
                  background:
                    'linear-gradient(135deg, var(--accent), var(--accent-cyan))',
                  boxShadow: '0 0 15px rgba(99,102,241,0.3)',
                }}
              />

              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 21,
                  letterSpacing: '-0.02em',
                }}
              >
                Forge
              </span>
            </a>

            <p
              style={{
                maxWidth: 310,
                margin: 0,
                fontSize: 14,
                lineHeight: 1.7,
                color: 'var(--text-tertiary)',
              }}
            >
              Software engineering for ambitious businesses — from
              custom products and SaaS platforms to AI-powered systems
              and cloud infrastructure.
            </p>

          </div>

          {/* Columns */}
          {COLUMNS.map((column) => (
            <div key={column.title}>
              <div
                style={{
                  marginBottom: 17,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.09em',
                  textTransform: 'uppercase',
                  color: 'var(--text-primary)',
                }}
              >
                {column.title}
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 12,
                }}
              >
                {column.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="footer-link"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          className="footer-bottom"
          style={{
            marginTop: 30,
            paddingTop: 23,
            borderTop: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 20,
            flexWrap: 'wrap',
            fontSize: 11.5,
            color: 'var(--text-tertiary)',
          }}
        >
          <div>
            © {new Date().getFullYear()} Forge. All rights reserved.
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              flexWrap: 'wrap',
            }}
          >
            <a href="#" className="footer-bottom-link">
              Privacy Policy
            </a>

            <a href="#" className="footer-bottom-link">
              Terms
            </a>

            <a href="#" className="footer-bottom-link">
              LinkedIn
            </a>

            <a href="#" className="footer-bottom-link">
              GitHub
            </a>
          </div>
        </div>

      </div>

      <style>{`
        .footer-link {
          color: var(--text-tertiary);
          font-size: 13px;
          text-decoration: none;
          transition:
            color 180ms ease,
            transform 180ms ease;
        }

        .footer-link:hover {
          color: var(--text-primary);
          transform: translateX(2px);
        }

        .footer-social {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.02);
          color: var(--text-tertiary);
          font-size: 9px;
          font-weight: 700;
          text-decoration: none;
          transition:
            color 180ms ease,
            border-color 180ms ease,
            background 180ms ease;
        }

        .footer-social:hover {
          color: var(--text-primary);
          border-color: rgba(103,232,249,0.2);
          background: rgba(103,232,249,0.04);
        }

        .footer-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 13px;
          border-radius: 7px;
          color: var(--text-primary);
          background: rgba(255,255,255,0.06);
          border: 1px solid var(--border-strong);
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          transition:
            background 180ms ease,
            border-color 180ms ease,
            gap 180ms ease;
        }

        .footer-cta:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(103,232,249,0.2);
          gap: 11px;
        }

        .footer-bottom-link {
          color: var(--text-tertiary);
          text-decoration: none;
          transition: color 180ms ease;
        }

        .footer-bottom-link:hover {
          color: var(--text-primary);
        }

        @media (max-width: 850px) {
          .footer-grid {
            grid-template-columns: 1.4fr 1fr 1fr !important;
          }

          .footer-grid > div:first-child {
            grid-column: 1 / -1;
            margin-bottom: 12px;
          }
        }

        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 34px !important;
          }

          .footer-grid > div:first-child {
            grid-column: 1 / -1;
          }

          .footer-contact {
            flex-direction: column;
            align-items: flex-start !important;
          }

          .footer-bottom {
            align-items: flex-start !important;
            flex-direction: column;
          }
        }

        @media (max-width: 390px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}

function SocialLink({ label, href }) {
  return (
    <a
      href={href}
      className="footer-social"
      aria-label={label}
    >
      {label}
    </a>
  )
}
