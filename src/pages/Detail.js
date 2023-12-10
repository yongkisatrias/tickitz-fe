import "../style/Detail.css";
import "../style/Detail.mobile.css";

import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { useSelector, useDispatch } from "react-redux";
import * as movieSlice from "../slices/movie";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Detail() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const {
    movie: { resultDetail, resultCinema },
  } = useSelector((state) => state); // getter
  const dispatch = useDispatch(); // setter
  const detailMovie = resultDetail?.find((item) => item.slug === slug) ?? {};

  // const [detailMovie, setDetailMovie] = React.useState(null);
  // const [listCinemas, setListCinemas] = React.useState([]);
  const listCinemas = resultCinema[slug] ?? [];
  const [dateMovie, setDateMovie] = React.useState(null);
  const [timeMovie, setTimeMovie] = React.useState(null);

  // lifecycle
  const handleGetApi = async () => {
    try {
      // Get Detail Movie
      if (Object.keys(detailMovie).length === 0) {
        const requestDetail = await axios.get(
          `https://tickitz-be.onrender.com/yongki/movie/detail/${slug}`
        );

        if (requestDetail.data.data.length > 0) {
          // Get data from response API and access response array index 0
          // setDetailMovie(requestDetail.data.data[0]);
          dispatch(movieSlice.setDetailData(requestDetail.data.data));
        }
      }

      if (listCinemas.length === 0) {
        // Get Detail Cinema
        const requestCinema = await axios.get(
          `https://tickitz-be.onrender.com/yongki/movie/${slug}/cinemas`
        );

        if (requestCinema.data.data.length > 0) {
          dispatch(
            movieSlice.setCinemaData({
              movieName: slug,
              data: requestCinema.data.data,
            })
          );
          // setListCinemas(requestCinema.data.data);
        }
      }
    } catch (error) {}
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    handleGetApi();
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

      {/* Start Content */}
      {detailMovie !== null ? (
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
                {detailMovie?.genres?.map((item, key) => (
                  <span>
                    {detailMovie.genres.length - 1 === key ? item : `${item}, `}
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
                      {detailMovie?.cast?.map((item, key) => (
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
      ) : null}
      {/* End Content */}

      {/* Start Cinema */}
      {detailMovie !== null ? (
        <section id="cinemas" className="mt-5">
          <div className="container">
            <h3 className="text-center py-3">Showtimes and Tickets</h3>
            <div className="d-flex gap-3 justify-content-center mb-4">
              <div style={{ width: "280px" }}>
                <input
                  type="date"
                  className="form-control"
                  onChange={(e) => setDateMovie(e.target.value)}
                />
              </div>
              <select
                class="form-select form-select-sm"
                onChange={(e) => setTimeMovie(e.target.value)}
                style={{ width: "280px" }}
              >
                <option selected>Select Time</option>
                <option value="10:00">10:00 WIB</option>
                <option value="13:00">13:00 WIB</option>
                <option value="16:00">16:00 WIB</option>
                <option value="19:00">19:00 WIB</option>
              </select>
            </div>
            <div className="row">
              {listCinemas.map((item) => (
                <div className="col col-md-4 col-sm-12">
                  <div className="card-cinemas mb-5">
                    {/* Top Content */}
                    <div className="d-flex gap-3 px-3">
                      <img
                        src={item.logo}
                        alt="cinemas logo"
                        className="mt-3 px-2 py-2"
                      />
                      <div>
                        <h4 className="cinema-tittle">{item.name}</h4>
                        <p className="cinema-address">{item.address}</p>
                      </div>
                    </div>
                    <hr className="mt-2" />
                    {/* Bottom Content */}
                    <div className="d-flex justify-content-between gap-3 px-4 showtime-schedule">
                      {item.movieStart.map((nestedItem) => (
                        <span>{nestedItem} WIB</span>
                      ))}
                    </div>
                    <div className="d-flex justify-content-between px-4 py-3">
                      <span className="price">Price</span>
                      <span className="seat-price">
                        Rp.{item.priceDisplay}/seat
                      </span>
                    </div>
                    <div className="d-grid px-4 py-3">
                      <button
                        className={
                          dateMovie && timeMovie
                            ? "btn btn-primary"
                            : "btn btn-secondary"
                        }
                        onClick={() => {
                          if (dateMovie && timeMovie)
                            navigate(`/choose-seat/${slug}`, {
                              state: {
                                dateMovie,
                                timeMovie,
                                cinemaId: item.id,
                                movieTitle: detailMovie.tittle,
                                priceDisplay: item.priceDisplay,
                                price: item.price,
                                cinemaName: item.name,
                                cinemaLogo: item.logo,
                              },
                            });
                        }}
                        disabled={!dateMovie || !timeMovie}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}
      {/* End Cinema */}

      {/* Start Footer */}
      <Footer />
      {/* End Footer */}

      {/* Scroll To Top Button */}
      <ScrollToTop smooth color="#5f2eea" />
    </>
  );
}

export default Detail;
