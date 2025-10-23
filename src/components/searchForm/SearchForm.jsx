import { useState } from 'react';
import { MapPin, Calendar, ArrowRight, Search } from 'lucide-react';

export const SearchForm = ({ onSearch, initialValues }) => {
    const [departure, setDeparture] = useState(initialValues?.departure || '');
    const [arrival, setArrival] = useState(initialValues?.arrival || '');
    const [departureDate, setDepartureDate] = useState(initialValues?.departureDate || '');
    const [returnDate, setReturnDate] = useState(initialValues?.returnDate || '');
    const [tripType, setTripType] = useState(initialValues?.tripType || 'oneWay');

    const provinces = [
        "Hồ Chí Minh", "An Giang", "Bà Rịa - Vũng Tàu", "Bắc Giang", "Bắc Kạn", "Bạc Liêu",
        "Bắc Ninh", "Bến Tre", "Bình Định", "Bình Dương", "Bình Phước", "Cà Mau", "Cần Thơ",
        "Cao Bằng", "Đà Nẵng", "Đắk Lắk", "Đắk Nông", "Điện Biên", "Đồng Nai", "Đồng Tháp",
        "Hà Giang", "Hà Nam", "Hà Nội", "Hà Tĩnh", "Hải Dương", "Hải Phòng", "Hòa Bình",
        "Hậu Giang", "Hưng Yên", "Khánh Hòa", "Kiên Giang", "Kon Tum", "Lai Châu", "Lào Cai",
        "Long An", "Nam Định", "Nghệ An", "Ninh Bình", "Ninh Thuận", "Phú Thọ", "Phú Yên",
        "Quảng Bình", "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị", "Sóc Trăng",
        "Sơn La", "Tây Ninh", "Thái Bình", "Thái Nguyên", "Thanh Hóa", "Thừa Thiên - Huế",
        "Tiền Giang", "Vĩnh Long", "Vĩnh Phúc", "Yên Bái"
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({
            departure,
            arrival,
            departureDate,
            returnDate,
            tripType,
        });
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-6">
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 transform transition-all duration-300 hover:shadow-3xl">
                {/* Title */}
                <div className="flex items-center justify-center mb-8">
                    <Search className="w-6 h-6 text-indigo-600 mr-2" />
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Tìm chuyến
                    </h2>
                </div>

                <div onSubmit={handleSubmit}>
                    {/* Trip Type Toggle */}
                    <div className="flex gap-3 mb-8">
                        <button
                            type="button"
                            className={`flex-1 py-3.5 px-6 rounded-xl font-semibold transition-all duration-300 transform ${
                                tripType === 'oneWay'
                                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-102'
                            }`}
                            onClick={() => setTripType('oneWay')}
                        >
                            Một chiều
                        </button>
                        <button
                            type="button"
                            className={`flex-1 py-3.5 px-6 rounded-xl font-semibold transition-all duration-300 transform ${
                                tripType === 'roundTrip'
                                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-102'
                            }`}
                            onClick={() => setTripType('roundTrip')}
                        >
                            Khứ hồi
                        </button>
                    </div>

                    {/* Location Selection */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="group relative">
                            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center mr-2 group-hover:bg-indigo-200 transition-colors duration-300">
                                    <MapPin className="w-4 h-4 text-indigo-600" />
                                </div>
                                Nơi đi
                            </label>
                            <select
                                value={departure}
                                onChange={(e) => setDeparture(e.target.value)}
                                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition-all duration-300 bg-white hover:border-indigo-300 appearance-none cursor-pointer text-gray-700 font-medium"
                            >
                                <option value="">Chọn nơi đi</option>
                                {provinces.map((province) => (
                                    <option key={province} value={province}>
                                        {province}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="group relative">
                            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center mr-2 group-hover:bg-purple-200 transition-colors duration-300">
                                    <MapPin className="w-4 h-4 text-purple-600" />
                                </div>
                                Nơi đến
                            </label>
                            <select
                                value={arrival}
                                onChange={(e) => setArrival(e.target.value)}
                                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all duration-300 bg-white hover:border-purple-300 appearance-none cursor-pointer text-gray-700 font-medium"
                            >
                                <option value="">Chọn nơi đến</option>
                                {provinces.map((province) => (
                                    <option key={province} value={province}>
                                        {province}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Date Selection */}
                    <div className={`grid ${tripType === 'roundTrip' ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-6 mb-8`}>
                        <div className="group">
                            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center mr-2 group-hover:bg-indigo-200 transition-colors duration-300">
                                    <Calendar className="w-4 h-4 text-indigo-600" />
                                </div>
                                Ngày đi
                            </label>
                            <input
                                type="date"
                                value={departureDate}
                                onChange={(e) => setDepartureDate(e.target.value)}
                                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition-all duration-300 bg-white hover:border-indigo-300 cursor-pointer text-gray-700 font-medium"
                            />
                        </div>

                        {tripType === 'roundTrip' && (
                            <div className="group animate-fade-in">
                                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center mr-2 group-hover:bg-purple-200 transition-colors duration-300">
                                        <Calendar className="w-4 h-4 text-purple-600" />
                                    </div>
                                    Ngày về (Khứ hồi)
                                </label>
                                <input
                                    type="date"
                                    value={returnDate}
                                    onChange={(e) => setReturnDate(e.target.value)}
                                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all duration-300 bg-white hover:border-purple-300 cursor-pointer text-gray-700 font-medium"
                                />
                            </div>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center group"
                    >
                        <Search className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                        TÌM CHUYẾN
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.4s ease-out;
                }
                select::-ms-expand {
                    display: none;
                }
            `}</style>
        </div>
    );
};
