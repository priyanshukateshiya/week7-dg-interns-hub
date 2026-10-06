function JobCard({ job, onApply }) {
  const badgeClass = `badge badge-${job.type.toLowerCase()}`;

  return (
    <article className="card job-card">
      <div className="job-top">
        <div className="job-logo">{job.logo}</div>
        <div>
          <h3 className="job-title">{job.title}</h3>
          <p className="job-company">{job.company}</p>
        </div>
      </div>

      <div className="job-meta">
        <span>
          <span aria-hidden="true">📍</span> {job.location}
        </span>
        <span>
          <span aria-hidden="true">⏳</span> {job.duration}
        </span>
        <span className={badgeClass}>{job.type}</span>
      </div>

      <p className="job-desc">{job.description}</p>

      <div className="tags">
        {job.skills.map((skill) => (
          <span className="tag" key={skill}>
            {skill}
          </span>
        ))}
      </div>

      <div className="job-footer">
        <div className="stipend">
          {job.stipend}
          <small>
            {job.openings} openings · {job.posted}
          </small>
        </div>
        <button className="btn btn-primary" onClick={() => onApply(job)}>
          Apply Now
        </button>
      </div>
    </article>
  );
}

export default JobCard;
