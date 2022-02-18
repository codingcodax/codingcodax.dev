import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

import { styled } from '@/theme/config/';
import { A } from '@/components/ui/';

import { childrenVariants } from 'animations/mobileNav';

import Link from '@/components/common/Link';

interface NavItemProps {
  href: string;
  isActive: boolean;
  children: ReactNode;
  onClick?: () => void;
}

const MotionLi = motion(styled('li'));

const NavItem: FC<NavItemProps> = ({ href, isActive, children, onClick }) => {
  return (
    <MotionLi
      css={{
        listStyleType: 'none',
      }}
      onClick={onClick}
      variants={childrenVariants}
    >
      <Link href={href}>
        <A
          textDecoration='none'
          type='nav-item'
          className={isActive ? 'active' : ''}
          css={{ color: isActive ? '$primary' : '$lowTextColor' }}
        >
          <span>{children}</span>
        </A>
      </Link>
    </MotionLi>
  );
};

export default NavItem;
