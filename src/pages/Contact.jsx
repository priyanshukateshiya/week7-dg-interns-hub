import { useState } from "react";

const EMPTY = { name: "", email: "", subject: "General Enquiry", message: "" };

const faqs = [
  {
    q: "Are these internships paid?",
    a: "Yes. Every internship listed on DG Interns Hub carries a stipend, shown on each card.",
  },
  {
    q: "Can final-year students apply?",
    a: "Absolutely. Most of our partners prefer 2nd year and above, including final-year students.",
  },
  {
    q: "Do I get a certificate?",
    a: "Yes — a verifiable completion certificate, and a letter of recommendation on strong performance.",
  },
  {
    q: "How long does shortlisting take?",
    a: "Our team reviews applications within 3–5 working days and emails you either way.",
  },
];

function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const change = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((err) => ({ ...err, [name]: "" }));
    setSent(false);
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 10)
      e.message = "Message should be at least 10 characters";
    return e;
  };

  const submit = (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setSent(true);
      setForm(EMPTY);
    }
  };

  return (
    <>
      <header className="page-head">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>
            Questions about an internship, or want to hire interns for your
            company? Send us a message and we will get back within 24 hours.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container contact-grid">
          <div className="form-card">
            <h2 style={{ fontSize: "1.4rem" }}>Send a message</h2>
            <p style={{ color: "var(--text-muted)", fontSize: ".93rem" }}>
              Fill the form below — all fields marked * are required.
            </p>

            {sent && (
              <div className="alert">
                ✓ Thanks for reaching out! Your message has been sent. We will
                reply to your email shortly.
              </div>
            )}

            <form onSubmit={submit} noValidate>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="c-name">Full Name *</label>
                  <input
                    id="c-name"
                    name="name"
                    value={form.name}
                    onChange={change}
                    className={errors.name ? "invalid" : ""}
                    placeholder="Your name"
                  />
                  {errors.name && <div className="error-text">{errors.name}</div>}
                </div>

                <div className="field">
                  <label htmlFor="c-email">Email *</label>
                  <input
                    id="c-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={change}
                    className={errors.email ? "invalid" : ""}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <div className="error-text">{errors.email}</div>
                  )}
                </div>
              </div>

              <div className="field">
                <label htmlFor="c-subject">Subject</label>
                <select
                  id="c-subject"
                  name="subject"
                  value={form.subject}
                  onChange={change}
                  style={{ width: "100%" }}
                >
                  <option>General Enquiry</option>
                  <option>Internship Application Help</option>
                  <option>Hire Interns</option>
                  <option>Partnership</option>
                  <option>Report an Issue</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="c-message">Message *</label>
                <textarea
                  id="c-message"
                  name="message"
                  value={form.message}
                  onChange={change}
                  className={errors.message ? "invalid" : ""}
                  placeholder="Tell us how we can help..."
                />
                {errors.message && (
                  <div className="error-text">{errors.message}</div>
                )}
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Send Message
              </button>
            </form>
          </div>

          <aside>
            <div className="info-card">
              <h3 style={{ marginBottom: "1.2rem" }}>Contact details</h3>

              <div className="info-item">
                <div className="ico">📧</div>
                <div>
                  <b>Email</b>
                  <span>hello@dginternshub.com</span>
                </div>
              </div>

              <div className="info-item">
                <div className="ico">📞</div>
                <div>
                  <b>Phone</b>
                  <span>+91 90000 00000</span>
                </div>
              </div>

              <div className="info-item">
                <div className="ico">📍</div>
                <div>
                  <b>Office</b>
                  <span>Rajkot, Gujarat, India — 360001</span>
                </div>
              </div>

              <div className="info-item">
                <div className="ico">🕒</div>
                <div>
                  <b>Working Hours</b>
                  <span>Mon – Sat, 10:00 AM – 7:00 PM IST</span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h3 style={{ marginBottom: ".5rem" }}>FAQs</h3>
              {faqs.map((f) => (
                <div className="faq-item" key={f.q}>
                  <b>{f.q}</b>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export default Contact;
