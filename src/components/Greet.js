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
  console.log(props);
  return (
    <h1>
      Hello {props.name} a.k.a {props.heroName}
    </h1>
  );
};

//export default Greet;
