/* eslint-disable react/prop-types */
import { useState } from "react";

export default function ListSeat({ data }) {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatNumber)) {
        // Nếu ghế đã được chọn, bỏ chọn ghế đó
        return prevSelectedSeats.filter((seat) => seat !== seatNumber);
      } else {
        // Nếu ghế chưa được chọn, thêm vào danh sách
        return [...prevSelectedSeats, seatNumber];
      }
    });
  };

  const getSeatColor = (seatNumber) => {
    return selectedSeats.includes(seatNumber) ? "bg-green-500" : "bg-gray-300";
  };

  return (
    <div className="flex flex-wrap gap-3">
      {data.map((item, index) => (
        <button
          key={index}
          onClick={() => handleSeatClick(item.seatNumber)}
          className={`text-white font-bold py-2 px-4 rounded-lg ${getSeatColor(
            item.seatNumber
          )}`}
          style={{
            minWidth: "60px",
            height: "40px",
          }}
        >
          {item.seatNumber}
        </button>
      ))}
    </div>
  );
}
