import React from "react";
import { Link, useNavigate } from "react-router-dom";

function HeroSection01() {
  return (
    <div class="grid md:grid-cols-2 items-center md:gap-4 gap-8 font-archivo max-w-5xl max-md:max-w-md mx-auto mt-10 mb-10">
      <div class="max-md:order-1 max-md:text-center">
        <h3 class="text-gray-800 md:text-3xl text-2xl md:leading-10">
          Prompt Delivery and Enjoyable Dining Experience.
        </h3>
        <p class="mt-4 text-sm text-gray-600">
          Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla
          officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad
          tempor ut reprehenderit.
        </p>
        <Link to="/store">
          <button class="w-[280px] h-[50px] px-5 py-2.5 overflow-hidden group bg-[#FFBE00] relative hover:bg-gradient-to-r hover:from-[#FFBE00] hover:to-indigo-400 text-black hover:ring-2 hover:ring-offset-2 hover:ring-indigo-400 transition-all ease-out duration-300">
            <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span class="relative text-base font-semibold">PURCHASE NOW</span>
          </button>
        </Link>
      </div>
      <div class="md:h-[470px]">
        <img
          src="/images/black-friday-no-bg.png"
          class="w-full h-full md:object-contain"
        />
      </div>
    </div>
  );
}

export default HeroSection01;
