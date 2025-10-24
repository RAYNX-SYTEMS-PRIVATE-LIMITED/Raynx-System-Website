import React from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
  const products = [
    {
      title: 'Workflow Automation Suite',
      desc: 'Automate routine operations with customizable workflows and integrations.',
      img: '/Pictures/keypr1.jfif',
      to: '#'
    },
    {
      title: 'Analytics Dashboard',
      desc: 'KPIs and insights with real-time charts and role-based access.',
      img: '/Pictures/keypr2.jfif',
      to: '#'
    },
    {
      title: 'NLP Utilities',
      desc: 'Reusable components for search, summarization, and classification.',
      img: '/Pictures/businessmodel.png',
      to: '#'
    },
    {
      title: 'Smart Retail Inventory & POS System',
      desc: 'Role-based dashboards for Admin, Manager, and Cashier; POS, inventory, suppliers, and reports.',
      img: '/Pictures/smart.jpg',
      to: '/projects/smart-retail'
    },
    {
      title: 'Customer Support Ticketing System ',
      desc: 'Role-based dashboards for Admin, User, and supporter; Ticketing,Knowledge base.',
      img: '/Pictures/customer.webp',
      to: '/projects/customer-support-ticketing'
    },
  ]

  return (
    <main style={{minHeight:'100vh', padding:'60px 20px'}}>
      <section style={{textAlign:'center', marginBottom:32}}>
        <h1 style={{fontFamily:'Anton'}}>Our Products</h1>
        <p>Our products are built with passion and precision. Technology that speaks for itself.</p>
      </section>
      <section style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:20, maxWidth:1200, margin:'0 auto'}}>
        {products.map((p, i) => (
          <div key={i} style={{background:'#fff', border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden'}}>
            <img src={p.img} alt={p.title} style={{width:'100%', height:180, objectFit:'cover'}} />
            <div style={{padding:16}}>
              <h3 style={{margin:'0 0 8px 0'}}>{p.title}</h3>
              <p style={{margin:0, color:'#334155'}}>{p.desc}</p>
              {p.to && p.to !== '#' ? (
                <Link to={p.to} className="primary-btn" style={{display:'inline-block', marginTop:12}}>Learn more</Link>
              ) : (
                <a href="#" className="primary-btn" style={{display:'inline-block', marginTop:12}}>Coming soon</a>
              )}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
