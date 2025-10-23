import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SAMPLE_TOURS = [
  { id: 1, title: 'Du lịch miền Bắc - 4 ngày', price: 2500000, img: 'https://cellphones.com.vn/sforum/wp-content/uploads/2024/01/dia-diem-du-lich-o-ha-noi-1.jpg' },
  { id: 2, title: 'Du lịch miền Trung - 5 ngày', price: 3200000, img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80' },
  { id: 3, title: 'Du lịch miền Nam - 3 ngày', price: 1800000, img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80' }
];

export default function TourList(){
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (tour) => {
    setCart(prev => [...prev, tour]);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="container mx-auto p-6 grid grid-cols-12 gap-6">
      <div className="col-span-8">
        <h2 className="text-2xl font-bold mb-4">Tour hot</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {SAMPLE_TOURS.map(t => (
            <div key={t.id} className="bg-white rounded shadow overflow-hidden">
              <img src={t.img} alt={t.title} className="w-full h-44 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{t.title}</h3>
                <div className="mt-2 text-red-600 font-bold">{new Intl.NumberFormat('vi-VN').format(t.price)} VND</div>
                <div className="mt-3 flex gap-2">
                  <button onClick={() => navigate(`/tour/${t.id}`)} className="bg-blue-500 text-white px-3 py-1 rounded">Xem chi tiết</button>
                  <button onClick={() => addToCart(t)} className="bg-green-500 text-white px-3 py-1 rounded">Thêm vào giỏ</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <aside className="col-span-4">
        <div className="bg-white rounded shadow p-4">
          <h3 className="font-semibold mb-3">Giỏ tour</h3>
          {cart.length === 0 ? <p>Chưa có tour</p> : (
            <ul>
              {cart.map(item => (
                <li key={item.id} className="mb-3 flex justify-between items-center">
                  <div>
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-sm text-gray-600">{new Intl.NumberFormat('vi-VN').format(item.price)} VND</div>
                  </div>
                  <div>
                    <button onClick={() => removeFromCart(item.id)} className="text-sm text-red-500">Xóa</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </div>
  )
}
