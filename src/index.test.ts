import { Checkout, PricingRuleFactory } from './models';
import { PRICING_RULES } from './data/PricingRules';

describe('#checkout', () => {
  let co: Checkout;

  beforeEach(() => {
    co = new Checkout(PricingRuleFactory.init(PRICING_RULES));
  });

  it('should apply three for two rule for Apple TV', () => {
    co.scan('atv');
    co.scan('atv');
    co.scan('atv');
    co.scan('vga');

    expect(co.total()).toEqual(249);
  });

  it('should apply bulk discount rule for Super iPad if someone buys more than 4', () => {
    co.scan('atv');
    co.scan('ipd');
    co.scan('ipd');
    co.scan('atv');
    co.scan('ipd');
    co.scan('ipd');
    co.scan('ipd');
    expect(co.total()).toEqual(2718.95);
  });
});