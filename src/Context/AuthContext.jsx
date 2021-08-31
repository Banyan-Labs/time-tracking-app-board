import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = function({ children }) {
    const [currentUser, setCurrentUser] = useState(null);

    // const setAuth = (data) => {
    //     sessionStorage.setItem('username', data.user.username);
    //     sessionStorage.setItem('isAdmin', data.user.isAdmin);
    //     setCurrentUser(data.user);
    // }

    return (
        <AuthContext.Provider 
        value={{ currentUser, setCurrentUser }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(user) {
    return useContext(AuthContext);
}