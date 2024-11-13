/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Cart from "./Cart";

export default function ListSeat({ data, clearSeats, onClearComplete }) {
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    if (clearSeats) {
      setSelectedSeats([]);
      onClearComplete(); // Gọi hàm để báo là việc xóa ghế đã hoàn tất
    }
  }, [clearSeats, onClearComplete]);

  const handleSeatClick = (seatNumber) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatNumber)) {
        return prevSelectedSeats.filter((seat) => seat !== seatNumber);
      } else {
        return [...prevSelectedSeats, seatNumber];
      }
    });
  };

  const getSeatColor = (seatNumber) => {
    return selectedSeats.includes(seatNumber) ? "bg-green-500" : "bg-gray-300";
  };

  return (
    <div>
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
      <Cart selectedSeats={selectedSeats} />
    </div>
  );
}
