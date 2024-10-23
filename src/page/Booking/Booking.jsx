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

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-100 rounded-lg mr-9 h-full">
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
              onSearch={handleSearch}
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
                Ẩn Form
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="w-3/4">
        <ListTrainCard trains={trains} isLoading={isLoading} />
      </div>
    </div>
  );
};
