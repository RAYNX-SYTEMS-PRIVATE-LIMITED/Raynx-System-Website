import React from "react";
import { motion } from "framer-motion";

export default function CustomerSupportTicketing() {
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
        /* Floating Animated Background */
        .floating-bg span {
          position: absolute;
          display: block;
          width: 80px;
          height: 80px;
          background: rgba(36, 68, 166, 0.12);
          animation: move 22s linear infinite;
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
          100% { transform: translateY(-1000px) rotate(360deg); opacity: 0; }
        }

        .section { max-width:1100px; margin:70px auto; padding:0 20px; position:relative; z-index:2; }
        h2 { color:#0f3c4c; font-size:1.9rem; font-weight:700; margin-bottom:18px; border-bottom:3px solid #2444a6; display:inline-block; padding-bottom:6px; }
        p { font-size:1.05rem; color:#334155; margin-bottom:14px; }
        .grid { display:grid; grid-template-columns: repeat(auto-fit, minmax(280px,1fr)); gap:22px; }
        .card { background:#fff; border:1px solid #e5e7eb; border-radius:12px; padding:22px; box-shadow:0 4px 10px rgba(0,0,0,0.05); transition:all 0.3s ease; }
        .card:hover { transform:translateY(-6px); box-shadow:0 8px 20px rgba(0,0,0,0.08); }
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
      `}</style>

      {/* ---------- Floating Background ---------- */}
      <div className="floating-bg">
        <span></span><span></span><span></span><span></span><span></span>
      </div>

      {/* ---------- Hero Section ---------- */}
      <motion.header className="header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <span className="badge">Case Study</span>
        <h1 className="title">Customer Support Ticketing System</h1>
        <p style={{ maxWidth: "800px", margin: "0 auto", color: "#475569" }}>
          A next-generation support automation system enhancing response speed, transparency, and customer trust.
        </p>
      </motion.header>

      {/* ---------- About Raynx ---------- */}
      <motion.section className="section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>About Raynx Systems</h2>
        <p>
          <b>Raynx Systems</b> is a digital transformation leader delivering cutting-edge solutions in automation, analytics, and enterprise technology. With a focus on innovation and scalability, Raynx empowers organizations to achieve operational excellence and superior customer experiences.
        </p>
      </motion.section>

      {/* ---------- Project Overview ---------- */}
      <motion.section className="section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>Project Overview</h2>
        <p>
          The <b>Customer Support Ticketing System</b> is a scalable, web-based helpdesk solution that automates ticket workflows, SLA monitoring, and customer-agent interactions. Built using <b>React</b> and <b>Spring Boot</b>, it integrates intelligent dashboards and knowledge management to accelerate issue resolution.
        </p>
        <p className="quote">
          “Smart ticketing for faster, transparent, and efficient customer support.”
        </p>
      </motion.section>

      {/* ---------- Challenges ---------- */}
      <motion.section className="section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>Challenges</h2>
        <div>
          {[
            { title: "Manual Ticket Handling", desc: "Support teams relied on emails and spreadsheets, leading to missed updates and delays." },
            { title: "Poor SLA Visibility", desc: "No centralized system to track response and resolution timelines." },
            { title: "Repetitive Issues", desc: "Absence of a searchable knowledge base caused duplicate tickets for common issues." },
            { title: "Customer Communication Gaps", desc: "Clients lacked real-time visibility into ticket progress or agent updates." },
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
            { title: "Automated Ticket Lifecycle", desc: "From creation to closure with real-time SLA tracking and escalations." },
            { title: "Role-Based Dashboards", desc: "Custom interfaces for Admins, Agents, and Customers with real-time metrics." },
            { title: "Knowledge Base Management", desc: "Centralized solution repository to reduce redundant support requests." },
            { title: "Live Notifications", desc: "Instant status updates via email and in-app alerts." },
            { title: "Secure Authentication", desc: "JWT-based security for users, with audit logs for transparency." },
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
            { title: "Operational Efficiency", points: ["40% faster response times", "Reduced manual follow-ups", "Automated escalations"] },
            { title: "Customer Satisfaction", points: ["80% users reported improved visibility", "Lower ticket resolution times"] },
            { title: "Scalability", points: ["Seamless integration with CRM", "Supports multi-department ticket routing"] },
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
          The <b>Customer Support Ticketing System</b> revolutionized how teams handle service operations — improving speed, communication, and satisfaction through automation and real-time transparency.
        </p>
      </motion.section>

      {/* ---------- Raynx Systems Experience ---------- */}
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
          <b>Raynx Systems</b> continues to deliver scalable enterprise-grade platforms that empower businesses to support, analyze, and grow. Through agile development and deep collaboration, Raynx ensures every client experiences measurable transformation and customer excellence.
        </p>
      </motion.section>
    </main>
  );
}
