import React from "react";
const Hello = () => {
  // return (
  //   <div class="hello">
  //     <p>I am Writing JSX Code</p>
  //   </div>
  // );
  return React.createElement(
    "div",
    { id: "hello", className: "dummy" },
    React.createElement("h1", null, "Real Madrid")
  );
};
export default Hello;
