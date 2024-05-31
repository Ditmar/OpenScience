// seo.config.js
module.exports = {
  title: 'Mi Proyecto',
  description: 'Descripción',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'http://localhost:3000',
    siteName: 'OPENSICENCE',
    images: [
      {
        url: 'http://localhost:3000/imagen.jpg',
        width: 800,
        height: 600,
        alt: 'Imagen',
      },
    ],
  },
  sitemap: {
    hostname: 'http://localhost:3000',
  },
};
