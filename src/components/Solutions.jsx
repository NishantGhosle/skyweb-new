
import { useReveal } from '../hooks/useReveal.js'

const SOLUTIONS = [
  {
    n: '01',
    title: 'Launch a New Product',
    label: 'STARTUPS & FOUNDERS',
    desc:
      'Have an idea but need the engineering team to turn it into reality? We help transform concepts into validated MVPs and production-ready products.',
    outcome: 'Idea → MVP → Production',
    points: ['Product architecture', 'MVP development', 'Launch strategy'],
    icon: IconRocket,
  },
  {
    n: '02',
    title: 'Automate Your Business',
    label: 'OPERATIONS & WORKFLOWS',
    desc:
      'Replace repetitive manual processes with software, integrations and AI-powered workflows that help your team work faster.',
    outcome: 'Manual Work → Automation',
    points: ['Workflow automation', 'System integrations', 'AI automation'],
    icon: IconFlow,
  },
  {
    n: '03',
    title: 'Add AI to Your Product',
    label: 'AI & INTELLIGENCE',
    desc:
      'Make your existing product smarter with AI-powered search, assistants, recommendations, document intelligence and autonomous workflows.',
    outcome: 'Software → Intelligent Software',
    points: ['RAG & semantic search', 'AI agents', 'LLM integrations'],
    icon: IconSpark,
    featured: true,
  },
  {
    n: '04',
    title: 'Modernize Existing Systems',
    label: 'LEGACY & TRANSFORMATION',
    desc:
      'Move away from outdated technology without putting your business at risk. We modernize applications, APIs and infrastructure incrementally.',
    outcome: 'Legacy → Modern Architecture',
    points: ['Architecture modernization', 'API development', 'Cloud migration'],
    icon: IconRefresh,
  },
  {
    n: '05',
    title: 'Build for Scale',
    label: 'GROWING BUSINESSES',
    desc:
      'When your product grows, your technology needs to grow with it. We build reliable systems capable of handling increasing users, data and complexity.',
    outcome: 'Growth → Scale',
    points: ['Scalable backend', 'Cloud infrastructure', 'Performance engineering'],
    icon: IconScale,
  },
]

