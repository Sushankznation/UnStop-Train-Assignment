import React, { useState } from "react";

import "../App.css";
import ShowCase from "./ShowCase";

function ShowTrain() {
  const [data, setData] = useState({
    name: "",
    seats: 1,
    show: false,
  });

  function newWindow() {
    if (data.seats > 80) {
      alert("all seats are booked try again next time");
    } else {
      setData({ ...data, show: true });
    }
  }

  const totalSeats = Array.from({ length: 10 * 8 }, (_, i) => i + 1);

  let selectedItem = Number(data.seats);

  return (
    <div className="show_seats">
      {data.show === false ? (
        <div className="box">
        <span class="text-center">Registration Form</span>
          <div class="input-container">
            <input
              type="text"
              name="username"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <label>Passenger Name</label>
          </div>
          <div class="input-container">
            <input
              type="number"
              name="seat"
              // value={data.seats}
              onChange={(e) =>
                setData({
                  ...data,
                  seats: Number(e.target.value) + Number(data.seats),
                })
              }
            />
            <label>Total Passenger </label>
          </div>
          <button class="btn" onClick={newWindow}>Submit</button>
        </div>
      ) : (
        <>
          <ShowCase />
          <div className="seats">
            {totalSeats.map((value, index) => {
              return (
                <div
                  className={
                    index <= selectedItem
                      ? "seat , selected"
                      : "seat notSelected"
                  }
                ></div>
              );
            })}
          </div>
          <button
            className="back_btn"
            onClick={() => setData({ ...data, show: false })}
          >
            Back
          </button>
        </>
      )}
    </div>
  );
}
export default ShowTrain;
