export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: 'relative',
        paddingTop: 'clamp(72px, 10vw, 120px)',
        paddingBottom: 'clamp(80px, 10vw, 120px)',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />
      <div className="grid-backdrop" style={{ height: 760 }} />

      <div
        className="container hero-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.02fr) minmax(460px, 0.98fr)',
          gap: 64,
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* LEFT */}
        <div>
          {/* Eyebrow */}
          <div
            className="eyebrow"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.035)',
              borderRadius: 999,
              padding: '8px 14px 8px 11px',
              marginBottom: 28,
              color: 'var(--text-secondary)',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span
              style={{
                position: 'relative',
                width: 7,
                height: 7,
                display: 'inline-flex',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  background: 'var(--accent-cyan)',
                  boxShadow: '0 0 12px rgba(63,208,201,0.8)',
                }}
              />

              <span
                style={{
                  position: 'absolute',
                  inset: -2,
                  borderRadius: '50%',
                  border: '1px solid var(--accent-cyan)',
                  animation: 'pulse-ring 2.2s ease-out infinite',
                }}
              />
            </span>

            Software Engineering · AI · Cloud
          </div>

          {/* Heading */}
          <h1
            style={{
              fontSize: 'clamp(44px, 5.8vw, 78px)',
              lineHeight: 0.98,
              fontWeight: 800,
              letterSpacing: '-0.055em',
              margin: 0,
              maxWidth: 760,
            }}
          >
            Software
            <br />

            <span className="gradient-text">
              that moves business
            </span>

            <br />

            forward.
          </h1>

          {/* Supporting copy */}
          <p
            style={{
              marginTop: 14,
              maxWidth: 570,
              fontSize: 15.5,
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
            }}
          >
            From product idea to production, we design and build
            scalable software, AI-powered products and automation
            systems for ambitious businesses.
          </p>

          {/* CTA */}
          <div
            style={{
              display: 'flex',
              gap: 12,
              marginTop: 36,
              flexWrap: 'wrap',
            }}
          >
            <a
              href="#contact"
              className="btn btn-primary hero-primary-btn"
            >
              Start a Project
              <span className="arrow">→</span>
            </a>

            <a
              href="#work"
              className="btn btn-secondary"
            >
              Explore Our Work
            </a>
          </div>

          {/* Trust points */}
          <div
            style={{
              display: 'flex',
              gap: 24,
              flexWrap: 'wrap',
              marginTop: 34,
              paddingTop: 24,
              borderTop: '1px solid var(--border)',
              maxWidth: 610,
            }}
          >
            <TrustPoint text="Production-ready engineering" />
            <TrustPoint text="AI & automation expertise" />
            <TrustPoint text="End-to-end delivery" />
          </div>
        </div>

        {/* RIGHT */}
        <HeroVisual />
      </div>

      <style>{`
        .gradient-text {
          background: linear-gradient(
            100deg,
            #f5f5f5 0%,
            #8ea2ff 48%,
            #55dcd3 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-glow {
          position: absolute;
          pointer-events: none;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.18;
        }

        .hero-glow-1 {
          width: 420px;
          height: 420px;
          right: 5%;
          top: 5%;
          background: #4c6ef5;
        }

        .hero-glow-2 {
          width: 300px;
          height: 300px;
          left: 15%;
          bottom: 0;
          background: #3fd0c9;
          opacity: 0.08;
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }

          100% {
            transform: scale(3.2);
            opacity: 0;
          }
        }

        @keyframes float-card {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes dashboard-float {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }

        @media (max-width: 1100px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 70px !important;
          }

          .hero-grid > div:first-child {
            max-width: 760px;
          }
        }

        @media (max-width: 768px) {
          .hero-grid {
            gap: 48px !important;
          }

          .hero-grid h1 {
            letter-spacing: -0.045em !important;
          }
        }
      `}</style>
    </section>
  )
}


function TrustPoint({ text }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 12.5,
        color: 'var(--text-secondary)',
        fontWeight: 500,
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: 'var(--accent-cyan)',
          boxShadow: '0 0 10px rgba(63,208,201,0.5)',
          flexShrink: 0,
        }}
      />

      {text}
    </div>
  )
}


