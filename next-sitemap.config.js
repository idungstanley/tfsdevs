/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tfsdevs.vercel.app/', 
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }]
  }
};
// This configuration file is used to generate a sitemap for a Next.js application.
// It specifies the site URL, enables the generation of a robots.txt file,
// sets the sitemap size, change frequency, and priority for the pages.
// It also excludes the server-sitemap.xml from being included in the sitemap.
// The robots.txt options specify that all user agents are allowed to crawl the site.
// Make sure to replace 'https://yourdomain.com' with your actual domain.
// The sitemap will be generated with a maximum of 7000 URLs per file.
// The change frequency is set to 'weekly' and the priority is set to 0.7.
// The configuration is exported as a module for use in the Next.js application.
// This file is typically located in the root of your Next.js project.
// You can customize the options according to your needs.
// For more information, refer to the next-sitemap documentation: