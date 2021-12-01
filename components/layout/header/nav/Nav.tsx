import { Box } from '@/components/ui';

import NavItem from './NavItem';

const Nav = () => {
  return (
    <Box
      as='nav'
      css={{ display: 'grid', gridAutoFlow: 'column', gridColumnGap: '$4' }}
    >
      <Box as='ul'>
        <NavItem href='/'>Home</NavItem>
        <NavItem href='/about'>About</NavItem>
      </Box>
    </Box>
  );
};

export default Nav;
