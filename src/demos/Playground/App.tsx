import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
  import 'react-loading-skeleton/dist/skeleton.css'
  import { Playground } from './Playground';
  
  export function App(style : any) {
  
    return (
      <div style={style} className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Playground/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;