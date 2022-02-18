const title = 'Alexis Guzman – Front-end developer';
export const description =
  'Freelance front-end web developer focused on building scalable, maintainable and accessible solutions on the web.';
export const domain = 'https://codingcodax.dev';

const SEO = {
  title,
  description,
  canonical: domain,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: domain,
    title,
    description,
    sit_name: 'title',
    images: [
      {
        url: `${domain}/og.png`,
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: '@codingcodax',
    site: '@codingcodax',
    cardType: 'summary_large_image',
  },
};

export default SEO;
