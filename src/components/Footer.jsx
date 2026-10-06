import { Link } from "react-router-dom";

const YEAR = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo">
              <span className="logo-mark">DG</span>
              <span>Interns Hub</span>
            </div>
            <p>
              Connecting students with internships that actually teach something.
              Browse verified openings, apply in one click and start building
              your career.
            </p>
            <div className="socials">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                in
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                X
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                ig
              </a>
            </div>
          </div>

          <div>
            <h4>Pages</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/jobs">Jobs</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Categories</h4>
            <ul>
              <li><Link to="/jobs">Web Development</Link></li>
              <li><Link to="/jobs">Design</Link></li>
              <li><Link to="/jobs">Data Science</Link></li>
              <li><Link to="/jobs">Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@dginternshub.com">hello@dginternshub.com</a></li>
              <li><a href="tel:+919000000000">+91 90000 00000</a></li>
              <li><span>Rajkot, Gujarat, India</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © {YEAR} DG Interns Hub. Built with React JS.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
