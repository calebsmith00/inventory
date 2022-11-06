import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function removeProduct(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(400).json({});

  const dir = path.join(process.cwd(), "data");
  const _products = fs.readFileSync(`${dir}\\products.json`, "utf-8");
  try {
    const idToRemove = req.body.id;
    const products = JSON.parse(_products).filter(
      (product: any) => product.id !== idToRemove
    );

    console.log(idToRemove);
    fs.writeFileSync(`${dir}\\products.json`, JSON.stringify(products));
    res.status(200).json(products);
  } catch (e) {
    res.status(400).json({
      error: true,
      message: "Could not parse products.json",
    });
  }
}
