import { useRouter } from 'next/router';

import { Box } from '@/components/ui';

import NavItem from './NavItem';
import ToggleTheme from '../ToggleTheme';

const links = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Projects', path: '/projects' },
  { title: 'Blog', path: '/blog' },
];

const Nav = () => {
  const router = useRouter();

  return (
    <Box
      as='nav'
      css={{
        display: 'grid',
        gridAutoFlow: 'column',
      }}
    >
      <Box
        css={{
          mr: '$8',
          display: 'grid',
          gridAutoFlow: 'column',
          alignItems: 'center',
          gridColumnGap: '$6',
        }}
      >
        {links.map(({ title, path }) => (
          <NavItem key={path} href={path} isActive={router.pathname === path}>
            {title}
          </NavItem>
        ))}
      </Box>

      <ToggleTheme />
    </Box>
  );
};

export default Nav;
