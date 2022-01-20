import Image from 'next/image';

import { Center, Grid, Heading, Text } from '@/components/ui';

import type { PostMeta } from 'types';
import Link from '@/components/common/Link';
import { CalendarIcon, ClockIcon } from '@/components/icons';

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
        direction='column'
        css={{
          gridTemplateColumns: 'auto 1fr',
          gridColumnGap: '$6',
          textDecoration: 'none',
          '&:hover': {
            h2: {
              color: '$primary',
            },
          },
        }}
      >
        <Center
          css={{
            height: '100px',
            width: '150px',
            borderRadius: '$sm',
            overflow: 'hidden',
          }}
        >
          <Image
            width={600}
            height={400}
            alt={title}
            src={image}
            placeholder='blur'
            blurDataURL={imageBlur}
            objectFit='cover'
          />
        </Center>

        <Grid css={{ gridTemplateRows: 'auto auto 1fr' }}>
          <Heading
            size='xl'
            fontWeight='bold'
            css={{ transition: 'color ease-in-out $normal' }}
          >
            {title}
          </Heading>
          <Text
            css={{
              display: '-webkit-box',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              '-webkit-line-clamp': '2',
              '-webkit-box-orient': 'vertical',
              fontSize: '$md',
            }}
          >
            {summary}
          </Text>

          <Grid
            direction='column'
            css={{
              alignSelf: 'end',
              justifyContent: 'start',
              gridColumnGap: '$4',
              color: '$grayTextColor',
            }}
          >
            <Center>
              <CalendarIcon css={{ width: '$5', mr: '$1' }} />
              <Text as='span' size='sm' css={{ color: '$grayTextColor' }}>
                {readingTime?.text}
              </Text>
            </Center>

            <Center>
              <ClockIcon css={{ w: '$5', mr: '$1' }} />
              <Text as='span' size='sm' css={{ color: '$grayTextColor' }}>
                {publishedAtFormatted}
              </Text>
            </Center>
          </Grid>
        </Grid>
      </Grid>
    </Link>
  );
};

export default Post;
