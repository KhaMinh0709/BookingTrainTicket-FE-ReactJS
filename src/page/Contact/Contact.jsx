import React from 'react';

export default function Contact(){
	return (
		<div className="container mx-auto p-6">
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-8 bg-white p-6 rounded shadow">
					<h2 className="text-2xl font-semibold text-blue-700 mb-4">Thông tin liên hệ</h2>
					<h3 className="text-lg font-semibold text-orange-600">Tổng công ty Đường sắt Khả Minh Station Việt Nam</h3>
					<p className="mt-2">Đại học công nghiệp thành phố Hồ Chí Minh.</p>
					<p className="mt-2 text-sm text-gray-600">Giấy chứng nhận ĐKKD số 113642 theo QĐ thành lập số 973/QĐ-TTg ngày 25/06/2010 của Thủ tướng Chính phủ.</p>
					<p className="mt-2 text-sm text-gray-600">Mã số doanh nghiệp: 0100105052, đăng ký lần đầu ngày 26/07/2010, đăng ký thay đổi lần 4 ngày 27/06/2014 tại Sở KHĐT Thành phố Hà Nội.</p>
				</div>

				<div className="col-span-4 bg-white p-6 rounded shadow">
					<h3 className="text-lg font-semibold text-orange-600">Tổng đài hỗ trợ và chăm sóc khách hàng</h3>
					<div className="mt-2 text-sm">
						<p>Hỗ trợ tra cứu giờ tàu, giá vé, quy định đổi và trả vé, các chương trình khuyến mại, mua vé qua số điện thoại</p>
						<p className="mt-2 font-bold">Khu vực miền Bắc: 1900 0109</p>
						<p className="mt-1 font-bold">Khu vực miền Nam: 1900 1520</p>
					</div>

					<h3 className="text-lg font-semibold text-orange-600 mt-6">Tổng đài hỗ trợ thanh toán và hoàn tiền online</h3>
					<div className="mt-2 text-sm">
						<p className="font-bold">Điện thoại: 1900 6469</p>
						<p>Email: support1@dsvn.vn</p>
					</div>
				</div>
			</div>

			<div className="mt-6 bg-blue-50 border border-blue-200 p-4 rounded">
				<div className="text-center font-semibold text-blue-700">CHÍNH SÁCH GIÁ VÉ, QUY ĐỊNH ĐỔI – TRẢ VÉ TÀU VÀ HƯỚNG DẪN TẢI HÓA ĐƠN VÉ TÀU HỎA – NĂM 2025</div>
			</div>
		</div>
	)
}

