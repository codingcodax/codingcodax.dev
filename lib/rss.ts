import { mkdirSync, writeFileSync } from 'fs';
import { Feed } from 'feed';

import { getAllPostsMeta } from './mdx';

const generateRssFeed = () => {
  const posts = getAllPostsMeta();
  const SITE_URL = 'https://www.codingcodax.dev/';
  const date = new Date();
  const author = {
    name: 'Alexis Guzman',
    email: 'codaxtech@gmail.com',
    link: 'https://twitter.com/codingcodax',
  };

  const feed = new Feed({
    title: 'Alexis Guzman Blog',
    description: '',
    id: SITE_URL,
    link: SITE_URL,
    image: `${SITE_URL}/favicons/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, Alexis Guzman`,
    updated: date,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${SITE_URL}/rss/fedd.xml`,
      json: `${SITE_URL}/rss/feed.json`,
      atom: `${SITE_URL}/rss/atom.xml`,
    },
    author,
  });

  posts.map(({ slug, title, summary, publishedAt }) => {
    const URL = `${SITE_URL}/blog/${slug}`;

    feed.addItem({
      title,
      id: URL,
      link: URL,
      description: summary,
      content: summary,
      author: [author],
      contributor: [author],
      date: new Date(publishedAt),
    });
  });

  mkdirSync('./public/rss', { recursive: true });
  writeFileSync('./public/rss/feed.xml', feed.rss2());
  writeFileSync('./public/rss/arom.xml', feed.atom1());
  writeFileSync('./public/rss/feed.json', feed.json1());
};

export default generateRssFeed;
