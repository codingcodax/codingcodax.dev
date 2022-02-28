import { FC } from 'react';

import { A } from '~/components/ui';
import { Link as AtomLink } from '~/components/atoms';

interface LinkProps {
  href: string;
  props: any;
}

const Link: FC<LinkProps> = ({ href, props }) => (
  <AtomLink href={href}>
    {href.startsWith('http') ? (
      <A type='3d' {...props} rel='noopener noreferrer' target='_blank' />
    ) : (
      <A type='default' {...props} />
    )}
  </AtomLink>
);

export default Link;
