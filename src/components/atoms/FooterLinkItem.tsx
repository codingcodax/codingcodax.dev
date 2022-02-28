import { FC, ReactNode } from 'react';

import { A } from '~/components/ui';
import { Link } from '~/components/atoms';

interface LinkItemProps {
  href: string;
  children: ReactNode;
  isExternal: boolean;
  type: 'footer-link' | 'mobile-link';
}

const LinkItem: FC<LinkItemProps> = ({ href, children, isExternal, type }) => {
  return (
    <li>
      <Link href={href}>
        {isExternal ? (
          <A
            rel='noopener noreferrer'
            target='_blank'
            textDecoration='none'
            type={type}
          >
            {children}
          </A>
        ) : (
          <A textDecoration='none' type={type}>
            {children}
          </A>
        )}
      </Link>
    </li>
  );
};

export default LinkItem;
