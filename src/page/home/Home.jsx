import { useState } from 'react';
import { Train, MapPin, Calendar, ArrowRight, ChevronRight, Star, Clock, Shield } from 'lucide-react';
import { useTrainSearch } from '../../hooks/useTrainSearch';

export default function Home({ onSearch }) {
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [tripType, setTripType] = useState('oneWay');
    const {handleSearch} =  useTrainSearch();
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

    const popularRoutes = [
        { from: "Hà Nội", to: "Hồ Chí Minh", price: "850.000đ", duration: "30h" },
        { from: "Hà Nội", to: "Đà Nẵng", price: "450.000đ", duration: "15h" },
        { from: "Hồ Chí Minh", to: "Nha Trang", price: "320.000đ", duration: "8h" },
    ];

    const features = [
        { icon: Clock, title: "Đặt Vé Nhanh", desc: "Chỉ 3 bước đơn giản" },
        { icon: Shield, title: "An Toàn", desc: "Thanh toán bảo mật" },
        { icon: Star, title: "Uy Tín", desc: "Hơn 10 năm kinh nghiệm" },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (handleSearch) {
            handleSearch({
                departure,
                arrival,
                departureDate,
                returnDate,
                tripType
            });
        }
    };

    const handlePopularRouteClick = (route) => {
        setDeparture(route.from);
        setArrival(route.to);
        // Scroll to form
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-75"></div>
                    <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-150"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
                    {/* Header */}
                    <div className="text-center mb-12 animate-fade-in">
                        <div className="flex items-center justify-center mb-4">
                            <Train className="w-12 h-12 text-indigo-600 animate-bounce" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                            Đặt Vé Tàu
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Dễ Dàng</span>
                        </h1>
                        <p className="text-xl text-gray-600">Khám phá Việt Nam với hành trình tàu hỏa thoải mái</p>
                    </div>

                    {/* Search Form */}
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 transform hover:scale-[1.02] transition-all duration-300">
                            <div>
                                {/* Trip Type Toggle */}
                                <div className="flex gap-3 mb-8">
                                    <button
                                        type="button"
                                        onClick={() => setTripType('oneWay')}
                                        className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                                            tripType === 'oneWay'
                                                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                    >
                                        Một chiều
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setTripType('roundTrip')}
                                        className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                                            tripType === 'roundTrip'
                                                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                    >
                                        Khứ hồi
                                    </button>
                                </div>

                                {/* Location Selection */}
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="group">
                                        <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                            <MapPin className="w-4 h-4 mr-2 text-indigo-600" />
                                            Nơi đi
                                        </label>
                                        <select
                                            value={departure}
                                            onChange={(e) => setDeparture(e.target.value)}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition-all duration-300 bg-white hover:border-indigo-300"
                                        >
                                            <option value="">Chọn nơi đi</option>
                                            {provinces.map((province) => (
                                                <option key={province} value={province}>
                                                    {province}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="group">
                                        <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                            <MapPin className="w-4 h-4 mr-2 text-purple-600" />
                                            Nơi đến
                                        </label>
                                        <select
                                            value={arrival}
                                            onChange={(e) => setArrival(e.target.value)}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all duration-300 bg-white hover:border-purple-300"
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
                                            <Calendar className="w-4 h-4 mr-2 text-indigo-600" />
                                            Ngày đi
                                        </label>
                                        <input
                                            type="date"
                                            value={departureDate}
                                            onChange={(e) => setDepartureDate(e.target.value)}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition-all duration-300 bg-white hover:border-indigo-300"
                                        />
                                    </div>

                                    {tripType === 'roundTrip' && (
                                        <div className="group animate-fade-in">
                                            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                                <Calendar className="w-4 h-4 mr-2 text-purple-600" />
                                                Ngày về
                                            </label>
                                            <input
                                                type="date"
                                                value={returnDate}
                                                onChange={(e) => setReturnDate(e.target.value)}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all duration-300 bg-white hover:border-purple-300"
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center group"
                                >
                                    TÌM CHUYẾN TÀU
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
                                <feature.icon className="w-7 h-7 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Popular Routes */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tuyến Đường Phổ Biến</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {popularRoutes.map((route, index) => (
                        <div
                            key={index}
                            onClick={() => handlePopularRouteClick(route)}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-lg font-bold text-gray-900">{route.from}</span>
                                <ArrowRight className="w-5 h-5 text-indigo-600 group-hover:translate-x-2 transition-transform duration-300" />
                                <span className="text-lg font-bold text-gray-900">{route.to}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm text-gray-600">
                                <span className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    {route.duration}
                                </span>
                                <span className="text-lg font-bold text-indigo-600">{route.price}</span>
                            </div>
                            <div className="w-full mt-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 rounded-lg font-semibold hover:from-indigo-100 hover:to-purple-100 transition-all duration-300 flex items-center justify-center group text-center">
                                Xem chi tiết
                                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out;
                }
            `}</style>
        </div>
    );
}