function HeroVisual() {
  return (
    <div
      className="hero-visual"
      style={{
        position: 'relative',
        height: 520,
        borderRadius: 24,
        border: '1px solid rgba(255,255,255,0.1)',
        background:
          'radial-gradient(circle at 75% 15%, rgba(76,110,245,0.16), transparent 32%), radial-gradient(circle at 20% 80%, rgba(63,208,201,0.08), transparent 32%), #0d0f14',
        overflow: 'hidden',
        boxShadow:
          '0 40px 100px -45px rgba(0,0,0,0.9), inset 0 1px rgba(255,255,255,0.04)',
      }}
    >
      {/* Top browser bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 46,
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
          gap: 7,
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          background: 'rgba(255,255,255,0.018)',
        }}
      >
        <span className="window-dot" />
        <span className="window-dot" />
        <span className="window-dot" />

        <div
          style={{
            marginLeft: 12,
            height: 22,
            flex: 1,
            maxWidth: 220,
            borderRadius: 6,
            background: 'rgba(255,255,255,0.045)',
            border: '1px solid rgba(255,255,255,0.05)',
          }}
        />
      </div>

      {/* Architecture lines */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 560 520"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.75,
        }}
      >
        <defs>
          <linearGradient
            id="heroLine"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#4c6ef5"
              stopOpacity="0"
            />

            <stop
              offset="50%"
              stopColor="#4c6ef5"
              stopOpacity="0.55"
            />

            <stop
              offset="100%"
              stopColor="#3fd0c9"
              stopOpacity="0.35"
            />
          </linearGradient>
        </defs>

        <path
          d="M75 355 C170 355 175 260 270 260"
          stroke="url(#heroLine)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5 8"
        />

        <path
          d="M270 260 C355 260 345 155 470 155"
          stroke="url(#heroLine)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5 8"
        />

        <path
          d="M270 260 C350 260 370 365 480 365"
          stroke="url(#heroLine)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5 8"
        />
      </svg>

      {/* Central AI Engine */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 116,
          height: 116,
          borderRadius: 28,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'linear-gradient(145deg, rgba(76,110,245,0.2), rgba(63,208,201,0.08))',
          border: '1px solid rgba(126,145,255,0.35)',
          boxShadow:
            '0 0 60px rgba(76,110,245,0.18), inset 0 1px rgba(255,255,255,0.08)',
          zIndex: 3,
          animation: 'dashboard-float 6s ease-in-out infinite',
        }}
      >
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: 12,
            display: 'grid',
            placeItems: 'center',
            background:
              'linear-gradient(135deg, #4c6ef5, #3fd0c9)',
            boxShadow: '0 8px 24px rgba(76,110,245,0.3)',
            marginBottom: 9,
            color: '#fff',
            fontSize: 18,
            fontWeight: 800,
          }}
        >
          AI
        </div>

        <div
          style={{
            fontSize: 11,
            color: 'var(--text-primary)',
            fontWeight: 700,
          }}
        >
          Intelligence
        </div>

        <div
          style={{
            fontSize: 9,
            color: 'var(--text-tertiary)',
            marginTop: 3,
          }}
        >
          Reasoning Engine
        </div>
      </div>

      {/* Input card */}
      <ArchitectureCard
        style={{
          left: 22,
          top: 92,
          width: 178,
        }}
        title="Business Data"
        subtitle="Your systems & workflows"
        icon="01"
      />

      {/* API card */}
      <ArchitectureCard
        style={{
          right: 20,
          top: 100,
          width: 172,
        }}
        title="APIs & Tools"
        subtitle="Connected services"
        icon="02"
      />

      {/* Output card */}
      <ArchitectureCard
        style={{
          right: 18,
          bottom: 78,
          width: 188,
        }}
        title="Production"
        subtitle="Scalable applications"
        icon="03"
      />

      {/* Bottom dashboard */}
      <div
        style={{
          position: 'absolute',
          left: 22,
          bottom: 24,
          width: 235,
          borderRadius: 14,
          padding: '14px 16px',
          background: 'rgba(17,19,24,0.9)',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 20px 50px -25px rgba(0,0,0,0.8)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 12,
          }}
        >
          <span
            style={{
              fontSize: 10,
              color: 'var(--text-tertiary)',
            }}
          >
            System performance
          </span>

          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              fontSize: 10,
              color: 'var(--accent-cyan)',
              fontWeight: 600,
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

            Operational
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'end',
            gap: 5,
            height: 42,
          }}
        >
          {[22, 32, 26, 38, 30, 44, 36, 48, 41, 52, 46, 57].map(
            (height, index) => (
              <div
                key={index}
                style={{
                  flex: 1,
                  height,
                  borderRadius: 3,
                  background:
                    index > 8
                      ? 'linear-gradient(to top, #4c6ef5, #3fd0c9)'
                      : 'rgba(76,110,245,0.3)',
                  opacity: 0.9,
                }}
              />
            )
          )}
        </div>
      </div>

      {/* Floating status */}
      <div
        style={{
          position: 'absolute',
          top: 58,
          right: 22,
          padding: '8px 11px',
          borderRadius: 9,
          background: 'rgba(17,19,24,0.86)',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(10px)',
          fontSize: 10,
          color: 'var(--text-secondary)',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            width: 5,
            height: 5,
            borderRadius: '50%',
            background: 'var(--accent-cyan)',
            marginRight: 6,
          }}
        />

        Systems online
      </div>

      <style>{`
        .window-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(255,255,255,0.18);
        }

        .hero-visual::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(
              120deg,
              transparent 20%,
              rgba(255,255,255,0.025) 50%,
              transparent 80%
            );
        }

        @media (max-width: 900px) {
          .hero-visual {
            height: 470px !important;
          }
        }

        @media (max-width: 600px) {
          .hero-visual {
            height: 420px !important;
            border-radius: 18px !important;
          }
        }
      `}</style>
    </div>
  )
}


function ArchitectureCard({ title, subtitle, icon, style }) {
  return (
    <div
      style={{
        position: 'absolute',
        ...style,

        padding: '13px 14px',

        borderRadius: 12,

        background: 'rgba(17,19,24,0.86)',
        border: '1px solid rgba(255,255,255,0.08)',

        backdropFilter: 'blur(14px)',

        boxShadow:
          '0 20px 45px -25px rgba(0,0,0,0.9)',

        zIndex: 4,

        animation: 'float-card 7s ease-in-out infinite',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 9,
        }}
      >
        <div
          style={{
            width: 25,
            height: 25,
            borderRadius: 7,
            display: 'grid',
            placeItems: 'center',
            background: 'rgba(76,110,245,0.12)',
            border: '1px solid rgba(76,110,245,0.2)',
            color: '#8ea2ff',
            fontSize: 8,
            fontWeight: 700,
          }}
        >
          {icon}
        </div>

        <div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 650,
              color: 'var(--text-primary)',
            }}
          >
            {title}
          </div>

          <div
            style={{
              fontSize: 9,
              color: 'var(--text-tertiary)',
              marginTop: 2,
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  )
}
