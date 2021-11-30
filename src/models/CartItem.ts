class CartItem {
  sku: string;
  amount: number;

  constructor(sku: string, amount: number) {
    this.sku = sku;
    this.amount = amount;
  }

  discount(discounted: number): void {
    this.amount = discounted;
  }
}

export { CartItem };