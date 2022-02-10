import { FC } from 'react';

import { MotionBox, Divider } from '@/components/ui';
import NavItem from './NavItem';
import { containerVariants } from 'animations/mobileNav';

interface MobileNavProps {
  toggleMenu: () => void;
}

const MobileNav: FC<MobileNavProps> = ({ toggleMenu }) => {
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
        <NavItem href='/' onClick={toggleMenu}>
          Home
        </NavItem>
        <NavItem href='/about' onClick={toggleMenu}>
          About
        </NavItem>
        <NavItem href='/projects' onClick={toggleMenu}>
          Projects
        </NavItem>
        <NavItem href='/blog' onClick={toggleMenu}>
          Blog
        </NavItem>

        <Divider css={{ width: '50vw' }} />

        <NavItem href='/snippets' onClick={toggleMenu}>
          Snippets
        </NavItem>
        <NavItem href='/community' onClick={toggleMenu}>
          Community
        </NavItem>
        <NavItem href='/uses' onClick={toggleMenu}>
          Uses
        </NavItem>
      </MotionBox>
    </MotionBox>
  );
};

export default MobileNav;
