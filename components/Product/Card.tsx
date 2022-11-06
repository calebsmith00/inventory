import { useEffect } from "react";
import { Product } from "../../utils/Product";

export default function ProductCard({ product, updateProducts }: any) {
  useEffect(() => {}, [product]);

  const removeProduct = async () => {
    await Product.remove(product.id);
    await updateProducts();
  };

  return (
    <div className="w-1/3 mx-auto bg-gray-500/75 flex py-1">
      <div className="bg-red-600/50 mx-1 px-3" onClick={() => removeProduct()}>
        X
      </div>

      <div className="w-full mx-1 px-2 bg-gray-800/75">
        <div>ID:</div>
        <div>{product.id}</div>
      </div>
      <div className="w-full mx-1 px-2 bg-gray-800/75">
        <div>Name:</div>
        <div>{product.name}</div>
      </div>
    </div>
  );
}
