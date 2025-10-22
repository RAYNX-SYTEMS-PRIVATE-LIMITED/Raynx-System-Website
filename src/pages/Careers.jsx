import React from 'react'

export default function Careers() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>

      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 16px' }}>
        <section style={{ marginBottom: 24 }}>
          <h1 style={{ fontFamily: 'Anton', fontSize: '2.4rem' }}>Careers at Raynx Systems</h1>
          <p style={{ color: '#334155', marginTop: 8 }}>Join us to build scalable, future-ready software and help clients transform their businesses.</p>
        </section>

        <section style={{ display: 'grid', gap: 16 }}>
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 20 }}>
            <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Open Roles</h2>
            <ul style={{ marginTop: 12, paddingLeft: 18 }}>
              <li>Frontend Developer (React)</li>
              <li>Backend Developer (Node/Express)</li>
              <li>Full Stack Developer</li>
            </ul>
          </div>
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 20 }}>
            <h2 style={{ margin: 0, fontSize: '1.25rem' }}>How to Apply</h2>
            <p style={{ marginTop: 12 }}>Send your resume to <a href="mailto:hr@raynxsystems.in?subject=Job Application">hr@raynxsystems.in</a> with the role in the subject line.</p>
            <a href="mailto:hr@raynxsystems.in?subject=Job Application" className="primary-btn" style={{ display: 'inline-block', marginTop: 12 }}>Apply via Email</a>
          </div>
        </section>
      </main>
    </div>
  )
}
