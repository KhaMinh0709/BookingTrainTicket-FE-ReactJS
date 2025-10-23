import React, { useState } from 'react';
import ListSeat from './components/ListSeat';
import { useNavigate } from 'react-router-dom';
import Cart from './components/Cart';

const SAMPLE_TRAIN = {
	id: 9,
	trainId: 1,
	trainName: 'SE001',
	departureStation: 'Sài Gòn',
	arrivalStation: 'Hà Nội',
	departureTime: '2025-09-20T06:00:00.000+00:00',
	arrivalTime: '2025-09-21T16:10:00.000+00:00',
	price: 1228000,
	availableSeats: 50,
	coaches: [
		{ coachID: 1, coachNumber: 1, typeCoach: 'Ngồi mềm chất lượng cao', seatList: [1,8,9,16,17,24,25,32,33,40,41,48,49,56,2,7,10,15,18,23,26,31,34,39,42,47,50,55,3,6,11,14,19,22,27,30,35,38,43,46,51,54] },
		{ coachID: 2, coachNumber: 2, typeCoach: 'Ngồi mềm chất lượng cao', seatList: [1,8,9,16,17,24,25,32,33,40,41,48,49,56,2,7,10,15,18,23,26,31,34,39,42,47,50,55] }
	]
};

export default function BookingDetail() {
	const train = SAMPLE_TRAIN;
	const navigate = useNavigate();

	const [selectedSeats, setSelectedSeats] = useState([]);
	const [customer, setCustomer] = useState({ name: '', phone: '', email: '' });

	// ListSeat reports { coachId, seats } — merge selections across coaches
	const handleSeatsChange = (payload) => {
		if (!payload) return;
		const { coachId, seats } = payload;
		setSelectedSeats(prev => {
			// remove seats from the same coachId then add the new seats
			const filtered = prev.filter(s => s.coachNumber !== coachId);
			return [...filtered, ...seats];
		});
	};

	const handleContinue = () => {
		const booking = { train, seats: selectedSeats, customer };
		navigate('/DatVe/payment', { state: { booking } });
	};

	return (
		<div className="p-6 bg-gray-50 min-h-screen">
			{/* Progress */}
			<div className="mb-6">
				<div className="flex items-center justify-center gap-2">
					<div className="w-1/4 text-center bg-blue-100 text-blue-700 py-2 rounded-t">CHỌN CHUYẾN</div>
					<div className="w-1/4 text-center bg-blue-500 text-white py-2 rounded-t">CHI TIẾT VÉ</div>
					<div className="w-1/4 text-center bg-blue-100 text-blue-700 py-2 rounded-t">THANH TOÁN</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-6">
				{/* Left column */}
				<div className="col-span-8">
					<div className="bg-white rounded shadow p-4 mb-4">
						<h3 className="text-blue-600 font-bold">TUYẾN {train.departureStation} → {train.arrivalStation}, NGÀY {new Date(train.departureTime).toLocaleDateString()}</h3>
						<div className="mt-3 border-t pt-3">
							<div className="flex items-center justify-between">
								<div>
									<div className="text-red-500 font-semibold">{new Date(train.departureTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} {new Date(train.departureTime).toLocaleDateString()}</div>
								</div>
								<div className="text-center">
									<div className="font-bold">{train.trainName}</div>
									<div className="text-sm text-gray-500">{Math.floor((new Date(train.arrivalTime)-new Date(train.departureTime))/(1000*60*60))} giờ</div>
								</div>
								<div className="text-red-600 font-semibold">{new Date(train.arrivalTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
							</div>

							{/* Legend */}
							<div className="flex items-center gap-6 mt-4">
								<div className="flex items-center gap-2"><div className="w-4 h-4 border"></div><span className="text-sm">Còn trống</span></div>
								<div className="flex items-center gap-2"><div className="w-4 h-4 bg-yellow-300"></div><span className="text-sm">Đang chọn</span></div>
								<div className="flex items-center gap-2"><div className="w-4 h-4 bg-red-600"></div><span className="text-sm">Đã bán</span></div>
							</div>

							{/* Action buttons */}
							<div className="flex gap-3 mt-4">
								<button className="bg-red-400 text-white px-4 py-2 rounded">Hình ảnh</button>
								<button className="bg-green-500 text-white px-4 py-2 rounded">Chính sách</button>
								<button className="bg-sky-400 text-white px-4 py-2 rounded">Lịch đón</button>
							</div>

							<div className="text-center text-blue-600 font-semibold mt-6">CHỌN VỊ TRÍ</div>

							{/* Coach icons */}
							<div className="flex items-center gap-3 mt-3 overflow-x-auto py-2">
								{train.coaches.map((c, i) => (
									<div key={c.coachID} className="flex flex-col items-center w-16">
										<div className="w-12 h-8 bg-sky-200 rounded flex items-center justify-center">{i+1}</div>
										<div className="text-xs text-gray-600 mt-1">{i+1}</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Coach sections */}
					{train.coaches.map((c, idx) => (
						<div key={c.coachID} className="bg-white rounded shadow p-4 mb-6">
							<h4 className="font-semibold">Toa {c.coachNumber}: {c.typeCoach}</h4>
							<div className="text-sm text-gray-600 mb-3">Ghế thường: {new Intl.NumberFormat('vi-VN').format(2.000)}k. Giá toa: {new Intl.NumberFormat('vi-VN').format(2.000)}k</div>
							<ListSeat coachId={c.coachNumber} data={c.seatList.map(n => ({ seatNumber: n, price: train.price, coachNumber: c.coachNumber }))} onSelectionChange={(data)=>{
								handleSeatsChange(data)
							}} />
						</div>
					))}
				</div>

				{/* Right column */}
				<div className="col-span-4">
											<div className="bg-white rounded shadow p-4 mb-4">
						<h3 className="text-blue-600 font-semibold mb-2">THÔNG TIN KHÁCH HÀNG</h3>
												{/* <div className="text-sm mb-2">Tiền vé: <span className="text-red-500 font-bold">0đ</span></div> */}
												{/* Cart: show selected seats and total */}
												<div className="mb-3">
													<Cart selectedSeats={selectedSeats} />
												</div>
												<div className="bg-orange-400 text-white p-2 rounded mb-3">Nhập chính xác thông tin người đi mới có thể làm thủ tục lên tàu</div>
												<div className="mb-3">
													<label className="block text-sm">Họ và tên*</label>
													<input className="w-full border-b py-2" placeholder="Họ tên người đi" value={customer.name} onChange={e=>setCustomer({...customer, name: e.target.value})} />
												</div>
												<div className="mb-3">
													<label className="block text-sm">Điện thoại*</label>
													<input className="w-full border-b py-2" placeholder="Nhận tin nhắn" value={customer.phone} onChange={e=>setCustomer({...customer, phone: e.target.value})} />
												</div>
												<div className="mb-3">
													<label className="block text-sm">Email*</label>
													<input className="w-full border-b py-2" placeholder="Email nhận vé" value={customer.email} onChange={e=>setCustomer({...customer, email: e.target.value})} />
												</div>
						<div className="mb-6">
							<button className="bg-sky-300 px-3 py-2 rounded">Nhập từ Excel</button>
						</div>
					</div>

								<div className="bg-white rounded shadow p-4">
						<h4 className="font-semibold text-red-500">***Chú ý:</h4>
						<ul className="text-sm text-gray-600 list-disc list-inside">
							<li>Giá vé đã bao gồm VAT và phí dịch vụ.</li>
							<li>Hành khách làm thủ tục lên tàu phải mang theo giấy tờ tuỳ thân.</li>
							<li>Trẻ em dưới 6 tuổi miễn phí khi ngồi chung với người lớn.</li>
						</ul>
									<div className="flex gap-3 mt-6">
										<button className="flex-1 bg-blue-500 text-white py-2 rounded" onClick={()=>window.history.back()}>◀ Quay lại</button>
										<button className="flex-1 bg-green-600 text-white py-2 rounded" onClick={handleContinue}>Tiếp tục ▶</button>
									</div>
					</div>
				</div>
			</div>
		</div>
	);
}

