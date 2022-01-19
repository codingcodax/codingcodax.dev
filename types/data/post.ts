import { ReadTimeResults } from 'reading-time';

export type PostMeta = {
  title: string;
  publishedAt: string;
  publishedAtFormatted?: string;
  summary: string;
  slug: string;
  category: 'draft' | 'project' | 'post';
  image: string;
  imageBlur: string;
  readingTime?: ReadTimeResults;
};

export type Post = { meta: PostMeta; code?: any };
