import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-5">
          <img src="/image/logo/Tickitz-1.svg" alt="Tickitz Logo" />
          <Link to="/" className="navbar-menu d-desktop">
            Home
          </Link>
          <Link to="/" className="navbar-menu d-desktop">
            List Movie
          </Link>
        </div>
        <div className="d-flex align-items-center gap-3">
          <Link to="/register">
            <button type="button" className="btn px-4 btn-auth d-desktop">
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button type="button" className="btn px-4 btn-auth d-desktop">
              Log In
            </button>
          </Link>
        </div>
        <button
          className="navbar-toggler d-mobile"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src="/image/icons/hamburger-menu.svg" alt="Menu" />
        </button>
      </nav>
      {/* Navigation Bar Mobile */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item d-flex justify-content-center mt-2 mb-2 navbar-menu">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item d-flex justify-content-center mt-2 mb-2 navbar-menu">
            <Link className="nav-link" to="/">
              list Movie
            </Link>
          </li>
          <li className="nav-item d-flex justify-content-center mt-2 mb-2 navbar-menu">
            <Link to="/register">
              <button type="button" className="btn btn-primary btn-auth px-4">
                Sign Up
              </button>
            </Link>
          </li>
          <li className="nav-item d-flex justify-content-center mt-2 mb-2 navbar-menu">
            <Link to="/login">
              <button type="button" className="btn btn-primary btn-auth px-4">
                Log In
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
