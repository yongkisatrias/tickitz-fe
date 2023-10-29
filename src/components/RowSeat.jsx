import React from "react";

function RowSeat({ position }) {
  return (
    <>
      {/* Row Seat */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <p>{position}</p>
        {/* Left */}
        <div
          style={{
            display: "flex",
            width: "40%",
            justifyContent: "space-between",
          }}
        >
          {[...new Array(7)].map((item, key) => (
            <div
              style={{
                background: "#D6D8E7",
                borderRadius: "4px",
                width: "26px",
                height: "26px",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
        {/* Right */}
        <div
          style={{
            display: "flex",
            width: "40%",
            justifyContent: "space-between",
          }}
        >
          {[...new Array(7)].map((item, key) => (
            <div
              style={{
                background: "#D6D8E7",
                borderRadius: "4px",
                width: "26px",
                height: "26px",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default RowSeat;
