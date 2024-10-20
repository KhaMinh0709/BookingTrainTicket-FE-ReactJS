export const Footer = () => {
    return (
        <footer id="footer" className="pt-[35px]" role="contentinfo">
            <div className="Container_xl__gOWjE undefined bg-gray-100 pt-10">
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-5 pb-10">
                    <div>
                        <div className="w-[185px]">
                            <img src="src\assets\img\booking.jpg" alt="" width="185" height="61" />
                        </div>
                        <div className="text-sm my-[10px] max-w-[368px]">
                            KhaMinhStation là nền tảng đặt vé tàu một cách nhanh chóng và chính xác.
                        </div>
                        <div className="flex items-center gap-2">
                            <a href="https://www.facebook.com/khaminhne" title="Facebook" target="_blank" rel="noreferrer">
                                <img src="\src\assets\img\facebook-fb-social-icon.svg" alt="Theo dõi trên Facebook" className="w-[1.5rem] h-[1.5rem] p-1 bg-[#37599E] rounded-sm" />
                            </a>
                            <a href="https://www.youtube.com/@JavaCoffee79" title="Youtube" target="_blank" rel="noreferrer">
                                <img src="\src\assets\img\youtube.svg" alt="Theo dõi trên Youtube" className="w-[1.5rem] h-[1.5rem] p-1 bg-[#B20F0F] rounded-sm" />
                            </a>
                
                        </div>
                    </div>
                    <div className="text-sm">
                        <h4 className="text-[#2C31CF] text-base font-semibold my-[20px]">Chăm sóc khách hàng</h4>
                        <div className="my-[10px]"><a href="/help/1" className="link-menu" title="Hướng dẫn thanh toán">Hướng dẫn thanh toán</a></div>
                        <div className="my-[10px]"><a href="/help/2" className="link-menu" title="Điều kiện giao dịch chung">Điều kiện giao dịch chung</a></div>
                        <div className="my-[10px]"><a href="/help/3" className="link-menu" title="Quy trình sử dụng dịch vụ">Quy trình sử dụng dịch vụ</a></div>
                        <div className="my-[10px]"><a href="/help/4" className="link-menu" title="Chính sách bảo hành">Chính sách bảo hành</a></div>
                        <div className="my-[10px]"><a href="/help/5" className="link-menu" title="Chính sách hoàn trả hàng">Chính sách hoàn trả hàng</a></div>
                        <div className="my-[10px]"><a href="/help/6" className="link-menu" title="Chính sách bảo mật">Chính sách bảo mật</a></div>
                    </div>
                    <div className="text-sm">
                        <h4 className="text-[#2C31CF] text-base font-semibold my-[20px]">Thông tin</h4>
                        <div className="my-[10px]"><a href="/terms" title="Điều khoản sử dụng">Điều khoản sử dụng</a></div>
                    </div>
                    <div className="text-sm">
                        <h4 className="text-[#2C31CF] text-base font-semibold my-[20px]">Trợ giúp</h4>
                        <div className="my-[10px]"><a href="/help" title="Trợ giúp">Trợ giúp</a></div>
                        <div className="my-[10px]"><a target="_blank" rel="noreferrer" href="mailto:support@codelearn.io" title="Liên hệ chúng tôi">Liên hệ chúng tôi</a></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
