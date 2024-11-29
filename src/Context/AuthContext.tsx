import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<{ isAuthenticated: boolean } | null>(null);
export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsAuthenticated(true);
  //   }, 4000);
  // }, []);

  const contextValue = {
    isAuthenticated,
  };
  return (
    <>
      <AuthContext.Provider value={contextValue}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => useContext(AuthContext);
