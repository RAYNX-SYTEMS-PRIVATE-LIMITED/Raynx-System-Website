import React, { useState } from 'react'

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setShowPopup(true)
    e.currentTarget.reset()
  }

  return (
    <main id="contact" style={{minHeight:'100vh'}}>
      <section id="getintouch" className="getintouch">
        <h2>Get in Touch</h2>
        <p style={{textAlign: 'center', marginBottom: '30px', color: 'var(--text-gray)', fontSize: '1.1rem'}}>
          "Innovation begins with conversation. Let's build something amazing together."
        </p>
        <form onSubmit={handleSubmit} name="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact</label>
            <input type="tel" id="contact" name="Contact" required pattern="[0-9]{10}" />
          </div>
          <div className="form-group full">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="Email" required />
          </div>
          <div className="form-group full">
            <label htmlFor="message">Message</label>
            <textarea name="Message" id="message" rows={5} placeholder="Tell us about your project..."></textarea>
          </div>
          <button type="submit" name="submit">Connect</button>
        </form>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h3>Your request has been received!</h3>
              <button onClick={() => setShowPopup(false)}>OK</button>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}
