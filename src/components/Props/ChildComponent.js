import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler("child component")}>
        Click Here
      </button>
    </div>
  );
}
export default ChildComponent;
