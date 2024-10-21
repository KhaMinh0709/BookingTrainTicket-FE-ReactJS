import FormSignIn from './components/FormSignIn';
import { HinhAnh } from './components/HinhAnh';
import { SearchForm } from '/src/components/searchForm/SearchForm.jsx';
import DetailAboutUs from './components/DetailAboutUs';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();

    const handleSearch = async (searchResult) => {
        const queryParams = new URLSearchParams({
            departure: searchResult.departure,
            arrival: searchResult.arrival,
            departureDate: searchResult.departureDate,
            returnDate: searchResult.returnDate || '',
            tripType: searchResult.tripType || '' // loại chuyến đi
        }).toString();

        navigate(`/DatVe?${queryParams}`);
    };

    return (
        <div>
            <div className='relative flex justify-center items-center h-screen'>
                <HinhAnh />
                <div className="form-container-search">
                    <SearchForm onSearch={handleSearch} />
                </div>
                <div className="form-container-signUp">
                    <FormSignIn />
                </div>
            </div>
            <div>
                <DetailAboutUs />
            </div>
        </div>
    );
};
