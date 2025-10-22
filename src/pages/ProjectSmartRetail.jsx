import React from 'react'

export default function ProjectSmartRetail() {
  return (
    <main style={{minHeight:'100vh'}}>
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
        <h1 className="title">SMART RETAIL INVENTORY & POS SYSTEM</h1>
        <p className="subtitle">React-based frontend for retail operations with role-based dashboards for Admin, Manager, and Cashier.</p>
      </header>

      <nav className="toc">
        <a href="#overview">Project Overview</a>
        <a href="#features">Key Features</a>
        <a href="#frontend">Frontend Pages</a>
        <a href="#admin">Admin Module</a>
        <a href="#manager">Manager Module</a>
        <a href="#cashier">Cashier Module</a>
        <a href="#backend">Backend (Tech Doc)</a>
      </nav>

      <section id="overview" className="section">
        <h2>Project Overview</h2>
        <p>
          The Smart Retail Inventory System (Frontend) is a React-based web application designed to streamline retail operations with
          role-based navigation for <b>Admin</b>, <b>Manager</b>, and <b>Cashier</b>. It focuses on clean UI/UX and real-time state updates.
        </p>
        <p className="quote">“From login to billing—optimized flows for speed, accuracy, and visibility.”</p>
      </section>

      <section id="features" className="section">
        <h2>Key Features</h2>
        <div className="grid">
          <div className="card"><b>User Management</b><p>Secure auth and role-based access control.</p></div>
          <div className="card"><b>Inventory</b><p>Track products, categories, stock levels and batches.</p></div>
          <div className="card"><b>POS</b><p>Process sales and generate receipts with multiple payments.</p></div>
          <div className="card"><b>Reporting</b><p>Sales and inventory reports for daily, weekly, monthly views.</p></div>
          <div className="card"><b>Multi-tenant</b><p>Manage multiple stores from a single instance.</p></div>
        </div>
      </section>

      <section id="frontend" className="section">
        <h2>Frontend Pages and Components</h2>
        <div className="card">
          <h3>Login Page</h3>
          <ul>
            <li>Role dropdown (Admin, Manager, Cashier)</li>
            <li>User ID and Password with validation</li>
            <li>Redirect using <span className="mono">useNavigate()</span> to dashboards</li>
          </ul>
          <p><b>Navigation Flow:</b> Admin → <span className="mono">/admin</span>, Cashier → <span className="mono">/cashier</span>, Manager → <span className="mono">/manager</span></p>
        </div>
      </section>

      <section id="admin" className="section">
        <h2>Admin Dashboard</h2>
        <div className="grid">
          <div className="card">
            <h3>Overview</h3>
            <p>KPI cards and navigation to Manager, Products, Cashiers. Logout returns to Login.</p>
          </div>
          <div className="card">
            <h3>Products</h3>
            <p>Searchable product list by Name/SKU/Category. Add, edit, deactivate products, manage price/sku/tax/category.</p>
          </div>
          <div className="card">
            <h3>Edit Product</h3>
            <p>Controlled inputs via <span className="mono">useState</span>, toggle active, update stock/reorder. Seamless back navigation.</p>
          </div>
          <div className="card">
            <h3>Add Batch</h3>
            <p>Capture quantity, cost, expiry, created date, and location for batch-level tracking and traceability.</p>
          </div>
        </div>
      </section>

      <section id="manager" className="section">
        <h2>Manager Dashboard</h2>
        <div className="grid">
          <div className="card">
            <h3>Suppliers</h3>
            <p>Search, add, edit, delete. Maintain vendor records and integrate with purchase orders and inventory updates.</p>
          </div>
          <div className="card">
            <h3>Purchase Orders</h3>
            <p>Create and track POs with status: Pending, Approach, Cancel, Received. Update inventory when received.</p>
          </div>
        </div>
      </section>

      <section id="cashier" className="section">
        <h2>Cashier Dashboard & POS</h2>
        <div className="grid">
          <div className="card">
            <h3>Dashboard</h3>
            <p>Today’s Sales, quick link to POS, and recent transactions with status and totals.</p>
          </div>
          <div className="card">
            <h3>POS System</h3>
            <p>Search bar, cart with subtotal/tax/discounts, multiple payment modes, finalize/cancel, cashier info.</p>
          </div>
        </div>
      </section>

      <section id="backend" className="section">
        <h2>Inventory Smart Retail System – Technical (Backend)</h2>
        <div className="card">
          <p><b>Stack:</b> Spring Boot 3, Java 17, MySQL 8, Spring Data JPA, Spring Security (JWT), Flyway, OpenAPI.</p>
          <p><b>Core Entities:</b> User, Role, Product, Category, Sale, SaleItem.</p>
          <p><b>Auth:</b> JWT with access/refresh tokens. Roles: ROLE_ADMIN, ROLE_MANAGER, ROLE_CASHIER, ROLE_CUSTOMER.</p>
          <p><b>Key Endpoints:</b> <span className="mono">/api/v1/auth/*, /users, /products, /categories, /sales</span></p>
          <p><b>Deployment:</b> Dockerized Spring Boot service; run with <span className="mono">docker run -p 8080:8080 smart-retail-backend</span></p>
        </div>
      </section>

      <section className="section" style={{textAlign:'center', paddingBottom:40}}>
        <a href="/contact" className="primary-btn">Discuss a similar build</a>
      </section>
    </main>
  )
}
