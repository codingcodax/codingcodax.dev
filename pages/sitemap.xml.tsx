import { GetServerSideProps } from 'next';
import { readdirSync } from 'fs';

import { getAllPostsMeta } from '@/lib/mdx';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const BASE_URL = 'https://www.codingcodax.dev';

  const staticPaths = readdirSync('pages')
    .filter((staticPage) => {
      return ![
        'api',
        'product',
        '_app.tsx',
        '_document.tsx',
        '404.tsx',
        'sitemap.xml.tsx',
      ].includes(staticPage);
    })
    .map((staticPagePath) => `${BASE_URL}/${staticPagePath}`);

  const posts = getAllPostsMeta('post');

  const dynamicPaths = posts.map((post) => `${BASE_URL}/post/${post.title}`);

  const allPaths = [...staticPaths, ...dynamicPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return { props: {} };
};

const Sitemap = () => {
  return null;
};

export default Sitemap;
