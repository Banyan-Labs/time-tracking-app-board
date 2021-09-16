import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  // const [user, setUser] = useState({ userId: "1", firstName: "Zaphod", lastName: "Beeblebrox", email: "hitchhicker@galaxy.net"});
  // const [isAuth, setIsAuth] = useState(true);

  /* isMobile is not updating on active window resizing */
  // const isMobile = window.innerWidth < 425;
  const [isMobile, setIsMobile] = useState(window.innerWidth < 425);
  useEffect(() => {
    setIsMobile(window.innerWidth < 425);
  }, [window.innerWidth]);

  const state = {
    user,
    setUser,
    isAuth,
    setIsAuth,
    isMobile,
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.array.isRequired,
};
