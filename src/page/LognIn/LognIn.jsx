import React, { useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import axios from "axios"; // Nhớ kiểm tra đã cài axios trong dự án hay chưa

export default function LognIn() {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        userName,
        password,
      });
      alert(response.data); // Thông báo đăng nhập thành công
    } catch (error) {
      alert(error.response?.data || "Đã xảy ra lỗi!"); // Thông báo lỗi nếu có
    }
  };

  return (
    <section className="h-screen">
      <div className="container h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <form>
              <TEInput
                type="email"
                label="Email address"
                size="lg"
                className="mb-6 text-black"
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
              />
              <TEInput
                type="password"
                label="Password"
                className="mb-6 text-black"
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="mb-6 flex items-center justify-between">
                <div className="block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none hover:cursor-pointer"
                    type="checkbox"
                    value=""
                    id="exampleCheck3"
                    defaultChecked
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="exampleCheck3"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#!"
                  className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700"
                >
                  Forgot password?
                </a>
              </div>
              <TERipple rippleColor="light" className="w-full">
                <button
                  type="button"
                  className="inline-block w-full rounded bg-blue-600 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700"
                  onClick={handleLogin}
                >
                  Sign in
                </button>
              </TERipple>
              <div className="my-4 flex items-center before:flex-1 before:border-t before:border-neutral-300 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold">OR</p>
              </div>
              <TERipple rippleColor="light" className="w-full">
                <a
                  className="mb-3 flex w-full items-center justify-center rounded bg-blue-800 px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-blue-900 focus:bg-blue-900"
                  href="#!"
                  role="button"
                >
                  Continue with Facebook
                </a>
              </TERipple>
              <TERipple rippleColor="light" className="w-full">
                <a
                  className="mb-3 flex w-full items-center justify-center rounded bg-red-600 px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-red-700 focus:bg-red-700"
                  href="#!"
                  role="button"
                >
                  Continue with Google
                </a>
              </TERipple>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
