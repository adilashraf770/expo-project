import React, { useState, createContext } from "react";

export const AuthContext = createContext();
export default function AuthContextProvider(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
}
