import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { imageUrl } from '../utils/imageUrl'

export default function Home() {
  const heroRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    if (hero) hero.classList.add('fade-in-up')

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

  // Common animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  }

  const containerStagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  }

  return (
    <main className="home-main">
      {/* Hero Section */}
      <motion.div
        className="hero-container"
        id="home"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="hero-background"></div>

        <motion.main
          className="hero-section"
          ref={heroRef}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text-content" variants={containerStagger}>
            <motion.h1 className="hero-title" variants={fadeUp}>
              <span className="hero-title-raynx">RAYNX SYSTEMS</span>
            </motion.h1>
            <motion.p className="hero-subtitle" variants={fadeUp}>
              PRIVATE LIMITED
            </motion.p>
            <motion.p className="hero-tagline" variants={fadeUp}>
              Empowering businesses through innovation and technology.
            </motion.p>
            <motion.div className="hero-buttons" variants={fadeUp}>
              <Link to="/services" className="hero-primary-btn">Our Services</Link>
              <Link to="/contact" className="hero-secondary-btn">Get Started</Link>
            </motion.div>
          </motion.div>
        </motion.main>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* About Section */}
      <motion.section
        className="about-section"
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerStagger}
      >
        <div className="about-container">
          <motion.div className="about-img" variants={fadeUp}>
            <img src={imageUrl('Pictures/newimage1.jpg')} alt="Team working" />
          </motion.div>
          <motion.div className="about-text" variants={fadeUp}>
            <h2 className="about-title">ABOUT US</h2>
            <p className="about-description">
              Raynx Systems delivers high-quality, scalable, and customized software solutions.
              We build web platforms, enterprise tools, and automation systems that solve real-world problems.
              Our team combines technical excellence with business acumen to deliver
              innovative solutions that drive growth and efficiency.
            </p>
            <Link to="/about" className="primary-btn">Learn More About Us</Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="services-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerStagger}
      >
        <motion.div className="services-container" variants={fadeUp}>
          <motion.h2 className="services-title" variants={fadeUp}>Our Services</motion.h2>
          <motion.p className="services-description" variants={fadeUp}>
            Comprehensive technology solutions tailored to transform your business operations
          </motion.p>

          <motion.div className="services-grid" variants={containerStagger}>
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
              <motion.div
                key={index}
                className="service-card"
                variants={fadeUp}
                transition={{ delay: index * 0.2 }}
              >
                <div className="service-icon" data-color={service.color}>
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="services-cta" variants={fadeUp}>
            <Link to="/services" className="secondary-btn">View All Services</Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Projects/Work Area */}
      <motion.section className="projects-section"> <div className="projects-container"> <h2 className="projects-title"> Our Projects </h2> <p className="projects-description"> Showcasing our expertise in delivering innovative solutions across industries </p> <div className="projects-grid"> <div className="project-card"> <div className="project-image-container"> <img src={imageUrl('Pictures/smart.jpg')} alt="Smart Retail System" data-src={imageUrl('Pictures/smart.jpg')} /> <div className="project-badge">Featured</div> </div> <div className="project-content"> <h3 className="project-title">Smart Retail Inventory & POS System</h3> <p className="project-description"> A comprehensive retail management solution with role-based dashboards for Admin, Manager, and Cashier. Features real-time inventory tracking, sales analytics, and automated reporting. </p> <div className="project-tags"> <span className="tag-react">React</span> <span className="tag-nodejs">Node.js</span> <span className="tag-mysql">MySQL</span> </div> <Link to="/projects/smart-retail" className="project-link"> View Case Study </Link> </div> </div> <div className="project-card"> <div className="project-image-container"> <img src={imageUrl('Pictures/customerSupport.jpg')} alt="Smart Retail System" data-src={imageUrl('Pictures/customerSupport.jpg')} /> <div className="project-badge">Featured</div> </div> <div className="project-content"> <h3 className="project-title">Customer Support Ticketing System</h3> <p className="project-description"> Role-based dashboards for Admin, User, and supporter; Ticketing,Knowledge base. </p> <div className="project-tags"> <span className="tag-react">React</span> <span className="tag-nodejs">Node.js</span> <span className="tag-mysql">MySQL</span> </div> <Link to="/projects/customer-support-ticketing" className="project-link"> View Case Study </Link> </div> </div> {/* Additional project placeholders */} <div className="project-card coming-soon"> <div className="project-image-container"> <img src={imageUrl('Pictures/keypr1.jfif')} alt="Workflow Automation" data-src={imageUrl('Pictures/keypr1.jfif')} /> <div className="project-badge coming-soon">Coming Soon</div> </div> <div className="project-content"> <h3 className="project-title">Workflow Automation Suite</h3> <p className="project-description"> Intelligent workflow automation platform designed to streamline business processes and improve operational efficiency across departments. </p> <div className="project-tags"> <span className="tag-python">Python</span> <span className="tag-aiml">AI/ML</span> </div> <button className="project-link coming-soon-btn" disabled> Coming Soon </button> </div> </div> </div> </div> </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="testimonials-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerStagger}
      >
        <div className="testimonials-container">
          <motion.h2 className="testimonials-title" variants={fadeUp}>
            What Our Clients Say
          </motion.h2>

          <motion.div className="testimonials-grid" variants={containerStagger}>
            {[
              {
                quote: "Raynx Systems transformed our retail operations with their innovative Smart POS system.",
                author: "Rajesh Kumar",
                rating: 5
              },
              {
                quote: "Professional team with outstanding technical expertise.",
                author: "Priya Sharma",
                rating: 5
              },
              {
                quote: "The automation solutions have significantly improved our efficiency.",
                author: "Amit Patel",
                rating: 5
              }
            ].map((t, i) => (
              <motion.div key={i} className="testimonial-card" variants={fadeUp}>
                <div className="testimonial-rating">
                  {[...Array(t.rating)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>
                <blockquote className="testimonial-quote">"{t.quote}"</blockquote>
                <div className="testimonial-author"><h4>{t.author}</h4></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="cta-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="cta-container">
          <h2 className="cta-title">Ready to Innovate?</h2>
          <p className="cta-description">
            Let's discuss how we can help your business grow with cutting-edge technology solutions.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-primary-btn">Start Your Project</Link>
            <Link to="/services" className="cta-secondary-btn">View Services</Link>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
