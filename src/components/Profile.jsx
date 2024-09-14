// Profile.jsx
import React from "react";

// Destructuring the user prop inside the component
const Profile = ({ user }) => {
  return (
    <div>
      <h2>Profile Component</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default Profile;
