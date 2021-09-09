import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import {
  CloseButton,
  LogoImage,
  LogoTitle,
  LogoWrapper,
  MobileLinksLayout,
  MobileNavMenuButton,
  NavbarContainer,
  NavLinkItem,
  NavLinksWrapper,
} from './style';
import { AuthContext } from '../../Context/AuthContext';
import Image from '../../resources/images/clockLogo1.png';

const Navbar = () => {
  const store = useContext(AuthContext);
  const [isMobile] = useState(store.isMobile);
  const [isOpen, setIsOpen] = useState(false);
  const [navLinks] = useState(
    store.isAuth ? ['/dashboard'] : ['/sign-in', '/sign-up', '/dev']
  );
  const history = useHistory();

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer>
      <LogoWrapper onClick={() => history.push('/')}>
        <LogoImage src={Image} />
        <LogoTitle>Time Tab</LogoTitle>
      </LogoWrapper>
      {!isMobile ? (
        <NavLinksWrapper>
          {navLinks.map((link) => (
            <NavLinkItem to={link} key={uuid()}>
              {link.replace(/./g, (x, i) =>
                /\//.test(x) ? '' : i === 1 ? x.toUpperCase() : x
              )}
            </NavLinkItem>
          ))}
        </NavLinksWrapper>
      ) : (
        <MobileNavMenuButton onClick={toggleIsOpen} />
      )}
      {isMobile && (
        <MobileLinksLayout className={isOpen ? '' : 'closed'}>
          <CloseButton onClick={toggleIsOpen} />
          {navLinks.map((link) => (
            <NavLinkItem to={link} key={uuid()} onClick={toggleIsOpen}>
              {link.replace(/./g, (x, i) =>
                /\//.test(x) ? '' : i === 1 ? x.toUpperCase() : x
              )}
            </NavLinkItem>
          ))}
        </MobileLinksLayout>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
