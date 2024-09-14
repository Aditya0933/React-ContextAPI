// SubChild.jsx
import React from "react";

const SubChild = (props) => {
  // Destructuring the big object inside the component
  const { name, age, address, contact } = props.usr;
  const { street, city, state } = address;
  const { phone } = contact;
  const { email } = props.upEmail;

  return (
    <div>
      <h3>This is the SubChild Component</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <h4>Address:</h4>
      <p>Street - {street}<br></br> City - {city}<br></br>State - {state}</p>
      <h4>Contact:</h4>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

export default SubChild;
