module.exports = {
  siteUrl: process.env.SITE_URL || 'https://iamsdas.vercel.app',
  generateRobotsTxt: true,
  exclude: ['/sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://iamsdas.vercel.app/sitemap.xml'],
  },
};
