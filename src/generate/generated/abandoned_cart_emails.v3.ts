/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/stores/{store_hash}/v3/settings/marketing/abandoned-cart-emails': {
    /** An array of abandoned cart emails on the store. */
    get: operations['getAbandonedCartEmails'];
    /** Create Abandoned Cart Email template. */
    post: operations['createEmailTemplate'];
    parameters: {
      path: {
        store_hash: string;
      };
    };
  };
  '/stores/{store_hash}/v3/marketing/abandoned-cart-emails/{id}': {
    /** Get a single Abandoned Cart Email template. */
    get: operations['getAbandonedCartEmailTemplateId'];
    /** Update an email template. */
    put: operations['updateAbandonedCartEmailsId'];
    /** Delete Abandoned Cart Email template. */
    delete: operations['deleteAbandonedCartEmailTemplateId'];
    parameters: {
      path: {
        /** Abandoned Cart email template ID */
        id: number;
        store_hash: string;
      };
    };
  };
  '/stores/{store_hash}/v3/marketing/abandoned-cart-emails/default': {
    /** Return default Abandoned Cart Email template. */
    get: operations['GetDefaultAbandonedCartEmailTemplate'];
    parameters: {
      path: {
        store_hash: string;
      };
    };
  };
  '/stores/{store_hash}/v3/marketing/abandoned-cart-emails/settings': {
    /** Read Abandoned Cart Email Template settings. */
    get: operations['GetAbandonedCartEmailTemplateSettings'];
    /** Update Abandoned Cart Email template settings. */
    put: operations['updateEmailTemplateSettings'];
    parameters: {
      path: {
        store_hash: string;
      };
    };
  };
}

export interface components {
  schemas: {
    /** SaveError */
    SaveError: {
      status?: number;
      title?: string;
      type?: string;
      errors?: string[];
    };
    /** BaseError */
    BaseError: {
      status?: string;
      type?: string;
    };
    /** AbandonedCartEmailModel */
    AbandonedCartEmailModel: {
      notify_at_minutes?: components['schemas']['NotifyAtMinutes'];
      coupon_code?: components['schemas']['CouponCode'];
      template?: components['schemas']['Template'];
    };
    /** AbandonedCartSettings */
    AbandonedCartSettings: {
      /** @description Indicates inheritance state */
      use_global: boolean;
    };
    AbandondedCartEmailPayload: {
      is_active?: boolean;
      coupon_code?: components['schemas']['CouponCode'];
      notify_at_minutes?: components['schemas']['NotifyAtMinutes'];
      template?: components['schemas']['Template'];
    };
    /** Template */
    Template: {
      /** @example 'Complete your purchase at {{ store.name }}' */
      subject: string;
      /** @example 'Complete your purchase <a href="{{ notification.checkout_link }}">{{notification.checkout.link}}' */
      body: string;
      translation?: components['schemas']['TranslationDefinition'][];
    } & {
      translations: unknown;
    };
    /** TranslationDefinition */
    TranslationDefinition: {
      /**
       * @description Locale code for this language, such as 'en', 'en-us', 'fr-ca'.
       * @example en
       */
      locale: string;
      /** @description Language keys for the template. User-defined. Should match any lang keys used in the template. */
      keys: string;
      additionalProperties?: string;
    };
    /**
     * NotifyAtMinutes
     * @description Describes when this email will be sent, in minutes. Only supports certain intervals described in the enum.
     * @example 60
     */
    NotifyAtMinutes:
      | 60
      | 120
      | 180
      | 240
      | 300
      | 360
      | 420
      | 480
      | 540
      | 600
      | 660
      | 720
      | 780
      | 840
      | 900
      | 960
      | 1020
      | 1080
      | 1140
      | 1200
      | 1260
      | 1320
      | 1380
      | 1440
      | 2880
      | 4320
      | 5760
      | 7200
      | 8640
      | 10080
      | 11520
      | 12960
      | 14400;
    /**
     * Coupon Code Field
     * @example FF11-22X4
     */
    CouponCode: string;
    /** AbandondedCartEmail */
    AbandondedCartEmail: {
      /** @example 1 */
      id?: number;
      notify_at_minutes?: components['schemas']['NotifyAtMinutes'];
      coupon_code?: components['schemas']['CouponCode'];
      template?: components['schemas']['Template'];
      is_active?: boolean;
      sent_num?: number;
    };
  };
  parameters: {
    /** @description Channel ID to use for channel-level data. */
    ChannelIdOptional: number;
    /** @description Channel ID to use for channel-specific setting. */
    ChannelIdRequired: number;
  };
}

