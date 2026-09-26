import { useReveal } from '../hooks/useReveal.js'

const CASES = [
  {
    name: 'AI Resume Analyzer',
    category: 'AI · SaaS · Recruitment',
    eyebrow: 'AI-Powered Decision Support',
    problem:
      'Recruiters spend significant time reviewing resumes, extracting candidate information and comparing profiles against role requirements.',
    solution:
      'Built an AI-powered recruitment platform that parses resumes, extracts structured candidate data and uses LLM-powered workflows to evaluate profiles against job requirements.',
    impact: [
      'Automated resume understanding',
      'Structured candidate information',
      'AI-assisted candidate evaluation',
    ],
    tech: ['Python', 'FastAPI', 'OpenAI', 'LangChain', 'Pinecone'],
    visual: 'resume',
  },
  {
    name: 'RAG Knowledge Assistant',
    category: 'AI · RAG · Enterprise',
    eyebrow: 'Enterprise Knowledge Intelligence',
    problem:
      'Teams often have valuable information distributed across documents, making it difficult to find accurate answers quickly.',
    solution:
      'Built a retrieval-augmented AI assistant that ingests enterprise documents, retrieves relevant context and generates grounded answers using an LLM pipeline.',
    impact: [
      'Semantic document search',
      'Context-aware AI responses',
      'Knowledge retrieval from internal data',
    ],
    tech: ['Python', 'FastAPI', 'RAG', 'Vector DB', 'OpenAI'],
    visual: 'rag',
  },
  {
    name: 'SaaS Business Platform',
    category: 'SaaS · Full Stack · Cloud',
    eyebrow: 'Scalable Business Platform',
    problem:
      'Growing teams need reliable software to manage users, business workflows, analytics and billing without creating disconnected systems.',
    solution:
      'Delivered a multi-tenant SaaS platform with role-based access, operational dashboards, billing workflows and a versioned API architecture designed for future scale.',
    impact: [
      'Multi-tenant architecture',
      'Role-based access control',
      'Scalable API foundation',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
    visual: 'saas',
  },
]

export default function CaseStudies() {
  const ref = useReveal()

  return (
    <section
      id="work"
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
          top: 120,
          right: -260,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(99,102,241,0.10), transparent 68%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative' }}>
        {/* Section header */}
        <div
          ref={ref}
          className="reveal"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 40,
            marginBottom: 52,
          }}
        >
          <div style={{ maxWidth: 720 }}>
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
              Selected Work
            </div>

            <h2
              className="section-heading"
              style={{
                maxWidth: 700,
                marginBottom: 16,
              }}
            >
              Software built around{' '}
              <span
                style={{
                  background:
                    'linear-gradient(90deg, var(--accent), var(--accent-cyan))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                real business problems.
              </span>
            </h2>

            <p
              className="section-sub"
              style={{
                maxWidth: 680,
                margin: 0,
              }}
            >
              A selection of AI, SaaS and software engineering projects
              focused on turning complex requirements into practical,
              production-ready systems.
            </p>
          </div>

          <div
            className="case-header-note"
            style={{
              minWidth: 180,
              paddingBottom: 4,
              color: 'var(--text-tertiary)',
              fontSize: 13,
              lineHeight: 1.6,
            }}
          >
            <div
              style={{
                color: 'var(--text-secondary)',
                fontWeight: 600,
                marginBottom: 4,
              }}
            >
              Our approach
            </div>
            Problem → Architecture → Product → Production
          </div>
        </div>

        {/* Case studies */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 28,
          }}
        >
          {CASES.map((c, i) => (
            <article
              key={c.name}
              className="card case-card-v2"
              style={{
                display: 'grid',
                gridTemplateColumns:
                  i % 2 === 0 ? '1.02fr 0.98fr' : '0.98fr 1.02fr',
                overflow: 'hidden',
                position: 'relative',
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.045), rgba(255,255,255,0.015))',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Product visual */}
              <div
                className="case-visual-wrap"
                style={{
                  order: i % 2 === 0 ? 1 : 2,
                  padding: 30,
                  display: 'flex',
                  alignItems: 'center',
                  background:
                    'radial-gradient(circle at 50% 40%, rgba(99,102,241,0.08), transparent 60%)',
                }}
              >
                <CaseVisual kind={c.visual} />
              </div>

              {/* Content */}
              <div
                style={{
                  order: i % 2 === 0 ? 2 : 1,
                  padding: '42px 42px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: 14,
                  }}
                >
                  <span
                    style={{
                      fontSize: 11.5,
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-cyan)',
                    }}
                  >
                    {c.category}
                  </span>

                  <span
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: '50%',
                      background: 'var(--text-tertiary)',
                    }}
                  />

                  <span
                    style={{
                      fontSize: 11.5,
                      color: 'var(--text-tertiary)',
                    }}
                  >
                    0{i + 1}
                  </span>
                </div>

                <div
                  style={{
                    fontSize: 12,
                    color: 'var(--text-tertiary)',
                    marginBottom: 8,
                  }}
                >
                  {c.eyebrow}
                </div>

                <h3
                  style={{
                    margin: '0 0 22px',
                    fontSize: 'clamp(25px, 3vw, 34px)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.025em',
                    fontWeight: 700,
                  }}
                >
                  {c.name}
                </h3>

                {/* Problem */}
                <div style={{ marginBottom: 18 }}>
                  <div className="case-label">THE CHALLENGE</div>

                  <p className="case-copy">{c.problem}</p>
                </div>

                {/* Solution */}
                <div style={{ marginBottom: 22 }}>
                  <div className="case-label">WHAT WE BUILT</div>

                  <p className="case-copy">{c.solution}</p>
                </div>

                {/* Impact */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 8,
                    marginBottom: 24,
                  }}
                  className="case-impact"
                >
                  {c.impact.map((item) => (
                    <div
                      key={item}
                      style={{
                        padding: '10px 11px',
                        borderRadius: 8,
                        background: 'rgba(255,255,255,0.035)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        fontSize: 11.5,
                        lineHeight: 1.4,
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <span
                        style={{
                          display: 'block',
                          width: 5,
                          height: 5,
                          borderRadius: '50%',
                          background: 'var(--accent)',
                          marginBottom: 8,
                        }}
                      />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Tech */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 7,
                    marginBottom: 24,
                  }}
                >
                  {c.tech.map((t) => (
                    <span key={t} className="case-tech">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="case-link"
                  aria-label={`Discuss a project similar to ${c.name}`}
                >
                  Discuss a similar project
                  <span className="arrow">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: 46,
            padding: '28px 30px',
            borderRadius: 14,
            border: '1px solid var(--border)',
            background: 'rgba(255,255,255,0.02)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
          }}
          className="case-bottom-cta"
        >
          <div>
            <div
              style={{
                fontSize: 15,
                fontWeight: 600,
                marginBottom: 5,
              }}
            >
              Have a similar challenge?
            </div>

            <div
              style={{
                fontSize: 13.5,
                color: 'var(--text-tertiary)',
              }}
            >
              Let's talk about the problem you're trying to solve.
            </div>
          </div>

          <a href="#contact" className="btn btn-primary">
            Start a Conversation
            <span className="arrow">→</span>
          </a>
        </div>
      </div>

      <style>{`
        .case-card-v2 {
          transition:
            transform 220ms ease,
            border-color 220ms ease,
            box-shadow 220ms ease;
        }

        .case-card-v2:hover {
          transform: translateY(-3px);
          border-color: rgba(255,255,255,0.14) !important;
          box-shadow: 0 24px 70px rgba(0,0,0,0.28);
        }

        .case-label {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-tertiary);
          margin-bottom: 7px;
        }

        .case-copy {
          margin: 0;
          font-size: 14px;
          line-height: 1.7;
          color: var(--text-secondary);
          max-width: 600px;
        }

        .case-tech {
          display: inline-flex;
          align-items: center;
          padding: 5px 9px;
          border-radius: 6px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.025);
          color: var(--text-tertiary);
          font-size: 11.5px;
          transition:
            color 180ms ease,
            border-color 180ms ease,
            background 180ms ease;
        }

        .case-card-v2:hover .case-tech {
          border-color: rgba(99,102,241,0.18);
        }

        .case-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          color: var(--text-primary);
          font-size: 13.5px;
          font-weight: 600;
          text-decoration: none;
          transition:
            color 180ms ease,
            gap 180ms ease;
        }

        .case-link:hover {
          color: var(--accent-cyan);
          gap: 12px;
        }

        .case-visual-wrap {
          min-height: 390px;
        }

        @media (max-width: 860px) {
          .case-card-v2 {
            grid-template-columns: 1fr !important;
          }

          .case-card-v2 > div {
            order: initial !important;
          }

          .case-visual-wrap {
            min-height: auto;
            padding: 20px !important;
          }

          .case-header-note {
            display: none;
          }

          .case-impact {
            grid-template-columns: 1fr !important;
          }

          .case-bottom-cta {
            flex-direction: column;
            align-items: flex-start !important;
          }
        }

        @media (max-width: 560px) {
          .case-card-v2 > div:last-child {
            padding: 28px 22px !important;
          }

          .case-visual-wrap {
            padding: 14px !important;
          }

          .case-bottom-cta {
            padding: 22px !important;
          }
        }
      `}</style>
    </section>
  )
}

function CaseVisual({ kind }) {
  if (kind === 'resume') {
    return <ResumeVisual />
  }

  if (kind === 'rag') {
    return <RagVisual />
  }

  return <SaasVisual />
}

function WindowHeader({ title }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 15,
        marginBottom: 18,
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div style={{ display: 'flex', gap: 6 }}>
        <span className="window-dot red" />
        <span className="window-dot yellow" />
        <span className="window-dot green" />
      </div>

      <span
        style={{
          fontSize: 10.5,
          color: 'var(--text-tertiary)',
          fontFamily: 'monospace',
        }}
      >
        {title}
      </span>

      <span
        style={{
          width: 28,
          height: 5,
          borderRadius: 4,
          background: 'rgba(255,255,255,0.06)',
        }}
      />
    </div>
  )
}

function ResumeVisual() {
  return (
    <div className="product-window">
      <WindowHeader title="candidate-analysis.ai" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '0.9fr 1.1fr',
          gap: 16,
        }}
      >
        <div>
          <div className="visual-label">CANDIDATE</div>

          <div
            style={{
              height: 9,
              width: '70%',
              borderRadius: 4,
              background: 'rgba(255,255,255,0.13)',
              marginBottom: 10,
            }}
          />

          {[76, 58, 88, 48, 66].map((width, i) => (
            <div
              key={i}
              style={{
                height: 5,
                width: `${width}%`,
                borderRadius: 3,
                background: 'rgba(255,255,255,0.07)',
                marginBottom: 7,
              }}
            />
          ))}
        </div>

        <div>
          <div className="visual-label">AI MATCH SCORE</div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 18,
            }}
          >
            <div className="score-ring">
              <span>92</span>
            </div>

            <div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  marginBottom: 4,
                }}
              >
                Strong match
              </div>

              <div
                style={{
                  fontSize: 10.5,
                  color: 'var(--text-tertiary)',
                }}
              >
                AI evaluation complete
              </div>
            </div>
          </div>

          {['Experience', 'Skills', 'Education'].map((item, i) => (
            <div
              key={item}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 9,
                fontSize: 10.5,
                color: 'var(--text-tertiary)',
              }}
            >
              <span>{item}</span>

              <span
                style={{
                  width: `${82 + i * 4}%`,
                  maxWidth: 95,
                  height: 5,
                  borderRadius: 3,
                  background:
                    i === 0
                      ? 'var(--accent)'
                      : 'rgba(255,255,255,0.1)',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: 18,
          padding: 12,
          borderRadius: 8,
          border: '1px solid rgba(99,102,241,0.18)',
          background: 'rgba(99,102,241,0.05)',
        }}
      >
        <div className="visual-label">AI INSIGHT</div>

        <div
          style={{
            fontSize: 11,
            lineHeight: 1.55,
            color: 'var(--text-secondary)',
          }}
        >
          Candidate experience strongly aligns with the role requirements.
        </div>
      </div>
    </div>
  )
}

