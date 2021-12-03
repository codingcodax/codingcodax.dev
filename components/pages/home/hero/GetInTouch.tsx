import NextLink from 'next/link';

import { Button } from '@/components/ui';

const GetInTouch = () => {
  return (
    <NextLink href='/about#contact' passHref>
      <Button
        as='a'
        variant='primary'
        size='large'
        css={{ textDecoration: 'none' }}
      >
        Get In Touch
      </Button>
    </NextLink>
  );
};

export default GetInTouch;
