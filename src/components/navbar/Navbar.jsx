import React, { useState } from "react";
import "./navbar.css";

const links = [
  ["#about", "About"],
  ["#experience", "Experience"],
  ["#skills", "Skills"],
  ["#projects", "Projects"],
  ["#awards", "Recognition"],
  ["#contacts", "Contact"],
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <a href="#main" className="nav-logo">
        sahil<span>.</span>pawar
      </a>
      <button
        className="nav-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <i className={`fa ${open ? "fa-xmark" : "fa-bars"}`} aria-hidden="true"></i>
      </button>
      <ul className={open ? "nav-links open" : "nav-links"}>
        {links.map(([href, label]) => (
          <li key={href}>
            <a href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
