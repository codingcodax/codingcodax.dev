import { FC } from 'react';
import { useRouter } from 'next/router';

import { MotionBox, Divider } from '@/components/ui';
import NavItem from './NavItem';
import { containerVariants } from 'animations/mobileNav';

const links = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Projects', path: '/projects' },
  { title: 'Blog', path: '/blog' },
];

const subLinks = [
  { title: 'Snippets', path: '/snippets' },
  { title: 'Community', path: '/community' },
  { title: 'Uses', path: '/blog/uses' },
];

interface MobileNavProps {
  toggleMenu: () => void;
}

const MobileNav: FC<MobileNavProps> = ({ toggleMenu }) => {
  const router = useRouter();

  return (
    // @ts-ignore next-lite
    <MotionBox as='nav' animate={{ x: 0, opacity: 1 }}>
      <MotionBox
        // @ts-ignore next-lite
        as='ul'
        css={{
          p: '$3',
          mt: '$8',
          textAlign: 'end',
          display: 'grid',
          justifyContent: 'end',
          gridRowGap: '$8',
          fontSize: '$xl',
        }}
        variants={containerVariants}
        initial='hidden'
        animate='show'
      >
        {links.map(({ title, path }) => (
          <NavItem
            key={title}
            href={path}
            isActive={router.pathname === path}
            onClick={toggleMenu}
          >
            {title}
          </NavItem>
        ))}

        <Divider css={{ width: '50vw' }} />

        {subLinks.map(({ title, path }) => (
          <NavItem
            key={title}
            href={path}
            isActive={router.pathname === path}
            onClick={toggleMenu}
          >
            {title}
          </NavItem>
        ))}
      </MotionBox>
    </MotionBox>
  );
};

export default MobileNav;
