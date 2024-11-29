import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Store from "./pages/Store";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ShoppingCart from "./pages/ShoppingCart";
import ProductDetail from "./pages/ProductDetail";
import ProductCard from "./components/ProductCard";
import ProductList from "./components/ProductList";
import SignUpSuccessLoading from "./components/SignUpSuccessLoading";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import AddProductForm from "./components/product/AddProductForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
        <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
        <Route
          path="/sign-up/success/redirect"
          element={<SignUpSuccessLoading></SignUpSuccessLoading>}
        ></Route>
        <Route path="/store" element={<Store></Store>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about-us" element={<About></About>}></Route>
        <Route
          path="/shopping-cart"
          element={<ShoppingCart></ShoppingCart>}
        ></Route>
        <Route
          path="/product-detail"
          element={<ProductDetail></ProductDetail>}
        ></Route>
        <Route element={<PrivateRoute></PrivateRoute>}>
          <Route path="/profile/info" element={<Profile></Profile>}></Route>
          <Route path="/profile/orders" element={<Profile></Profile>}></Route>
          <Route
            path="/profile/voucher-wallet"
            element={<Profile></Profile>}
          ></Route>
          <Route
            path="/profile/user-address"
            element={<Profile></Profile>}
          ></Route>
          <Route path="/profile/reviews" element={<Profile></Profile>}></Route>
          <Route path="/profile/faq" element={<Profile></Profile>}></Route>
        </Route>

        {/* Add product test */}
        <Route
          path="/add-product"
          element={<AddProductForm></AddProductForm>}
        ></Route>
        {/* ------ */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
