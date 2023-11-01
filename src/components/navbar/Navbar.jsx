import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/s__1_-removebg-preview (1).png";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setnav] = useState(false);

  const [shownav, setNav] = useState(false);

  const handleShownav = () => {
    setNav(!shownav);
  };

  const changebackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };

  window.addEventListener("scroll", changebackground);
  return (
    // <nav className={nav ? "nav active" : "nav"}>
    //   <div className="logo">
    //     <img src={logo} alt="" />
    //   </div>

    //   <div className="mobile-nav">
    //     {shownav ? (
    //       <i class="fa fa-bars" aria-hidden="true"></i>
    //     ) : (
    //       <i class="fa fa-window-close" aria-hidden="true"></i>
    //     )}
    //   </div>
    //   <div className="elements">
    //     <ul>
    //       <li>
    //         <Link to="main" smooth={true} duration={500} offset={-80}>
    //           Home
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="about" smooth={true} duration={500} offset={-80}>
    //           About
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="projects" smooth={true} duration={500} offset={-80}>
    //           Projects
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="contacts" smooth={true} duration={500} offset={-80}>
    //           Contact
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    <nav className={nav ? "nav active" : "nav"}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="menu-icon" onClick={handleShownav}>
        {shownav ? (
          <i class="fa fa-window-close" aria-hidden="true"></i>
        ) : (
          <i class="fa fa-bars" aria-hidden="true"></i>
        )}
      </div>
      <div className={`nav-elements ${shownav && "active"}`}>
        <ul>
          <li>
            <Link
              to="main"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={handleShownav}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={handleShownav}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={handleShownav}
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="contacts"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={handleShownav}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    //
  );
}

export default Navbar;
