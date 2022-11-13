import { useEffect } from "react";

export default function ProductCard({ product, updateProducts }: any) {
  useEffect(() => {}, [product]);

  return (
    <>
      <div className="w-full lg:w-1/3 mx-auto border-b-2 border-gray-500">
        <div className="flex py-5">
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
