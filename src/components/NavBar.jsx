import React from "react";

function NavBar() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-5">
          <img src="/image/logo/Tickitz-1.svg" alt="Tickitz Logo" />
          <a href="/" className="navbar-menu d-desktop">
            Home
          </a>
          <a href="/" className="navbar-menu d-desktop">
            List Movie
          </a>
        </div>
        <button
          type="button"
          className="btn btn-primary px-4 btn-sign-up d-desktop"
        >
          Sign Up
        </button>
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
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item d-flex justify-content-center mt-2 mb-2 navbar-menu">
            <a className="nav-link" href="/">
              list Movie
            </a>
          </li>
          <li className="nav-item d-flex justify-content-center mt-2 mb-2 navbar-menu">
            <button type="button" className="btn btn-primary btn-sign-up px-4">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
