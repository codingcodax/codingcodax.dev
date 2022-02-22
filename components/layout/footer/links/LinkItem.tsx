import { FC, ReactNode } from 'react';

import { A } from '@/components/ui/';

import Link from '@/components/common/Link';

interface LinkItemProps {
  href: string;
  children: ReactNode;
  isExternal: boolean;
}

const LinkItem: FC<LinkItemProps> = ({ href, children, isExternal }) => {
  return (
    <li>
      <Link href={href}>
        {isExternal ? (
          <A
            target='_blank'
            rel='noopener noreferrer'
            textDecoration='none'
            type='footer-link'
          >
            {children}
          </A>
        ) : (
          <A textDecoration='none' type='footer-link'>
            {children}
          </A>
        )}
      </Link>
    </li>
  );
};

export default LinkItem;
