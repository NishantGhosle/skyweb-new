import { useEffect, useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal.js'

const STEPS = [
  {
    n: '01',
    title: 'Discover',
    label: 'Understand the problem',
    desc:
      'We learn how your business works, who uses the product, what is slowing you down and what success should look like.',
    deliverable: 'Goals · Requirements · Scope',
  },
  {
    n: '02',
    title: 'Architect',
    label: 'Design the right foundation',
    desc:
      'We turn requirements into a practical product and technical plan covering architecture, integrations, data, AI opportunities and delivery milestones.',
    deliverable: 'Architecture · Roadmap · Technical Plan',
  },
  {
    n: '03',
    title: 'Build',
    label: 'Turn the plan into software',
    desc:
      'We develop in focused iterations, keeping you involved through regular demos, feedback cycles and measurable milestones.',
    deliverable: 'Features · APIs · AI · Integrations',
  },
  {
    n: '04',
    title: 'Launch',
    label: 'Move safely into production',
    desc:
      'We test, deploy and monitor the system with production infrastructure, security and reliability considered before release.',
    deliverable: 'Testing · CI/CD · Cloud · Monitoring',
  },
  {
    n: '05',
    title: 'Evolve',
    label: 'Keep improving after launch',
    desc:
      'Once real users start using the product, we use feedback and system data to improve performance, introduce new capabilities and support growth.',
    deliverable: 'Optimization · New Features · Scale',
  },
]

export default function Process() {
  const headRef = useReveal()
  const trackRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const node = trackRef.current
      if (!node) return

      const rect = node.getBoundingClientRect()
      const vh = window.innerHeight

      const start = vh * 0.72
      const end = vh * 0.28
      const range = rect.height - (start - end)

      const raw = (start - rect.top) / Math.max(range, 1)
      const nextProgress = Math.min(1, Math.max(0, raw))

      setProgress(nextProgress)

      const step = Math.min(
        STEPS.length - 1,
        Math.floor(nextProgress * STEPS.length),
      )

      setActiveStep(step)
    }

    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section
      id="process"
      style={{
        padding: '110px 0',
        borderTop: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 600,
          height: 600,
          left: -360,
          top: 120,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(99,102,241,0.08), transparent 68%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative' }}>
        {/* Header */}
        <div
          ref={headRef}
          className="reveal"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 40,
            marginBottom: 64,
          }}
        >
          <div style={{ maxWidth: 700 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 16,
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
              How We Work
            </div>

            <h2
              className="section-heading"
              style={{
                marginBottom: 16,
              }}
            >
              From first conversation to{' '}
              <span
                style={{
                  background:
                    'linear-gradient(90deg, var(--accent), var(--accent-cyan))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                production.
              </span>
            </h2>

            <p
              className="section-sub"
              style={{
                maxWidth: 650,
                margin: 0,
              }}
            >
              A structured engineering process designed to keep priorities
              clear, feedback fast and delivery predictable.
            </p>
          </div>

          <div
            className="process-header-note"
            style={{
              minWidth: 190,
              color: 'var(--text-tertiary)',
              fontSize: 13,
              lineHeight: 1.6,
              paddingBottom: 4,
            }}
          >
            <div
              style={{
                color: 'var(--text-secondary)',
                fontWeight: 600,
                marginBottom: 4,
              }}
            >
              Every engagement
            </div>

            Understand → Build → Measure → Improve
          </div>
        </div>

        {/* Process */}
        <div
          ref={trackRef}
          className="process-track"
          style={{
            position: 'relative',
            maxWidth: 920,
            margin: '0 auto',
          }}
        >
          {/* Base line */}
          <div className="process-line" />

          {/* Progress line */}
          <div
            className="process-progress"
            style={{
              height: `${progress * 100}%`,
            }}
          />

          {STEPS.map((step, i) => {
            const isActive = i <= activeStep
            const isCurrent = i === activeStep

            return (
              <div
                key={step.n}
                className={`process-step ${
                  isActive ? 'is-active' : ''
                } ${isCurrent ? 'is-current' : ''}`}
              >
                {/* Node */}
                <div className="process-node">
                  <span>{step.n}</span>
                </div>

                {/* Content */}
                <div className="process-content">
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      marginBottom: 8,
                    }}
                  >
                    <span className="process-label">
                      {step.label}
                    </span>

                    {isCurrent && (
                      <span className="process-live">
                        CURRENT
                      </span>
                    )}
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.desc}</p>

                  <div className="process-deliverable">
                    <span>Deliverables</span>
                    <strong>{step.deliverable}</strong>
                  </div>
                </div>

                {/* Step status */}
                <div className="process-status">
                  {isActive ? 'Complete' : 'Upcoming'}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom statement */}
        <div
          className="process-footer"
          style={{
            marginTop: 56,
            padding: '26px 28px',
            borderRadius: 14,
            border: '1px solid var(--border)',
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.035), rgba(255,255,255,0.015))',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 30,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 15,
                fontWeight: 650,
                marginBottom: 5,
              }}
            >
              No black boxes. No disappearing after handoff.
            </div>

            <p
              style={{
                margin: 0,
                color: 'var(--text-tertiary)',
                fontSize: 13.5,
              }}
            >
              You stay involved throughout the process, with clear
              milestones, regular demos and direct communication.
            </p>
          </div>

          <a href="#contact" className="btn btn-secondary">
            Talk to an Engineer
            <span className="arrow">→</span>
          </a>
        </div>
      </div>

      <style>{`
        .process-track {
          padding-left: 82px;
        }

        .process-line,
        .process-progress {
          position: absolute;
          left: 25px;
          top: 8px;
          bottom: 8px;
          width: 2px;
          border-radius: 3px;
        }

        .process-line {
          background: rgba(255,255,255,0.08);
        }

        .process-progress {
          bottom: auto;
          background: linear-gradient(
            to bottom,
            var(--accent),
            var(--accent-cyan)
          );
          box-shadow: 0 0 18px rgba(99,102,241,0.35);
          transition: height 120ms linear;
        }

        .process-step {
          position: relative;
          min-height: 155px;
          padding-bottom: 42px;
          opacity: 0.48;
          transition:
            opacity 300ms ease,
            transform 300ms ease;
        }

        .process-step.is-active {
          opacity: 1;
        }

        .process-step.is-current {
          transform: translateX(4px);
        }

        .process-node {
          position: absolute;
          left: -82px;
          top: 0;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0b0d11;
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 0 0 8px #08090b;
          transition:
            border-color 300ms ease,
            box-shadow 300ms ease,
            background 300ms ease;
        }

        .process-node span {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-tertiary);
          font-family: var(--font-display);
        }

        .process-step.is-active .process-node {
          border-color: rgba(99,102,241,0.45);
          background:
            radial-gradient(
              circle at center,
              rgba(99,102,241,0.18),
              #0b0d11 65%
            );
        }

        .process-step.is-active .process-node span {
          color: var(--accent-cyan);
        }

        .process-step.is-current .process-node {
          border-color: var(--accent-cyan);
          box-shadow:
            0 0 0 8px #08090b,
            0 0 25px rgba(103,232,249,0.18);
        }

        .process-content {
          max-width: 650px;
        }

        .process-label {
          font-size: 11px;
          color: var(--text-tertiary);
          letter-spacing: 0.07em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .process-live {
          padding: 3px 7px;
          border-radius: 5px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--accent-cyan);
          border: 1px solid rgba(103,232,249,0.2);
          background: rgba(103,232,249,0.06);
        }

        .process-content h3 {
          margin: 0 0 9px;
          font-size: 25px;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .process-content p {
          margin: 0;
          max-width: 590px;
          color: var(--text-secondary);
          font-size: 14px;
          line-height: 1.7;
        }

        .process-deliverable {
          display: flex;
          align-items: center;
          gap: 9px;
          flex-wrap: wrap;
          margin-top: 15px;
          font-size: 11px;
        }

        .process-deliverable span {
          color: var(--text-tertiary);
        }

        .process-deliverable strong {
          color: var(--text-secondary);
          font-weight: 600;
        }

        .process-status {
          position: absolute;
          right: 0;
          top: 4px;
          font-size: 10px;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.07em;
        }

        .process-step.is-active .process-status {
          color: var(--accent-cyan);
        }

        @media (max-width: 760px) {
          .process-header-note {
            display: none;
          }

          .process-track {
            padding-left: 58px;
          }

          .process-line,
          .process-progress {
            left: 18px;
          }

          .process-node {
            left: -58px;
            width: 40px;
            height: 40px;
            box-shadow: 0 0 0 7px #08090b;
          }

          .process-step {
            min-height: auto;
            padding-bottom: 42px;
          }

          .process-content h3 {
            font-size: 22px;
          }

          .process-status {
            display: none;
          }

          .process-footer {
            flex-direction: column;
            align-items: flex-start !important;
          }
        }

        @media (max-width: 480px) {
          .process-content p {
            font-size: 13.5px;
          }

          .process-footer {
            padding: 22px !important;
          }
        }
      `}</style>
    </section>
  )
}
