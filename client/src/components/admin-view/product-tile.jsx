import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

function AdminProductTile({
  product,
  setFormData,
  setOpenCreateProductsDialog,
  setCurrentEditedId,
  handleDelete,
}) {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <div>
        <div className="relative">
          <img
            src={product?.productImg}
            alt={product?.productName}
            className="w-full h-[300px] object-cover rounded-t-lg"
          />
        </div>
        <CardContent>
          <h2 className="text-xl font-bold mb-2 mt-2">
            {product?.productName}
          </h2>
          <div className="flex justify-between items-center mb-2">
            <span
              className={`${
                product?.productSalePrice > 0 ? "line-through" : ""
              } text-lg font-semibold text-primary text-slate-400`}
            >
              {product?.productPrice.toLocaleString()}đ
            </span>
            {product?.productSalePrice > 0 ? (
              <span className="text-lg font-bold text-red-500">
                {product?.productSalePrice.toLocaleString()}đ
              </span>
            ) : null}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button
            onClick={() => {
              setOpenCreateProductsDialog(true);
              setCurrentEditedId(product?._id);
              setFormData(product);
            }}
          >
            Edit
          </Button>
          <Button onClick={() => handleDelete(product?._id)}>Delete</Button>
        </CardFooter>
      </div>
    </Card>
  );
}

export default AdminProductTile;
