import { useState } from "react";
import { Link } from "react-router-dom";
import JobCard from "../components/JobCard";
import ApplyModal from "../components/ApplyModal";
import { jobs } from "../data/jobs";

const features = [
  {
    icon: "✅",
    title: "Verified Openings",
    text: "Every listing is checked by our team before it goes live, so you never waste time on fake postings.",
  },
  {
    icon: "⚡",
    title: "One-Click Apply",
    text: "Apply with a short form. No long sign-ups, no resume uploads blocking you from getting started.",
  },
  {
    icon: "🎓",
    title: "Built for Students",
    text: "Roles that match what you are actually learning, with mentors who review your work.",
  },
  {
    icon: "📜",
    title: "Certificate & LOR",
    text: "Complete your internship and get a verifiable certificate plus a letter of recommendation.",
  },
];

const steps = [
  { n: 1, title: "Browse Roles", text: "Filter openings by category, location type and skills." },
  { n: 2, title: "Hit Apply", text: "Fill a 60-second form with your details and college." },
  { n: 3, title: "Get Shortlisted", text: "Our team reviews and connects you with the company." },
  { n: 4, title: "Start Learning", text: "Join the team, ship real work and earn your certificate." },
];

function Home() {
  const [selectedJob, setSelectedJob] = useState(null);
  const featured = jobs.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="pill">🚀 Now hiring for {jobs.length} open roles</span>
            <h1>Launch your career with the right internship.</h1>
            <p className="lead">
              DG Interns Hub connects students with verified internship
              opportunities across development, design, data and marketing —
              remote, hybrid or onsite.
            </p>
            <div className="hero-actions">
              <Link to="/jobs" className="btn btn-light">
                Browse Internships
              </Link>
              <Link to="/contact" className="btn btn-outline" style={{ color: "#fff", borderColor: "rgba(255,255,255,.6)" }}>
                Hire an Intern
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <h3>Why students pick us</h3>
            <div className="hero-stat">
              <span>Active internships</span>
              <b>{jobs.length}+</b>
            </div>
            <div className="hero-stat">
              <span>Hiring partners</span>
              <b>40+</b>
            </div>
            <div className="hero-stat">
              <span>Students placed</span>
              <b>1,200+</b>
            </div>
            <div className="hero-stat">
              <span>Avg. stipend</span>
              <b>₹10k</b>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container">
          <div className="stats">
            <div className="stat-box">
              <b>1,200+</b>
              <span>Students Placed</span>
            </div>
            <div className="stat-box">
              <b>40+</b>
              <span>Hiring Partners</span>
            </div>
            <div className="stat-box">
              <b>15+</b>
              <span>Cities Covered</span>
            </div>
            <div className="stat-box">
              <b>4.8/5</b>
              <span>Student Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <h2>Everything you need to get hired</h2>
            <p>
              We handle the verification, the paperwork and the follow-ups so you
              can focus on learning.
            </p>
          </div>
          <div className="grid grid-4">
            {features.map((f) => (
              <div className="card" key={f.title}>
                <div className="card-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured jobs */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Featured Internships</h2>
            <p>Fresh openings from our partner companies, updated weekly.</p>
          </div>
          <div className="grid grid-3">
            {featured.map((job) => (
              <JobCard key={job.id} job={job} onApply={setSelectedJob} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link to="/jobs" className="btn btn-outline">
              View All {jobs.length} Internships →
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <h2>How it works</h2>
            <p>Four steps from browsing to your first day on the job.</p>
          </div>
          <div className="grid grid-4">
            {steps.map((s) => (
              <div className="step" key={s.n}>
                <div className="step-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Ready to start your internship?</h2>
            <p>
              Join 1,200+ students who found their first real-world role through
              DG Interns Hub. It takes under a minute to apply.
            </p>
            <Link to="/jobs" className="btn btn-light">
              Explore Internships
            </Link>
          </div>
        </div>
      </section>

      {selectedJob && (
        <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </>
  );
}

export default Home;
