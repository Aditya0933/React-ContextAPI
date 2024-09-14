// App.js
import React from 'react';
import { AuthProvider } from './ContextAPI/AuthContext';
import Profile from './components/Profile';
import Login from "./components/Login";

const App = () => {
  return (
    <AuthProvider>
      <h1>Context API Example: User Authentication</h1>
      <Profile />
      <Login />
    </AuthProvider>
  );
};

export default App;
