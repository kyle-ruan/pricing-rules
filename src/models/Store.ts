import { Product } from "./Product";

class Store {
  products: Product[];

  constructor(inventory: Product[]) {
    this.products = inventory;
  }

  public find(sku: string): Product {
    const product = this.products.find(product => product.sku === sku);

    if (!product) {
      throw new Error(`Product ${sku} not found`);
    }

    return product;
  }
}

export { Store };