import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import ProductCarousel from "../components/ProductCarousel";
import HeroSection01 from "../components/HeroSection01";
import Category from "../components/Category";
import HeroSection02 from "../components/HeroSection02";
import ProductList from "../components/ProductList";
import LatestBlog from "../components/LatestBlog";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Carousel></Carousel>
      <div className="text-left text-[28px] mt-[50px] mb-4 ml-20 font-semibold">
        BÁN CHẠY NHẤT
      </div>
      <ProductList></ProductList>
      <HeroSection01></HeroSection01>
      <div className="text-left text-[28px] mt-[50px] mb-4 ml-20 font-semibold">
        PC BÁN CHẠY NHẤT
      </div>
      <ProductList></ProductList>
      <HeroSection02></HeroSection02>
      <div className="text-left text-[28px] mt-[50px] mb-4 ml-20 font-semibold">
        TAI NGHE GAMING BÁN CHẠY NHẤT
      </div>
      <ProductList></ProductList>
      <Category></Category>
      <LatestBlog></LatestBlog>
      <Footer></Footer>
    </div>
  );
}
