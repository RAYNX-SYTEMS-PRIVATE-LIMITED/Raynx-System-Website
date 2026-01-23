import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { imageUrl } from '../utils/imageUrl'

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer
      className="site-footer"
      id="footer"
      style={{
        background: "linear-gradient(135deg, #0f3c4c 0%, #1273b6 100%)",
        color: "white",
        marginTop: "auto",
      }}
    >
      <div
        className="footer-inner"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "10px 20px 20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
        }}
      >
        <div className="footer-brand fade-in-up">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <span
              className="footer-title"
              style={{
                fontFamily: "Anton, sans-serif",
                fontSize: "1.5rem",
                color: "#2280D8",
              }}
            ></span>
            <img
              src={imageUrl('Pictures/bluelogo.jpg')}
              alt="Raynx Systems Logo"
              className="footer-logo"
              style={{ height: "70px", width: "auto", marginRight: "12px" ,border: "#0F435A"}}
            />
          </div>

          <p
            className="footer-tag"
            style={{
              color: "#e2e8f0",
              marginBottom: "20px",
              lineHeight: "1.6",
            }}
          >
            Building Future-Ready Software Solutions with innovation and
            excellence.
          </p>
          <div
            className="social-links"
            style={{ display: "flex", gap: "16px" }}
          >
            {[
              {
                href: "https://www.linkedin.com/company/raynxsystemspvtltd/",
                icon: "fa-brands fa-linkedin-in",
                label: "LinkedIn",
              },
              {
                href: "https://x.com/Raynxsystems",
                icon: "fa-brands fa-twitter",
                label: "Twitter",
              },
              {
                href: "https://www.instagram.com/raynx.systems",
                icon: "fa-brands fa-instagram",
                label: "Instagram",
              },
              {
                href: "mailto:hr@raynxsystems.in",
                icon: "fa-solid fa-envelope",
                label: "Email",
              },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                style={{
                  color: "white",
                  fontSize: "1.25rem",
                  transition: "all 0.3s ease",
                  padding: "8px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(255,255,255,0.2)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(255,255,255,0.1)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                <i className={icon} />
              </a>
            ))}
          </div>
        </div>

        <div
          className="footer-links quick-links fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <h4
            style={{
              fontFamily: "Anton, sans-serif",
              marginBottom: "16px",
              color: "white",
            }}
          >
            Quick Links
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/products", label: "Products" },
              { to: "/careers", label: "Careers" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <li key={to} style={{ marginBottom: "8px" }}>
                <Link
                  to={to}
                  style={{
                    color: "#e2e8f0",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "white")}
                  onMouseLeave={(e) => (e.target.style.color = "#e2e8f0")}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="footer-contact fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <h4
            style={{
              fontFamily: "Anton, sans-serif",
              marginBottom: "16px",
              color: "white",
            }}
          >
            Contact Info
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "12px",
              }}
            >
              <i
                className="fa-solid fa-envelope"
                style={{ marginRight: "12px", color: "#ffc107" }}
              />
              <a
                href="mailto:hr@raynxsystems.in"
                style={{ color: "#e2e8f0", textDecoration: "none" }}
                onMouseEnter={(e) => (e.target.style.color = "white")}
                onMouseLeave={(e) => (e.target.style.color = "#e2e8f0")}
              >
                hr@raynxsystems.in
              </a>
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "12px",
              }}
            >
              <i
                className="fa-solid fa-phone"
                style={{ marginRight: "12px", color: "#ffc107" }}
              />
              <a
                href="tel:+919100056252"
                style={{ color: "#e2e8f0", textDecoration: "none" }}
                onMouseEnter={(e) => (e.target.style.color = "white")}
                onMouseLeave={(e) => (e.target.style.color = "#e2e8f0")}
              >
                +040 28289515
              </a>
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "12px",
              }}
            >
              <i
                className="fa-solid fa-location-dot"
                style={{
                  marginRight: "12px",
                  marginTop: "4px",
                  color: "#ffc107",
                }}
              />
              <span style={{ color: "#e2e8f0", lineHeight: "1.5" }}>
                7th Floor, 604, DSL Abacus IT Park,
                <br />
                Survey Colony, Industrial Development Area,
                <br />
                Uppal, Hyderabad, Telangana 500039, India
              </span>
            </li>
          </ul>
        </div>

        {/* Map */}
        <div
          className="footer-contact fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <h4
            style={{
              fontFamily: "Anton, sans-serif",
              marginBottom: "16px",
              color: "white",
            }}
          >
            Our Location
          </h4>
         <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.249078858112!2d78.553112324935!3d17.399830283489493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9941a0ba5da7%3A0xf60017a02a426bc9!2sDSL%20Abacus%20IT%20Park!5e0!3m2!1sen!2sin!4v1769160163541!5m2!1sen!2sin"
  width="100%"
  height="250"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

        </div>
      </div>

      <div
        className="footer-bottom"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "20px",
          textAlign: "center",
          background: "rgba(0,0,0,0.2)",
        }}
      >
        <p style={{ margin: 0, color: "#e2e8f0", fontSize: "0.9rem" }}>
          © <span id="year">{new Date().getFullYear()}</span> Raynx Systems
          Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
