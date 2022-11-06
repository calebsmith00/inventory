export class Product {
  private id: number;
  private name: string;
  private price: number;

  constructor(product: any) {
    this.id = product.id;
    this.name = product.name || "";
    this.price = product.price || -1;
  }

  private isEmptyString(arg: string) {
    if (
      arg === "" ||
      arg === null ||
      arg === undefined ||
      typeof arg !== "string"
    )
      return true;

    return false;
  }

  setName(name: string) {
    if (this.isEmptyString(name)) return;

    this.name = name;
  }

  public static async remove(id: number) {
    await fetch("http://localhost:3000/api/remove-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
  }

  public static async getLastID(): Promise<number> {
    const productsReq: any = await fetch(
      "http://localhost:3000/api/retrieve-products"
    );
    const products: any = await productsReq.json();

    if (!products[products.length - 1]) return -1;
    if (products[products.length - 1] && !products[products.length - 1].id)
      return -1;

    return products[products.length - 1].id;
  }

  public static async getProducts(): Promise<any[]> {
    const productsReq: any = await fetch(
      "http://localhost:3000/api/retrieve-products"
    );
    const products: any[] = await productsReq.json();

    return products;
  }
}
