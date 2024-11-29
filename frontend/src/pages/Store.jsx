import React from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Store() {
  return (
    <div className="bg-[#d9d9d9] w-full h-full ">
      <Header></Header>
      <div className="flex mx-20 my-14 gap-10 font-roboto">
        <div id="side-container" className="flex flex-col gap-y-7 w-[400px]">
          <div
            id="danh-muc-san-pham"
            className="flex flex-col gap-4 rounded-lg bg-white shadow-xl p-6"
          >
            <h3 className="font-semibold text-xl mb-2">Danh mục sản phẩm</h3>
            <div>PC Gaming- Máy tính chơi game</div>
            <div>PC Workstation</div>
            <div>PC VĂN PHÒNG</div>
            <div>PC AMD GAMING</div>
            <div>PC Core Ultra</div>
            <div>PC GIẢ LẬP - ẢO HÓA</div>
            <div>PC MINI</div>
            <div>Linh kiện máy tính</div>
            <div>Build PC theo nhu cầu</div>
            <div>Màn hình</div>
          </div>
          <div
            id="nha-cung-cap"
            className="flex flex-col gap-4 rounded-lg bg-white shadow-xl p-6"
          >
            <h3 className="font-semibold text-xl mb-2">Nhà cung cấp</h3>
            <div className="flex gap-2">
              <input type="checkbox" />
              <div>AMD</div>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <div>INTEL</div>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <div>NVIDIA</div>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <div>DELL</div>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <div>ASUS</div>
            </div>
          </div>
          <div
            id="loc-gia"
            className="flex flex-col gap-4 rounded-lg bg-white shadow-xl p-6"
          >
            <h3 className="font-semibold text-xl mb-2">Lọc giá</h3>
            <div className="flex gap-2">
              <input type="checkbox" />
              <div>Dưới 5.000.000₫</div>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <div>5.000.000₫ - 10.000.000₫</div>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <div>10.000.000₫ - 15.000.000₫</div>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <div>15.000.000₫ - 20.000.000₫</div>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <div>Trên 20.000.000₫</div>
            </div>
          </div>
        </div>
        <div
          id="product-container"
          className="bg-white shadow-xl lg:w-full min-w-[250px] py-6 px-6 overflow-auto rounded-lg grid grid-cols-4 gap-2"
        >
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Store;
