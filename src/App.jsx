import React, { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import ProjectSmartRetail from './pages/ProjectSmartRetail'
import CustomerSupportTicketing from './pages/CustomersupportTicketing'

function PageWrap({ children }) {
  const location = useLocation()
  const ref = useRef(null)
  useEffect(() => {
    // Scroll to top and re-trigger page enter animation on every route change
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    const el = ref.current
    if (!el) return
    el.classList.remove('page-enter')
    const id = requestAnimationFrame(() => el.classList.add('page-enter'))
    // Lazy-load images within the current page content on each route change
    const images = el.querySelectorAll('img[data-src]')
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          img.classList.remove('lazy')
          img.classList.add('loaded')
          observer.unobserve(img)
        }
      })
    })
    images.forEach(img => {
      img.classList.add('lazy')
      imageObserver.observe(img)
    })
    return () => {
      cancelAnimationFrame(id)
      imageObserver.disconnect()
    }
  }, [location.pathname])
  return (
    <div key={location.pathname} ref={ref} className="page">
      {children}
    </div>
  )
}

export default function App() {
  useEffect(() => {
    // Lazy loading implementation
    const images = document.querySelectorAll('img[data-src]')
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          img.classList.remove('lazy')
          img.classList.add('loaded')
          observer.unobserve(img)
        }
      })
    })

    images.forEach(img => {
      img.classList.add('lazy')
      imageObserver.observe(img)
    })

    return () => imageObserver.disconnect()
  }, [])

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <PageWrap>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/projects/smart-retail" element={<ProjectSmartRetail />} />
            <Route path="/projects/customer-support-ticketing" element={<CustomerSupportTicketing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </PageWrap>
      </div>
      <Footer />
    </div>
  )
}
