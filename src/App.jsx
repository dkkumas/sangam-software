import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">Sangam Software</div>

        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <span className="tag">Tokyo Based Software Consulting</span>

            <h1>
              Software Solutions
              <br />
              Built For Business
            </h1>

            <p>
              Sangam Software provides software consulting, custom development,
              cloud engineering, and AI solutions to help organizations
              modernize operations and accelerate growth.
            </p>

            <a href="#contact" className="primary-btn">
              Contact Us
            </a>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
              alt="Software Consulting"
            />
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="section-header">
          <span>WHAT WE DO</span>
          <h2>Technology Services</h2>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <h3>Software Consulting</h3>
            <p>
              Technology strategy, architecture reviews, digital
              transformation, and engineering guidance.
            </p>
          </div>

          <div className="service-card">
            <h3>Custom Development</h3>
            <p>
              Enterprise software, web applications, mobile solutions, and
              system integrations.
            </p>
          </div>

          <div className="service-card">
            <h3>Cloud Engineering</h3>
            <p>
              AWS, Azure, DevOps pipelines, infrastructure automation, and
              cloud modernization.
            </p>
          </div>

          <div className="service-card">
            <h3>AI Solutions</h3>
            <p>
              Machine learning, intelligent automation, analytics, and AI
              integration services.
            </p>
          </div>
        </div>
      </section>

      <section className="why-us">
        <div className="section-header">
          <span>WHY CHOOSE US</span>
          <h2>Focused On Results</h2>
        </div>

        <div className="why-grid">
          <div>
            <h3>Experienced Engineering</h3>
            <p>
              Practical expertise across software, cloud platforms, automation,
              and emerging technologies.
            </p>
          </div>

          <div>
            <h3>Scalable Solutions</h3>
            <p>
              Designed for reliability, maintainability, and long-term business
              growth.
            </p>
          </div>

          <div>
            <h3>Client Partnership</h3>
            <p>
              Transparent communication and solutions aligned with business
              objectives.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-card">
          <h2>Contact Us</h2>

          <p><strong>Sangam Software</strong></p>

          <p>
            7F, Fuji Building 40
            <br />
            15-14 Sakuragaoka-cho
            <br />
            Shibuya-ku, Tokyo 150-0031
            <br />
            Japan
          </p>

          <p>📞 +81 80-3783-0615</p>
          <p>✉️ latha@sangamsoftware.com</p>
        </div>
      </section>

      <footer>
        © 2026 Sangam Software. All Rights Reserved.
      </footer>
    </>
  );
}

export default App;