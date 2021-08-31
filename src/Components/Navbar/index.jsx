import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavModal,
} from './style';
import DropDownNav from './DropDownNav';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <Nav>
      <Bars onClick={toggleIsOpen} />

      <NavModal isOpen={isOpen}>
        <DropDownNav />
      </NavModal>
      <NavMenu>
        <NavLink to='/'>Homepage</NavLink>
        <NavLink to='/sign-up'>Sign Up</NavLink>
        <NavLink to='/dashboard'>Dashboard</NavLink>
        {/* Second Nav */}
      </NavMenu>
      <NavBtn>
        <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
