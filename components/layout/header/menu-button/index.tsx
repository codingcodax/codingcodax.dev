import { Button } from '@/components/ui';
import MenuIcon from './MenuIcon';
import { FC } from 'react';

interface MenuButtonProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MenuButton: FC<MenuButtonProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <Button
      variant='unstyled'
      css={{
        p: '$0',
        w: '$12',
        h: '$12',
      }}
      aria-label='menu toggle button'
      onClick={toggleMenu}
    >
      <MenuIcon isOpen={isMenuOpen} />
    </Button>
  );
};

export default MenuButton;
