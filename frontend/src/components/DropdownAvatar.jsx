import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signOut } from "../redux/user/userSlice";

const DropdownAvatar = () => {
  return (
    <div className="flex text-[15px] max-lg:py-2 px-3">
      <FlyoutLink href="#" FlyoutContent={PricingContent}>
        <BsPersonCircle className="size-[25px] cursor-pointer text-black"></BsPersonCircle>
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-white">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-[#007bff] transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute -left-20 top-[65px] bg-white text-black rounded-lg shadow-2xl"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute right-5 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await fetch("http://localhost:8080/sign-out", {
        method: "GET",
        credentials: "include",
      });
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };
  const { currentUser } = useSelector((state) => state.user);
  if (!currentUser) {
    return (
      <div className="w-64 bg-white p-6 shadow-2xl rounded-lg font-roboto">
        <Link to="/sign-in">
          <button className="w-full mb-2 rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white cursor-pointer">
            Đăng nhập
          </button>
        </Link>
        <Link to="/sign-up">
          <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white cursor-pointer">
            Đăng ký
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="w-64 bg-white p-6 shadow-2xl rounded-lg font-roboto font-semibold">
        <div className="mb-5 space-y-4 text-center">
          <Link
            to="/profile/voucher-wallet"
            className="block text-sm hover:underline"
          >
            Ví Voucher
          </Link>
          <Link to="/profile/orders" className="block text-sm hover:underline">
            Lịch sử đơn hàng
          </Link>
          <Link
            to="/profile/user-address"
            className="block text-sm hover:underline"
          >
            Sổ địa chỉ
          </Link>
          <Link to="/profile/info" className="block text-sm hover:underline">
            Cài đặt tài khoản
          </Link>
          <Link to="/profile/reviews" className="block text-sm hover:underline">
            Đánh giá và phản hồi
          </Link>
          <Link to="/profile/faq" className="block text-sm hover:underline">
            FAQ & Chính sách
          </Link>
        </div>
        <button
          onClick={handleSignOut}
          className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white cursor-pointer"
        >
          Đăng xuất
        </button>
      </div>
    );
  }
};

export default DropdownAvatar;
