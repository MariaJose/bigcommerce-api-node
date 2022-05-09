/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/stores/{store_hash}/v3/themes': {
    /** Returns a list of store *Themes*. */
    get: operations['getStoreThemes'];
    /**
     * Uploads a new *Theme* to your BigCommerce store.
     *
     * **Required Fields**
     * * file
     */
    post: operations['uploadTheme'];
    parameters: {
      path: {
        store_hash: string;
      };
    };
  };
  '/stores/{store_hash}/v3/themes/{uuid}': {
    /** Returns a store *Theme*. The theme variation is not available at this endpoint. */
    get: operations['getStoreTheme'];
    /**
     * Deletes a store *Theme*.
     * Theme variations can not be deleted using this endpoint. This will delete the theme and all variations.
     */
    delete: operations['deleteStoreTheme'];
    parameters: {
      path: {
        /** The theme identifier. */
        uuid: string;
        store_hash: string;
      };
    };
  };
  '/stores/{store_hash}/v3/themes/{uuid}/actions/download': {
    /** Downloads a stores *Theme*. */
    post: operations['downloadTheme'];
    parameters: {
      path: {
        /** The theme identifier. */
        uuid: string;
        store_hash: string;
      };
    };
  };
  '/stores/{store_hash}/v3/themes/actions/activate': {
    /**
     * Actives a store *Theme*.
     *
     * This returns a 204 response upon success.
     */
    post: operations['activateStoreTheme'];
    parameters: {
      path: {
        store_hash: string;
      };
    };
  };
  '/stores/{store_hash}/v3/themes/jobs/{job_id}': {
    /** Returns a theme *Job*. If job is completed, the result is included in the response. */
    get: operations['getJob'];
    parameters: {
      path: {
        store_hash: string;
        job_id: string;
      };
    };
  };
  '/stores/{store_hash}/v3/themes/{uuid}/configurations': {
    /**
     * Returns a list of theme's configurations.
     *
     * **Usage Notes**:
     * * At least one filter must be provided.
     */
    get: {
      parameters: {
        path: {
          store_hash: string;
          /** The theme identifier. */
          uuid: components['parameters']['ThemeIdParam'];
        };
        query: {
          /** Filter configurations by a list of site_ids */
          'site_id:in': number[];
          /** Filter configurations by a list of configuration UUIDs. */
          'uuid:in'?: string[];
          /** Filter configurations by a variation_uuid. */
          variation_uuid?: string;
          /** Specifies the page number in a limited (paginated) list. */
          page?: components['parameters']['PageParam'];
          /** Controls the number of items per page in a limited (paginated) list of products. */
          limit?: components['parameters']['LimitParam'];
          /** Filter configurations by a list of channel_ids. */
          'channel_id:in'?: number[];
        };
      };
      responses: {
        200: components['responses']['themesConfigurations_RespCollection'];
      };
    };
    parameters: {
      path: {
        store_hash: string;
        uuid: string;
      };
      query: {
        /** Filter configurations by a list of site_ids */
        'site_id:in': number[];
        /** Filter configurations by a list of configuration UUIDs */
        'uuid:in'?: string[];
        /** Filter configurations by a variation_uuid */
        variation_uuid?: string;
        /** Specifies the page number in a limited (paginated) list. */
        page?: number;
        /** Controls the number of items per page in a limited (paginated) list of products. */
        limit?: number;
      };
    };
  };
  '/stores/{store_hash}/v3/themes/{uuid}/configurations/validate': {
    /** Validates a theme configuration against the theme's schema without creating it. Useful for testing schemas before creation. */
    post: {
      parameters: {
        path: {
          /** The theme identifier. */
          uuid: string;
          store_hash: string;
        };
      };
      responses: {
        /** Theme passes validation. */
        200: {
          content: {
            'application/json': { [key: string]: unknown };
          };
        };
        /** Theme failed validation, detailed errors in response. */
        422: {
          content: {
            'application/json': components['schemas']['ErrorResponse'];
          };
        };
      };
      requestBody: {
        content: {
          'application/json': components['schemas']['themeConfiguration_Write'];
        };
      };
    };
    parameters: {
      path: {
        /** The theme identifier. */
        uuid: string;
        store_hash: string;
      };
    };
  };
  '/stores/{store_hash}/v3/themes/custom-templates/{version_uuid}': {
    /** Enumerate available custom templates for in the theme files in a specific theme version for each supported entity type. */
    get: operations['get-themes-theme_uuid-custom-templates'];
    parameters: {
      path: {
        version_uuid: string;
        store_hash: string;
      };
    };
  };
}

