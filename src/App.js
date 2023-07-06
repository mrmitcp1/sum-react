import logo from './logo.svg';
import './App.css';
import AddComponent from "./cpmponents/AddComponent";

function App() {
  return (
    <div className="App">
    <AddComponent firstNumber={1} secondNumber={2}/>
    </div>
  );
}

export default App;
