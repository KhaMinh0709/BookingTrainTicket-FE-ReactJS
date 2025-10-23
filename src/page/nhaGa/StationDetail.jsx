import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const STATIONS = {
  1: {
    id: 1,
    name: 'Ga Sài Gòn',
    address: 'Số 1, đường Nguyễn Thông, phường 9, Quận 3, TP.HCM',
    phone: '1900599997',
    description: 'Ga Sài Gòn là ga cuối trong tuyến đường sắt Bắc - Nam, có vai trò quan trọng...',
    image: 'https://th.bing.com/th/id/OIP.FJCjBwwHWFQTf0O_B0pjBgHaEK?rs=1&pid=ImgDetMain',
    history: 'Được xây dựng từ thời Pháp, trùng tu nhiều lần, nhà ga hiện tại khánh thành năm 1985.'
  },
  2: {
    id: 2,
    name: 'Ga Hà Nội',
    address: 'Số X, Hà Nội',
    phone: '04-39423949',
    description: 'Nhà ga chính tại Thủ đô Hà Nội',
    image: 'https://th.bing.com/th/id/R.2d0e03ed7205730b006ad5ce374611d1?rik=69pAW4p3mU7NMg&pid=ImgRaw&r=0',
    history: 'Ga Hà Nội là một trong những ga lớn nhất cả nước.'
  }
};

export default function StationDetail(){
  const { id } = useParams();
  const navigate = useNavigate();
  const station = STATIONS[id];

  if(!station) return (
    <div className="p-6">
      <h2 className="text-xl">Không tìm thấy nhà ga</h2>
      <button onClick={()=>navigate(-1)} className="mt-3 bg-blue-500 text-white px-3 py-1 rounded">Quay lại</button>
    </div>
  );

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded shadow p-6">
        <h1 className="text-3xl font-bold mb-4">{station.name}</h1>
        <div className="flex gap-6">
          <div className="flex-1">
            <img src={station.image} alt={station.name} className="w-full h-64 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-4">Giới thiệu</h3>
            <p className="mt-2 text-gray-700">{station.description}</p>
            <h3 className="text-xl font-semibold mt-4">Địa chỉ & liên hệ</h3>
            <p className="mt-2">Địa chỉ: {station.address}</p>
            <p>Số điện thoại: {station.phone}</p>
            <h3 className="text-xl font-semibold mt-4">Lịch sử</h3>
            <p className="mt-2">{station.history}</p>
          </div>
          <aside className="w-80">
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold">Thông tin nhanh</h4>
              <ul className="mt-2 text-sm text-gray-700 list-disc list-inside">
                <li>Địa chỉ: {station.address}</li>
                <li>Điện thoại: {station.phone}</li>
              </ul>
            </div>
          </aside>
        </div>
        <div className="mt-6">
          <button onClick={()=>navigate('/NhaGa')} className="bg-blue-500 text-white px-4 py-2 rounded">◀ Quay về danh sách nhà ga</button>
        </div>
      </div>
    </div>
  );
}
