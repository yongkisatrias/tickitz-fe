import "../style/NowShowing.css";
import "../style/NowShowing.mobile.css";

// Components
import MovieComp from "../components/Movie.jsx";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// Dependencies
import React from "react";
import axios from "axios";
import ScrollToTop from "react-scroll-to-top";
import * as movieSlice from "../slices/movie";
import { useSelector, useDispatch } from "react-redux";

function NowShowing() {
  // mounted / mounting
  const {
    movie: { resultNowShowing, setResultNowShowing },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  // const [resultNowShowing, setResultNowShowing] = React.useState([]);
  // const [resultUpcoming, setResultUpcoming] = React.useState([]);

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

      {/* Movies */}
      {/* Start Now Showing */}
      <section id="now-showing">
        <div className="container pt-5 pb-5">
          {/* Header Tittle */}
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="now-showing-tittle-left">Now Showing</h2>
          </div>
          {/* Now Showing Content */}
          <div className="movies-scroll mt-5 mb-5">
            {resultNowShowing.map((item) => (
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

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}

      {/* Scroll To Top Button */}
      <ScrollToTop smooth color="#5f2eea" />
    </>
  );
}

export default NowShowing;
