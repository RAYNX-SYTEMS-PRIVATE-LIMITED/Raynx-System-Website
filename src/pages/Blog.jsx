import React from 'react'

export default function Blog() {
  return (
    <main style={{minHeight:'100vh', padding:'40px 16px'}}>
      <section style={{maxWidth:1000, margin:'0 auto'}}>
        <h1 style={{fontFamily:'Anton'}}>Insights</h1>
        <p style={{color:'#334155'}}>Thoughts on technology, product, and delivery.</p>
        <div style={{marginTop:24, display:'grid', gap:16}}>
          <article style={{background:'#fff', border:'1px solid #e5e7eb', borderRadius:12, padding:16}}>
            <h3>How digital transformation helps small businesses</h3>
            <p style={{marginTop:8, color:'#475569'}}>Key steps and practical tips to modernize operations with measurable ROI.</p>
          </article>
          <article style={{background:'#fff', border:'1px solid #e5e7eb', borderRadius:12, padding:16}}>
            <h3>Why React.js is perfect for scalable web apps</h3>
            <p style={{marginTop:8, color:'#475569'}}>Component architecture, ecosystem, and performance considerations.</p>
          </article>
        </div>
      </section>
    </main>
  )
}
