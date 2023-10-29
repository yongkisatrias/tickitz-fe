import "../style/Choose-seat.css";
import "../style/Choose-seat.mobile.css";

import React from "react";
import ScrollToTop from "react-scroll-to-top";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RowSeat from "../components/RowSeat";
import RowSeatNumber from "../components/RowSeatNumber";

function ChooseSeat() {
  return (
    <>
      {/* Start Header */}
      <header className="container pt-4 pb-4">
        <NavBar />
      </header>
      {/* End Header */}

      {/* Content */}
      <section id="choose-seat">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              {/* Movie Selected */}
              <h2 className="mt-5 mb-4 movie-selected">Movie Selected</h2>
              <div className="movie-tittle-card py-3 px-4">
                <h2>Bangsatnya Cinta Pertama</h2>
              </div>
              {/* Choose Your Seat */}
              <h2 className="mt-4 mb-4 choose-your-seat">Choose your seat</h2>
              <div className="choose-seat mb-5">
                {/* Screen */}
                <p className="text-center pt-2" style={{ marginLeft: "10%" }}>
                  Screen
                </p>
                <div className="screen"></div>
                {/* Row A */}
                <RowSeat position="A" />
                {/* Row B */}
                <RowSeat position="B" />
                {/* Row C */}
                <RowSeat position="C" />
                {/* Row D */}
                <RowSeat position="D" />
                {/* Row E */}
                <RowSeat position="E" />
                {/* Row F */}
                <RowSeat position="F" />
                {/* Row G */}
                <RowSeat position="G" />
                {/* Row Seat Number */}
                <RowSeatNumber />
              </div>
            </div>
            <div className="col-md-4 col-sm-12"></div>
          </div>
        </div>
      </section>
      {/* End Content */}

      {/* Start Footer */}
      <Footer />
      {/* End Footer */}

      {/* Scroll To Top Button */}
      <ScrollToTop smooth color="#5f2eea" />
    </>
  );
}

export default ChooseSeat;
