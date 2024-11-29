import React from "react";
import { Link, useNavigate } from "react-router-dom";

function HeroSection02() {
  return (
    <div className="bg-gradient-to-r from-indigo-900 to-purple-900 font-[sans-serif] mt-[100px]">
      <div className="relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-32 lg:px-8">
          <div className="relative z-10 text-center lg:text-left">
            <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl lg:text-7xl">
              <br className="xl:hidden" />
              <span className="text-indigo-400"> TAI NGHE GAMING</span>
            </h1>
            <p className="max-w-md mx-auto text-lg text-gray-300 sm:text-xl mt-4 md:mt-6 md:max-w-3xl">
              Thiết kế thời thượng, âm thanh sống động mang đến trải nghiệm nghe
              có một không hai
            </p>

            <div className="mt-12 flex max-sm:flex-col sm:justify-center lg:justify-start gap-4">
              <div className="rounded-md shadow"></div>
              <div>
                <Link to="/about-us">
                  <button className="w-full flex items-center justify-center px-8 py-3 text-base tracking-wide rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition duration-150 ease-in-out">
                    Khám phá ngay
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/images/jbl-headset.jpg"
            alt="Delicious Food"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection02;
