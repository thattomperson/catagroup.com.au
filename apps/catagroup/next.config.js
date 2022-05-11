const withTM = require("next-transpile-modules")(["ui", "fathom"]);

module.exports = withTM({
  reactStrictMode: true,
});
