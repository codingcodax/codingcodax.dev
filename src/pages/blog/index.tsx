import { ChangeEvent, FC, useState } from 'react';

import type { PostMeta } from '~/@types';
import { inputVariants } from '~/animations/pages';
import { getAllPostsMeta } from '~/lib/mdx';
import { A, MotionBox, Heading, Text } from '~/components/ui';
import { Seo, Link, SearchBar } from '~/components/atoms';
import { Posts } from '~/components/containers';

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
    <MotionBox
      align='center'
      animate='show'
      css={{ w: '$full', maxWidth: '$container-sm', flexDirection: 'column' }}
      initial='hidden'
      variants={inputVariants}
    >
      <Seo name='Blog 🖊️' path='/blog' />

      <Heading as='h1' css={{ mt: '$12', mb: '$20' }}>
        Blog 🖊️
      </Heading>
      <Text>
        This page contains a list of posts I&apos;ve written on{' '}
        <Link href='https://coding.hashnode.dev'>
          <A rel='noopener noreferrer' target='_blank' type='3d'>
            Hashnode
          </A>
        </Link>{' '}
        and{' '}
        <Link href='https://dev.to/_codax_'>
          <A rel='noopener noreferrer' target='_blank' type='3d'>
            Dev.to
          </A>
        </Link>
      </Text>

      <Text>
        It is the home to all of my thoughts and ideas around web development
        and design.
      </Text>
      <SearchBar
        handleChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
        value={searchValue}
      />

      <Posts posts={filteredBlogPosts} />
    </MotionBox>
  );
};

export default Blog;
