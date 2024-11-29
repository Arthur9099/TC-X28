import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProductForm() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await fetch("http://localhost:8080/add-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success) {
        document.getElementById("myForm").reset();
      }
    } catch (error) {}
  };
  return (
    <form
      onSubmit={handleSubmit}
      id="myForm"
      className="max-w-md mx-auto space-y-4 font-[sans-serif] text-[#333] mt-[80px]"
    >
      <input
        onChange={handleChange}
        type="text"
        id="productName"
        placeholder="Tên sản phẩm"
        className="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm outline-[#333] rounded-sm transition-all"
      />

      <input
        onChange={handleChange}
        type="text"
        id="productPrice"
        placeholder="Giá sản phẩm"
        className="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm outline-[#333] rounded-sm transition-all"
      />

      <input
        onChange={handleChange}
        type="text"
        id="productMainboard"
        placeholder="Mainboard"
        className="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm outline-[#333] rounded-sm transition-all"
      />

      <input
        onChange={handleChange}
        type="text"
        id="productCPU"
        placeholder="CPU"
        className="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm outline-[#333] rounded-sm transition-all"
      />

      <input
        onChange={handleChange}
        type="text"
        id="productRAM"
        placeholder="RAM"
        className="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm outline-[#333] rounded-sm transition-all"
      />

      <input
        onChange={handleChange}
        type="text"
        id="productVGA"
        placeholder="VGA"
        className="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm outline-[#333] rounded-sm transition-all"
      />

      <input
        onChange={handleChange}
        type="text"
        id="productHDD"
        placeholder="HDD"
        className="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm outline-[#333] rounded-sm transition-all"
      />

      <input
        onChange={handleChange}
        type="text"
        id="productSSD"
        placeholder="SSD"
        className="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm outline-[#333] rounded-sm transition-all"
      />

      <input
        onChange={handleChange}
        type="text"
        id="productPSU"
        placeholder="PSU"
        className="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm outline-[#333] rounded-sm transition-all"
      />

      <input
        onChange={handleChange}
        type="text"
        id="productCase"
        placeholder="Case"
        className="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm outline-[#333] rounded-sm transition-all"
      />

      <input
        onChange={handleChange}
        type="text"
        id="productCooling"
        placeholder="Cooling"
        className="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm outline-[#333] rounded-sm transition-all"
      />

      <button
        type="submit"
        className="!mt-8 px-6 py-2.5 text-sm bg-[#333] hover:bg-[#222] text-white rounded-sm w-full"
      >
        Submit
      </button>
    </form>
  );
}

export default AddProductForm;
