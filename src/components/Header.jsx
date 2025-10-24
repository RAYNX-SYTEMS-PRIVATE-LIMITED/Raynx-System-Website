import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../../public/css/styles.css'



export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Close menu on route change
  useEffect(() => { setOpen(false) }, [location.pathname])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo">
            <Link to="/" className="skip-link">
              
              <span className="logo-text">
                
              </span>
              <img
                src="/Pictures/bluelogo.png"
                alt="Raynx Systems Logo"
                className="logo-image"
              /> 
              
            </Link>
          </div>
          <div
            id="menu-toggle"
            className="menu-toggle"
            role="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            {open ? '✕' : '☰'}
          </div>
        </div>
        <ul className={`nav-links ${open ? 'show' : ''}`} id="nav-links">
          {[
            { to: '/', label: 'Home' },
            { to: '/services', label: 'Services' },
            { to: '/products', label: 'Products' },
            { to: '/about', label: 'About' },
            { to: '/careers', label: 'Careers' },
            { to: '/contact', label: 'Contact' },
           
          ].map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={location.pathname === to ? 'active' : ''}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--primary-blue)'
                  e.target.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = location.pathname === to ? 'var(--primary-blue)' : 'var(--text-dark)'
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                {label}
                {location.pathname === to && <span></span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
