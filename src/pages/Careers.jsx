import React, { useState, useEffect } from "react";

export default function Careers() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showFormIndex, setShowFormIndex] = useState(null);
  const [selectedJob, setSelectedJob] = useState("");
  const [applyVisible, setApplyVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    driveUrl: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setApplyVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const handleApplyClick = (index, jobTitle) => {
    setSelectedJob(jobTitle);
    setShowFormIndex(showFormIndex === index ? null : index);
    setForm({ name: "", email: "", mobile: "", driveUrl: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, mobile, driveUrl } = form;
    if (!driveUrl.startsWith("http")) {
      alert("Please enter a valid Google Drive URL");
      return;
    }

    setLoading(true);
    const payload = {
      name,
      email,
      mobile,
      position: selectedJob,
      driveUrl,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyHJSnlx6mhXMGaV_pEg4UXMMLeOvy96B8lSPZYEtwVs5QpevZC5SzWPR8alWdq_E0x0A/exec",

        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      alert(`Application submitted successfully for ${selectedJob}`);
      setLoading(false);
      setShowFormIndex(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
      setLoading(false);
    }
  };

  const jobs = [
    // {
    //   title: "Frontend Developer",
    //   code: "RXS-001",
    //   location: "Hyderabad",
    //   details: {
    //     position: "Frontend Developer",
    //     experience: "1–3 years",
    //     qualification: "B.E / B.Tech / MCA in Computer Science or related field",
    //     skills: ["React.js", "HTML5", "CSS3", "JavaScript (ES6+)", "REST APIs"],
    //     profile:
    //       "Develop user-friendly web interfaces using React.js and Tailwind CSS. Work with design teams to ensure seamless UX/UI implementation and responsive design.",
    //   },
    // },
  {
    title: "Python Developer",
    code: "RXS-001",
    location: "Hyderabad",
    details: {
      position: "Python Developer",
      experience: "0-3 years",
      qualification: "B.E / B.Tech / MCA / ",
      skills: ["Python", "Flask/Django", "REST APIs", "SQL", "ORM (SQLAlchemy/Django ORM)"],
      profile:
        "Design, develop, and maintain RESTful APIs using Python (Flask/Django) and relational databases. Ensure scalability, performance, and security of backend applications.",
    },
  },
  {
    title: "Java Developer",
    code: "RXS-002",
    location: "Hyderabad",
    details: {
      position: "Java Developer",
      experience: "0-3 years",
      qualification: "B.E / B.Tech / MCA",
      skills: ["Core Java", "Spring Boot", "Hibernate", "RESTful APIs", "SQL"],
      profile:
        "Develop and maintain Java-based web applications and backend services using Spring Boot. Ensure high performance, security, and scalability of applications.",
    },
  },
  {
    title: "MERN Stack Developer",
    code: "RXS-003",
    location: "Hyderabad",
    details: {
      position: "MERN Stack Developer",
      experience: "0-3 years",
      qualification: "B.E / B.Tech / MCA",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
      profile:
        "Build full-stack web applications using the MERN stack. Design scalable REST APIs, develop responsive UIs, and ensure smooth data flow between frontend and backend.",
    },
  },
  {
    title: "UI/UX Designer",
    code: "RXS-004",
    location: "Hyderabad",
    details: {
      position: "UI/UX Designer",
      experience: "0-3 years",
      qualification: "Any Graduate / Design Certification",
      skills: ["Figma", "Adobe XD", "Photoshop", "Wireframing", "Prototyping"],
      profile:
        "Design engaging user experiences focusing on usability and modern aesthetics. Collaborate with developers to create visually appealing, user-friendly interfaces.",
    },
  },
  {
    title: "Digital Marketing Executive",
    code: "RXS-005",
    location: "Hyderabad",
    details: {
      position: "Digital Marketing Executive",
      experience: "0-3 years",
      qualification: "Any Graduate / MBA in Marketing preferred",
      skills: ["SEO", "Google Ads", "Social Media Marketing", "Content Strategy", "Analytics"],
      profile:
        "Plan and execute digital marketing campaigns across multiple platforms. Optimize website traffic, manage social media presence, and analyze performance metrics.",
    },
  },
  {
    title: "Business Development Manager (BDM)",
    code: "RXS-006",
    location: "Hyderabad",
    details: {
      position: "Business Development Manager",
      experience: "0-3 years",
      qualification: "Any Graduate / MBA preferred",
      skills: ["Lead Generation", "Client Communication", "Negotiation", "CRM Tools", "Market Research"],
      profile:
        "Identify new business opportunities, build client relationships, and drive company growth through strategic sales initiatives and partnerships.",
    },
  },
  {
    title: "Cyber Security Analyst",
    code: "RXS-007",
    location: "Hyderabad",
    details: {
      position: "Cyber Security Analyst",
      experience: "0-3 years",
      qualification: "B.E / B.Tech / B.Sc in Computer Science / Cyber Security",
      skills: ["Network Security", "Vulnerability Assessment", "Firewalls", "Ethical Hacking", "Incident Response"],
      profile:
        "Monitor systems for security threats, conduct vulnerability assessments, and implement protective measures to safeguard company data and infrastructure.",
    },
  },
  {
    title: "AWS Cloud Engineer",
    code: "RXS-008",
    location: "Hyderabad",
    details: {
      position: "AWS Cloud Engineer",
      experience: "0-3 years",
      qualification: "B.E / B.Tech / MCA / Cloud Certification preferred",
      skills: ["AWS Services", "EC2", "S3", "Lambda", "DevOps", "CI/CD"],
      profile:
        "Deploy, manage, and monitor cloud-based applications on AWS. Ensure scalability, security, and high availability of infrastructure using DevOps practices.",
    },
  },
  {
    title: "Data Analyst",
    code: "RXS-009",
    location: "Hyderabad",
    details: {
      position: "Data Analyst",
      experience: "0-3 years",
      qualification: "B.E / B.Tech / B.Sc / M.Sc in Statistics, CS, or related field",
      skills: ["Python", "SQL", "Excel", "Power BI / Tableau", "Pandas"],
      profile:
        "Collect, clean, and analyze datasets to derive actionable insights. Create reports and dashboards to support business decisions and improve efficiency.",
    },
  },
  {
    title: "Data Scientist",
    code: "RXS-010",
    location: "Hyderabad",
    details: {
      position: "Data Scientist",
      experience: "0-3 years",
      qualification: "B.E / B.Tech / M.Tech / M.Sc in Data Science, AI, or related field",
      skills: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-learn", "TensorFlow"],
      profile:
        "Build and deploy machine learning models to solve business challenges. Analyze complex data, develop predictive algorithms, and optimize data-driven decisions.",
    },
  },
  {
  title: "AI & ML Developer",
  code: "RXS-011",
  location: "Hyderabad",
  details: {
    position: "AI & ML Developer",
    experience: "0-3 years",
    qualification: "B.E / B.Tech / M.Tech / M.Sc in AI, Data Science, or Computer Science",
    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "TensorFlow / PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Data Preprocessing",
      "Model Deployment"
    ],
    profile:
      "Design, develop, and deploy AI and machine learning models for real-world applications. Work on data preprocessing, model training, evaluation, and optimization. Collaborate with data engineers and software developers to integrate intelligent features into production systems.",
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
          .fade { animation: fadeIn 0.6s ease-in-out; }
          @keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }

          .life-card {
            background: white;
            border-radius: 16px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            padding: 30px;
            transition: background 0.5s ease, transform 0.8s ease, box-shadow 0.4s ease, color 0.4s ease;
          }
          .life-card:hover {
            background: linear-gradient(135deg, #d3e8f5ff, #97bed5ff);
            color: #1e3a8a;
            transform: translateY(-5px);
            box-shadow: 0 8px 18px rgba(147,197,253,0.4);
          }

          .job-container {
            background: #fff;
            border: 1px solid #e2e8f0;
            border-left: 4px solid #1d4ed8;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .job-container:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 8px 16px rgba(0,0,0,0.1);
          }

          .job-title { font-size: 1.3rem; font-weight: 600; color: #1d4ed8; position: relative; display: inline-block; }
          .job-title::after {
            content: ""; position: absolute; bottom: -4px; left: 0;
            width: 0%; height: 2px; background-color: #1d4ed8;
            transition: width 0.3s ease;
          }
          .job-container:hover .job-title::after { width: 100%; }

          .job-meta { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; margin-top: 8px; color: #475569; font-size: 0.95rem; }
          .meta-left { display: flex; gap: 20px; flex-wrap: wrap; align-items: center; }
          .show-details { color: #ef4444; cursor: pointer; font-weight: 500; }
          .details-box { margin-top: 15px; background: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; }

          .apply-now { background: #1d4ed8; color: #fff; border: none; padding: 8px 18px; border-radius: 6px; cursor: pointer; font-weight: 600; transition: background 0.3s ease; }
          .apply-now:hover { background: #2563eb; }

          .inline-form { margin-top: 20px; background: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 20px; }
          .inline-form h3 { color: #1d4ed8; text-align: center; margin-bottom: 15px; }
          .inline-form input { width: 100%; padding: 10px; margin-bottom: 10px; border-radius: 8px; border: 1px solid #cbd5e1; outline: none; }
          .apply-btn { width: 100%; background: #1d4ed8; color: white; padding: 10px; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: background 0.3s ease; }
          .apply-btn:hover { background: #2563eb; }

          .apply-section {
            background: white; border-radius: 16px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            padding: 30px; opacity: 0; transform: translateY(40px) scale(0.98);
            transition: all 0.8s ease-in-out;
          }
          .apply-section.visible { opacity: 1; transform: translateY(0) scale(1); animation: bounceIn 1s ease; }
          @keyframes bounceIn {
            0% { transform: translateY(40px); opacity: 0; }
            60% { transform: translateY(-10px); opacity: 1; }
            80% { transform: translateY(5px); }
            100% { transform: translateY(0); }
          }

          .apply-email-btn {
            background: #1d4ed8; color: white; border: none; padding: 10px 20px;
            border-radius: 8px; font-weight: 600; cursor: pointer;
            margin-top: 20px; transition: all 0.4s ease;
          }
          .apply-email-btn:hover {
            background: #2563eb; box-shadow: 0 0 12px rgba(37,99,235,0.5);
            transform: translateY(-3px);
          }
        `}
      </style>

      <main style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Life at Raynx Systems Section */}
        <section className="fade life-card" style={{ textAlign: "center", marginBottom: 50 }}>
          <h1 style={{ fontFamily: "Anton, sans-serif", fontSize: "3rem", letterSpacing: 1, marginBottom: 10 }}>
            Life at <span className="highlight">Raynx Systems</span>
          </h1>
          <p style={{ color: "#475569", fontSize: "1.1rem", maxWidth: 850, margin: "0 auto", lineHeight: 1.8 }}> 
            At <strong>Raynx Systems</strong>, we believe in empowering talent, nurturing creativity, 
            and fostering a culture of learning. From coding challenges to hackathons, mentorship programs, and collaborative projects, 
            we ensure that innovation and teamwork are at the heart of everything we do.
          </p> 
          <p style={{ color: "#475569", fontSize: "1.1rem", maxWidth: 850, margin: "20px auto 0", lineHeight: 1.8 }}> 
            We value <strong>work-life balance</strong>, <strong>growth mindset</strong>, and <strong>continuous upskilling</strong>. 
            Join us to build impactful digital solutions while shaping the next wave of technology excellence. 
          </p>
        </section>

        {/* Current Openings */}
        <section className="fade">
          <h2 style={{ fontFamily: "Anton, sans-serif", fontSize: "2.2rem", textAlign: "center", color: "#1d4ed8", marginBottom: 30 }}>
            Current Openings
          </h2>

          {jobs.map((job, index) => (
            <div key={index} className="job-container fade">
              <div className="job-title">{job.title}</div>
              <div className="job-meta">
                <div className="meta-left">
                  <span>💼 Job Code: {job.code}</span>
                  <span>📍 Location: {job.location}</span>
                  <span className="show-details" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                    {openIndex === index ? "(hide details)" : "(show details)"}
                  </span>
                </div>
                <button
                  className="apply-now"
                  onClick={() => handleApplyClick(index, job.title)}
                >
                  Apply Now
                </button>
              </div>

              {openIndex === index && (
                <div className="details-box fade">
                  <p><strong>Position:</strong> {job.details.position}</p>
                  <p><strong>Experience:</strong> {job.details.experience}</p>
                  <p><strong>Qualification:</strong> {job.details.qualification}</p>
                  <p><strong>Skills:</strong> {job.details.skills.join(", ")}</p>
                  <p><strong>Profile:</strong> {job.details.profile}</p>
                </div>
              )}

              {showFormIndex === index && (
                <div className="inline-form fade">
                  <h3>Apply for {selectedJob}</h3>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number"
                      value={form.mobile}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="driveUrl"
                      placeholder="Paste your Resume Drive URL"
                      value={form.driveUrl}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="submit"
                      className="apply-btn"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Submit Application"}
                    </button>
                  </form>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* How to Apply Section */}
        <section
          className={`apply-section fade ${applyVisible ? "visible" : ""}`}
          style={{ textAlign: "center", marginTop: 50 }}
        >
          <h2
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "2rem",
              marginBottom: 12,
            }}
          >
            How to Apply
          </h2>
          <p style={{ maxWidth: 700, margin: "0 auto", lineHeight: 1.8 }}>
            If you’re passionate about building the future with technology, send your resume to{" "}
            <a href="mailto:hr@raynxsystems.in" style={{ color: "#1d4ed8", textDecoration: "underline" }}>
              hr@raynxsystems.in
            </a>.
          </p>
          <button
            className="apply-email-btn"
            onClick={() =>
              (window.location.href =
                "mailto:hr@raynxsystems.in?subject=Job Application - Raynx Systems")
            }
          >
            Apply via Email
          </button>
        </section>
      </main>
    </div>
  );
}
