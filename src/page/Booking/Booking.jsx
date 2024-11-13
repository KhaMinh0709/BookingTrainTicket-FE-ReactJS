import SearchForm from "../../components/searchForm/SearchForm";
import { ListTrainCard } from "./components/ListTrainCard";
import { useTrainSearch } from "../../hooks/useTrainSearch";
import { useState } from "react";

export const Booking = () => {
  const {
    trains,
    isLoading,
    departure,
    arrival,
    departureDate,
    returnDate,
    tripType,
    handleSearch,
  } = useTrainSearch();

  const [showSearchForm, setShowSearchForm] = useState(false);
  const [tripDetails, setTripDetails] = useState(null);
  const handleSearchClick = (searchParams) => {
    handleSearch(searchParams);
    setShowSearchForm(false); // Ẩn form tìm kiếm
    setTripDetails({
      departure: searchParams.departure,
      arrival: searchParams.arrival,
      departureDate: searchParams.departureDate,
      returnDate: searchParams.returnDate,
      tripType: searchParams.tripType,
    });
  };

  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-300 rounded-lg mr-9 h-full">
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

        {showSearchForm && (
          <div>
            <SearchForm
              onSearch={handleSearchClick} // Gọi hàm handleSearchClick khi tìm kiếm
              initialValues={{
                departure,
                arrival,
                departureDate,
                returnDate,
                tripType,
              }}
            />
            <div className="text-center mt-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setShowSearchForm(false)}
              >
                Ẩn
              </button>
            </div>
          </div>
        )}

        {tripDetails && (
          <div className="p-4 bg-white rounded shadow mt-4">
            <h2 className="text-lg font-semibold mb-2">Chi tiết chuyến đi</h2>
            <p><strong>Ga đi:</strong> {tripDetails.departure}</p>
            <p><strong>Ga đến:</strong> {tripDetails.arrival}</p>
            <p><strong>Ngày đi:</strong> {tripDetails.departureDate}</p>
            {tripDetails.tripType === "roundTrip" && (
              <p><strong>Ngày về:</strong> {tripDetails.returnDate}</p>
            )}
            <p><strong>Loại chuyến:</strong> {tripDetails.tripType === "roundTrip" ? "Khứ hồi" : "Một chiều"}</p>
          </div>
        )}
      </div>

      <div className="w-3/4">
        <ListTrainCard trains={trains} isLoading={isLoading} />
      </div>
    </div>
  );
};