function RagVisual() {
  return (
    <div className="product-window">
      <WindowHeader title="knowledge-assistant" />

      <div className="rag-search">
        <span style={{ color: 'var(--accent-cyan)' }}>⌕</span>
        <span>What is our refund policy?</span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '0.75fr 1.25fr',
          gap: 14,
          marginTop: 16,
        }}
      >
        <div>
          <div className="visual-label">RETRIEVED SOURCES</div>

          {[
            ['policy.pdf', '98%'],
            ['support.md', '91%'],
            ['terms.pdf', '86%'],
          ].map(([name, score]) => (
            <div
              key={name}
              className="source-row"
            >
              <span>{name}</span>
              <span>{score}</span>
            </div>
          ))}
        </div>

        <div
          style={{
            padding: 14,
            borderRadius: 9,
            background: 'rgba(255,255,255,0.025)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="visual-label">GENERATED ANSWER</div>

          <div
            style={{
              display: 'flex',
              gap: 6,
              marginBottom: 9,
            }}
          >
            <span className="ai-dot" />
            <span
              style={{
                fontSize: 10.5,
                color: 'var(--text-tertiary)',
              }}
            >
              Grounded response
            </span>
          </div>

          {[88, 96, 74, 54].map((width, i) => (
            <div
              key={i}
              style={{
                height: 5,
                width: `${width}%`,
                borderRadius: 3,
                background:
                  i === 0
                    ? 'rgba(103,232,249,0.45)'
                    : 'rgba(255,255,255,0.08)',
                marginBottom: 7,
              }}
            />
          ))}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 16,
          fontSize: 10,
          color: 'var(--text-tertiary)',
        }}
      >
        <span>Retrieval complete</span>
        <span style={{ color: '#6ee7b7' }}>● Grounded</span>
      </div>
    </div>
  )
}

