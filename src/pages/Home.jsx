import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const heroRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    // Animate hero text on load
    const hero = heroRef.current
    if (hero) {
      hero.classList.add('fade-in-up')
    }

    // Animate stats counter
    const stats = statsRef.current
    if (stats) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounters()
            observer.unobserve(entry.target)
          }
        })
      })
      observer.observe(stats)
    }
  }, [])

  const animateCounters = () => {
    const counters = document.querySelectorAll('.counter')
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'))
      const duration = 2000
      const step = target / (duration / 16)
      let current = 0

      const timer = setInterval(() => {
        current += step
        if (current >= target) {
          counter.textContent = target + '+'
          clearInterval(timer)
        } else {
          counter.textContent = Math.floor(current) + '+'
        }
      }, 16)
    })
  }

  return (
    <main className="home-main">
      {/* Hero Section */}
      <div className="hero-container" id="home">
        <div className="hero-background"></div>

        <main className="hero-section">
          <div className="hero-text-content" ref={heroRef}>
           
            <h1 className="hero-title">
              <span className="hero-title-raynx">RAYNX SYSTEMS</span>
              {/* <span className="hero-title-systems">SYSTEMS</span> */}
            </h1>
            <p className="hero-subtitle">PRIVATE LIMITED</p>
            <p className="hero-tagline">Empowering businesses through innovation and technology.</p>
            <div className="hero-buttons">
              <Link to="/services" className="hero-primary-btn">Our Services</Link>
              <Link to="/contact" className="hero-secondary-btn">Get Started</Link>
            </div>
          </div>
        </main>

        {/* Animated scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
        </div>
      </div>

      {/* About summary */}
      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-img slide-in-left">
            <img
              src="/Pictures/newimage1.jpg"
              alt="Team working"
              data-src="/Pictures/newimage1.jpg"
            />
            
          </div>
          <div className="about-text slide-in-right">
            <h2 className="about-title">
              ABOUT US
            </h2>
            <p className="about-description">
              Raynx Systems delivers high-quality, scalable, and customized software solutions.
              We build web platforms, enterprise tools, and automation systems that solve real-world problems.
              Our team of experts combines technical excellence with business acumen to deliver
              innovative solutions that drive growth and efficiency.
            </p>
            
            <Link to="/about" className="primary-btn">Learn More About Us</Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-section">
        <div className="services-container">
          <h2 className="services-title">
            Our Services
          </h2>
          <p className="services-description">
            Comprehensive technology solutions tailored to transform your business operations
          </p>
          <div className="services-grid">
            {[
              {
                icon: 'fa-code',
                title: 'Web Development',
                desc: 'Custom web applications and platforms tailored to your business needs.',
                color: '#1273b6'
              },
              {
                icon: 'fa-building',
                title: 'Enterprise Solutions',
                desc: 'Scalable software for large organizations with complex requirements.',
                color: '#7c3aed'
              },
              {
                icon: 'fa-robot',
                title: 'Automation Systems',
                desc: 'Streamline operations with intelligent automation and AI-driven tools.',
                color: '#059669'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="service-card"
                data-delay={`${index * 0.2}s`}
              >
                <div
                  className="service-icon"
                  data-color={service.color}
                >
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="services-cta">
            <Link to="/services" className="secondary-btn">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Projects/Work Area */}
      <section className="projects-section">
        <div className="projects-container">
          <h2 className="projects-title">
            Our Projects
          </h2>
          <p className="projects-description">
            Showcasing our expertise in delivering innovative solutions across industries
          </p>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image-container">
                <img
                  src="/Pictures/smart.jpg"
                  alt="Smart Retail System"
                  data-src="/Pictures/smart.jpg"
                />
                <div className="project-badge">Featured</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Smart Retail Inventory & POS System</h3>
                <p className="project-description">
                  A comprehensive retail management solution with role-based dashboards for Admin, Manager, and Cashier.
                  Features real-time inventory tracking, sales analytics, and automated reporting.
                </p>
                <div className="project-tags">
                  <span className="tag-react">React</span>
                  <span className="tag-nodejs">Node.js</span>
                  <span className="tag-mysql">MySQL</span>
                </div>
                <Link to="/projects/smart-retail" className="project-link">
                 View Case Study
                </Link>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image-container">
                <img
                  src="/Pictures/customerSupport.jpg"
                  alt="Smart Retail System"
                  data-src="/Pictures/customerSupport.jpg"
                />
                <div className="project-badge">Featured</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Customer Support Ticketing System</h3>
                <p className="project-description">
                  Role-based dashboards for Admin, User, and supporter; Ticketing,Knowledge base.
                </p>
                <div className="project-tags">
                  <span className="tag-react">React</span>
                  <span className="tag-nodejs">Node.js</span>
                  <span className="tag-mysql">MySQL</span>
                </div>
                <Link to="\CustomerSupportTicketing" className="project-link">
                  View Case Study
                </Link>
              </div>
            </div>


            {/* Additional project placeholders */}
            <div className="project-card coming-soon">
              <div className="project-image-container">
                <img
                  src="/Pictures/keypr1.jfif"
                  alt="Workflow Automation"
                  data-src="/Pictures/keypr1.jfif"
                />
                <div className="project-badge coming-soon">Coming Soon</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Workflow Automation Suite</h3>
                <p className="project-description">
                  Intelligent workflow automation platform designed to streamline business processes
                  and improve operational efficiency across departments.
                </p>
                <div className="project-tags">
                  <span className="tag-python">Python</span>
                  <span className="tag-aiml">AI/ML</span>
                </div>
                <button className="project-link coming-soon-btn" disabled>
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="testimonials-title">
            What Our Clients Say
          </h2>
          <div className="testimonials-grid">
            {[
              {
                quote: "Raynx Systems transformed our retail operations with their innovative Smart POS system. The implementation was seamless and the results exceeded our expectations.",
                author: "Rajesh Kumar",
                // position: "CEO, Modern Mart",
                rating: 5
              },
              {
                quote: "Professional team with outstanding technical expertise. They delivered a custom web platform that perfectly matched our business requirements.",
                author: "Priya Sharma",
                // position: "CTO, TechStart Solutions",
                rating: 5
              },
              {
                quote: "The automation solutions provided by Raynx Systems have significantly improved our operational efficiency. Highly recommended!",
                author: "Amit Patel",
                // position: "Operations Manager, Indus Corp",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card" data-delay={`${index * 0.2}s`}>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>
                <blockquote className="testimonial-quote">
                  "{testimonial.quote}"
                </blockquote>
                <div className="testimonial-author">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Innovate?</h2>
          <p className="cta-description">
            Let's discuss how we can help your business grow with cutting-edge technology solutions.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-primary-btn">
              Start Your Project
            </Link>
            <Link to="/services" className="cta-secondary-btn">
              View Services
            </Link>
          </div>
        </div>
      </section>


    </main>
  )
}
