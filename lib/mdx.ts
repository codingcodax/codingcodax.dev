import path from 'path';
import { readFileSync } from 'fs';
import glob from 'glob';
import { format, parseISO } from 'date-fns';
import matter from 'gray-matter';
import gfmPlugin from 'remark-gfm';
import slugPlugin from 'remark-slug';
import mdxPrism from 'mdx-prism';
import { bundleMDX } from 'mdx-bundler';

import type { PostMeta } from 'types';
import readingTime from 'reading-time';

const ROOT_PATH = process.cwd();
export const POSTS_PATH = path.join(ROOT_PATH, 'posts');

export const getAllPostsMeta = (
  category?: PostMeta['category']
): PostMeta[] => {
  const PATH = path.join(POSTS_PATH);

  // Get all file paths in the posts folder (that end with .mdx)
  const paths = glob.sync(`${PATH}/**/*.mdx`);

  const posts: PostMeta[] = paths.map((filePath) => {
    // Get the content of the file
    const source = readFileSync(path.join(filePath), 'utf8');

    // Get the file name without .mdx
    const slug = path.basename(filePath).replace(/\.mdx$/, '');
    // Use gray-matter to extract the post meta from post content
    const { data, content } = matter(source) as unknown as {
      data: PostMeta;
      content: any;
    };

    const publishedAtFormatted = format(
      parseISO(data.publishedAt),
      'dd MMMM, yyyy'
    );

    return {
      ...data,
      slug,
      publishedAtFormatted,
      readingTime: readingTime(content),
    };
  });

  return (
    posts
      // filter post by category if specified
      .filter((post: PostMeta) => {
        // default to all posts
        if (!category) return true;

        return post.category === category;
      })

      // sort posts by published date
      .sort(
        (a, b) =>
          Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
      )
  );
};

// Get content of specific post
export const getPostBySlug = async (slug: string) => {
  // Get the content of the file
  const source = readFileSync(path.join(POSTS_PATH, `${slug}.mdx`), 'utf8');

  const { code, frontmatter } = await bundleMDX({
    source,
    xdmOptions(options) {
      options.remarkPlugins = [
        ...(options?.remarkPlugins ?? []),
        slugPlugin,
        gfmPlugin,
      ];

      options.rehypePlugins = [mdxPrism];

      return options;
    },
    esbuildOptions(options) {
      options.target = 'esnext';

      return options;
    },
  });

  const publishedAtFormatted = format(
    parseISO(frontmatter.publishedAt),
    'dd MMMM, yyyy'
  );

  const meta = {
    ...frontmatter,
    publishedAtFormatted,
    slug,
    readingTime: readingTime(code),
  } as PostMeta;

  return { meta, code };
};