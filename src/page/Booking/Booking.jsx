import { useLocation } from 'react-router-dom';
import SearchForm from "../../components/searchForm/SearchForm";
import { ListTrainCard } from "./components/ListTrainCard";
import { useState, useEffect } from "react";
import { ListTrainInSchedule } from "/src/service/TrainService.js";

export const Booking = () => {
    const location = useLocation();
    const [trains, setTrains] = useState([]);
    
    // State để lưu các thông tin từ query parameters
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [tripType, setTripType] = useState('oneWay');

    // Lấy các thông tin từ query parameters khi component được mount
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const departureFromQuery = queryParams.get('departure');
        const arrivalFromQuery = queryParams.get('arrival');
        const departureDateFromQuery = queryParams.get('departureDate');
        const returnDateFromQuery = queryParams.get('returnDate');
        const tripTypeFromQuery = queryParams.get('tripType') || 'oneWay'; // Mặc định là oneWay nếu không có giá trị

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
        const trainsData = await ListTrainInSchedule({
            departureStation: searchResult.departure,
            arrivalStation: searchResult.arrival,
            departureTime: searchResult.departureDate,
        });
        setTrains(trainsData); // Cập nhật danh sách tàu
    };

    return (
        <div className='relative flex h-screen'>
            <div className="w-full">
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
            </div>

            <div className="w-full flex justify-center flex-wrap p-5">
                <ListTrainCard trains={trains} />
            </div>
        </div>
    );
};
