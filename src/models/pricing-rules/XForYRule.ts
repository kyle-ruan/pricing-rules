import { PricingRule } from ".";
import { CartItem } from "../CartItem";

class XForYRule extends PricingRule {
  x: number;
  y: number;
  constructor(sku: string, x: number, y: number) {
    super(sku);
    this.x = x;
    this.y = y;
  }

  public apply(items: CartItem[]): void {
    const applicableItems = items.filter(item => item.sku === this.sku);

    if (applicableItems.length < this.x) {
      return;
    }

    applicableItems.forEach((item, index) => {
      const remainder = index % this.x;

      // pay original price for the first x items in that chunk
      if (remainder <= this.y - 1) {
        return;
      }

      // the rest items in that chunk will be free
      item.discount(0);
    });

  }
}

export { XForYRule };