import { ReadTimeResults } from 'reading-time';

export type PostMeta = {
  title: string;
  publishedAt: string;
  publishedAtFormatted?: string;
  summary: string;
  slug: string;
  category: 'post';
  image: string;
  readingTime?: ReadTimeResults;
};

export type Post = { meta: PostMeta; code?: any };
