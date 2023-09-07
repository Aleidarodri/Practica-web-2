import React from "react";

//Functional component representing an input element.
function Inputs({ value, onChange, name }) {
  return (
    <input
      className=" bg-white rounded-xl focus:outline-none pl-1"
      type="text"
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
      name={name}
    />
  );
}

export default Inputs;
