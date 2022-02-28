import { FC, ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { useMediaQuery, useToggleMenu } from '~/hooks';
import { Header } from '~/components/containers';

const Footer = dynamic(() => import('../containers/Footer'), { ssr: false });

const MobileNav = dynamic(() => import('../containers/MobileNav'), {
  ssr: false,
});

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { isMenuOpen, toggleMenu } = useToggleMenu();
  const isTabletSize = useMediaQuery('(max-width: 600px)');

  return (
    <>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      {isMenuOpen && isTabletSize ? (
        <MobileNav toggleMenu={toggleMenu} />
      ) : (
        children
      )}
      <Footer />
    </>
  );
};

export default Layout;
