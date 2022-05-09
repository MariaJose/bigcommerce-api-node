/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/stores/{store_hash}/v3/shipping/products/customs-information': {
    /**
     * Get customs information for products.
     *
     * ## Examples
     *
     * This list can be filtered to return customs information objects specific to a list of requested product_ids. This is achieved by appending the query string **?product_id:in=4,5,6** to the resource **\/shipping/products/customs-information**.
     *
     * ```http
     * GET /shipping/products/customs-information?product_id:in=4,5,6
     * ```
     */
    get: {
      parameters: {
        path: {
          store_hash: string;
        };
        header: {
          Accept?: string;
          'Content-Type'?: string;
        };
        query: {
          /** A comma-separated list of product IDs. For more information, see [Filtering](/api-docs/getting-started/filtering). */
          'product_id:in'?: number[];
          page?: number;
          limit?: number;
        };
      };
      responses: {
        200: {
          schema: {
            data?: definitions['customsInformation'][];
            meta?: definitions['metaCollection'];
          };
        };
      };
    };
    /**
     * Creates and updates product customs information.
     *
     * This is a batch operation where the creation of multiple customs information objects can be done with one `PUT` request.
     *
     * ## Limits
     * * Limit of 50 customs information objects per `PUT` request.
     */
    put: {
      parameters: {
        path: {
          store_hash: string;
        };
        body: {
          body?: definitions['customsInformation'][];
        };
      };
      responses: {
        200: {
          schema: definitions['customsInformation'][];
        };
      };
    };
    /**
     * Deletes customs information objects for a product.
     *
     * ## Example
     *
     * This is a batch operation. The `product_id` query parameter is required.
     *
     * ```http
     * DELETE /shipping/products/customs-information?product_id:in=4,5,6
     * ```
     */
    delete: {
      parameters: {
        path: {
          store_hash: string;
        };
        header: {
          Accept?: string;
          'Content-Type'?: string;
        };
        query: {
          'product_id:in': number[];
        };
      };
      responses: {
        204: never;
      };
    };
    parameters: {
      path: {
        store_hash: string;
      };
    };
  };
}

export interface definitions {
  /** shippingMethod_Full */
  shippingMethod_Full: {
    /**
     * @description Shipping-method ID. READ-ONLY
     * @example 1
     */
    id?: number;
  } & definitions['shippingMethod_Base'];
  /** shippingMethod_Base */
  shippingMethod_Base: {
    /**
     * @description Display name for shipping method.
     * @example Flat Rate
     */
    name?: string;
    /**
     * Shipping Method Type
     * @example perorder
     */
    type?:
      | 'perorder'
      | 'peritem'
      | 'weight'
      | 'total'
      | 'auspost'
      | 'canadapost'
      | 'endicia'
      | 'usps'
      | 'fedex'
      | 'royalmail'
      | 'upsready';
    /** @description Depends on the shipping-method type. See the [supported settings object](#supported-settings). */
    settings?: {
      /**
       * @description Flat rate per order.
       * @example 7
       */
      rate?: number;
    };
    /**
     * @description Whether or not this shipping-zone method is enabled.
     * @example true
     */
    enabled?: boolean;
    /**
     * @description `fixed_surcharge`: flat-rate handling fee applied to shipping cost.
     *
     * `percentage_surcharge`: percentage handling fee applied to shipping cost
     * @example percentage_surcharge
     */
    handling_fees?: 'fixed_surcharge' | 'percentage_surcharge';
    /** @description Whether or not this shipping zone is the fallback if all others are not valid for the order. */
    is_fallback?: boolean;
  };
  /**
   * customsInformation
   * @description Data about the customs information object.
   */
  customsInformation: {
    /**
     * Format: int32
     * @description The id of the product which the customs information data will apply to.
     * @example 77
     */
    product_id?: number;
    /**
     * @description The country of manufacture, production, or growth represented in ISO 3166-1 alpha-2 format.
     * @example US
     */
    country_of_origin?: string;
    /**
     * @description Description that provides information for customs to identify and verify shapes physical characteristics and packaging of each shipment.
     * @example Baseball caps
     */
    commodity_description?: string;
    /**
     * @description Flag to determine whether this product will be shipped internationally
     * @example true
     */
    international_shipping?: true | false;
    hs_codes?: definitions['harmonizedSystemCodes'];
  };
  /**
   * harmonizedSystemCodes
   * @description Key value pair commonly used in the form of **countryISO2:'/^[0-9A-Za-z]{6,14}$/'**. This is to represent a country and the associated hs code that applies to that country. Eg {"US":"508313","AU":"850610"}.
   *
   * There is a special value of **'ALL'** which can be used in place of the countryISO2 to represent that the hs code applies to all countries. Eg {"ALL":"634000"}. This can be combined with other countries in the hs codes object. For Eg {"All":"640000", "US":"641000"}
   * @example [object Object]
   */
  harmonizedSystemCodes: { [key: string]: unknown };
  /**
   * metaCollection
   * @description Meta data relating to pagination
   */
  metaCollection: {
    pagination?: {
      /**
       * @description Total number of items returned.
       * @example 3
       */
      total?: number;
      /**
       * @description Number of items returned on per page.
       * @example 1
       */
      count?: number;
      /**
       * @description Number of items to be displayed per page.
       * @example 1
       */
      per_page?: number;
      /**
       * @description Current page number.
       * @example 2
       */
      current_page?: number;
      /**
       * @description Total number of pages.
       * @example 3
       */
      total_page?: number;
      links?: {
        /**
         * @description Query string appended to the resource to return to the previous page.
         * @example ?limit=1&page=1
         */
        previous?: string;
        /**
         * @description Query string appended to the resource to proceed to the next page.
         * @example ?limit=1&page=3
         */
        next?: string;
        /**
         * @description Query string appended to the resource to show the current page.
         * @example ?limit=1&page=2
         */
        current?: string;
      };
    };
  };
  /**
   * Error
   * @description Meta data relating to pagination
   */
  error_Full: { [key: string]: unknown };
}