export interface components {
  schemas: {
    /**
     * Collection Meta
     * @description Data about the response, including pagination and collection totals.
     */
    CollectionMeta: {
      /**
       * Pagination
       * @description Data about the response, including pagination and collection totals.
       */
      pagination?: {
        /**
         * @description Total number of items in the result set.
         *
         * @example 36
         */
        total?: number;
        /**
         * @description Total number of items in the collection response.
         *
         * @example 36
         */
        count?: number;
        /**
         * @description The amount of items returned in the collection per page, controlled by the limit parameter.
         *
         * @example 50
         */
        per_page?: number;
        /**
         * @description The page you are currently on within the collection.
         *
         * @example 1
         */
        current_page?: number;
        /**
         * @description The total number of pages in the collection.
         *
         * @example 1
         */
        total_pages?: number;
        /** @description Pagination links for the previous and next parts of the whole collection. */
        links?: {
          /** @description Link to the previous page returned in the response. */
          previous?: string;
          /**
           * @description Link to the current page returned in the response.
           *
           * @example ?page=1&limit=50
           */
          current?: string;
          /** @description Link to the next page returned in the response. */
          next?: string;
        };
      };
    };
    /**
     * Pagination
     * @description Data about the response, including pagination and collection totals.
     */
    Pagination: {
      /**
       * @description Total number of items in the result set.
       *
       * @example 36
       */
      total?: number;
      /**
       * @description Total number of items in the collection response.
       *
       * @example 36
       */
      count?: number;
      /**
       * @description The amount of items returned in the collection per page, controlled by the limit parameter.
       *
       * @example 50
       */
      per_page?: number;
      /**
       * @description The page you are currently on within the collection.
       *
       * @example 1
       */
      current_page?: number;
      /**
       * @description The total number of pages in the collection.
       *
       * @example 1
       */
      total_pages?: number;
      /** @description Pagination links for the previous and next parts of the whole collection. */
      links?: {
        /** @description Link to the previous page returned in the response. */
        previous?: string;
        /**
         * @description Link to the current page returned in the response.
         *
         * @example ?page=1&limit=50
         */
        current?: string;
        /** @description Link to the next page returned in the response. */
        next?: string;
      };
    };
    /**
     * Collection Meta
     * @description Data about the response, including pagination and collection totals.
     */
    Meta: {
      /**
       * Pagination
       * @description Data about the response, including pagination and collection totals.
       */
      pagination?: {
        /**
         * @description Total number of items in the result set.
         *
         * @example 36
         */
        total?: number;
        /**
         * @description Total number of items in the collection response.
         *
         * @example 36
         */
        count?: number;
        /**
         * @description The amount of items returned in the collection per page, controlled by the limit parameter.
         *
         * @example 50
         */
        per_page?: number;
        /**
         * @description The page you are currently on within the collection.
         *
         * @example 1
         */
        current_page?: number;
        /**
         * @description The total number of pages in the collection.
         *
         * @example 1
         */
        total_pages?: number;
        /** @description Pagination links for the previous and next parts of the whole collection. */
        links?: {
          /** @description Link to the previous page returned in the response. */
          previous?: string;
          /**
           * @description Link to the current page returned in the response.
           *
           * @example ?page=1&limit=50
           */
          current?: string;
          /** @description Link to the next page returned in the response. */
          next?: string;
        };
      };
    };
    /** Error Response */
    ErrorResponse: {
      /** @description The HTTP status code. */
      status?: number;
      /** @description The error title describing the particular error. */
      title?: string;
      type?: string;
      instance?: string;
    } & {
      /** DetailedErrors */
      errors?: { [key: string]: string };
    };
    /**
     * Base Error
     * @description Error payload for the BigCommerce API.
     */
    BaseError: {
      /** @description The HTTP status code. */
      status?: number;
      /** @description The error title describing the particular error. */
      title?: string;
      type?: string;
      instance?: string;
    };
    /** DetailedErrors */
    DetailedErrors: { [key: string]: string };
    /**
     * Not Found
     * @description Error payload for the BigCommerce API.
     */
    NotFound: {
      /** @description 404 HTTP status code. */
      status?: number;
      /** @description The error title describing the particular error. */
      title?: string;
      type?: string;
      instance?: string;
    };
    /**
     * Job Id
     * @description The job identifier for theme upload or download.
     */
    JobId: {
      /** @description The job identifier. */
      job_id?: string;
    };
    /**
     * No Content
     * @description No-content response for the BigCommerce API.
     */
    NoContent: {
      /** @description 204 HTTP status code. */
      status?: number;
      /** @description The error title describing the situation. */
      title?: string;
      type?: string;
      instance?: string;
    };
    /**
     * Job
     * @description The job for theme upload or download
     */
    Job: {
      /** @description The errors. */
      errors?: {
        /** @description The error. */
        error?: string;
        /** @description The message. */
        message?: string;
      }[];
      /** @description The identifier. */
      id?: string;
      /** @description The percent complete. */
      percent_complete?: number;
      /** @description The result. */
      result?: {
        theme_id?: string;
      } & { [key: string]: string };
      /** @description The status. */
      status?: 'COMPLETED' | 'QUEUED' | 'WORKING' | 'FAILED';
      /**
       * Format: date-time
       * @description The time.
       */
      time?: string;
      /** @description The warnings. */
      warnings?: {
        /** @description The message. */
        message?: string;
        /** @description The warning. */
        warning?: string;
      }[];
    };
    /** @description A theme. */
    Theme: {
      /** @description The variations. */
      variations?: {
        /** @description The description. */
        description?: string;
        /** @description The external identifier. */
        external_id?: string;
        /** @description The name. */
        name?: string;
        /** @description The identifier. */
        uuid?: string;
      }[];
      /** @description The identifier. */
      uuid?: string;
      /** @description The theme name identifier. */
      name?: string;
      /** @description Flag to identify private themes. */
      is_private?: boolean;
    };
    /**
     * Activate
     * @description Request definition for activation endpoint.
     */
    Activate: {
      /** @description The identifier for the variation to activate. */
      variation_id: string;
      /** @description Which configuration to use. */
      which: 'original' | 'last_activated' | 'last_created';
    };
    /** @description A variation. */
    Variation: {
      /** @description The description. */
      description?: string;
      /** @description The external identifier. */
      external_id?: string;
      /** @description The name. */
      name?: string;
      /** @description The identifier. */
      uuid?: string;
    };
    /**
     * Themes Collection Response
     * @description Response payload for the BigCommerce API.
     */
    ThemesCollectionResponse: {
      data?: {
        /** @description The variations. */
        variations?: {
          /** @description The description. */
          description?: string;
          /** @description The external identifier. */
          external_id?: string;
          /** @description The name. */
          name?: string;
          /** @description The identifier. */
          uuid?: string;
        }[];
        /** @description The identifier. */
        uuid?: string;
        /** @description The theme name identifier. */
        name?: string;
        /** @description Flag to identify private themes. */
        is_private?: boolean;
      }[];
      /**
       * Collection Meta
       * @description Data about the response, including pagination and collection totals.
       */
      meta?: {
        /**
         * Pagination
         * @description Data about the response, including pagination and collection totals.
         */
        pagination?: {
          /**
           * @description Total number of items in the result set.
           *
           * @example 36
           */
          total?: number;
          /**
           * @description Total number of items in the collection response.
           *
           * @example 36
           */
          count?: number;
          /**
           * @description The amount of items returned in the collection per page, controlled by the limit parameter.
           *
           * @example 50
           */
          per_page?: number;
          /**
           * @description The page you are currently on within the collection.
           *
           * @example 1
           */
          current_page?: number;
          /**
           * @description The total number of pages in the collection.
           *
           * @example 1
           */
          total_pages?: number;
          /** @description Pagination links for the previous and next parts of the whole collection. */
          links?: {
            /** @description Link to the previous page returned in the response. */
            previous?: string;
            /**
             * @description Link to the current page returned in the response.
             *
             * @example ?page=1&limit=50
             */
            current?: string;
            /** @description Link to the next page returned in the response. */
            next?: string;
          };
        };
      };
    };
    /**
     * Theme Response
     * @description Response payload for the BigCommerce API.
     */
    ThemeResponse: {
      data?: components['schemas']['Theme'];
      meta?: components['schemas']['CollectionMeta'];
    };
    /**
     * Job Response
     * @description Response for /GET Jobs by Id.
     */
    JobResponse: {
      /**
       * Job
       * @description The job for theme upload or download
       */
      data?: {
        /** @description The errors. */
        errors?: {
          /** @description The error. */
          error?: string;
          /** @description The message. */
          message?: string;
        }[];
        /** @description The identifier. */
        id?: string;
        /** @description The percent complete. */
        percent_complete?: number;
        /** @description The result. */
        result?: {
          theme_id?: string;
        } & { [key: string]: string };
        /** @description The status. */
        status?: 'COMPLETED' | 'QUEUED' | 'WORKING' | 'FAILED';
        /**
         * Format: date-time
         * @description The time.
         */
        time?: string;
        /** @description The warnings. */
        warnings?: {
          /** @description The message. */
          message?: string;
          /** @description The warning. */
          warning?: string;
        }[];
      };
      /**
       * Meta
       * @description Empty meta object; may be used later.
       */
      meta?: { [key: string]: unknown };
    };
    /**
     * Which Theme To Download
     * @description An object specifying which theme to download. One of: `original`: the original Marketplace or uploaded custom theme; `last_activated`: the theme version most recently applied to the store; `last_created`: the theme version most recently created.
     */
    WhichThemeToDownload: {
      /** @description Which revision to use. */
      which?: 'original' | 'last_activated' | 'last_created';
    };
    /**
     * Request Headers
     * @description These are the minium request headers needed for BigCommerce.
     */
    RequestHeaders: {
      /** @example {X-Auth-Client} */
      'X-Auth-Client'?: string;
      /** @default application/json */
      Accepts?: string;
    };
    /**
     * themeConfiguration_Full
     * @description A theme.
     */
    themeConfiguration_Full: {
      uuid?: string;
      /** @description The Theme to which the Configuration belongs. */
      theme_uuid?: string;
      /** @description The Variation to which the Configuration belongs. */
      variation_id?: string;
      /** @description The content of the configuration, which is a JSON object which will vary in structure from theme to theme. */
      settings?: { [key: string]: unknown };
      date_created?: string;
      /** @description Site ID to which this configuration belongs. Will be 0 for the original configuration for a Theme. */
      site_id?: number;
    };
    /**
     * themeConfiguration_Write
     * @description A theme.
     */
    themeConfiguration_Write: {
      /** @description The Variation to which the Configuration belongs. */
      variation_id?: string;
      /** @description The content of the configuration, which is a JSON object which will vary in structure from theme to theme. */
      settings?: { [key: string]: unknown };
    };
  };
  responses: {
    themesConfigurations_RespCollection: {
      content: {
        'application/json': {
          data?: components['schemas']['themeConfiguration_Full'][];
          meta?: components['schemas']['CollectionMeta'];
        };
      };
    };
  };
  parameters: {
    /** @description The job identifier. */
    JobIdParam: string;
    /** @description The theme identifier. */
    ThemeIdParam: string;
    Accept: string;
    'Content-Type': string;
    /** @description Specifies the page number in a limited (paginated) list. */
    PageParam: number;
    /** @description Controls the number of items per page in a limited (paginated) list of products. */
    LimitParam: number;
  };
}

