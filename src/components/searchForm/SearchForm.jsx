import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchForm.css';

export const SearchForm = () => {
  const navigate = useNavigate(); 
  const [tripType, setTripType] = useState('oneWay');
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

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

  const handleSearch = () => {
    if (!departure || !arrival || !departureDate) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    if (tripType === 'roundTrip' && returnDate && new Date(returnDate) < new Date(departureDate)) {
      alert('Ngày về phải sau ngày đi.');
      return;
    }

    const queryParams = new URLSearchParams({
      departure,
      arrival,
      departureDate,
      ...(tripType === 'roundTrip' && { returnDate })
    }).toString();

    navigate(`/DatVe?${queryParams}`);
  };

  return (
    <div className="search-form">
      <h2 className="form-title">Tìm chuyến</h2>
      <div className="trip-type">
        <button
          className={`trip-button ${tripType === 'oneWay' ? 'active' : ''}`}
          onClick={() => setTripType('oneWay')}
        >
          Một chiều
        </button>
        <button
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
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </label>
        {tripType === 'roundTrip' && (
          <label>
            Ngày về (Khứ hồi)
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </label>
        )}
      </div>
      <button onClick={handleSearch} className="search-button">TÌM</button>
    </div>
  );
};

export default SearchForm;
