// AuthContext.js
import React, { createContext, useState } from 'react';

// Create the context
const AuthContext = createContext();

// AuthProvider component to wrap around the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User object, null if not logged in
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Login status

  // Function to simulate login
  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  // Function to simulate logout
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;