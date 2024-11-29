import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../utils/helper";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OAuth from "../components/OAuth";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function SignIn() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const togggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!validateEmail(email) && !password) {
      setEmailError("Vui lòng nhập email của bạn");
      document.getElementById("emailInput").style.borderColor = "red";
      setPasswordError("Vui lòng nhập mật khẩu của bạn");
      document.getElementById("passwordInput").style.borderColor = "red";
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Vui lòng nhập email của bạn");
      document.getElementById("emailInput").style.borderColor = "red";
      return;
    } else {
      setEmailError("");
      document.getElementById("emailInput").style.borderColor = "#d1d5db";
    }
    if (!password) {
      setPasswordError("Vui lòng nhập mật khẩu của bạn");
      document.getElementById("passwordInput").style.borderColor = "red";
      return;
    } else {
      setPasswordError("");
      document.getElementById("passwordInput").style.borderColor = "#d1d5db";
    }

    try {
      dispatch(signInStart());
      const res = await fetch("http://localhost:8080/sign-in", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });
      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        setPasswordError("Tài khoản hoặc mật khẩu sai");
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };
  return (
    <div>
      <Header></Header>
      <div>
        <div className="font-roboto">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 items-center gap-4">
            <div className="max-md:order-1 h-screen min-h-full max-sm:hidden">
              <img
                src="/images/headset.jpg"
                className="w-full h-full object-cover"
                alt="login-image"
              />
            </div>

            <form
              className="max-w-xl w-full p-6 mx-auto"
              onSubmit={handleSignIn}
            >
              <div className="mb-12">
                <h3 className="text-gray-800 text-4xl font-extrabold">
                  Đăng nhập
                </h3>
                <p className="text-gray-800 text-sm mt-6">
                  Bạn chưa có tài khoản?{" "}
                  <Link to="/sign-up">
                    <a
                      href="javascript:void(0);"
                      className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                    >
                      Đăng ký tại đây
                    </a>
                  </Link>
                </p>
              </div>

              <div>
                <label className="text-gray-800 text-sm block mb-2">
                  Email
                </label>
                <div className="relative flex items-center">
                  <input
                    id="emailInput"
                    name="email"
                    type="text"
                    value={email}
                    className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                    placeholder="Email của bạn"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-2"
                    viewBox="0 0 682.667 682.667"
                  >
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path
                          d="M0 512h512V0H0Z"
                          data-original="#000000"
                        ></path>
                      </clipPath>
                    </defs>
                    <g
                      clip-path="url(#a)"
                      transform="matrix(1.33 0 0 -1.33 0 682.667)"
                    >
                      <path
                        fill="none"
                        stroke-miterlimit="10"
                        stroke-width="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              {emailError && (
                <p className="text-red-500 text-sm pt-2">{emailError}</p>
              )}
              <div className="mt-8">
                <label className="text-gray-800 text-sm block mb-2">
                  Mật khẩu
                </label>
                <div className="relative flex items-center">
                  <input
                    id="passwordInput"
                    name="password"
                    type={isShowPassword ? "text" : "password"}
                    className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                    placeholder="Mật khẩu của bạn"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  {isShowPassword ? (
                    <FaRegEye
                      size={20}
                      className="text-primary cursor-pointer absolute right-2"
                      onClick={() => togggleShowPassword()}
                    ></FaRegEye>
                  ) : (
                    <FaRegEyeSlash
                      size={20}
                      className="text-slate-400 cursor-pointer absolute right-2"
                      onClick={() => togggleShowPassword()}
                    ></FaRegEyeSlash>
                  )}
                </div>
              </div>
              {passwordError && (
                <p className="text-red-500 text-sm pt-2">{passwordError}</p>
              )}
              <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    for="remember-me"
                    className="ml-3 block text-sm text-gray-800"
                  >
                    Lưu thông tin đăng nhập
                  </label>
                </div>
                <div>
                  <a
                    href="jajvascript:void(0);"
                    className="text-blue-600 font-semibold text-sm hover:underline"
                  >
                    Quên mật khẩu?
                  </a>
                </div>
              </div>

              <div className="mt-12">
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full py-2.5 overflow-hidden group bg-[#FFBE00] relative hover:bg-gradient-to-r hover:from-[#FFBE00] hover:to-indigo-400 text-black hover:ring-2 hover:ring-offset-2 hover:ring-indigo-400 transition-all ease-out duration-300"
                >
                  <span className="absolute right-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative text-base font-semibold">
                    {loading ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 animate-[spin_0.8s_linear_infinite] fill-black block mx-auto"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
                          data-original="#000000"
                        />
                      </svg>
                    ) : (
                      "ĐĂNG NHẬP"
                    )}
                  </span>
                </button>
              </div>
              <div className="my-6 flex items-center gap-4">
                <hr className="w-full border-gray-300" />
                <p className="text-sm text-gray-800 text-center">hoặc</p>
                <hr className="w-full border-gray-300" />
              </div>
              {/* <button
                type="button"
                className="w-full flex items-center justify-center gap-4 py-2.5 px-4 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-transparent hover:bg-gray-50 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  className="inline"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#fbbd00"
                    d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                    data-original="#fbbd00"
                  />
                  <path
                    fill="#0f9d58"
                    d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                    data-original="#0f9d58"
                  />
                  <path
                    fill="#31aa52"
                    d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                    data-original="#31aa52"
                  />
                  <path
                    fill="#3c79e6"
                    d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                    data-original="#3c79e6"
                  />
                  <path
                    fill="#cf2d48"
                    d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                    data-original="#cf2d48"
                  />
                  <path
                    fill="#eb4132"
                    d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                    data-original="#eb4132"
                  />
                </svg>
                Đăng nhập bằng Google
              </button> */}
              <OAuth></OAuth>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default SignIn;
