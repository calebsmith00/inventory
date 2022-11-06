import type { NextPage } from "next";
import { useState } from "react";
import CreateProductForm from "../components/CreateProduct/Form";

const CreateProduct: NextPage = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [inProgress, setInProgress] = useState<boolean>(false);

  const createProduct = () => {
    setInProgress(!inProgress);
  };

  return (
    <div>
      <button
        className="bg-blue-400 text-white p-3 m-3"
        onClick={() => createProduct()}
      >
        Create
      </button>

      {inProgress && <CreateProductForm setProducts={setProducts} />}
    </div>
  );
};

export default CreateProduct;
