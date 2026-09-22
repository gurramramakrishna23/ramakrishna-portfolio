export default function SmartAttendanceTrackerPage() {
  return (
    <main className="project-page">
      <nav className="navbar">
        <a href="/" className="logo">
          RK.
        </a>

        <a href="/" className="back-link">
          ← Back to Portfolio
        </a>
      </nav>

      <section className="project-hero">
        <p className="project-eyebrow">PROJECT 01 · COMPUTER VISION</p>

        <h1>
          Smart Attendance
          <br />
          <span>Tracker.</span>
        </h1>

        <p className="project-intro">
          A face-recognition based attendance system built with Python,
          OpenCV, and InsightFace to automate student identification and
          attendance tracking.
        </p>

        <div className="project-actions">
          <a
            href="https://github.com/gurramramakrishna23/smart-attendance-tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            View on GitHub ↗
          </a>

          <a href="/" className="secondary-button">
            Portfolio →
          </a>
        </div>
      </section>

      <section className="project-section">
        <p className="section-label">01 — OVERVIEW</p>

        <div className="project-content-grid">
          <div>
            <h2>Automating attendance with computer vision.</h2>
          </div>

          <div>
            <p>
              Smart Attendance Tracker is designed to reduce the manual work
              involved in recording student attendance.
            </p>

            <p>
              The application uses computer vision and face recognition to
              identify registered students and record their attendance.
            </p>

            <p>
              The project combines Python, OpenCV, InsightFace, and database
              management into a practical attendance workflow.
            </p>
          </div>
        </div>
      </section>

      <section className="project-section">
        <p className="section-label">02 — FEATURES</p>

        <div className="feature-grid">
          <article className="feature-card">
            <span>01</span>
            <h3>Student Registration</h3>
            <p>
              Register students and create the required face data for
              identification.
            </p>
          </article>

          <article className="feature-card">
            <span>02</span>
            <h3>Face Recognition</h3>
            <p>
              Detect and identify registered students using computer vision
              and face-recognition technology.
            </p>
          </article>

          <article className="feature-card">
            <span>03</span>
            <h3>Attendance Tracking</h3>
            <p>
              Record recognized students as attendance during an active
              session.
            </p>
          </article>

          <article className="feature-card">
            <span>04</span>
            <h3>Data Management</h3>
            <p>
              Maintain attendance information through structured data and
              database management.
            </p>
          </article>
        </div>
      </section>

      <section className="project-section">
        <p className="section-label">03 — TECHNOLOGY</p>

        <div className="technology-list">
          <span>Python</span>
          <span>OpenCV</span>
          <span>InsightFace</span>
          <span>Computer Vision</span>
          <span>Face Recognition</span>
          <span>Database Management</span>
        </div>
      </section>

      <section className="project-section">
        <p className="section-label">04 — WORKFLOW</p>

        <div className="workflow">
          <div className="workflow-step">
            <strong>01</strong>
            <h3>Register</h3>
            <p>Capture and register a student's face data.</p>
          </div>

          <div className="workflow-arrow">→</div>

          <div className="workflow-step">
            <strong>02</strong>
            <h3>Detect</h3>
            <p>Process the camera input and detect faces.</p>
          </div>

          <div className="workflow-arrow">→</div>

          <div className="workflow-step">
            <strong>03</strong>
            <h3>Identify</h3>
            <p>Match detected faces with registered students.</p>
          </div>

          <div className="workflow-arrow">→</div>

          <div className="workflow-step">
            <strong>04</strong>
            <h3>Record</h3>
            <p>Record attendance for the recognized student.</p>
          </div>
        </div>
      </section>

      <section className="project-section project-final">
        <p className="section-label">05 — PROJECT</p>

        <h2>
          Built to turn
          <br />
          <span>computer vision into a practical tool.</span>
        </h2>

        <a
          href="https://github.com/gurramramakrishna23/smart-attendance-tracker"
          target="_blank"
          rel="noopener noreferrer"
          className="primary-button"
        >
          Explore the GitHub Repository ↗
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