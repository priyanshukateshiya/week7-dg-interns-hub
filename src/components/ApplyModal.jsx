import { useEffect, useRef, useState } from "react";

const EMPTY = { name: "", email: "", phone: "", college: "", why: "" };

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

function ApplyModal({ job, onClose }) {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const dialogRef = useRef(null);
  // The backdrop should only close the dialog when the whole click happened on it —
  // otherwise selecting text inside the form and releasing outside discards the entry.
  const pressedBackdrop = useRef(false);

  // Close on Escape, keep Tab inside the dialog, lock background scroll,
  // and hand focus back to whatever opened it.
  useEffect(() => {
    const opener = document.activeElement;

    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const items = [...dialogRef.current.querySelectorAll(FOCUSABLE)];
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector(FOCUSABLE)?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      if (opener instanceof HTMLElement) opener.focus();
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
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      dialogRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    setSubmitted(true);
  };

  // Wires a field to its error message so screen readers announce it.
  const fieldProps = (name) => ({
    name,
    value: form[name],
    onChange: change,
    className: errors[name] ? "invalid" : "",
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `ap-${name}-error` : undefined,
  });

  // A plain helper, not a component: a component declared here would be a new type
  // on every render, remounting the node and losing the role="alert" announcement.
  const errorFor = (name) =>
    errors[name] ? (
      <div className="error-text" id={`ap-${name}-error`} role="alert">
        {errors[name]}
      </div>
    ) : null;

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(e) => {
        pressedBackdrop.current = e.target === e.currentTarget;
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget && pressedBackdrop.current) onClose();
      }}
    >
      <div
        className="modal"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="ap-heading"
      >
        {submitted ? (
          <div className="success-box">
            <div className="tick" aria-hidden="true">
              ✓
            </div>
            <h3 id="ap-heading">Application Submitted</h3>
            <p style={{ color: "var(--text-muted)" }}>
              Thanks {form.name.trim().split(/\s+/)[0]}! Your application for{" "}
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
                <h3 id="ap-heading">Apply for {job.title}</h3>
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
                <input id="ap-name" {...fieldProps("name")} placeholder="Your full name" />
                {errorFor("name")}
              </div>

              <div className="field">
                <label htmlFor="ap-email">Email *</label>
                <input
                  id="ap-email"
                  type="email"
                  {...fieldProps("email")}
                  placeholder="you@example.com"
                />
                {errorFor("email")}
              </div>

              <div className="field">
                <label htmlFor="ap-phone">Phone *</label>
                <input
                  id="ap-phone"
                  {...fieldProps("phone")}
                  placeholder="10-digit mobile number"
                />
                {errorFor("phone")}
              </div>

              <div className="field">
                <label htmlFor="ap-college">College / University *</label>
                <input
                  id="ap-college"
                  {...fieldProps("college")}
                  placeholder="Your institute name"
                />
                {errorFor("college")}
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
