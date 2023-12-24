import "../style/Choose-seat.css";
import "../style/Choose-seat.mobile.css";

import React from "react";
import axios from "axios";
import moment from "moment/moment";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import ScrollToTop from "react-scroll-to-top";
import { useDispatch, useSelector } from "react-redux";
import * as userSlice from "../slices/user";

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
  const {
    user: { profile, token },
  } = useSelector((state) => state);

  const handleAvailableSeat = async () => {
    try {
      const formatDate = moment(dateMovie).format("dddd, DD MMMM YYYY");
      const requestSeat = await axios.post(
        `https://pijar-camp-batch15-tickitz.cyclic.app/yongki/movie/${slug}/seat`,
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
        `https://pijar-camp-batch15-tickitz.cyclic.app/yongki/ticket/seat`,
        {
          movieSlug: slug,
          cinemaId: cinemaId, // 1, 3, 3
          seat: selectedSeat,
          startMovie: completeDate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (requestBooking.data.data.paymentId) {
        const requestPayment = await axios.patch(
          `https://pijar-camp-batch15-tickitz.cyclic.app/yongki/ticket/purchase/${requestBooking.data.data.paymentId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
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
    // Handle only if already login
    if (!token && profile) {
      if (
        window.swal(
          "Access Denied",
          "You must login first before booking movies in cinema!",
          "warning"
        )
      ) {
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
      <div id="choose-seat" className="pb-5">
        <div className="container">
          <div className="row">
            <div className="col col-md-8 col-sm-12">
              <section id="content">
                {/* Movie Selected */}
                <h2 className="movie-selected mb-4 mt-4">Movie Selected</h2>
                {/* Movie Title */}
                <div className="movie-tittle-card px-4 py-3">
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
            <div className="col col-md-4 col-sm-12">
              <h2 className="order-info mb-4 mt-4">Order Info</h2>

              <div className="order-info-card">
                <div>
                  <div className="d-flex justify-content-center pt-4 pb-2">
                    <img src={cinemaLogo} width="110px" alt="logo" />
                  </div>
                  <h5 className="text-center pb-2">{cinemaName}</h5>

                  <div className="d-flex justify-content-between px-3">
                    <p className="order-info-card-left">Movie selected</p>
                    <p className="order-info-card-right">{movieTitle}</p>
                  </div>

                  <div className="d-flex justify-content-between px-3">
                    <p className="order-info-card-left">Time & Date</p>
                    <p className="order-info-card-right">{selectedDate}</p>
                  </div>

                  <div className="d-flex justify-content-between px-3">
                    <p className="order-info-card-left">One ticket price</p>
                    <p className="order-info-card-right">Rp {priceDisplay}</p>
                  </div>

                  <div className="d-flex justify-content-between px-3">
                    <p className="order-info-card-left">Seat choosed</p>
                    <p className="order-info-card-right">
                      {selectedSeat.map((item) => `${item.replace("_", "")}, `)}
                    </p>
                  </div>
                </div>

                <hr />

                <div className="d-flex justify-content-between px-3">
                  <p className="total-payment">Total Payment</p>
                  <p className="total-price">
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
