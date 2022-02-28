import { FC } from 'react';

import { outputVariants } from '~/animations/pages';
import { useMediaQuery } from '~/hooks';
import { Logo } from '~/components/icons';
import { MotionBox } from '~/components/ui';
import { HamburgerMenu } from '~/components/atoms';

import Nav from './Nav';

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  const isTabletSize = useMediaQuery('(max-width: 600px)');

  return (
    <MotionBox
      animate='show'
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      initial='hidden'
      transition={{ delay: 0.1 }}
      variants={outputVariants}
    >
      <Logo css={{ h: '$8' }} />
      {!isTabletSize ? (
        <Nav />
      ) : (
        <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      )}
    </MotionBox>
  );
};

export default Header;
