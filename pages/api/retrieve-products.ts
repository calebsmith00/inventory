import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { Product } from "../../utils/Product";

export default function retrieveProducts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dir = path.join(process.cwd(), "data");
  const _products = fs.readFileSync(`${dir}\\products.json`, "utf-8");
  try {
    const products = JSON.parse(_products);
    const productClasses = products.map((product: any) => {
      return new Product(product);
    });

    res.status(200).json(productClasses);
  } catch (e) {
    res.status(400).json({
      error: true,
      message: "Could not parse products.json",
    });
  }
}
