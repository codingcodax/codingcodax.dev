import { FC } from 'react';

import { Heading as UIHeading } from '@/components/ui';

interface HeadingProps {
  as: string;
  props: any;
}

const Heading: FC<HeadingProps> = ({ as, props }) => (
  <UIHeading
    as={as}
    css={{
      mt: '$8',
      mb: '$4',
      mx: '$auto',
      maxWidth: '$container-sm',
      position: 'relative',
      '& code': { fontSize: 'inherit' },
      '&>a.anchor': {
        h: '$full',
        w: '$full',
        color: '$lowTextColor',
        position: 'absolute',
        cursor: 'pointer',
      },
      '&>a.anchor::after': {
        content: '#',
        opacity: '0',
        position: 'absolute',
        left: '-2rem',
        transition: 'opacity 0.2s',
      },
      '&>a.anchor:hover::after': {
        opacity: '0.2',
      },
    }}
    {...props}
  />
);

export default Heading;
