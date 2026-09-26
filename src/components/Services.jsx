import { useReveal } from '../hooks/useReveal.js'

const SERVICES = [
  {
    n: '01',
    title: 'Custom Software',
    headline: 'Turn complex business requirements into reliable software.',
    desc:
      'We design and build tailored web platforms, internal tools and business applications around the way your organization actually works.',
    tags: ['React', 'Next.js', 'Node.js', 'Python'],
    icon: IconLayers,
  },
  {
    n: '02',
    title: 'AI & Generative AI',
    headline: 'Turn AI into a useful part of your product.',
    desc:
      'Build RAG systems, AI assistants, agents, document intelligence and intelligent workflows that solve real business problems.',
    tags: ['LLMs', 'RAG', 'AI Agents', 'Automation'],
    icon: IconSpark,
    accent: true,
    featured: true,
  },
  {
    n: '03',
    title: 'SaaS Product Development',
    headline: 'From product idea to a scalable SaaS platform.',
    desc:
      'We help turn ideas into production-ready products with the architecture, authentication, billing, APIs and infrastructure needed to scale.',
    tags: ['MVP', 'SaaS', 'APIs', 'Cloud'],
    icon: IconCube,
  },
  {
    n: '04',
    title: 'Web & Mobile',
    headline: 'Digital experiences your customers actually enjoy using.',
    desc:
      'Build fast, responsive and intuitive web and mobile applications designed around your users and business goals.',
    tags: ['Web Apps', 'Mobile', 'UX', 'Responsive'],
    icon: IconDevice,
  },
  {
    n: '05',
    title: 'Backend & APIs',
    headline: 'The engineering foundation behind your product.',
    desc:
      'Design secure APIs, backend services, integrations and scalable architectures that keep your product fast and dependable.',
    tags: ['Node.js', 'Python', 'REST', 'Microservices'],
    icon: IconServer,
  },
  {
    n: '06',
    title: 'Cloud & DevOps',
    headline: 'Ship confidently and keep your systems running.',
    desc:
      'Set up cloud infrastructure, CI/CD, containers, monitoring and deployment workflows built for reliable production environments.',
    tags: ['AWS', 'Docker', 'CI/CD', 'Monitoring'],
    icon: IconCloud,
  },
]

