import FormSignIn from './components/FormSignIn';
import { HinhAnh } from './components/HinhAnh';
import { SearchForm } from '/src/components/searchForm/SearchForm.jsx';
import DetailAboutUs from './components/DetailAboutUs';

export const Home = () => {
    return (
    <div>
          <div className='relative flex justify-center items-center h-screen'>
            <HinhAnh/>  
            <div className="form-container-search"> 
                <SearchForm />
            </div>
            <div className="form-container-signUp"> 
                <FormSignIn />
            </div>
        </div>
        <div>
            <DetailAboutUs/>
        </div>

    </div>
      
    );
};
