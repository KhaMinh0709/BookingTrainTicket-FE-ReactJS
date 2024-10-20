import  { useState } from 'react';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="z-[190] fixed top-0 left-0 right-0 transition-all bg-white shadow-md" id="app-header">
            <div className="container mx-auto px-5">
                <div className="header-content transition-all duration-300 justify-between flex items-center h-[68px]">
                    <div className="flex items-center gap-x-[34px] h-full">
                        <a href="/">
                            <img className="cursor-pointer w-[50px] xs:w-[15px] xs:h-[15px]" alt="logo" src="/src/assets/img/booking.jpg" />
                        </a>
                        <div className={`lg:flex ${isMenuOpen ? 'flex' : 'hidden'} h-full gap-5 text-[#3b3c54] text-[15px] font-[600]`}>
                            <a className="h-full flex items-center transition hover:text-[#2c31cf] hover:font-semibold" href="/DatVe" aria-label="Đặt Vé">Đặt Vé</a>
                            <a className="h-full flex items-center transition hover:text-[#2c31cf] hover:font-semibold" href="/TraCuu" aria-label="Tra Cứu Thông Tin vé">Tra Cứu Thông Tin vé</a>
                            <a className="h-full flex items-center transition hover:text-[#2c31cf] hover:font-semibold" href="/NhaGa" aria-label="Nhà Ga">Nhà Ga</a>
                            <a className="h-full flex items-center transition hover:text-[#2c31cf] hover:font-semibold" href="/TinDuLich" aria-label="Tin Du Lịch">Tin Du Lịch</a>
                            <a className="h-full flex items-center transition hover:text-[#2c31cf] hover:font-semibold" href="/KhuyenMai" aria-label="Khuyến Mãi">Khuyến Mãi</a>
                            <a className="h-full flex items-center transition hover:text-[#2c31cf] hover:font-semibold" href="/LienHe" aria-label="Liên Hệ Với Chúng Tôi">Liên Hệ Với Chúng Tôi</a>
                        </div>
                        <button onClick={toggleMenu} className="lg:hidden">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex h-full items-center gap-3">
                        <button className="md:block hidden bg-[#4d96ff] hover:bg-[#2c31cf] transition-all text-white font-bold py-2 px-4 rounded shadow hover:shadow-lg">
                            Đăng Nhập / Đăng Ký
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
