import React from 'react'

export default function CustomerSupportTicketing() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <style>{`
        .case-hero { max-width: 1100px; margin: 0 auto; padding: 24px 16px 8px; }
        .badge { display:inline-block; background:#e0f2fe; color:#0c4a6e; font-weight:700; border-radius:999px; padding:6px 12px; font-size:.85rem; }
        .title { font-family: Anton, sans-serif; margin:8px 0 6px 0; color:#0f3c4c; font-size:2.4rem; line-height:1.1; }
        .subtitle { color:#334155; }
        .toc { max-width: 1100px; margin: 12px auto; padding: 8px 16px; display:grid; grid-template-columns: repeat(auto-fit, minmax(220px,1fr)); gap:8px; }
        .toc a { background:#fff; border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px; color:#0f3c4c; text-decoration:none; }
        .section { max-width: 1100px; margin: 18px auto; padding: 12px 16px; }
        .section h2 { font-family: Anton, sans-serif; color:#1273b6; margin: 0 0 8px 0; }
        .grid { display:grid; grid-template-columns: repeat(auto-fit, minmax(260px,1fr)); gap:16px; }
        .card { background:#fff; border:1px solid #e5e7eb; border-radius:12px; padding:16px; }
        .mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace; }
        .table { width:100%; border-collapse: collapse; }
        .table th, .table td { border-bottom:1px solid #e5e7eb; padding:8px; text-align:left; }
        .quote { color:#0f3c4c; font-weight:600; font-size:1.1rem; }
      `}</style>

      <header className="case-hero">
        <span className="badge">Case Study</span>
        <h1 className="title">CUSTOMER SUPPORT TICKETING SYSTEM </h1>
        <p className="subtitle">React-based frontend for Solving Tickets of a Customer</p>
      </header>

      <nav className="toc">
        <a href="#overview">Project Overview</a>
        <a href="#features">Key Features</a>
        <a href="#frontend">Frontend Pages</a>
        <a href="#admin">Admin Module</a>
        <a href="#manager">User Module</a>
        <a href="#cashier">support Module</a>
        <a href="#backend">Backend (Tech Doc)</a>
      </nav>

      <section id="overview" className="section">
        <h2>Project Overview</h2>
        <p>
          The Customer Support Ticketing System is a multi-channel support platform designed to manage customer issues, track SLAs, provide canned responses, and host a searchable Knowledge Base (KB). The system supports role-based access for Admins, Support Agents, and End Users and provides real-time notifications via WebSocket.
        </p>
        <p className="quote">“Smart Ticketing for Faster Customer Support.”</p>
      </section>

      <section id="features" className="section">
        <h2>Key Features</h2>
        <div className="grid">
          <div className="card"><b> Ticket Creation</b><p>Enables users to create support tickets via web forms, email (mock), or API for easy issue reporting.</p></div>
          <div className="card"><b>SLA Tracking</b><p>Automatically assigns tickets to agents and tracks SLAs with real-time breach detection alerts.</p></div>
          <div className="card"><b>Knowledge Base</b><p>Provides a searchable Knowledge Base with tagging for quick access to relevant solutions.</p></div>
          <div className="card"><b>Real-Time Updates</b><p>Delivers instant WebSocket updates and mock email notifications to keep users informed.</p></div>
          <div className="card"><b> Access Control</b><p>Ensures secure access using role-based permissions and JWT-based authentication.</p></div>
        </div>
      </section>

      <section id="frontend" className="section">
        <h2>Frontend Pages and Components</h2>
        <div className="card" style={{ paddingLeft: "30px" }}>
          <h3>Login Page</h3>
          <ul>
            <li>Role dropdown (Admin,User,Support Agent)</li>
            <li>Email and Password </li>
            <li>Redirect using <span className="mono">useNavigate()</span> to dashboards</li>
          </ul>
          <p><b>Navigation Flow:</b> Admin → <span className="mono">/admin</span>, User→ <span className="mono">/user</span>, Support→ <span className="mono">/support</span></p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '16px' }}>
            <img src="/public/Pictures/login.jpg" alt="Login Page" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            <img src="/public/Pictures/Register.jpg" alt="Register Page " style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          </div>
        </div>
      </section>

      <section id="admin" className="section">
        <h2>Admin Dashboard</h2>
        <div className="grid">
          <div className="card">

            <img src="/public/Pictures/Ticket(admin).jpg" alt="Tickets" style={{ width: '320px', height: '260px', marginBottom: '25px' }} />
            <h3>Tickets</h3>
            <p>Handles customer issues, complaints, or requests raised within the system.</p>
          </div>
          <div className="card">
            <img src="/public/Pictures/User(admin).jpg" alt="Users" style={{ width: '320px', height: '260px', marginBottom: '25px' }} />
            <h3>Users</h3>
            <p>Manages all types of system users — customers, agents, and administrators.</p>
          </div>
          <div className="card">

            <img src="/public/Pictures/KB(admin).jpg" alt="Knowledge Base" style={{ width: '320px', height: '260px', marginBottom: '25px' }} />
            <h3>Knowledge Base </h3>
            <p>Stores and manages helpful articles, FAQs, and troubleshooting guides for users and agents.</p>
          </div>
          <div className="card">

            <img src="/public/Pictures/profile(admin).png" alt="Profile" style={{ width: '320px', height: '260px', marginBottom: '25px' }} />
            <h3>profile</h3>
            <p>Access your profile details and modify account settings</p>
          </div>
        </div>
      </section>



      <section id="manager" className="section">
        <h2>Support Dashboard</h2>
        <div className="grid">
          <div className="card">
            <h3>Tickets</h3>
            <p>This module or system is responsible for handling and tracking service requests, issues, or inquiries. It is a central part of any support or issue-tracking platform.</p>

            <img src="/public/Pictures/Ticket(support).jpg" alt="Support Tickets" style={{ width: '500px', height: '500px', marginBottom: '25px' }} />
          </div>
          <div className="card">
            <h3>knowledge Base</h3>
            <p>A designated repository for structured information, documentation, articles, FAQs, and self-help guides. Its primary purpose is to allow individuals to find answers without needing to submit a ticket.</p>

            <img src="/public/Pictures/KB(support).jpg" alt="Support Knowledge Base" style={{ width: '500px', height: '500px', marginBottom: '25px' }} />
          </div>
        </div>
      </section>



      <section id="cashier" className="section">
        <h2>User Dashboard</h2>
        <div className="grid">
          <div className="card">
            <h3>Tickets</h3>
            <p>A core component or module of the system, likely a Help Desk or Issue Tracking system.</p>

            <img src="/public/Pictures/Tickets(user).jpg" alt="User Tickets" style={{ width: '500px', height: '500px', marginBottom: '25px' }} />
          </div>
          <div className="card">
            <h3>Knowledge Base</h3>
            <p>A repository for stored information, articles, tutorials, FAQs, or documentation. It's a resource for self-service support.</p>

            <img src="/public/Pictures/KB(user).jpg" alt="User Knowledge Base" style={{ width: '500px', height: '500px', marginBottom: '25px' }} />
          </div>
        </div>
      </section>


      <section id="backend" className="section">
        <h2> Customer Support Ticketing System (Backend)</h2>
        <div className="card">
          <p><b>Stack:</b> Spring Boot 3, Java 17, PostgreSQL, Spring Data JPA, Spring Security (JWT), Flyway, RestAPI.</p>
          <p><b>Core Entities:</b> User, Ticket, Ticket comment, KB article.</p>
          <p><b>Auth:</b> JWT with access/refresh tokens. Roles: ROLE_ADMIN, ROLE_SUPPORT AGENT, ROLE_USER.</p>
          <p><b>Key Endpoints:</b> <span className="mono">/api/v1/auth/*, /user,/Ticket, /KB Article, /SLA</span></p>
          <p><b>Deployment:</b> Dockerized Spring Boot service; run with <span className="mono">docker run -p 8080:8080 Customer-support-ticketingl-backend</span></p>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center', paddingBottom: 40 }}>
        <a href="/contact" className="primary-btn">Discuss a similar build</a>
      </section>
    </main>

  )
}
