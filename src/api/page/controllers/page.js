"use strict";

/**
 * page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::page.page", ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params; // Assuming the slug is passed as a parameter
    console.log(ctx.params);
    console.log({ id });
    const entity = await strapi.query("api::page.page").findOne({
      where: {
        slug: id,
      },
      populate: ["articles.Image"],
    });

    console.log(entity);
    // Assuming 'page' is the name of your content type

    if (!entity) {
      console.log("ok");
      return ctx.notFound("Entity not found");
    }

    const sanitizedEntry = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntry);
  },
}));
