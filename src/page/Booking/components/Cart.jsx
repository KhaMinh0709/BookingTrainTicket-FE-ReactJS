/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

export default function Cart({ selectedSeats }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = selectedSeats.reduce((sum, seat) => sum + (Number(seat.price) || 0), 0);
    setTotal(newTotal);
  }, [selectedSeats]);

  const fmt = (v) => new Intl.NumberFormat('vi-VN').format(v) + ' VND';

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-4">
      <h2 className="text-xl font-bold mb-4">Giỏ Vé</h2>
      {selectedSeats.length === 0 ? (
        <p>Chưa có ghế nào được chọn</p>
      ) : (
        <ul>
          {selectedSeats.map((seat) => (
            <li key={seat.seatNumber} className="mb-2 flex justify-between">
              <span>Ghế {seat.seatNumber}</span>
              <span>{seat.price ? fmt(seat.price) : 'N/A'}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 flex justify-between items-center">
        <div className="text-lg font-semibold">Tổng: {fmt(total)}</div>
        <button 
          className={`px-4 py-2 rounded-lg ${
            selectedSeats.length === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'
          }`}
          disabled={selectedSeats.length === 0}
        >
          Thanh toán
        </button>
      </div>
    </div>
  );
}