const pkg = require('./package.json');

const local = Object.keys(pkg.dependencies)
  .filter(packageName => pkg.dependencies[packageName] === '*')


const withTM = require("next-transpile-modules")(local);
module.exports = withTM({
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
  },
});
