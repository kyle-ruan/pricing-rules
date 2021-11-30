import { PricingRule, Store, Product, CartItem } from ".";
import { PRODUCTS } from '../data/Products';

class Checkout {
  store: Store;
  rules: PricingRule[];
  cart: CartItem[];

  constructor(pricingRules: PricingRule[]) {
    this.rules = pricingRules;


    const inventory = PRODUCTS.map((product) => new Product(product.sku, product.name, product.price));

    this.store = new Store(inventory);

    this.cart = [];
  }

  public scan(sku: string): void {
    const product = this.store.find(sku);
    this.cart.push(new CartItem(product.sku, product.price));
  }

  public total(): number {
    this.rules.forEach(rule => rule.apply(this.cart));
    return this.cart.reduce((total, item) => total + item.amount, 0);
  }
}

export { Checkout };