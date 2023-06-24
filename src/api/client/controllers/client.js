'use strict';

/**
 * A set of functions called "actions" for `client`
 */

module.exports = {
  exampleAction: async (ctx, next) => {

    const entries = await strapi.entityService.findMany(
      "api::client.client",
      {
        fields: ["name","email"],
        
      }
    );

    ctx.body = entries  ;
  }
};
