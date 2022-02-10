import { FC } from 'react';

import { Box } from '@/components/ui';

import { Logo } from '@/components/icons';
import MenuButton from './menu-button';
import useMediaQuery from '@/hooks/useMediaQuery';
import Nav from './nav/Nav';
import ToggleTheme from './ToggleTheme';

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  const isMobileSize = useMediaQuery('(max-width: 479px)');

  return (
    <Box
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {isMobileSize && <ToggleTheme />}
      <Logo css={{ h: '$8' }} />
      {!isMobileSize ? (
        <Nav />
      ) : (
        <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      )}
    </Box>
  );
};

export default Header;
