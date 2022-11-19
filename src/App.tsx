import './App.css';
// import "./assets/gdg.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CheckProvider } from './components/CheckProvider';
import { Home, MensNcaabTeam, Login } from "./pages";


function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;