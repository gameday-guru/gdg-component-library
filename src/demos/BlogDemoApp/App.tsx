import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css'
import { BlogArticle } from './BlogArticle';

export function App(style : any) {

  return (
    <div style={style} className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BlogArticle/>}/>
          <Route path="/:id" element={<BlogArticle/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;