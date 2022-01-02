const withTM = require("next-transpile-modules")(["@catagroup/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
