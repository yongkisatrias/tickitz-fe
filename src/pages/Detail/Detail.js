import "./detail.css";
import "./detail.mobile.css";

import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer";

function Detail() {
  const { slug } = useParams();
  const [detailMovie, setDetailMovie] = React.useState(null);

  // lifecycle
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setTimeout(() => {
      axios
        .get("http://192.168.1.23:3000/api/movie.json")
        .then((response) => {
          if (response.status === 200) {
            // search data from api and compare with id
            setDetailMovie(
              response.data.find(
                (item) =>
                  item.tittle.toLowerCase().split(" ").join("-") === slug
              )
            );
          }
        })
        .catch((error) => console.log(`error: ${error}`));
    }, 1000);
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
            <div className="row gap-5 justify-content-center-mobile">
              <div className="col-md-4 col-sm-12 border-image-detail">
                <img
                  className="movie-poster-detail"
                  src={detailMovie.poster}
                  alt="movie poster"
                  width={"100%"}
                />
              </div>
              <div className="col-md-8 col-sm-12">
                <h2>{detailMovie.tittle}</h2>
                <p className="genres">
                  {detailMovie.genres.map((item, key) => (
                    <span>
                      {detailMovie.genres.length - 1 === key
                        ? item
                        : `${item}, `}
                    </span>
                  ))}
                </p>
                <div className="row">
                  <div className="col-md-3 col-sm-12">
                    {/* realease date */}
                    <div>
                      <p className="text-muted text-content">Release date</p>
                      <p>{detailMovie.release}</p>
                    </div>
                    {/* duration */}
                    <div>
                      <p className="text-muted text-content">Duration</p>
                      <p>{detailMovie.duration}</p>
                    </div>
                  </div>
                  <div className="col-md-9 col-sm-12">
                    {/* directed by */}
                    <div>
                      <p className="text-muted text-content">Directed by</p>
                      <p>{detailMovie.director}</p>
                    </div>
                    {/* casts */}
                    <div>
                      <p className="text-muted text-content">Casts</p>
                      <p>
                        {detailMovie.cast.map((item, key) => (
                          <span>
                            {detailMovie.cast.length - 1 === key
                              ? item
                              : `${item}, `}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
                <hr /> {/* hair line */}
                <div>
                  {/* synopsis */}
                  <h5>Synopsis</h5>
                  <p className="synopsis-content">{detailMovie.desc}</p>
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

      {/* Scroll To Top Button */}
      <ScrollToTop smooth color="#5f2eea" />
    </>
  );
}

export default Detail;
