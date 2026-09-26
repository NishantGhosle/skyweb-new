import { useEffect, useState } from 'react'
import skyweb_black from "../../public/skyweb_black.jpeg"

const LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,

          background: scrolled
            ? 'rgba(8, 9, 11, 0.82)'
            : 'rgba(8, 9, 11, 0.25)',

          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',

          borderBottom: scrolled
            ? '1px solid var(--border)'
            : '1px solid transparent',

          transition:
            'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 72,
          }}
        >
          {/* skyweb_black logo */}
          <a
            href="#top"
            onClick={closeMenu}
            aria-label="Home"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              position: 'relative',
              zIndex: 1002,
              flexShrink: 0,
            }}
          >
            <img
              src={skyweb_black}
              alt="Company Logo"
              style={{
                height: 70,
                width: 'auto',
                maxWidth: 180,
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hide-mobile"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 36,
            }}
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 14.5,
                  color: 'var(--text-secondary)',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--text-primary)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)'
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div
            className="hide-mobile"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
            }}
          >
            <a
              href="#contact"
              style={{
                fontSize: 14.5,
                color: 'var(--text-secondary)',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Contact Us
            </a>

            <a href="#contact" className="btn btn-primary">
              Start a Project
              <span className="arrow">→</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="show-mobile"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            style={{
              position: 'relative',
              zIndex: 1002,

              width: 40,
              height: 40,

              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              padding: 0,

              background: 'transparent',
              border: '1px solid var(--border-strong)',
              borderRadius: 8,

              cursor: 'pointer',
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <path
                    d="M3 3L15 15"
                    stroke="#F5F5F5"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />

                  <path
                    d="M15 3L3 15"
                    stroke="#F5F5F5"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </>
              ) : (
                <>
                  <path
                    d="M2 4H16"
                    stroke="#F5F5F5"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />

                  <path
                    d="M2 9H16"
                    stroke="#F5F5F5"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />

                  <path
                    d="M2 14H16"
                    stroke="#F5F5F5"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div
          className="show-mobile"
          style={{
            position: 'fixed',
            top: 72,
            left: 0,
            right: 0,
            bottom: 0,

            zIndex: 999,

            background: 'rgba(8, 9, 11, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',

            padding: '32px 24px',

            display: 'flex',
            flexDirection: 'column',

            overflowY: 'auto',

            animation: 'mobileMenuIn 0.2s ease-out',
          }}
        >
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                style={{
                  fontSize: 24,
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,

                  color: 'var(--text-primary)',
                  textDecoration: 'none',

                  padding: '18px 4px',

                  borderBottom: '1px solid var(--border)',

                  transition: 'opacity 0.2s ease',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={closeMenu}
            className="btn btn-primary"
            style={{
              marginTop: 28,
              justifyContent: 'center',
              width: '100%',
            }}
          >
            Start a Project
            <span className="arrow">→</span>
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            style={{
              marginTop: 20,

              display: 'block',
              textAlign: 'center',

              fontSize: 15,
              fontWeight: 500,

              color: 'var(--text-secondary)',
              textDecoration: 'none',
            }}
          >
            Contact Us
          </a>
        </div>
      )}

      <style>{`
        @keyframes mobileMenuIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}