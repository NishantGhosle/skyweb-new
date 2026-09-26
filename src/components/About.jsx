import { useReveal } from '../hooks/useReveal.js'

const PRINCIPLES = [
  {
    n: '01',
    title: 'Business first',
    desc: 'We start with the problem, not the technology.',
  },
  {
    n: '02',
    title: 'Engineering depth',
    desc: 'We care about architecture, reliability and maintainability.',
  },
  {
    n: '03',
    title: 'Long-term thinking',
    desc: 'We build systems that can evolve as your business grows.',
  },
]

export default function About() {
  const ref = useReveal()

  return (
    <section
      id="about"
      style={{
        padding: '110px 0',
        borderTop: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 600,
          height: 600,
          right: -300,
          top: 40,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(99,102,241,0.08), transparent 68%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container about-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 0.9fr',
          gap: 72,
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {/* Content */}
        <div ref={ref} className="reveal">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 17,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent-cyan)',
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: 'var(--accent-cyan)',
                boxShadow: '0 0 14px var(--accent-cyan)',
              }}
            />
            About Us
          </div>

          <h2
            className="section-heading"
            style={{
              maxWidth: 650,
              marginBottom: 22,
            }}
          >
            An engineering partner for{' '}
            <span
              style={{
                background:
                  'linear-gradient(90deg, var(--accent), var(--accent-cyan))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              ambitious products.
            </span>
          </h2>

          <p
            style={{
              maxWidth: 610,
              fontSize: 16,
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
              margin: 0,
            }}
          >
            We are a software engineering company helping startups and
            growing businesses design, build and evolve modern digital
            products.
          </p>

          <p
            style={{
              maxWidth: 610,
              fontSize: 16,
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
              marginTop: 16,
            }}
          >
            Our work spans custom software, SaaS platforms, AI-powered
            applications, backend systems and cloud infrastructure. We
            combine product thinking with strong engineering foundations
            to turn complex ideas into software that works in the real
            world.
          </p>

          {/* Principles */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 10,
              marginTop: 34,
              maxWidth: 700,
            }}
            className="about-principles"
          >
            {PRINCIPLES.map((item) => (
              <div
                key={item.n}
                className="about-principle"
              >
                <span className="about-principle-number">
                  {item.n}
                </span>

                <strong>{item.title}</strong>

                <span>{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="about-visual">
          <div className="about-visual-grid" />

          {/* Top label */}
          <div className="about-visual-header">
            <span>ENGINEERING SYSTEM</span>

            <span className="about-status">
              <i />
              ACTIVE
            </span>
          </div>

          {/* Architecture visual */}
          <div className="architecture">
            <div className="architecture-line line-one" />
            <div className="architecture-line line-two" />
            <div className="architecture-line line-three" />

            <div className="arch-node node-business">
              <span className="node-icon">01</span>
              <div>
                <strong>Business</strong>
                <small>Problem</small>
              </div>
            </div>

            <div className="arch-node node-product">
              <span className="node-icon">02</span>
              <div>
                <strong>Product</strong>
                <small>Experience</small>
              </div>
            </div>

            <div className="arch-core">
              <div className="core-glow" />

              <div className="core-inner">
                <span>FORGE</span>
                <strong>ENGINEERING</strong>
              </div>
            </div>

            <div className="arch-node node-ai">
              <span className="node-icon">03</span>
              <div>
                <strong>AI</strong>
                <small>Intelligence</small>
              </div>
            </div>

            <div className="arch-node node-cloud">
              <span className="node-icon">04</span>
              <div>
                <strong>Cloud</strong>
                <small>Infrastructure</small>
              </div>
            </div>
          </div>

          {/* Bottom metrics */}
          <div className="about-visual-footer">
            <div>
              <span>APPROACH</span>
              <strong>Product + Engineering</strong>
            </div>

            <div>
              <span>FOCUS</span>
              <strong>Built for production</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Closing statement */}
      <div
        className="container"
        style={{
          marginTop: 70,
          position: 'relative',
        }}
      >
        <div className="about-statement">
          <div>
            <span className="statement-label">WHAT WE BELIEVE</span>

            <h3>
              Great software is not just{' '}
              <span>well engineered.</span>
              <br />
              It solves the right problem.
            </h3>
          </div>

          <a href="#contact" className="btn btn-secondary">
            Work With Us
            <span className="arrow">→</span>
          </a>
        </div>
      </div>

      <style>{`
        .about-principle {
          padding: 16px;
          min-height: 126px;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 10px;
          background: rgba(255,255,255,0.02);
          display: flex;
          flex-direction: column;
          transition:
            transform 200ms ease,
            border-color 200ms ease,
            background 200ms ease;
        }

        .about-principle:hover {
          transform: translateY(-3px);
          border-color: rgba(103,232,249,0.18);
          background: rgba(255,255,255,0.035);
        }

        .about-principle-number {
          font-size: 10px;
          color: var(--accent-cyan);
          font-weight: 700;
          letter-spacing: 0.08em;
          margin-bottom: 12px;
        }

        .about-principle strong {
          font-size: 13px;
          margin-bottom: 7px;
        }

        .about-principle > span:last-child {
          color: var(--text-tertiary);
          font-size: 11.5px;
          line-height: 1.5;
        }

        .about-visual {
          min-height: 470px;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(255,255,255,0.09);
          background:
            radial-gradient(
              circle at 50% 48%,
              rgba(99,102,241,0.10),
              transparent 42%
            ),
            #0b0d11;
          position: relative;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,0.2);
        }

        .about-visual-grid {
          position: absolute;
          inset: 0;
          opacity: 0.32;
          background-image:
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 32px 32px;
          mask-image: radial-gradient(circle at center, black, transparent 78%);
        }

        .about-visual-header {
          position: absolute;
          top: 20px;
          left: 22px;
          right: 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-tertiary);
        }

        .about-status {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #6ee7b7;
        }

        .about-status i {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #6ee7b7;
          box-shadow: 0 0 10px rgba(110,231,183,0.7);
        }

        .architecture {
          position: absolute;
          inset: 75px 28px 65px;
        }

        .architecture-line {
          position: absolute;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(103,232,249,0.35),
            transparent
          );
          transform-origin: left center;
        }

        .line-one {
          width: 125px;
          top: 33%;
          left: 17%;
          transform: rotate(25deg);
        }

        .line-two {
          width: 120px;
          top: 33%;
          right: 16%;
          transform: rotate(-25deg);
        }

        .line-three {
          width: 120px;
          bottom: 31%;
          left: 17%;
          transform: rotate(-25deg);
        }

        .arch-node {
          position: absolute;
          width: 116px;
          min-height: 54px;
          padding: 9px;
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 9px;
          background: rgba(14,16,21,0.92);
          backdrop-filter: blur(10px);
          z-index: 2;
        }

        .arch-node strong {
          display: block;
          font-size: 10.5px;
          margin-bottom: 3px;
        }

        .arch-node small {
          display: block;
          font-size: 9px;
          color: var(--text-tertiary);
        }

        .node-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 25px;
          height: 25px;
          flex-shrink: 0;
          border-radius: 6px;
          color: var(--accent-cyan);
          background: rgba(103,232,249,0.07);
          border: 1px solid rgba(103,232,249,0.12);
          font-size: 8px;
          font-weight: 700;
        }

        .node-business {
          left: 0;
          top: 21%;
        }

        .node-product {
          left: 0;
          bottom: 18%;
        }

        .node-ai {
          right: 0;
          top: 21%;
        }

        .node-cloud {
          right: 0;
          bottom: 18%;
        }

        .arch-core {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 130px;
          height: 130px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(
              circle,
              rgba(99,102,241,0.22),
              rgba(99,102,241,0.04) 55%,
              transparent 72%
            );
          border: 1px solid rgba(103,232,249,0.25);
          box-shadow:
            0 0 45px rgba(99,102,241,0.16),
            inset 0 0 35px rgba(103,232,249,0.05);
          z-index: 3;
        }

        .core-glow {
          position: absolute;
          inset: 13px;
          border-radius: 50%;
          border: 1px dashed rgba(103,232,249,0.22);
          animation: about-spin 18s linear infinite;
        }

        .core-inner {
          position: relative;
          text-align: center;
        }

        .core-inner span {
          display: block;
          font-size: 9px;
          color: var(--accent-cyan);
          letter-spacing: 0.12em;
          margin-bottom: 5px;
        }

        .core-inner strong {
          display: block;
          font-size: 12px;
          letter-spacing: 0.03em;
        }

        .about-visual-footer {
          position: absolute;
          left: 22px;
          right: 22px;
          bottom: 20px;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding-top: 15px;
          border-top: 1px solid rgba(255,255,255,0.07);
        }

        .about-visual-footer div {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .about-visual-footer span {
          font-size: 8.5px;
          color: var(--text-tertiary);
          letter-spacing: 0.1em;
        }

        .about-visual-footer strong {
          font-size: 10.5px;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .about-statement {
          padding: 30px 32px;
          border-radius: 14px;
          border: 1px solid var(--border);
          background:
            linear-gradient(
              135deg,
              rgba(99,102,241,0.07),
              rgba(255,255,255,0.02)
            );
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .statement-label {
          display: block;
          margin-bottom: 10px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--accent-cyan);
        }

        .about-statement h3 {
          margin: 0;
          font-size: clamp(20px, 3vw, 29px);
          line-height: 1.25;
          letter-spacing: -0.02em;
        }

        .about-statement h3 span {
          color: var(--accent-cyan);
        }

        @keyframes about-spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          .about-visual {
            min-height: 420px;
          }

          .about-statement {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 600px) {
          .about-principles {
            grid-template-columns: 1fr !important;
          }

          .about-visual {
            min-height: 380px;
          }

          .architecture {
            inset: 70px 16px 60px;
          }

          .arch-node {
            width: 100px;
          }

          .arch-core {
            width: 105px;
            height: 105px;
          }

          .line-one,
          .line-two,
          .line-three {
            width: 80px;
          }

          .about-visual-footer {
            flex-direction: column;
            gap: 9px;
          }
        }
      `}</style>
    </section>
  )
}
