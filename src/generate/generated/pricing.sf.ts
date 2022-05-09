/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/stores/{store_hash}/v3/pricing/products': {
    /**
     * Calculate batch pricing for products for a specific channel, currency, and customer group.
     *
     * **Limits**
     * * Limit of 50 concurrent requests.
     */
    post: operations['get-prices'];
  };
}

export interface definitions {
  BulkPricingTier: {
    /** @description The minumum quantity required to trigger this bulk pricing discount */
    minimum?: number;
    /** @description The maximum quantity (or 0 for unlimited) to trigger this bulk pricing discount */
    maximum?: number;
    discount_amount?: number;
    discount_type?: 'price' | 'percent' | 'fixed';
  };
  PricingResponse: {
    data?: {
      /** @description The product ID this price was generated for */
      product_id?: number;
      /** @description The (optional) variant ID this price was generated for */
      variant_id?: number;
      /** @description The optional product option configuration this price was generated for */
      options?: {
        /** @description The ID of the variant option or modifier option configured for this price */
        option_id?: number;
        /** @description The selected value ID for the configured option. */
        value_id?: number;
      }[];
      /** @description The (optional) RRP/retail price configured for this product */
      retail_price?: {
        /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
        as_entered?: number;
        /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
        entered_inclusive?: boolean;
        /** @description The estimated tax exclusive price for this product based on the provided customer group */
        tax_exclusive?: number;
        /** @description The estimated tax inclusive price for this product based on the provided customer group */
        tax_inclusive?: number;
      };
      /** @description The price for a product including estimates for tax */
      sale_price?: {
        /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
        as_entered?: number;
        /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
        entered_inclusive?: boolean;
        /** @description The estimated tax exclusive price for this product based on the provided customer group */
        tax_exclusive?: number;
        /** @description The estimated tax inclusive price for this product based on the provided customer group */
        tax_inclusive?: number;
      };
      /** @description The price for a product including estimates for tax */
      minimum_advertised_price?: {
        /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
        as_entered?: number;
        /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
        entered_inclusive?: boolean;
        /** @description The estimated tax exclusive price for this product based on the provided customer group */
        tax_exclusive?: number;
        /** @description The estimated tax inclusive price for this product based on the provided customer group */
        tax_inclusive?: number;
      };
      /** @description The price for a product including estimates for tax */
      price?: {
        /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
        as_entered?: number;
        /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
        entered_inclusive?: boolean;
        /** @description The estimated tax exclusive price for this product based on the provided customer group */
        tax_exclusive?: number;
        /** @description The estimated tax inclusive price for this product based on the provided customer group */
        tax_inclusive?: number;
      };
      /** @description The price for a product including estimates for tax */
      calculated_price?: {
        /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
        as_entered?: number;
        /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
        entered_inclusive?: boolean;
        /** @description The estimated tax exclusive price for this product based on the provided customer group */
        tax_exclusive?: number;
        /** @description The estimated tax inclusive price for this product based on the provided customer group */
        tax_inclusive?: number;
      };
      /** @description For estimated prices, the minimum/maximum price that will typically apply to this product */
      price_range?: {
        /** @description The price for a product including estimates for tax */
        minimum?: {
          /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
          as_entered?: number;
          /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
          entered_inclusive?: boolean;
          /** @description The estimated tax exclusive price for this product based on the provided customer group */
          tax_exclusive?: number;
          /** @description The estimated tax inclusive price for this product based on the provided customer group */
          tax_inclusive?: number;
        };
        /** @description The price for a product including estimates for tax */
        maximum?: {
          /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
          as_entered?: number;
          /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
          entered_inclusive?: boolean;
          /** @description The estimated tax exclusive price for this product based on the provided customer group */
          tax_exclusive?: number;
          /** @description The estimated tax inclusive price for this product based on the provided customer group */
          tax_inclusive?: number;
        };
      };
      /** @description For estimated prices, the minimum/maximum price that will typically apply to this product */
      retail_price_range?: {
        /** @description The price for a product including estimates for tax */
        minimum?: {
          /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
          as_entered?: number;
          /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
          entered_inclusive?: boolean;
          /** @description The estimated tax exclusive price for this product based on the provided customer group */
          tax_exclusive?: number;
          /** @description The estimated tax inclusive price for this product based on the provided customer group */
          tax_inclusive?: number;
        };
        /** @description The price for a product including estimates for tax */
        maximum?: {
          /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
          as_entered?: number;
          /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
          entered_inclusive?: boolean;
          /** @description The estimated tax exclusive price for this product based on the provided customer group */
          tax_exclusive?: number;
          /** @description The estimated tax inclusive price for this product based on the provided customer group */
          tax_inclusive?: number;
        };
      };
      bulk_pricing?: {
        /** @description The minumum quantity required to trigger this bulk pricing discount */
        minimum?: number;
        /** @description The maximum quantity (or 0 for unlimited) to trigger this bulk pricing discount */
        maximum?: number;
        discount_amount?: number;
        discount_type?: 'price' | 'percent' | 'fixed';
      }[];
    }[];
    meta?: { [key: string]: unknown };
  };
  /** @description For estimated prices, the minimum/maximum price that will typically apply to this product */
  PriceRange: {
    /** @description The price for a product including estimates for tax */
    minimum?: {
      /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
      as_entered?: number;
      /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
      entered_inclusive?: boolean;
      /** @description The estimated tax exclusive price for this product based on the provided customer group */
      tax_exclusive?: number;
      /** @description The estimated tax inclusive price for this product based on the provided customer group */
      tax_inclusive?: number;
    };
    /** @description The price for a product including estimates for tax */
    maximum?: {
      /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
      as_entered?: number;
      /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
      entered_inclusive?: boolean;
      /** @description The estimated tax exclusive price for this product based on the provided customer group */
      tax_exclusive?: number;
      /** @description The estimated tax inclusive price for this product based on the provided customer group */
      tax_inclusive?: number;
    };
  };
  /** @description The price for a product including estimates for tax */
  TaxPrice: {
    /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
    as_entered?: number;
    /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
    entered_inclusive?: boolean;
    /** @description The estimated tax exclusive price for this product based on the provided customer group */
    tax_exclusive?: number;
    /** @description The estimated tax inclusive price for this product based on the provided customer group */
    tax_inclusive?: number;
  };
  ItemPricing: {
    /** @description The product ID this price was generated for */
    product_id?: number;
    /** @description The (optional) variant ID this price was generated for */
    variant_id?: number;
    /** @description The optional product option configuration this price was generated for */
    options?: {
      /** @description The ID of the variant option or modifier option configured for this price */
      option_id?: number;
      /** @description The selected value ID for the configured option. */
      value_id?: number;
    }[];
    /** @description The (optional) RRP/retail price configured for this product */
    retail_price?: {
      /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
      as_entered?: number;
      /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
      entered_inclusive?: boolean;
      /** @description The estimated tax exclusive price for this product based on the provided customer group */
      tax_exclusive?: number;
      /** @description The estimated tax inclusive price for this product based on the provided customer group */
      tax_inclusive?: number;
    };
    /** @description The price for a product including estimates for tax */
    sale_price?: {
      /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
      as_entered?: number;
      /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
      entered_inclusive?: boolean;
      /** @description The estimated tax exclusive price for this product based on the provided customer group */
      tax_exclusive?: number;
      /** @description The estimated tax inclusive price for this product based on the provided customer group */
      tax_inclusive?: number;
    };
    /** @description The price for a product including estimates for tax */
    minimum_advertised_price?: {
      /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
      as_entered?: number;
      /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
      entered_inclusive?: boolean;
      /** @description The estimated tax exclusive price for this product based on the provided customer group */
      tax_exclusive?: number;
      /** @description The estimated tax inclusive price for this product based on the provided customer group */
      tax_inclusive?: number;
    };
    /** @description The price for a product including estimates for tax */
    price?: {
      /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
      as_entered?: number;
      /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
      entered_inclusive?: boolean;
      /** @description The estimated tax exclusive price for this product based on the provided customer group */
      tax_exclusive?: number;
      /** @description The estimated tax inclusive price for this product based on the provided customer group */
      tax_inclusive?: number;
    };
    /** @description The price for a product including estimates for tax */
    calculated_price?: {
      /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
      as_entered?: number;
      /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
      entered_inclusive?: boolean;
      /** @description The estimated tax exclusive price for this product based on the provided customer group */
      tax_exclusive?: number;
      /** @description The estimated tax inclusive price for this product based on the provided customer group */
      tax_inclusive?: number;
    };
    /** @description For estimated prices, the minimum/maximum price that will typically apply to this product */
    price_range?: {
      /** @description The price for a product including estimates for tax */
      minimum?: {
        /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
        as_entered?: number;
        /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
        entered_inclusive?: boolean;
        /** @description The estimated tax exclusive price for this product based on the provided customer group */
        tax_exclusive?: number;
        /** @description The estimated tax inclusive price for this product based on the provided customer group */
        tax_inclusive?: number;
      };
      /** @description The price for a product including estimates for tax */
      maximum?: {
        /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
        as_entered?: number;
        /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
        entered_inclusive?: boolean;
        /** @description The estimated tax exclusive price for this product based on the provided customer group */
        tax_exclusive?: number;
        /** @description The estimated tax inclusive price for this product based on the provided customer group */
        tax_inclusive?: number;
      };
    };
    /** @description For estimated prices, the minimum/maximum price that will typically apply to this product */
    retail_price_range?: {
      /** @description The price for a product including estimates for tax */
      minimum?: {
        /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
        as_entered?: number;
        /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
        entered_inclusive?: boolean;
        /** @description The estimated tax exclusive price for this product based on the provided customer group */
        tax_exclusive?: number;
        /** @description The estimated tax inclusive price for this product based on the provided customer group */
        tax_inclusive?: number;
      };
      /** @description The price for a product including estimates for tax */
      maximum?: {
        /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
        as_entered?: number;
        /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
        entered_inclusive?: boolean;
        /** @description The estimated tax exclusive price for this product based on the provided customer group */
        tax_exclusive?: number;
        /** @description The estimated tax inclusive price for this product based on the provided customer group */
        tax_inclusive?: number;
      };
    };
    bulk_pricing?: definitions['BulkPricingTier'][];
  };
  /** @description Details/configuration for the product to request a price for. */
  Item: {
    /** @description The (required) product ID of the item */
    product_id?: number;
    /** @description The (optional) variant ID of the item */
    variant_id?: number;
    /** @description The (optional) option configuration of the product. May be "partially" configured for estimates. */
    options?: {
      /** @description The ID of the variant option or modifier option being configured for this product */
      option_id?: number;
      /** @description The ID of the value matching the option being configured. Note: must be ID, not the value. */
      value_id?: number;
    }[];
  };
  PricingRequest: {
    /**
     * @description The channel context that pricing should be evaluated within. The default BC storefront is channel 1
     * @example 1
     */
    channel_id?: number;
    /**
     * @description The currency of prices to be returned for this request
     * @example USD
     */
    currency_code?: string;
    /** @description The customer group relevant for any customer group pricing, tax values, etc. */
    customer_group_id?: number;
    /** @description The items to fetch prices for */
    items?: {
      /** @description The (required) product ID of the item */
      product_id?: number;
      /** @description The (optional) variant ID of the item */
      variant_id?: number;
      /** @description The (optional) option configuration of the product. May be "partially" configured for estimates. */
      options?: {
        /** @description The ID of the variant option or modifier option being configured for this product */
        option_id?: number;
        /** @description The ID of the value matching the option being configured. Note: must be ID, not the value. */
        value_id?: number;
      }[];
    }[];
  };
}

