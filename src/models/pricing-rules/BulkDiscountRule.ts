import { PricingRule } from ".";
import { CartItem } from "../CartItem";

class BulkDiscountRule extends PricingRule {
  price: number;
  constructor(sku: string, discountedPrice: number) {
    super(sku);
    this.price = discountedPrice;
  }

  public apply(items: CartItem[]): void {
    const applicableItems = items.filter(item => item.sku === this.sku);

    if (applicableItems.length < 4) {
      return;
    }

    applicableItems.forEach(item => item.discount(this.price));
  }
}

export { BulkDiscountRule };