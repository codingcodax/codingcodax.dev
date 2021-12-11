import { FC, ReactNode } from 'react';

import { styled } from '@/theme/theme.config';

import Link from '@/components/common/Link';

const A = styled('a');

interface LinkItemProps {
  href: string;
  children: ReactNode;
}

const LinkItem: FC<LinkItemProps> = ({ href, children }) => {
  return (
    <li>
      <Link href={href}>
        <A
          target='_blank'
          rel='noopener noreferrer'
          css={{
            h: '$6',
            display: 'inline-block',
            textDecoration: 'none',
            color: '$grayTextColor',
            transition: 'color $normal ease-in-out',
            '&:hover': { color: '$grayDarkTextColor' },
          }}
        >
          {children}
        </A>
      </Link>
    </li>
  );
};

export default LinkItem;
