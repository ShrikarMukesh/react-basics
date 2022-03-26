import "./App.css";
import { Greet } from "./components/Greet";
import MyWelcome from "./components/Welcome";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Greet name="Ram" heroName="Dinesh">
        <p>This is children</p>
      </Greet>
      <Greet name="Laxman" heroName="G" />
      <Greet name="Bheem" heroName="B" />
      <MyWelcome name="Prpos Inside Welcome Component">
        <p>Welcome Component</p>
      </MyWelcome>
      <Hello />
    </div>
  );
}

export default App;
