import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { Link, useMatch } from "react-router-dom";
import { useState } from "react";
import InfoModal from "../components/InfoModal";

function Profile() {
  return (
    <div className="bg-[#d9d9d9] h-screen ">
      <Header></Header>
      <div className="flex mx-20 my-14 gap-20 font-roboto">
        <ProfileSideBar></ProfileSideBar>
        <ProfileForm></ProfileForm>
      </div>
    </div>
  );
}

function ProfileSideBar() {
  const profileInfo = useMatch("/profile/info");
  const profileOrders = useMatch("/profile/orders");
  const profileVoucherWallet = useMatch("/profile/voucher-wallet");
  const profileUserAddress = useMatch("/profile/user-address");
  const profileReviews = useMatch("profile/reviews");
  const profileFaq = useMatch("/profile/faq");

  return (
    <nav
      id="profile-sidebar"
      className="bg-white shadow-xl lg:w-[600px] min-w-[250px] py-6 overflow-auto rounded-lg "
    >
      <div className="flex flex-col">
        <ul className="space-y-3 flex-1">
          <li>
            <Link
              to="/profile/info"
              href="javascript:void(0)"
              className={
                profileInfo
                  ? "text-base flex items-center text-[#007bff] border-r-[5px] border-[#077bff] bg-gray-100 px-8 py-4 transition-all"
                  : "text-black text-base flex items-center hover:text-[#007bff] hover:border-r-[5px] border-[#077bff] hover:bg-gray-100 px-8 py-4 transition-all"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-[18px] h-[18px] mr-4"
                viewBox="0 0 512 512"
              >
                <path
                  d="M197.332 170.668h-160C16.746 170.668 0 153.922 0 133.332v-96C0 16.746 16.746 0 37.332 0h160c20.59 0 37.336 16.746 37.336 37.332v96c0 20.59-16.746 37.336-37.336 37.336zM37.332 32A5.336 5.336 0 0 0 32 37.332v96a5.337 5.337 0 0 0 5.332 5.336h160a5.338 5.338 0 0 0 5.336-5.336v-96A5.337 5.337 0 0 0 197.332 32zm160 480h-160C16.746 512 0 495.254 0 474.668v-224c0-20.59 16.746-37.336 37.332-37.336h160c20.59 0 37.336 16.746 37.336 37.336v224c0 20.586-16.746 37.332-37.336 37.332zm-160-266.668A5.337 5.337 0 0 0 32 250.668v224A5.336 5.336 0 0 0 37.332 480h160a5.337 5.337 0 0 0 5.336-5.332v-224a5.338 5.338 0 0 0-5.336-5.336zM474.668 512h-160c-20.59 0-37.336-16.746-37.336-37.332v-96c0-20.59 16.746-37.336 37.336-37.336h160c20.586 0 37.332 16.746 37.332 37.336v96C512 495.254 495.254 512 474.668 512zm-160-138.668a5.338 5.338 0 0 0-5.336 5.336v96a5.337 5.337 0 0 0 5.336 5.332h160a5.336 5.336 0 0 0 5.332-5.332v-96a5.337 5.337 0 0 0-5.332-5.336zm160-74.664h-160c-20.59 0-37.336-16.746-37.336-37.336v-224C277.332 16.746 294.078 0 314.668 0h160C495.254 0 512 16.746 512 37.332v224c0 20.59-16.746 37.336-37.332 37.336zM314.668 32a5.337 5.337 0 0 0-5.336 5.332v224a5.338 5.338 0 0 0 5.336 5.336h160a5.337 5.337 0 0 0 5.332-5.336v-224A5.336 5.336 0 0 0 474.668 32zm0 0"
                  data-original="#000000"
                />
              </svg>
              <span>Thông tin tài khoản</span>
            </Link>
          </li>
          <li>
            <Link
              to="/profile/orders"
              href="javascript:void(0)"
              className={
                profileOrders
                  ? "text-base flex items-center text-[#007bff] border-r-[5px] border-[#077bff] bg-gray-100 px-8 py-4 transition-all"
                  : "text-black text-base flex items-center hover:text-[#007bff] hover:border-r-[5px] border-[#077bff] hover:bg-gray-100 px-8 py-4 transition-all"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-[18px] h-[18px] mr-4"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13 .5H3A2.503 2.503 0 0 0 .5 3v10A2.503 2.503 0 0 0 3 15.5h10a2.503 2.503 0 0 0 2.5-2.5V3A2.503 2.503 0 0 0 13 .5ZM14.5 13a1.502 1.502 0 0 1-1.5 1.5H3A1.502 1.502 0 0 1 1.5 13v-.793l3.5-3.5 1.647 1.647a.5.5 0 0 0 .706 0L10.5 7.207V8a.5.5 0 0 0 1 0V6a.502.502 0 0 0-.5-.5H9a.5.5 0 0 0 0 1h.793L7 9.293 5.354 7.647a.5.5 0 0 0-.707 0L1.5 10.793V3A1.502 1.502 0 0 1 3 1.5h10A1.502 1.502 0 0 1 14.5 3Z"
                  data-original="#000000"
                />
              </svg>
              <span>Lịch sử đơn hàng</span>
            </Link>
          </li>
          <li>
            <Link
              to="/profile/voucher-wallet"
              href="javascript:void(0)"
              className={
                profileVoucherWallet
                  ? "text-base flex items-center text-[#007bff] border-r-[5px] border-[#077bff] bg-gray-100 px-8 py-4 transition-all"
                  : "text-black text-base flex items-center hover:text-[#007bff] hover:border-r-[5px] border-[#077bff] hover:bg-gray-100 px-8 py-4 transition-all"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-[18px] h-[18px] mr-4"
                viewBox="0 0 512 512"
              >
                <path
                  d="M122.39 165.78h244.87c10.49 0 19-8.51 19-19s-8.51-19-19-19H122.39c-10.49 0-19 8.51-19 19s8.51 19 19 19zm164.33 99.44c0-10.49-8.51-19-19-19H122.39c-10.49 0-19 8.51-19 19s8.51 19 19 19h145.33c10.49 0 19-8.51 19-19z"
                  data-original="#000000"
                />
                <path
                  d="M486.63 323.71c2.04-22.33 3.41-48.35 3.44-78.68-.06-57.07-4.85-98.86-9.96-129.57-8.94-50.6-54.9-96.56-105.5-105.5C343.9 4.85 302.11.06 245.03 0c-57.07.06-98.87 4.85-129.58 9.96C64.86 18.9 18.9 64.86 9.96 115.46 4.85 146.17.07 187.96 0 245.03c.07 57.07 4.85 98.87 9.96 129.58 8.94 50.6 54.9 96.56 105.5 105.5 30.71 5.11 72.5 9.89 129.58 9.96 30.32-.03 56.34-1.4 78.66-3.44 19.84 15.87 45 25.37 72.38 25.37 64.02 0 115.93-51.9 115.93-115.92 0-27.38-9.5-52.54-25.37-72.37zM245.04 452.07c-45.02-.05-85.3-3.13-123.13-9.41-16.81-3.01-33.84-12.44-47.95-26.55s-23.53-31.13-26.55-47.95c-6.28-37.79-9.35-78.07-9.41-123.13.05-45.04 3.13-85.32 9.41-123.13 3.01-16.81 12.44-33.83 26.55-47.94s31.13-23.53 47.95-26.55C159.72 41.13 200 38.06 245.04 38c45.02.05 85.3 3.13 123.13 9.41 16.81 3.01 33.83 12.44 47.95 26.55 14.11 14.11 23.53 31.13 26.55 47.95 6.28 37.83 9.35 78.1 9.41 123.13-.02 16.9-.48 33.11-1.36 48.79-16.28-8.72-34.88-13.66-54.64-13.66-64.02 0-115.93 51.9-115.93 115.92 0 19.76 4.95 38.35 13.66 54.63-15.68.88-31.89 1.34-48.78 1.35zM396.08 474c-42.97 0-77.93-34.95-77.93-77.92s34.96-77.92 77.93-77.92 77.93 34.95 77.93 77.92S439.05 474 396.08 474z"
                  data-original="#000000"
                />
                <path
                  d="M406.28 418.24c-2.42-.4-5.71-.78-10.2-.78s-7.78.38-10.2.78c-3.98.7-7.6 4.32-8.31 8.31-.4 2.42-.78 5.71-.78 10.2s.38 7.78.78 10.2c.7 3.98 4.32 7.6 8.31 8.31 2.42.4 5.71.78 10.2.78s7.78-.38 10.2-.78c3.98-.7 7.6-4.32 8.31-8.31.4-2.42.78-5.71.78-10.2s-.38-7.78-.78-10.2c-.7-3.98-4.32-7.6-8.31-8.31zm-10.21-12.61c10.49 0 19-8.51 19-19v-31.7c0-10.49-8.51-19-19-19s-19 8.51-19 19v31.7c0 10.49 8.51 19 19 19z"
                  data-original="#000000"
                />
              </svg>
              <span>Ví Voucher</span>
            </Link>
          </li>
          <li>
            <Link
              to="/profile/user-address"
              href="javascript:void(0)"
              className={
                profileUserAddress
                  ? "text-base flex items-center text-[#007bff] border-r-[5px] border-[#077bff] bg-gray-100 px-8 py-4 transition-all"
                  : "text-black text-base flex items-center hover:text-[#007bff] hover:border-r-[5px] border-[#077bff] hover:bg-gray-100 px-8 py-4 transition-all"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-[18px] h-[18px] mr-4"
                viewBox="0 0 511.414 511.414"
              >
                <path
                  d="M497.695 108.838a16.002 16.002 0 0 0-9.92-14.8L261.787 1.2a16.003 16.003 0 0 0-12.16 0L23.639 94.038a16 16 0 0 0-9.92 14.8v293.738a16 16 0 0 0 9.92 14.8l225.988 92.838a15.947 15.947 0 0 0 12.14-.001c.193-.064-8.363 3.445 226.008-92.837a16 16 0 0 0 9.92-14.8zm-241.988 76.886-83.268-34.207L352.39 73.016l88.837 36.495zm-209.988-51.67 71.841 29.513v83.264c0 8.836 7.164 16 16 16s16-7.164 16-16v-70.118l90.147 37.033v257.797L45.719 391.851zM255.707 33.297l55.466 22.786-179.951 78.501-61.035-25.074zm16 180.449 193.988-79.692v257.797l-193.988 79.692z"
                  data-original="#000000"
                />
              </svg>
              <span>Sổ địa chỉ</span>
            </Link>
          </li>
          <li>
            <Link
              to="/profile/reviews"
              href="javascript:void(0)"
              className={
                profileReviews
                  ? "text-base flex items-center text-[#007bff] border-r-[5px] border-[#077bff] bg-gray-100 px-8 py-4 transition-all"
                  : "text-black text-base flex items-center hover:text-[#007bff] hover:border-r-[5px] border-[#077bff] hover:bg-gray-100 px-8 py-4 transition-all"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                stroke="currentColor"
                className="w-[18px] h-[18px] mr-4"
                viewBox="0 0 682.667 682.667"
              >
                <defs>
                  <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 512h512V0H0Z" data-original="#000000" />
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
                  />
                  <path
                    d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                    data-original="#000000"
                  />
                </g>
              </svg>
              <span>Đánh giá và phản hồi</span>
            </Link>
          </li>
          <li>
            <Link
              to="/profile/faq"
              href="javascript:void(0)"
              className={
                profileFaq
                  ? "text-base flex items-center text-[#007bff] border-r-[5px] border-[#077bff] bg-gray-100 px-8 py-4 transition-all"
                  : "text-black text-base flex items-center hover:text-[#007bff] hover:border-r-[5px] border-[#077bff] hover:bg-gray-100 px-8 py-4 transition-all"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-[18px] h-[18px] mr-4"
                viewBox="0 0 193.769 193.769"
              >
                <path
                  d="m149.203 41.104-9.348 12.009c20.15 15.679 30.201 41.063 26.234 66.253-2.906 18.484-12.838 34.73-27.964 45.748-15.131 11.012-33.64 15.488-52.124 12.567-38.157-6.008-64.32-41.938-58.322-80.098C30.585 79.097 40.52 62.85 55.648 51.835c13.208-9.615 28.991-14.233 45.086-13.317L87.579 52.319l9.759 9.313 20.766-21.801.005.008 9.303-9.769-9.752-9.303-.005.003L95.862 0l-9.31 9.769 14.2 13.525c-19.303-.913-38.21 4.702-54.059 16.242C28.28 52.943 16.19 72.717 12.65 95.221c-7.302 46.445 24.54 90.184 70.985 97.493a86.181 86.181 0 0 0 13.434 1.055c17.89 0 35.273-5.623 50.011-16.356 18.415-13.409 30.503-33.183 34.043-55.682 4.829-30.654-7.403-61.55-31.92-80.627z"
                  data-original="#000000"
                />
                <path
                  d="M105.24 151.971v-.003h.001v-8.757c10.383-1.159 20.485-7.718 20.485-20.17 0-16.919-15.732-18.859-27.223-20.274-7.347-.878-12.97-1.897-12.97-6.348 0-6.188 8.722-6.855 12.473-6.855 5.567 0 11.507 2.617 13.525 5.957l.586.971 11.542-5.341-.571-1.164c-4.301-8.793-12.009-11.337-17.85-12.364v-7.71H91.723v7.677c-12.582 1.856-20.054 8.839-20.054 18.829 0 16.29 14.791 17.943 25.582 19.153 9.617 1.134 14.094 3.51 14.094 7.469 0 7.563-10.474 8.154-13.685 8.154-7.147 0-14.038-3.566-16.031-8.301l-.495-1.169-12.539 5.316.5 1.169c3.713 8.691 11.725 14.137 22.63 15.425v8.336h13.515z"
                  data-original="#000000"
                />
              </svg>
              <span>Chính sách & Câu hỏi thường gặp</span>
            </Link>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              className="text-black text-base flex items-center hover:text-[#007bff] hover:border-r-[5px] border-[#077bff] hover:bg-gray-100 px-8 py-4 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-[18px] h-[18px] mr-4"
                viewBox="0 0 193.769 193.769"
              >
                <path
                  d="m149.203 41.104-9.348 12.009c20.15 15.679 30.201 41.063 26.234 66.253-2.906 18.484-12.838 34.73-27.964 45.748-15.131 11.012-33.64 15.488-52.124 12.567-38.157-6.008-64.32-41.938-58.322-80.098C30.585 79.097 40.52 62.85 55.648 51.835c13.208-9.615 28.991-14.233 45.086-13.317L87.579 52.319l9.759 9.313 20.766-21.801.005.008 9.303-9.769-9.752-9.303-.005.003L95.862 0l-9.31 9.769 14.2 13.525c-19.303-.913-38.21 4.702-54.059 16.242C28.28 52.943 16.19 72.717 12.65 95.221c-7.302 46.445 24.54 90.184 70.985 97.493a86.181 86.181 0 0 0 13.434 1.055c17.89 0 35.273-5.623 50.011-16.356 18.415-13.409 30.503-33.183 34.043-55.682 4.829-30.654-7.403-61.55-31.92-80.627z"
                  data-original="#000000"
                />
                <path
                  d="M105.24 151.971v-.003h.001v-8.757c10.383-1.159 20.485-7.718 20.485-20.17 0-16.919-15.732-18.859-27.223-20.274-7.347-.878-12.97-1.897-12.97-6.348 0-6.188 8.722-6.855 12.473-6.855 5.567 0 11.507 2.617 13.525 5.957l.586.971 11.542-5.341-.571-1.164c-4.301-8.793-12.009-11.337-17.85-12.364v-7.71H91.723v7.677c-12.582 1.856-20.054 8.839-20.054 18.829 0 16.29 14.791 17.943 25.582 19.153 9.617 1.134 14.094 3.51 14.094 7.469 0 7.563-10.474 8.154-13.685 8.154-7.147 0-14.038-3.566-16.031-8.301l-.495-1.169-12.539 5.316.5 1.169c3.713 8.691 11.725 14.137 22.63 15.425v8.336h13.515z"
                  data-original="#000000"
                />
              </svg>
              <span>Đăng xuất</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function ProfileForm() {
  const profileInfo = useMatch("/profile/info");
  const profileOrders = useMatch("/profile/orders");
  const profileVoucherWallet = useMatch("/profile/voucher-wallet");
  const profileUserAddress = useMatch("/profile/user-address");
  const profileReviews = useMatch("profile/reviews");
  const profileFaq = useMatch("/profile/faq");
  const [open, setOpen] = useState(false);

  const { currentUser } = useSelector((state) => state.user);

  if (profileInfo) {
    return (
      <div
        id="profile-info"
        className="w-full h-full bg-white shadow-xl font-roboto py-12 px-20 rounded-lg overflow-auto"
      >
        <h3 className="text-4xl mb-10">Thông tin tài khoản</h3>
        <div className="text-base flex flex-col gap-y-8">
          <div className="flex">
            <div className="text-gray-400 w-[250px]">Email</div>
            <div>{currentUser.user.email}</div>
          </div>
          <div className="flex">
            <div className="text-gray-400 w-[250px]">Mật khẩu</div>
            <div>***************</div>
          </div>
          <div className="flex">
            <div className="text-gray-400 w-[250px]">Họ và tên</div>
            <div>{currentUser.user.userName}</div>
          </div>
          <div className="flex">
            <div className="text-gray-400 w-[250px]">Số điện thoại</div>
            <div>{currentUser.user.phoneNumber}</div>
          </div>
          <div className="flex">
            <div className="text-gray-400 w-[250px]">Giới tính</div>
            <div>
              {currentUser.user.gender
                ? currentUser.user.gender
                : "Chưa có thông tin"}
            </div>
          </div>
          <div className="flex">
            <div className="text-gray-400 w-[250px]">Ngày sinh</div>
            <div>
              {currentUser.user.dateOfBirth
                ? currentUser.user.dateOfBirth
                : "Chưa có thông tin"}
            </div>
          </div>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="mt-8 w-[200px] h-12 border border-black rounded-full font-semibold hover:bg-[#007bff] transition-all hover:border-none hover:text-white"
        >
          CẬP NHẬT
        </button>
        <InfoModal open={open} onClose={() => setOpen(false)}></InfoModal>
      </div>
    );
    if (profileOrders)
      return (
        <div
          id="profile-info"
          className="w-full h-full bg-white shadow-xl font-roboto py-12 px-20 rounded-lg overflow-auto"
        >
          IN PROGRESS
        </div>
      );
    if (profileVoucherWallet)
      return (
        <div
          id="profile-info"
          className="w-full h-full bg-white shadow-xl font-roboto py-12 px-20 rounded-lg overflow-auto"
        >
          IN PROGRESS
        </div>
      );
    if (profileUserAddress)
      return (
        <div
          id="profile-info"
          className="w-full h-full bg-white shadow-xl font-roboto py-12 px-20 rounded-lg overflow-auto"
        >
          IN PROGRESS
        </div>
      );
    if (profileReviews)
      return (
        <div
          id="profile-info"
          className="w-full h-full bg-white shadow-xl font-roboto py-12 px-20 rounded-lg overflow-auto"
        >
          IN PROGRESS
        </div>
      );
    if (profileFaq)
      return (
        <div
          id="profile-info"
          className="w-full h-full bg-white shadow-xl font-roboto py-12 px-20 rounded-lg overflow-auto"
        >
          IN PROGRESS
        </div>
      );
  }
}
export default Profile;
