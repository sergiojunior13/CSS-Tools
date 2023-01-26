/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  trailingSlash: true,
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
