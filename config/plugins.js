module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
  },
  documentation: {
    config: {
      "x-strapi-config": {
        plugins: ["menus", "upload", "users-permissions"],
      },
    },
  },
});
