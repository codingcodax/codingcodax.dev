import { Button } from '@/components/ui';

import Link from '@/components/common/Link';

const SeeMyWork = () => {
  return (
    <Link href='/#projects'>
      <Button
        as='a'
        variant='primary'
        size='large'
        css={{ textDecoration: 'none' }}
      >
        See My Work
      </Button>
    </Link>
  );
};

export default SeeMyWork;
