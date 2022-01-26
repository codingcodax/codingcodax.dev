import { Grid, Heading, Text } from '@/components/ui';

import type { PostMeta } from 'types';
import Link from '@/components/common/Link';
import Details from '../Details';

const Post = ({
  title,
  summary,
  slug,
  image,
  imageBlur,
  readingTime,
  publishedAtFormatted,
}: PostMeta) => {
  return (
    <Link href={`/blog/${slug}`}>
      <Grid
        as='a'
        css={{
          p: '$8',
          textDecoration: 'none',
          bg: '$mauve200',
          border: '1px solid $dividerColor',
          borderRadius: '$sm',
          transition: 'background ease-in-out $normal',

          '&:hover': {
            bg: '$mauve300',

            h2: {
              color: '$primary',
            },
          },
        }}
      >
        <Heading
          size='xl'
          fontWeight='bold'
          css={{ transition: 'color ease-in-out $normal' }}
        >
          {title}
        </Heading>

        <Details
          readingTime={readingTime}
          publishedAtFormatted={publishedAtFormatted}
        />

        <Text size='md' lineHeight='relaxed'>
          {summary}
        </Text>
      </Grid>
    </Link>
  );
};

export default Post;
