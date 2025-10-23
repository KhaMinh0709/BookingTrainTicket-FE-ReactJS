import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SAMPLE = {
  1: { id:1, title: 'Du lịch miền Bắc - 4 ngày', price: 2500000, days: 4, image: 'https://cellphones.com.vn/sforum/wp-content/uploads/2024/01/dia-diem-du-lich-o-ha-noi-1.jpg',
     description: 'Lịch Trình Khám Phá Miền Bắc 4 Ngày 3 Đêm (Hà Nội - Ninh Bình - Hạ Long)Lịch trình này đòi hỏi việc di chuyển khá nhiều, đặc biệt là Ngày 2 và Ngày 3, nhưng đảm bảo bạn sẽ thấy được các Di sản Thế giới nổi tiếng của Việt Nam.NGÀY 1: HÀ NỘI – THỦ ĐÔ NGÀN NĂM VĂN HIẾNBuổiHoạt độngGợi ý Địa điểm/Chi tiếtSángĐến Hà Nội và nhận phòngĐến sân bay Nội Bài (HAN), di chuyển về khu vực Phố Cổ hoặc trung tâm. Gửi hành lý và dùng bữa trưa (nên thử món Bún chả Hà Nội).ChiềuTham quan Văn hóa - Lịch sửKhu Di tích Lăng Chủ tịch Hồ Chí Minh (tham quan bên ngoài nếu buổi chiều), Chùa Một Cột, và Văn Miếu - Quốc Tử Giám (trường đại học đầu tiên của Việt Nam).TốiKhám phá Phố Cổ và Ẩm thựcDạo quanh Hồ Hoàn Kiếm, Đền Ngọc Sơn, và Cầu Thê Húc. Thưởng thức đặc sản Kem Tràng Tiền hoặc Phở truyền thống. Kết thúc buổi tối bằng việc xem Múa Rối Nước tại Nhà hát Thăng Long.Nghỉ đêmHà Nội.'},
  2: { id:2, title: 'Du lịch miền Trung - 5 ngày', price: 3200000, days: 5, image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80', description: 'Lịch trình miền Trung...'},
  3: { id:3, title: 'Du lịch miền Nam - 3 ngày', price: 1800000, days: 3, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', description: 'Lịch trình miền Nam...'}
};

export default function TourDetail(){
  const { id } = useParams();
  const navigate = useNavigate();
  const tour = SAMPLE[id];

  if(!tour) return (
    <div className="p-6">
      <h2>Không tìm thấy tour</h2>
      <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded" onClick={()=>navigate('/tour')}>Quay lại</button>
    </div>
  );

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded shadow p-4">
        <h1 className="text-2xl font-bold">{tour.title}</h1>
        <div className="mt-4 flex gap-6">
          <img src={tour.image} alt={tour.title} className="w-1/3 object-cover rounded" />
          <div>
            <div className="text-red-600 font-bold">{new Intl.NumberFormat('vi-VN').format(tour.price)} VND</div>
            <p className="mt-2">{tour.description}</p>
            <div className="mt-4">
              <button className="bg-green-500 text-white px-3 py-1 rounded">Đặt tour</button>
              <button className="ml-2 bg-gray-200 px-3 py-1 rounded" onClick={()=>navigate('/tour')}>Quay lại</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
