import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="logo" onClick={close}>
          <span className="logo-mark">DG</span>
          <span>Interns Hub</span>
        </Link>

        <button
          className={`nav-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <NavLink to="/" end onClick={close}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/jobs" onClick={close}>
              Jobs
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={close}>
              Contact
            </NavLink>
          </li>
          <li className="nav-cta">
            <Link to="/jobs" className="btn btn-primary btn-block" onClick={close}>
              Apply Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
