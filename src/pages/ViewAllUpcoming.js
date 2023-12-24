import "../style/ViewAllUpcoming.css";
import "../style/ViewAllUpcoming.mobile.css";

import MovieComp from "../components/Movie.jsx";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import React from "react";
import axios from "axios";
import ScrollToTop from "react-scroll-to-top";

function ViewAllUpcoming() {
  // mounted / mounting
  const date = new Date();
  const month = date.toLocaleDateString("default", { month: "long" });

  const [resultUpcoming, setResultUpcoming] = React.useState([]);
  const [selectedMonth, setSelectedMonth] = React.useState(month.toLowerCase());

  // lifecycle
  const handleGetResponse = async () => {
    try {
      // Get data from Upcoming
      const upcoming = await axios.get(
        "https://pijar-camp-batch15-tickitz.cyclic.app/yongki/movie/upcoming"
      );

      if (upcoming.status === 200) {
        setResultUpcoming(upcoming.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    handleGetResponse();
  }, []);
  return (
    <>
      {/* Start Header */}
      <header className="container pt-4 pb-4">
        {/* Navigation Bar */}
        <NavBar />
      </header>
      {/* End Header */}

      {/* Start Upcoming Movies */}
      <section id="all-upcoming-movies">
        <div className="container pt-5 pb-5">
          {/* Header Tittle */}
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="upcoming-movies-tittle">Upcoming Movies</h2>
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
          <div className="movies-scroll mt-4 mb-4 row row-cols-sm-1 row-cols-md-6">
            {resultUpcoming
              .filter((item) => item.showingMonth === selectedMonth)
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

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}

      {/* Scroll To Top Button */}
      <ScrollToTop smooth color="#5f2eea" />
    </>
  );
}

export default ViewAllUpcoming;
