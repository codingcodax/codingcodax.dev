import { FC, ReactNode } from 'react';

import useToggleMenu from '@/hooks/useToggleMenu';

import Footer from './footer';
import Header from './header';
import useMediaQuery from '@/hooks/useMediaQuery';
import MobileNav from './header/nav/MobileNav';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { isMenuOpen, toggleMenu } = useToggleMenu();
  const isMobileSize = useMediaQuery('(max-width: 479px)');

  return (
    <>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      {isMenuOpen && isMobileSize ? (
        <MobileNav toggleMenu={toggleMenu} />
      ) : (
        children
      )}
      <Footer />
    </>
  );
};

export default Layout;
