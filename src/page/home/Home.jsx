import FormSignIn from './components/FormSignIn';
import { HinhAnh } from './components/HinhAnh';
import { SearchForm } from '../../components/searchForm/SearchForm';
import DetailAboutUs from './components/DetailAboutUs';
import { useTrainSearch } from '../../hooks/useTrainSearch';

export const Home = () => {
    const {
        handleSearch,
      } = useTrainSearch();


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
