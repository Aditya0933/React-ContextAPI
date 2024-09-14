// Child.jsx
import React from "react";
import SubChild from "../components/SubChild";

const Child = (props) => {

  return (
    <div>
      <h3>This is the Child Component</h3>
      <SubChild usr={props.user} upEmail={props.updateEmail}/>
    </div>
  );
};

export default Child;
