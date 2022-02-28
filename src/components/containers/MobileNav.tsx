import { FC } from 'react';
import { useRouter } from 'next/router';

import { mainRoutes, subRoutes } from '~/data/links';
import { containerVariants } from '~/animations/mobileNav';
import { Divider, MotionBox } from '~/components/ui';
import { NavItem, ToggleTheme } from '~/components/atoms';

interface MobileNavProps {
  toggleMenu: () => void;
}

const MobileNav: FC<MobileNavProps> = ({ toggleMenu }) => {
  const router = useRouter();

  console.log(router.asPath);

  return (
    // @ts-ignore next-lite
    <MotionBox animate={{ x: 0, opacity: 1 }} as='nav'>
      <MotionBox
        // @ts-ignore next-lite
        animate='show'
        as='ul'
        css={{
          p: '$3',
          mt: '$8',
          display: 'grid',
          justifyItems: 'end',
          gridRowGap: '$8',
          fontSize: '$xl',
        }}
        initial='hidden'
        variants={containerVariants}
      >
        {mainRoutes.map(({ name, icon, href, isExternal, isActive }) => (
          <NavItem
            key={name}
            href={href}
            isActive={isActive(router.asPath, href)}
            isExternal={isExternal}
            onClick={toggleMenu}
          >
            {name || icon}
          </NavItem>
        ))}

        <Divider css={{ width: '50vw' }} />

        {subRoutes.map(({ name, icon, href, isExternal, isActive }) => (
          <NavItem
            key={name}
            href={href}
            isActive={isActive(router.asPath, href)}
            isExternal={isExternal}
            onClick={toggleMenu}
          >
            {name || icon}
          </NavItem>
        ))}

        <Divider css={{ width: '50vw' }} />

        <ToggleTheme />
      </MotionBox>
    </MotionBox>
  );
};

export default MobileNav;
