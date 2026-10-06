import { useMemo, useState } from "react";
import JobCard from "../components/JobCard";
import ApplyModal from "../components/ApplyModal";
import { jobs, categories, locationTypes } from "../data/jobs";

function Jobs() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [locationType, setLocationType] = useState("All");
  const [selectedJob, setSelectedJob] = useState(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return jobs.filter((job) => {
      const matchesSearch =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q) ||
        job.skills.some((s) => s.toLowerCase().includes(q));

      const matchesCategory = category === "All" || job.category === category;
      const matchesType = locationType === "All" || job.type === locationType;

      return matchesSearch && matchesCategory && matchesType;
    });
  }, [search, category, locationType]);

  const reset = () => {
    setSearch("");
    setCategory("All");
    setLocationType("All");
  };

  return (
    <>
      <header className="page-head">
        <div className="container">
          <h1>Internship Openings</h1>
          <p>
            {jobs.length} verified internships across development, design, data
            and marketing. Filter by what fits you.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="filters">
            <div className="search-box">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by role, company or skill..."
                aria-label="Search internships"
              />
            </div>

            <select
              value={locationType}
              onChange={(e) => setLocationType(e.target.value)}
              aria-label="Filter by work type"
            >
              {locationTypes.map((t) => (
                <option key={t} value={t}>
                  {t === "All" ? "All Work Types" : t}
                </option>
              ))}
            </select>

            <button className="btn btn-ghost" onClick={reset}>
              Reset
            </button>
          </div>

          <div className="chips">
            {categories.map((c) => (
              <button
                key={c}
                className={`chip ${category === c ? "active" : ""}`}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <p className="results-count">
            Showing <b>{filtered.length}</b> of {jobs.length} internships
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-3">
              {filtered.map((job) => (
                <JobCard key={job.id} job={job} onApply={setSelectedJob} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <div className="empty-icon">🔍</div>
              <h3>No internships found</h3>
              <p>Try a different keyword or clear the filters.</p>
              <button className="btn btn-outline" onClick={reset}>
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {selectedJob && (
        <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </>
  );
}

export default Jobs;
