import { NavItem } from './NavItem';

export const Navbar = () => {
  return (
    <div className='z-[1] flex gap-2'>
      <NavItem href='/'>Home</NavItem>
      <NavItem href='/work'>Work</NavItem>
      <NavItem href='/about'>About</NavItem>
      <NavItem href='/contact'>Contact</NavItem>
    </div>
  );
};
