import React from "react";

function LatestBlog() {
  return (
    <div class="bg-white font-[sans-serif] my-[100px]">
      <div class="max-w-6xl mx-auto">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">
            Tin tức công nghệ và khuyến mãi
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">
          <div class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
            <img
              src="https://readymadeui.com/Imagination.webp"
              alt="Blog Post 1"
              class="w-full h-60 object-cover"
            />
            <div class="p-6">
              <span class="text-sm block text-gray-400 mb-2">
                10 FEB 2023 | BY JOHN DOE
              </span>
              <h3 class="text-xl font-bold text-gray-800">
                A Guide to Igniting Your Imagination
              </h3>
              <hr class="my-4" />
              <p class="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                accumsan, nunc et tempus blandit, metus mi consectetur felis
                turpis vitae ligula.
              </p>
            </div>
          </div>
          <div class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
            <img
              src="https://readymadeui.com/hacks-watch.webp"
              alt="Blog Post 2"
              class="w-full h-60 object-cover"
            />
            <div class="p-6">
              <span class="text-sm block text-gray-400 mb-2">
                7 JUN 2023 | BY MARK ADAIR
              </span>
              <h3 class="text-xl font-bold text-gray-800">
                Hacks to Supercharge Your Day
              </h3>
              <hr class="my-4" />
              <p class="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                accumsan, nunc et tempus blandit, metus mi consectetur felis
                turpis vitae ligula.
              </p>
            </div>
          </div>
          <div class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
            <img
              src="https://readymadeui.com/prediction.webp"
              alt="Blog Post 3"
              class="w-full h-60 object-cover"
            />
            <div class="p-6">
              <span class="text-sm block text-gray-400 mb-2">
                5 OCT 2023 | BY SIMON KONECKI
              </span>
              <h3 class="text-xl font-bold text-gray-800">
                Trends and Predictions
              </h3>
              <hr class="my-4" />
              <p class="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                accumsan, nunc et tempus blandit, metus mi consectetur felis
                turpis vitae ligula.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestBlog;
