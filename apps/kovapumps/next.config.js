const withTM = require("next-transpile-modules")(["@catagroup/ui"]);
const path = require("path")

module.exports = withTM({
  reactStrictMode: true,
  webpack: (config, options) => {
    if (options.isServer) {
      config.externals = ['react', ...config.externals];
    }

    config.resolve.alias['react'] = path.resolve(__dirname, '..', '..', 'node_modules', 'react');

    return config
  },
});
