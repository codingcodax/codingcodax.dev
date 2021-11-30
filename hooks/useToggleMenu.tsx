import { useState } from 'react';

type ToggleMenu = () => { isMenuOpen: boolean; toggleMenu: () => void };

const useToggleMenu: ToggleMenu = () => {
  const [isMenuOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => setMenuIsOpen((v) => !v);

  return { isMenuOpen, toggleMenu };
};

export default useToggleMenu;
