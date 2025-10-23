import React, { useState, memo } from 'react';
import {
  FaSearch, FaUser, FaTrain, FaMapMarkerAlt,
  FaCalendarAlt, FaTicketAlt, FaPhone, FaEnvelope, FaTimesCircle
} from 'react-icons/fa';

const formatDateTime = (isoString) => {
  if (!isoString) return '';
  const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
  return new Date(isoString).toLocaleString('vi-VN', options);
};

const InputField = memo(function InputField({
  id, label, value, onChangeText, placeholder, icon: Icon, required = false, type = 'text',
}) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
        {Icon && <Icon className="mr-2 text-blue-500" />}
        {label} {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <input
          id={id}
          className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 transition duration-150 ease-in-out placeholder-gray-400"
          value={value}
          onChange={(e) => onChangeText(e.target.value)}
          placeholder={placeholder}
          type={type}
          autoComplete="off"
        />
      </div>
    </div>
  );
});

const ResultItem = ({ icon: Icon, label, value, className = "" }) => (
  <div className={`flex items-center p-3 border-b border-gray-100 last:border-b-0 ${className}`}>
    <Icon className="text-blue-500 mr-3 flex-shrink-0 w-5 h-5" />
    <div className="flex flex-col">
      <span className="text-sm text-gray-500">{label}</span>
      <strong className="text-base text-gray-900">{value}</strong>
    </div>
  </div>
);

export const TraCuu = () => {
  const [code, setCode] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const canSubmit = !!(code || phone || email);

  const handleLookup = (e) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    if (!canSubmit) {
      setError("Vui lòng nhập ít nhất một trong các thông tin: Mã đặt chỗ, Điện thoại, hoặc Email.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (code === 'ERROR') {
        setError("Không tìm thấy thông tin đặt chỗ với dữ liệu đã nhập. Vui lòng kiểm tra lại.");
        setResult(null);
      } else {
        setResult({
          passengerName: 'Nguyễn Khả Minh',
          from: 'Sài Gòn (Ga Sài Gòn)',
          to: 'Hà Nội (Ga Hà Nội)',
          departure: '2025-10-22T22:00:00.000+00:00',
          code: code || 'ABC123',
          phone: phone || '0373xxxxxx',
          email: email || 'example@gmail.com'
        });
      }
    }, 1000);
  };

  return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 relative">

  

      {/* --- NỘI DUNG CHÍNH --- */}
      <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-2xl mx-auto z-10">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-4 flex items-center justify-center">
          <FaSearch className="mr-3 text-blue-600" />
          Tra Cứu Thông Tin Đặt Chỗ
        </h1>

        <form onSubmit={handleLookup} className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputField id="booking-code" label="Mã đặt chỗ" value={code} onChangeText={setCode} placeholder="Ví dụ: ABC123" icon={FaTicketAlt} required />
            <InputField id="phone" label="Điện thoại" value={phone} onChangeText={setPhone} placeholder="0373xxxxxx" icon={FaPhone} />
            <InputField id="email" label="Email" value={email} onChangeText={setEmail} placeholder="example@gmail.com" icon={FaEnvelope} type="email" />
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="submit"
              aria-disabled={isLoading || !canSubmit}
              className={`flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-md text-white transition duration-300 ease-in-out 
                ${isLoading || !canSubmit ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500'}`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Đang tra cứu...
                </>
              ) : (
                <>
                  <FaSearch className="mr-2" />
                  Tra Cứu Ngay
                </>
              )}
            </button>
          </div>
        </form>

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-6 flex items-start">
            <FaTimesCircle className="w-5 h-5 mt-0.5 mr-3" />
            <div>
              <p className="font-bold">Lỗi tra cứu</p>
              <p className="text-sm">{error}</p>
            </div>
          </div>
        )}

        {result && (
          <div className="bg-white border-2 border-blue-100 rounded-xl shadow-xl overflow-hidden">
            <div className="bg-blue-500 text-white p-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold flex items-center">
                <FaTicketAlt className="mr-2" />
                Thông Tin Vé Đặt Chỗ
              </h3>
              <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-bold shadow-md">{result.code}</span>
            </div>

            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              <ResultItem icon={FaUser} label="Họ tên khách hàng" value={result.passengerName} className="sm:col-span-2" />
              <ResultItem icon={FaMapMarkerAlt} label="Ga đi" value={result.from} />
              <ResultItem icon={FaMapMarkerAlt} label="Ga đến" value={result.to} />
              <ResultItem icon={FaCalendarAlt} label="Giờ khởi hành" value={formatDateTime(result.departure)} className="sm:col-span-2" />
              <ResultItem icon={FaPhone} label="Điện thoại" value={result.phone} />
              <ResultItem icon={FaEnvelope} label="Email" value={result.email} />
            </div>
          </div>
        )}
      </div>

     
      <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-40 lg:w-52 xl:w-64 z-0">
        <img src="src/assets/img/left.jpg" alt="Ad Left" className="w-full h-full object-cover" />
      </div>

      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-40 lg:w-52 xl:w-64 z-0">
        <img src="src/assets/img/right.jpg" alt="Ad Right" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
