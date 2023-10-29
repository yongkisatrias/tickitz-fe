import React from "react";

function RowSeat({ position, selectedSeat, setSelectedSeat, bookedSeat }) {
  const getSeatColor = (key) => {
    if (bookedSeat?.find((_item) => _item === `${position}${key}`)) {
      return "#6E7191"; // Storm Grey
    } else if (selectedSeat?.find((_item) => _item === `${position}${key}`)) {
      return "#5F2EEA"; // Han Purple
    } else {
      return "#D6D8E7"; // Quartz
    }
  };

  const checkIfDisabled = (key) => {
    if (bookedSeat?.find((_item) => _item === `${position}${key}`)) {
      return true; // Booked
    } else if (selectedSeat?.find((_item) => _item === `${position}${key}`)) {
      return true; // Choose seat
    } else {
      return false; // Available
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
      }}
    >
      <p className="row-seat">{position}</p>
      {/* left */}
      <div
        style={{
          display: "flex",
          width: "40%",
          justifyContent: "space-between",
        }}
      >
        {[...new Array(7)].map((item, key) => {
          const nextKey = ++key;

          return (
            <div
              style={{
                background: getSeatColor(nextKey),
                borderRadius: "5px",
                width: "25px",
                height: "25px",
                cursor: "pointer",
              }}
              onClick={() => {
                if (!checkIfDisabled(nextKey)) {
                  setSelectedSeat([
                    ...selectedSeat,
                    ...[`${position}${nextKey}`],
                  ]);
                }
              }}
            ></div>
          );
        })}
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
          const keyPage2 = ++key + 7;

          return (
            <div
              style={{
                background: getSeatColor(keyPage2),
                borderRadius: "5px",
                width: "25px",
                height: "25px",
                cursor: "pointer",
              }}
              onClick={() => {
                if (!checkIfDisabled(keyPage2)) {
                  setSelectedSeat([
                    ...selectedSeat,
                    ...[`${position}${keyPage2}`],
                  ]);
                }
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default RowSeat;
