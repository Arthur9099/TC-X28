import { Outlet } from "react-router-dom";
import ShoppingHeader from "../shopping-view/header";
import loginImg from "../../assets/headset.jpg";

function AuthLayout() {
  return (
    <div>
      <ShoppingHeader></ShoppingHeader>
      <div className="flex min-h-screen w-full">
        <div className="max-md:order-1 h-screen min-h-full max-sm:hidden w-1/2">
          <img
            src={loginImg}
            className="w-full h-full object-cover"
            alt="login-image"
          />
        </div>
        <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
