import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main>
      <style>{`
        @media (max-width: 768px) {
          .profile-row { grid-template-columns: 1fr !important; }
          .profile-photo { order: 2; }
          .profile-text { order: 1; }
          #about {
            padding:100px 20px 0px 20px !important;
          }
        }
      `}</style>
      {/* About & Values */}
      <section
        id="about"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          fontFamily: "'Poppins', sans-serif",
          overflow: "hidden",
          background: "linear-gradient(135deg, #073674 35%, #f9fafb 35%)",
          padding: "100px 80px",
        }}
      >
        {/* Left Side - Image */}
        <div
          style={{
            flex: "1 1 50%",
            textAlign: "center",
            position: "relative",
            animation: "zoomIn 1.2s ease-in-out",
          }}
        >
          <img
            src="/Pictures/newimage1.jpg"
            alt="Team working"
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "600px",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              objectFit: "cover",
              transform: "scale(1)",
              transition: "transform 0.5s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>

        {/* Right Side - Text */}
        <div
          style={{
            flex: "1 1 50%",
            color: "#333",
            textAlign: "left",
            paddingLeft: "80px",
            animation: "fadeInUp 1.2s ease-out",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              fontWeight: "700",
              color: "#0F3C4C",
              letterSpacing: "1px",
              marginBottom: "12px",
              position: "relative",
              display: "inline-block",
              animation: "bounceIn 0.9s ease",
              paddingTop: "30px",
            }}
          >
            ABOUT US
          </h2>

          <div
            style={{
              width: "100px",
              height: "4px",
              backgroundColor: "#10659E",
              borderRadius: "2px",
              marginBottom: "25px",
              marginLeft: '0px',
              animation: "underlineGrow 0.6s ease forwards",
            }}
          ></div>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#555",
              maxWidth: "600px",
              opacity: 0,
              animation: "fadeInText 1.2s ease forwards",
              animationDelay: "0.4s",
            }}
          >
            Raynx Systems is a new-age software development startup committed to
            delivering high-quality, scalable, and customized tech solutions. We
            focus on creating value through meaningful innovation. Whether it's
            web platforms, enterprise tools, or automation systems — we build
            software that solves real-world problems.
          </p>
        </div>

        {/* Inline CSS Animations & Responsive Styles */}
        <style>
          {`
    @keyframes zoomIn {
      0% { opacity: 0; transform: scale(0.9); }
      100% { opacity: 1; transform: scale(1); }
    }

    @keyframes bounceIn {
      0% { transform: scale(0.8); opacity: 0; }
      60% { transform: scale(1.1); opacity: 1; }
      100% { transform: scale(1); }
    }

    @keyframes underlineGrow {
      0% { width: 0%; }
      100% { width: 100px; }
    }

    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(30px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeInText {
      0% { opacity: 0; transform: translateY(10px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    /* 📱 Mobile View - Increase image size */
    @media (max-width: 900px) {
      section#about {
        flex-direction: column;
        background: linear-gradient(180deg, #073674 50%, #f9fafb 50%);
        padding: 60px 30px;
      }

      section#about img {
        width: 140%;
        height: 280px;
        max-width: 250px;
        border-radius: 12px;
        object-fit: cover;
        transform: scale(1.1);
        transition: transform 0.5s ease;
      }

      section#about div[style*='padding-left'] {
        padding-left: 0 !important;
        text-align: center;
      }

      section#about div[style*='width: 100px'] {
        margin: 0 auto 20px auto;
      }
    }
  `}
        </style>
      </section>

      <section
        id="companyvalues"
        style={{
          backgroundColor: "#f9fafb",
          padding: "80px 40px",
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
          minHeight: "100vh",
          boxSizing: "border-box",
        }}
      >
        {/* Heading with underline */}
        <div style={{ marginBottom: "50px" }}>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#0F3C4C",
              letterSpacing: "1px",
              marginBottom: "10px",
            }}
          >
            COMPANY VALUES
          </h2>
          <div
            style={{
              width: "100px",
              height: "4px",
              backgroundColor: "#10659E",
              margin: "0 auto",
              borderRadius: "4px",
            }}
          ></div>
        </div>

        {/* Vision and Mission Container */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
            gap: "30px",
            flexWrap: "wrap",
            marginBottom: "60px",
          }}
        >
          {/* Vision Card */}
          <div
            style={{
              flex: "1 1 400px",
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              padding: "30px",
              textAlign: "left",
              maxWidth: "500px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0px)")
            }
          >
            <h3
              style={{
                color: "#0a2540",
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "15px",
              }}
            >
              Vision
            </h3>
            <p
              style={{
                color: "#333",
                fontSize: "15px",
                lineHeight: "1.7",
              }}
            >
              To become a trusted tech partner for businesses across the globe
              by delivering impactful software that drives change and scales
              growth.
            </p>
          </div>

          {/* Mission Card */}
          <div
            style={{
              flex: "1 1 400px",
              background:
                "linear-gradient(135deg, #93a8d0ff 0%, #073674ff 100%)",
              borderRadius: "16px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              padding: "30px",
              textAlign: "left",
              maxWidth: "500px",
              color: "#ffffff",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0px)")
            }
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "15px",
              }}
            >
              Mission
            </h3>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.7",
              }}
            >
              To empower startups, enterprises, and individuals with digital
              products that are reliable, intelligent, and future-focused.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div
          style={{
            textAlign: "center",
            overflow: "hidden",
            margin: "0 auto",
            width: "100%",
            maxWidth: "900px",
            borderRadius: "14px",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
          }}
        >
          <img
            src="/Pictures/valueimg.jpg"
            alt="Company Meeting"
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              display: "block",
              transition: "all 0.4s ease",
            }}
          />
        </div>

        {/* Responsive Image Styling */}
        <style>
          {`
      @media (max-width: 900px) {
        section#companyvalues {
          padding: 60px 20px;
        }

        section#companyvalues h2 {
          font-size: 32px;
        }

        section#companyvalues img {
          height: 260px; /* 🔹 Taller image for better clarity on mobile */
          border-radius: 10px;
        }

        section#companyvalues div[style*='max-width: 900px'] {
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }
      }

      @media (max-width: 600px) {
        section#companyvalues img {
          height: 300px; /* 🔹 Even taller for very small screens */
        }
      }
    `}
        </style>
      </section>

      <section className="team-section" id="team" style={{ padding: "60px 0" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.4rem",
            color: "#0f3c4c",
            fontWeight: 700,
            marginBottom: "40px",
            letterSpacing: "1px",
          }}
        >
          Our Leadership Team
        </h2>

        {/* Profile: CEO */}
        <motion.div
          className="profile-row"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 24,
            alignItems: "start",
            maxWidth: 1100,
            margin: "40px auto",
            padding: "0 16px",
          }}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="profile-photo" style={{ textAlign: "center" }}>
            <img
              src="/gallery/chander_ceo.jpg"
              alt="CEO and Founder"
              style={{
                width: "100%",
                maxWidth: 320,
                height: "auto",
                objectFit: "cover",
                borderRadius: 6,
              }}
            />
            <div style={{ marginTop: 12 }}>
              <h3 style={{ margin: 0, color: "#0f3c4c", fontWeight: 700 }}>
                MR. PATHLAVATH CHENDER
              </h3>
              <p style={{ marginTop: 4, color: "#475569" }}>
                FOUNDER & CEO   </p>
              {/* <p style={{ marginTop: 4, color: "#475569" }}>Raynx Systems Pvt. Ltd.
              </p> */}
            </div>
          </div>
          <div className="profile-text">
            <blockquote
              style={{
                color: "#0f3c4c",
                fontSize: "1.4rem",
                lineHeight: 1.4,
                fontWeight: 600,
                margin: "0 0 16px 0",
              }}
            >
              Building smart solutions that power tomorrow.
            </blockquote>
            <p style={{ color: "#334155", textAlign: "justify" }}>
              At the heart of Raynx Systems Pvt. Ltd. is <b>Pathlavath Chender</b>, a visionary leader driven by a passion for innovation and technology. As the <b>Founder and CEO</b>, Chender leads the company with a clear mission — to empower businesses through smart, scalable, and transformative digital solutions.</p>

            <p style={{ color: "#334155", textAlign: "justify" }}>Under his leadership, Raynx Systems has evolved into a trusted technology partner for enterprises seeking custom software development, digital transformation, and data-driven insights. His deep expertise in Artificial Intelligence (AI), Cloud Computing, Power BI, and Tableau continues to inspire our teams to deliver solutions that are not only innovative but also impactful and accessible to all.</p>

            <p style={{ color: "#334155", textAlign: "justify" }}> At Raynx Systems, we believe in turning ideas into intelligent solutions that drive growth, efficiency, and success for our clients across industries.
            </p>
            <p style={{ marginTop: 12 }}>
              <a
                href="https://www.linkedin.com/in/chender-pathlavath-b7883025b/"
                className="primary-btn"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
              </a>
            </p>
          </div>
        </motion.div>



        {/* Profile: Administration Director */}
        <motion.div
          className="profile-row"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 24,
            alignItems: "start",
            maxWidth: 1100,
            margin: "40px auto",
            padding: "0 16px",
          }}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="profile-photo" style={{ textAlign: "center" }}>
            <img
              src="/gallery/tirupathi goud.jpg"
              alt="Director – Administration"
              style={{
                width: "100%",
                maxWidth: 320,
                height: "auto",
                objectFit: "cover",
                borderRadius: 6,
              }}
            />
            <div style={{ marginTop: 12 }}>
              <h3 style={{ margin: 0, color: "#0f3c4c", fontWeight: 700 }}>
                MR. AMBATI THIRUPATHI GOUD
              </h3>
              <p style={{ marginTop: 4, color: "#475569" }}>DIRECTOR</p>
            </div>
          </div>
          <div className="profile-text">
            <blockquote
              style={{
                color: "#0f3c4c",
                fontSize: "1.4rem",
                lineHeight: 1.4,
                fontWeight: 600,
                margin: "0 0 16px 0",
              }}
            >
              We’re not just a team — we’re a force for progress.
            </blockquote>
            <p style={{ color: "#334155", textAlign: "justify" }}>
              At the core of Raynx Systems Pvt. Ltd. stands <b>Mr. Ambati Thirupathi Goud</b>, a dynamic leader whose strategic vision and commitment to excellence continue to shape the company’s growth and innovation. As the <b>Director</b>, he provides decisive leadership, ensuring seamless operational governance, effective policy formulation, and cohesive inter-departmental collaboration across the organization.
            </p>

            <p style={{ color: "#334155", textAlign: "justify" }}>
              Under his guidance, Raynx Systems has embraced a results-driven approach that harmonizes disciplined process management with forward-thinking innovation. His emphasis on transparency, accountability, and performance has fostered a culture of trust, efficiency, and continuous improvement—empowering teams to take ownership and deliver with excellence.
            </p>

            <p style={{ color: "#334155", textAlign: "justify" }}>
              With a leadership philosophy rooted in empowerment and sustainability, Mr. Goud ensures that every initiative at Raynx Systems aligns with its mission to engineer and deliver market-leading technological solutions. His strategic foresight continues to position the company as a benchmark for innovation, operational excellence, and long-term industry leadership.
            </p>

            <p style={{ marginTop: 12 }}>
              <a
                href="https://www.linkedin.com/in/ambati-thirupathi-goud-0b7a7b1b3/"
                className="primary-btn"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
              </a>
            </p>
          </div>
        </motion.div>

        {/* Profile: Finance Director */}
        <motion.div
          className="profile-row"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 24,
            alignItems: "start",
            maxWidth: 1100,
            margin: "40px auto",
            padding: "0 16px",
          }}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="profile-photo" style={{ textAlign: "center" }}>
            <img
              src="/gallery/venkanna_director.jpg"
              alt="Director – Finance"
              style={{
                width: "100%",
                maxWidth: 320,
                height: "auto",
                objectFit: "cover",
                borderRadius: 6,
              }}
            />
            <div style={{ marginTop: 12 }}>
              <h3 style={{ margin: 0, color: "#0f3c4c", fontWeight: 700 }}>
                MR. BODA VENKANNA NAYAK
              </h3>
              <p style={{ marginTop: 4, color: "#475569" }}>DIRECTOR</p>
            </div>
          </div>
          <div className="profile-text">
            <blockquote
              style={{
                color: "#0f3c4c",
                fontSize: "1.4rem",
                lineHeight: 1.4,
                fontWeight: 600,
                margin: "0 0 16px 0",
                textAlign: "justify",
              }}
            >
              Any solution should not only bring a change, it should
              revolutionize lives dynamically.
            </blockquote>
            <p style={{ color: "#334155", textAlign: "justify" }}>
              With a deep understanding of IT infrastructure and services, <b>Mr.
                Venkanna</b> has played a key role in driving growth and shaping
              business strategy. He focuses on financial leadership, operational
              efficiency, and building sustainable, long-term value.
            </p>
            <p style={{ color: "#334155", textAlign: "justify" }}>
              Beyond the boardroom, he’s passionate about fitness and continuous
              learning—bringing balance and discipline to his leadership
              approach.
            </p>
            <p style={{ marginTop: 12 }}>
              <a
                href="https://www.linkedin.com/in/venkanna-boda-38081037a/"
                className="primary-btn"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
              </a>
            </p>
          </div>
        </motion.div>
      </section>


      {/* Life at Raynx Systems (Gallery) */}
      <section id="company-gallery" style={{ padding: "40px 20px", }}>
        <h2 className="sec">Life at Raynx Systems</h2>
        <div className="scroll-gallery">
          <div className="scroll-track">
            <img
              src="/gallery/image1.jpg"
              alt="Team Photo"
              data-src="/gallery/image1.jpg"
            />
            <img
              src="/gallery/image10.jpeg"
              alt="Team Photo"
              data-src="/gallery/image10.jpeg"
            />
            <img
              src="/gallery/image11.jpeg"
              alt="Team Photo"
              data-src="/gallery/image11.jpeg"
            />
            <img
              src="/gallery/image4.jpg"
              alt="Team Photo"
              data-src="/gallery/image4.jpg"
            />
            <img
              src="/gallery/image7.jpg"
              alt="Team Photo"
              data-src="/gallery/image7.jpg"
            />
            <img
              src="/gallery/image10.jpeg"
              alt="Team Photo"
              data-src="/gallery/image10.jpeg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
