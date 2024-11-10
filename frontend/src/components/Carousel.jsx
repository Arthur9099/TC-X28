import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const CarouselItem = ({ item, isActive }) => (
  <div
    className={`relative flex-shrink-0 w-full h-[86vh] transition-opacity duration-300 ${
      isActive ? "opacity-100" : "opacity-0 absolute top-0 left-0"
    }`}
  >
    <img
      src={item.image}
      alt={item.name}
      className="w-full h-full object-cover"
    />
    <div className="absolute font-archivo bottom-[300px] left-[100px] right-[100px] max-w-[100vh] bg-gradient-to-t to-transparent p-4">
      <h3 className="text-white text-xl font-bold">{item.name}</h3>
      <p className="text-white text-[60px] mt-1">{item.description}</p>
      <Link to="/store">
        <button class="w-[280px] h-[50px] px-5 py-2.5 overflow-hidden group bg-[#FFBE00] relative hover:bg-gradient-to-r hover:from-[#FFBE00] hover:to-indigo-400 text-black hover:ring-2 hover:ring-offset-2 hover:ring-indigo-400 transition-all ease-out duration-300">
          <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span class="relative text-base font-semibold">PURCHASE NOW</span>
        </button>
      </Link>
    </div>
  </div>
);

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const items = [
    {
      id: 1,
      name: "Gourmet Burger",
      description: "Juicy beef patty with premium toppings",
      image: "/images/pc-case.jpg",
    },
    {
      id: 2,
      name: "Margherita Pizza",
      description: "Classic Italian pizza with fresh mozzarella",
      image: "/images/macbook.jpg",
    },
    {
      id: 3,
      name: "Sushi Platter",
      description: "Assorted fresh sushi and sashimi",
      image: "/images/desktop.jpg",
    },
    {
      id: 4,
      name: "Grilled Salmon",
      description: "Perfectly grilled salmon with lemon butter",
      image: "/images/headset.jpg",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }
    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, index) => (
          <CarouselItem
            key={item.id}
            item={item}
            isActive={index === activeIndex}
          />
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFBE00]"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-black text-2xl" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFBE00]"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <FaChevronRight className="text-black text-2xl" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full focus:outline-none ${
              index === activeIndex ? "bg-white" : "bg-white bg-opacity-50"
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
