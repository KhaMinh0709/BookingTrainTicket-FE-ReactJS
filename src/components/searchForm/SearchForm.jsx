import { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';

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
        <form className="search-form" onSubmit={handleSubmit}>
            <h2 className="form-title">Tìm chuyến</h2>
            <div className="trip-type">
                <button
                    type="button"
                    className={`trip-button ${tripType === 'oneWay' ? 'active' : ''}`}
                    onClick={() => setTripType('oneWay')}
                >
                    Một chiều
                </button>
                <button
                    type="button"
                    className={`trip-button ${tripType === 'roundTrip' ? 'active' : ''}`}
                    onClick={() => setTripType('roundTrip')}
                >
                    Khứ hồi
                </button>
            </div>
            <div className="location-selection">
                <label>
                    Nơi đi
                    <select value={departure} onChange={(e) => setDeparture(e.target.value)}>
                        <option value="">Chọn nơi đi</option>
                        {provinces.map((province) => (
                            <option key={province} value={province}>
                                {province}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Nơi đến
                    <select value={arrival} onChange={(e) => setArrival(e.target.value)}>
                        <option value="">Chọn nơi đến</option>
                        {provinces.map((province) => (
                            <option key={province} value={province}>
                                {province}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div className="date-selection">
                <label>
                    Ngày đi
                    <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
                </label>
                {tripType === 'roundTrip' && (
                    <label>
                        Ngày về (Khứ hồi)
                        <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
                    </label>
                )}
            </div>
            <button type="submit" className="search-button">TÌM</button>
        </form>
    );
};

SearchForm.propTypes = {
    onSearch: PropTypes.func.isRequired,
    initialValues: PropTypes.shape({
        departure: PropTypes.string,
        arrival: PropTypes.string,
        departureDate: PropTypes.string,
        returnDate: PropTypes.string,
        tripType: PropTypes.string,
    }),
};
export default SearchForm;
