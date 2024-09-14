// App.jsx
import React, { useState } from "react";
import Profile from "../src/components/Profile";
import AccountSettings from "../src/components/AccountSettings";
import Parent from "../src/components/Parent";

const App = () => {
  // A big object with nested properties
  const [userData] = useState({
    name: "Jane Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Springfield",
      state: "Illinois"
    },
    contact: {
      email: "jane.doe@example.com",
      phone: "555-1234"
    }
  });

  // Lifted state containing user information for state-lifting demo
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@exampleeeeee.com",
  });

  // Function to update the user's email
  const updateEmail = (newEmail) => {
    setUser((prevUser) => ({
      ...prevUser,
      email: newEmail
    }));
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      
      {/* Passing the big object to the Parent component */}
      <Parent use={userData} user={user} />

      {/* Passing the user object and updateEmail function to child components for state-lifting */}
      <Profile user={user} />
      <AccountSettings user={user} updateEmail={updateEmail} />
    </div>
  );
};

export default App;
