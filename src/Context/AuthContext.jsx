import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuth, setIsAuth] = useState(true);

  const isMobile = window.innerWidth <= 400;

  const state = {
    currentUser,
    setCurrentUser,
    isAuth,
    setIsAuth,
    isMobile,
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.element,
};
