import { useMemo } from 'react';
import { GetStaticProps } from 'next';
import { getMDXComponent } from 'mdx-bundler/client';
import { format, parseISO } from 'date-fns';

import type { Post as PostType } from 'types';

import { getAllPostsMeta, getPostBySlug } from '@/lib/mdx';
import { components } from '@/components/common/MDXComponents';
import { Box, Heading, Text } from '@/components/ui';
import Details from '@/components/pages/blog/Details';

export const getStaticPaths = () => {
  const posts = getAllPostsMeta('post');
  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    // Return 404 page if path is not returned by getStaticPaths
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostType> = async (context) => {
  const slug = context.params?.slug as string;
  const post = await getPostBySlug(slug);

  return {
    props: {
      ...post,
      publishedAtFormatted: format(
        parseISO(post.meta.publishedAt),
        'dd MMMM, yyyy'
      ),
    },
  };
};

const Post = ({ meta, code }: PostType) => {
  // This is a bit weird, but this is how mdx-bundler recommends it.
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Box
      align='center'
      css={{
        maxWidth: '800px',
        '.rehype-code-title': {
          p: '$4',
          mt: '$4',
          width: 'fit-content',
          fontSize: '$sm',
          fontWeight: '$bold',
          bg: '$subtleBackground',
          border: '1px solid $subtleBorder',
          borderBottom: 'none',
          borderTopLeftRadius: '$sm',
          borderTopRightRadius: '$sm',
          position: 'relative',

          '&::after': {
            content: '',
            position: 'absolute',
          },
        },
        '.rehype-code-title + pre': {
          mt: '$0',
          borderTopLeftRadius: '0',
        },
      }}
    >
      <Heading
        as='h1'
        css={{
          mx: '$auto',
          mt: '$20',
          mb: '$2',
          maxWidth: '$container-sm',
          lineHeight: '$none',
        }}
      >
        {meta.title}
      </Heading>

      <Box align='center' css={{ maxWidth: '$container-sm' }}>
        <Details
          readingTime={meta.readingTime}
          publishedAtFormatted={meta.publishedAtFormatted}
        />
      </Box>

      <Text
        css={{
          mt: '$4',
          mb: '$10',
          mx: '$auto',
          maxWidth: '$container-sm',
          color: '$lowTextColor',
        }}
      >
        {meta.summary}
      </Text>
      <Component components={components} />
    </Box>
  );
};

export default Post;
