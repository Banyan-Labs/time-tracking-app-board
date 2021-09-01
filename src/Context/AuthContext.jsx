import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuth, setIsAuth] = useState(true);

  var w = window.innerWidth;

  const [isMobile, setIsMobile] = useState(w <= 400 ? true : false);

  console.log(isMobile, 'test');

  const state = {
    currentUser,
    setCurrentUser,
    isAuth,
    setIsAuth,
    isMobile,
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};
