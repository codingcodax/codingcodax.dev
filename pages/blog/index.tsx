import { A, Heading, Text } from '@/components/ui';

import CurrentlyBuilding from '@/components/common/CurrentlyBuilding';
import Link from '@/components/common/Link';

const Blog = () => {
  return (
    <CurrentlyBuilding>
      <Heading>Blog 🖊️</Heading>
      <Text>
        This page will contain a list of posts I&apos;ve written on{' '}
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
        It will be home to all of my thoughts and ideas around web development
        and design.
      </Text>
    </CurrentlyBuilding>
  );
};

export default Blog;
