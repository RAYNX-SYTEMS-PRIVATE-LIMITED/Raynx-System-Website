import React, { useState } from "react";

export default function Careers() {
  const [showDetails, setShowDetails] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const jobs = [
    {
      title: "Desktop Engineer",
      location: "Mumbai",
      details: {
        position: "Desktop Engineer (THBS-0052)",
        experience: "1-3 Years",
        qualifications: "B.E / B.Tech / Diploma in IT or related field",
        profile:
          "Responsible for installation, configuration, and troubleshooting of desktops, laptops, and peripheral devices.",
      },
    },
    {
      title: "Network Support Engineer",
      location: "Pune",
      details: {
        position: "Network Support Engineer",
        experience: "2-5 Years",
        qualifications: "B.E / B.Tech / CCNA Certified preferred",
        profile:
          "Manage and maintain network infrastructure, resolve connectivity issues, and ensure uptime.",
      },
    },
    {
      title: "System Administrator",
      location: "Hyderabad",
      details: {
        position: "System Administrator",
        experience: "3-6 Years",
        qualifications: "B.E / B.Tech in Computer Science or IT",
        profile:
          "Manage Windows/Linux servers, handle backups, and ensure system performance and security.",
      },
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f0f9ff, #e0f2fe)",
        fontFamily: "Poppins, sans-serif",
        color: "#0f172a",
        padding: "40px 20px",
        marginTop: "80px",
      }}
    >
      <style>
        {`
          .fade { animation: fadeIn 1s ease-in-out; }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .highlight {
            background: linear-gradient(90deg, #2563eb, #1d4ed8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .section-card {
            background: white;
            border-radius: 16px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            padding: 30px;
          }
          .job-card {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 20px;
            transition: 0.3s;
          }
          .job-card:hover { background: #e0f2fe; transform: translateY(-5px); }
          .apply-box {
            background: linear-gradient(135deg, #1d4ed8, #2563eb);
            color: white;
            border-radius: 16px;
            padding: 40px 30px;
            box-shadow: 0 8px 20px rgba(29,78,216,0.3);
            text-align: center;
          }
          .btn {
            background: #2563eb;
            color: white;
            border: none;
            border-radius: 8px;
            padding: 8px 16px;
            margin-top: 10px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s;
          }
          .btn:hover { background: #1d4ed8; transform: scale(1.05); }
          .popup-overlay {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: rgba(0,0,0,0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }
          .popup {
            background: white;
            padding: 30px;
            border-radius: 12px;
            width: 400px;
            max-width: 90%;
            box-shadow: 0 6px 20px rgba(0,0,0,0.2);
            text-align: center;
          }
          .popup input {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #cbd5e1;
            border-radius: 6px;
          }
        `}
      </style>

      <main style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* 🌟 Life at Raynx Systems */}
        <section
          className="fade section-card"
          style={{ textAlign: "center", marginBottom: 50 }}
        >
          <h1
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "3rem",
              marginBottom: 10,
            }}
          >
            Life at <span className="highlight">Raynx Systems</span>
          </h1>
          <p
            style={{
              color: "#475569",
              fontSize: "1.1rem",
              maxWidth: 850,
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            At <strong>Raynx Systems</strong>, we’re not just writing code — we’re
            crafting innovation. Our culture thrives on{" "}
            <strong>creativity, collaboration, and continuous learning</strong>.
            We encourage our team to explore ideas, challenge limits, and build
            solutions that truly matter. Be part of a growing family that values
            both <em>innovation</em> and <em>impact</em>.
          </p>
        </section>

        {/* 💼 Openings */}
        <section className="fade" style={{ marginBottom: 60 }}>
          <h2
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "2.2rem",
              textAlign: "center",
              color: "#1d4ed8",
              marginBottom: 30,
            }}
          >
            Openings
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {jobs.map((job, index) => (
              <div key={index} className="job-card">
                <h3 style={{ color: "#0f172a" }}>{job.title}</h3>
                <p style={{ color: "#475569", fontSize: "0.9rem" }}>
                  📍 <strong>Location:</strong> {job.location}
                </p>
                <button
                  className="btn"
                  onClick={() =>
                    setShowDetails(showDetails === index ? null : index)
                  }
                >
                  {showDetails === index ? "Hide Details" : "Show Details"}
                </button>
                <button
                  className="btn"
                  style={{ marginLeft: 10, background: "#16a34a" }}
                  onClick={() => setShowPopup(true)}
                >
                  Apply Now
                </button>

                {showDetails === index && (
                  <div style={{ marginTop: 10, color: "#334155" }}>
                    <p><strong>Position:</strong> {job.details.position}</p>
                    <p><strong>Experience:</strong> {job.details.experience}</p>
                    <p><strong>Qualifications:</strong> {job.details.qualifications}</p>
                    <p><strong>Job Profile:</strong> {job.details.profile}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 📩 How to Apply */}
        <section className="fade apply-box">
          <h2 style={{ fontFamily: "Anton, sans-serif", fontSize: "2rem", marginBottom: 12 }}>
            How to Apply
          </h2>
          <p style={{ maxWidth: 700, margin: "0 auto", lineHeight: 1.8 }}>
            If you’re passionate about building the future with technology, we’d love to hear from you.  
            Send your resume to{" "}
            <a
              href="mailto:hr@raynxsystems.in"
              style={{ color: "#f0f9ff", textDecoration: "underline" }}
            >
              hr@raynxsystems.in
            </a>{" "}
            with the role you’re applying for in the subject line.
          </p>
        </section>
      </main>

      {/* Popup Apply Form */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup fade">
            <h3 style={{ marginBottom: 15 }}>Apply Now</h3>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Mobile Number" />
            <input type="text" placeholder="Enter Captcha" />
            <button
              className="btn"
              style={{ width: "100%", background: "#2563eb" }}
              onClick={() => setShowPopup(false)}
            >
              Apply
            </button>
            <button
              className="btn"
              style={{
                background: "#ef4444",
                marginTop: 10,
                width: "100%",
              }}
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}