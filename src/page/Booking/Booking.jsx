import { useLocation } from 'react-router-dom';
import SearchForm from "../../components/searchForm/SearchForm";
import { ListTrainCard } from "./components/ListTrainCard";
import { useState, useEffect } from "react";
import { ListTrainInSchedule } from "/src/service/TrainService.js";

export const Booking = () => {
    const location = useLocation();
    const [trains, setTrains] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showSearchForm, setShowSearchForm] = useState(false); // Trạng thái hiển thị form
    const [scheduleInfo, setScheduleInfo] = useState(null); // Thêm state để lưu thông tin lịch trình

    // State để lưu các thông tin từ query parameters
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [tripType, setTripType] = useState('');

    // Lấy các thông tin từ query parameters khi component được mount
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const departureFromQuery = queryParams.get('departure') || '';
        const arrivalFromQuery = queryParams.get('arrival') || '';
        const departureDateFromQuery = queryParams.get('departureDate') || '';
        const returnDateFromQuery = queryParams.get('returnDate') || '';
        const tripTypeFromQuery = queryParams.get('tripType') || 'oneWay';

        setDeparture(departureFromQuery);
        setArrival(arrivalFromQuery);
        setDepartureDate(departureDateFromQuery);
        setReturnDate(returnDateFromQuery);
        setTripType(tripTypeFromQuery);

        // Gọi hàm tìm kiếm khi thông tin đã được lấy
        if (departureFromQuery && arrivalFromQuery && departureDateFromQuery) {
            handleSearch({
                departure: departureFromQuery,
                arrival: arrivalFromQuery,
                departureDate: departureDateFromQuery,
                returnDate: returnDateFromQuery,
                tripType: tripTypeFromQuery,
            });
        }
    }, [location.search]);

    // Hàm xử lý kết quả tìm kiếm từ form
    const handleSearch = async (searchResult) => {
        setIsLoading(true); // Bắt đầu tải dữ liệu
        try {
            const trainsData = await ListTrainInSchedule({
                departureStation: searchResult.departure,
                arrivalStation: searchResult.arrival,
                departureTime: searchResult.departureDate,
            });
            setTrains(trainsData); // Cập nhật danh sách tàu
            setScheduleInfo(searchResult); // Lưu thông tin lịch trình
            setShowSearchForm(false); // Ẩn form sau khi tìm kiếm xong
        } catch (error) {
            console.error("Lỗi khi tải dữ liệu tàu:", error);
        } finally {
            setIsLoading(false); // Kết thúc tải dữ liệu
        }
    };

    return (
        <div className="flex h-screen">
            {/* Cột bên trái */}
            <div className="w-1/4 bg-gray-100 p-4 rounded-lg mr-4 h-full">
                {/* Nút để hiển thị form tìm kiếm */}
                {!showSearchForm && (
                    <div className="text-center mb-4">
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                            onClick={() => setShowSearchForm(true)}
                        >
                            Chọn lịch trình khác
                        </button>
                    </div>
                )}

                {/* Form tìm kiếm khi showSearchForm là true */}
                {showSearchForm && (
                    <div>
                        <SearchForm
                            onSearch={handleSearch}
                            initialValues={{
                                departure,
                                arrival,
                                departureDate,
                                returnDate,
                                tripType
                            }}
                        />
                        {/* Nút để ẩn form */}
                        <div className="text-center mt-4">
                            <button
                                className="bg-gray-500 text-white px-4 py-2 rounded"
                                onClick={() => setShowSearchForm(false)}
                            >
                                Ẩn form
                            </button>
                        </div>
                    </div>
                )}

                {/* Hiển thị thông tin lịch trình nếu có */}
                {scheduleInfo && (
                    <div className="mt-1">
                        <h2 className="text-xl font-bold mb-2">Thông tin lịch trình:</h2>
                        <p><strong>Ga đi:</strong> {scheduleInfo.departure}</p>
                        <p><strong>Ga đến:</strong> {scheduleInfo.arrival}</p>
                        <p><strong>Ngày đi:</strong> {scheduleInfo.departureDate}</p>
                        {scheduleInfo.returnDate && <p><strong>Ngày về:</strong> {scheduleInfo.returnDate}</p>}
                        <p><strong>Loại chuyến:</strong> {scheduleInfo.tripType === 'oneWay' ? 'Một chiều' : 'Khứ hồi'}</p>
                    </div>
                )}
            </div>

            {/* Cột bên phải: danh sách tàu */}
            <div className="w-2/3 h-full">
                {isLoading ? (
                    <h1>Đang tải dữ liệu...</h1>
                ) : (
                    <ListTrainCard trains={trains} />
                )}
            </div>
        </div>
    );
};
