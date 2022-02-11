import { useMemo } from 'react';
import { GetStaticProps } from 'next';
import { getMDXComponent } from 'mdx-bundler/client';
import { format, parseISO } from 'date-fns';

import type { Post as PostType } from 'types';

import { getAllPostsMeta, getPostBySlug } from '@/lib/mdx';
import { components } from '@/components/pages/blog/mdx-components';
import { Box, Heading, MotionBox, Text } from '@/components/ui';
import Details from '@/components/pages/blog/Details';
import ProgressBar from '@/components/pages/blog/ProgressBar';
import { inputVariants } from 'animations/pages';
import dynamic from 'next/dynamic';

const DynamicBackToTop = dynamic(
  () => import('../../components/pages/blog/BackToTop'),
  { ssr: false }
);

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
    <>
      <ProgressBar />
      <MotionBox
        align='center'
        css={{
          maxWidth: '800px',
          position: 'relative',

          '.rehype-code-title': {
            pt: '$2',
            pb: '$1',
            px: '$4',
            mt: '$4',
            ml: '$4',
            '@bp1': { marginLeft: '10%' },
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
              height: '1px',
              width: '100%',
              bg: '$subtleBackground',
              position: 'absolute',
              left: '0',
              bottom: '-1px',
              zIndex: '$docked',
            },
          },
          '.rehype-code-title + div.pre-container': {
            mt: '$0',
          },

          '.toc': {
            p: '$4',
            my: '$8',
            mx: '$auto',
            maxWidth: '$container-sm',
            bg: '$subtleBackground',
            borderRadius: '$sm',
          },
          '.toc>p.title': {
            fontSize: '$md',
            fontWeight: '$bold',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          },
          '.toc>ol': { p: '$0' },
          '.toc>ol>div a': { p: '$0', textDecoration: 'none' },
          '.toc>ol>div::before': { color: '$lowTextColor' },
        }}
        variants={inputVariants}
        initial='hidden'
        animate='show'
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
        <DynamicBackToTop />
      </MotionBox>
    </>
  );
};

export default Post;
