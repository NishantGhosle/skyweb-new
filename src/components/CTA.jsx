export default function CTA() {
  return (
    <section
      id="contact"
      style={{
        padding: '110px 0 120px',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="container">
        <div className="cta-shell">
          {/* Background effects */}
          <div className="cta-grid" />

          <div className="cta-glow cta-glow-left" />
          <div className="cta-glow cta-glow-right" />

          {/* Top label */}
          <div className="cta-eyebrow">
            <span className="cta-dot" />
            Start a Conversation
          </div>

          <h2>
            Have a product to build?
            <br />
            <span>Let's make it real.</span>
          </h2>

          <p>
            Tell us what you're trying to build, improve or automate.
            We'll help you turn the idea into a practical technical plan
            and identify the right next step.
          </p>

          {/* CTAs */}
          <div className="cta-actions">
            <a href="#contact-form" className="btn btn-primary">
              Start a Project
              <span className="arrow">→</span>
            </a>

            <a href="mailto:hello@example.com" className="btn btn-secondary">
              Email Us
              <span style={{ fontSize: 15 }}>↗</span>
            </a>
          </div>

          {/* Trust points */}
          <div className="cta-trust">
            <div>
              <span className="trust-icon">✓</span>
              <span>Tell us about your idea</span>
            </div>

            <div>
              <span className="trust-icon">✓</span>
              <span>Get a clear technical direction</span>
            </div>

            <div>
              <span className="trust-icon">✓</span>
              <span>No obligation to start</span>
            </div>
          </div>

          {/* Technical signal */}
          <div className="cta-system">
            <div className="system-line" />

            <span>SOFTWARE ENGINEERING</span>
            <span className="system-separator">/</span>
            <span>AI</span>
            <span className="system-separator">/</span>
            <span>CLOUD</span>

            <div className="system-status">
              <i />
              AVAILABLE FOR NEW PROJECTS
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cta-shell {
          position: relative;
          overflow: hidden;
          text-align: center;
          padding: clamp(55px, 8vw, 95px) 30px 30px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.1);
          background:
            radial-gradient(
              70% 100% at 50% 0%,
              rgba(99,102,241,0.16),
              transparent 65%
            ),
            radial-gradient(
              50% 80% at 0% 100%,
              rgba(34,211,238,0.07),
              transparent 70%
            ),
            #0b0d11;
          box-shadow:
            0 35px 100px rgba(0,0,0,0.28),
            inset 0 1px rgba(255,255,255,0.04);
        }

        .cta-grid {
          position: absolute;
          inset: 0;
          opacity: 0.3;
          background-image:
            linear-gradient(
              rgba(255,255,255,0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.035) 1px,
              transparent 1px
            );
          background-size: 34px 34px;
          mask-image: linear-gradient(
            to bottom,
            black,
            transparent 75%
          );
          pointer-events: none;
        }

        .cta-glow {
          position: absolute;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }

        .cta-glow-left {
          left: -180px;
          bottom: -150px;
          background: rgba(99,102,241,0.16);
        }

        .cta-glow-right {
          right: -180px;
          top: -150px;
          background: rgba(34,211,238,0.10);
        }

        .cta-eyebrow {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent-cyan);
        }

        .cta-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 14px rgba(103,232,249,0.7);
        }

        .cta-shell h2 {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          font-size: clamp(34px, 5vw, 60px);
          line-height: 1.04;
          letter-spacing: -0.045em;
          font-weight: 800;
        }

        .cta-shell h2 span {
          background:
            linear-gradient(
              90deg,
              var(--accent),
              var(--accent-cyan)
            );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cta-shell > p {
          position: relative;
          max-width: 570px;
          margin: 22px auto 0;
          font-size: 15.5px;
          line-height: 1.75;
          color: var(--text-secondary);
        }

        .cta-actions {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 32px;
        }

        .cta-actions .btn {
          min-width: 150px;
        }

        .cta-trust {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 18px 28px;
          margin-top: 28px;
          color: var(--text-tertiary);
          font-size: 11.5px;
        }

        .cta-trust > div {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .trust-icon {
          width: 17px;
          height: 17px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #6ee7b7;
          background: rgba(110,231,183,0.08);
          border: 1px solid rgba(110,231,183,0.15);
          font-size: 9px;
          font-weight: 700;
        }

        .cta-system {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 58px;
          padding-top: 18px;
          color: rgba(161,161,170,0.55);
          font-size: 8.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
        }

        .system-line {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 1px;
          background: rgba(255,255,255,0.06);
        }

        .system-separator {
          color: rgba(255,255,255,0.16);
        }

        .system-status {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-left: 8px;
          color: rgba(110,231,183,0.65);
        }

        .system-status i {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #6ee7b7;
          box-shadow: 0 0 8px rgba(110,231,183,0.5);
        }

        @media (max-width: 600px) {
          .cta-shell {
            padding-left: 20px;
            padding-right: 20px;
            border-radius: 15px;
          }

          .cta-shell h2 {
            font-size: clamp(32px, 9vw, 44px);
          }

          .cta-shell > p {
            font-size: 14px;
          }

          .cta-actions {
            flex-direction: column;
          }

          .cta-actions .btn {
            width: 100%;
          }

          .cta-trust {
            flex-direction: column;
            align-items: flex-start;
            width: fit-content;
            margin-left: auto;
            margin-right: auto;
          }

          .cta-system {
            font-size: 7.5px;
          }

          .system-status {
            width: 100%;
            justify-content: center;
            margin-left: 0;
            margin-top: 5px;
          }
        }
      `}</style>
    </section>
  )
}
