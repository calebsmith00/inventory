import { ChangeEvent, useEffect, useState } from "react";
import ProductCard from "../components/Product/Card";
import { Product } from "../utils/Product";
import Link from "next/link";
import ProductHeaders from "../components/Product/Headers";
import Fuse from "fuse.js";

export default function ViewProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [searchResults, setSearchResults] = useState<any[]>([]);

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

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    const options = {
      keys: ["name", "id"],
    };

    const fuse = new Fuse(products, options);
    let foundResults: any = fuse.search(e.target.value);

    if (e.target.value === "") return setSearchResults([]);
    if (foundResults.length === 0) return;
    foundResults = foundResults.map((result: any) => {
      return result.item;
    });
    setSearchResults(foundResults);
  };

  return (
    <div>
      Products
      {searchResults.length === 0 && (
        <>
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
        </>
      )}
      {searchResults.length > 0 && (
        <>
          <ProductHeaders />
          {searchResults.map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                updateProducts={updateProducts}
              />
            );
          })}
        </>
      )}
      <div className="mr-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-1 w-48 bg-stone-600/50"
          onChange={search}
        />
      </div>
      <div>
        <Link href="/">Go Back</Link>
      </div>
    </div>
  );
}
