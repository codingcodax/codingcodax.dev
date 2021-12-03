import { FC } from 'react';

import { styled } from '@/theme/theme.config';

import { Logo } from '@/components/icons';
import MenuButton from './menu-button';
import useMediaQuery from '@/hooks/useMediaQuery';
import Nav from './nav/Nav';
import ToggleTheme from './ToggleTheme';

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const StyledHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Header: FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  const isMobileSize = useMediaQuery('(max-width: 479px)');

  return (
    <StyledHeader>
      {isMobileSize && <ToggleTheme />}
      <Logo css={{ h: '$8' }} />
      {!isMobileSize ? (
        <Nav />
      ) : (
        <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      )}
    </StyledHeader>
  );
};

export default Header;