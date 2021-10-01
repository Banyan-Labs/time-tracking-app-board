import React, { useContext, useState, useEffect } from 'react';
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
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { logout, loginWithRedirect, isAuthenticated, isLoading, user } =
    useAuth0();
  const store = useContext(AuthContext);
  store.setIsAuth(isAuthenticated);
  const [isMobile] = useState(store.isMobile);
  const [isOpen, setIsOpen] = useState(false);
  const [navLinks] = useState(
    store.isAuth ? ['/dashboard'] : ['/sign-in', '/sign-up']
  );
  const history = useHistory();

  useEffect(() => {
    if (!isLoading && user && isAuthenticated) {
      store.setUser({
        ...user,
      });
      history.push('/dashboard');
    }
  }, [isLoading]);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer>
      <LogoWrapper onClick={() => history.push('/')}>
        <LogoImage src={Image} />
        <LogoTitle>Time Tab</LogoTitle>
      </LogoWrapper>
      {!isMobile ? (
        <NavLinksWrapper>
          {navLinks.map(
            (link) =>
              !isAuthenticated && (
                <NavLinkItem
                  to={link === '/dashboard' ? link : ''}
                  key={uuid()}
                  onClick={() =>
                    link !== '/dashboard' ? loginWithRedirect() : null
                  }
                >
                  {link.replace(/./g, (x, i) =>
                    /\//.test(x) ? '' : i === 1 ? x.toUpperCase() : x
                  )}
                </NavLinkItem>
              )
          )}

          {isAuthenticated && (
            <NavLinkItem to={'/logout'} onClick={() => logout()}>
              Logout
            </NavLinkItem>
          )}
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
          {isAuthenticated && (
            <NavLinkItem to={'/logout'} onClick={() => logout()}>
              Logout
            </NavLinkItem>
          )}
        </MobileLinksLayout>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
