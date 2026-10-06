import { useEffect, useState } from "react";

const EMPTY = { name: "", email: "", phone: "", college: "", why: "" };

function ApplyModal({ job, onClose }) {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Close on Escape and lock background scroll while open.
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const change = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((err) => ({ ...err, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.phone.trim()) e.phone = "Phone is required";
    else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, "")))
      e.phone = "Enter a 10-digit number";
    if (!form.college.trim()) e.college = "College name is required";
    return e;
  };

  const submit = (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length === 0) setSubmitted(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={`Apply for ${job.title}`}
        onClick={(e) => e.stopPropagation()}
      >
        {submitted ? (
          <div className="success-box">
            <div className="tick">✓</div>
            <h3>Application Submitted</h3>
            <p style={{ color: "var(--text-muted)" }}>
              Thanks {form.name.split(" ")[0]}! Your application for{" "}
              <b>{job.title}</b> at {job.company} has been received. The team
              will reach out on {form.email} within 3–5 working days.
            </p>
            <button className="btn btn-primary btn-block" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="modal-head">
              <div>
                <h3>Apply for {job.title}</h3>
                <p>
                  {job.company} · {job.location} · {job.stipend}
                </p>
              </div>
              <button className="modal-close" onClick={onClose} aria-label="Close">
                ×
              </button>
            </div>

            <form onSubmit={submit} noValidate>
              <div className="field">
                <label htmlFor="ap-name">Full Name *</label>
                <input
                  id="ap-name"
                  name="name"
                  value={form.name}
                  onChange={change}
                  className={errors.name ? "invalid" : ""}
                  placeholder="Your full name"
                />
                {errors.name && <div className="error-text">{errors.name}</div>}
              </div>

              <div className="field">
                <label htmlFor="ap-email">Email *</label>
                <input
                  id="ap-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={change}
                  className={errors.email ? "invalid" : ""}
                  placeholder="you@example.com"
                />
                {errors.email && <div className="error-text">{errors.email}</div>}
              </div>

              <div className="field">
                <label htmlFor="ap-phone">Phone *</label>
                <input
                  id="ap-phone"
                  name="phone"
                  value={form.phone}
                  onChange={change}
                  className={errors.phone ? "invalid" : ""}
                  placeholder="10-digit mobile number"
                />
                {errors.phone && <div className="error-text">{errors.phone}</div>}
              </div>

              <div className="field">
                <label htmlFor="ap-college">College / University *</label>
                <input
                  id="ap-college"
                  name="college"
                  value={form.college}
                  onChange={change}
                  className={errors.college ? "invalid" : ""}
                  placeholder="Your institute name"
                />
                {errors.college && (
                  <div className="error-text">{errors.college}</div>
                )}
              </div>

              <div className="field">
                <label htmlFor="ap-why">Why are you a good fit?</label>
                <textarea
                  id="ap-why"
                  name="why"
                  value={form.why}
                  onChange={change}
                  placeholder="Tell us briefly about your skills and projects (optional)"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Submit Application
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default ApplyModal;