export interface operations {
  /** Returns a list of store *Themes*. */
  getStoreThemes: {
    parameters: {
      path: {
        store_hash: string;
      };
      header: {
        Accept: string;
        'Content-Type': string;
      };
    };
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['ThemesCollectionResponse'];
        };
      };
    };
  };
  /**
   * Uploads a new *Theme* to your BigCommerce store.
   *
   * **Required Fields**
   * * file
   */
  uploadTheme: {
    parameters: {
      path: {
        store_hash: string;
      };
      header: {
        Accept: string;
        'Content-Type': string;
      };
    };
    responses: {
      /** Job ID for the background job processing the theme upload. */
      201: {
        content: {
          'application/json': components['schemas']['JobId'];
        };
      };
      /** Error message. */
      default: {
        content: {
          'application/json': {
            /** @description The HTTP status code. */
            status?: number;
            /** @description The error title describing the particular error. */
            title?: string;
            type?: string;
            instance?: string;
          } & {
            /** DetailedErrors */
            errors?: { [key: string]: string };
          };
        };
      };
    };
    requestBody: {
      content: {
        'multipart/form-data': {
          /**
           * Format: binary
           * @description The file.
           */
          file: string;
        };
      };
    };
  };
  /** Returns a store *Theme*. The theme variation is not available at this endpoint. */
  getStoreTheme: {
    parameters: {
      path: {
        /** The theme identifier. */
        uuid: string;
        store_hash: string;
      };
      header: {
        Accept: string;
        'Content-Type': string;
      };
    };
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['ThemeResponse'];
        };
      };
      /** Error message. */
      default: {
        content: {
          'application/json': {
            /** @description The HTTP status code. */
            status?: number;
            /** @description The error title describing the particular error. */
            title?: string;
            type?: string;
            instance?: string;
          } & {
            /** DetailedErrors */
            errors?: { [key: string]: string };
          };
        };
      };
    };
  };
  /**
   * Deletes a store *Theme*.
   * Theme variations can not be deleted using this endpoint. This will delete the theme and all variations.
   */
  deleteStoreTheme: {
    parameters: {
      path: {
        /** The theme identifier. */
        uuid: string;
        store_hash: string;
      };
      header: {
        Accept: string;
        'Content-Type': string;
      };
    };
    responses: {
      204: never;
      /** Error message. */
      default: {
        content: {
          'application/json': {
            /** @description The HTTP status code. */
            status?: number;
            /** @description The error title describing the particular error. */
            title?: string;
            type?: string;
            instance?: string;
          } & {
            /** DetailedErrors */
            errors?: { [key: string]: string };
          };
        };
      };
    };
  };
  /** Downloads a stores *Theme*. */
  downloadTheme: {
    parameters: {
      path: {
        /** The theme identifier. */
        uuid: string;
        store_hash: string;
      };
      header: {
        Accept: string;
        'Content-Type': string;
      };
    };
    responses: {
      /** Job ID for the background job processing the download. */
      200: {
        content: {
          'application/json': components['schemas']['JobId'];
        };
      };
      /** Error message. */
      default: {
        content: {
          'application/json': {
            /** @description The HTTP status code. */
            status?: number;
            /** @description The error title describing the particular error. */
            title?: string;
            type?: string;
            instance?: string;
          } & {
            /** DetailedErrors */
            errors?: { [key: string]: string };
          };
        };
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['WhichThemeToDownload'];
      };
    };
  };
  /**
   * Actives a store *Theme*.
   *
   * This returns a 204 response upon success.
   */
  activateStoreTheme: {
    parameters: {
      path: {
        store_hash: string;
      };
      header: {
        Accept: string;
        'Content-Type': string;
      };
    };
    responses: {
      /** This returns when the request is successful. */
      204: {
        content: {
          'application/json': components['schemas']['NoContent'];
        };
      };
      /** Error message. */
      default: {
        content: {
          'application/json': {
            /** @description The HTTP status code. */
            status?: number;
            /** @description The error title describing the particular error. */
            title?: string;
            type?: string;
            instance?: string;
          } & {
            /** DetailedErrors */
            errors?: { [key: string]: string };
          };
        };
      };
    };
    /** Request parameters. */
    requestBody: {
      content: {
        'application/json': components['schemas']['Activate'];
      };
    };
  };
  /** Returns a theme *Job*. If job is completed, the result is included in the response. */
  getJob: {
    parameters: {
      path: {
        store_hash: string;
        /** The job identifier. */
        job_id: string;
      };
      header: {
        Accept: string;
        'Content-Type': string;
      };
    };
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['JobResponse'];
        };
      };
      /** Error message. */
      default: {
        content: {
          'application/json': {
            /** @description The HTTP status code. */
            status?: number;
            /** @description The error title describing the particular error. */
            title?: string;
            type?: string;
            instance?: string;
          } & {
            /** DetailedErrors */
            errors?: { [key: string]: string };
          };
        };
      };
    };
  };
  /** Enumerate available custom templates for in the theme files in a specific theme version for each supported entity type. */
  'get-themes-theme_uuid-custom-templates': {
    parameters: {
      path: {
        version_uuid: string;
        store_hash: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          'application/json': {
            data?: {
              product?: string[];
              category?: string[];
              brand?: string[];
              page?: string[];
            };
            meta?: { [key: string]: unknown };
          };
        };
      };
    };
  };
}

export interface external {}
