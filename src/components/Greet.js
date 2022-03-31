import React from "react";
import "./Greet.css";

// function Greet() {
//   return (
//     <div class="greet">
//       <h1>Greet World</h1>
//     </div>
//   );
// }
export const Greet = (props) => {
  const { name, heroName } = props;
  console.log(props);
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
      {props.children}
    </div>
  );
};

//export default Greet;
