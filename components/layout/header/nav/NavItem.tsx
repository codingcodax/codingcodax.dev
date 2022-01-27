import { FC, ReactNode } from 'react';

import { styled } from '@/theme/config/';
import { A } from '@/components/ui/';

import Link from '@/components/common/Link';

interface NavItemProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}

const Li = styled('li');

const NavItem: FC<NavItemProps> = ({ href, children, onClick }) => {
  return (
    <Li
      css={{ listStyleType: 'none', color: '$lowTextColor' }}
      onClick={onClick}
    >
      <Link href={href}>
        <A textDecoration='none' type='nav-item'>
          <span>{children}</span>
        </A>
      </Link>
    </Li>
  );
};

export default NavItem;
