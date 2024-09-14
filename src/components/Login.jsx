// Login.js
import React, { useContext } from 'react';
import AuthContext from "../ContextAPI/AuthContext";

const Login = () => {
  const { login, isAuthenticated } = useContext(AuthContext);

  const handleLogin = () => {
    const userData = { name: 'John Doe', email: 'john.doe@example.com' };
    login(userData); // Simulate logging in a user
  };

  return (
    <div>
      {isAuthenticated ? (
        <h2>You are already logged in!</h2>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default Login;
