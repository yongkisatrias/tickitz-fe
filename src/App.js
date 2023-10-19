import "./style/App.css";
import "./style/app.mobile.css";

import MovieComp from "./components/Movie.jsx";
import IconText from "./components/IconText.jsx";
import React from "react";

function App() {
  return (
    <div className="App">
      {/* Start Header */}
      <header className="container pt-4 pb-4">
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
              <button
                type="button"
                className="btn btn-primary btn-sign-up px-4"
              >
                Sign Up
              </button>
            </li>
          </ul>
        </div>
        {/* Hero content */}
        <section>
          <div className="row align-items-center mt-10 mb-10 hero-content">
            <div className="col-md-6 col-sm-12 text-center">
              <span className="text-muted">Nearest Cinema, Newest Movie, </span>
              <h1 className="text-primary">Find out now!</h1>
            </div>
            <div className="col-md-6 col-sm-12 text-center">
              <img
                src="/image/hero-image/hero-image.png"
                alt="Movie Banner"
                className="hero-image"
              />
            </div>
          </div>
        </section>
      </header>
      {/* End Header */}

      {/* Start Now Showing */}
      <section id="now-showing">
        <div className="container pt-7 pb-7">
          {/* Header Tittle */}
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="now-showing-tittle-left">Now Showing</h2>
            <a className="now-showing-tittle-right" href="/">
              View All
            </a>
          </div>
          {/* Now Showing Content */}
          <div className="movies-scroll mt-5 mb-5">
            <MovieComp />
            <MovieComp />
            <MovieComp />
            <MovieComp />
            <MovieComp />
          </div>
        </div>
      </section>
      {/* End Now Showing */}

      {/* Start Upcoming Movies */}
      <section id="upcoming-movies" className="mt-7 mb-7">
        <div className="container pt-5 pb-5">
          {/* Header Tittle */}
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="upcoming-movies-tittle-left">Upcoming Movies</h2>
            <a className="upcoming-movies-tittle-right" href="/">
              View All
            </a>
          </div>
          {/* Movies Month */}
          <div className="text-center month-scroll mt-4">
            <button type="button" className="btn btn-details px-4">
              January
            </button>
            <button type="button" className="btn btn-details px-4">
              February
            </button>
            <button type="button" className="btn btn-details px-4">
              March
            </button>
            <button type="button" className="btn btn-details px-4">
              April
            </button>
            <button type="button" className="btn btn-details px-4">
              May
            </button>
            <button type="button" className="btn btn-details px-4">
              June
            </button>
            <button type="button" className="btn btn-details px-4">
              July
            </button>
            <button type="button" className="btn btn-details px-4">
              August
            </button>
            <button type="button" className="btn btn-details px-4">
              September
            </button>
            <button type="button" className="btn btn-details px-4">
              October
            </button>
            <button type="button" className="btn btn-details px-4">
              November
            </button>
            <button type="button" className="btn btn-details px-4">
              December
            </button>
          </div>
          {/* Movies */}
          <div className="movies-scroll mt-5 mb-5">
            <MovieComp />
            <MovieComp />
            <MovieComp />
            <MovieComp />
            <MovieComp />
          </div>
        </div>
      </section>
      {/* End Upcoming Movies */}

      {/* CTA Start */}
      <section id="cta" className="mt-5 mb-10">
        <div className="container mt-5 mb-5">
          <h3 className="text-muted text-center mt-5">
            Be the vanguard of the
          </h3>
          <h2 className="text-primary text-center">Moviegoers</h2>
          <div className="d-flex gap-3 justify-content-center mt-4 mb-4">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              style={{ width: "306px" }}
            />
            <button className="btn btn-primary">Join Now</button>
          </div>
          <p className="text-center p-cta mt-4 mb-4">
            By joining you as a Tickitz member,
            <br />
            we will always send you the latest updates via email .
          </p>
        </div>
      </section>
      {/* CTA End */}

      {/* Footer Start */}
      <footer className="container mt-10 mb-5">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="d-flex justify-content-center-mobile">
              <img src="/image/logo/Tickitz 2.svg" alt="Logo Tickitz" />
            </div>
            <p className="tickets-footer-motto text-center-mobile">
              Stop waiting in line. Buy tickets <br />
              conveniently, watch movies quietly.
            </p>
          </div>
          <div className="col-md-2 col-sm-12 explore text-center-mobile">
            <h5>Explore</h5>
            <a href="/" className="mt-4 mb-4">
              Home
            </a>
            <a href="/" className="mt-4 mb-4">
              List Movie
            </a>
          </div>
          <div className="col-md-3 col-sm-12">
            <h5 className="text-center-mobile">Our Sponsor</h5>
            <div className="d-flex justify-content-center-mobile">
              <img
                src="/image/cinemas/ebv.id 2.svg"
                alt="ebv.id"
                style={{ display: "block" }}
                className="mt-4 mb-4"
              />
            </div>
            <div className="d-flex justify-content-center-mobile">
              <img
                src="/image/cinemas/CineOne21 2.svg"
                alt="cineOne21"
                style={{ display: "block" }}
                className="mt-4 mb-4"
              />
            </div>
            <div className="d-flex justify-content-center-mobile">
              <img
                src="/image/cinemas/hiflix 2.svg"
                alt="hiflix"
                style={{ display: "block" }}
                className="mt-4 mb-4"
              />
            </div>
          </div>
          <div className="col-md-3 col-sm-12 social-media">
            <h5 className="text-center-mobile">Follow Us</h5>
            <IconText />
            <IconText />
            <IconText />
            <IconText />
          </div>
        </div>
        <p className="copyright text-center mt-5">
          © 2020 Tickitz. All Rights Reserved.
        </p>
      </footer>
      {/* Footer End */}
    </div>
  );
}

export default App;
