const withTM = require("next-transpile-modules")(["ui", "fathom"]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['media.graphcms.com', 'media.graphassets.com'],
  },
});
