import { Button } from '@/components/ui';

import Link from '@/components/common/Link';

const GetInTouch = () => {
  return (
    <Link href='/about#contact'>
      <Button
        as='a'
        variant='primary'
        size='large'
        outlined
        css={{ textDecoration: 'none' }}
      >
        Get In Touch
      </Button>
    </Link>
  );
};

export default GetInTouch;
