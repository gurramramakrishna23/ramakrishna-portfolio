export default function DataCleaningDashboardPage() {
  return (
    <main className="project-page">
      <nav className="navbar">
        <a href="/" className="logo">
          RK.
        </a>

        <div className="nav-links">
          <a href="/#about">About</a>
          <a href="/#skills">Skills</a>
          <a href="/#experience">Experience</a>
          <a href="/#projects">Projects</a>
          <a href="/#contact">Contact</a>
        </div>

        <a href="/resume.pdf" className="nav-resume">
          Resume ↗
        </a>
      </nav>

      <section className="project-hero">
        <a href="/" className="back-link">
          ← Back to Portfolio
        </a>

        <p className="section-label">PROJECT / 03</p>

        <h1>Data Cleaning Dashboard</h1>

        <p className="project-intro">
          An interactive Streamlit application designed to inspect, clean,
          analyze, and explore datasets through an easy-to-use data
          preparation and analytics workflow.
        </p>

        <div className="hero-buttons">
          <a
            href="https://data-entry-cleaning-dashboard.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            Open Live App →
          </a>

          <a
            href="https://github.com/gurramramakrishna23/data-entry-cleaning-dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button"
          >
            View GitHub
          </a>
        </div>
      </section>

      <section className="project-section">
        <p className="section-label">01 / OVERVIEW</p>

        <div className="project-content-grid">
          <div>
            <h2>From raw data to useful information.</h2>
          </div>

          <div>
            <p>
              The Data Cleaning Dashboard is built to simplify the early
              stages of a data analytics workflow.
            </p>

            <p>
              Users can upload datasets, inspect their structure, identify
              potential data-quality issues, clean the data, and explore
              the resulting information through an interactive interface.
            </p>
          </div>
        </div>
      </section>

      <section className="project-section">
        <p className="section-label">02 / FEATURES</p>

        <div className="feature-grid">
          <article className="feature-card">
            <span>01</span>
            <h3>Dataset Upload</h3>
            <p>
              Upload raw datasets and begin the data preparation workflow
              directly from the application.
            </p>
          </article>

          <article className="feature-card">
            <span>02</span>
            <h3>Data Inspection</h3>
            <p>
              Inspect columns, data types, missing values, and other
              characteristics of the uploaded dataset.
            </p>
          </article>

          <article className="feature-card">
            <span>03</span>
            <h3>Data Cleaning</h3>
            <p>
              Apply data-cleaning operations to prepare raw information
              for analysis.
            </p>
          </article>

          <article className="feature-card">
            <span>04</span>
            <h3>Data Analysis</h3>
            <p>
              Explore cleaned datasets and generate useful analytical
              insights through the dashboard.
            </p>
          </article>

          <article className="feature-card">
            <span>05</span>
            <h3>SQL Analysis</h3>
            <p>
              Analyze prepared data using SQL-based queries through the
              dedicated analysis interface.
            </p>
          </article>

          <article className="feature-card">
            <span>06</span>
            <h3>Interactive Dashboard</h3>
            <p>
              Present data and analysis results through an interactive
              Streamlit interface.
            </p>
          </article>
        </div>
      </section>

      <section className="project-section">
        <p className="section-label">03 / TECHNOLOGY</p>

        <div className="technology-list">
          <span>Python</span>
          <span>Pandas</span>
          <span>Streamlit</span>
          <span>SQL</span>
          <span>Data Cleaning</span>
          <span>Data Analysis</span>
          <span>Data Visualization</span>
          <span>Git</span>
          <span>GitHub</span>
        </div>
      </section>

      <section className="project-section">
        <p className="section-label">04 / WORKFLOW</p>

        <div className="workflow">
          <div>
            <strong>01</strong>
            <h3>Upload</h3>
            <p>
              Start by uploading a raw dataset into the application.
            </p>
          </div>

          <div>
            <strong>02</strong>
            <h3>Inspect</h3>
            <p>
              Examine the structure, columns, data types, and quality of
              the uploaded data.
            </p>
          </div>

          <div>
            <strong>03</strong>
            <h3>Clean</h3>
            <p>
              Apply data-cleaning operations to transform raw data into a
              more usable dataset.
            </p>
          </div>

          <div>
            <strong>04</strong>
            <h3>Analyze</h3>
            <p>
              Explore the cleaned dataset using analytical and SQL-based
              operations.
            </p>
          </div>

          <div>
            <strong>05</strong>
            <h3>Visualize</h3>
            <p>
              Present useful information through an interactive dashboard
              interface.
            </p>
          </div>
        </div>
      </section>

      <section className="project-section project-final">
        <p className="section-label">05 / EXPLORE</p>

        <h2>Try the application.</h2>

        <p>
          Explore the deployed application or inspect the complete source
          code on GitHub.
        </p>

        <div className="hero-buttons">
          <a
            href="https://data-entry-cleaning-dashboard.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            Open Live App →
          </a>

          <a
            href="https://github.com/gurramramakrishna23/data-entry-cleaning-dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button"
          >
            GitHub Repository →
          </a>
        </div>
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