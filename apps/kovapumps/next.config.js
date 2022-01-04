const withTM = require("next-transpile-modules")(["ui"]);
const path = require("path")

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['media.graphcms.com'],
  },
});
