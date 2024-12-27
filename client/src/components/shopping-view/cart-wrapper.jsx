import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import UserCartItemsContent from "./cart-items-content";

function UserCartWrapper({ cartItems, setOpenCartSheet }) {
  const navigate = useNavigate();

  const totalCartAmount =
    cartItems && cartItems.length > 0
      ? cartItems.reduce(
          (sum, currentItem) =>
            sum +
            (currentItem?.productSalePrice > 0
              ? currentItem?.productSalePrice
              : currentItem?.productPrice) *
              currentItem?.quantity,
          0
        )
      : 0;

  return (
    <SheetContent className="sm:max-w-md overflow-y-scroll max-h-screen">
      <SheetHeader>
        <SheetTitle>Giỏ hàng</SheetTitle>
      </SheetHeader>
      <div className="mt-8 space-y-4">
        {cartItems && cartItems.length > 0
          ? cartItems.map((item) => <UserCartItemsContent cartItem={item} />)
          : null}
      </div>
      <div className="mt-8 space-y-4">
        <div className="flex justify-between">
          <span className="font-bold">Tổng số tiền</span>
          <span className="font-bold text-red-500">
            {totalCartAmount.toLocaleString()}đ
          </span>
        </div>
      </div>
      <Button
        onClick={() => {
          navigate("/checkout");
          setOpenCartSheet(false);
        }}
        className="w-full mt-6"
      >
        Thanh toán
      </Button>
    </SheetContent>
  );
}

export default UserCartWrapper;