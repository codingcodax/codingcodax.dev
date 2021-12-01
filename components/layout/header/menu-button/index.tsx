import { Box } from '@/components/ui';
import MenuIcon from './MenuIcon';
import { FC } from 'react';

interface MenuButtonProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MenuButton: FC<MenuButtonProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <Box
      as='button'
      css={{
        p: '$0',
        w: '$12',
        h: '$12',
        bg: 'transparent',
        border: 'none',
        borderRadius: '$sm',
        cursor: 'pointer',
      }}
      aria-label='menu toggle button'
      onClick={toggleMenu}
    >
      <MenuIcon isOpen={isMenuOpen} />
    </Box>
  );
};

export default MenuButton;
