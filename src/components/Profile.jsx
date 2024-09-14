// Profile.js
import React, { useContext } from 'react';
import AuthContext from "../ContextAPI/AuthContext";

const Profile = () => {
  const { user, isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <h2>Please log in to view your profile.</h2>;
  }

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
