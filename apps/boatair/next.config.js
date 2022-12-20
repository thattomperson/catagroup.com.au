const pkg = require('./package.json');

const local = Object.keys(pkg.dependencies)
  .filter(packageName => pkg.dependencies[packageName] === '*')


const withTM = require("next-transpile-modules")(local);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
}

module.exports = withTM(nextConfig);
