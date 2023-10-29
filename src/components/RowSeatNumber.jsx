import React from "react";

function RowSeatNumber() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
      }}
    >
      <p></p>
      {/* left */}
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
              width: "25px",
              height: "25px",
            }}
          >
            <p>{1 + key}</p>
          </div>
        ))}
      </div>
      {/* right */}
      <div
        style={{
          display: "flex",
          width: "40%",
          justifyContent: "space-between",
        }}
      >
        {[...new Array(7)].map((item, key) => {
          const nextKey = key + 8;

          return (
            <div
              style={{
                width: "25px",
                height: "25px",
              }}
            >
              <p>{nextKey}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RowSeatNumber;
