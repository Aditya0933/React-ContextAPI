// Parent.jsx
import React from "react";
import Child from "./Child";

const Parent = (pros) => {
  // Accessing the 'user' object from props
  return (
    <div>
      <h2>This is the Parent Component</h2>
      {/* Passing the 'user' object down to the Child component */}
      <Child user={pros.use} updateEmail={pros.user}/>
    </div>
  );
};

export default Parent;
