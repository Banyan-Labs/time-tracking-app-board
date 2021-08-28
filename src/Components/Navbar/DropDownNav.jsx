import React from 'react'
import { Dropdown, DropdownLink, DropdownBtn, NavBtnLink, DropdownMenu  } from './style';

const DropDownNav = () => {
    return (
          <Dropdown>

        <DropdownMenu>
        <DropdownLink to="/about" activeStyle>
          About
        </DropdownLink>
        <DropdownLink to="/events" activeStyle>
          Events
        </DropdownLink>
        <DropdownLink to="/annual" activeStyle>
          Annual Report
        </DropdownLink>
        <DropdownLink to="/team" activeStyle>
          Teams
        </DropdownLink>
        <DropdownLink to="/blogs" activeStyle>
          Blogs
        </DropdownLink>
        <DropdownLink to="/sign-up" activeStyle>
          Sign Up
        </DropdownLink>
        {/* Second Nav */}
        <DropdownBtn>
        <NavBtnLink to="/signin">Sign In</NavBtnLink>
      </DropdownBtn>
      </DropdownMenu>

          </Dropdown>
    )
}

export default DropDownNav;
