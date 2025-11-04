import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { imageUrl } from '../utils/imageUrl'

export default function Products() {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();

  const yPos = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    {
      title: "Smart Retail Inventory & POS System",
      desc: "Role-based dashboards for Admin, Manager, and Cashier; manage POS, inventory, suppliers, and reports seamlessly.",
      img: imageUrl('Pictures/smart.jpg'),
      to: "/projects/smart-retail",
    },
    {
      title: "Customer Support Ticketing System",
      desc: "Efficient ticketing with role-based dashboards for Admin, User, and Support; integrated knowledge base.",
      img: imageUrl('Pictures/customer.webp'),
      to: "/projects/customer-support-ticketing",
    },
    {
      title: "Workflow Automation Suite",
      desc: "Automate routine operations with customizable workflows and integrations.",
      img: imageUrl('Pictures/keypr1.jfif'),
      to: "#",
    },
    {
      title: "Analytics Dashboard",
      desc: "Track KPIs and gain insights with real-time charts and role-based access.",
      img: imageUrl('Pictures/keypr2.jfif'),
      to: "#",
    },
    {
      title: "NLP Utilities",
      desc: "Reusable AI components for search, summarization, and classification.",
      img: imageUrl('Pictures/businessmodel.png'),
      to: "#",
    },
    
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  // internal CSS
  const styles = {
    page: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f9fafb, #e0e7ff)",
      padding: "80px 20px",
      fontFamily: "'Poppins', sans-serif",
      overflowX: "hidden",
    },
    header: {
      textAlign: "center",
      marginBottom: "60px",
    },
    h1: {
      fontSize: "3rem",
      fontWeight: "700",
      color: "#1e293b",
      letterSpacing: "1px",
      marginBottom: "10px",
    },
    p: {
      fontSize: "1.1rem",
      color: "#475569",
      maxWidth: "650px",
      margin: "0 auto",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "30px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "18px",
      overflow: "hidden",
      boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    cardHover: {
      transform: "scale(1.03)",
      boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
    },
    img: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
    content: {
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "220px",
    },
    title: {
      color: "#1e293b",
      fontSize: "1.25rem",
      marginBottom: "10px",
    },
    desc: {
      color: "#475569",
      fontSize: "0.95rem",
      lineHeight: "1.5",
    },
    learnBtn: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "15px",
      padding: "10px 16px",
      borderRadius: "10px",
      fontWeight: "500",
      backgroundColor: "#2563eb",
      color: "white",
      textDecoration: "none",
      transition: "all 0.3s ease",
    },
    comingBtn: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "15px",
      padding: "10px 16px",
      borderRadius: "10px",
      fontWeight: "500",
      backgroundColor: "#cbd5e1",
      color: "#64748b",
      cursor: "not-allowed",
    },
    icon: {
      marginLeft: "6px",
      width: "16px",
      height: "16px",
    },
  };

  return (
    <main style={styles.page}>
      {/* Floating header */}
      <motion.section
        style={{ ...styles.header, y: yPos, opacity }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={styles.h1}>Our Products</h1>
        <p style={styles.p}>
          Crafted with precision, powered by innovation. Explore technology that
          speaks for itself.
        </p>
      </motion.section>

      {/* Product cards */}
      <section style={styles.grid}>
        {products.map((p, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.03 }}
            style={styles.card}
          >
            <img src={p.img} alt={p.title} style={styles.img} />
            <div style={styles.content}>
              <div>
                <h3 style={styles.title}>{p.title}</h3>
                <p style={styles.desc}>{p.desc}</p>
              </div>
              {p.to && p.to !== "#" ? (
                <Link
                  to={p.to}
                  style={styles.learnBtn}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#1d4ed8")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#2563eb")
                  }
                >
                  Learn More <ArrowRight style={styles.icon} />
                </Link>
              ) : (
                <button disabled style={styles.comingBtn}>
                  Coming Soon
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
