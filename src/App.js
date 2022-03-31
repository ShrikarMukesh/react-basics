import "./App.css";
//import Message from "./components/State/Message";
//import Counter from "./components/State/Counter";
//import { Greet } from "./components/Greet";
//import MyWelcome from "./components/Welcome";
//import Hello from "./components/Hello";
//import FunctionClick from "./components/EventHandling/FunctionClick";
//import ClassClick from "./components/EventHandling/ClassClick";
//import EventBind from "./components/EventBinding/EventBind";
import ParentComponent from "./components/Props/ParentComponent";
function App() {
  return (
    <div className="App">
      <ParentComponent />
      {/* <EventBind />*/}
      {/*<FunctionClick /> */}
      {/*<ClassClick />*/}
      {/* <Counter />*/}
      {/*<Message /> */}
      {/* 
      <Greet name="Ram" heroName="Dinesh">
        <p>This is children</p>
      </Greet>

      <Greet name="Laxman" heroName="G">
        <button>Send</button>
      </Greet>
      <Greet name="Bheem" heroName="B" />
      <MyWelcome name="Prpos Inside Welcome Component">
        <p>Welcome Component</p>
      </MyWelcome>
      <MyWelcome name="Second">
        <button>click me</button>
      </MyWelcome>
      <Hello />*/}
    </div>
  );
}

export default App;
