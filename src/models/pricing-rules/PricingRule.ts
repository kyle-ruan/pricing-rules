import { CartItem } from '../CartItem';

abstract class PricingRule {
  sku: string;

  constructor(sku: string) {
    this.sku = sku;
  }

  abstract apply(items: CartItem[]): void;
}

export { PricingRule };