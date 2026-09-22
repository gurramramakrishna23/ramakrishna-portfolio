export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a href="#" className="logo">
          RK.
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#certifications">Certifications</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-resume"
        >
          Resume ↗
        </a>
      </nav>

      <section className="hero">
        <p className="eyebrow">COMPUTER SCIENCE & DATA SCIENCE</p>

        <h1>
          Hi, I&apos;m
          <br />
          <span>Ramakrishna.</span>
        </h1>

        <p className="hero-text">
          I build data-driven applications, machine learning solutions,
          and software projects while continuously improving my problem-solving
          skills.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button"
          >
            Download Resume
          </a>

          <a href="#contact" className="secondary-button">
            Contact Me
          </a>
        </div>

        <div className="quick-info">
          <span>Python</span>
          <span>SQL</span>
          <span>Machine Learning</span>
          <span>Data Analytics</span>
        </div>
      </section>

      <section id="about" className="section">
        <p className="section-label">01 — ABOUT</p>

        <h2>Building with code, data & curiosity.</h2>

        <p className="section-text">
          I&apos;m a Computer Science student with a strong interest in
          software development, data science, machine learning, and problem
          solving. I enjoy turning ideas into practical projects and learning
          new technologies through hands-on development.
        </p>
      </section>

      <section id="skills" className="section">
        <p className="section-label">02 — SKILLS</p>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Programming</h3>
            <p>C · Python · Java · R</p>
          </div>

          <div className="skill-card">
            <h3>Data</h3>
            <p>SQL · MongoDB · Pandas · Excel · Power BI</p>
          </div>

          <div className="skill-card">
            <h3>Machine Learning</h3>
            <p>Scikit-learn · Data Analysis · Data Visualization</p>
          </div>

          <div className="skill-card">
            <h3>Development</h3>
            <p>Streamlit · OpenCV · Git · GitHub</p>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <p className="section-label">03 — EXPERIENCE</p>

        <div className="experience-card">
          <div>
            <p className="experience-date">SEP 2026 — OCT 2026</p>

            <h3>Data Analyst Intern</h3>

            <p className="company">
              SWYNEX Technologies · Remote
            </p>
          </div>

          <p>
            Data & AI internship focused on structured data analytics
            assignments, data cleaning, analysis, and interactive dashboard
            development.
          </p>
        </div>
      </section>

      <section id="projects" className="section">
        <p className="section-label">04 — PROJECTS</p>

        <div className="projects-grid">
          <article className="project-card">
            <p className="project-number">01</p>

            <h3>Smart Attendance Tracker</h3>

            <p>
              A face-recognition based attendance system built with Python,
              OpenCV, and InsightFace to automate student identification and
              attendance tracking.
            </p>

            <div className="tags">
              <span>Python</span>
              <span>OpenCV</span>
              <span>InsightFace</span>
            </div>

            <a
              href="/projects/smart-attendance-tracker"
              className="project-link"
            >
              View Project →
            </a>
          </article>

          <article className="project-card">
            <p className="project-number">02</p>

            <h3>Titanic Survival Prediction</h3>

            <p>
              A machine learning web application that predicts Titanic
              passenger survival probabilities using Scikit-learn and
              Streamlit.
            </p>

            <div className="tags">
              <span>Python</span>
              <span>Scikit-learn</span>
              <span>Streamlit</span>
            </div>

            <a
              href="/projects/titanic-survival-prediction"
              className="project-link"
            >
              View Project →
            </a>
          </article>

          <article className="project-card">
            <p className="project-number">03</p>

            <h3>Data Cleaning Dashboard</h3>

            <p>
              A data-focused dashboard designed to inspect, clean, analyze,
              and visualize uploaded datasets through an interactive
              interface.
            </p>

            <div className="tags">
              <span>Python</span>
              <span>Pandas</span>
              <span>Streamlit</span>
            </div>

            <a
              href="/projects/data-cleaning-dashboard"
              className="project-link"
            >
              View Project →
            </a>
          </article>
        </div>
      </section>

      <section id="achievements" className="section">
        <p className="section-label">05 — ACHIEVEMENTS</p>

        <div className="stats-grid">
          <div>
            <strong>600+</strong>
            <span>CodeChef Problems</span>
          </div>

          <div>
            <strong>30</strong>
            <span>LeetCode Problems</span>
          </div>

          <div>
            <strong>8.5</strong>
            <span>CGPA</span>
          </div>

          <div>
            <strong>2028</strong>
            <span>Expected Graduation</span>
          </div>
        </div>
      </section>

      <section id="certifications" className="section">
        <p className="section-label">06 — CERTIFICATIONS</p>

        <div className="certifications-grid">
          <div className="certification-card">
            <span className="certification-number">01</span>
            <div>
              <h3>IBM AI Fundamentals</h3>
              <p>IBM · December 2025</p>
            </div>
          </div>

          <div className="certification-card">
            <span className="certification-number">02</span>
            <div>
              <h3>Python Essentials 1</h3>
              <p>Cisco · February 2026</p>
            </div>
          </div>

          <div className="certification-card">
            <span className="certification-number">03</span>
            <div>
              <h3>Data Science Job Simulation</h3>
              <p>BCG · Forage · August 2026</p>
            </div>
          </div>

          <div className="certification-card">
            <span className="certification-number">04</span>
            <div>
              <h3>Stay Ahead of AI Curve</h3>
              <p>Google · Coursera · August 2026</p>
            </div>
          </div>

          <div className="certification-card">
            <span className="certification-number">05</span>
            <div>
              <h3>30 Days Power BI Micro Course</h3>
              <p>SkillCourse · August 2026</p>
            </div>
          </div>

          <div className="certification-card">
            <span className="certification-number">06</span>
            <div>
              <h3>Data Analyst 101</h3>
              <p>Simplilearn · August 2026</p>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <p className="section-label">07 — EDUCATION</p>

        <div className="education-card">
          <p className="education-date">2024 — 2028</p>

          <h3>Bachelor of Technology</h3>

          <p>Computer Science</p>

          <p>
            Kasireddynarayanareddy College of Engineering and Research
          </p>

          <strong>CGPA: 8.5</strong>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <p className="section-label">08 — CONTACT</p>

        <h2>Let&apos;s build something useful.</h2>

        <p>
          I&apos;m open to internships, software development opportunities,
          data-related projects, and collaborations.
        </p>

        <a href="mailto:gurramramakrishna79@gmail.com">
          gurramramakrishna79@gmail.com
        </a>
      </section>

      <footer>
        <p>© 2026 Gurram Ramakrishna</p>

        <div>
          <a
            href="https://github.com/gurramramakrishna23"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/gurram-rama-krishna-678b45375"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}