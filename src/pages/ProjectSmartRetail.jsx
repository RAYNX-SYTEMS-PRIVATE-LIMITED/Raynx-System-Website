import React from "react";
import { motion } from "framer-motion";

export default function ProjectSmartRetail() {
  // Faster fade animation
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <main
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(135deg, #e0f2fe 0%, #ffffff 100%)",
        color: "#1e293b",
        lineHeight: "1.7",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ---------- Internal CSS ---------- */}
      <style>{`
        .floating-bg span {
          position: absolute;
          display: block;
          width: 80px;
          height: 80px;
          background: rgba(36, 68, 166, 0.12);
          animation: move 16s linear infinite;
          border-radius: 50%;
        }
        .floating-bg span:nth-child(1) { top: 10%; left: 15%; animation-delay: 0s; width: 60px; height: 60px; }
        .floating-bg span:nth-child(2) { top: 70%; left: 10%; animation-delay: 4s; width: 100px; height: 100px; }
        .floating-bg span:nth-child(3) { top: 40%; left: 80%; animation-delay: 8s; width: 90px; height: 90px; }
        .floating-bg span:nth-child(4) { top: 85%; left: 50%; animation-delay: 2s; width: 120px; height: 120px; }
        .floating-bg span:nth-child(5) { top: 30%; left: 40%; animation-delay: 6s; width: 70px; height: 70px; }

        @keyframes move {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
          50% { opacity: 0.3; }
          100% { transform: translateY(-900px) rotate(360deg); opacity: 0; }
        }

        .section { max-width:1100px; margin:60px auto; padding:0 20px; position:relative; z-index:2; }
        h2 { color:#0f3c4c; font-size:1.9rem; font-weight:700; margin-bottom:16px; border-bottom:3px solid #2444a6; display:inline-block; padding-bottom:6px; padding-top:10px; }
        p { font-size:1.05rem; color:#334155; margin-bottom:14px; }
        .grid { display:grid; grid-template-columns: repeat(auto-fit, minmax(280px,1fr)); gap:22px; }
        .card { background:#fff; border:1px solid #e5e7eb; border-radius:12px; padding:22px; box-shadow:0 4px 10px rgba(0,0,0,0.05); transition:all 0.3s ease; }
        .card:hover { transform:translateY(-5px); box-shadow:0 8px 20px rgba(0,0,0,0.08); }
        .num { height:36px; width:36px; border-radius:50%; background:#2444a6; color:white; display:flex; align-items:center; justify-content:center; font-weight:600; margin-right:12px; }
        .row { display:flex; align-items:flex-start; margin-bottom:14px; }
        .bold { font-weight:600; color:#0f172a; font-size:1.05rem; }
        .header { text-align:center; margin-top:70px; margin-bottom:50px; position:relative; z-index:2; }
        .badge { background:#e0f2fe; color:#0c4a6e; font-weight:700; border-radius:999px; padding:8px 16px; font-size:0.9rem; display:inline-block; }
        .title { font-size:2.7rem; font-weight:800; color:#0f3c4c; margin:14px 0; font-family:'Poppins', sans-serif; }
        .results { display:grid; grid-template-columns:repeat(auto-fit, minmax(300px,1fr)); gap:20px; margin-top:20px; }
        .result-card { background:#fff; border-radius:14px; padding:24px; box-shadow:0 4px 14px rgba(0,0,0,0.06); transition:all 0.3s ease; }
        .result-card:hover { transform:translateY(-4px); box-shadow:0 8px 20px rgba(0,0,0,0.08); }
        .quote { color:#0f3c4c; font-weight:600; font-style:italic; margin-top:14px; font-size:1.05rem; }
        img { border-radius:10px; border:1px solid #e2e8f0; margin-top:12px; width:100%; height:auto; }
      `}</style>

      {/* ---------- Animated Background ---------- */}
      <div className="floating-bg">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* ---------- Hero Section ---------- */}
      <motion.header
        className="header"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className="badge">Case Study</span>
        <h1 className="title">Smart Retail Inventory & POS System</h1>
        <p style={{ maxWidth: "800px", margin: "0 auto", color: "#475569" }}>
          A scalable, modern solution transforming traditional retail operations
          into a seamless, data-driven digital ecosystem.
        </p>
      </motion.header>

      {/* ---------- About Project ---------- */}
      <motion.section className="section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>About Smart Retail</h2>
        <p>
          <b>Smart Retail</b> is an end-to-end retail management platform designed to automate core business operations — from inventory control and billing to analytics and reporting. It empowers businesses with real-time visibility and seamless management through intuitive, role-based dashboards for <b>Admins</b>, <b>Managers</b>, and <b>Cashiers</b>.
        </p>
        <p>
          The platform blends automation and intelligence to help retail stores eliminate manual errors, improve decision-making, and achieve operational excellence across multiple locations.
        </p>
      </motion.section>

      {/* ---------- Project Overview ---------- */}
      <motion.section className="section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>Project Overview</h2>
        <p>
          Raynx Systems partnered with a retail enterprise to design and develop a comprehensive <b>React-based POS and Inventory system</b> that would unify store management and provide transparent insights into daily operations. The goal was to digitize every aspect of the retail journey — from purchase to sale — ensuring speed, accuracy, and control.
        </p>
        <p className="quote">
          “An intelligent retail solution built for visibility, scalability, and simplicity — empowering every role to perform at their best.”
        </p>
      </motion.section>

      {/* ---------- Challenges ---------- */}
      <motion.section className="section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>Challenges</h2>
        <div>
          {[
            { title: "Manual Process Inefficiencies", desc: "Stores relied on paper records and spreadsheets, causing delays and data loss." },
            { title: "Limited Operational Visibility", desc: "Store owners had minimal insights into sales, stock, and employee performance." },
            { title: "Inconsistent Data Across Branches", desc: "Disconnected systems made central reporting complex and error-prone." },
            { title: "Lack of Role-based Access", desc: "The absence of role segregation led to workflow confusion and data errors." },
          ].map((item, i) => (
            <motion.div key={i} className="row" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="num">{i + 1}</div>
              <div>
                <p className="bold">{item.title}</p>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ---------- Solutions ---------- */}
      <motion.section className="section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>Solutions</h2>
        <div className="grid">
          {[
            { title: "Role-based Access Control", desc: "Secure dashboards for Admins, Managers, and Cashiers." },
            { title: "Smart Inventory Management", desc: "Real-time stock tracking with low-stock and expiry alerts." },
            { title: "Intelligent POS & Billing", desc: "Fast billing with tax integration, discounts, and e-receipts." },
            { title: "Supplier & Purchase Module", desc: "Managers can track and approve orders with supplier sync." },
            { title: "Analytics & Insights", desc: "Comprehensive dashboards with real-time KPIs and trends." },
          ].map((sol, i) => (
            <motion.div className="card" key={i} whileHover={{ scale: 1.03 }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="bold">{i + 1}. {sol.title}</div>
              <p>{sol.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ---------- Key Results ---------- */}
      <motion.section className="section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>Key Results</h2>
        <div className="results">
          {[
            { title: "Operational Excellence", points: ["Billing time reduced by 60%", "Inventory mismatch dropped by 75%", "Centralized real-time sync"] },
            { title: "Improved User Experience", points: ["Role-specific dashboards", "Reduced manual errors", "Better team collaboration"] },
            { title: "Business Impact", points: ["Data-driven decisions", "Boosted revenue", "Scalable infrastructure"] },
          ].map((item, i) => (
            <motion.div key={i} className="result-card" whileHover={{ scale: 1.02 }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3 style={{ color: "#2444a6", fontWeight: "700" }}>{item.title}</h3>
              <ul>
                {item.points.map((p, idx) => <li key={idx}>{p}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ---------- Conclusion ---------- */}
      <motion.section className="section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>Conclusion</h2>
        <p>
          The <b>Smart Retail Inventory & POS System</b> has redefined how retail businesses operate — merging intelligence, automation, and simplicity into one system. It empowers decision-makers to act faster and achieve consistent growth.
        </p>
      </motion.section>

      {/* ---------- Raynx Experience ---------- */}
      <motion.section
        className="section"
        style={{ backgroundColor: "#f9fafb", borderRadius: "12px", padding: "40px" }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Raynx Systems Experience</h2>
        <p>
          <b>Raynx Systems</b> delivers transformative technology solutions that redefine business performance. Our team of <b>10+ expert engineers</b> collaborated over <b>2 years</b> to build this platform using <b>React</b> (frontend) and <b>Spring Boot</b> (backend). Through UX-driven design and agile execution, we empower enterprises to achieve digital excellence and measurable results.
        </p>
      </motion.section>
    </main>
  );
}

