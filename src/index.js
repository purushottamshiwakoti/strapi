"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};

module.exports = (plugin) => {
  // Get current `MenuItem` attributes.
  const defaultAttrs = plugin.contentTypes["menu-item"].schema.attributes;

  // Define custom attributes for `MenuItem` the same way they would be defined
  // on any other schema.
  const customAttrs = {
    example_field: {
      type: "string",
    },
  };

  // Extend the `MenuItem` content type with custom attributes.
  plugin.contentTypes["menu-item"].schema.attributes = {
    ...defaultAttrs,
    ...customAttrs,
  };

  return plugin;
};
