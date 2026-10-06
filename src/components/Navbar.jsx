import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const [lastPath, setLastPath] = useState(pathname);
  const close = () => setOpen(false);

  // Close on any navigation, including browser back/forward, which no link click reports.
  // Adjusting during render rather than in an effect avoids a second paint with the menu open.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="logo" onClick={close}>
          <span className="logo-mark" aria-hidden="true">
            DG
          </span>
          <span>Interns Hub</span>
        </Link>

        <button
          className={`nav-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="primary-nav"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul id="primary-nav" className={`nav-links ${open ? "open" : ""}`}>
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
