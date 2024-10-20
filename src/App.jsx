// App.js
import './index.css';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Home } from './page/home/Home';
import { Booking } from './page/Booking/Booking';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/DatVe' element={<Booking />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}
