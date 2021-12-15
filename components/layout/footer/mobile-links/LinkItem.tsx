import { FC, ReactNode } from 'react';

import { A } from '@/components/ui/';

import Link from '@/components/common/Link';

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
          textDecoration='none'
          type='mobile-link'
        >
          {children}
        </A>
      </Link>
    </li>
  );
};

export default LinkItem;
