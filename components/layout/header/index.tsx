import { FC } from 'react';

import { MotionBox } from '@/components/ui';

import { outputVariants } from 'animations/pages';

import { Logo } from '@/components/icons';
import MenuButton from './menu-button';
import useMediaQuery from '@/hooks/useMediaQuery';
import Nav from './nav/Nav';

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  const isMobileSize = useMediaQuery('(max-width: 479px)');

  return (
    <MotionBox
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      variants={outputVariants}
      initial='hidden'
      animate='show'
      transition={{ delay: 0.1 }}
    >
      <Logo css={{ h: '$8' }} />
      {!isMobileSize ? (
        <Nav />
      ) : (
        <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      )}
    </MotionBox>
  );
};

export default Header;
