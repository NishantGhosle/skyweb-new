import { useState } from 'react'
import { useReveal } from '../hooks/useReveal.js'

const FAQS = [
  {
    q: 'How much does a software project cost?',
    a: 'There is no fixed price because every project has different requirements, integrations and technical complexity. We first understand the scope, define the right approach and then provide a clear estimate before development begins.',
  },
  {
    q: 'How long does it take to build a product?',
    a: 'It depends on the scope and complexity. A focused MVP can move relatively quickly, while a larger platform may require multiple development phases. During planning, we break the work into milestones so you have a realistic view of what can be delivered and when.',
  },
  {
    q: 'Do you work with startups and early-stage companies?',
    a: 'Yes. We can help from the early product stage — validating the idea, defining the MVP, designing the architecture and building the first production version. As the product grows, we can continue supporting engineering and scaling needs.',
  },
  {
    q: 'Can you take over an existing application or codebase?',
    a: 'Yes. We can work with an existing team or take ownership of a project already in development. We begin by reviewing the codebase, architecture, infrastructure and technical risks before recommending the next steps.',
  },
  {
    q: 'Can you add AI to an existing product?',
    a: 'Yes. AI can be introduced into an existing application through features such as AI assistants, RAG-based knowledge search, document intelligence, recommendations, workflow automation and agentic workflows. We focus on practical use cases rather than adding AI without a clear purpose.',
  },
  {
    q: 'Do you provide ongoing maintenance and support?',
    a: 'Yes. After launch, we can continue supporting the product through monitoring, bug fixes, performance improvements, infrastructure management and new feature development as your requirements evolve.',
  },
  {
    q: 'What happens after I contact you?',
    a: 'We start with a conversation about your product, business goals and current technical situation. If the project is a good fit, we move into discovery and scope the work, architecture, milestones and estimated effort before development begins.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const ref = useReveal()

  return (
    <section
      id="faq"
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
          width: 520,
          height: 520,
          left: -300,
          top: 80,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(99,102,241,0.07), transparent 68%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container faq-layout"
        style={{
          display: 'grid',
          gridTemplateColumns: '0.75fr 1.25fr',
          gap: 80,
          position: 'relative',
          alignItems: 'start',
        }}
      >
        {/* Left */}
        <div ref={ref} className="reveal faq-intro">
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
            FAQ
          </div>

          <h2
            className="section-heading"
            style={{
              marginBottom: 18,
            }}
          >
            Questions before we{' '}
            <span
              style={{
                background:
                  'linear-gradient(90deg, var(--accent), var(--accent-cyan))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              get started?
            </span>
          </h2>

          <p
            className="section-sub"
            style={{
              margin: 0,
              maxWidth: 370,
            }}
          >
            Here are answers to the questions clients commonly have before
            starting a software or AI project with us.
          </p>

          <div
            style={{
              marginTop: 32,
              padding: 18,
              borderRadius: 10,
              border: '1px solid var(--border)',
              background: 'rgba(255,255,255,0.025)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 9,
                marginBottom: 9,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: '#6ee7b7',
                  boxShadow: '0 0 10px rgba(110,231,183,0.5)',
                }}
              />

              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)',
                }}
              >
                Still have questions?
              </span>
            </div>

            <p
              style={{
                margin: 0,
                fontSize: 13,
                lineHeight: 1.6,
                color: 'var(--text-tertiary)',
              }}
            >
              Tell us what you're trying to build and we'll help you
              understand the right technical approach.
            </p>

            <a
              href="#contact"
              className="faq-contact-link"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                marginTop: 13,
                fontSize: 12.5,
                fontWeight: 600,
                color: 'var(--text-primary)',
                textDecoration: 'none',
              }}
            >
              Talk to an Engineer
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* FAQ list */}
        <div className="faq-list">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i

            return (
              <div
                key={item.q}
                className={`faq-item ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="faq-question"
                >
                  <span className="faq-number">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <span className="faq-question-text">
                    {item.q}
                  </span>

                  <span className="faq-icon">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 10 10"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 0V10M0 5H10"
                        stroke="currentColor"
                        strokeWidth="1.3"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className="faq-answer"
                  style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        .faq-item {
          border-top: 1px solid var(--border);
          transition: border-color 200ms ease;
        }

        .faq-item:last-child {
          border-bottom: 1px solid var(--border);
        }

        .faq-item.is-open {
          border-color: rgba(103,232,249,0.16);
        }

        .faq-question {
          width: 100%;
          padding: 22px 0;
          display: grid;
          grid-template-columns: 38px 1fr 30px;
          align-items: center;
          gap: 12px;
          text-align: left;
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }

        .faq-number {
          font-size: 10px;
          font-weight: 700;
          color: var(--text-tertiary);
          font-family: var(--font-display);
        }

        .faq-item.is-open .faq-number {
          color: var(--accent-cyan);
        }

        .faq-question-text {
          font-size: 15.5px;
          line-height: 1.4;
          font-weight: 600;
          transition: color 180ms ease;
        }

        .faq-question:hover .faq-question-text {
          color: var(--accent-cyan);
        }

        .faq-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid var(--border-strong);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-tertiary);
          transition:
            transform 250ms var(--ease),
            color 250ms ease,
            border-color 250ms ease,
            background 250ms ease;
        }

        .faq-item.is-open .faq-icon {
          transform: rotate(45deg);
          color: var(--accent-cyan);
          border-color: rgba(103,232,249,0.25);
          background: rgba(103,232,249,0.05);
        }

        .faq-answer {
          display: grid;
          transition: grid-template-rows 320ms var(--ease);
        }

        .faq-answer p {
          margin: 0;
          padding: 0 42px 23px 50px;
          max-width: 700px;
          color: var(--text-secondary);
          font-size: 14px;
          line-height: 1.75;
        }

        .faq-contact-link {
          transition:
            color 180ms ease,
            gap 180ms ease;
        }

        .faq-contact-link:hover {
          color: var(--accent-cyan) !important;
          gap: 10px !important;
        }

        @media (max-width: 820px) {
          .faq-layout {
            grid-template-columns: 1fr !important;
            gap: 42px !important;
          }

          .faq-intro {
            max-width: 650px;
          }
        }

        @media (max-width: 560px) {
          .faq-question {
            grid-template-columns: 28px 1fr 28px;
            gap: 8px;
          }

          .faq-question-text {
            font-size: 14px;
          }

          .faq-answer p {
            padding-left: 36px;
            padding-right: 30px;
            font-size: 13.5px;
          }
        }
      `}</style>
    </section>
  )
}
