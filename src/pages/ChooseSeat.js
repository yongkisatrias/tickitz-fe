import "../style/Choose-seat.css";
import "../style/Choose-seat.mobile.css";

import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

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
              <div className="choose-seat">
                {/* Screen */}
                <p className="text-center pt-2">Screen</p>
                <div className="screen"></div>
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
    </>
  );
}

export default ChooseSeat;