function SaasVisual() {
  return (
    <div className="product-window">
      <WindowHeader title="business-platform" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '0.65fr 1.35fr',
          gap: 14,
        }}
      >
        <div
          style={{
            borderRight: '1px solid rgba(255,255,255,0.06)',
            paddingRight: 14,
          }}
        >
          {['Overview', 'Customers', 'Analytics', 'Billing'].map(
            (item, i) => (
              <div
                key={item}
                style={{
                  padding: '8px 9px',
                  borderRadius: 6,
                  background:
                    i === 0
                      ? 'rgba(99,102,241,0.12)'
                      : 'transparent',
                  color:
                    i === 0
                      ? 'var(--text-primary)'
                      : 'var(--text-tertiary)',
                  fontSize: 10.5,
                  marginBottom: 4,
                }}
              >
                {item}
              </div>
            ),
          )}
        </div>

        <div>
          <div className="visual-label">OVERVIEW</div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 7,
              marginBottom: 16,
            }}
          >
            {[
              ['Users', '12.8k'],
              ['Revenue', '$84k'],
              ['Growth', '+24%'],
            ].map(([label, value]) => (
              <div key={label} className="metric-box">
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>

          <div className="chart">
            {[35, 48, 42, 65, 58, 78, 68, 90].map((height, i) => (
              <div
                key={i}
                style={{
                  height: `${height}%`,
                  flex: 1,
                  borderRadius: '3px 3px 0 0',
                  background:
                    i === 7
                      ? 'linear-gradient(to top, var(--accent), var(--accent-cyan))'
                      : 'rgba(255,255,255,0.09)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
