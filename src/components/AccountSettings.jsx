// AccountSettings.jsx
import React, { useState } from "react";

const AccountSettings = ({ user, updateEmail }) => {
  const [newEmail, setNewEmail] = useState(user.email);

  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmail(newEmail);  // Trigger email update
  };

  return (
    <div>
      <h2>Account Settings Component</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Update Email:
          <input
            type="email"
            value={newEmail}
            onChange={handleEmailChange}
          />
        </label>
        <button type="submit">Update Email</button>
      </form>
    </div>
  );
};

export default AccountSettings;
