import "./App.css";
import { Welcome1, Welcome2 } from "./components/welcome";
import Greet from "./components/Greet";
import { Hello } from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Welcome1 name="Vishwa" designation="SDE" />
      <Welcome2 name="kishor" designation="project manager" />
      <Welcome2 name="Vaibhav" designation="SDE">
        <h1>Passing Children Data</h1>
      </Welcome2>
      <Greet name="passing props to class component" />
      <Hello />
    </div>
  );
}

export default App;
