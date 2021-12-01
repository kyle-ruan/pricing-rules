import { PricingRule } from ".";
import { CartItem } from "../CartItem";

class BulkDiscountRule extends PricingRule {
  price: number;
  bulkNumber: number;
  constructor(sku: string, bulkNumber: number, discountedPrice: number) {
    super(sku);
    this.bulkNumber = bulkNumber;
    this.price = discountedPrice;
  }

  public apply(items: CartItem[]): void {
    const applicableItems = items.filter(item => item.sku === this.sku);

    if (applicableItems.length < this.bulkNumber) {
      return;
    }

    applicableItems.forEach(item => item.discount(this.price));
  }
}

export { BulkDiscountRule };