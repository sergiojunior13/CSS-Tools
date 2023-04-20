/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://tools-css.vercel.app",
  generateRobotsTxt: true,
  changefreq: "weekly",
  robotsTxtOptions: {
    additionalSitemaps: [process.env.NEXT_PUBLIC_URL + "blog/blog-sitemap.xml"],
  },
};
