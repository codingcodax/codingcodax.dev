import { FC } from 'react';

import { Box, Divider } from '@/components/ui';
import NavItem from './NavItem';

interface MobileNavProps {
  toggleMenu: () => void;
}

const MobileNav: FC<MobileNavProps> = ({ toggleMenu }) => {
  return (
    <Box as='nav'>
      <Box
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
      >
        <NavItem href='/' onClick={toggleMenu}>
          Home
        </NavItem>
        <NavItem href='/about'>About</NavItem>
        <NavItem href='/projects'>Projects</NavItem>
        <NavItem href='/blog'>Blog</NavItem>

        <Divider css={{ width: '50vw' }} />

        <NavItem href='/snippets'>Snippets</NavItem>
        <NavItem href='/community'>Community</NavItem>
        <NavItem href='/uses'>Uses</NavItem>
      </Box>
    </Box>
  );
};

export default MobileNav;
