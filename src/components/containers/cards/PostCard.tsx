import { PostMeta } from '~/@types';
import { Grid, Heading, Text } from '~/components/ui';
import { Details, Link } from '~/components/atoms';

const PostCard = ({
  title,
  summary,
  slug,
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
          bg: '$subtleBackground',
          border: '1px solid $normalBorder',
          borderRadius: '$sm',
          transition: 'border-color ease-in-out $normal',

          '&:hover': {
            borderColor: '$hoverBorder',

            h2: {
              color: '$primary',
            },
          },
        }}
      >
        <Heading
          css={{ transition: 'color ease-in-out $normal' }}
          fontWeight='bold'
          size='xl'
        >
          {title}
        </Heading>

        <Details
          publishedAtFormatted={publishedAtFormatted}
          readingTime={readingTime}
        />

        <Text lineHeight='relaxed' size='md'>
          {summary}
        </Text>
      </Grid>
    </Link>
  );
};

export default PostCard;
