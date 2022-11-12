import './App.css';
// import "./assets/gdg.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CheckProvider } from './components/CheckProvider';
import { Home, MensNcaabTeam } from "./pages";


function App() {
  return (
    <div className="App">
      <MensNcaabTeam/>
    </div>
  );
}

export default App;