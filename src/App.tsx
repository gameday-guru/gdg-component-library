import './App.css';
// import "./assets/gdg.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CheckProvider } from './components/CheckProvider';
import { Home } from "./pages";


function App() {
  return (
    <div className="App">
      <CheckProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </CheckProvider>
    </div>
  );
}

export default App;