export default function Solutions() {
  const ref = useReveal()

  return (
    <section
      id="solutions"
      style={{
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: 'absolute',
          width: 500,
          height: 500,
          left: '-250px',
          top: 180,
          borderRadius: '50%',
          background: 'rgba(76,110,245,0.06)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        {/* Header */}
        <div
          ref={ref}
          className="reveal solutions-header"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 0.8fr',
            gap: 70,
            alignItems: 'end',
            marginBottom: 60,
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 9,
                marginBottom: 16,
                color: 'var(--accent-cyan)',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              <span
                style={{
                  width: 22,
                  height: 1,
                  background: 'var(--accent-cyan)',
                }}
              />

              What we solve
            </div>

            <h2
              className="section-heading"
              style={{
                margin: 0,
                maxWidth: 700,
              }}
            >
              Technology is only useful
              <br />
              when it{' '}
              <span className="gradient-text">
                solves something.
              </span>
            </h2>
          </div>

        </div>

        {/* Solutions */}
        <div
          className="solutions-list"
          style={{
            borderTop: '1px solid var(--border)',
          }}
        >
          {SOLUTIONS.map((solution) => (
            <SolutionCard
              key={solution.n}
              solution={solution}
            />
          ))}
        </div>

      </div>

      <style>{`
        .gradient-text {
          background: linear-gradient(
            100deg,
            #f5f5f5 0%,
            #8ea2ff 50%,
            #55dcd3 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .solution-card {
          position: relative;

          display: grid;
          grid-template-columns: 58px minmax(220px, 0.85fr) minmax(0, 1.15fr) 180px;

          gap: 28px;
          align-items: center;

          min-height: 145px;

          border-bottom: 1px solid var(--border);

          transition:
            padding 0.3s ease,
            background 0.3s ease;
        }

        .solution-card::before {
          content: '';
          position: absolute;
          left: -30px;
          right: -30px;
          top: 0;
          bottom: 0;

          border-radius: 12px;

          background: rgba(255,255,255,0.025);

          opacity: 0;

          transition: opacity 0.3s ease;

          pointer-events: none;
        }

        .solution-card:hover::before {
          opacity: 1;
        }

        .solution-card:hover {
          padding-left: 10px;
          padding-right: 10px;
        }

        .solution-card.featured {
          border-bottom-color: rgba(63,208,201,0.16);
        }

        .solution-number {
          position: relative;
          z-index: 1;

          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 700;

          color: var(--text-tertiary);
        }

        .solution-icon {
          width: 42px;
          height: 42px;

          display: grid;
          place-items: center;

          margin-top: 9px;

          border-radius: 11px;

          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);

          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .solution-card:hover .solution-icon {
          transform: translateY(-2px);
          background: rgba(76,110,245,0.08);
        }

        .solution-card.featured .solution-icon {
          background: rgba(63,208,201,0.08);
          border-color: rgba(63,208,201,0.18);
        }

        .solution-title {
          position: relative;
          z-index: 1;

          margin: 0;

          font-size: 21px;
          line-height: 1.25;
          font-weight: 700;
          letter-spacing: -0.025em;
        }

        .solution-label {
          position: relative;
          z-index: 1;

          display: block;

          margin-bottom: 8px;

          font-size: 9.5px;
          font-weight: 700;

          letter-spacing: 0.1em;

          color: var(--text-tertiary);
        }

        .solution-description {
          position: relative;
          z-index: 1;

          margin: 0;

          font-size: 13.5px;
          line-height: 1.7;

          color: var(--text-secondary);
        }

        .solution-outcome {
          position: relative;
          z-index: 1;

          justify-self: end;

          display: inline-flex;
          align-items: center;
          gap: 8px;

          padding: 8px 11px;

          border-radius: 7px;

          border: 1px solid var(--border);

          background: rgba(255,255,255,0.025);

          font-size: 10.5px;
          font-weight: 600;

          color: var(--text-secondary);

          white-space: nowrap;
        }

        .solution-outcome::before {
          content: '';

          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: var(--accent-cyan);

          box-shadow: 0 0 8px rgba(63,208,201,0.45);
        }

        .solution-points {
          position: relative;
          z-index: 1;

          display: flex;
          flex-direction: column;
          gap: 7px;

          margin-top: 15px;
        }

        .solution-point {
          display: flex;
          align-items: center;
          gap: 7px;

          font-size: 11px;

          color: var(--text-tertiary);
        }

        .solution-point span {
          width: 4px;
          height: 4px;

          border-radius: 50%;

          background: var(--accent);
        }

        @media (max-width: 1000px) {
          .solution-card {
            grid-template-columns: 50px minmax(190px, 0.8fr) minmax(0, 1.2fr);
          }

          .solution-outcome {
            display: none;
          }
        }

        @media (max-width: 800px) {
          .solutions-header {
            grid-template-columns: 1fr !important;
            gap: 22px !important;
          }

          .solution-card {
            grid-template-columns: 50px 1fr;
            gap: 18px;
            padding: 26px 0;
          }

          .solution-card:hover {
            padding-left: 0;
            padding-right: 0;
          }

          .solution-card > div:nth-child(3) {
            grid-column: 2;
          }

          .solution-outcome {
            display: inline-flex;
            justify-self: start;
            grid-column: 2;
          }
        }

        @media (max-width: 600px) {
          .solutions-cta {
            flex-direction: column;
            align-items: flex-start !important;
          }

          .solutions-cta .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}


/* ------------------------------------------------ */
/* SOLUTION CARD                                    */
/* ------------------------------------------------ */

function SolutionCard({ solution }) {
  const Icon = solution.icon

  return (
    <article
      className={`solution-card ${
        solution.featured ? 'featured' : ''
      }`}
    >
      {/* Number + icon */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          alignSelf: 'start',
          paddingTop: 30,
        }}
      >
        <div className="solution-number">
          {solution.n}
        </div>

        <div className="solution-icon">
          <Icon
            color={
              solution.featured
                ? 'var(--accent-cyan)'
                : 'var(--text-secondary)'
            }
          />
        </div>
      </div>

      {/* Title */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <span className="solution-label">
          {solution.label}
        </span>

        <h3 className="solution-title">
          {solution.title}
        </h3>

        <div className="solution-points">
          {solution.points.map((point) => (
            <div
              key={point}
              className="solution-point"
            >
              <span />
              {point}
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="solution-description">
        {solution.desc}
      </p>

      {/* Outcome */}
      <div className="solution-outcome">
        {solution.outcome}
      </div>
    </article>
  )
}


/* ------------------------------------------------ */
/* ICONS                                            */
/* ------------------------------------------------ */

function IconRocket({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M12.8 3.1C14.7 2.2 16.8 2.1 17.8 2.2C17.9 3.2 17.8 5.3 16.9 7.2L11.3 12.8L7.2 8.7L12.8 3.1Z"
        stroke={color}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />

      <path
        d="M7.2 8.7L4.1 9.1L2.4 11.8L6.8 12.5"
        stroke={color}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />

      <path
        d="M11.3 12.8L10.9 15.9L8.2 17.6L7.5 13.2"
        stroke={color}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />

      <circle
        cx="14.3"
        cy="5.7"
        r="1.4"
        stroke={color}
        strokeWidth="1.2"
      />
    </svg>
  )
}


function IconFlow({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect
        x="2"
        y="3"
        width="5"
        height="5"
        rx="1"
        stroke={color}
        strokeWidth="1.3"
      />

      <rect
        x="13"
        y="12"
        width="5"
        height="5"
        rx="1"
        stroke={color}
        strokeWidth="1.3"
      />

      <path
        d="M7 5.5H10C12.2 5.5 13.5 6.8 13.5 9V12"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  )
}


function IconSpark({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 1L11.6 7.6L18 10L11.6 12.4L10 19L8.4 12.4L2 10L8.4 7.6L10 1Z"
        stroke={color}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />

      <path
        d="M16.2 2.8V5.2M15 4H17.4"
        stroke={color}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  )
}


function IconRefresh({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M16.5 7.2A6.8 6.8 0 0 0 4.3 5.1"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      <path
        d="M3.5 2.8V5.8H6.5"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M3.5 12.8A6.8 6.8 0 0 0 15.7 14.9"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      <path
        d="M16.5 17.2V14.2H13.5"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


function IconScale({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 3V17"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      <path
        d="M5 6H15"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      <path
        d="M4 6L2 10H6L4 6Z"
        stroke={color}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />

      <path
        d="M16 6L14 10H18L16 6Z"
        stroke={color}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />

      <path
        d="M6.5 17H13.5"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}
