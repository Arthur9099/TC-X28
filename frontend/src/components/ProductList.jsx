import React from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <div class="font-sans py-4 px-20 w-full">
      <div class="flex gap-4">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </div>
  );
}

export default ProductList;
