import React from "react";

function Icontext(props) {
  const { icon, text } = props;

  return (
    <div className="d-flex justify-content-center-mobile gap-3 mt-4 mb-4">
      <img src={icon} alt="social media" />
      <a href="/">{text}</a>
    </div>
  );
}

export default Icontext;
