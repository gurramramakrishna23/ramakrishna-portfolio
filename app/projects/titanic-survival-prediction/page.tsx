export default function TitanicSurvivalPredictionPage() {
  return (
    <main className="project-page">
      <nav className="navbar">
        <a href="/" className="logo">
          RK
        </a>

        <div className="nav-links">
          <a href="/#about">About</a>
          <a href="/#skills">Skills</a>
          <a href="/#projects">Projects</a>
          <a href="/#contact">Contact</a>
        </div>

        <a href="/resume.pdf" className="nav-resume">
          Resume
        </a>
      </nav>

      <section className="project-hero">
        <a href="/" className="back-link">
          ← Back to Portfolio
        </a>

        <p className="section-label">PROJECT / 02</p>

        <h1>Titanic Survival Prediction</h1>

        <p className="project-intro">
          A machine learning web application that predicts the probability
          of survival for Titanic passengers using passenger-related
          information and a trained classification model.
        </p>

        <div className="hero-buttons">
          <a
            href="https://github.com/gurramramakrishna23/titanic-survival-prediction"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            View on GitHub →
          </a>

          <a
            href="/#projects"
            className="secondary-button"
          >
            All Projects
          </a>
        </div>
      </section>

      <section className="project-section">
        <p className="section-label">01 / OVERVIEW</p>

        <div className="project-content-grid">
          <div>
            <h2>Turning passenger data into predictions.</h2>
          </div>

          <div>
            <p>
              Titanic Survival Prediction is a machine learning project
              built to analyze passenger information and predict whether
              a passenger would survive the Titanic disaster.
            </p>

            <p>
              The project combines data preprocessing, exploratory data
              analysis, machine learning, model evaluation, and an
              interactive Streamlit interface.
            </p>
          </div>
        </div>
      </section>

      <section className="project-section">
        <p className="section-label">02 / FEATURES</p>

        <div className="feature-grid">
          <article className="feature-card">
            <span>01</span>
            <h3>Data Processing</h3>
            <p>
              Passenger data is prepared and transformed into a format
              suitable for machine learning.
            </p>
          </article>

          <article className="feature-card">
            <span>02</span>
            <h3>Machine Learning</h3>
            <p>
              A classification model is trained to identify patterns
              associated with passenger survival.
            </p>
          </article>

          <article className="feature-card">
            <span>03</span>
            <h3>Prediction</h3>
            <p>
              User-provided passenger information can be used to generate
              a survival prediction.
            </p>
          </article>

          <article className="feature-card">
            <span>04</span>
            <h3>Interactive Interface</h3>
            <p>
              A Streamlit interface makes the trained model accessible
              through a simple web application.
            </p>
          </article>
        </div>
      </section>

      <section className="project-section">
        <p className="section-label">03 / TECHNOLOGY</p>

        <div className="technology-list">
          <span>Python</span>
          <span>Pandas</span>
          <span>Scikit-learn</span>
          <span>Joblib</span>
          <span>Streamlit</span>
          <span>Matplotlib</span>
          <span>Seaborn</span>
          <span>Machine Learning</span>
          <span>Data Analysis</span>
        </div>
      </section>

      <section className="project-section">
        <p className="section-label">04 / WORKFLOW</p>

        <div className="workflow">
          <div>
            <strong>01</strong>
            <h3>Load Data</h3>
            <p>
              Import the Titanic passenger dataset for analysis and
              model development.
            </p>
          </div>

          <div>
            <strong>02</strong>
            <h3>Prepare Data</h3>
            <p>
              Clean and transform relevant passenger information before
              training the model.
            </p>
          </div>

          <div>
            <strong>03</strong>
            <h3>Train Model</h3>
            <p>
              Train a machine learning classification model using the
              prepared dataset.
            </p>
          </div>

          <div>
            <strong>04</strong>
            <h3>Make Prediction</h3>
            <p>
              Use passenger inputs to generate a survival prediction
              through the Streamlit application.
            </p>
          </div>
        </div>
      </section>

      <section className="project-section project-final">
        <p className="section-label">05 / SOURCE</p>

        <h2>Explore the project.</h2>

        <p>
          View the source code, project structure, and implementation
          details on GitHub.
        </p>

        <a
          href="https://github.com/gurramramakrishna23/titanic-survival-prediction"
          target="_blank"
          rel="noopener noreferrer"
          className="primary-button"
        >
          Open GitHub Repository →
        </a>
      </section>

      <footer>
        <span>© 2026 Gurram Ramakrishna</span>

        <div>
          <a
            href="https://github.com/gurramramakrishna23"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/gurram-rama-krishna-678b45375/"
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