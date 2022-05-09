/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/stores/{store_hash}/v3/storefront/custom-template-associations': {
    /** Get a collection of the store's custom template associations across all storefronts */
    get: operations['GetCustomTemplateAssociations'];
    /** Upsert new custom template associations data across all storefronts. If an existing record is found for the combination of channel ID, entity ID, and type, the existing record will be overwritten with the new template. */
    put: operations['UpsertCustomTemplateAssociations'];
    /** Delete custom template associations. At least one query parameter must be used. */
    delete: operations['DeleteCustomTemplateAssociations'];
    parameters: {
      path: {
        store_hash: string;
      };
    };
  };
}

export interface components {
  schemas: {
    Error: {
      status?: number;
      message?: string;
    };
    ErrorResponse400: {
      schema?: components['schemas']['Error'];
    };
    ErrorResponse404: {
      schema?: components['schemas']['Error'];
    };
    ErrorResponse409: {
      schema?: components['schemas']['Error'];
    };
    ErrorResponse422: {
      schema?: components['schemas']['Error'];
    };
    MetaPaginationObject: {
      pagination?: {
        /** @example 246 */
        total?: number;
        /** @example 5 */
        count?: number;
        /** @example 5 */
        per_page?: number;
        /** @example 1 */
        current_page?: number;
        /** @example 50 */
        total_pages?: number;
        links?: {
          /** @example ?limit=5&page=2 */
          next?: string;
          /** @example ?limit=5&page=1 */
          current?: string;
        };
      };
    };
    DetailedErrors: { [key: string]: string };
    /** @description Error payload for the BigCommerce API. */
    BaseError: {
      /** @description The HTTP status code. */
      status?: number;
      /** @description The error title describing the particular error. */
      title?: string;
      type?: string;
      instance?: string;
    };
    ErrorResponse: components['schemas']['BaseError'] & {
      errors?: components['schemas']['DetailedErrors'];
    };
    /** CustomTemplateAssociation */
    CustomTemplateAssociation: {
      id?: number;
      channel_id?: number;
      entity_type?: 'product' | 'category' | 'brand' | 'page';
      entity_id?: number;
      /** @example custom-product-1.html */
      file_name?: string;
      /** @description An invalid file name does not match with an existing custom layout file in the currently active theme for the channel. When an association is invalid the store will fallback to using the default for that entity type. */
      is_valid?: boolean;
      date_created?: string;
      date_modified?: string;
    };
    /** CustomTemplateAssociation */
    CustomTemplateAssociationUpsert: {
      channel_id: number;
      entity_type: 'product' | 'category' | 'brand' | 'page';
      entity_id: number;
      /** @example custom-product-1.html */
      file_name: string;
    };
  };
}

export interface operations {
  /** Get a collection of the store's custom template associations across all storefronts */
  GetCustomTemplateAssociations: {
    parameters: {
      path: {
        store_hash: string;
      };
      query: {
        /** Channel ID to return only custom template associations for a given Channel */
        channel_id?: number;
        /** Filter by a list of entity IDs. Must be used together with "type" filter. */
        'entity_id:in'?: string;
        /** Number of results to return per page */
        limit?: number;
        /** Which page number to return, based on the page size. Used to paginate large collections. */
        page?: number;
        /** Filter associations by type */
        type?: 'product' | 'category' | 'brand' | 'page';
        /** Optional toggle to filter for exclusively valid or invalid associations entries. An invalid entry is one where it's file name does not match up to an existing custom layout file in the currently active theme for the channel. */
        is_valid?: boolean;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['CustomTemplateAssociation'][];
            meta?: components['schemas']['MetaPaginationObject'];
          };
        };
      };
    };
  };
  /** Upsert new custom template associations data across all storefronts. If an existing record is found for the combination of channel ID, entity ID, and type, the existing record will be overwritten with the new template. */
  UpsertCustomTemplateAssociations: {
    parameters: {
      path: {
        store_hash: string;
      };
    };
    responses: {
      /** Success response for batch upsert of custom template associations */
      200: {
        content: {
          'application/json': { [key: string]: unknown };
        };
      };
      /** Error response for batch PUT of Custom template associations. Includes the errors for each reference id. */
      422: {
        content: {
          'application/json': components['schemas']['ErrorResponse'];
        };
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['CustomTemplateAssociationUpsert'][];
      };
    };
  };
  /** Delete custom template associations. At least one query parameter must be used. */
  DeleteCustomTemplateAssociations: {
    parameters: {
      path: {
        store_hash: string;
      };
      query: {
        /** List of Association IDs to delete explicitly. */
        'id:in'?: number;
        /** List of Entity IDs to delete explicitly. Must be used together with "type" */
        'entity_id:in'?: number;
        /** Channel ID provided to delete all custom template associations for a given Channel */
        channel_id?: number;
        /** Filter associations by type */
        type?: 'product' | 'category' | 'brand' | 'page';
      };
    };
    responses: {
      /** No Content */
      204: never;
    };
  };
}

export interface external {}
