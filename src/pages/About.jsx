import React from 'react'

export default function About() {
  return (
    <main>
      <style>{`
        @media (max-width: 768px) {
          .profile-row { grid-template-columns: 1fr !important; }
          .profile-photo { order: 2; }
          .profile-text { order: 1; }
        }
      `}</style>
      {/* About & Values */}
      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-img">
            <img src="/Pictures/newimage1.jpg" alt="Team working" data-src="/Pictures/newimage1.jpg" />
          </div>
          <div className="about-text">
            <h2>ABOUT US</h2>
            <p>
              Raynx Systems is a new-age software development startup committed to delivering high-quality,
              scalable, and customized tech solutions. We focus on creating value through meaningful innovation.
              Whether it's web platforms, enterprise tools, or automation systems—we build software that solves
              real-world problems.
            </p>
          </div>
        </div>
      </section>

      <section className="values-section" id="companyvalues">
        <div className="values-title">
          <div className="yellow-bar"></div>
          <h2>COMPANY<br />VALUES</h2>
        </div>
        <div className="values-content">
          <div className="vision">
            <div className="icon-box white-box"></div>
            <h3 className="yellow"><b>Vision</b></h3>
            <pre className="d1">
              To become a trusted tech partner
              for businesses across the globe
              by delivering impactful software
              that drives change and scales
              growth.
            </pre>
          </div>
          <div className="mission">
            <div className="icon-box yellow-box-bg"></div>
            <h3 className="white"><b>Mission</b></h3>
            <pre className="d2">
              To empower startups, enterprises,
              and individuals with digital
              products that are reliable,
              intelligent, and future-focused.
            </pre>
          </div>
        </div>
        <div className="values-image">
          <img src="/Pictures/valueimg.png" alt="Company Meeting" data-src="/Pictures/valueimg.png" />
        </div>
      </section>

      {/* Team */}
      <section className="team-section" id="team">
        <h2>Our Leadership Team</h2>

        {/* Profile: Finance Director */}
        <div className="profile-row" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 24, alignItems: 'start', maxWidth: 1100, margin: '24px auto', padding: '0 16px' }}>
          <div className="profile-photo" style={{ textAlign: 'center' }}>
            <img src="/gallery/venkanna_director.jpg" alt="Director – Finance" data-src="/gallery/venkanna_director.jpg" style={{ width: '100%', maxWidth: 320, height: 'auto', objectFit: 'cover', borderRadius: 6 }} />
            <div style={{ marginTop: 12 }}>
              <h3 style={{ margin: 0, color: '#0f3c4c', fontWeight: 700 }}>MR. BODA VENKANNA NAYAK</h3>
              <p style={{ marginTop: 4, color: '#475569' }}>Technical Director – Finance</p>
            </div>
          </div>
          <div className="profile-text">
            <blockquote style={{ color: '#0f3c4c', fontSize: '1.4rem', lineHeight: 1.4, fontWeight: 600, margin: '0 0 16px 0' }}>
              “Any solution should not only bring a change, it should revolutionize lives dynamically”
            </blockquote>
            <p style={{ color: '#334155' }}>
              With a deep understanding of IT infrastructure and services, Mr. Venkanna has played a key role in driving growth and
              shaping business strategy. He focuses on financial leadership, operational efficiency, and building sustainable, long‑term value.
            </p>
            <p style={{ color: '#334155' }}>
              Beyond the boardroom, he’s passionate about fitness and continuous learning—bringing balance and discipline to his leadership approach.
            </p>
            <p style={{ marginTop: 12 }}>
              <a href="https://www.linkedin.com/in/venkanna-boda-38081037a/" className="primary-btn" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
            </p>
          </div>
        </div>

        {/* Profile: CEO */}
        <div className="profile-row" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 24, alignItems: 'start', maxWidth: 1100, margin: '40px auto', padding: '0 16px' }}>
          <div className="profile-photo" style={{ textAlign: 'center' }}>
            <img src="/gallery/chander_ceo.jpg" alt="CEO and Founder" data-src="/gallery/chander_ceo.jpg" style={{ width: '100%', maxWidth: 320, height: 'auto', objectFit: 'cover', borderRadius: 6 }} />
            <div style={{ marginTop: 12 }}>
              <h3 style={{ margin: 0, color: '#0f3c4c', fontWeight: 700 }}>MR. PATHLAVATH CHENDER</h3>
              <p style={{ marginTop: 4, color: '#475569' }}>CEO – Raynx Systems Pvt. Ltd.</p>
            </div>
          </div>
          <div className="profile-text">
            <blockquote style={{ color: '#0f3c4c', fontSize: '1.4rem', lineHeight: 1.4, fontWeight: 600, margin: '0 0 16px 0' }}>
              “Building smart solutions that power tomorrow.”
            </blockquote>
            <p style={{ color: '#334155' }}>
              MBA graduate with over a decade of experience in education, training, and program management. He leads Raynx Systems with a
              product‑first mindset—focusing on outcomes, velocity, and customer success.
            </p>
            <p style={{ marginTop: 12 }}>
              <a href="https://www.linkedin.com/in/chender-pathlavath-b7883025b/" className="primary-btn" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
            </p>
          </div>
        </div>

        {/* Profile: Administration Director */}
        <div className="profile-row" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 24, alignItems: 'start', maxWidth: 1100, margin: '40px auto 12px', padding: '0 16px' }}>
          <div className="profile-photo" style={{ textAlign: 'center' }}>
            <img src="/gallery/director2.jpg" alt="Director – Administration" data-src="/gallery/director2.jpg" style={{ width: '100%', maxWidth: 320, height: 'auto', objectFit: 'cover', borderRadius: 6 }} />
            <div style={{ marginTop: 12 }}>
              <h3 style={{ margin: 0, color: '#0f3c4c', fontWeight: 700 }}>MR. AMBATI THIRUPATHI GOUD</h3>
              <p style={{ marginTop: 4, color: '#475569' }}>Director – Administration</p>
            </div>
          </div>
          <div className="profile-text">
            <blockquote style={{ color: '#0f3c4c', fontSize: '1.4rem', lineHeight: 1.4, fontWeight: 600, margin: '0 0 16px 0' }}>
              “We’re not just a team — we’re a force for progress.”
            </blockquote>
            <p style={{ color: '#334155' }}>
              Oversees operations, policy development, and coordination to ensure organizational efficiency and operational excellence.
              He enables teams with clear processes and a culture of accountability.
            </p>
            <p style={{ marginTop: 12 }}>
              <a href="https://www.linkedin.com/in/ambati-thirupathi-goud-0b7a7b1b3/" className="primary-btn" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
            </p>
          </div>
        </div>
      </section>

      {/* Life at Raynx Systems (Gallery) */}
      <section id="company-gallery">
        <h2 className="sec">Life at Raynx Systems</h2>
        <div className="scroll-gallery">
          <div className="scroll-track">
            <img src="/gallery/image1.jpg" alt="Team Photo" data-src="/gallery/image1.jpg" />
            <img src="/gallery/image10.jpeg" alt="Team Photo" data-src="/gallery/image10.jpeg" />
            <img src="/gallery/image11.jpeg" alt="Team Photo" data-src="/gallery/image11.jpeg" />
            <img src="/gallery/image4.jpg" alt="Team Photo" data-src="/gallery/image4.jpg" />
            <img src="/gallery/image7.jpg" alt="Team Photo" data-src="/gallery/image7.jpg" />
            <img src="/gallery/image10.jpeg" alt="Team Photo" data-src="/gallery/image10.jpeg" />
          </div>
        </div>
      </section>
    </main>
  )
}
