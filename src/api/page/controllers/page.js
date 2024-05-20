"use strict";

/**
 * page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController(
//   "api::page.page"
//   // , ({ strapi }) => ({
//   //   async findOne(ctx) {
//   //     console.log(ctx.query.search);

//   //     const pageSize = 2;
//   //     const currentPage = parseInt(ctx.query.page) || 1;
//   //     const { id } = ctx.params; // Assuming the slug is passed as a parameter

//   //     // Retrieve the page based on the provided slug
//   //     const page = await strapi.query("api::page.page").findOne({
//   //       where: {
//   //         slug: id,
//   //       },
//   //     });

//   //     if (!page) {
//   //       return ctx.notFound("Page not found");
//   //     }

//   //     // Count the total number of articles associated with the page
//   //     const articlesCount = await strapi.query("api::article.article").count({});

//   //     // Calculate pagination metadata
//   //     const pageCount = Math.ceil(articlesCount / pageSize);
//   //     const start = (currentPage - 1) * pageSize;

//   //     // Fetch articles associated with the page using pagination parameters
//   //     let articles;
//   //     if (ctx.query.search) {
//   //       console.log("cha");
//   //       console.log(ctx.query.search);
//   //       articles = await strapi.query("api::article.article").findMany({
//   //         filters: {
//   //           title: {
//   //             $startsWith: "at",
//   //           },
//   //         },
//   //         limit: pageSize,
//   //         // start: start,
//   //         offset: start,

//   //         _where: {
//   //           page: page.id,
//   //         },

//   //         // // Populate any additional relations if needed
//   //         populate: ["Image", "pages", "comments"],
//   //       });
//   //     } else {
//   //       articles = await strapi.query("api::article.article").findMany({
//   //         limit: pageSize,
//   //         // start: start,
//   //         offset: start,

//   //         _where: {
//   //           page: page.id, // Assuming "page" is the field linking to the page model
//   //         },

//   //         // // Populate any additional relations if needed
//   //         populate: ["Image", "pages", "comments"],
//   //       });
//   //     }

//   //     // Prepare pagination metadata
//   //     const paginationMeta = {
//   //       page: currentPage,
//   //       pageSize: pageSize,
//   //       pageCount: pageCount,
//   //       total: articlesCount,
//   //     };

//   //     // Return the response with metadata
//   //     return {
//   //       body: {
//   //         data: articles,
//   //         meta: {
//   //           pagination: paginationMeta,
//   //         },
//   //       },
//   //     };
//   //   },
//   // })
// );

module.exports = createCoreController("api::page.page", ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params; // Assuming the slug is passed as a parameter

    let locale = ctx.query.locale || "en";
    console.log({ locale });
    const entity = await strapi.query("api::page.page").findOne({
      where: {
        slug: id,
        locale: locale,
      },

      // populate: ["Image", "pages", "comments"],
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
