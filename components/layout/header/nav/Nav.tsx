import { styled } from '@/theme/theme.config';

import { Box } from '@/components/ui';

import NavItem from './NavItem';
import ToggleTheme from '../ToggleTheme';

const Ul = styled('ul');

const Nav = () => {
  return (
    <Box
      as='nav'
      css={{
        display: 'grid',
        gridAutoFlow: 'column',
      }}
    >
      <Ul
        css={{
          mr: '$8',
          display: 'grid',
          gridAutoFlow: 'column',
          alignItems: 'center',
          gridColumnGap: '$6',
        }}
      >
        <NavItem href='/'>Home</NavItem>
        <NavItem href='/about'>About</NavItem>
        <NavItem href='/projects'>Projects</NavItem>
        <NavItem href='/blog'>Blog</NavItem>
      </Ul>

      <ToggleTheme />
    </Box>
  );
};

export default Nav;
