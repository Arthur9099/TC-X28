import React from "react";
import { FaMicrochip } from "react-icons/fa6";
import { PiGraphicsCardFill } from "react-icons/pi";
import { BsMotherboardFill } from "react-icons/bs";
import { RiRamFill } from "react-icons/ri";
import { BsDeviceSsdFill } from "react-icons/bs";

function ProductCard() {
  return (
    <div class="bg-gray-100 p-3 font-roboto rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
      <div class="w-full h-[350px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
        <img
          src="https://dummyimage.com/300x350/f3f4f6/000000"
          alt="product1"
          class="h-full w-full object-contain"
        />
      </div>

      <div class="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-3 rounded-lg transition-all duration-300">
        <div class="text-left text-sm">
          <div className="gap-1 flex">
            <FaMicrochip />
            <div className="">Ultra 7 265K</div>
          </div>
          <div className="flex gap-1 pt-1">
            <PiGraphicsCardFill />
            <div className="pr-4">RTX 4080 Super</div>
            <BsMotherboardFill />
            <div>Z890</div>
          </div>
          <div className="flex gap-1 pt-1">
            <RiRamFill />
            <div className="pr-4">32GB</div>
            <BsDeviceSsdFill />
            <div>1TB</div>
          </div>
        </div>

        <div class="flex justify-center space-x-1 mt-4">
          <svg
            class="w-4 fill-[#facc15]"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            class="w-4 fill-[#facc15]"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            class="w-4 fill-[#facc15]"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            class="w-4 fill-[#facc15]"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            class="w-4 fill-[#CED5D8]"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
        </div>
      </div>
      <p className="text-lg">ASUS Back to Future</p>
      <p className="font-semibold text-red-700">10.000.000đ</p>
    </div>
  );
}

export default ProductCard;