export interface parameters {
  /** Format: int32 */
  product_id: number[];
}

export interface responses {
  /** If something happens during the request that causes it to fail, a 502 response will be returned. A new request should be made; however, it could fail. */
  '502_GatewayError': {
    schema: definitions['error_Full'];
  };
  /** If this occurs, you should retry the request. Typically retrying the request several times will result in a successful request; However, if you are unable to successfully make a request, please check the BigCommerce system status [here](https://status.bigcommerce.com/). A service is likely down and the request will need to be made again when it is back up (in several hours usually) */
  '504_GatewayTimeout': {
    schema: definitions['error_Full'];
  };
  /** Returned when permissions do not allow the operation. */
  '403_Unauthorized': {
    schema: definitions['error_Full'];
  };
  /** Invalid syntax, required data missing, `content-type` header missing; Double-check request body for syntax errors and missing data; check `content-type` header. */
  '400_BadRequest': {
    schema: definitions['error_Full'];
  };
  /** If the requested account resource is not found for the franchise, return a 404 Not Found. */
  '404_NotFound': {
    schema: definitions['error_Full'];
  };
  /** This occurs when missing or unacceptable data is passed for one or more fields. Please correct the values for the fields listed in the errors object. */
  '422_UnprocessableEntity': {
    schema: definitions['error_Full'];
  };
  /**
   * If this occurs, you should retry the request. If you are unable to successfully make a request, please check the BigCommerce system status [here](https://status.bigcommerce.com/). A service is likely down and the request will need to be made again when it is back up (in several hours usually)
   *
   * Occurs hen the store is down for maintenance, being upgraded to a new version, or is suspended due to administrative action or a billing issue.
   */
  '503_ServiceUnavailable': {
    schema: definitions['error_Full'];
  };
  /** API credentials are missing or invalid; Double-check the `access_token` and `client_id`. */
  '401_Unauthorized': {
    schema: definitions['error_Full'];
  };
  /** Request headers specify an unsupported `content-type` (or header is missing). Double-check `content-type` request header. */
  '415_Unsupported': {
    schema: definitions['error_Full'];
  };
  /** When an OAuth client exceeds the [rate limit](/api-docs/getting-started/best-practices#api-rate-limits) for API requests to a store.. */
  '429_Too_Many_Requests': {
    schema: definitions['error_Full'];
  };
  /** The resource was found, but doesn't support the request method. Issued when either a specific method isn't yet implemented on a resource, or the resource doesn't support the method at all. For example, a `PUT` on `/orders` is invalid, but a PUT on `/orders/{order_id}` is valid. */
  '405_Method_Not_Allowed': {
    schema: definitions['error_Full'];
  };
  /** Expensive API calls or an internal server error in BigCommerce; Re-attempt the request three to five times, with increasing delays of at least a minute between attempts. */
  '500_Internal_Server_Error': {
    schema: definitions['error_Full'];
  };
}

export interface operations {}

export interface external {}
