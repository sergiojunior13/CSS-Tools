/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_URL || "https://tools-css.vercel.app",
  generateRobotsTxt: true,
  changefreq: "weekly",
  exclude: ["/blog/blog-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [process.env.NEXT_PUBLIC_URL + "blog/blog-sitemap.xml"],
  },
};
