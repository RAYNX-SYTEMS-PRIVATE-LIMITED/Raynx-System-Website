import React, { useEffect, useRef } from "react";
import { imageUrl } from '../utils/imageUrl'
import { Link } from "react-router-dom";
import "../assets/css/styles.css";

export default function Services() {
  const rootRef = useRef(null);
  useEffect(() => {
    // Trigger enter animations after mount
    const el = rootRef.current;
    if (!el) return;
    const id = requestAnimationFrame(() => el.classList.add("enter"));
    return () => cancelAnimationFrame(id);
  }, []);
  return (
    <main className="slider-container" id="services">
      {/* Logo at top of the Services page */}

      <div ref={rootRef} className="slides-wrapper enterable">
        {/* Slide 1: Key Products and Services */}
        <section className="slide animated delay-1" id="slide-1">
          <div className="slide-content">
            <div className="text-content">
              <h2 className="services-title">
                KEY PRODUCTS
                <br />
                AND SERVICES
              </h2>
              <p>
                At Raynx Systems, we deliver end-to-end IT solutions tailored
                for modern businesses. Our services include Custom Software
                Development, Full Stack Web & Mobile App Development, and robust
                Backend Architecture & APIs. We also build smart, scalable tools
                using AI & NLP technologies, offer Startup Tech Consulting, and
                provide Freelance Development Support to help teams scale faster
                and smarter.
              </p>
            </div>
            <div className="image-content">
              {/* <img src="/Pictures/keypr1.jfif" alt="Team collaborating on a project" className="main-image1" data-src="/Pictures/keypr1.jfif" />
              <img src="/Pictures/keypr2.jfif" alt="Team collaborating on a project" className="main-image2" data-src="/Pictures/keypr2.jfif" /> */}
              <img
                src={imageUrl('Pictures/prodsand services.jpg')}
                alt=""
                className="main-image1"
              />
              {/* <div className="yellow-box"></div> */}
            </div>
          </div>
        </section>

        {/* Slide 2: Market Analysis */}
        <section className="slide animated delay-2" id="slide-2">
          <div className="slide-content">
            <div className="text-content1">
              <h1 className="services-title">MARKET ANALYSIS</h1>
              <h3 className="services-subtitle highlight-title title-a">
                Target Audience
              </h3>
              <p>
                We primarily serve startups, SMEs, and tech-driven businesses
                seeking custom software development, backend architecture, or
                digital transformation.
              </p>
              <h3 className="services-subtitle highlight-title title-b">
                Current Market Trends
              </h3>
              <p>
                The demand for AI integration, automation tools, and full-stack
                solutions continues to rise, especially in fast-evolving sectors
                like EdTech, HealthTech, Retail, and Enterprise SaaS. With the
                global shift toward remote work, cloud-native systems, and
                on-demand talent, our agile model aligns perfectly with today’s
                market needs.
              </p>
            </div>
            <img
              src={imageUrl('Pictures/marketanalysis.jpg')}
              className="chart-content"
              alt=""
            />
          </div>
        </section>

        {/* Slide 3: Business Model */}
        <section className="slide animated delay-3" id="slide-3">
          <div className="business-model-content">
            <div className="business-header">
              <h1>BUSINESS MODEL</h1>
              <p>
                At Raynx Systems, we operate through a dual-mode business model
              </p>
            </div>
            <div className="business-model-container">
              <div className="business-box">
                <div className="business-text">
                  <h3>Core IT Software</h3>
                  <p>
                    We build full-cycle web and mobile applications that are
                    scalable, secure, and business-driven, combining clean
                    architecture with agile delivery to solve real-world
                    problems efficiently and effectively.
                  </p>
                </div>
                <div className="business-image-wrapper">
                  <img
                    src={imageUrl('Pictures/core_IT.png')}
                    alt="Team working on software"
                    className="business-image"
                    data-src={imageUrl('Pictures/core_IT.png')}
                  />
                  <div className="yellow-accent"></div>
                </div>
              </div>
              <div className="business-box">
                <div className="business-text">
                  <h3>Freelance Partnerships</h3>
                  <p>
                    Offering skilled backend/frontend developers for on-demand
                    projects. This model allows us to stay lean, flexible, and
                    client-focused.
                  </p>
                </div>
                <div className="business-image-wrapper">
                  <img
                    src={imageUrl('Pictures/businessmodel.png')}
                    alt="Freelancer collaborating"
                    className="business-image"
                    data-src={imageUrl('Pictures/businessmodel.png')}
                  />
                  <div className="yellow-accent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Core Services (capabilities) */}
      <section className="animated delay-2">
        <h2 className="services-title">What We Offer</h2>
        <div className="services-grid">
          <div className="service-item">
            <div className="service-icon">
              <i className="fa-solid fa-bezier-curve" />
            </div>
            <div>
              <h4>UI/UX</h4>
              <p>
                Designing accessible, modern, and user‑focused interfaces for
                web and mobile that convert and retain users.
              </p>
            </div>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <i className="fa-solid fa-code" />
            </div>
            <div>
              <h4>Software Development</h4>
              <p>
                End‑to‑end engineering of reliable applications using best
                practices and modern architectures.
              </p>
            </div>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <i className="fa-solid fa-network-wired" />
            </div>
            <div>
              <h4>Internet of Things (IoT)</h4>
              <p>
                Connect devices and platforms securely to collect, analyze, and
                act on real‑time data.
              </p>
            </div>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <i className="fa-solid fa-vial-circle-check" />
            </div>
            <div>
              <h4>Testing Services</h4>
              <p>
                Quality engineering as a service—functional, regression, and
                automation to ship with confidence.
              </p>
            </div>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <i className="fa-solid fa-chart-pie" />
            </div>
            <div>
              <h4>Data Analytics & Reporting</h4>
              <p>
                Transform data into insights with pipelines, dashboards, and
                decision‑ready reports.
              </p>
            </div>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <i className="fa-solid fa-mobile-screen-button" />
            </div>
            <div>
              <h4>Mobile Applications</h4>
              <p>
                Native and cross‑platform apps for iOS and Android—from idea to
                launch and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="service-categories">
        <h2>Service Categories</h2>
        <div className="service-categories-grid">
          <div className="white-card">
            <img src={imageUrl('Pictures/productdevelopment.jpg')} alt="" />
            <h3>Product Development</h3>
            <p>
              Custom software, web apps, and mobile apps, built end-to-end with
              clean architecture.
            </p>
          </div>
          <div className="white-card">
            <img src={imageUrl('Pictures/it consulting.jpg')} alt="" />
            <h3>IT Consulting</h3>

            <p>
              Technical strategy, solution architecture, scalability planning,
              and cost optimization.
            </p>
          </div>
          <div className="white-card">
            <img src={imageUrl('Pictures/cloudadndevops.jpg')} alt="" />
            <h3>Cloud & DevOps</h3>
            <p>
              Deployment, monitoring, automation, CI/CD pipelines, and
              production support.
            </p>
          </div>

          <div className="white-card">
            <img
              src={imageUrl('Pictures/maintenance and support.jpeg')}
              alt=""
            />
            <h3>Maintenance & Support</h3>
            <p>
              Continuous improvement, monitoring, bug fixes, and performance
              enhancements.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="engagement-models">
        <h2>Engagement Models</h2>
        <div className="engagement-models-grid">
          <div className="white-card">
            <h3>Fixed Scope</h3>
            <p>Well-defined requirements with predictable cost and timeline.</p>
          </div>
          <div className="white-card">
            <h3>Time & Material</h3>
            <p>Flexible scope and iterative delivery for evolving projects.</p>
          </div>
          <div className="white-card">
            <h3>Dedicated Team</h3>
            <p>
              Extended team working alongside your product owners and
              stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="delivery-process">
        <h2>Our Delivery Process</h2>
        <ol >
          <li className="white-cardd" >
            <h4>1. Discover</h4>
            <p>Workshops, scope, success metrics, and milestones.</p>
          </li>
          <li className="white-cardd">
            <h4>2. Design</h4>
            <p>Information architecture, UI/UX prototypes, and technical design.</p>
          </li>
          <li className="white-cardd">
            <h4>3. Build</h4>
            <p>Sprints with demos; quality checks; performance & security gates.</p>
          </li>
          <li className="white-cardd">
            <h4>4. Testing</h4>
            <p>Sprints with demos; quality checks; performance & security gates.</p>
          </li>
          <li className="white-cardd">
            <h4>5 . Launch</h4>
            <p>Release, handover, training, and success monitoring.</p>
          </li>
        </ol>
      </section>


      {/* Tech Stack */}
      <section className="tech-stack">
        <h2>Tech Stack</h2>
        <div className="tech-stack-grid1">
          <div className="white-card2">
            <strong>Frontend</strong>
            <ol>
              <li>
                <img src={imageUrl('Pictures/react.jpg')} alt="" />
                <p>React js</p>
              </li>
              <li>
                <img src={imageUrl('Pictures/nextjs.jpg')} alt="" />
                <p>Next js</p>
              </li>

              <li>
                <img src={imageUrl('Pictures/tailwindcss.jpg')} alt="" />
                <p>Tailwind css</p>
              </li>
            </ol>

          </div>
          <div className="white-card2">
            <strong>Backend</strong>
            <ol>
              <li>
                <img src={imageUrl('Pictures/java.jpg')} alt="" />
                <p>Java</p>
              </li>
              <li>
                <img src={imageUrl('Pictures/springboot.jpg')} alt="" />
                <p>SpringBoot</p>
              </li>

              <li>
                <img src={imageUrl('Pictures/django.jpg')} alt="" />
                <p>Django</p>
              </li>

              <li>
                <img src={imageUrl('Pictures/expressjs.jpg')} alt="" />
                <p>Express js</p>
              </li>


            </ol>
          </div>
        </div>

        <div className="tech-stack-grid2">

          <div className="white-card2">
            <strong>Database</strong>
            <ol>
              <li>
                <img src={imageUrl('Pictures/postgresql.jpg')} alt="" />
                <p>PostgreSQL</p>
              </li>
              <li>
                <img src={imageUrl('Pictures/mysql.jpg')} alt="" />
                <p>MySQL</p>
              </li>

              <li>
                <img src={imageUrl('Pictures/mongodb.jpg')} alt="" />
                <p>MongoDB</p>
              </li>
            </ol>
          </div>
          <div className="white-card2">
            <strong>Cloud & DevOps</strong>
            <ol>
              <li>
                <img src={imageUrl('Pictures/aws.jpg')} alt="" />
                <p>AWS</p>
              </li>
              <li>
                <img src={imageUrl('Pictures/docker.png')} alt="" />
                <p>Docker</p>
              </li>

              <li>
                <img src={imageUrl('Pictures/kubernets.png')} alt="" />
                <p>Kubernetes</p>
              </li>
              <li>
                <img src={imageUrl('Pictures/cicd.png')} alt="" />
                <p>CI/CD</p>
              </li>
            </ol>
          </div>
        </div>

        <div className="tech-stack-grid3">
          <div className="white-card2">
            <strong>AI & Data</strong>
            <ol>
              <li>
                <img src={imageUrl('Pictures/python.png')} alt="" />
                <p>Python</p>
              </li>
              <li>
                {/* <img src="../../public/Pictures/nextjs.jpg" alt="" /> */}
                <p>Transformers</p>
              </li>

              <li>
                {/* <img src="../../public/Pictures/tailwindcss.jpg" alt="" /> */}
                <p>RAG</p>
              </li>

              <li>
                {/* <img src="../../public/Pictures/tailwindcss.jpg" alt="" /> */}
                <p>vector DBs</p>
              </li>
            </ol>

          </div>
      </div>
      </section >

    {/* Industries */ }
  {/* <section className="industries">
        <h2>Industries We Serve</h2>
        <div className="industries-grid">
          <div className="white-card">SaaS & B2B</div>
          <div className="white-card">EdTech</div>
          <div className="white-card">HealthTech</div>
          <div className="white-card">Retail & E‑commerce</div>
          <div className="white-card">FinTech</div>
        </div>
      </section> */}

  {/* FAQs */ }
  <section className="faqs">
    <h2>FAQs</h2>
    <div className="faqs-grid">
      <details className="white-cardf">
        <summary>
          Do you support product-based services and long-term maintenance?
        </summary>
        <p>
          Yes. We partner as a product engineering team and provide
          continuous support with SLAs.
        </p>
      </details>
      <details className="white-cardf">
        <summary>How do you start a new project?</summary>
        <p>
          We run a short discovery to align on scope, outcomes, and
          deliverables, then recommend the best engagement model.
        </p>
      </details>
      <details className="white-cardf">
        <summary>Can you integrate AI into existing systems?</summary>
        <p>
          We integrate NLP/LLM features (search, classification,
          summarization) and design safe, measurable rollouts.
        </p>
      </details>
    </div>
  </section>

  {/* CTA */ }
  <section className="cta-section">
    <div>
      <h2>Let’s build your product or platform</h2>
      <p>
        We provide both services and product-based engagements to help
        companies and clients ship faster.
      </p>
     
<a href="/contact" className="primary-btn">
        Get a quote
      </a>
    </div>
  </section>
    </main >
  );
}
