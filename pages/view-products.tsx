import { useEffect, useState } from "react";
import ProductCard from "../components/Product/Card";
import { Product } from "../utils/Product";
import Link from "next/link";
import ProductHeaders from "../components/Product/Headers";

export default function ViewProducts() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/retrieve-products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const updateProducts = async () => {
    const _products = await Product.getProducts();

    setProducts(_products);
  };

  return (
    <div>
      Products
      <ProductHeaders />
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            updateProducts={updateProducts}
          />
        );
      })}
      <div>
        <Link href="/">Go Back</Link>
      </div>
    </div>
  );
}
