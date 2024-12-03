// App.js
import './index.css';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Home } from './page/home/Home';
import { TraCuu } from './page/TraCuu/TraCuu'
import { Booking } from './page/Booking/Booking';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NhaGa } from './page/nhaGa/NhaGa';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/DatVe' element={<Booking />} />
            <Route path='/TraCuu' element={<TraCuu />} />
            <Route path='/NhaGa' element={<NhaGa />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}
