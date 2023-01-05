import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css'

export function App(style : any) {

  return (
    <div style={style} className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<></>}/>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;