import React from "react";
import {
  Dropdown,
  DropdownLink,
  DropdownBtn,
  NavBtnLink,
  DropdownMenu,
} from "./style";

const DropDownNav = () => {
  return (
    <Dropdown>
      <DropdownMenu>
        <DropdownLink to="/">homepage</DropdownLink>
        <DropdownLink to="/sign-up">Sign Up</DropdownLink>
        <DropdownLink to="/dashboard">Dashboard</DropdownLink>

        {/* Second Nav */}
        <DropdownBtn>
          <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
        </DropdownBtn>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDownNav;