export interface operations {
  /** An array of abandoned cart emails on the store. */
  getAbandonedCartEmails: {
    parameters: {
      path: {
        store_hash: string;
      };
      query: {
        /** Channel ID to use for channel-level data. */
        channel_id?: components['parameters']['ChannelIdOptional'];
      };
    };
    responses: {
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['AbandondedCartEmail'][];
            meta?: { [key: string]: unknown };
          };
        };
      };
    };
  };
  /** Create Abandoned Cart Email template. */
  createEmailTemplate: {
    parameters: {
      path: {
        store_hash: string;
      };
      query: {
        /** Channel ID to use for channel-level data. */
        channel_id?: components['parameters']['ChannelIdOptional'];
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['AbandondedCartEmail'];
            meta?: { [key: string]: unknown };
          };
        };
      };
      /** Unprocessable Entity */
      422: {
        content: {
          'application/json': components['schemas']['SaveError'];
        };
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['AbandondedCartEmailPayload'];
      };
    };
  };
  /** Get a single Abandoned Cart Email template. */
  getAbandonedCartEmailTemplateId: {
    parameters: {
      path: {
        /** Abandoned Cart email template ID */
        id: number;
        store_hash: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['AbandondedCartEmail'];
            meta?: { [key: string]: unknown };
          };
        };
      };
    };
  };
  /** Update an email template. */
  updateAbandonedCartEmailsId: {
    parameters: {
      path: {
        /** Abandoned Cart email template ID */
        id: number;
        store_hash: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['AbandondedCartEmail'];
            meta?: { [key: string]: unknown };
          };
        };
      };
      /** Unprocessable Entity */
      422: {
        content: {
          'application/json': components['schemas']['SaveError'];
        };
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['AbandondedCartEmailPayload'];
      };
    };
  };
  /** Delete Abandoned Cart Email template. */
  deleteAbandonedCartEmailTemplateId: {
    parameters: {
      path: {
        /** Abandoned Cart email template ID */
        id: number;
        store_hash: string;
      };
    };
    responses: {
      /** No Content */
      204: never;
    };
  };
  /** Return default Abandoned Cart Email template. */
  GetDefaultAbandonedCartEmailTemplate: {
    parameters: {
      path: {
        store_hash: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          'application/json': {
            subject: string;
            body: string;
            translations: {
              locale: string;
              keys: {
                hello_phrase?: string;
              };
            }[];
          };
        };
      };
    };
  };
  /** Read Abandoned Cart Email Template settings. */
  GetAbandonedCartEmailTemplateSettings: {
    parameters: {
      path: {
        store_hash: string;
      };
      query: {
        /** Channel ID to use for channel-specific setting. */
        channel_id: components['parameters']['ChannelIdRequired'];
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          'application/json': components['schemas']['AbandonedCartSettings'];
        };
      };
    };
  };
  /** Update Abandoned Cart Email template settings. */
  updateEmailTemplateSettings: {
    parameters: {
      path: {
        store_hash: string;
      };
      query: {
        /** Channel ID to use for channel-level data. */
        channel_id?: components['parameters']['ChannelIdOptional'];
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          'application/json': components['schemas']['AbandonedCartSettings'];
        };
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['AbandonedCartSettings'];
      };
    };
  };
}

export interface external {}
