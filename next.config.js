/* eslint-disable no-undef */
/* jshint node: true */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  images: {
    domains: ['images.squarespace-cdn.com'],
  },
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
