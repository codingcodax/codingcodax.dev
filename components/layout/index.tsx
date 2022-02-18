import { FC, ReactNode } from 'react';
import dynamic from 'next/dynamic';

import useToggleMenu from '@/hooks/useToggleMenu';

import Header from './header';
import useMediaQuery from '@/hooks/useMediaQuery';

const Footer = dynamic(() => import('./footer'), { ssr: false });

const MobileNav = dynamic(() => import('./header/nav/MobileNav'), {
  ssr: false,
});

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
