import { useRouter } from 'next/router';

import { mainRoutes } from '~/data/links';
import { Box } from '~/components/ui';
import { NavItem, ToggleTheme } from '~/components/atoms';

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
        as='ul'
        css={{
          mr: '$8',
          display: 'grid',
          gridAutoFlow: 'column',
          alignItems: 'center',
          gridColumnGap: '$6',
        }}
      >
        {mainRoutes.map(({ name, icon, href, isExternal, isActive }, index) => (
          <NavItem
            key={`${name}-${index}`}
            href={href}
            isActive={isActive(router.asPath, href)}
            isExternal={isExternal}
          >
            {name || icon}
          </NavItem>
        ))}
      </Box>

      <ToggleTheme />
    </Box>
  );
};

export default Nav;
