import React from "react";

function RowSeatNumber() {
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
        <p></p>
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
                width: "26px",
                height: "26px",
              }}
            >
              <p>{1 + key}</p>
            </div>
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
                width: "26px",
                height: "26px",
              }}
            >
              <p>{1 + key}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RowSeatNumber;
