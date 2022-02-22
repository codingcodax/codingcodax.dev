import { FC } from 'react';
import { useRouter } from 'next/router';

import { MotionBox, Divider } from '@/components/ui';
import NavItem from './NavItem';
import { containerVariants } from 'animations/mobileNav';
import { mainRoutes, subRoutes } from '@/data/links';

interface MobileNavProps {
  toggleMenu: () => void;
}

const MobileNav: FC<MobileNavProps> = ({ toggleMenu }) => {
  const router = useRouter();

  console.log(router.asPath);

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
        {mainRoutes.map(({ name, href, isExternal, isActive }) => (
          <NavItem
            key={name}
            href={href}
            isActive={isActive(router.asPath, href)}
            onClick={toggleMenu}
            isExternal={isExternal}
          >
            {name}
          </NavItem>
        ))}

        <Divider css={{ width: '50vw' }} />

        {subRoutes.map(({ name, href, isExternal, isActive }) => (
          <NavItem
            key={name}
            href={href}
            isActive={isActive(router.asPath, href)}
            isExternal={isExternal}
            onClick={toggleMenu}
          >
            {name}
          </NavItem>
        ))}
      </MotionBox>
    </MotionBox>
  );
};

export default MobileNav;
