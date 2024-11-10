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
      <HeroSection01></HeroSection01>
      <ProductCarousel></ProductCarousel>
      <Category></Category>
      <HeroSection02></HeroSection02>
      <ProductList></ProductList>
      <LatestBlog></LatestBlog>
      <Footer></Footer>
    </div>
  );
}
