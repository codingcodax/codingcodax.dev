import { FC } from 'react';

import { A } from '@/components/ui';
import CommonLink from '@/components/common/Link';

interface LinkProps {
  href: string;
  props: any;
}

const Link: FC<LinkProps> = ({ href, props }) => (
  <CommonLink href={href}>
    {href.startsWith('http') ? (
      <A type='3d' {...props} target='_blank' rel='noopener noreferrer' />
    ) : (
      <A type='3d' {...props} />
    )}
  </CommonLink>
);

export default Link;
