import { ChangeEvent, useEffect, useState } from "react";
import { Product } from "../../utils/Product";
import CreateProductInput from "./Input";
import Router from "next/router";
import { ProductDetails } from "../../utils/IProduct";

export default function CreateProductForm() {
  const [product, setProduct] = useState<ProductDetails>({
    id: -1,
    name: "",
    price: -1,
  });

  useEffect(() => {
    Product.getLastID().then((id: number) => {
      setProduct((prevProduct: any) => {
        return {
          ...prevProduct,
          id,
        };
      });
    });
  }, []);

  const updateProduct = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value }: any = e.target;

    setProduct({
      ...product,
      [name]: value,
    });
  };

  const resetProduct = () => {
    const keys: any[] = Object.keys(product);

    const _product: any = {};
    keys.forEach((key: any) => {
      _product[key] = "";
    });

    setProduct(_product);
  };

  const createProduct = async () => {
    resetProduct();
    await fetch("/api/create-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    Router.push("/view-products");
  };

  return (
    <div className="flex justify-center font-sans">
      <form
        className="drop-shadow-2xl rounded-xl bg-gray-700/50 py-5 px-4"
        onSubmit={(e: any) => e.preventDefault()}
      >
        <CreateProductInput
          onChange={updateProduct}
          value={product.id}
          label="Item #"
          disabled={true}
          name="id"
        />

        <CreateProductInput
          onChange={updateProduct}
          value={product.name}
          label="Item Name"
          name="name"
        />

        <div className="flex justify-around mx-3">
          <button
            className="bg-green-400/60 px-6 py-1 rounded-xl"
            onClick={() => createProduct()}
          >
            Add
          </button>
          <button
            className="text-red-400/60 px-3 py-1 rounded-xl"
            onClick={resetProduct}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
