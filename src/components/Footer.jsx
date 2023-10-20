import IconText from "../components/IconText.jsx";
import React from "react";

function Footer() {
  return (
    <>
      {/* Footer Start */}
      <footer className="container mt-10 mb-5">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="d-flex justify-content-center-mobile">
              <img src="/image/logo/Tickitz 2.svg" alt="Logo Tickitz" />
            </div>
            <p className="tickets-footer-motto text-center-mobile">
              Stop waiting in line. Buy tickets <br />
              conveniently, watch movies quietly.
            </p>
          </div>
          <div className="col-md-2 col-sm-12 explore text-center-mobile">
            <h5>Explore</h5>
            <a href="/" className="mt-4 mb-4">
              Home
            </a>
            <a href="/" className="mt-4 mb-4">
              List Movie
            </a>
          </div>
          <div className="col-md-3 col-sm-12">
            <h5 className="text-center-mobile">Our Sponsor</h5>
            <div className="d-flex justify-content-center-mobile">
              <img
                src="/image/cinemas/ebv.id 2.svg"
                alt="ebv.id"
                style={{ display: "block" }}
                className="mt-4 mb-4"
              />
            </div>
            <div className="d-flex justify-content-center-mobile">
              <img
                src="/image/cinemas/CineOne21 2.svg"
                alt="cineOne21"
                style={{ display: "block" }}
                className="mt-4 mb-4"
              />
            </div>
            <div className="d-flex justify-content-center-mobile">
              <img
                src="/image/cinemas/hiflix 2.svg"
                alt="hiflix"
                style={{ display: "block" }}
                className="mt-4 mb-4"
              />
            </div>
          </div>
          <div className="col-md-3 col-sm-12 social-media">
            <h5 className="text-center-mobile">Follow Us</h5>
            <IconText
              icon="/image/social-media/facebook.png"
              text="Tickitz Cinema id"
            />
            <IconText
              icon="/image/social-media/instagram.png"
              text="tickitz.id"
            />
            <IconText
              icon="/image/social-media/twitter.png"
              text="tickitz.id"
            />
            <IconText
              icon="/image/social-media/youtube.png"
              text="Tickitz Cinema id"
            />
          </div>
        </div>
        <p className="copyright text-center mt-5">
          © 2020 Tickitz. All Rights Reserved.
        </p>
      </footer>
      {/* Footer End */}
    </>
  );
}

export default Footer;
