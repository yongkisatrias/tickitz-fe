import "../style/detail.css";

import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Detail() {
  const { id } = useParams();
  const [detailMovie, setDetailMovie] = React.useState(null);

  // lifecycle
  React.useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:3000/api/movie.json")
        .then((response) => {
          if (response.status === 200) {
            // search data from api and compare with id
            setDetailMovie(
              response.data.find(
                (item) => item.tittle.toLowerCase().split(" ").join("_") === id
              )
            );
          }
        })
        .catch((error) => console.log(`error: ${error}`));
    }, 2000);
  }, []);

  return (
    <>
      {/* Start Header */}
      <header className="container pt-4 pb-4">
        {/* Navigation Bar */}
        <NavBar />

        {detailMovie === null ? (
          <>
            {/* Loading bar */}
            <div className="text-center mt-10 loading-bar">
              <div class="lds-dual-ring"></div>
              <p>Loading...</p>
            </div>
          </>
        ) : null}
      </header>
      {/* End Header */}

      {detailMovie !== null ? (
        <>
          {/* Start Content */}
          <section id="content_detail" className="container mt-4 mb-4">
            <div className="row gap-5">
              <div className="col-md-4 col-sm-12 border-image-detail">
                <img
                  className="movie-poster-detail"
                  src="/image/movie-poster/spiderman.jpg"
                  alt="movie poster"
                  width={"100%"}
                />
              </div>
              <div className="col-md-8 col-sm-12">
                <h2>Spider-Man: Homecoming</h2>
                <p className="genres">Adventure, Action, Sci-Fi</p>
                <div className="row">
                  <div className="col-md-3 col-sm-12">
                    {/* realease date */}
                    <div>
                      <p className="text-muted text-content">Release date</p>
                      <p>June 28, 2017</p>
                    </div>
                    {/* duration */}
                    <div>
                      <p className="text-muted text-content">Duration</p>
                      <p>2h 13m</p>
                    </div>
                  </div>
                  <div className="col-md-9 col-sm-12">
                    {/* directed by */}
                    <div>
                      <p className="text-muted text-content">Directed by</p>
                      <p>Jon Watss</p>
                    </div>
                    {/* casts */}
                    <div>
                      <p className="text-muted text-content">Casts</p>
                      <p>Tom Holland, Michael Keaton, Robert Downey Jr.</p>
                    </div>
                  </div>
                </div>
                <hr /> {/* hair line */}
                <div>
                  {/* synopsis */}
                  <h5>Synopsis</h5>
                  <p className="synopsis-content">
                    Thrilled by his experience with the Avengers, Peter returns
                    home, where he lives with his Aunt May, under the watchful
                    eye of his new mentor Tony Stark, Peter tries to fall back
                    into his normal daily routine - distracted by thoughts of
                    proving himself to be more than just your friendly
                    neighborhood Spider-Man - but when the Vulture emerges as a
                    new villain, everything that Peter holds most important will
                    be threatened.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* End Content */}
        </>
      ) : null}

      {/* Start Footer */}
      <Footer />
      {/* End Footer */}
    </>
  );
}

export default Detail;
