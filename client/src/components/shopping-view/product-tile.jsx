import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { brandOptionsMap, categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";

function ShoppingProductTile({
  product,
  handleGetProductDetails,
  handleAddtoCart,
}) {
  return (
    <Card className="w-full max-w-sm mx-auto rounded-lg shadow-lg">
      <div onClick={() => handleGetProductDetails(product?._id)}>
        <div className="relative">
          <img
            src={product?.productImg}
            alt={product?.productName}
            className="w-full h-[250px] object-cover rounded-t-lg p-4"
          />
          {product?.totalStock === 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              Out Of Stock
            </Badge>
          ) : product?.totalStock < 10 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              {`Only ${product?.productTotalStock} items left`}
            </Badge>
          ) : product?.productSalePrice > 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              Sale
            </Badge>
          ) : null}
        </div>
        <CardContent className="p-4">
          <h2 className="text-xl font-bold mb-2 line-clamp-2">
            {product?.productName}
          </h2>
          <div className="flex justify-between items-center mb-2">
            <span className="text-[16px] text-muted-foreground">
              {categoryOptionsMap[product?.productCategory]}
            </span>
            <span className="text-[16px] text-muted-foreground">
              {brandOptionsMap[product?.productBrand]}
            </span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span
              className={`${
                product?.productSalePrice > 0 ? "line-through" : ""
              } text-lg font-semibold text-primary text-slate-400`}
            >
              {product?.productPrice.toLocaleString()}đ
            </span>
            {product?.productSalePrice > 0 ? (
              <span className="text-lg font-semibold text-primary text-red-500">
                {product?.productSalePrice.toLocaleString()}đ
              </span>
            ) : null}
          </div>
        </CardContent>
      </div>
      <CardFooter>
        {product?.productTotalStock === 0 ? (
          <Button className="w-full opacity-60 cursor-not-allowed">
            Out Of Stock
          </Button>
        ) : (
          <Button
            onClick={() =>
              handleAddtoCart(product?._id, product?.productTotalStock)
            }
            className="w-full"
          >
            Thêm vào giỏ hàng
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ShoppingProductTile;
