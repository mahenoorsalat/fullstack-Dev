export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://thefullstack-dev.vercel.app/sitemap.xml',
  }
}