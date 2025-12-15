import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aiworkshop.london';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/request-invite`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/session`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/one-day-course`,
      lastModified: new Date(),
    },
  ]
}
