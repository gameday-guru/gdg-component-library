import './App.css';
// import "./assets/gdg.css"
import { LeftRight } from './components/output/containers/general';
import { Button, PegPill } from './components';
import { SideFeed } from "./components/output/containers";
import { SearchBar } from "./components/input/text/SearchBar";
import { Pill } from "./components/input/unary/Pill";
import { Back } from "./components/navigation/indicators/Back";
import { Carousel } from "./components/navigation/panels/Carousel";
import { Snu } from "./assemblies/meta/universal";
import { FilterSet } from "./components/output/containers/filter"
import { Vs } from "./components/output/indicators/label/Vs";
import { HeadToHead } from "./components/output/containers/comparison/HeadToHead";
import { Stacked } from "./components/output/containers/comparison/Stacked";
import { Dotousel } from "./components/navigation/panels/Dotousel";
import { TextInput } from "./components/input/text/TextInput";
import { Table, Tablelike } from "./components/output/indicators/table/Table";
import { ClosedBetaLogin } from './assemblies/user/login/ClosedBetaLogin/ClosedBetaLogin';
import { Login } from "./pages/login/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CheckProvider } from './components/CheckProvider';
import { Sidebar } from "./assemblies/meta/universal/Sidebar";
import { Home } from "./pages/home/Home/Home";
import { Ncaab } from "./pages/model/ncaab/Ncaab/Ncaab";
import { NcaabTeam } from "./pages/model/ncaab/Ncaab/NcaabTeam";


function App() {
  return (
    <div className="App">
      <CheckProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/models" element={<div></div>}/>
            <Route path="/models/ncaab" element={<Ncaab/>}/>
            <Route path="/models/ncaab/team/:id" element={<NcaabTeam/>}/>
          </Routes>
        </BrowserRouter>
      </CheckProvider>
    </div>
  );
}

export default App;