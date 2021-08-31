import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #63d471;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 400px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 400px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 400px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

// dropdown

export const NavModal = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

export const Dropdown = styled.div`
  display: block;
  position: absolute;
  right: 8.2px;
  width: 100px;
  height: auto;
  background: white;
  top: 60px;
  border: 1px solid black;
  @media screen and (min-width: 400px) {
    display: none;
  }
`;

export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 400px) {
    display: none;
  }
`;

export const DropdownLink = styled(Link)`
  color: #808080;
  width: 100%;
  margin-left: 4px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

export const DropdownBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  width: 100%;
  @media screen and (min-width: 400px) {
    display: none;
  }
`;
