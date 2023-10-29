import "../style/Choose-seat.css";
import "../style/Choose-seat.mobile.css";

import React from "react";
import axios from "axios";
import moment from "moment/moment";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RowSeat from "../components/RowSeat";
import RowSeatNumber from "../components/RowSeatNumber";

function ChooseSeat() {
  const {
    state: {
      dateMovie,
      timeMovie,
      movieTitle,
      priceDisplay,
      price,
      cinemaName,
      cinemaLogo,
      cinemaId,
    },
  } = useLocation();
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedSeat, setSelectedSeat] = React.useState([]);
  const [bookedSeat, setBookedSeat] = React.useState([]);
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleAvailableSeat = async () => {
    try {
      const formatDate = moment(dateMovie).format("dddd, DD MMMM YYYY");
      const requestSeat = await axios.post(
        `https://tickitz-be.onrender.com/yongki/movie/${slug}/seat`,
        {
          startMovie: `${formatDate} at ${timeMovie}`,
          cinemaId: cinemaId,
        }
      );

      const getBookedList = requestSeat?.data?.data?.booked ?? [];
      setSelectedDate(
        `${moment(dateMovie).format("ddd, DD MMM YYYY")} at ${timeMovie}`
      );
      setBookedSeat(getBookedList);
    } catch (error) {}
  };

  const handleCheckout = async () => {
    try {
      setIsLoading(true);
      // HIT API BOOKING SEAT
      const formatDate = moment(dateMovie).format("dddd, DD MMMM YYYY");
      const completeDate = `${formatDate} at ${timeMovie}`;
      const requestBooking = await axios.post(
        `https://tickitz-be.onrender.com/yongki/ticket/seat`,
        {
          movieSlug: slug,
          cinemaId: cinemaId, // 1, 3, 3
          seat: selectedSeat,
          startMovie: completeDate,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (requestBooking.data.data.paymentId) {
        const requestPayment = await axios.patch(
          `https://tickitz-be.onrender.com/yongki/ticket/purchase/${requestBooking.data.data.paymentId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (requestPayment.data.data.redirect_url) {
          window.location.href = requestPayment.data.data.redirect_url;
        }
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    // handle hanya yang sudah login aja
    if (!localStorage.getItem("token") && !localStorage.getItem("profile")) {
      if (window.confirm("Silahkan login terlebih dahulu")) {
        navigate("/");
      }
    }

    handleAvailableSeat();
  }, []);

  return (
    <div>
      {/* Start Header */}
      <header className="container pt-4 pb-4">
        {/* Navigation Bar */}
        <NavBar />
      </header>
      {/* End Header */}

      {/* Content */}
      <div id="choose-seat" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col col-md-8 col-sm-12">
              <section id="content">
                {/* Movie Selected */}
                <h2 className="movie-selected mb-4">Movie Selected</h2>
                {/* Movie Title */}
                <div className="movie-tittle-card px-5 py-3">
                  <h2>{movieTitle}</h2>
                </div>
                {/* Choose Your Seat */}
                <h2 className="choose-your-seat mt-4 mb-4">Choose Your Seat</h2>
                <div className="choose-seat">
                  {/* screen */}
                  <p className="text-center">Screen</p>
                  <div className="screen" />

                  {/* row seat a */}
                  <RowSeat
                    position="A"
                    selectedSeat={selectedSeat}
                    setSelectedSeat={(e) => setSelectedSeat(e)}
                    bookedSeat={bookedSeat}
                  />

                  {/* row seat b */}
                  <RowSeat
                    position="B"
                    selectedSeat={selectedSeat}
                    setSelectedSeat={(e) => setSelectedSeat(e)}
                    bookedSeat={bookedSeat}
                  />

                  {/* row seat c */}
                  <RowSeat
                    position="C"
                    selectedSeat={selectedSeat}
                    setSelectedSeat={(e) => setSelectedSeat(e)}
                    bookedSeat={bookedSeat}
                  />

                  {/* row seat d */}
                  <RowSeat
                    position="D"
                    selectedSeat={selectedSeat}
                    setSelectedSeat={(e) => setSelectedSeat(e)}
                    bookedSeat={bookedSeat}
                  />

                  {/* row seat e */}
                  <RowSeat
                    position="E"
                    selectedSeat={selectedSeat}
                    setSelectedSeat={(e) => setSelectedSeat(e)}
                    bookedSeat={bookedSeat}
                  />

                  {/* row seat f */}
                  <RowSeat
                    position="F"
                    selectedSeat={selectedSeat}
                    setSelectedSeat={(e) => setSelectedSeat(e)}
                    bookedSeat={bookedSeat}
                  />

                  {/* row seat g */}
                  <RowSeat
                    position="G"
                    selectedSeat={selectedSeat}
                    setSelectedSeat={(e) => setSelectedSeat(e)}
                    bookedSeat={bookedSeat}
                  />

                  {/* row seat number */}
                  <RowSeatNumber />
                </div>
              </section>
            </div>
            <div className="col col-md-4">
              <h2
                className="mb-3"
                style={{ fontSize: "24px", fontWeight: "bolder" }}
              >
                Order Info
              </h2>

              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                }}
              >
                <div style={{ padding: "20px 20px 0px 20px" }}>
                  <div className="d-flex justify-content-center w-100 mb-2">
                    <img src={cinemaLogo} width="100px" alt="logo" />
                  </div>
                  <h5 className="text-center mb-5">{cinemaName}</h5>

                  <div className="d-flex justify-content-between">
                    <p>Movie selected</p>
                    <p
                      className="single-text"
                      style={{ fontWeight: "bold", maxWidth: "250px" }}
                    >
                      {movieTitle}
                    </p>
                  </div>

                  <div className="d-flex justify-content-between">
                    <p>Time & Date</p>
                    <p
                      className="single-text"
                      style={{ fontWeight: "bold", maxWidth: "250px" }}
                    >
                      {selectedDate}
                    </p>
                  </div>

                  <div className="d-flex justify-content-between">
                    <p>One ticket price</p>
                    <p
                      className="single-text"
                      style={{ fontWeight: "bold", maxWidth: "250px" }}
                    >
                      Rp {priceDisplay}
                    </p>
                  </div>

                  <div className="d-flex justify-content-between">
                    <p>Seat choosed</p>
                    <p
                      className="single-text"
                      style={{ fontWeight: "bold", maxWidth: "250px" }}
                    >
                      {selectedSeat.map((item) => `${item.replace("_", "")}, `)}
                    </p>
                  </div>
                </div>

                <hr />

                <div
                  className="d-flex justify-content-between"
                  style={{ padding: "0px 20px 0px 20px" }}
                >
                  <p style={{ fontWeight: "bold" }}>Total Payment</p>
                  <p
                    className="single-text text-primary"
                    style={{ fontWeight: "bold" }}
                  >
                    Rp {price * selectedSeat.length}
                  </p>
                </div>
              </div>

              {/* Button checkout */}
              <div className="d-flex justify-content-between mt-3">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  Change your movie
                </button>
                <button
                  className={
                    isLoading || selectedSeat.length === 0
                      ? "btn btn-secondary px-4"
                      : "btn btn-primary px-4"
                  }
                  onClick={handleCheckout}
                  disabled={isLoading || selectedSeat.length === 0}
                >
                  {isLoading ? "Loading..." : "Checkout now"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Scroll To Top Button */}
      <ScrollToTop smooth color="#5f2eea" />
    </div>
  );
}

export default ChooseSeat;
