/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://tools-css.vercel.app",
  generateRobotsTxt: true,
  changefreq: "weekly",
};
