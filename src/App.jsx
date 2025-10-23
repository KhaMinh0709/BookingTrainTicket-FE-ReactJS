// App.js
import './index.css';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { TraCuu } from './page/TraCuu/TraCuu'
import { Booking } from './page/Booking/Booking';
import BookingDetail from './page/Booking/BookingDetail';
import BookingPayment from './page/Booking/BookingPayment';
import TourList from './page/Tour/TourList';
import TourDetail from './page/Tour/TourDetail';
import KhuyenMai from './page/KhuyenMai/KhuyenMai';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NhaGa } from './page/nhaGa/NhaGa';
import StationDetail from './page/nhaGa/StationDetail';
import LognIn from './page/LognIn/LognIn';
import Contact from './page/Contact/Contact';
import Home from './page/home/Home';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/DatVe' element={<Booking />} />
            <Route path='/DatVe/detail' element={<BookingDetail />} />
            <Route path='/TraCuu' element={<TraCuu />} />
            <Route path='/DatVe/payment' element={<BookingPayment />} />
            <Route path='/NhaGa' element={<NhaGa />} />
            <Route path='/NhaGa/:id' element={<StationDetail />} />
              <Route path='/tour' element={<TourList />} />
              <Route path='/tour/:id' element={<TourDetail />} />
            <Route path='/khuyenmai' element={<KhuyenMai />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/DangNhap' element={<LognIn />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}
