import React, { useState } from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, NavModal } from "./style";
import DropDownNav from "./DropDownNav";

const Navbar = () => {

const [isOpen, setIsOpen] = useState(false);


const toggleIsOpen = () => setIsOpen(!isOpen)


  return (
    <Nav>
      <Bars onClick={toggleIsOpen} />


		{/* {isOpen&&<div>test2</div>} */}


		<NavModal isOpen={isOpen}> 
		<DropDownNav />
		</NavModal> 

		
      <NavMenu>
        <NavLink to="/about" activeStyle>
          About
        </NavLink>
        <NavLink to="/events" activeStyle>
          Events
        </NavLink>
        <NavLink to="/annual" activeStyle>
          Annual Report
        </NavLink>
        <NavLink to="/team" activeStyle>
          Teams
        </NavLink>
        <NavLink to="/blogs" activeStyle>
          Blogs
        </NavLink>
        <NavLink to="/sign-up" activeStyle>
          Sign Up
        </NavLink>
        {/* Second Nav */}
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/signin">Sign In</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
