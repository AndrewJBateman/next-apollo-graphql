// Next Strict Content Security Policy
const { createSecureHeaders } = require("next-secure-headers");

const path = require("path");
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  runtimeCaching,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["picsum.photos", "image.unsplash.com", "fruits-api.netlify.app"],
  },
  
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,

  pwa: {
    dest: "public",
    runtimeCaching,
  },

  webpack: (config) => {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },

  // new
  async headers() {
    return [
      {
        source: "/:path*",
        headers: createSecureHeaders({
          contentSecurityPolicy: {
            directives: {
              styleSrc: ["'self'", "'unsafe-inline'"],
              imgSrc: ["'self'", "data:"],
              fontSrc: "'self'",
              baseUri: "self",
              formAction: "self",
              frameAncestors: true,
            },
          },
          forceHTTPSRedirect: [
            true,
            { maxAge: 60 * 60 * 24 * 4, includeSubDomains: true },
          ],
          referrerPolicy: "same-origin",
        }),
      },
    ];
  },
};

module.exports = withPWA(nextConfig);
