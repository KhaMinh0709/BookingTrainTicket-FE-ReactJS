import React from 'react';

// Danh sách chương trình khuyến mãi
const PROMOTIONS = [
  {
    id: 1,
    title: 'Đi tàu hoả tới Đà Nẵng – Nhận ngay voucher 200.000 VND',
    date: '10.07.2024',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80'
  },
  {
    id: 2,
    title: 'Giảm đến 20% giá vé khi mua vé sớm',
    date: '26.09.2023',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80'
  },
  {
    id: 3,
    title: 'Quy định đổi vé, trả vé mới nhất',
    date: '31.08.2023',
    image: 'https://cdn.vietnammoi.vn/2019/7/10/doi-ve-may-bay-mat-bao-nhieu-tien-15627443785691625528500.jpg'
  },
  {
    id: 4,
    title: 'Mua vé nhóm từ 4 người – Giảm ngay 15%',
    date: '12.03.2024',
    image: 'https://thuexedanang.net/wp-content/uploads/2016/05/giam-15.jpg'
  },
  {
    id: 5,
    title: 'Ưu đãi học sinh, sinh viên giảm 10% giá vé toàn tuyến',
    date: '05.06.2024',
    image: 'https://images.unsplash.com/photo-1532619187608-e5375cab36aa?w=800&q=80'
  },
  {
    id: 6,
    title: 'Đặt vé online – Nhận thêm điểm thưởng thành viên',
    date: '18.08.2024',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&q=80'
  },
  {
    id: 7,
    title: 'Chương trình tri ân khách hàng thân thiết – Tặng quà hấp dẫn',
    date: '22.09.2024',
    image: 'https://quatanggams.com/wp-content/uploads/2023/06/Qua-tang-khuyen-mai.jpg'
  },
  {
    id: 8,
    title: 'Miễn phí đổi vé cho các chặng nội địa trong tháng 10',
    date: '02.10.2024',
    image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=800&q=80'
  }
];

export default function KhuyenMai() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Tin khuyến mại</h2>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <div className="grid gap-6 md:grid-cols-3">
            {PROMOTIONS.map(p => (
              <div key={p.id} className="bg-white rounded shadow overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold">{p.title}</h3>
                  <div className="mt-2 text-sm text-gray-500">{p.date}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 mt-6 md:grid-cols-3">
            {PROMOTIONS.map((p, i) => (
              <div key={`more-${i}`} className="bg-white rounded shadow overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-32 object-cover" />
                <div className="p-3">
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-sm text-gray-500 mt-2">{p.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="col-span-12 lg:col-span-4">
          <div className="bg-green-600 text-white p-4 rounded mb-6">
            <h4 className="font-semibold text-xl">TOA KHÁCH HẠNG SANG</h4>
            <p className="mt-2">Đẳng cấp chất lượng dịch vụ!</p>
          </div>

          <div className="bg-white rounded shadow p-4 mb-6">
            <h4 className="font-semibold mb-2">CSKH</h4>
            <div className="text-xl font-bold">1900 0109</div>
            <div className="mt-2">HOTLINE 0912 010 056</div>
          </div>
        </aside>
      </div>
    </div>
  );
}
