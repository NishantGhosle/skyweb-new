const PRINCIPLES = [
  { title: 'Build with Purpose', desc: 'Every feature should solve a real problem.' },
  { title: 'Keep It Simple', desc: 'Complexity should be introduced only when necessary.' },
  { title: 'Engineer for Scale', desc: 'Architecture should support future growth.' },
  { title: 'Own the Outcome', desc: 'We care about whether the product succeeds, not just whether the code ships.' },
]

export default function Principles() {
  return (
    <section style={{ padding: '0 0 96px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 20 }} id="principles-grid">
        {PRINCIPLES.map((p, i) => (
          <div key={p.title} style={{ borderTop: '2px solid var(--border-strong)', paddingTop: 16 }}>
            <div style={{ fontSize: 13, color: 'var(--text-tertiary)', fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: 10 }}>
              {String(i + 1).padStart(2, '0')}
            </div>
            <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{p.title}</h3>
            <p style={{ margin: 0, fontSize: 14 }}>{p.desc}</p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 860px) {
          #principles-grid { grid-template-columns: repeat(2, minmax(0,1fr)) !important; row-gap: 32px !important; }
        }
        @media (max-width: 520px) {
          #principles-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
