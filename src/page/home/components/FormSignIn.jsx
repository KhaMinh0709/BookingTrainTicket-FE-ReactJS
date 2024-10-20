import { useState } from 'react';

const FormSignIn = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập
    console.log('Đăng nhập với:', { userName, password });
  };

  return (
    <div id="formSignIn" className="bg-gray-300 rounded-[32px] px-5 py-6 gmd:p-12 flex flex-col items-start gap-8 max-w-[425px] relative z-[2]">
      <span className="text-xl leading-[30px] text-[#111928] font-semibold">Đặt vé thật đơn giản với KhaMinh Station</span>
      <form className="w-full" onSubmit={handleSignIn} noValidate>
        <div className="flex gap-6 flex-col">
          <div className="w-full">
            <input 
              className="text-base w-full" 
              type="text" 
              name="userName" 
              placeholder="Tên tài khoản*" 
              value={userName} 
              onChange={(e) => setUserName(e.target.value)} 
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="w-full">
              <input 
                type="password" 
                className="text-base w-full" 
                name="password" 
                placeholder="Mật khẩu*" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <div className="flex justify-end text-sm">
              <div className="cursor-pointer hover:underline text-[#337ab7]">Quên mật khẩu?</div>
            </div>
          </div>
          <button type="submit" className="bg-[#506CF0] text-white p-3 rounded">
            Đăng nhập
          </button>
        </div>
      </form>
      <div className="w-full flex flex-col gap-[10px]">
        <div className="w-full flex flex-row items-center gap-2">
          <span className="text-sm text-[#637381]">Hoặc tiếp tục với</span>
          <div className="flex-1 w-full h-[0.37px] bg-[#E7E7E7]"></div>
        </div>
        <div className="w-full grid grid-cols-3 gap-4">
          <button className="bg-[#F3F4F6] p-0 flex justify-center items-center">
          <img src="\src\assets\img\facebook-fb-social-icon.svg" alt="ĐN bằng fb" className="w-[1.5rem] h-[1.5rem] p-1 bg-[#37599E] rounded-sm" />
          </button>
          <button className="bg-[#F3F4F6] p-0 flex justify-center items-center">
          <img src="\src\assets\img\Google__G__logo.svg.webp" alt="ĐN bằng GG" className="w-[1.5rem] h-[1.5rem] p-1 bg-[#37599E] rounded-sm" />
          </button>
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-1 justify-center items-center text-sm text-[#111928]">
        <span>Nếu bạn chưa có tài khoản.</span>
        <span>Vui lòng <span className="text-[#506CF0] font-medium cursor-pointer">Đăng ký</span></span>
      </div>
      <div className="w-full h-px bg-[#D1D5DB]"></div>
      <div className="text-center mt-3 text-xs">
        Trang này được bảo vệ bởi reCAPTCHA và áp dụng <a href="/terms" className="underline">Điều khoản sử dụng</a>.
      </div>
    </div>
  );
};

export default FormSignIn;
