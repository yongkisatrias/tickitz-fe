import "../style/Home.css";
import "../style/Home.mobile.css";

import MovieComp from "../components/Movie";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { useSelector, useDispatch } from "react-redux";
import * as movieSlice from "../slices/movie";

function Home() {
  // mounted / mounting
  const date = new Date();
  const month = date.toLocaleDateString("default", { month: "long" });
  const {
    movie: { resultNowShowing, resultUpcoming },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  // const [resultNowShowing, setResultNowShowing] = React.useState([]);
  // const [resultUpcoming, setResultUpcoming] = React.useState([]);
  const [selectedMonth, setSelectedMonth] = React.useState(month.toLowerCase());

  // lifecycle
  const handleGetResponse = async () => {
    try {
      if (resultNowShowing.length === 0) {
        // Get data from Now Showing
        const nowShowing = await axios.get(
          "https://tikitz-v2.adaptable.app/yongki/movie/now-showing"
        );

        if (nowShowing.status === 200) {
          dispatch(movieSlice.setResultNowShowing(nowShowing.data.data)); // setter for redux
          // setResultNowShowing(nowShowing.data.data);
        }
      }

      if (resultUpcoming.length === 0) {
        // Get data from Upcoming
        const upcoming = await axios.get(
          "https://tikitz-v2.adaptable.app/yongki/movie/upcoming"
        );

        if (upcoming.status === 200) {
          dispatch(movieSlice.setResultUpcoming(upcoming.data.data)); // setter for redux
          // setResultUpcoming(upcoming.data.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    handleGetResponse();
  }, []);

  return (
    <div className="App">
      {/* Start Header */}
      <header className="container pt-4 pb-4">
        {/* Navigation Bar */}
        <NavBar />
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
        <div className="container pt-5 pb-5">
          {/* Header Tittle */}
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="now-showing-tittle-left">Now Showing</h2>
            <Link className="now-showing-tittle-right" to="/">
              View All
            </Link>
          </div>
          {/* Now Showing Content */}
          <div className="movies-scroll mt-5 mb-5">
            {resultNowShowing.slice(0, 5).map((item) => (
              <MovieComp
                poster={item.poster}
                tittle={item.tittle}
                genres={item.genres}
                desc={item.desc}
                slug={item.slug}
              />
            ))}
          </div>
        </div>
      </section>
      {/* End Now Showing */}

      {/* Start Upcoming Movies */}
      <section id="upcoming-movies" className="mt-5 mb-5">
        <div className="container pt-5 pb-5">
          {/* Header Tittle */}
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="upcoming-movies-tittle-left">Upcoming Movies</h2>
            <Link
              className="upcoming-movies-tittle-right"
              to="/view-all-upcoming-movies"
            >
              View All
            </Link>
          </div>
          {/* Movies Month */}
          <div className="mt-2">
            <div className="month-scroll">
              {[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ].map((item) => (
                <button
                  className={
                    selectedMonth === item.toLowerCase()
                      ? "btn btn-primary-movies-month px-4"
                      : "btn btn-details-movies-month px-4"
                  }
                  onClick={() => {
                    setSelectedMonth(item.toLowerCase());
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          {/* Movies */}
          <div className="movies-scroll mt-4 mb-4">
            {resultUpcoming
              .filter((item) => item.showingMonth === selectedMonth)
              .slice(0, 5)
              .map((item) => (
                <MovieComp
                  poster={item.poster}
                  tittle={item.tittle}
                  genres={item.genres}
                  desc={item.desc}
                  slug={item.slug}
                />
              ))}
          </div>
          {/* Not Found Movie */}
          {resultUpcoming.filter((item) => item.showingMonth === selectedMonth)
            .length === 0 ? (
            <div className="text-center">
              <img
                style={{
                  width: "120px",
                }}
                src="/image/icons/not-found.png"
                alt="not found"
              />
              <h4 className="mt-3">Movie Not Found</h4>
            </div>
          ) : null}
        </div>
      </section>
      {/* End Upcoming Movies */}

      {/* CTA Start */}
      <section id="cta" className="pb-3">
        <div className="container mt-5 mb-5 shadow p-3 bg-body-tertiary rounded">
          <h3 className="text-muted text-center mt-5">
            Be the vanguard of the
          </h3>
          <h2 className="text-primary text-center">Moviegoers</h2>
          <div className="d-flex gap-3 justify-content-center mt-4 mb-4">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Type your email here.."
              style={{ width: "306px" }}
            />
            <button className="btn btn-primary">Join Now</button>
          </div>
          <p className="text-center p-cta mt-4 mb-4">
            By joining you as Link Tickitz member,
            <br />
            we will always send you the latest updates via email .
          </p>
        </div>
      </section>
      {/* CTA End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}

      {/* Scroll To Top Button */}
      <ScrollToTop smooth color="#5f2eea" />
    </div>
  );
}

export default Home;
