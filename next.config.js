/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  trailingSlash: true,
  rewrites: async () => [
    {
      source: "/dynamic-posts-sitemap.xml",
      destination: "/dynamic-posts-sitemap",
    },
  ],
  headers: async function () {
    return [
      {
        source: "/:path*/",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
    ];
  },
};
