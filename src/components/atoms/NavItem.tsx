import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

import { styled } from '~/theme/config';
import { childrenVariants } from '~/animations/mobileNav';
import { A } from '~/components/ui';

import Link from './Link';

interface NavItemProps {
  href: string;
  isActive: boolean;
  isExternal: boolean;
  children: ReactNode;
  onClick?: () => void;
}

const MotionLi = motion(styled('li'));

const NavItem: FC<NavItemProps> = ({
  href,
  isActive,
  isExternal,
  children,
  onClick,
}) => {
  return (
    <MotionLi
      css={{
        listStyleType: 'none',
      }}
      variants={childrenVariants}
      onClick={onClick}
    >
      <Link href={href}>
        {isExternal ? (
          <A
            className={isActive ? 'active' : ''}
            css={{ color: isActive ? '$primary' : '$lowTextColor' }}
            rel='noopener noreferrer'
            target='_blank'
            textDecoration='none'
            type='nav-item'
          >
            <span>{children}</span>
          </A>
        ) : (
          <A
            className={isActive ? 'active' : ''}
            css={{ color: isActive ? '$primary' : '$lowTextColor' }}
            textDecoration='none'
            type='nav-item'
          >
            <span>{children}</span>
          </A>
        )}
      </Link>
    </MotionLi>
  );
};

export default NavItem;
