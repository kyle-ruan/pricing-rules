import { XForYRule, BulkDiscountRule, PricingRule } from './';

interface PricingRuleMap {
  [key: string]: any;
}

const PRICING_RULE_MAP: PricingRuleMap = {
  XForYRule: (config: any) => new XForYRule(config.sku, config.x, config.y),
  BulkDiscountRule: (config: any) => new BulkDiscountRule(config.sku, config.discountedPrice)
};

class PricingRuleFactory {
  static init(ruleConfigs: any[]): PricingRule[] {
    return ruleConfigs.map(config => PRICING_RULE_MAP[config.rule](config));
  }
};

export { PricingRuleFactory };