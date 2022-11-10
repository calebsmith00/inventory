import { useEffect } from "react";
import { Product } from "../../utils/Product";
import Image from "next/image";
import ProductHeaders from "./Headers";

export default function ProductCard({ product, updateProducts }: any) {
  useEffect(() => {}, [product]);

  const removeProduct = async () => {
    await Product.remove(product.id);
    await updateProducts();
  };

  return (
    <>
      <div className="w-full lg:w-1/3 mx-auto border-b-2 border-gray-500">
        <div className="flex py-5">
          {/* <div className="m-auto px-2" onClick={() => removeProduct()}>
            <Image
              src="/x-button.svg"
              alt="Delete product button"
              height={48}
              width={48}
            />
          </div> */}

          <div className="w-1/6 mx-1 px-2">
            <div>{product.id}</div>
          </div>
          <div className="w-full mx-1 px-2">
            <div>{product.name}</div>
          </div>
        </div>
      </div>
    </>
  );
}
