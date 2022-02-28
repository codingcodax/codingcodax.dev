import { FC } from 'react';

import { MenuIcon } from '~/components/icons';
import { Button } from '~/components/ui';

interface HamburgerMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerMenu: FC<HamburgerMenuProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <Button
      aria-label='menu toggle button'
      css={{
        p: '$0',
        w: '$12',
        h: '$12',
      }}
      variant='unstyled'
      onClick={toggleMenu}
    >
      <MenuIcon isOpen={isMenuOpen} />
    </Button>
  );
};

export default HamburgerMenu;