export default function Services() {
  const ref = useReveal()

  return (
    <section
      id="services"
      style={{
        padding: '110px 0 120px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background glow */}
      <div
        style={{
          position: 'absolute',
          width: 420,
          height: 420,
          right: '-180px',
          top: 100,
          borderRadius: '50%',
          background: 'rgba(76,110,245,0.07)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        {/* Section heading */}
        <div
          ref={ref}
          className="reveal services-heading"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 60,
            alignItems: 'end',
            marginBottom: 52,
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                color: 'var(--accent-cyan)',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  width: 22,
                  height: 1,
                  background: 'var(--accent-cyan)',
                }}
              />

              What we build
            </div>

            <h2
              className="section-heading"
              style={{
                margin: 0,
                maxWidth: 620,
              }}
            >
              From business problem
              <br />
              to{' '}
              <span className="gradient-text">
                production software.
              </span>
            </h2>
          </div>

        </div>

        {/* Services */}
        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 18,
          }}
        >
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.n}
              service={service}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: 42,
            padding: '22px 24px',
            borderRadius: 14,
            border: '1px solid var(--border)',
            background: 'rgba(255,255,255,0.018)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 20,
          }}
          className="services-bottom-cta"
        >
          <div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              Not sure what you need?
            </div>

            <div
              style={{
                marginTop: 4,
                fontSize: 13,
                color: 'var(--text-tertiary)',
              }}
            >
              Tell us about your problem and we'll help you find the
              right technical approach.
            </div>
          </div>

          <a
            href="#contact"
            className="btn btn-secondary"
            style={{
              whiteSpace: 'nowrap',
            }}
          >
            Talk to an Engineer
            <span className="arrow">→</span>
          </a>
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

        .service-card {
          position: relative;
          min-height: 310px;
          padding: 26px;
          display: flex;
          flex-direction: column;

          border-radius: 18px;
          border: 1px solid var(--border);

          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,0.035),
              rgba(255,255,255,0.012)
            );

          overflow: hidden;

          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255,255,255,0.15);
          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,0.055),
              rgba(255,255,255,0.018)
            );
          box-shadow:
            0 24px 60px -35px rgba(0,0,0,0.9);
        }

        .service-card.featured {
          border-color: rgba(63,208,201,0.25);

          background:
            radial-gradient(
              circle at 100% 0%,
              rgba(63,208,201,0.09),
              transparent 42%
            ),
            linear-gradient(
              145deg,
              rgba(255,255,255,0.045),
              rgba(255,255,255,0.012)
            );
        }

        .service-card.featured:hover {
          border-color: rgba(63,208,201,0.4);

          box-shadow:
            0 30px 70px -40px rgba(63,208,201,0.22);
        }

        .service-number {
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          color: var(--text-tertiary);
          letter-spacing: 0.04em;
        }

        .service-icon {
          width: 42px;
          height: 42px;
          border-radius: 11px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: rgba(255,255,255,0.045);
          border: 1px solid rgba(255,255,255,0.06);

          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .service-card:hover .service-icon {
          transform: scale(1.06);
        }

        .service-card.featured .service-icon {
          background: rgba(63,208,201,0.09);
          border-color: rgba(63,208,201,0.18);
        }

        .service-title {
          margin: 0;
          font-size: 19px;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .service-headline {
          margin: 0;
          font-size: 14px;
          line-height: 1.55;
          color: var(--text-primary);
          font-weight: 500;
        }

        .service-description {
          margin: 0;
          font-size: 13.5px;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .service-tag {
          padding: 5px 9px;
          border-radius: 6px;
          border: 1px solid var(--border);

          color: var(--text-tertiary);
          background: rgba(255,255,255,0.02);

          font-size: 11px;
          font-weight: 500;

          transition:
            color 0.2s ease,
            border-color 0.2s ease;
        }

        .service-card:hover .service-tag {
          border-color: rgba(255,255,255,0.12);
          color: var(--text-secondary);
        }

        .service-arrow {
          position: absolute;
          right: 24px;
          bottom: 24px;

          width: 28px;
          height: 28px;

          display: grid;
          place-items: center;

          border-radius: 50%;
          border: 1px solid var(--border);

          color: var(--text-tertiary);

          opacity: 0;
          transform: translateX(-5px);

          transition:
            opacity 0.25s ease,
            transform 0.25s ease;
        }

        .service-card:hover .service-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 980px) {
          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          .services-heading {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }

        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }

          .services-bottom-cta {
            flex-direction: column;
            align-items: flex-start !important;
          }

          .services-bottom-cta .btn {
            width: 100%;
            justify-content: center;
          }

          .service-card {
            min-height: auto;
          }
        }
      `}</style>
    </section>
  )
}


function ServiceCard({ service }) {
  const Icon = service.icon

  return (
    <article
      className={`service-card ${
        service.featured ? 'featured' : ''
      }`}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginBottom: 22,
        }}
      >
        <div className="service-icon">
          <Icon
            color={
              service.accent
                ? 'var(--accent-cyan)'
                : 'var(--text-secondary)'
            }
          />
        </div>

        <span className="service-number">
          {service.n}
        </span>
      </div>

      {/* Title */}
      <h3 className="service-title">
        {service.title}
      </h3>

      {/* Value proposition */}
      <p
        className="service-headline"
        style={{
          marginTop: 10,
        }}
      >
        {service.headline}
      </p>

      {/* Description */}
      <p
        className="service-description"
        style={{
          marginTop: 9,
        }}
      >
        {service.desc}
      </p>

      {/* Tags */}
      {service.tags.length > 0 && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 7,
            marginTop: 'auto',
            paddingTop: 22,
            paddingRight: 35,
          }}
        >
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="service-tag"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Arrow */}
      <div className="service-arrow">
        →
      </div>
    </article>
  )
}


function MiniPoint({ text }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 7,
        fontSize: 11.5,
        color: 'var(--text-tertiary)',
      }}
    >
      <span
        style={{
          width: 5,
          height: 5,
          borderRadius: '50%',
          background: 'var(--accent-cyan)',
        }}
      />

      {text}
    </div>
  )
}


/* ---------------- ICONS ---------------- */

function IconLayers({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2L18 6L10 10L2 6L10 2Z"
        stroke={color}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      <path
        d="M2 10L10 14L18 10"
        stroke={color}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      <path
        d="M2 14L10 18L18 14"
        stroke={color}
        strokeWidth="1.4"
        strokeLinejoin="round"
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
    </svg>
  )
}


function IconCube({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2L17 6V14L10 18L3 14V6L10 2Z"
        stroke={color}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      <path
        d="M3 6L10 10L17 6M10 10V18"
        stroke={color}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}


function IconDevice({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect
        x="2"
        y="3"
        width="16"
        height="10"
        rx="1.4"
        stroke={color}
        strokeWidth="1.4"
      />

      <path
        d="M7 17H13M10 13V17"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}


function IconServer({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect
        x="2"
        y="3"
        width="16"
        height="5.5"
        rx="1.2"
        stroke={color}
        strokeWidth="1.4"
      />

      <rect
        x="2"
        y="11.5"
        width="16"
        height="5.5"
        rx="1.2"
        stroke={color}
        strokeWidth="1.4"
      />

      <circle
        cx="5.2"
        cy="5.75"
        r="0.9"
        fill={color}
      />

      <circle
        cx="5.2"
        cy="14.25"
        r="0.9"
        fill={color}
      />
    </svg>
  )
}


function IconCloud({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M5.5 15A3.4 3.4 0 0 1 5.1 8.2A4.4 4.4 0 0 1 13.6 6.6A3.6 3.6 0 0 1 14.5 15H5.5Z"
        stroke={color}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

