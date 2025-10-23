import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import axios from 'axios';

export default function BookingPayment(){
  const { state } = useLocation();
  const navigate = useNavigate();
  const booking = state?.booking;
  const [agree, setAgree] = useState(false);
  const [payMethod, setPayMethod] = useState('app');
  const [loading, setLoading] = useState(false);
  const [paymentResult, setPaymentResult] = useState(null);
  const [error, setError] = useState(null);

  // sample fees
  const paymentFee = 32000; // e.g., mobile bank fee

  const totalSeats = booking?.seats?.reduce((s, it) => s + (Number(it.price) || 1228000), 0) || 0;
  const grandTotal = totalSeats + paymentFee;

  if(!booking) return (
    <div className="p-6">
      <h2 className="text-xl">Không có dữ liệu thanh toán</h2>
      <button className="mt-4 bg-blue-500 text-white px-3 py-1 rounded" onClick={()=>navigate('/DatVe')}>Quay lại</button>
    </div>
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <div className="flex items-center justify-center gap-2">
          <div className="w-1/4 text-center bg-blue-100 text-blue-700 py-2 rounded-t">CHỌN CHUYẾN</div>
          <div className="w-1/4 text-center bg-blue-100 text-blue-700 py-2 rounded-t">CHI TIẾT VÉ</div>
          <div className="w-1/4 text-center bg-blue-500 text-white py-2 rounded-t">THANH TOÁN</div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-7">
          <div className="bg-white rounded shadow p-4 mb-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">THÔNG TIN GIAO DỊCH</h3>
              <div className="bg-green-500 text-white px-3 py-1 rounded">Tổng tiền vé {new Intl.NumberFormat('vi-VN').format(totalSeats)} VND</div>
            </div>

            <div className="mt-4 border rounded p-4">
              <h4 className="text-center font-semibold text-blue-600">HÌNH THỨC THANH TOÁN</h4>
              <div className="mt-4 space-y-3">
                <label className="block border rounded p-3">
                  <input type="radio" name="pay" value="qr" checked={payMethod==='qr'} onChange={e=>setPayMethod(e.target.value)} /> <span className="ml-2">Quét Qr chuyển khoản (Phí 0đ)</span>
                </label>
                <label className="block border rounded p-3">
                  <input type="radio" name="pay" value="app" checked={payMethod==='app'} onChange={e=>setPayMethod(e.target.value)} /> <span className="ml-2">Ứng dụng di động, Thẻ ATM <span className="text-red-500">+32.000</span></span>
                </label>
                <label className="block border rounded p-3">
                  <input type="radio" name="pay" value="card" checked={payMethod==='card'} onChange={e=>setPayMethod(e.target.value)} /> <span className="ml-2">Thẻ tín dụng/Ghi nợ <span className="text-red-500">+70.000</span></span>
                </label>
              </div>
            </div>

            <div className="mt-4 p-4">
              <div>Số tiền cần thanh toán: <span className="text-red-600 font-bold">{new Intl.NumberFormat('vi-VN').format(grandTotal)} VND</span></div>
              <div className="mt-4 bg-red-100 p-3 rounded text-sm text-red-700">Quý khách vui lòng kiểm tra kỹ và xác nhận các thông tin đã cung cấp trước khi thực hiện giao dịch mua vé.</div>
            </div>

            <div className="mt-4">
              <label className="inline-flex items-center"><input type="checkbox" checked={agree} onChange={e=>setAgree(e.target.checked)} className="mr-2"/> Chấp nhận <a className="text-blue-600">điều khoản thanh toán</a> của chúng tôi.</label>
            </div>

            <div className="mt-4 flex gap-3">
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={()=>navigate(-1)}>Chọn lại</button>
              <button
                className={`px-4 py-2 rounded ${agree ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-700 cursor-not-allowed'}`}
                disabled={!agree || loading}
                onClick={async () => {
                  setError(null);
                  if (!agree) return;
                  // If QR selected, call backend to create payment link
                  if (payMethod === 'qr') {
                    try {
                      setLoading(true);
                      const res = await axios.post(
                          'http://localhost:8081/order/create',
                          {
                            productName: `Vé tàu ${booking.train?.trainName || ''}`,
                            description: 'Thanh toán vé tàu',
                            returnUrl: 'http://localhost:8081/success',
                            price: 2000,
                            cancelUrl: 'http://localhost:8081/cancel'
                          },
                          { headers: { 'Content-Type': 'application/json' } }
                        );
                      if (res?.data?.error === 0 && res.data.data) {
                        const data = res.data.data;
                        setPaymentResult(data);
                        // Redirect user to the checkoutUrl returned by the backend
                        if (data.checkoutUrl) {
                          // use same tab navigation
                          window.location.href = data.checkoutUrl;
                        }
                      } else {
                        setError(res?.data?.message || 'Lỗi khi tạo payment link');
                      }
                    } catch (err) {
                      setError(err?.response?.data?.message || err.message || 'Lỗi khi gọi API');
                    } finally {
                      setLoading(false);
                    }
                  } else {
                    // For non-QR, we would normally redirect to card/payment flow
                    // For demo just show an alert or navigate to success
                    navigate(-1);
                  }
                }}
              >
                {loading ? 'Đang xử lý...' : 'Thanh toán'}
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-5">
          <div className="bg-white rounded shadow p-4">
            <h3 className="text-blue-600 font-semibold">THÔNG TIN CHUYẾN</h3>
            <div className="mt-3 border p-3">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-600">Sài Gòn</div>
                  <div className="text-red-500 font-bold">06:00 20/09/2025</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">→</div>
                  <div className="text-sm text-gray-600">Tàu: SE1</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Hà Nội</div>
                </div>
              </div>

              <div className="mt-4">
                {booking.seats.map((s, i) => (
                  <div key={i} className="border rounded p-3 mb-3">
                    <div className="text-red-500 font-bold">Vị trí {s.seatNumber} Toa {s.coachNumber ?? 1}</div>
                    <table className="w-full mt-2 text-sm">
                      <tbody>
                        <tr>
                          <td className="border p-1">Họ và tên</td>
                          <td className="border p-1">{booking.customer?.name || 'Khách hàng'}</td>
                        </tr>
                        <tr>
                          <td className="border p-1">Năm sinh</td>
                          <td className="border p-1">-</td>
                        </tr>
                        <tr>
                          <td className="border p-1">Đối tượng</td>
                          <td className="border p-1">Người lớn</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>

              <div className="mt-2">
                <h4 className="font-semibold">THÔNG TIN LIÊN HỆ</h4>
                <div className="mt-2">Điện thoại: {booking.customer?.phone || '0373...'} </div>
                <div>Email: {booking.customer?.email || 'example@gmail.com'}</div>
              </div>
              {error && <div className="mt-3 text-red-600">{error}</div>}
              {paymentResult && (
                <div className="mt-4 border rounded p-3 bg-green-50">
                  <h4 className="font-semibold">Thông tin thanh toán QR</h4>
                  <div className="mt-2">Mã đơn: {paymentResult.orderCode}</div>
                  <div className="mt-1">Số tài khoản: {paymentResult.accountNumber} - {paymentResult.accountName}</div>
                  <div className="mt-2">Số tiền: {new Intl.NumberFormat('vi-VN').format(paymentResult.amount)} VND</div>
                  <div className="mt-2">
                    <a className="text-blue-600" href={paymentResult.checkoutUrl} target="_blank" rel="noreferrer">Mở trang thanh toán</a>
                  </div>
                  <div className="mt-3">
                    <label className="block text-sm">QR Code (chuỗi):</label>
                    <textarea className="w-full border p-2 mt-1" rows={3} value={paymentResult.qrCode} readOnly />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
