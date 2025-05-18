/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.pixelallimite.com', // ← ¡IMPORTANTE! Asegúrate de que está bien escrito con https y sin barra final
    generateRobotsTxt: true,
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: [], // páginas que NO quieres que aparezcan en el sitemap (de momento vacío)
  };
  