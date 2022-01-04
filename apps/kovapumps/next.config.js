const withTM = require("next-transpile-modules")(["ui"]);
const path = require("path")

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['media.graphcms.com'],
  },
  webpack: (config, options) => {
    if (options.isServer) {
      config.externals = ['react', ...config.externals];
    }

    config.resolve.alias['react'] = path.resolve(__dirname, '..', '..', 'node_modules', 'react');

    return config
  },
});
