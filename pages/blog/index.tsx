import { ChangeEvent, FC, useState } from 'react';

import type { PostMeta } from 'types';

import { A, Box, Heading, Text } from '@/components/ui';

import { getAllPostsMeta } from '@/lib/mdx';

import Link from '@/components/common/Link';
import SearchBar from '@/components/pages/blog/SearchBar';
import Posts from '@/components/pages/blog/posts';

export const getStaticProps = () => {
  const posts = getAllPostsMeta('post');

  return { props: { posts } };
};

interface BlogProps {
  posts: PostMeta[];
}

const Blog: FC<BlogProps> = ({ posts }) => {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <Box
      align='center'
      css={{ w: '$full', maxWidth: '$container-sm', flexDirection: 'column' }}
    >
      <Heading as='h1' css={{ mt: '$12', mb: '$20' }}>
        Blog 🖊️
      </Heading>
      <Text>
        This page contains a list of posts I&apos;ve written on{' '}
        <Link href='https://codax.hashnode.dev'>
          <A target='_blank' rel='noopener noreferrer'>
            Hashnode
          </A>
        </Link>{' '}
        and{' '}
        <Link href='https://dev.to/_codax_'>
          <A target='_blank' rel='noopener noreferrer'>
            Dev.to
          </A>
        </Link>
      </Text>

      <Text>
        It is the home to all of my thoughts and ideas around web development
        and design.
      </Text>
      <SearchBar
        value={searchValue}
        handleChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
      />

      <Posts posts={filteredBlogPosts} />
    </Box>
  );
};

export default Blog;
