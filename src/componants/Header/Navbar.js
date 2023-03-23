import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse me-auto" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="/home"
                className="nav-link active"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Hooks
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/hooks/usestate" className="dropdown-item">
                    useState
                  </Link>
                </li>
                <li>
                  <Link to="/hooks/useffect" className="dropdown-item">
                    useEffect
                  </Link>
                </li>
                <li>
                  <Link to="/hooks/useref" className="dropdown-item">
                    useRef
                  </Link>
                </li>
                <li>
                  <Link to="/hooks/usememo" className="dropdown-item">
                    useMemo
                  </Link>
                </li>
                <li>
                  <Link to="/hooks/usecontext" className="dropdown-item">
                    useContext
                  </Link>
                </li>
                <li>
                  <Link to="/hooks/usereducer" className="dropdown-item">
                    useReducer
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link ">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashborad" className="nav-link ">
                Dashborad
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