export interface operations {
  /**
   * Calculate batch pricing for products for a specific channel, currency, and customer group.
   *
   * **Limits**
   * * Limit of 50 concurrent requests.
   */
  'get-prices': {
    parameters: {
      path: {
        store_hash: string;
      };
      body: {
        body: {
          /**
           * @description The channel context that pricing should be evaluated within. The default BC storefront is channel 1
           * @example 1
           */
          channel_id: number;
          /**
           * @description The currency of prices to be returned for this request
           * @example USD
           */
          currency_code: string;
          /** @description The customer group relevant for any customer group pricing, tax values, etc. */
          customer_group_id: number;
          /** @description The items to fetch prices for */
          items: {
            /** @description The (required) product ID of the item */
            product_id?: number;
            /** @description The (optional) variant ID of the item */
            variant_id?: number;
            /** @description The (optional) option configuration of the product. May be "partially" configured for estimates. */
            options?: {
              /** @description The ID of the variant option or modifier option being configured for this product */
              option_id?: number;
              /** @description The ID of the value matching the option being configured. Note: must be ID, not the value. */
              value_id?: number;
            }[];
          }[];
        };
      };
    };
    responses: {
      /** OK */
      200: {
        schema: {
          data?: {
            /** @description The product ID this price was generated for */
            product_id?: number;
            /** @description The (optional) variant ID this price was generated for */
            variant_id?: number;
            /** @description The optional product option configuration this price was generated for */
            options?: {
              /** @description The ID of the variant option or modifier option configured for this price */
              option_id?: number;
              /** @description The selected value ID for the configured option. */
              value_id?: number;
            }[];
            /** @description The (optional) RRP/retail price configured for this product. Used for price comparison and storefront display purposes. */
            retail_price?: {
              /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
              as_entered?: number;
              /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
              entered_inclusive?: boolean;
              /** @description The estimated tax exclusive price for this product based on the provided customer group */
              tax_exclusive?: number;
              /** @description The estimated tax inclusive price for this product based on the provided customer group */
              tax_inclusive?: number;
            };
            /** @description The merchant-entered sale price for a product overwrites the default price. The sale_price is optional. */
            sale_price?: {
              /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
              as_entered?: number;
              /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
              entered_inclusive?: boolean;
              /** @description The estimated tax exclusive price for this product based on the provided customer group */
              tax_exclusive?: number;
              /** @description The estimated tax inclusive price for this product based on the provided customer group */
              tax_inclusive?: number;
            };
            /** @description The minimum advertised price (MAP) allowed to be shown on a storefront. A value supplied by the merchant and used for display purposes. */
            minimum_advertised_price?: {
              /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
              as_entered?: number;
              /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
              entered_inclusive?: boolean;
              /** @description The estimated tax exclusive price for this product based on the provided customer group */
              tax_exclusive?: number;
              /** @description The estimated tax inclusive price for this product based on the provided customer group */
              tax_inclusive?: number;
            };
            /** @description The merchant-entered price for a product could be including or excluding tax. Price must be defined when creating a product and serves as the default price. */
            price?: {
              /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
              as_entered?: number;
              /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
              entered_inclusive?: boolean;
              /** @description The estimated tax exclusive price for this product based on the provided customer group */
              tax_exclusive?: number;
              /** @description The estimated tax inclusive price for this product based on the provided customer group */
              tax_inclusive?: number;
            };
            /** @description The shopper price for a product including modifier, option, and option set rules.  Calculated_price may include or exclude estimates for tax. */
            calculated_price?: {
              /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
              as_entered?: number;
              /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
              entered_inclusive?: boolean;
              /** @description The estimated tax exclusive price for this product based on the provided customer group */
              tax_exclusive?: number;
              /** @description The estimated tax inclusive price for this product based on the provided customer group */
              tax_inclusive?: number;
            };
            /** @description The minimum and maximum price that will typically apply to this product. Only used for complex products (products with variants). */
            price_range?: {
              /** @description The price for a product including estimates for tax */
              minimum?: {
                /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
                as_entered?: number;
                /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
                entered_inclusive?: boolean;
                /** @description The estimated tax exclusive price for this product based on the provided customer group */
                tax_exclusive?: number;
                /** @description The estimated tax inclusive price for this product based on the provided customer group */
                tax_inclusive?: number;
              };
              /** @description The price for a product including estimates for tax */
              maximum?: {
                /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
                as_entered?: number;
                /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
                entered_inclusive?: boolean;
                /** @description The estimated tax exclusive price for this product based on the provided customer group */
                tax_exclusive?: number;
                /** @description The estimated tax inclusive price for this product based on the provided customer group */
                tax_inclusive?: number;
              };
            };
            /** @description The product's variants that will typically apply to this product. */
            retail_price_range?: {
              /** @description The price for a product including estimates for tax */
              minimum?: {
                /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
                as_entered?: number;
                /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
                entered_inclusive?: boolean;
                /** @description The estimated tax exclusive price for this product based on the provided customer group */
                tax_exclusive?: number;
                /** @description The estimated tax inclusive price for this product based on the provided customer group */
                tax_inclusive?: number;
              };
              /** @description The price for a product including estimates for tax */
              maximum?: {
                /** @description The price provided by the merchant as entered in their catalog/price list (may be inc or ex) */
                as_entered?: number;
                /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction */
                entered_inclusive?: boolean;
                /** @description The estimated tax exclusive price for this product based on the provided customer group */
                tax_exclusive?: number;
                /** @description The estimated tax inclusive price for this product based on the provided customer group */
                tax_inclusive?: number;
              };
            };
            bulk_pricing?: definitions['BulkPricingTier'][];
          }[];
          meta?: { [key: string]: unknown };
        };
      };
    };
  };
}

export interface external {}
