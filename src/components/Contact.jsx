import { useState } from 'react'
import { useReveal } from '../hooks/useReveal.js'

const PROJECT_TYPES = [
  'Custom Software',
  'AI / GenAI',
  'SaaS Product',
  'Web / Mobile App',
  'Cloud / DevOps',
  'Other',
]

const BUDGETS = [
  'Under $10k',
  '$10k – $30k',
  '$30k – $75k',
  '$75k+',
  'Not sure yet',
]

const initialForm = {
  name: '',
  email: '',
  company: '',
  projectType: PROJECT_TYPES[0],
  budget: BUDGETS[0],
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const ref = useReveal()

  function update(field, value) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }))

    // Clear field error once the user starts correcting it.
    if (errors[field]) {
      setErrors((current) => ({
        ...current,
        [field]: '',
      }))
    }
  }

  function validate() {
    const next = {}

    if (!form.name.trim()) {
      next.name = 'Enter your name.'
    }

    if (!form.email.trim()) {
      next.email = 'Enter your work email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email address.'
    }

    if (!form.message.trim()) {
      next.message = 'Tell us a little about your project.'
    } else if (form.message.trim().length < 20) {
      next.message = 'Please provide a little more detail.'
    }

    return next
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const nextErrors = validate()

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    setStatus('submitting')

    try {
      /*
       * Replace this with your real API endpoint.
       *
       * Example:
       *
       * await fetch('/api/contact', {
       *   method: 'POST',
       *   headers: { 'Content-Type': 'application/json' },
       *   body: JSON.stringify(form),
       * })
       */

      await new Promise((resolve) => setTimeout(resolve, 900))

      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.025)',
    border: '1px solid var(--border)',
    borderRadius: 9,
    padding: '13px 14px',
    color: 'var(--text-primary)',
    fontSize: 14,
    fontFamily: 'inherit',
    outline: 'none',
    transition:
      'border-color 180ms ease, background 180ms ease, box-shadow 180ms ease',
  }

  const labelStyle = {
    display: 'block',
    fontSize: 12,
    color: 'var(--text-secondary)',
    marginBottom: 8,
    fontWeight: 600,
  }

  return (
    <section
      id="contact-form"
      style={{
        padding: '110px 0 120px',
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
          right: -350,
          top: 80,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(99,102,241,0.08), transparent 68%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container contact-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '0.75fr 1.25fr',
          gap: 72,
          alignItems: 'start',
          position: 'relative',
        }}
      >
        {/* Left side */}
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
            Start a Project
          </div>

          <h2
            className="section-heading"
            style={{
              maxWidth: 500,
              marginBottom: 20,
            }}
          >
            Let's build something{' '}
            <span
              style={{
                background:
                  'linear-gradient(90deg, var(--accent), var(--accent-cyan))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              useful.
            </span>
          </h2>

          <p
            style={{
              maxWidth: 430,
              margin: 0,
              fontSize: 15.5,
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
            }}
          >
            Tell us what you're building, what you're trying to improve,
            or where you're stuck. We'll help you understand the right
            technical approach and the next step.
          </p>

          {/* Contact details */}
          <div
            style={{
              marginTop: 38,
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
            }}
          >
            <ContactLine
              label="Email"
              value="hello@forge.dev"
              href="mailto:hello@forge.dev"
            />

            <ContactLine
              label="LinkedIn"
              value="linkedin.com/company/forge"
              href="#"
            />

            <ContactLine
              label="GitHub"
              value="github.com/forge"
              href="#"
            />
          </div>

          {/* What happens next */}
          <div
            style={{
              marginTop: 42,
              padding: 20,
              borderRadius: 11,
              border: '1px solid var(--border)',
              background: 'rgba(255,255,255,0.02)',
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: 'var(--accent-cyan)',
                marginBottom: 15,
              }}
            >
              WHAT HAPPENS NEXT
            </div>

            <div className="next-steps">
              <NextStep
                number="01"
                title="We review your brief"
              />

              <NextStep
                number="02"
                title="We discuss your goals"
              />

              <NextStep
                number="03"
                title="We define the next step"
              />
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="contact-form-shell">
          <div
            style={{
              marginBottom: 26,
            }}
          >
            <div
              style={{
                fontSize: 17,
                fontWeight: 650,
                marginBottom: 6,
              }}
            >
              Tell us about your project
            </div>

            <div
              style={{
                fontSize: 13,
                color: 'var(--text-tertiary)',
              }}
            >
              A few details are enough to get the conversation started.
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 19,
            }}
          >
            {/* Name + email */}
            <div
              className="form-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 16,
              }}
            >
              <div>
                <label style={labelStyle} htmlFor="name">
                  Name <span className="required">*</span>
                </label>

                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  style={{
                    ...inputStyle,
                    ...(errors.name ? errorInputStyle : {}),
                  }}
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  aria-invalid={!!errors.name}
                />

                {errors.name && (
                  <FieldError>{errors.name}</FieldError>
                )}
              </div>

              <div>
                <label style={labelStyle} htmlFor="email">
                  Work Email <span className="required">*</span>
                </label>

                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  style={{
                    ...inputStyle,
                    ...(errors.email ? errorInputStyle : {}),
                  }}
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  aria-invalid={!!errors.email}
                />

                {errors.email && (
                  <FieldError>{errors.email}</FieldError>
                )}
              </div>
            </div>

            {/* Company */}
            <div>
              <label style={labelStyle} htmlFor="company">
                Company
              </label>

              <input
                id="company"
                type="text"
                autoComplete="organization"
                placeholder="Company name"
                style={inputStyle}
                value={form.company}
                onChange={(e) => update('company', e.target.value)}
              />
            </div>

            {/* Project type + budget */}
            <div
              className="form-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 16,
              }}
            >
              <div>
                <label style={labelStyle} htmlFor="projectType">
                  What do you need?
                </label>

                <select
                  id="projectType"
                  style={inputStyle}
                  value={form.projectType}
                  onChange={(e) =>
                    update('projectType', e.target.value)
                  }
                >
                  {PROJECT_TYPES.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={labelStyle} htmlFor="budget">
                  Budget Range
                </label>

                <select
                  id="budget"
                  style={inputStyle}
                  value={form.budget}
                  onChange={(e) =>
                    update('budget', e.target.value)
                  }
                >
                  {BUDGETS.map((budget) => (
                    <option key={budget}>{budget}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label style={labelStyle} htmlFor="message">
                Tell us about the project{' '}
                <span className="required">*</span>
              </label>

              <textarea
                id="message"
                rows={6}
                placeholder="What are you trying to build, improve or automate?"
                style={{
                  ...inputStyle,
                  resize: 'vertical',
                  minHeight: 140,
                  ...(errors.message ? errorInputStyle : {}),
                }}
                value={form.message}
                onChange={(e) =>
                  update('message', e.target.value)
                }
                aria-invalid={!!errors.message}
              />

              {errors.message && (
                <FieldError>{errors.message}</FieldError>
              )}

              <div
                style={{
                  marginTop: 7,
                  fontSize: 11,
                  color: 'var(--text-tertiary)',
                }}
              >
                Include your goals, current situation, key requirements
                or anything else that would help us understand the project.
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-primary contact-submit"
              disabled={status === 'submitting'}
              style={{
                justifyContent: 'center',
                marginTop: 4,
                minHeight: 48,
                opacity: status === 'submitting' ? 0.7 : 1,
              }}
            >
              {status === 'submitting'
                ? 'Sending…'
                : 'Send Project Brief'}

              <span className="arrow">→</span>
            </button>

            {/* Success */}
            {status === 'success' && (
              <div className="form-success" role="status">
                <span>✓</span>

                <div>
                  <strong>Project brief received.</strong>

                  <p>
                    Thanks for reaching out. We'll review the details
                    and get back to you with the next step.
                  </p>
                </div>
              </div>
            )}

            {/* Error */}
            {status === 'error' && (
              <div className="form-error" role="alert">
                <strong>Something went wrong.</strong>

                <span>
                  Please try again or email us directly.
                </span>
              </div>
            )}

            <p
              style={{
                margin: 0,
                textAlign: 'center',
                fontSize: 11,
                color: 'var(--text-tertiary)',
              }}
            >
              Your project details are only used to respond to your
              inquiry.
            </p>
          </form>
        </div>
      </div>

      <style>{`
        .contact-form-shell {
          padding: 30px;
          border: 1px solid var(--border);
          border-radius: 15px;
          background:
            linear-gradient(
              135deg,
              rgba(255,255,255,0.035),
              rgba(255,255,255,0.015)
            );
          box-shadow: 0 25px 70px rgba(0,0,0,0.18);
        }

        .required {
          color: var(--accent-cyan);
        }

        input::placeholder,
        textarea::placeholder {
          color: rgba(161,161,170,0.5);
        }

        input:focus,
        textarea:focus,
        select:focus {
          border-color: rgba(103,232,249,0.35) !important;
          background: rgba(255,255,255,0.035) !important;
          box-shadow: 0 0 0 3px rgba(103,232,249,0.05);
        }

        select {
          cursor: pointer;
          appearance: auto;
        }

        .next-steps {
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .next-step {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-secondary);
          font-size: 12px;
        }

        .next-step-number {
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 6px;
          color: var(--accent-cyan);
          background: rgba(103,232,249,0.06);
          border: 1px solid rgba(103,232,249,0.12);
          font-size: 8px;
          font-weight: 700;
        }

        .contact-submit {
          width: 100%;
        }

        .form-success {
          display: flex;
          gap: 12px;
          padding: 14px;
          border-radius: 9px;
          border: 1px solid rgba(110,231,183,0.16);
          background: rgba(110,231,183,0.05);
          color: #6ee7b7;
          font-size: 13px;
        }

        .form-success > span {
          width: 22px;
          height: 22px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(110,231,183,0.1);
        }

        .form-success strong {
          display: block;
          margin-bottom: 4px;
          color: #6ee7b7;
        }

        .form-success p {
          margin: 0;
          color: var(--text-tertiary);
          line-height: 1.5;
        }

        .form-error {
          display: flex;
          flex-direction: column;
          gap: 3px;
          padding: 13px;
          border-radius: 9px;
          border: 1px solid rgba(255,100,100,0.16);
          background: rgba(255,100,100,0.05);
          font-size: 12.5px;
          color: #ff8080;
        }

        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 42px !important;
          }

          .contact-grid > div:first-child {
            max-width: 650px;
          }
        }

        @media (max-width: 560px) {
          .contact-form-shell {
            padding: 22px;
          }

          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

function ContactLine({ label, value, href }) {
  return (
    <a
      href={href}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        width: 'fit-content',
        textDecoration: 'none',
      }}
    >
      <span
        style={{
          fontSize: 10.5,
          color: 'var(--text-tertiary)',
          textTransform: 'uppercase',
          letterSpacing: '0.09em',
          fontWeight: 700,
        }}
      >
        {label}
      </span>

      <span
        style={{
          fontSize: 14,
          color: 'var(--text-primary)',
          fontWeight: 500,
        }}
      >
        {value}
      </span>
    </a>
  )
}

function NextStep({ number, title }) {
  return (
    <div className="next-step">
      <span className="next-step-number">{number}</span>
      <span>{title}</span>
    </div>
  )
}

function FieldError({ children }) {
  return (
    <p
      style={{
        color: '#ff8080',
        fontSize: 11.5,
        margin: '6px 0 0',
      }}
    >
      {children}
    </p>
  )
}

const errorInputStyle = {
  borderColor: 'rgba(255,100,100,0.45)',
}

