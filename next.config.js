/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = {
    reactStrictMode: true,
    pwa: {
        disable: process.env.NODE_ENV === "development",
        dest: "public",
    },
};

module.exports = withPWA(nextConfig);
