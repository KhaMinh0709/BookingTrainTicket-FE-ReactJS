/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Cart from "./Cart";

export default function ListSeat({ data = [], clearSeats, onClearComplete, onSelectionChange, coachId }) {
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    if (clearSeats) {
      setSelectedSeats([]);
      if (typeof onClearComplete === 'function') onClearComplete(); // thông báo xong
    }
  }, [clearSeats, onClearComplete]);

  const handleSeatClick = (seat) => {
    const seatNumber = seat.seatNumber ?? seat;
    const coachNumber = seat.coachNumber ?? coachId;
    setSelectedSeats((prev) => {
      if (prev.find(s => s.seatNumber === seatNumber && s.coachNumber === coachNumber)) {
        return prev.filter(s => !(s.seatNumber === seatNumber && s.coachNumber === coachNumber));
      }
      // include coachNumber and price
      return [...prev, { seatNumber, price: seat.price ?? 0, coachNumber }];
    });
  };

  // notify parent about selection changes; send coachId so parent can merge across coaches
  useEffect(() => {
    if (typeof onSelectionChange === 'function') {
      onSelectionChange({ coachId, seats: selectedSeats });
    }
  }, [selectedSeats, coachId]);

  const isSold = (item) => item.status === 'SOLD' || item.sold || item.isBooked;

  return (
    <div>
      <div className="grid grid-cols-8 gap-3">
        {data.map((item, idx) => {
          const num = item.seatNumber ?? item;
          const sold = isSold(item);
          const selected = selectedSeats.some(s => s.seatNumber === num && s.coachNumber === (item.coachNumber ?? coachId));
          const base = 'w-12 h-12 flex items-center justify-center rounded text-sm font-medium select-none';
          const cls = sold ? `${base} bg-red-500 text-white` : selected ? `${base} bg-yellow-300 border-2 border-yellow-500` : `${base} bg-white border`;

          return (
            <button
              key={idx}
              disabled={sold}
              onClick={() => !sold && handleSeatClick(item)}
              className={cls}
              title={`Ghế ${num}`}
            >
              {num}
            </button>
          );
        })}
      </div>
    </div>
  );
}
