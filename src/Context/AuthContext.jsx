import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuth, setIsAuth] = useState(true);

  const state = {
    currentUser,
    setCurrentUser,
    isAuth,
    setIsAuth,
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};
