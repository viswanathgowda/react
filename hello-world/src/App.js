import "./App.css";
import { Welcome1, Welcome2 } from "./components/welcome";
import Greet from "./components/Greet";
import { Hello } from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Welcome1 />
      <Welcome2 />
      <Greet />
      <Hello />
    </div>
  );
}

export default App;
