import { useState } from 'react';

import { ToggleMenu } from 'types';

const useToggleMenu: ToggleMenu = () => {
  const [isMenuOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => setMenuIsOpen((v) => !v);

  return { isMenuOpen, toggleMenu };
};

export default useToggleMenu;
