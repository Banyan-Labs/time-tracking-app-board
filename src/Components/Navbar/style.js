import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../styles/Color';

export const NavbarContainer = styled.nav`
  background: ${colors.green};
  height: 80px;
  display: flex;
  top: 0;
  position: sticky;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem calc((100vw - 1300px) / 2);
  z-index: 12;
  overflow: hidden;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  height: 35px;
  width: 35px;
  margin: 0 8px 0 16px;
`;

export const LogoTitle = styled.span`
  font-family: 'Audiowide';
  font-size: clamp(18px, 10vw, 24px);
`;

export const NavLinksWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const NavLinkItem = styled(Link)`
  font-family: 'Roboto';
  font-size: clamp(18px, 4vw, 18px);
  font-weight: 300;
  padding: 12px;
  color: black;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &.active {
    font-weight: 500;
  }

  &:hover {
    transform: scale(1.15);
    cursor: pointer;
  }
`;

export const MobileNavMenuButton = styled(FaBars)`
  font-size: 2.4rem;
  margin-right: 24px;
`;

export const CloseButton = styled(FaTimes)`
  font-size: 2.4rem;
  position: absolute;
  top: 34px;
  text-align: end;
  width: 100%;
`;

export const MobileLinksLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 0;
  background: ${colors.white};
  width: 250px;
  padding: 150px 30px 20px;
  transition: all 0.2s ease-in;

  &.closed {
    transform: translateY(-350px);
  }
`;
