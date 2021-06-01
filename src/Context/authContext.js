import React, {createContext, useState} from 'react'

// initialize the context

initAuthContext = {
    user: null,
    isLoggedIn: false,
}

// create context

export const AuthContext = createContext(initAuthContext);

// 4. make provider => value / children

export const AuthContextProvider = ({ children }) => {
    const { user, setUser } = useState(initAuthContext.user);
    const { isLoggedIn, setIsLoggedIn } = useState(initAuthContext.isLoggedIn);
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                isLoggedIn,
                setIsLoggedIn,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};