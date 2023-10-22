import React from "react";
import { Link } from "react-router-dom";

function Icontext(props) {
  const { icon, text } = props;

  return (
    <div className="d-flex justify-content-center-mobile gap-3 mt-4 mb-4">
      <img src={icon} alt="social media" />
      <Link to="/">{text}</Link>
    </div>
  );
}

export default Icontext;
